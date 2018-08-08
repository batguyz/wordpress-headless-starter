// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-layouts-post-template-js": preferDefault(require("C:\\Users\\lukes\\Documents\\GitHub\\wordpress-tutorial-site\\src\\layouts\\post-template.js")),
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\lukes\\Documents\\GitHub\\wordpress-tutorial-site\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\lukes\\Documents\\GitHub\\wordpress-tutorial-site\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\lukes\\Documents\\GitHub\\wordpress-tutorial-site\\src\\pages\\index.js"))
}

