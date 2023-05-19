"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[396],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=u(r),d=i,b=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return r?a.createElement(b,n(n({ref:t},p),{},{components:r})):a.createElement(b,n({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,n=new Array(s);n[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:i,n[1]=o;for(var u=2;u<s;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=r(7462),i=(r(7294),r(3905));const s={sidebar_position:4,title:"\ud83d\udc77 Status",description:"Status of the Shorebird project."},n=void 0,o={unversionedId:"status",id:"status",title:"\ud83d\udc77 Status",description:"Status of the Shorebird project.",source:"@site/docs/status.md",sourceDirName:".",slug:"/status",permalink:"/status",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/status.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\ud83d\udc77 Status",description:"Status of the Shorebird project."},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee4\ufe0f Multiple Deployment Tracks",permalink:"/guides/multiple_deployment_tracks"},next:{title:"\u2753 FAQ",permalink:"/faq"}},l={},u=[{value:"Beta",id:"beta",level:2},{value:"What works today",id:"what-works-today",level:2},{value:"What doesn&#39;t work yet?",id:"what-doesnt-work-yet",level:2}],p={toc:u},h="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(h,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"beta"},"Beta"),(0,i.kt)("p",null,"Shorebird is currently available as a beta. A lot is still changing, but we're\nready and interested for feedback from the general public."),(0,i.kt)("p",null,"Our goal with this beta is to shake out bugs and ensure that\nwe are building things people want. We ",(0,i.kt)("em",{parentName:"p"},"want")," your feedback. We ",(0,i.kt)("em",{parentName:"p"},"want")," you to\nbreak things. We ",(0,i.kt)("em",{parentName:"p"},"want")," you to tell us what you want to see next."),(0,i.kt)("p",null,"Filing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues"},"issues")," is a good way\nto provide feedback. Feedback via Discord is also welcome."),(0,i.kt)("p",null,"Our guiding principle for these early days is \"first, do no harm\".\nIt should be the case that using Shorebird is never worse than not using Shorebird.\nIt is still possible using early versions of Shorebird could break your app in\nthe wild. If you believe that's the case, please reach out, we're here to help."),(0,i.kt)("h2",{id:"what-works-today"},"What works today"),(0,i.kt)("p",null,"You can build and deploy new (release) versions of your app to all Android\nusers via ",(0,i.kt)("inlineCode",{parentName:"p"},"shorebird")," command line."),(0,i.kt)("p",null,"All users will update to the new version on next launch in the background\n(no control over this behavior yet)."),(0,i.kt)("p",null,"We also have an extensive command line interface for managing your Shorebird\naccount and apps."),(0,i.kt)("h2",{id:"what-doesnt-work-yet"},"What doesn't work yet?"),(0,i.kt)("p",null,"No support for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iOS ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/381"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Asset changes (images, icons, etc.) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/318"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Teams / Organizations sharing apps ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/216"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Older Flutter versions or ",(0,i.kt)("inlineCode",{parentName:"li"},"beta")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," channels (only latest ",(0,i.kt)("inlineCode",{parentName:"li"},"stable")," is supported): ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/472"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Rollbacks (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/126"},"issue"),")"),(0,i.kt)("li",{parentName:"ul"},"Staged rollout of patches (channels or percentage based) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/110"},"issue")),(0,i.kt)("li",{parentName:"ul"},"CI/CD (GitHub Actions, etc.) integration ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/484"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Patch signing ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/112"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Add-to-app integrations ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/480"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Analytics ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/197"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Web interface"),(0,i.kt)("li",{parentName:"ul"},'"Native code" changes (java, kotlin, etc.) -- not planned.'),(0,i.kt)("li",{parentName:"ul"},"Fastlane integration ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/257"},"issue")),(0,i.kt)("li",{parentName:"ul"},"Self-hosting or on-premises deployments ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/485"},"issue"))),(0,i.kt)("p",null,"If these, or anything else is blocking your use of Shorebird, please let us know!\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues"},"https://github.com/shorebirdtech/shorebird/issues")))}c.isMDXComponent=!0}}]);