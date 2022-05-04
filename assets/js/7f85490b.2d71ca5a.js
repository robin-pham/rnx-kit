"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[3427],{5318:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var a=t(7378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),g=i,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return t?a.createElement(m,o(o({ref:n},l),{},{components:t})):a.createElement(m,o({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1221:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=t(5773),i=t(808),r=(t(7378),t(5318)),o=["components"],c={},s="Dependencies",p={unversionedId:"dependencies",id:"dependencies",title:"Dependencies",description:"The React Native ecosystem is vast, and it changes all the time. This makes it",source:"@site/docs/dependencies.md",sourceDirName:".",slug:"/dependencies",permalink:"/rnx-kit/docs/dependencies",editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/dependencies.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/rnx-kit/docs/introduction"},next:{title:"Type Safety",permalink:"/rnx-kit/docs/type-safety"}},l={},d=[{value:"Capabilities and Profiles",id:"capabilities-and-profiles",level:2},{value:"Meta Capabilities",id:"meta-capabilities",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Validating Dependencies",id:"validating-dependencies",level:2},{value:"Updating Dependencies",id:"updating-dependencies",level:2}],u={toc:d};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"The React Native ecosystem is vast, and it changes all the time. This makes it\nhard to find ",(0,r.kt)("strong",{parentName:"p"},"actively maintained")," packages which are ",(0,r.kt)("strong",{parentName:"p"},"compatible")," with each\nother, and with the React Native version you are using. Keeping up means regular\npackage.json maintenance and thorough compatibility testing."),(0,r.kt)("p",null,"When you're ready to upgrade React Native itself, you need to start the whole\nprocess over again. Find a new set of package versions. Make sure they don't\nbreak each other or your app. It's a never-ending, time-consuming cycle."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/dependency-management"},"dependency manager")," solves these\nproblems. It knows which React Native package versions work well together, and\nit uses that knowledge to keep your app healthy and up-to-date."),(0,r.kt)("h2",{id:"capabilities-and-profiles"},"Capabilities and Profiles"),(0,r.kt)("p",null,"The magic is in the data that comes with the dependency manager -- capabilities\nand profiles. Together, they describe a ",(0,r.kt)("em",{parentName:"p"},"curated")," and ",(0,r.kt)("em",{parentName:"p"},"tested")," list of packages\nthat work with each major release of React Native."),(0,r.kt)("p",null,"A capability is something your app needs to function. It has a well-known name,\nand it maps to a specific package and version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const capability = {\n  react: {\n    name: "react",\n    version: "17.0.2",\n  },\n};\n')),(0,r.kt)("p",null,"Capabilities can depend on each other, creating a tree:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const capabilities = {\n  react: {\n    name: "react",\n    version: "17.0.2",\n  },\n  "react-dom": {\n    name: "react-dom",\n    version: "17.0.2",\n    capabilities: ["react"],\n  },\n};\n')),(0,r.kt)("p",null,"A profile is a collection of capabilities, known to work well with a specific\nrelease of React Native. Each React Native release has its own profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const reactNative: Package = {\n  name: "react-native",\n  version: "^0.67.0-0",\n  capabilities: ["react"],\n};\n\nconst profile_0_67: Profile = {\n  react: {\n    name: "react",\n    version: "17.0.2",\n  },\n  core: reactNative,\n  "core-android": reactNative,\n  "core-ios": reactNative,\n  // ... etc ...\n};\n')),(0,r.kt)("h2",{id:"meta-capabilities"},"Meta Capabilities"),(0,r.kt)("p",null,"Meta capabilities let you group capabilities together:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "core/all": {\n    name: "#meta",\n    capabilities: [\n      "core-android",\n      "core-ios",\n      "core-macos",\n      "core-windows",\n    ],\n  },\n}\n')),(0,r.kt)("p",null,"Mata capabilities aren't versioned, and always have ",(0,r.kt)("inlineCode",{parentName:"p"},"#meta")," in the name\nproperty."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"A package tells the dependency manager about itself using configuration. It\nanswers questions such as: Is the package an ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"library"),"? Which\nversion(s) of React Native is the package targeting? What capabilities does the\npackage require?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=package.json",title:"package.json"},'{\n  "rnx-kit": {\n    "kitType": "app",\n    "reactNativeVersion": "^0.66 || ^0.67",\n    "capabilities": [\n      "core-android",\n      "core-ios",\n      "core-macos",\n      "core-windows",\n      "react",\n      "test-app"\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"The dependency manager uses this configuration when validating or updating the\npackage's dependency list."),(0,r.kt)("h2",{id:"validating-dependencies"},"Validating Dependencies"),(0,r.kt)("p",null,"The dependency manager scans a package's dependencies, reporting anything that\nis incompatible or missing. It normally only validates ",(0,r.kt)("em",{parentName:"p"},"configured")," packages,\nthough it can be used to validate unconfigured packages."),(0,r.kt)("p",null,"Configured package validation starts with the target React Native version(s).\nThe dependency manager gets the corresponding profile(s) and cross-references\nthem with the package's capabilties. Now it knows which dependencies (and\nversions) the package ",(0,r.kt)("em",{parentName:"p"},"should")," have. It checks ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", looking for incompatible or missing\npackages. If anything is wrong, it reports detailed information to the console."),(0,r.kt)("p",null,"Validating an unconfigured package isn't as precise, though it is very useful as\na transitional tool when on-boarding large monorepos. You tell the dependency\nmanager which React Native version(s) to target. It looks at the package's\ndependencies, and reverse-maps them to known capabilities. From there, it can\nvalidate using the inferred capability list, reporting any incompatible or\nmissing dependencies."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/dependency-management"},"dependency manager guide")," to learn\nhow to on-board existing repos incrementally, and run validation on configured\nand unconfigured packages."),(0,r.kt)("h2",{id:"updating-dependencies"},"Updating Dependencies"),(0,r.kt)("p",null,"The dependency manager can automatically update a package's dependencies,\nresolving compatibility problems and adding missing dependencies."),(0,r.kt)("p",null,"This is a very powerful tool for developers, especially when used in monorepos\nwith many packages."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/dependency-management"},"dependency manager guide")," shows you how\nto keep your packages up-to-date as dependencies change or capabilities are\nadded/removed. It also shows you how to automate a React Native upgrade,\nchanging every package and its dependencies, to known/good versions that work\nwell together."))}g.isMDXComponent=!0}}]);