"use strict";(self.webpackChunkmateuszperczak_github_io=self.webpackChunkmateuszperczak_github_io||[]).push([[288],{4799:function(n,e,r){var t,i=r(168),o=r(9958).Z.header(t||(t=(0,i.Z)(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  padding: 20px;\n  font-size: 1.5rem;\n  user-select: none;\n  z-index: 2;\n  background: ",";\n  border-bottom: 1px solid\n    ",";\n  animation: 200ms blur-header 100ms both;\n  @keyframes blur-header {\n    0% {\n      backdrop-filter: blur(0px) saturate(0%);\n    }\n    100% {\n      backdrop-filter: blur(5px) saturate(180%);\n    }\n  }\n"])),(function(n){return n.theme.backgroundBlur}),(function(n){return n.theme.border}));e.Z=o},2025:function(n,e,r){var t,i=r(168),o=r(9958).Z.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  padding: 10px;\n  gap: 10px;\n"])));e.Z=o},2513:function(n,e,r){var t,i=r(1413),o=r(168),a=r(9958),s=r(184),c=a.Z.div(t||(t=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  flex-grow: 1;\n  border-radius: 10px;\n  background: ",";\n  border: 1px solid\n    ",";\n"])),(function(n){var e=n.theme,r=e.backgroundLight,t=e.background;return"linear-gradient(45deg, ".concat(r,", ").concat(t,")")}),(function(n){return n.theme.border}));e.Z=function(n){return(0,s.jsx)(c,(0,i.Z)({},n))}},2588:function(n,e,r){var t,i=r(168),o=r(9958),a=r(184),s=o.Z.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: ",";\n  width: 100%;\n  padding: 10px;\n  gap: 10px;\n  flex-wrap: ",";\n  flex-grow: ",";\n"])),(function(n){return n.flexDirection}),(function(n){return n.flexWrap}),(function(n){return n.flexGrow}));e.Z=function(n){var e=n.children,r=n.flexDirection,t=void 0===r?"column":r,i=n.flexWrap,o=void 0===i?"nowrap":i,c=n.flexGrow,u=void 0===c?0:c;return(0,a.jsx)(s,{flexDirection:t,flexWrap:o,flexGrow:u,children:e})}},6657:function(n,e,r){var t,i=r(168),o=r(9958),a=r(5972),s=r(184),c=o.Z.div(t||(t=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px;\n  border-bottom: 1px solid\n    ",";\n"])),(function(n){return n.theme.border}));e.Z=function(n){var e=n.header,r=n.icon;return(0,s.jsxs)(c,{children:[(0,s.jsx)("span",{children:e}),(0,s.jsx)(a.Z,{children:r})]})}},2336:function(n,e,r){var t,i=r(168),o=r(9958),a=r(8472),s=r(184),c=o.Z.div(t||(t=(0,i.Z)(["\n  displey: flex;\n  flex-direction: column;\n  padding-right: 10px;\n"])));e.Z=function(n){var e=n.description,r=n.header;return(0,s.jsxs)(c,{children:[(0,s.jsx)("header",{children:r}),(0,s.jsx)(a.Z,{fontSize:.8,children:e})]})}},8472:function(n,e,r){var t,i=r(168),o=r(9958).Z.span(t||(t=(0,i.Z)(["\n  font-size: ","rem;\n"])),(function(n){return n.fontSize}));e.Z=o},4288:function(n,e,r){r.r(e);var t=r(2791),i=r(4139),o=r(4799),a=r(2025),s=r(2513),c=r(6657),u=r(2588),d=r(8472),l=r(2336),f=r(3168),p=r(184),g=function(){var n=(0,i.useSpring)({from:{opacity:0,transform:"scale(0.95)"},to:{opacity:1,transform:"scale(1)"},config:{tension:400}}),e=(0,f.$)("skills").t;return(0,p.jsxs)(i.animated.div,{style:n,children:[(0,p.jsx)(o.Z,{children:e("title")}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(c.Z,{header:e("programingLanguages"),icon:"\ue943"}),(0,p.jsxs)(u.Z,{flexDirection:"column",children:[(0,p.jsx)(l.Z,{header:"Regular:",description:"JavaScript, Python"}),(0,p.jsx)(l.Z,{header:"Junior:",description:"TypeScript, C#"})]})]}),(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(c.Z,{header:e("descriptiveLanguages"),icon:"\ue943"}),(0,p.jsx)(u.Z,{flexDirection:"row",children:(0,p.jsx)(d.Z,{fontSize:.8,children:"HTML, CSS, SCSS, Markdown"})})]}),(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(c.Z,{header:e("versionControl"),icon:"\uf22c"}),(0,p.jsx)(u.Z,{flexDirection:"row",children:(0,p.jsx)(d.Z,{fontSize:.8,children:"Git, Github, Github actions"})})]}),(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(c.Z,{header:e("runtimesAndImplementations"),icon:"\ue621"}),(0,p.jsx)(u.Z,{flexDirection:"row",children:(0,p.jsx)(d.Z,{fontSize:.8,children:"NodeJS, PyPy"})})]}),(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(c.Z,{header:e("frameworksAndLibraries"),icon:"\uec7a"}),(0,p.jsxs)(u.Z,{flexDirection:"column",children:[(0,p.jsx)(l.Z,{header:"JavaScript, TypeScript:",description:"React, Next, Astro, Emotion, Webpack, Lodash, react-spring,\r react-reduce-motion, react-router-dom, react-i18next,\r use-system-theme, react-draggable, use-local-storage"}),(0,p.jsx)(l.Z,{header:"Python:",description:"Pygame, darkdetect, Tkinter, GPUtil, Mutagen, win10toast, PIL,\r wmi, os, pillow, threading, webbrowser, win32api, cryptography,\r pyperclip, difflib, requests, zipfile, psutil, random, io,\r hashlib, ctypes, dataclasses, autocorrect"}),(0,p.jsx)(l.Z,{header:"C#:",description:"WinUi"})]})]}),(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(c.Z,{header:e("languages"),icon:"\uf2b7"}),(0,p.jsxs)(u.Z,{children:[(0,p.jsx)(d.Z,{fontSize:.8,children:"Polish - Native"}),(0,p.jsx)(d.Z,{fontSize:.8,children:"English - B2+"})]})]})]})]})};e.default=(0,t.memo)(g)},3168:function(n,e,r){r.d(e,{$:function(){return h}});var t=r(9439),i=r(4942),o=r(2791),a=r(4909);function s(){if(console&&console.warn){for(var n,e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(n=console).warn.apply(n,r)}}var c={};function u(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];"string"===typeof e[0]&&c[e[0]]||("string"===typeof e[0]&&(c[e[0]]=new Date),s.apply(void 0,e))}function d(n,e,r){n.loadNamespaces(e,(function(){if(n.isInitialized)r();else{n.on("initialized",(function e(){setTimeout((function(){n.off("initialized",e)}),0),r()}))}}))}function l(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=e.languages[0],i=!!e.options&&e.options.fallbackLng,o=e.languages[e.languages.length-1];if("cimode"===t.toLowerCase())return!0;var a=function(n,r){var t=e.services.backendConnector.state["".concat(n,"|").concat(r)];return-1===t||2===t};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!a(e.isLanguageChangingTo,n))&&(!!e.hasResourceBundle(t,n)||(!(e.services.backendConnector.backend&&(!e.options.resources||e.options.partialBundledLanguages))||!(!a(t,n)||i&&!a(o,n))))}function f(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e.languages||!e.languages.length)return u("i18n.languages were undefined or empty",e.languages),!0;var t=void 0!==e.options.ignoreJSONStructure;return t?e.hasLoadedNamespace(n,{precheck:function(e,t){if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!t(e.isLanguageChangingTo,n))return!1}}):l(n,e,r)}function p(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function g(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){(0,i.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function h(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.i18n,i=(0,o.useContext)(a.OO)||{},s=i.i18n,c=i.defaultNS,l=r||s||(0,a.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new a.zv),!l){u("You will need to pass in an i18next instance by using initReactI18next");var p=function(n){return Array.isArray(n)?n[n.length-1]:n},h=[p,{},!1];return h.t=p,h.i18n={},h.ready=!1,h}l.options.react&&void 0!==l.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var x=g(g(g({},(0,a.JP)()),l.options.react),e),b=x.useSuspense,v=x.keyPrefix,m=n||c||l.options&&l.options.defaultNS;m="string"===typeof m?[m]:m||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(m);var Z=(l.isInitialized||l.initializedStoreOnce)&&m.every((function(n){return f(n,l,x)}));function y(){return l.getFixedT(null,"fallback"===x.nsMode?m:m[0],v)}var j=(0,o.useState)(y),w=(0,t.Z)(j,2),k=w[0],S=w[1],O=(0,o.useRef)(!0);(0,o.useEffect)((function(){var n=x.bindI18n,e=x.bindI18nStore;function r(){O.current&&S(y)}return O.current=!0,Z||b||d(l,m,(function(){O.current&&S(y)})),n&&l&&l.on(n,r),e&&l&&l.store.on(e,r),function(){O.current=!1,n&&l&&n.split(" ").forEach((function(n){return l.off(n,r)})),e&&l&&e.split(" ").forEach((function(n){return l.store.off(n,r)}))}}),[l,m.join()]);var z=(0,o.useRef)(!0);(0,o.useEffect)((function(){O.current&&!z.current&&S(y),z.current=!1}),[l]);var C=[k,l,Z];if(C.t=k,C.i18n=l,C.ready=Z,Z)return C;if(!Z&&!b)return C;throw new Promise((function(n){d(l,m,(function(){n()}))}))}}}]);
//# sourceMappingURL=288.43127233.chunk.js.map