"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[2052],{4778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(5893),a=t(1151);const o={},i="react-native-lazy-index",s={id:"tools/react-native-lazy-index",title:"react-native-lazy-index",description:"react-native-lazy-index is a Hermes/RAM bundle friendly, bundle-time generated",source:"@site/docs/tools/react-native-lazy-index.md",sourceDirName:"tools",slug:"/tools/react-native-lazy-index",permalink:"/rnx-kit/docs/tools/react-native-lazy-index",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/react-native-lazy-index.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"react-native-host",permalink:"/rnx-kit/docs/tools/react-native-host"},next:{title:"third-party-notices",permalink:"/rnx-kit/docs/tools/third-party-notices"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Why",id:"why",level:2},{value:"Contributing",id:"contributing",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"react-native-lazy-index",children:"react-native-lazy-index"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"react-native-lazy-index"})," is a Hermes/RAM bundle friendly, bundle-time generated\n",(0,r.jsx)(n.code,{children:"index.js"}),". Improve your app startup time by only loading features you'll use on\ndemand."]}),"\n",(0,r.jsxs)(n.p,{children:["For information on RAM bundles and inline requires, see\n",(0,r.jsx)(n.a,{href:"https://reactnative.dev/docs/ram-bundles-inline-requires",children:"React Native Performance"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you use ",(0,r.jsx)(n.a,{href:"https://github.com/callstack/haul",children:"Haul"}),", also take a look at their\n",(0,r.jsx)(n.a,{href:"https://github.com/callstack/haul/blob/2c68e97766f9f6c2632c46e40631bd7aaacdc75b/docs/CLI%20Commands.md#haul-ram-bundle",children:"documentation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm install --save @rnx-kit/react-native-lazy-index\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"react-native-lazy-index"})," uses\n",(0,r.jsx)(n.a,{href:"https://github.com/kentcdodds/babel-plugin-codegen#configure-with-babel",children:(0,r.jsx)(n.code,{children:"babel-plugin-codegen"})}),",\nso you'll need to configure Babel to include it. The recommended way is to add\nit to your ",(0,r.jsx)(n.code,{children:".babelrc"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:' {\n   "presets": ["module:metro-react-native-babel-preset"],\n   "plugins": [\n+    "codegen"\n   ]\n }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In your ",(0,r.jsx)(n.code,{children:"index.js"}),", import ",(0,r.jsx)(n.code,{children:"@rnx-kit/react-native-lazy-index"})," and pass to it the\nfeatures that should be lazy loaded. In the example below, we register four\nentry points:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// @codegen\nmodule.exports = require("@rnx-kit/react-native-lazy-index")({\n  SomeFeature: "@awesome-app/some-feature",\n  "callable:AnotherFeature": "@awesome-app/another-feature",\n  YetAnotherFeature: "@awesome-app/yet-another-feature",\n  FinalFeature: "@awesome-app/final-feature",\n});\n'})}),"\n",(0,r.jsxs)(n.p,{children:["By default, a call to ",(0,r.jsx)(n.code,{children:"AppRegistry"})," is generated using the key as the app key,\nand the value is the name of the module containing the app. If the key is\nprefixed with ",(0,r.jsx)(n.code,{children:"callable:"}),", a call to ",(0,r.jsx)(n.code,{children:"BatchedBridge"})," will be generated."]}),"\n",(0,r.jsx)(n.p,{children:"That's it!"}),"\n",(0,r.jsx)(n.h2,{id:"why",children:"Why"}),"\n",(0,r.jsxs)(n.p,{children:["With a naive ",(0,r.jsx)(n.code,{children:"index.js"}),", all features will be loaded when your app starts and\nReact Native is initialized for the first time."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import "@awesome-app/some-feature";\nimport "@awesome-app/another-feature";\nimport "@awesome-app/yet-another-feature";\nimport "@awesome-app/final-feature";\n'})}),"\n",(0,r.jsx)(n.p,{children:"By loading features on demand, we can improve app startup time."}),"\n",(0,r.jsxs)(n.p,{children:["With ",(0,r.jsx)(n.code,{children:"react-native-lazy-index"}),", we no longer load all features up front.\nInstead, ",(0,r.jsx)(n.code,{children:"index.js"})," wraps calls to ",(0,r.jsx)(n.code,{children:"AppRegistry.registerComponent"})," and\n",(0,r.jsx)(n.code,{children:"BatchedBridge.registerCallableModule"}),", deferring the import of a feature until\nit is used. Features that are never used, are never loaded."]}),"\n",(0,r.jsxs)(n.p,{children:["When you import ",(0,r.jsx)(n.code,{children:"react-native-lazy-index"}),", something similar to below is\ngenerated:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const { AppRegistry } = require("react-native");\nconst BatchedBridge = require("react-native/Libraries/BatchedBridge/BatchedBridge");\n\nAppRegistry.registerComponent("SomeFeature", () => {\n  // We\'ll import the module the first time "SomeFeature" is accessed.\n  require("@awesome-app/some-feature");\n  // "SomeFeature" is now overwritten and we can return the real component.\n  // Subsequent calls to "SomeFeature" will no longer go through this wrapper.\n  return AppRegistry.getRunnable("SomeFeature").componentProvider();\n});\n\nBatchedBridge.registerLazyCallableModule("AnotherFeature", () => {\n  // We\'ll import the module the first time "AnotherFeature" is accessed.\n  require("@awesome-app/another-feature");\n  // "AnotherFeature" is now overwritten and we can return the real component.\n  // Subsequent calls to "AnotherFeature" will no longer go through this\n  // wrapper.\n  return BatchedBridge.getCallableModule("AnotherFeature");\n});\n\nAppRegistry.registerComponent("YetAnotherFeature", () => {\n  // We\'ll import the module the first time "YetAnotherFeature" is accessed.\n  require("@awesome-app/yet-another-feature");\n  // "YetAnotherFeature" is now overwritten and we can return the real\n  // component. Subsequent calls to "YetAnotherFeature" will no longer go\n  // through this wrapper.\n  return AppRegistry.getRunnable("YetAnotherFeature").componentProvider();\n});\n\nAppRegistry.registerComponent("FinalFeature", () => {\n  // We\'ll import the module the first time "FinalFeature" is accessed.\n  require("@awesome-app/final-feature");\n  // "FinalFeature" is now overwritten and we can return the real component.\n  // Subsequent calls to "FinalFeature" will no longer go through this wrapper.\n  return AppRegistry.getRunnable("FinalFeature").componentProvider();\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"contributing",children:"Contributing"}),"\n",(0,r.jsxs)(n.p,{children:["This project welcomes contributions and suggestions. Most contributions require\nyou to agree to a Contributor License Agreement (CLA) declaring that you have\nthe right to, and actually do, grant us the rights to use your contribution. For\ndetails, visit ",(0,r.jsx)(n.a,{href:"https://cla.opensource.microsoft.com",children:"https://cla.opensource.microsoft.com"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"When you submit a pull request, a CLA bot will automatically determine whether\nyou need to provide a CLA and decorate the PR appropriately (e.g., status check,\ncomment). Simply follow the instructions provided by the bot. You will only need\nto do this once across all repos using our CLA."}),"\n",(0,r.jsxs)(n.p,{children:["This project has adopted the\n",(0,r.jsx)(n.a,{href:"https://opensource.microsoft.com/codeofconduct/",children:"Microsoft Open Source Code of Conduct"}),".\nFor more information see the\n",(0,r.jsx)(n.a,{href:"https://opensource.microsoft.com/codeofconduct/faq/",children:"Code of Conduct FAQ"})," or\ncontact ",(0,r.jsx)(n.a,{href:"mailto:opencode@microsoft.com",children:"opencode@microsoft.com"})," with any\nadditional questions or comments."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);