module.exports = {
  // Specify the file name
  //If there is no property, create it with 'sw.js'
  filename: 'sw.js',

  // Manifest: https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW
  manifest: {
    directoryIndex: 'index.html',
    globIgnores: ['node_modules/**/*']
  }
}
