import { program } from 'commander'
import { green } from 'kleur'
import { version } from '../package.json'
import NodeVersion from './modules/CheckNodeVersion'
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

  /* Project */
  const project = new ProjectSetting()
  await project.questions()

  const package$ = new Package(
    project.name(),
    project.version(),
    project.description(),
    project.author()
  )

  console.log(package$)
  console.log('')

  /* Site */
  const site = new SiteSetting(project.author())
  await site.questions()

  console.log('')

  /* HTML template engine */
  const altHTML = new AltHtml()
  await altHTML.questions()

  console.log('')

  /* CSS language */
  const altCSS = new AltCss()
  await altCSS.questions()

  console.log('')

  /* JS preprocessor */
  const altJS = new AltJs()
  await altJS.questions()

  console.log('')

  /* Deploy */
  const deploy = new DeploySetting()
  await deploy.questions()
})()
