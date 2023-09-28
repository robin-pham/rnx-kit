"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[7573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={},i="cli",o={unversionedId:"tools/cli",id:"tools/cli",title:"cli",description:"Command-line interface for working with packages in your repo.",source:"@site/docs/tools/cli.md",sourceDirName:"tools",slug:"/tools/cli",permalink:"/rnx-kit/docs/tools/cli",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"bundle-diff",permalink:"/rnx-kit/docs/tools/bundle-diff"},next:{title:"config",permalink:"/rnx-kit/docs/tools/config"}},p={},d=[{value:"Bundle a Package",id:"bundle-a-package",level:2},{value:"Example Commands",id:"example-commands",level:3},{value:"Example Configuration (Optional)",id:"example-configuration-optional",level:3},{value:"Bundle Defaults",id:"bundle-defaults",level:3},{value:"Command-Line Overrides",id:"command-line-overrides",level:3},{value:"Start a Bundle Server",id:"start-a-bundle-server",level:2},{value:"Example Commands",id:"example-commands-1",level:3},{value:"Example Configuration",id:"example-configuration",level:3},{value:"Server Defaults",id:"server-defaults",level:3},{value:"Command-Line Overrides",id:"command-line-overrides-1",level:3},{value:"Manage Dependencies",id:"manage-dependencies",level:2},{value:"Generate a Third-Party Notice for a Package",id:"generate-a-third-party-notice-for-a-package",level:2},{value:"Clean a React Native Project",id:"clean-a-react-native-project",level:2}],s={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli"},"cli"),(0,r.kt)("p",null,"Command-line interface for working with packages in your repo."),(0,r.kt)("h2",{id:"bundle-a-package"},"Bundle a Package"),(0,r.kt)("p",null,"Bundle a package using ",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro"},"Metro"),". The bundling\nprocess uses optional\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/config"},"configuration"),"\nparameters and command-line overrides."),(0,r.kt)("p",null,"The command ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native rnx-bundle")," is meant to be a drop-in replacement for\n",(0,r.kt)("inlineCode",{parentName:"p"},"react-native bundle"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"rnx-bundle")," ever becomes widely accepted, we will\nwork on upstreaming it to ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-native-community/cli"),", along with supporting\nlibraries for package configuration and Metro plugins."),(0,r.kt)("h3",{id:"example-commands"},"Example Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn react-native rnx-bundle\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn react-native rnx-bundle       \\\n    --entry-file src/index.ts      \\\n    --bundle-output main.jsbundle  \\\n    --platform ios                 \\\n    --dev false                    \\\n    --minify true\n")),(0,r.kt)("h3",{id:"example-configuration-optional"},"Example Configuration (Optional)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rnx-kit": {\n    "bundle": {\n      "entryFile": "entry.js",\n      "assetsDest": "dist",\n      "plugins": [\n        "@rnx-kit/metro-plugin-cyclic-dependencies-detector",\n        [\n          "@rnx-kit/metro-plugin-duplicates-checker",\n          { "ignoredModules": ["react-is"] }\n        ],\n        "@rnx-kit/metro-plugin-typescript"\n      ],\n      "targets": ["ios", "android", "windows", "macos"],\n      "platforms": {\n        "android": {\n          "assetsDest": "dist/res"\n        },\n        "macos": {\n          "plugins": [\n            "@rnx-kit/metro-plugin-cyclic-dependencies-detector",\n            [\n              "@rnx-kit/metro-plugin-duplicates-checker",\n              { "ignoredModules": ["react-is"] }\n            ]\n          ]\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"bundle-defaults"},"Bundle Defaults"),(0,r.kt)("p",null,"When certain parameters aren't specified in configuration or on the\ncommand-line, they are explicitly set to default values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entryFile"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"index.js"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bundleOutput"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"index.<platform>.bundle"')," (Windows, Android) or ",(0,r.kt)("inlineCode",{parentName:"td"},'"index.<platform>.jsbundle"')," (iOS, macOS)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hermes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"treeShake"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plugins"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'["@rnx-kit/metro-plugin-cyclic-dependencies-detector", "@rnx-kit/metro-plugin-duplicates-checker", "@rnx-kit/metro-plugin-typescript"]'))))),(0,r.kt)("p",null,"Other parameters have implicit defaults, buried deep in Metro or its\ndependencies."),(0,r.kt)("h3",{id:"command-line-overrides"},"Command-Line Overrides"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Override"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--id ","[id]"),(0,r.kt)("td",{parentName:"tr",align:null},"Target bundle definition. This is only needed when the rnx-kit configuration has multiple bundle definitions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--entry-file ","[file]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the root JavaScript or TypeScript file, either absolute or relative to the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--platform ","[",(0,r.kt)("inlineCode",{parentName:"td"},"ios")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"android")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"windows")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"win32")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"macos"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"Target platform. When not given, all platforms in the rnx-kit configuration are bundled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--dev ","[boolean]"),(0,r.kt)("td",{parentName:"tr",align:null},"If false, warnings are disabled and the bundle is minified (default: true).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--minify ","[boolean]"),(0,r.kt)("td",{parentName:"tr",align:null},"Controls whether or not the bundle is minified. Disabling minification is useful for test builds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--bundle-output ","[path]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the output bundle file, either absolute or relative to the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--bundle-encoding ","[",(0,r.kt)("inlineCode",{parentName:"td"},"utf8")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"utf16le")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"ascii"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings"},"Character encoding")," to use when writing the bundle file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--max-workers ","[number]"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the maximum number of parallel worker threads to use for transforming files. This defaults to the number of cores available on your machine.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--sourcemap-output ","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path where the bundle source map is written, either absolute or relative to the package.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--sourcemap-sources-root ","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to use when relativizing file entries in the bundle source map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--assets-dest ","[path]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path where bundle assets like images are written, either absolute or relative to the package. If not given, assets are ignored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--tree-shake ","[boolean]"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable tree shaking to remove unused code and reduce the bundle size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--reset-cache"),(0,r.kt)("td",{parentName:"tr",align:null},"Reset the Metro cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--config ","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the Metro configuration file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-h, --help"),(0,r.kt)("td",{parentName:"tr",align:null},"Show usage information.")))),(0,r.kt)("h2",{id:"start-a-bundle-server"},"Start a Bundle Server"),(0,r.kt)("p",null,"Start a bundle server for a package using\n",(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro"},"Metro"),". The bundle server uses optional\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/config"},"configuration"),"\nparameters and command-line overrides."),(0,r.kt)("p",null,"The command ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native rnx-start")," is meant to be a drop-in replacement for\n",(0,r.kt)("inlineCode",{parentName:"p"},"react-native start"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"rnx-start")," ever becomes widely accepted, we will work\non upstreaming it to ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-native-community/cli"),", along with supporting\nlibraries for package configuration and Metro plugins."),(0,r.kt)("h3",{id:"example-commands-1"},"Example Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn react-native rnx-start\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn react-native rnx-start --host localhost --port 8812\n")),(0,r.kt)("h3",{id:"example-configuration"},"Example Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rnx-kit": {\n    "server": {\n      "projectRoot": "src",\n      "plugins": [\n        "@rnx-kit/metro-plugin-cyclic-dependencies-detector",\n        [\n          "@rnx-kit/metro-plugin-duplicates-checker",\n          {\n            "ignoredModules": ["react-is"],\n            "throwOnError": false\n          }\n        ],\n        "@rnx-kit/metro-plugin-typescript"\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"server-defaults"},"Server Defaults"),(0,r.kt)("p",null,"If the server configuration is not defined, it is implicitly created at runtime\nfrom the bundle configuration (or its ",(0,r.kt)("a",{parentName:"p",href:"#bundle-defaults"},"defaults"),")."),(0,r.kt)("h3",{id:"command-line-overrides-1"},"Command-Line Overrides"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Override"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--port ","[number]"),(0,r.kt)("td",{parentName:"tr",align:null},"Host port to use when listening for incoming server requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--host ","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Host name or address to bind when listening for incoming server requests. When not given, requests from all addresses are accepted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--projectRoot ","[path]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the root of your react-native project. The bundle server uses this root path to resolve all web requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--watchFolders ","[paths]"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional folders which will be added to the file-watch list. Comma-separated. By default, Metro watches all project files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--assetPlugins ","[list]"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional asset plugins to be used by the Metro Babel transformer. Comma-separated list containing plugin module names or absolute paths to plugin packages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--sourceExts ","[list]"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional source-file extensions to include when generating bundles. Comma-separated list, excluding the leading dot.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--max-workers ","[number]"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the maximum number of parallel worker threads to use for transforming files. This defaults to the number of cores available on your machine.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--reset-cache"),(0,r.kt)("td",{parentName:"tr",align:null},"Reset the Metro cache.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--custom-log-reporter-path ","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to a JavaScript file which exports a Metro ",(0,r.kt)("inlineCode",{parentName:"td"},"TerminalReporter")," function. This replaces the default reporter, which writes all messages to the Metro console.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--https"),(0,r.kt)("td",{parentName:"tr",align:null},"Use a secure (https) web server. When not specified, an insecure (http) web server is used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--key ","[path]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to a custom SSL private key file to use for secure (https) communication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--cert ","[path]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to a custom SSL certificate file to use for secure (https) communication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--config ","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the Metro configuration file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--no-interactive"),(0,r.kt)("td",{parentName:"tr",align:null},"Disables interactive mode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--id"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify which bundle configuration to use if server configuration is missing.")))),(0,r.kt)("h2",{id:"manage-dependencies"},"Manage Dependencies"),(0,r.kt)("p",null,"Manage dependencies within a repository and across many repositories."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ yarn react-native rnx-align-deps [options] [/path/to/package.json]\n")),(0,r.kt)("p",null,"Refer to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/align-deps"},"@rnx-kit/align-deps"),"\nfor details."),(0,r.kt)("h2",{id:"generate-a-third-party-notice-for-a-package"},"Generate a Third-Party Notice for a Package"),(0,r.kt)("p",null,"Generate a 3rd-party notice, which is an aggregation of all the LICENSE files\nfrom your package's dependencies."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: A 3rd-party notice is a ",(0,r.kt)("strong",{parentName:"p"},"legal document"),". You are solely responsble\nfor its content, even if you use this command to assist you in generating it.\nYou should consult with an attorney to ensure your notice meets all legal\nrequirements.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ yarn react-native rnx-write-third-party-notices [options]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--root-path ","[path]"),(0,r.kt)("td",{parentName:"tr",align:null},"The root of the repo. This is the starting point for finding each module in the source map dependency graph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--source-map-file ","[file]"),(0,r.kt)("td",{parentName:"tr",align:null},"The source map file associated with the package's entry file. This source map eventually leads to all package dependencies and their licenses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--json"),(0,r.kt)("td",{parentName:"tr",align:null},"Format the 3rd-party notice file as JSON instead of text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--output-file ","[file]"),(0,r.kt)("td",{parentName:"tr",align:null},"The path to use when writing the 3rd-party notice file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ignore-scopes ","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma-separated list of ",(0,r.kt)("inlineCode",{parentName:"td"},"npm")," scopes to ignore when traversing the source map dependency graph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--ignore-modules ","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma-separated list of modules to ignore when traversing the source map dependency graph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--preamble-text ","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"A string to prepend to the start of the 3rd-party notice.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--additional-text ","[path]"),(0,r.kt)("td",{parentName:"tr",align:null},"A string to append to the end of the 3rd-party notice.")))),(0,r.kt)("h2",{id:"clean-a-react-native-project"},"Clean a React Native Project"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Deprecated: This command was upstreamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-native-community/cli"),". As\nof ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/releases/tag/v8.0.0"},"v8.0"),",\nyou can use ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native clean")," instead.")),(0,r.kt)("p",null,"Cleans your project by removing React Native related caches and modules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ yarn react-native rnx-clean [options]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--include ","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma-separated flag of caches to clear e.g npm,yarn . When not specified , only non-platform specific caches are cleared. ","[android,cocoapods,npm,metro,watchman,yarn]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--project-root ","[path]"),(0,r.kt)("td",{parentName:"tr",align:null},"Root path to your React Native project. When not specified, defaults to current working directory")))))}u.isMDXComponent=!0}}]);