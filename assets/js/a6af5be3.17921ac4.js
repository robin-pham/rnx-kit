"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[5994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,b=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(b,p(p({ref:t},m),{},{components:r})):n.createElement(b,p({ref:t},m))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},p="babel-plugin-import-path-remapper",i={unversionedId:"tools/babel-plugin-import-path-remapper",id:"tools/babel-plugin-import-path-remapper",title:"babel-plugin-import-path-remapper",description:"",source:"@site/docs/tools/babel-plugin-import-path-remapper.mdx",sourceDirName:"tools",slug:"/tools/babel-plugin-import-path-remapper",permalink:"/rnx-kit/docs/tools/babel-plugin-import-path-remapper",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/babel-plugin-import-path-remapper.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"align-deps",permalink:"/rnx-kit/docs/tools/align-deps"},next:{title:"babel-preset-metro-react-native",permalink:"/rnx-kit/docs/tools/babel-preset-metro-react-native"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"babel-plugin-import-path-remapper"},"babel-plugin-import-path-remapper"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@rnx-kit/babel-plugin-import-path-remapper")," remaps ",(0,a.kt)("inlineCode",{parentName:"p"},"**/lib/**")," imports to\n",(0,a.kt)("inlineCode",{parentName:"p"},"**/src/**"),". This is useful for packages that are not correctly exporting\neverything via their ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts"),", but you still want to consume the TypeScript\nfiles rather than the transpiled JavaScript."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"@rnx-kit/babel-plugin-import-path-remapper")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.js")," under\nplugins. For example, to remap all paths under the ",(0,a.kt)("inlineCode",{parentName:"p"},"@rnx-kit")," scope:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// babel.config.js\nmodule.exports = {\n  presets: ["module:metro-react-native-babel-preset"],\n  overrides: [\n    {\n      test: /\\.tsx?$/,\n      plugins: [\n        // @babel/plugin-transform-typescript doesn\'t support `const enum`s.\n        // See https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats\n        // for more details.\n        "const-enum",\n\n        [\n          "@rnx-kit/babel-plugin-import-path-remapper",\n          { test: (source) => source.startsWith("@rnx-kit/") },\n        ],\n      ],\n    },\n  ],\n};\n')),(0,a.kt)("p",null,"Or, if you're using ",(0,a.kt)("inlineCode",{parentName:"p"},"@rnx-kit/metro-config"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// babel.config.js\nconst { makeBabelConfig } = require("@rnx-kit/metro-config");\nmodule.exports = makeBabelConfig([\n  [\n    "@rnx-kit/babel-plugin-import-path-remapper",\n    { test: (source) => source.startsWith("@rnx-kit/") },\n  ],\n]);\n')),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"test"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"(source: string) => boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"[Required]")," A function returning whether the passed source should be redirected to another module.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"remap"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"(moduleName: string, path: string) => string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"[Optional]")," A function returning the module that should be used instead, e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"contoso/index.js")," -> ",(0,a.kt)("inlineCode",{parentName:"td"},"contoso/index.ts"),".")))))}u.isMDXComponent=!0}}]);