webpackJsonp([0xc19374f83753],{206:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var n=l(2),r=a(n),u=l(23),d=a(u),o=l(41),f=function(e){var t=e.data;return r.default.createElement(o.BodyContainer,null,r.default.createElement("h1",null,"Latest Posts"),t.allMarkdownRemark.edges.map(function(e){return r.default.createElement("div",{key:e.id},r.default.createElement("h3",null,e.node.frontmatter.title),r.default.createElement("small",null,"Posted by ",e.node.frontmatter.author," on ",e.node.frontmatter.date),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement(d.default,{to:e.node.frontmatter.path},"More"),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("hr",null))}))};t.pageQuery="** extracted graphql fragment **";t.default=f}});
//# sourceMappingURL=component---src-pages-blog-js-386330e220713265adbe.js.map