"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[2525],{6099:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=i(5893),o=i(1151);const s={},r="typescript-service",c={id:"tools/typescript-service",title:"typescript-service",description:"@rnx-kit/typescript-service gives you access to TypeScript's language",source:"@site/docs/tools/typescript-service.md",sourceDirName:"tools",slug:"/tools/typescript-service",permalink:"/rnx-kit/docs/tools/typescript-service",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/typescript-service.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"tsconfig",permalink:"/rnx-kit/docs/tools/tsconfig"}},a={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Language Services",id:"language-services",level:2},{value:"Customizing the Language Service",id:"customizing-the-language-service",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"typescript-service",children:"typescript-service"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@rnx-kit/typescript-service"})," gives you access to TypeScript's language\nservices, and lets you customize how module resolution occurs."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The starting point for working with TypeScript is reading configuration from the\ncommand line, or from a\n",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",children:"configuration file"}),"\nlike ",(0,t.jsx)(n.code,{children:"tsconfig.json"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Both methods yeild a ",(0,t.jsx)(n.code,{children:"ParedCommandLine"})," object, offering the same level of\ncontrol over how TypeScript behaves."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import ts from "typescript";\n\n// Read configuration from a NodeJS command-line\nconst cmdLine = ts.parseCommandLine(process.argv.slice(2));\n\n// Read configuration from a project file (parsed into a TypeScript command-line object)\nconst configFileName = findConfigFile(searchPath);\nif (!configFileName) {\n  throw new Error(`Failed to find config file under ${searchPath}`);\n}\nconst cmdLine = readConfigFile(configFileName);\nif (!cmdLine) {\n  throw new Error(`Failed to read config file ${configFileName}`);\n}\n\n// For either method, handle errors\nif (cmdLine.errors.length > 0) {\n  ...\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"language-services",children:"Language Services"}),"\n",(0,t.jsx)(n.p,{children:"TypeScript's language service allows you to work with source code continuously,\nunlike the TypeScript compiler, which makes a single pass through the code. The\nlanguage service tends to load only what is needed to fulfill the current\nrequest, such as getting diagnostics for a particular source file, or re-loading\na changed file being watched. This saves time and memory, when full source\nvalidation isn't needed."}),"\n",(0,t.jsxs)(n.p,{children:["The language service is accessible through the ",(0,t.jsx)(n.code,{children:"Service"})," and ",(0,t.jsx)(n.code,{children:"Project"})," classes.\n",(0,t.jsx)(n.code,{children:"Service"})," manages shared state across all projects, and is meant to be a\nsingleton. ",(0,t.jsx)(n.code,{children:"Project"})," contains a TypeScript configuration, which includes a list\nof source files. TypeScript configuration comes from either the command line or\na file like ",(0,t.jsx)(n.code,{children:"tsconfig.json"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can use a ",(0,t.jsx)(n.code,{children:"Project"})," to validate code, and emit transpiled JavaScript:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const service = new Service();\nconst project = service.openProject(cmdLine);\n\n// validate\nconst fileHasErrors = project.validateFile(fileName);\nconst projectHasErrors = project.validate();\n\n// emit\nconst fileEmitted = project.emitFile(fileName);\nconst projectEmitted = project.emit();\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also change which files are in a project. This is typically done in\nresponse to an external event, like a callback notifying you that a file has\nbeen added, updated or removed:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import ts from "typescript";\n\nfunction onFileEvent(eventType: string, fileName: string, payload?: string) {\n  if (eventType === "add") {\n    project.addFile(fileName);\n  } else if (eventType === "modify") {\n    project.updateFile(\n      fileName,\n      payload && ts.ScriptSnapshot.fromString(payload)\n    );\n  } else if (eventType === "delete") {\n    project.deleteFile(fileName);\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When you're finished working with a ",(0,t.jsx)(n.code,{children:"Project"}),", you must ",(0,t.jsx)(n.code,{children:"dispose"})," of it to\nproperly release all internal resources:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"project.dispose();\n"})}),"\n",(0,t.jsx)(n.h2,{id:"customizing-the-language-service",children:"Customizing the Language Service"}),"\n",(0,t.jsx)(n.p,{children:"The language service is initialized using a host interface. You can customize\nthe host interface to change the way TypeScript works:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const enhanceLanguageServiceHost = (host: ts.LanguageServiceHost): void => {\n  // change host functions in here\n};\n\nconst service = new Service();\nconst project = service.openProject(cmdLine, enhanceLanguageServiceHost);\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example, you can replace the functions which control how modules and type\nreferences are resolved to files:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function resolveModuleNames(\n  moduleNames: string[],\n  containingFile: string,\n  reusedNames: string[] | undefined,\n  redirectedReference: ResolvedProjectReference | undefined,\n  options: CompilerOptions\n): (ResolvedModule | undefined)[] {\n  /* ... */\n}\n\nfunction resolveTypeReferenceDirectives(\n  typeDirectiveNames: string[],\n  containingFile: string,\n  redirectedReference: ResolvedProjectReference | undefined,\n  options: CompilerOptions\n): (ResolvedTypeReferenceDirective | undefined)[] {\n  /* ... */\n}\n\nconst enhanceLanguageServiceHost = (host: ts.LanguageServiceHost): void => {\n  host.resolveModuleNames = resolveModuleNames;\n  host.resolveTypeReferenceDirectives = resolveTypeReferenceDirectives;\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(7294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);