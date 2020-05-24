import { program } from 'commander'
import { version } from '../package.json'
import NodeVersion from './modules/CheckNodeVersion'
import ProjectSetting from './modules/questions/ProjectSetting'
import Package from './modules/Package'
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
})()
