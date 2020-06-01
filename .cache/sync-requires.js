const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/swapnil/Projects/newspaper/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/swapnil/Projects/newspaper/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/swapnil/Projects/newspaper/src/pages/index.js"))),
  "component---src-pages-page-2-tsx": hot(preferDefault(require("/Users/swapnil/Projects/newspaper/src/pages/page-2.tsx"))),
  "component---src-templates-posts-archive-js": hot(preferDefault(require("/Users/swapnil/Projects/newspaper/src/templates/posts/archive.js"))),
  "component---src-templates-posts-single-js": hot(preferDefault(require("/Users/swapnil/Projects/newspaper/src/templates/posts/single.js")))
}

