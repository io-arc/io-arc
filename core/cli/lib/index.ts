import { program } from 'commander'
import { green } from 'kleur'
import { version } from '../package.json'
import NodeVersion from './modules/CheckNodeVersion'
import Package from './modules/Package'
import ProjectSetting from './modules/questions/ProjectSetting'
import SiteSetting from './modules/questions/SiteSetting'

process.on('SIGINT', (): void => {
  process.exit(0)
})
process.on('exit', (): void => {
  console.log(green('Bye !'))
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
})()
