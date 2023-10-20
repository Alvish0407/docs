"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),i=r(6550),u=r(1980),s=r(7392),c=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=m({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=u??p;return h({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var b=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==i&&(p(t),u(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(v,(0,a.Z)({key:String(t)},e))}},75:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),l=r(5162);const i={sidebar_position:1,title:"\u2604\ufe0f Code Push Quickstart",description:"Try code push for yourself"},u="Code Push Quickstart",s={unversionedId:"guides/code_push_quickstart",id:"guides/code_push_quickstart",title:"\u2604\ufe0f Code Push Quickstart",description:"Try code push for yourself",source:"@site/docs/guides/code_push_quickstart.mdx",sourceDirName:"guides",slug:"/guides/code_push_quickstart",permalink:"/guides/code_push_quickstart",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/guides/code_push_quickstart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u2604\ufe0f Code Push Quickstart",description:"Try code push for yourself"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddfa\ufe0f Guides",permalink:"/guides"},next:{title:"\ud83d\udea2 Release",permalink:"/release"}},c={},p=[{value:"Sign up",id:"sign-up",level:2},{value:"Create an account",id:"create-an-account",level:3},{value:"Create the app",id:"create-the-app",level:2},{value:"Initialize Shorebird",id:"initialize-shorebird",level:3},{value:"Create a release",id:"create-a-release",level:3},{value:"Preview the release",id:"preview-the-release",level:3},{value:"Create a patch",id:"create-a-patch",level:3},{value:"See the patch in action",id:"see-the-patch-in-action",level:3}],d={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"code-push-quickstart"},"Code Push Quickstart"),(0,n.kt)("p",null,"This guide shows you the fastest way to install Shorebird and try code push."),(0,n.kt)("p",null,"This document is a (slightly) condensed version of our ",(0,n.kt)("a",{parentName:"p",href:"../code-push/"},"code push")," docs, all on one page."),(0,n.kt)("h2",{id:"sign-up"},"Sign up"),(0,n.kt)("p",null,"Before you can create a Shorebird app, you will need to sign up for Shorebird."),(0,n.kt)("h3",{id:"create-an-account"},"Create an account"),(0,n.kt)("p",null,"To create an account, head over to the ",(0,n.kt)("a",{parentName:"p",href:"https://console.shorebird.dev"},"Shorebird Console")," and authenticate with your Google account."),(0,n.kt)("p",null,"Once you have logged into the console, follow the instructions to install the Shorebird CLI on your machine."),(0,n.kt)("h2",{id:"create-the-app"},"Create the app"),(0,n.kt)("p",null,"Once you have registered and installed the CLI, you're ready to use code push!"),(0,n.kt)("p",null,"Start by creating a new Flutter app:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"flutter create my_shorebird_app\n")),(0,n.kt)("p",null,"As with any Flutter app, you can verify this created the standard Counter app by\nfollowing the instructions printed by ",(0,n.kt)("inlineCode",{parentName:"p"},"flutter create"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd my_shorebird_app\nflutter run\n")),(0,n.kt)("h3",{id:"initialize-shorebird"},"Initialize Shorebird"),(0,n.kt)("p",null,"To make this a Shorebird app, run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird init\n")),(0,n.kt)("p",null,"This will create a ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird.yaml")," file in the root of your project. This file\ncontains your Shorebird ",(0,n.kt)("inlineCode",{parentName:"p"},"app_id"),"."),(0,n.kt)("p",null,"This will also run ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird doctor")," to ensure everything is set up correctly."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Shorebird expects to find the latest stable ",(0,n.kt)("inlineCode",{parentName:"p"},"flutter")," installed on your machine.\nShorebird can be configured to work with older versions of Flutter (back to 3.10.0).\nSee (Flutter Version Management)","[/flutter-version]"," for more info.")),(0,n.kt)("h3",{id:"create-a-release"},"Create a release"),(0,n.kt)("p",null,"We will create a release using the unmodified Counter app. Run:"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird release android\n"))),(0,n.kt)(l.Z,{value:"ios",label:"iOS (alpha)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird release ios-alpha\n")))),(0,n.kt)("p",null,"When prompted, use the suggested version number (",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.0+1"),"), and enter ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," when\nasked if you would like to continue."),(0,n.kt)("h3",{id:"preview-the-release"},"Preview the release"),(0,n.kt)("p",null,"To preview the release with Shorebird (that is, with ",(0,n.kt)("a",{parentName:"p",href:"/faq#how-does-shorebird-relate-to-flutter"},"Shorebird's fork of the Flutter\nengine"),"), run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird preview\n")),(0,n.kt)("p",null,"Now kill the app on your device or emulator."),(0,n.kt)("h3",{id:"create-a-patch"},"Create a patch"),(0,n.kt)("p",null,"We will now make a small change to the Counter app. In ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/main.dart"),", change\nthe app theme's ",(0,n.kt)("inlineCode",{parentName:"p"},"primarySwatch")," from blue to green:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"},'class MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        // This is the theme of your application.\n        //\n        // Try running your application with "flutter run". You\'ll see the\n        // application has a blue toolbar. Then, without quitting the app, try\n        // changing the primarySwatch below to Colors.green and then invoke\n        // "hot reload" (press "r" in the console where you ran "flutter run",\n        // or simply save your changes to "hot reload" in a Flutter IDE).\n        // Notice that the counter didn\'t reset back to zero; the application\n        // is not restarted.\n-       primarySwatch: Colors.blue,\n+       primarySwatch: Colors.green,\n      ),\n      home: const MyHomePage(title: \'Flutter Demo Home Page\'),\n    );\n  }\n}\n')),(0,n.kt)("p",null,"After making this change, save the file and run:"),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"android",label:"Android",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird patch android\n"))),(0,n.kt)(l.Z,{value:"ios",label:"iOS (alpha)",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird patch ios-alpha\n")))),(0,n.kt)("p",null,"When prompted, use the suggested release version (",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.0+1"),"), and enter ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," when\nasked if you'd like to continue."),(0,n.kt)("h3",{id:"see-the-patch-in-action"},"See the patch in action"),(0,n.kt)("p",null,"Launch the app from your device or emulator. The app will still have the\noriginal blue theme, but it will be downloading the patch we just created in the\nbackground. Kill and launch the app again, and the app will be green! \ud83c\udf89"))}m.isMDXComponent=!0}}]);