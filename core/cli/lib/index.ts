import { program } from 'commander'
import { green } from 'kleur'
import { version } from '../package.json'
import NodeVersion from './modules/CheckNodeVersion'
import DefaultConfig from './modules/config/DefaultConfig'
import LocalConfig from './modules/config/LocalConfig'
import Files from './modules/Files'
import Package from './modules/Package'
import AltCss from './modules/questions/AltCss'
import AltHtml from './modules/questions/AltHtml'
import AltJs from './modules/questions/AltJs'
import DeploySetting from './modules/questions/DeploySetting'
import ProjectSetting from './modules/questions/ProjectSetting'
import SiteSetting from './modules/questions/SiteSetting'

process.stdin.resume()
process.on('SIGINT', (): void => {
  console.log(green('Bye !'))
  process.exit(0)
})
;(async (): Promise<void> => {
  program.version(version).parse(process.argv)

  /* Check Node.js version */
  const nodeVersion = new NodeVersion()
  if (!nodeVersion.check()) {
    nodeVersion.fail()
    return
  }
  const files$ = new Files()

  /* Project */
  const project = new ProjectSetting()
  await project.questions()

  const package$ = new Package(
    project.name(),
    project.version(),
    project.description(),
    project.author()
  )

  console.log('')

  /* Site */
  const site = new SiteSetting(project.author())
  await site.questions()

  console.log('')

  /* HTML template engine */
  const altHTML = new AltHtml()
  await altHTML.questions()

  package$.addDevDependencies(altHTML.taskLibrary())

  console.log('')

  /* CSS language */
  const altCSS = new AltCss()
  await altCSS.questions()

  package$.addDevDependencies(altCSS.taskLibrary())
  package$.addDevDependenciesObject(altCSS.dependencies())

  files$.add(altCSS.files())

  console.log('')

  /* JS preprocessor */
  const altJS = new AltJs()
  await altJS.questions()

  package$.addDevDependencies(altJS.preprocessorTaskLibrary())
  package$.addDevDependencies(altJS.frameworkTaskLibrary())
  package$.addDevDependenciesObject(altJS.dependencies())

  console.log('')

  /* Deploy */
  const deploy = new DeploySetting()
  await deploy.questions()

  /* Config: local.yml */
  const localConfig$ = new LocalConfig(deploy.dir())
  localConfig$.pugToPHP(altHTML.engine(), altHTML.ext())
  localConfig$.jsFramework(altJS.framework())
  localConfig$.tsconfig(altJS.preprocessor())

  /* Config: default,development,production.yml */
  const defaultConfig$ = new DefaultConfig(
    site.title(),
    site.url(),
    site.author(),
    site.description(),
    site.siteRoot()
  )

  // TODO: create .eslintrc.yml
  // TODO: create tsconfig.json
  // TODO: custom.d.ts
  // TODO: create src directory and template files
  // TODO: webpack.config.js

  /* create */
  await localConfig$.create()
  await defaultConfig$.create()
  package$.create()
})()
