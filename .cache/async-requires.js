// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-layouts-post-template-js": () => import("C:\\Users\\lukes\\Documents\\GitHub\\wordpress-tutorial-site\\src\\layouts\\post-template.js" /* webpackChunkName: "component---src-layouts-post-template-js" */),
  "component---cache-dev-404-page-js": () => import("C:\\Users\\lukes\\Documents\\GitHub\\wordpress-tutorial-site\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("C:\\Users\\lukes\\Documents\\GitHub\\wordpress-tutorial-site\\src\\pages\\404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("C:\\Users\\lukes\\Documents\\GitHub\\wordpress-tutorial-site\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("C:\\Users\\lukes\\Documents\\GitHub\\wordpress-tutorial-site\\.cache\\data.json")

