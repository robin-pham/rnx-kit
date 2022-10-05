"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[4698],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),s=a(7392),p=a(7094),i=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,a;const{lazy:l,block:c,defaultValue:m,values:g,groupId:k,className:y}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const x=null===m?m:null!=(t=null!=m?m:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==x&&!b.some((e=>e.value===x)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:f}=(0,p.U)(),[N,Z]=(0,r.useState)(x),w=[],{blockElementScrollPositionUntilNextRender:I}=(0,i.o5)();if(null!=k){const e=T[k];null!=e&&e!==N&&b.some((t=>t.value===e))&&Z(e)}const C=e=>{const t=e.currentTarget,a=w.indexOf(t),n=b[a].value;n!==N&&(I(t),Z(n),null!=k&&f(k,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=w.indexOf(e.currentTarget)+1;a=null!=(n=w[t])?n:w[0];break}case"ArrowLeft":{var r;const t=w.indexOf(e.currentTarget)-1;a=null!=(r=w[t])?r:w[w.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},y)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:D,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},5558:(e,t,a)=>{a.d(t,{ZP:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const s={toc:[]};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn rnx-dep-check --init app\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn rnx-dep-check --init library\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm rnx-dep-check --init app\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm rnx-dep-check --init library\n"))),(0,r.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx rnx-dep-check --init app\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx rnx-dep-check --init library\n")))))}p.isMDXComponent=!0},3478:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162),s=a(814);const p={toc:[]};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"yarn ",a.yarnArgs||a.args)),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"pnpm ",a.pnpmArgs||a.args)),(0,r.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"npm ",a.npmArgs||a.args))))}i.isMDXComponent=!0},3238:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162),s=a(814);const p={toc:[]};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{groupId:"package-manager",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",default:!0,mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"yarn ",a.yarnArgs||a.args)),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"pnpm ",a.pnpmArgs||a.args)),(0,r.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"sh",mdxType:"CodeBlock"},"npx ",a.npxArgs||a.args))))}i.isMDXComponent=!0},946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(5558),l=a(3478),s=a(3238);const p={},i="Getting Started",d={unversionedId:"guides/getting-started",id:"guides/getting-started",title:"Getting Started",description:"Welcome! A good place to start with any React Native project is the dependency",source:"@site/docs/guides/getting-started.mdx",sourceDirName:"guides",slug:"/guides/getting-started",permalink:"/rnx-kit/docs/guides/getting-started",draft:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/guides/getting-started.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Type Safety",permalink:"/rnx-kit/docs/type-safety"},next:{title:"Dependency Management",permalink:"/rnx-kit/docs/guides/dependency-management"}},u={},c=[],m={toc:c};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Welcome! A good place to start with any React Native project is the dependency\nmanager. It keeps your React Native dependencies up-to-date and healthy using\nautomation which ties into your developer workflows."),(0,r.kt)("p",null,"This guide gets you off and running with the dependency manager. To begin,\nchoose a package that uses React Native and open a terminal window."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to learn more about this project before jumping in, head to the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction"},"introduction")," page.")),(0,r.kt)("p",null,"Start by adding the dependency manager to your package."),(0,r.kt)(l.ZP,{yarnArgs:"add @rnx-kit/dep-check --dev",pnpmArgs:"add -D @rnx-kit/dep-check",npmArgs:"add --save-dev @rnx-kit/dep-check",mdxType:"PackageCommand"}),(0,r.kt)("p",null,"Next, generate the dependency manager configuration for your package. If your\npackage produces a bundle, it's an ",(0,r.kt)("inlineCode",{parentName:"p"},"app"),". Otherwise, it's a ",(0,r.kt)("inlineCode",{parentName:"p"},"library"),"."),(0,r.kt)(o.ZP,{mdxType:"DepCheckInit"}),(0,r.kt)("p",null,"Fix any React Native package versions that might have compatibility issues."),(0,r.kt)(s.ZP,{args:"rnx-dep-check --write",mdxType:"PackageRunCommand"}),(0,r.kt)("p",null,"Review the changes. They should be limited to package.json and your Yarn / npm /\npnpm lock file."),(0,r.kt)("admonition",{title:"Test Your Package",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If any dependency versions changed, test your package to be sure everything is\nstill in working order.")),(0,r.kt)("p",null,"Congratulations! You can now automatically maintain your package as the React\nNative ecosystem grows and changes. Take a look at the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/dependency-management"},"dependency management")," guide to learn how."))}g.isMDXComponent=!0}}]);