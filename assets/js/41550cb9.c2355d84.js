"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[4172],{3987:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=o(5893),i=o(1151);const s={},r="bundle-diff",d={id:"tools/bundle-diff",title:"bundle-diff",description:"A simple tool for diffing two bundles. Useful for getting an overview of which",source:"@site/docs/tools/bundle-diff.md",sourceDirName:"tools",slug:"/tools/bundle-diff",permalink:"/rnx-kit/docs/tools/bundle-diff",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/bundle-diff.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"babel-preset-metro-react-native",permalink:"/rnx-kit/docs/tools/babel-preset-metro-react-native"},next:{title:"cli",permalink:"/rnx-kit/docs/tools/cli"}},a={},l=[{value:"Usage",id:"usage",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"I have a lot of unknown content sizes in my diff",id:"i-have-a-lot-of-unknown-content-sizes-in-my-diff",level:3},{value:"I have a lot of relative paths in my source map",id:"i-have-a-lot-of-relative-paths-in-my-source-map",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bundle-diff",children:"bundle-diff"}),"\n",(0,t.jsx)(n.p,{children:"A simple tool for diffing two bundles. Useful for getting an overview of which\nfiles are included in one bundle but not the other. For example, comparing a\nbundle produced by Webpack vs. one produced by Metro."}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"rnx-bundle-diff <a.jsbundle.map> <b.jsbundle.map>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"     +106    added  /~/node_modules/@babel/runtime/helpers/arrayWithHoles.js\n      +96    added  /~/node_modules/lodash-es/_realNames.js\n      +49    added  /~/node_modules/@babel/runtime/regenerator/index.js\n       +1  changed  /~/node_modules/react/index.js\n     -127  removed  /~/node_modules/querystring-es3/index.js\n     -286  removed  /~/node_modules/react-native/Libraries/Components/Picker/PickerAndroid.ios.js\n     -592  removed  /~/node_modules/react-native/Libraries/Components/Sound/SoundManager.js\n  unknown    added  /~/packages/awesome-app/lib/index.js\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that the numbers are in bytes, and based on the unminified code. They are\nmeant to give an idea of how big the file is, but could differ wildly depending\non a number of factors, including Babel plugins, Wepback config, TypeScript\ncompilation options, indentation etc."}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h3,{id:"i-have-a-lot-of-unknown-content-sizes-in-my-diff",children:"I have a lot of unknown content sizes in my diff"}),"\n",(0,t.jsxs)(n.p,{children:["If you're using TypeScript, you need to tell ",(0,t.jsx)(n.code,{children:"tsc"})," to also include source\ncontent in the source map:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'// tsconfig.json\n{\n  "compilerOptions": {\n    "inlineSources": true\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"i-have-a-lot-of-relative-paths-in-my-source-map",children:"I have a lot of relative paths in my source map"}),"\n",(0,t.jsxs)(n.p,{children:["If your project is using TypeScript and Webpack, you may experience that your\nsource maps don't properly map back to the source file. Try using\n",(0,t.jsx)(n.a,{href:"https://webpack.js.org/loaders/source-map-loader/",children:(0,t.jsx)(n.code,{children:"source-map-loader"})})," to\nclean up the paths:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// webpack.config.js\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.(js|(js)?bundle)($|\\?)/i,\n        enforce: "pre",\n        use: ["source-map-loader"],\n      },\n    ],\n  },\n};\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>r});var t=o(7294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);