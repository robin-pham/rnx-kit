"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[6503],{5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7462),r=t(7294),i=t(6010),o=t(2466),s=t(6550),l=t(1980),p=t(7392),d=t(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function c(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,p.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=c(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[l,p]=g({queryString:t,groupId:a}),[u,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),h=(()=>{const e=l??u;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,i]),tabValues:i}}var h=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),a=p[t].value;a!==s&&(u(n),l(a))},m=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},p.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>d.push(e),onKeyDown:m,onClick:c},o,{className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===n})}),t??n)})))}function f(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function b(e){const n=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(f,(0,a.Z)({},e,n)))}function x(e){const n=(0,h.Z)();return r.createElement(b,(0,a.Z)({key:String(n)},e))}},1659:(e,n,t)=>{t.d(n,{ZP:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={toc:[]},o="wrapper";function s(e){let{components:n,...t}=e;return(0,r.kt)(o,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Was this helpful? Help spread the word on\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/intent/tweet?text=.@ReactNativeMSFT&hashtags=rnxkit"},"Twitter"),"."))}s.isMDXComponent=!0},3569:(e,n,t)=>{t.d(n,{ZP:()=>p});var a=t(7462),r=(t(7294),t(3905)),i=t(4866),o=t(5162);const s={toc:[]},l="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(l,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn rnx-align-deps --init app\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn rnx-align-deps --init library\n"))),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm rnx-align-deps --init app\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm rnx-align-deps --init library\n"))),(0,r.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx rnx-align-deps --init app\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx rnx-align-deps --init library\n")))))}p.isMDXComponent=!0},3478:(e,n,t)=>{t.d(n,{ZP:()=>d});var a=t(7462),r=(t(7294),t(3905)),i=t(4866),o=t(5162),s=t(614);const l={toc:[]},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"yarn ",t.yarnArgs||t.args)),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"pnpm ",t.pnpmArgs||t.args)),(0,r.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"npm ",t.npmArgs||t.args))))}d.isMDXComponent=!0},3238:(e,n,t)=>{t.d(n,{ZP:()=>d});var a=t(7462),r=(t(7294),t(3905)),i=t(4866),o=t(5162),s=t(614);const l={toc:[]},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"yarn ",t.yarnArgs||t.args)),(0,r.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"pnpm ",t.pnpmArgs||t.args)),(0,r.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"npx ",t.npxArgs||t.args))))}d.isMDXComponent=!0},6717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),i=t(3569),o=t(3478),s=t(3238),l=t(1659);const p={},d="Dependency Management",u={unversionedId:"guides/dependency-management",id:"guides/dependency-management",title:"Dependency Management",description:"Ready for some magic? This guide will fundamentally change the way you maintain",source:"@site/docs/guides/dependency-management.mdx",sourceDirName:"guides",slug:"/guides/dependency-management",permalink:"/rnx-kit/docs/guides/dependency-management",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/guides/dependency-management.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/rnx-kit/docs/guides/getting-started"},next:{title:"Bundling",permalink:"/rnx-kit/docs/guides/bundling"}},c={},m=[{value:"Onboarding",id:"onboarding",level:2},{value:"Automating Everything",id:"automating-everything",level:2},{value:"Builds",id:"builds",level:3},{value:"Pull Requests",id:"pull-requests",level:3},{value:"Dependency Manager Updates",id:"dependency-manager-updates",level:3},{value:"Upgrading React Native",id:"upgrading-react-native",level:2},{value:"Customization",id:"customization",level:2},{value:"Finish Line",id:"finish-line",level:2}],g={toc:m},k="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(k,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dependency-management"},"Dependency Management"),(0,r.kt)("p",null,"Ready for some magic? This guide will fundamentally change the way you maintain\nyour React Native applications and libraries. It all centers on one tool -- the\ndependency manager."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Not quite ready to make the leap? Learn more about\n",(0,r.kt)("a",{parentName:"p",href:"/docs/dependencies"},"dependencies")," first.")),(0,r.kt)("h2",{id:"onboarding"},"Onboarding"),(0,r.kt)("p",null,"The first order of business is onboarding your React Native packages to the\ndependency manager. Do this for every React Native package you have. It can be\ndone all at once, or gradually over multiple PRs."),(0,r.kt)("p",null,"First, add the dependency manager to your package."),(0,r.kt)(o.ZP,{yarnArgs:"add @rnx-kit/align-deps --dev",pnpmArgs:"add -D @rnx-kit/align-deps",npmArgs:"add --save-dev @rnx-kit/align-deps",mdxType:"PackageCommand"}),(0,r.kt)("p",null,"Add new script commands for convenience. We'll use these later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "scripts": {\n    "check-dependencies": "rnx-align-deps",\n    "fix-dependencies": "rnx-align-deps --write"\n  }\n}\n')),(0,r.kt)("p",null,"Next, generate the dependency manager configuration for your package. If your\npackage produces a bundle, it's an ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),". Otherwise, it's a ",(0,r.kt)("inlineCode",{parentName:"p"},"library"),"."),(0,r.kt)(i.ZP,{mdxType:"AlignDepsInit"}),(0,r.kt)("p",null,"Fix any React Native package versions that might have compatibility issues."),(0,r.kt)(s.ZP,{args:"fix-dependencies",mdxType:"PackageRunCommand"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Review")," and ",(0,r.kt)("strong",{parentName:"p"},"test")," your changes before committing. This is important, even\nfor seemingly harmless updates."),(0,r.kt)("h2",{id:"automating-everything"},"Automating Everything"),(0,r.kt)("p",null,"Once onboarding is done, you're ready to set up automation."),(0,r.kt)("p",null,"Automation validates your React Native dependencies during builds and PRs. It\nalso keeps the dependency manager up-to-date, including the built-in list of\nknown/good React Native package versions and releases. This list can change\nfrequently, based on the volatility of the React Native ecosystem."),(0,r.kt)("h3",{id:"builds"},"Builds"),(0,r.kt)("p",null,"To validate dependencies during a build, you'll integrate the\n",(0,r.kt)("inlineCode",{parentName:"p"},"check-dependencies")," command into your build workflow."),(0,r.kt)("p",null,"In each of your React Native packages, add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "scripts": {\n    "build": "... existing-stuff ... && yarn fix-dependencies"\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Replace ",(0,r.kt)("inlineCode",{parentName:"em"},"yarn")," with ",(0,r.kt)("inlineCode",{parentName:"em"},"npm run")," or ",(0,r.kt)("inlineCode",{parentName:"em"},"pnpm"),", depending on your package manager.")),(0,r.kt)("p",null,"When the validation process finds a compatibility problem, it fails with a\ndetailed message, showing you what went wrong before you commit to the repo."),(0,r.kt)("admonition",{title:"Using a Task Runner?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're using a task runner like Lage or Gulp, you can go for a more\nsophisticated integration. The advantage being that ",(0,r.kt)("inlineCode",{parentName:"p"},"fix-dependencies")," could run\nas its own task with isolated logging and error handling. And, you can run it in\nparallel with other tasks.")),(0,r.kt)("h3",{id:"pull-requests"},"Pull Requests"),(0,r.kt)("p",null,"To validate dependencies during PRs, you'll use the dependency manager to check\nevery package in your repo."),(0,r.kt)("p",null,"Add the dependency manager to your repo's root package.json."),(0,r.kt)(o.ZP,{yarnArgs:"add @rnx-kit/align-deps --dev -W",pnpmArgs:"add -D @rnx-kit/align-deps",npmArgs:"add --save-dev @rnx-kit/align-deps",mdxType:"PackageCommand"}),(0,r.kt)("p",null,"Next, add this command to your PR loop. It runs the dependency manager from the\nroot of the repo, scanning all packages. This include packages which haven't\nonboarded yet. For those, ",(0,r.kt)("inlineCode",{parentName:"p"},"--requirements react-native@[version]")," controls the\ntarget React Native release to use when checking compatibility."),(0,r.kt)(s.ZP,{args:"rnx-align-deps --requirements react-native@0.66",mdxType:"PackageRunCommand"}),(0,r.kt)("p",null,"When a compatibility problem is found, the command fails with a non-zero exit\ncode, which causes the PR loop to fail. This protects the repo from risky\nchanges."),(0,r.kt)("p",null,"In the PR logs, you'll see a detailed report, in ",(0,r.kt)("inlineCode",{parentName:"p"},"diff")," format, explaining what\nwent wrong."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'error Found 3 violation(s) in \'packages/app/package.json\':\n    react-native "^0.66.0" -> "^0.66.0-0" (dependencies)\n    react-native-macos "^0.66.0" -> "^0.66.0-0" (dependencies)\n    react-native-windows "^0.66.0" -> "^0.66.0-0" (dependencies)\n- Current\n+ Expected\n\n  {\n    "name": "@rnts/button",\n    "version": "0.0.1",\n    "private": true,\n    "license": "MIT",\n    "main": "src/index.ts",\n    "typings": "lib/index.d.ts",\n    "scripts": {\n      "clean": "rimraf ./lib",\n      "build": "yarn run clean && yarn run tsc && yarn run api-extract",\n      "api-extract": "api-extractor run --local --verbose"\n    },\n    "devDependencies": {\n      "@microsoft/api-extractor": "^7.19.4",\n      "@office-iss/react-native-win32": "^0.66.0",\n      "@rnx-kit/align-deps": "^2.0.0",\n      "@types/react-native": "^0.66.0",\n-     "rimraf": "^3.0.2",\n      "react": "17.0.2",\n-     "react-native": "^0.66.0",\n-     "react-native-macos": "^0.66.0",\n-     "react-native-windows": "^0.66.0",\n+     "react-native": "^0.66.0-0",\n+     "react-native-macos": "^0.66.0-0",\n+     "react-native-windows": "^0.66.0-0",\n+     "rimraf": "^3.0.2",\n      "typescript": "^4.5.5"\n    },\n    "rnx-kit": {\n      "kitType": "library",\n      "alignDeps": {\n        "requirements": {\n          "development": ["react-native@0.66"],\n          "production": ["react-native@0.66"]\n        },\n        "capabilities": [\n          "core-android",\n          "core-ios",\n          "core-macos",\n          "core-windows",\n          "react"\n        ]\n      }\n+   },\n+   "peerDependencies": {\n+     "react": "17.0.2",\n+     "react-native": "^0.66.0-0",\n+     "react-native-macos": "^0.66.0-0",\n+     "react-native-windows": "^0.66.0-0"\n    }\n  }\nerror \'packages/button/package.json\': Changes are needed to satisfy all requirements. Re-run with `--write` to apply them.\ninfo Visit https://aka.ms/align-deps information about align-deps.\nerror Command failed with exit code 1.\ninfo Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.\n')),(0,r.kt)("p",null,"Fixing problems is automated, too! From your development terminal, run the same\ncommand with a ",(0,r.kt)("inlineCode",{parentName:"p"},"--write")," parameter."),(0,r.kt)(s.ZP,{args:"rnx-align-deps --requirements react-native@0.66 --write",mdxType:"PackageRunCommand"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Review")," and ",(0,r.kt)("strong",{parentName:"p"},"test")," the fixes before pushing them to your PR."),(0,r.kt)("h3",{id:"dependency-manager-updates"},"Dependency Manager Updates"),(0,r.kt)("p",null,"The dependency manager comes with a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/align-deps#capabilities"},"built-in list"),"\nof known/good React Native package versions and releases. Keeping the dependency\nmanager up-to-date gives you the latest compatibility data."),(0,r.kt)("p",null,"If you are in GitHub, use Dependabot to keep your packages up-to-date, including\nthe dependency manager. If you host your repo elsewhere, you can use tools like\nSnyk instead."),(0,r.kt)("p",null,"When a dependency manager update happens, the associated PR loop may fail with\nincompatible package errors. This is OK. It means the built-in list of React\nNative package versions has changed, and you need to update your packages in\nresponse."),(0,r.kt)("p",null,"Run this command from the root of your repo. It uses the dependency manager to\nmake the fixes automatically."),(0,r.kt)(s.ZP,{args:"rnx-align-deps --write",mdxType:"PackageRunCommand"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Review")," and ",(0,r.kt)("strong",{parentName:"p"},"test")," the fixes before pushing them to the PR with the\ndependency manager update."),(0,r.kt)("h2",{id:"upgrading-react-native"},"Upgrading React Native"),(0,r.kt)("p",null,"When you're ready to upgrade to a new release of React Native (or downgrade to\nan old release), you can use the dependency manager to help you out."),(0,r.kt)("p",null,"First, update your PR loop definition. Find the\n",(0,r.kt)("inlineCode",{parentName:"p"},"rnx-align-deps --requirements react-native@[version]")," command and change the\ntarget React Native version."),(0,r.kt)("p",null,"Then, run these commands from the root of your repo to change your React Native\nversion and adjust all React Native dependencies to be compatible. Replace\n",(0,r.kt)("inlineCode",{parentName:"p"},"[version]")," with your target React Native version in ",(0,r.kt)("inlineCode",{parentName:"p"},"major.minor"),' format, such\nas "0.66" or "0.68".'),(0,r.kt)(s.ZP,{args:"rnx-align-deps --set-version [version]",mdxType:"PackageRunCommand"}),(0,r.kt)(s.ZP,{args:"rnx-align-deps --requirements react-native@[version] --write",mdxType:"PackageRunCommand"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Review")," and ",(0,r.kt)("strong",{parentName:"p"},"test")," your packages thoroughly before merging these changes."),(0,r.kt)("h2",{id:"customization"},"Customization"),(0,r.kt)("p",null,"Did you know that you can add your own packages to the dependency manager's\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/align-deps#capabilities"},"built-in list"),"?"),(0,r.kt)("p",null,"If your repo uses React Native packages that aren't known to the dependency\nmanager, add them to the list! Or if you want to align other dependencies\nautomatically, add them to the list too!"),(0,r.kt)("p",null,"First, write the list of packages you want to manage. Each one is expressed as a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/dependencies#capabilities-and-profiles"},"capability"),". You can use a ",(0,r.kt)("inlineCode",{parentName:"p"},".js"),"\nmodule, a ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file, or a module name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="dependency-profile.json"',title:'"dependency-profile.json"'},'{\n  "0.66": {\n    "@types/node": {\n      "name": "@types/node",\n      "version": "^16.0.0",\n      "devOnly": true\n    },\n    "chalk": {\n      "name": "chalk",\n      "version": "^4.1.0"\n    },\n    "native-base": {\n      "name": "native-base",\n      "version": "^3.3.11",\n      "capabilities": ["react"]\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Look at ",(0,r.kt)("inlineCode",{parentName:"p"},"native-base")," in the example above. It's wrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"0.66")," version\ntag. That means it only applies to React Native 0.66.")),(0,r.kt)("p",null,"Next, configure each of your onboarded React Native packages to use the list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="package.json"',title:'"package.json"'},' {\n   "rnx-kit": {\n     "alignDeps": {\n+      "presets": [\n+        "microsoft/react-native",\n+        "path/to/dependency-profile.json"\n+      ],\n       "requirements": {\n         "development": ["react-native@0.66"],\n         "production": ["react-native@0.66"]\n       },\n       "capabilities": [\n         "core-android",\n         "core-ios",\n         "core-macos",\n         "core-windows",\n         "react"\n       ]\n     }\n   }\n }\n')),(0,r.kt)("p",null,"Now it's time to use the list. Run the dependency manager to update all of your\npackages."),(0,r.kt)(s.ZP,{args:"rnx-align-deps --requirements react-native@0.66 --presets microsoft/react-native,path/to/dependency-profile.json --write",mdxType:"PackageRunCommand"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Review")," and ",(0,r.kt)("strong",{parentName:"p"},"test")," the changes before continuing."),(0,r.kt)("p",null,"The last step is updating the automation. Each command needs an extra\n",(0,r.kt)("inlineCode",{parentName:"p"},"--presets [paths]")," parameter."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pull Requests: Change the ",(0,r.kt)("inlineCode",{parentName:"li"},"rnx-align-deps --requirements react-native@[version]")," command"),(0,r.kt)("li",{parentName:"ul"},"Dependency Manager Updates: Change the ",(0,r.kt)("inlineCode",{parentName:"li"},"rnx-align-deps --write")," command"),(0,r.kt)("li",{parentName:"ul"},"Upgrading React Native: Change the\n",(0,r.kt)("inlineCode",{parentName:"li"},"rnx-align-deps --requirements react-native@[version] --write")," command")),(0,r.kt)("h2",{id:"finish-line"},"Finish Line"),(0,r.kt)("p",null,"Congratulations! Your React Native apps and libraries are now up-to-date and\ncompatible with each other! And they should stay that way thanks to the\nautomation you've put in place!"),(0,r.kt)(l.ZP,{mdxType:"AmplifyCallout"}),(0,r.kt)("p",null,"And, if you customized your list of dependencies, please consider\n",(0,r.kt)("a",{parentName:"p",href:"/docs/contributing"},"contributing")," your work so that everyone can use it\n(including you). You can\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/issues/new?title=Dependency%20Manager%20Customizations&body=%3c%21--%20Please%20add%20your%20custom%20dependency%20list%20here.%20--%3e%0a%0a"},"create an ",(0,r.kt)("strong",{parentName:"a"},"issue")," with your customizations"),"\nor even ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/pulls"},"submit a ",(0,r.kt)("strong",{parentName:"a"},"pull request")),"."))}h.isMDXComponent=!0}}]);