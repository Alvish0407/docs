"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[259],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2,title:"iOS | Release a Code Push App",sidebar_label:"\ud83c\udf4e iOS",description:"Release a Code Push App to the Apple App Store"},i="Releasing to the Apple App Store",s={unversionedId:"guides/release/ios",id:"guides/release/ios",title:"iOS | Release a Code Push App",description:"Release a Code Push App to the Apple App Store",source:"@site/docs/guides/release/ios.md",sourceDirName:"guides/release",slug:"/guides/release/ios",permalink:"/guides/release/ios",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/guides/release/ios.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"iOS | Release a Code Push App",sidebar_label:"\ud83c\udf4e iOS",description:"Release a Code Push App to the Apple App Store"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd16 Android",permalink:"/guides/release/android"},next:{title:"\ud83d\udea6 Staging Patches",permalink:"/guides/staging-patches"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Specify a development team in Xcode",id:"specify-a-development-team-in-xcode",level:3},{value:"Creating a release",id:"creating-a-release",level:2},{value:"Determine the release version",id:"determine-the-release-version",level:3},{value:"Create a release in App Store Connect",id:"create-a-release-in-app-store-connect",level:3},{value:"Update the version in <code>pubspec.yaml</code>",id:"update-the-version-in-pubspecyaml",level:3},{value:"Create a Shorebird release",id:"create-a-shorebird-release",level:3},{value:"Upload to the App Store",id:"upload-to-the-app-store",level:2},{value:"Submit the app for review",id:"submit-the-app-for-review",level:2},{value:"After the release is approved",id:"after-the-release-is-approved",level:2},{value:"Creating a patch",id:"creating-a-patch",level:2},{value:"Make code changes",id:"make-code-changes",level:3},{value:"Create a Shorebird patch",id:"create-a-shorebird-patch",level:3}],c={toc:l},d="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"releasing-to-the-apple-app-store"},"Releasing to the Apple App Store"),(0,n.kt)("p",null,"This guide walks through releasing a code push app to the Apple App Store and applying a patch to that release."),(0,n.kt)("p",null,"The app we will be releasing in this guide is Shorebird Clock, our demo code push app. (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/time_shift/"},"source"),")"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To follow along with this guide, you will need the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An existing Shorebird app. If you don't have one, you can create one by following the ",(0,n.kt)("a",{parentName:"li",href:"../code_push_quickstart/"},"code push quickstart")," guide."),(0,n.kt)("li",{parentName:"ol"},"Access to hardware running macOS. This is required to build iOS apps."),(0,n.kt)("li",{parentName:"ol"},"A valid Apple Developer account. This is required to release iOS apps."),(0,n.kt)("li",{parentName:"ol"},"An app in ",(0,n.kt)("a",{parentName:"li",href:"https://appstoreconnect.apple.com/"},"App Store Connect"),". See the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app"},"official documentation")," for more information about how to create one."),(0,n.kt)("li",{parentName:"ol"},"An iOS Distribution certificate. You can create one at ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/account/resources/certificates/add"},"https://developer.apple.com/account/resources/certificates/add"),"."),(0,n.kt)("li",{parentName:"ol"},"An iOS App Store provisioning profile. See the ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/help/account/manage-provisioning-profiles/create-an-app-store-provisioning-profile"},"official documentation")," for instructions on how to create one.")),(0,n.kt)("h3",{id:"specify-a-development-team-in-xcode"},"Specify a development team in Xcode"),(0,n.kt)("p",null,"To build an iOS app for distribution, we need to specify a development team in Xcode. Open ",(0,n.kt)("inlineCode",{parentName:"p"},"ios/Runner.xcworkspace")," in Xcode and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Runner")," target:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/786b1def-6198-4be0-90ac-d307e9b1a289",alt:"Xcode development team"})),(0,n.kt)("h2",{id:"creating-a-release"},"Creating a release"),(0,n.kt)("h3",{id:"determine-the-release-version"},"Determine the release version"),(0,n.kt)("p",null,"Navigate to your app on the ",(0,n.kt)("a",{parentName:"p",href:"https://console.shorebird.dev/"},"Shorebird console"),"\nto see the current set of releases. For our app, we see that the latest release\nversion is ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.3+1"),", so the version of our next release will be ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.4+1"),"."),(0,n.kt)("h3",{id:"create-a-release-in-app-store-connect"},"Create a release in App Store Connect"),(0,n.kt)("p",null,"Because the App Store does not include the build number (the ",(0,n.kt)("inlineCode",{parentName:"p"},"+1")," part of ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.4+1"),") in app versions, this will show up in the App Store as ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.4"),". Follow the instructions in the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/help/app-store-connect/update-your-app/create-a-new-version"},"official documentation")," to create a new version in App Store Connect."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/549a42ac-0202-4c72-a9a9-d0196a0308b6",alt:"App Store Connect version"})),(0,n.kt)("h3",{id:"update-the-version-in-pubspecyaml"},"Update the version in ",(0,n.kt)("inlineCode",{parentName:"h3"},"pubspec.yaml")),(0,n.kt)("p",null,"Update the version in ",(0,n.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0.4+1"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"}," name: shorebird_clock\n description: A demo app for Shorebird\n- version: 1.0.3+1\n+ version: 1.0.4+1\n")),(0,n.kt)("h3",{id:"create-a-shorebird-release"},"Create a Shorebird release"),(0,n.kt)("p",null,"Create a Shorebird release by running the ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird release ios")," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ shorebird release ios\n\u2713 Fetching apps (0.1s)\n\u2713 Building release (56.2s)\n\u2713 Getting release version (37ms)\n\u2713 Fetching releases (0.1s)\n\ud83d\ude80 Ready to create a new release!\n\ud83d\udcf1 App: time_shift (f2184ee6-9a85-498c-bfeb-114d638c462e)\n\ud83d\udce6 Release Version: 1.0.4+1\n\ud83d\udd79\ufe0f Platform: ios\n\nWould you like to continue? (y/N) Yes\n\u2713 Fetching Flutter revision (36ms)\n\u2713 Creating release (0.2s)\n\u2713 Creating artifacts (8.0s)\n\u2713 Updating release status (57ms)\n\n\u2705 Published Release!\n\nYour next step is to upload your app to App Store Connect.\n\nTo upload to the App Store, do one of the following:\n    1. Open build/ios/archive/Runner.xcarchive in Xcode and use the "Distribute App" flow.\n    2. Drag and drop the build/ios/ipa/time_shift.ipa bundle into the Apple Transporter macOS app (https://apps.apple.com/us/app/transporter/id1450874784).\n    3. Run xcrun altool --upload-app --type ios -f build/ios/ipa/time_shift.ipa --apiKey your_api_key --apiIssuer your_issuer_id.\n       See "man altool" for details about how to authenticate with the App Store Connect API key.\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you perform your own code signing and do not want Shorebird to codesign your app, you can pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"--no-codesign")," flag to the ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird release ios")," command. Because only signed code can be run on iOS devices, ",(0,n.kt)("strong",{parentName:"p"},"releases created this way will not be previewable using the ",(0,n.kt)("inlineCode",{parentName:"strong"},"shorebird preview")," command.")," You can still download and run these releases through TestFlight.")),(0,n.kt)("h2",{id:"upload-to-the-app-store"},"Upload to the App Store"),(0,n.kt)("p",null,'Open the .xcarchive in Xcode and use the "Distribute App" flow:'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/eafebdee-0e26-410a-8997-4eed056d4b6d",alt:"Xcode Organizer"})),(0,n.kt)("p",null,"As of Xcode 15, you will make the following choices:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'"Custom" as the distribution method.\n',(0,n.kt)("img",{parentName:"li",src:"https://github.com/shorebirdtech/docs/assets/581764/8b049b0b-d6f5-419e-a91f-511923997f50",alt:"Xcode distribution method 1"})),(0,n.kt)("li",{parentName:"ol"},'"App Store Connect" as the distribution method.\n',(0,n.kt)("img",{parentName:"li",src:"https://github.com/shorebirdtech/docs/assets/581764/4fd6821a-80b4-4a35-b081-e8f97c59b8a2",alt:"Xcode distribution method 2"})),(0,n.kt)("li",{parentName:"ol"},'"Upload" as the destination.\n',(0,n.kt)("img",{parentName:"li",src:"https://github.com/shorebirdtech/docs/assets/581764/f05c3603-c045-4662-84ad-c0a218e7145b",alt:"Upload destination"})),(0,n.kt)("li",{parentName:"ol"},"A few distribution options that are up to you. Importantly, ",(0,n.kt)("strong",{parentName:"li"},"Manage Version and Build Number must be unchecked for Shorebird to work"),". Because Shorebird targets patches at specific release versions, changing the version or build number will prevent your app from receiving patches.\n",(0,n.kt)("img",{parentName:"li",src:"https://github.com/shorebirdtech/shorebird/assets/581764/c6ae0857-7ad8-4a8f-ae8b-55d05d52f3b3",alt:"Xcode distribution options"})),(0,n.kt)("li",{parentName:"ol"},"Automatically manage signing or manually manage signing. This is up to you. If you choose to manually manage signing, you will need to select the appropriate development team, provisioning profile, and signing certificate for your app."),(0,n.kt)("li",{parentName:"ol"},"Confirm the upload.")),(0,n.kt)("p",null,"Xcode will upload your archive, and if no issues are found, will show a message telling you that the upload was successful:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/shorebird/assets/581764/678354e5-a445-4c55-94fc-7608ff0b241d",alt:"Xcode upload succeeded"})),(0,n.kt)("p",null,'After a short delay (usually a minute or two), you will see the build listed as "Processing" in App Store Connect:'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/a87cdb31-9f8d-4838-b21b-38a3dbf9dcd1",alt:"App Store Connect Processing"})),(0,n.kt)("p",null,"Once the app has finished processing, we can add it to our release:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/da2f1253-610b-4ee5-abb4-7c088da1631c",alt:"App Store Connect add build"})),(0,n.kt)("h2",{id:"submit-the-app-for-review"},"Submit the app for review"),(0,n.kt)("p",null,"When we attempt to submit the app for review, App Store Connect will list the issues we need to resolve before we can submit the app:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/581764/576459e0-3212-4ead-8388-eabb3b01c68a",alt:"App Store Connect review issues"})),(0,n.kt)("h2",{id:"after-the-release-is-approved"},"After the release is approved"),(0,n.kt)("p",null,"Once the release has been approved, you will be able to download it from the App Store."),(0,n.kt)("h2",{id:"creating-a-patch"},"Creating a patch"),(0,n.kt)("p",null,"Patches can be pushed to fix bugs in the ",(0,n.kt)("inlineCode",{parentName:"p"},"App Store")," release without requiring a new submission to the App Store."),(0,n.kt)("h3",{id:"make-code-changes"},"Make code changes"),(0,n.kt)("p",null,"For the purposes of this guide, we will change the default clock face to ",(0,n.kt)("inlineCode",{parentName:"p"},"generative")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/main.dart"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"},"     (clock) => clock.name == clockName,\n-    orElse: () => ClockFace.particle,\n+    orElse: () => ClockFace.generative,\n   );\n")),(0,n.kt)("h3",{id:"create-a-shorebird-patch"},"Create a Shorebird patch"),(0,n.kt)("p",null,"To make this patch available to your users, run ",(0,n.kt)("inlineCode",{parentName:"p"},"shorebird patch ios"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ shorebird patch ios\n\u2713 Fetching apps (0.4s)\n\u2713 Building release (61.5s)\n\u2713 Detected release version 1.0.4+1 (44ms)\n\u2713 Fetching releases (0.1s)\n\u2713 Fetching Flutter revision (23ms)\n\n\ud83d\ude80 Ready to publish a new patch!\n\n\ud83d\udcf1 App: time_shift (f2184ee6-9a85-498c-bfeb-114d638c462e)\n\ud83d\udce6 Release Version: 1.0.4+1\n\ud83d\udcfa Channel: stable\n\ud83d\udd79\ufe0f Platform: ios [aarch64 (4.17 MB)]\n\nWould you like to continue? (y/N) Yes\n\u2713 Creating patch (72ms)\n\u2713 Uploading artifacts (0.5s)\n\u2713 Fetching channels (58ms)\n\u2713 Promoting patch to stable (61ms)\n\n\u2705 Published Patch!\n")))}h.isMDXComponent=!0}}]);