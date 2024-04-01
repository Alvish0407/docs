"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(r),c=o,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||n;return r?a.createElement(m,i(i({ref:t},l),{},{components:r})):a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>p,toc:()=>d});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:2,title:"iOS | Hybrid App",sidebar_label:"\ud83c\udf4e iOS",description:"Use code push in an hybrid app scenario with an iOS app"},i="Code Push In Hybrid Apps",p={unversionedId:"guides/hybrid-app/ios",id:"guides/hybrid-app/ios",title:"iOS | Hybrid App",description:"Use code push in an hybrid app scenario with an iOS app",source:"@site/docs/guides/hybrid-app/ios.md",sourceDirName:"guides/hybrid-app",slug:"/guides/hybrid-app/ios",permalink:"/guides/hybrid-app/ios",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/guides/hybrid-app/ios.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"iOS | Hybrid App",sidebar_label:"\ud83c\udf4e iOS",description:"Use code push in an hybrid app scenario with an iOS app"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 Android",permalink:"/guides/hybrid-app/android"},next:{title:"\ud83d\ude91 Crash Reporting",permalink:"/guides/crash-reporting"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add Shorebird to your Flutter module",id:"add-shorebird-to-your-flutter-module",level:2},{value:"Create a Shorebird release",id:"create-a-shorebird-release",level:2},{value:"Embed the Flutter module in your iOS app",id:"embed-the-flutter-module-in-your-ios-app",level:2},{value:"Add the path to your .xcframeworks to Framework Search Paths",id:"add-the-path-to-your-xcframeworks-to-framework-search-paths",level:3},{value:"Embed App.xcframework and Flutter.xcframework in your app",id:"embed-appxcframework-and-flutterxcframework-in-your-app",level:3},{value:"Verify that your app runs",id:"verify-that-your-app-runs",level:2},{value:"Submit your app to the App Store",id:"submit-your-app-to-the-app-store",level:2},{value:"Verify that Shorebird is working with a patch",id:"verify-that-shorebird-is-working-with-a-patch",level:2}],l={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-push-in-hybrid-apps"},"Code Push In Hybrid Apps"),(0,o.kt)("p",null,"This guide explains how to use Shorebird in an iOS hybird app scenario (that is, your app embeds Flutter UI in non-Flutter UI)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If your app is a pure Flutter app, follow the ",(0,o.kt)("a",{parentName:"p",href:"../../code-push"},"standard code push guide")," instead.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This guide assumes you have already have an iOS app and a Flutter module. Our\niOS app will be named ",(0,o.kt)("inlineCode",{parentName:"p"},"IosCodePushDemo")," and our Flutter module will be named\n",(0,o.kt)("inlineCode",{parentName:"p"},"flutter_module"),"."),(0,o.kt)("p",null,"This guide also assumes that you have created a Shorebird account. If you have\nnot created a Shorebird account, please see our ",(0,o.kt)("a",{parentName:"p",href:"../../code-push"},"code push guide"),"\nfor instructions."),(0,o.kt)("p",null,"The reference code for this guide is available at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/samples/tree/main/add_to_app"},"https://github.com/shorebirdtech/samples/tree/main/add_to_app"),"."),(0,o.kt)("h2",{id:"add-shorebird-to-your-flutter-module"},"Add Shorebird to your Flutter module"),(0,o.kt)("p",null,"First, run ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird init")," in your Flutter module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird init\n")),(0,o.kt)("h2",{id:"create-a-shorebird-release"},"Create a Shorebird release"),(0,o.kt)("p",null,"First, we need to package our Flutter module for release. This will produce an\n.xcframework that we can embed in our iOS app and provide Shorebird with the\ninformation it needs to apply patches."),(0,o.kt)("p",null,"To create a release, run the following the root directory of your Flutter module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shorebird release ios-framework --release-version 1.2.3+4\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"release-version")," parameter needs to match the version of the iOS app\nthat uses this module (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"version+build")," from the Xcode settings, or\n",(0,o.kt)("inlineCode",{parentName:"p"},"CFBundleShortVersionString+CFBundleVersion")," from your app's Info.plist)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/314289ed-b3bd-46fa-b49a-cea7d482d831",alt:"Xcode build version"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The version number for this app would be 1.2.3+4")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ShorebirdFlutter.xcframework")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"App.xcframework")," artifacts produced by\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"shorebird release")," command will be placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," directory in the\nroot of your Flutter module."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Because Shorebird only works with release builds, this will only produce a\nrelease version of your archive. This is similar to running\n",(0,o.kt)("inlineCode",{parentName:"p"},"flutter build ios-framework --no-debug --no-profile"),".")),(0,o.kt)("h2",{id:"embed-the-flutter-module-in-your-ios-app"},"Embed the Flutter module in your iOS app"),(0,o.kt)("p",null,"While there are multiple ways to embed a Flutter module in an iOS app, Shorebird\nrequires that your Flutter module be embedded in your iOS app as an\n.xcframework."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The steps to do this are the same as the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/add-to-app/ios/project-setup#option-b---embed-frameworks-in-xcode"},"option B in the official instructions"),",\nso in the event of a conflict between the docs here and the official docs, defer\nto the official docs.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"ShorebirdFlutter.xcframework")," is nearly identically to ",(0,o.kt)("inlineCode",{parentName:"p"},"Flutter.xcframework"),"\nfrom Google, but as part of compliance with Apple's signing requirements, we've\nrenamed the framework when applying Shorebird (legally Code Town, Inc's) digital\nsignature.")),(0,o.kt)("h3",{id:"add-the-path-to-your-xcframeworks-to-framework-search-paths"},"Add the path to your .xcframeworks to Framework Search Paths"),(0,o.kt)("p",null,"In Xcode:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Navigate to your app target\'s "Build Settings" tab.'),(0,o.kt)("li",{parentName:"ol"},'Find the "Framework Search Paths" setting (the Filter field on the top right\nof the build settings tab is helpful for this).'),(0,o.kt)("li",{parentName:"ol"},'Add an entry to the "Framework Search Paths" list. This entry should be the\nrelative path to the directory containing ',(0,o.kt)("inlineCode",{parentName:"li"},"ShorebirdFlutter.xcframework")," and\n",(0,o.kt)("inlineCode",{parentName:"li"},"App.xcframework")," artifacts. By default, these artifacts are placed in the\n",(0,o.kt)("inlineCode",{parentName:"li"},"release")," directory in the root of your Flutter module, but you should feel\nfree to move them elsewhere if you prefer.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/50f92f9c-4bf6-49ce-a4e7-664b8bf8283a",alt:"Xcode framework search paths"})),(0,o.kt)("h3",{id:"embed-appxcframework-and-flutterxcframework-in-your-app"},"Embed App.xcframework and Flutter.xcframework in your app"),(0,o.kt)("p",null,'In the "General" tab of your app target, add ',(0,o.kt)("inlineCode",{parentName:"p"},"App.xcframework")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"ShorebirdFlutter.xcframework"),' from to the "Frameworks, Libraries, and Embedded\nContent" section. Make sure to select "Embed & Sign" for both frameworks.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/fe5911bd-046b-47f9-a4d8-d8548e651bd6",alt:"Xcode embed frameworks"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You may also see that ",(0,o.kt)("inlineCode",{parentName:"p"},"ShorebirdFlutter.xcframework")," is signed by Code Town Inc.\nThat's us \ud83d\ude42")),(0,o.kt)("h2",{id:"verify-that-your-app-runs"},"Verify that your app runs"),(0,o.kt)("p",null,'In Xcode, update the current scheme\'s build configuration to "Release"'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/cf32be57-c49e-4ff6-aca2-8be06b44f2f9",alt:"Xcode edit schemes"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/92417ee8-dc66-4cbb-99e7-d940165e4caf",alt:"Xcode release scheme"})),(0,o.kt)("p",null,"Now run your app on a device (",(0,o.kt)("em",{parentName:"p"},"not")," a simulator). Your app should run as normal,\nand you should see debug logs from Shorebird."),(0,o.kt)("h2",{id:"submit-your-app-to-the-app-store"},"Submit your app to the App Store"),(0,o.kt)("p",null,"We won't cover this step in detail here, but this is where you would submit your\napp to the App Store. For code push to work, it is important that you submit\n",(0,o.kt)("em",{parentName:"p"},"with the same ",(0,o.kt)("inlineCode",{parentName:"em"},"xcframework")," generated by the release command above"),"."),(0,o.kt)("p",null,"You can skip this step if you just want to see Code Push working in an app."),(0,o.kt)("h2",{id:"verify-that-shorebird-is-working-with-a-patch"},"Verify that Shorebird is working with a patch"),(0,o.kt)("p",null,"Make a user-visible change to the code in your Flutter module. Then run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shorebird patch ios-framework --release-version 1.2.3+4\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"release-version")," should be the version of the iOS app you released with the\noutput of the ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," command. As before, this should match your app's version\nand build numbers in Xcode. The command above will patch the release we created\nearlier in this guide."),(0,o.kt)("p",null,"You can now test the patch in your app by running the app from Xcode. After\nthe app launches, you should see a logs from Shorebird informing you that the\napp is checking for new patches and saying that the patch was installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Sending patch check request: PatchCheckRequest { app_id: "db32f785-284a-429b-9348-d3ead3485438", channel: "stable", release_version: "1.2.3+4", patch_number: None, platform: "ios", arch: "aarch64" }\n\n/// other logs\n\nPatch 1 successfully installed.\n')),(0,o.kt)("p",null,"For the app to reflect the changes, you will need to close and reopen the app.\nDo this by stopping the app in Xcode and then running it again."))}h.isMDXComponent=!0}}]);