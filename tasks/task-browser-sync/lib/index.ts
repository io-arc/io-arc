import { program } from 'commander'
import { version } from '../package.json'
import Bs from './modules/Bs'
;((): void => {
  program
    .version(version)
    .option('-p, --proxy <ip-address>', 'Proxy server address')
    .option(
      '--history <filepath>',
      'File paths used by the HTML5 HistoryAPI (e.g. /index.html)'
    )
    .parse(process.argv)

  const proxy = program.proxy || undefined
  const history = program.history || undefined

  const bs = new Bs(proxy, history)
  bs.run()
})()
