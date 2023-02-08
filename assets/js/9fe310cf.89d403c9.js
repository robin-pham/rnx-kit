"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[6294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},l="eslint-plugin",o={unversionedId:"tools/eslint-plugin",id:"tools/eslint-plugin",title:"eslint-plugin",description:"",source:"@site/docs/tools/eslint-plugin.mdx",sourceDirName:"tools",slug:"/tools/eslint-plugin",permalink:"/rnx-kit/docs/tools/eslint-plugin",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/eslint-plugin.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"esbuild-plugin-import-path-remapper",permalink:"/rnx-kit/docs/tools/esbuild-plugin-import-path-remapper"},next:{title:"golang",permalink:"/rnx-kit/docs/tools/golang"}},p={},s=[{value:"Install",id:"install",level:2},{value:"Recommended Configs",id:"recommended-configs",level:2},{value:"Supported Rules",id:"supported-rules",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eslint-plugin"},"eslint-plugin"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@rnx-kit/eslint-plugin")," is a set of rules that can be extended in your own\nshareable ESLint config."),(0,a.kt)("p",null,"For more details on shareable configs, see\n",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/docs/developer-guide/shareable-configs"},"https://eslint.org/docs/developer-guide/shareable-configs"),"."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add @rnx-kit/eslint-plugin --dev\n")),(0,a.kt)("p",null,"or if you're using npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm add --save-dev @rnx-kit/eslint-plugin\n")),(0,a.kt)("h2",{id:"recommended-configs"},"Recommended Configs"),(0,a.kt)("p",null,"This ESLint plugin exports\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/blob/main/packages/eslint-plugin/src/configs/recommended.js"},(0,a.kt)("inlineCode",{parentName:"a"},"@rnx-kit/recommended")),"\nconfiguration. To enable it, add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"extends")," section of your ESLint\nconfig file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": ["plugin:@rnx-kit/recommended"]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@rnx-kit/recommended")," currently extends:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eslint.org/docs/rules/"},(0,a.kt)("inlineCode",{parentName:"a"},"eslint:recommended"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin#supported-rules"},(0,a.kt)("inlineCode",{parentName:"a"},"plugin:@typescript-eslint/recommended"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js"},(0,a.kt)("inlineCode",{parentName:"a"},"plugin:react-hooks/recommended"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/yannickcr/eslint-plugin-react#recommended"},(0,a.kt)("inlineCode",{parentName:"a"},"plugin:react/recommended")))),(0,a.kt)("h2",{id:"supported-rules"},"Supported Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2713: Enabled with ",(0,a.kt)("inlineCode",{parentName:"li"},"@rnx-kit/recommended")),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd27: Fixable with ",(0,a.kt)("inlineCode",{parentName:"li"},"--fix"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\ud83d\udd27"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Rule"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rnx-kit/blob/main/packages/eslint-plugin/src/rules/no-const-enum.js"},(0,a.kt)("inlineCode",{parentName:"a"},"@rnx-kit/no-const-enum"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"disallow ",(0,a.kt)("inlineCode",{parentName:"td"},"const enum")," (",(0,a.kt)("a",{parentName:"td",href:"https://hackmd.io/bBcd6R-1TB6Zq95PSquooQ"},"why is it bad?"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udd27"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rnx-kit/blob/main/packages/eslint-plugin/src/rules/no-export-all.js"},(0,a.kt)("inlineCode",{parentName:"a"},"@rnx-kit/no-export-all"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"disallow ",(0,a.kt)("inlineCode",{parentName:"td"},"export *")," (",(0,a.kt)("a",{parentName:"td",href:"https://hackmd.io/Z021hgSGStKlYLwsqNMOcg"},"why is it bad?"),")")))))}m.isMDXComponent=!0}}]);