const package = require('./package.json')
const date = new Date().toISOString().split('T')[0]

module.exports = {
  pathToDocsifyEntryPoint: '.',
  contents: ['_sidebar.md'],
  mainMdFilename: 'README.md',
  pathToPublic: `../output/${package.name} v${package.version} - ${date}.pdf`,
  removeTemp: true,
  pdfOptions: {
    scale: 0.8,
    format: 'A4',
    margin: {
      top: '2cm',
      bottom: '5cm',
      right: '2cm',
      left: '2cm',
    },
    displayHeaderFooter: true,
    headerTemplate: `
    <div style="color: lightgray; font-size: 8px; text-align: center; width: 100%;">
      ${package.description} v${package.version} (${date})
    </div>`,
    footerTemplate: `
    <div style="color: lightgray; font-size: 8px; text-align: center; width: 100%;">
      <span class="pageNumber"></span>/<span class="totalPages">
    </div>`,
  },
  emulateMedia: 'screen',
}
