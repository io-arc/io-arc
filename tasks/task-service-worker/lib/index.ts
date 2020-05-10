import { program } from 'commander'
import { version } from '../package.json'
import GenerateServiceWorker from './modules/GenerateServiceWorker'

program
  .version(version)
  .option('-t, --template', 'generate template')
  .parse(process.argv)

// TODO: 引数でテンプレート作成
if (program.template) {
  process.exit(1)
}

// create a service-worker
const generate = new GenerateServiceWorker()
generate.run()
