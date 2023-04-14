"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="console",s={unversionedId:"tools/console",id:"tools/console",title:"console",description:"@rnx-kit/console is a simple console logger that is a subset of the logger in",source:"@site/docs/tools/console.md",sourceDirName:"tools",slug:"/tools/console",permalink:"/rnx-kit/docs/tools/console",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/console.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"config",permalink:"/rnx-kit/docs/tools/config"},next:{title:"esbuild-plugin-import-path-remapper",permalink:"/rnx-kit/docs/tools/esbuild-plugin-import-path-remapper"}},l={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"console"},"console"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@rnx-kit/console")," is a simple console logger that is a subset of the logger in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/6615eb30f37bec5bb25acc066c849c4aa2d8a4cd/packages/tools/src/logger.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-native-community/cli-tools")),".\nIt is used by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages"},"Metro plugins")," to\nensure that log lines are consistent with ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-native-community/cli"),"."),(0,r.kt)("p",null,"Ideally, we should be using the reporter that is passed to Metro but we don't\nhave access to it from the ",(0,r.kt)("inlineCode",{parentName:"p"},"customSerializer")," hook. The next best thing would be\nto use ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-native-community/cli-tools")," but it includes a bunch of other\ntools and we cannot take a dependency on any single version since we need to\nsupport multiple versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native")," (and hence multiple versions of\n",(0,r.kt)("inlineCode",{parentName:"p"},"@react-native-community/cli-tools"),")."),(0,r.kt)("p",null,"Other libraries, such as\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/just/tree/master/packages/just-task-logger"},(0,r.kt)("inlineCode",{parentName:"a"},"just-task-logger")),",\nwere also considered. However, the purpose of this package is to match with the\noutput of ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-native-community/cli"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"just-task-logger")," in particular uses\nits own colour scheme and doesn't allow configuring them to match the colour\nscheme."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @rnx-kit/console --dev\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { error, info, warn } from "@rnx-kit/console";\n\nerror("This is an error message");\ninfo("This is an informational message");\nwarn("This is a warning");\n')))}m.isMDXComponent=!0}}]);