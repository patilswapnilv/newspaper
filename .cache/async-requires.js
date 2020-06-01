// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-tsx": () => import("./../src/pages/page-2.tsx" /* webpackChunkName: "component---src-pages-page-2-tsx" */),
  "component---src-templates-posts-archive-js": () => import("./../src/templates/posts/archive.js" /* webpackChunkName: "component---src-templates-posts-archive-js" */),
  "component---src-templates-posts-single-js": () => import("./../src/templates/posts/single.js" /* webpackChunkName: "component---src-templates-posts-single-js" */)
}

