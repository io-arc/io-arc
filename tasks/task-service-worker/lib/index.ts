import { program } from 'commander'
import { version } from '../package.json'
import GenerateServiceWorker from './modules/GenerateServiceWorker'
import { templateCreate } from './modules/Template'
;(() => {
  program
    .version(version)
    .option('-t, --template', 'generate template')
    .parse(process.argv)

  // Create a template
  if (program.template) {
    templateCreate()
    return
  }

  // create a service-worker
  const generate = new GenerateServiceWorker()
  generate.run()
})()
