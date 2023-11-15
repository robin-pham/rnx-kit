"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[5216],{1688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(5893),i=n(1151);const c={},s="metro-plugin-duplicates-checker",l={id:"tools/metro-plugin-duplicates-checker",title:"metro-plugin-duplicates-checker",description:"@rnx-kit/metro-plugin-duplicates-checker checks for duplicate packages in your",source:"@site/docs/tools/metro-plugin-duplicates-checker.md",sourceDirName:"tools",slug:"/tools/metro-plugin-duplicates-checker",permalink:"/rnx-kit/docs/tools/metro-plugin-duplicates-checker",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/metro-plugin-duplicates-checker.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"metro-plugin-cyclic-dependencies-detector",permalink:"/rnx-kit/docs/tools/metro-plugin-cyclic-dependencies-detector"},next:{title:"metro-plugin-typescript",permalink:"/rnx-kit/docs/tools/metro-plugin-typescript"}},o={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"metro-plugin-duplicates-checker",children:"metro-plugin-duplicates-checker"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@rnx-kit/metro-plugin-duplicates-checker"})," checks for duplicate packages in your\nbundle."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.p,{children:"There are several ways to use this package."}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"recommended"})," way is to add it as a plugin in your ",(0,r.jsx)(t.code,{children:"metro.config.js"})," using\n",(0,r.jsx)(t.code,{children:"@rnx-kit/metro-serializer"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:' const { makeMetroConfig } = require("@rnx-kit/metro-config");\n+const {\n+  DuplicateDependencies,\n+} = require("@rnx-kit/metro-plugin-duplicates-checker");\n+const { MetroSerializer } = require("@rnx-kit/metro-serializer");\n\n module.exports = makeMetroConfig({\n   serializer: {\n+    customSerializer: MetroSerializer([DuplicateDependencies()]),\n   },\n });\n'})}),"\n",(0,r.jsx)(t.p,{children:"You can also check for duplicate packages after a bundle is created:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const {\n  checkForDuplicatePackagesInFile,\n} = require("@rnx-kit/metro-plugin-duplicates-checker");\n\ncheckForDuplicatePackagesInFile(pathToSourceMapFile, {\n  ignoredModules: [],\n  bannedModules: [],\n});\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If you have a source map object, you can pass that directly to\n",(0,r.jsx)(t.code,{children:"checkForDuplicatePackages()"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const {\n  checkForDuplicatePackages,\n} = require("@rnx-kit/metro-plugin-duplicates-checker");\n\ncheckForDuplicatePackages(mySourceMap, {\n  ignoredModules: [],\n  bannedModules: [],\n});\n'})}),"\n",(0,r.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Key"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Default"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"bannedModules"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"string[]"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"[]"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"List of modules that are banned."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"ignoredModules"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"string[]"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"[]"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"List of modules that can be ignored."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"throwOnError"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"boolean"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"true"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Whether to throw when duplicates are found."})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(7294);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);