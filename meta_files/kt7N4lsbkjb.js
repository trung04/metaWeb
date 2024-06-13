;/*FB_PKG_DELIM*/

__d("BUIGuidanceCardContentStackContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(!1);c=b;g["default"]=c}),98);
__d("GeoBasePressable.react",["BUIPrivateButtonLayoutContext","GeoPrivateAnimationPressableOverlay.react","GeoPrivateButtonLayerActionContext","GeoPrivateLoggingAction","GeoPrivateLoggingClassification","GeoPrivateMakeComponent","GeoPrivatePressable.react","gkx","react","stylex","useGeoExpectationViolation","useGeoPrivateWithLogging","useGeoTheme","useMergeRefs"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useContext,m=b.useMemo,n=b.useRef,o=b.useState,p=c("gkx")("24835");function a(a){var b=a.accessibilityRole;b=b===void 0?"button":b;var d=a["aria-controls"],e=a["aria-describedby"],f=a["aria-haspopup"],g=a["aria-label"],i=a["aria-labelledby"],q=a["aria-pressed"],s=a.children,t=a.containerRef,u=a.context;u=u===void 0?"control":u;var x=a["data-testid"],y=a.density;y=y===void 0?"coarse":y;var z=a.direction,A=a.grow;A=A===void 0?"auto":A;var B=a.hasAnimation;B=B===void 0?!0:B;var C=a.href,D=a.id,E=a.isDisabled;E=E===void 0?!1:E;var F=a.isFocusable;F=F===void 0?!0:F;var G=a.isVisuallyActive;G=G===void 0?!1:G;var H=a.loggingName;H=H===void 0?"GeoBasePressable":H;var I=a.onBlur,J=a.onFocus,K=a.onFocusVisible,L=a.onHoverEnd,M=a.onHoverStart,N=a.onPress,O=a.rel,P=a.target,Q=a.variant;Q=Q===void 0?"default":Q;a=a.xstyle;var R=o(!1),S=R[0],T=R[1];R=o(!1);var U=R[0];R=R[1];var V=o(!1),W=V[0];V=V[1];var X=c("BUIPrivateButtonLayoutContext").useLayoutContext(),Y=X[0];X=X[1];var Z=n(null);X=c("useMergeRefs")(c("useMergeRefs")(X,Z),t);Z=l(c("GeoPrivateButtonLayerActionContext"));t=w(Q);Q=c("useGeoExpectationViolation")();B=p&&B;i==null&&g==null&&Q("GeoBasePressable expects either an aria-labelledby or aria-label prop for better accessibility.");var $=c("useGeoPrivateWithLogging")(N,{name:H,action:c("GeoPrivateLoggingAction").CLICK,classification:c("GeoPrivateLoggingClassification").USER_ACTION});Q=function(a){$==null?void 0:$(a)};N=k(function(a){T(a),K==null?void 0:K(a)},[K]);H=S||U;U=G||W;G=r({color:t,context:u,density:y,direction:z,grow:A,isDisabled:E,isFocused:!B&&H,isActive:!B&&U});W=v({isActive:S,color:t,context:u});y=m(function(){return{controls:d,describedby:e,labelledby:i,haspopup:f}},[d,e,f,i]);z=m(function(){return{pressed:q!=null?q:null}},[q]);return j.jsxs(c("GeoPrivatePressable.react"),{accessibilityLabel:g,accessibilityRelationship:y,accessibilityRole:b,accessibilityState:z,className_DEPRECATED:(A=Z)!=null?A:void 0,disabled:E,forwardedRef:X,link:C!=null?{url:C.toString(),target:P,rel:O}:null,nativeID:D,onBlur:I,onFocus:J,onFocusVisibleChange:N,onHoverChange:R,onHoverEnd:L,onHoverStart:M,onPress:$!=null?Q:null,onPressChange:V,preventDefault:C==null,style:babelHelpers["extends"]({},Y),tabbable:F,testID:x,xstyle:[G,a],children:[B&&j.jsx(c("GeoPrivateAnimationPressableOverlay.react"),{color:t,isActive:U,isFocused:H}),S&&j.jsx("div",{className:(h||(h=c("stylex")))(W),style:babelHelpers["extends"]({},Y)}),s]})}a.displayName=a.name+" [from "+f.id+"]";var q={root:{position:"x1n2onr6",display:"x3nfvp2",flexDirection:"x1q0g3np",verticalAlign:"xxymvpz",borderTopStyle:"x1ejq31n",borderEndStyle:"xd10rxx",borderBottomStyle:"x1sy0etr",borderStartStyle:"x17r0tee",userSelect:"x87ps6o",outlineStyle:"x1t137rt",MozOsxFontSmoothing:"xlh3980",WebkitFontSmoothing:"xvmahel",textDecoration:"x1hl2dhg",":hover_textDecoration":"x1lku1pv",$$css:!0},grow:{display:"x78zum5",flexGrow:"x1iyjqo2",flexShrink:"xs83m0k",$$css:!0}};function r(a){var b=a.color,d=a.context,e=a.density,f=a.direction;f=f===void 0?null:f;var g=a.grow,h=a.isDisabled;h=h===void 0?!1:h;var i=a.isFocused;i=i===void 0?!1:i;a=a.isActive;a=a===void 0?!1:a;var j=c("useGeoTheme")(),k=j.selectBorderRadius,l=j.selectInteractiveColorPalette;j=j.selectSpacing;f=s(f);return[q.root,g==="fill"&&q.grow,k({context:d}),l({color:b,isDisabled:h,isFocused:i,isActive:a}),e!=="none"&&j({context:"control",bounds:"internal",target:e}),f]}function s(a){if(a==null)return null;if(a==="column")return t.columnDirection;if(a==="row")return t.rowDirection;if(a==="row-reverse")return t.rowReverseDirection;if(a==="column-reverse")return t.columnReverseDirection}var t={columnDirection:{flexDirection:"xdt5ytf",$$css:!0},rowDirection:{flexDirection:"x1q0g3np",$$css:!0},rowReverseDirection:{flexDirection:"x15zctf7",$$css:!0},columnReverseDirection:{flexDirection:"x3ieub6",$$css:!0}},u={root:{position:"x10l6tqk",start:"xzadtn0",left:null,right:null,end:"x1esfoun",top:"x1pdr0v7",bottom:"xqmqy1e",$$css:!0}};function v(a){var b=a.isActive;b=b===void 0?!1:b;var d=a.color;a=a.context;a=a===void 0?"control":a;var e=c("useGeoTheme")(),f=e.selectBorderRadius;e=e.selectOutline;return[f({context:a}),e({color:d,isActive:b}),u.root]}function w(a){a===void 0&&(a="default");return a==="default"?"wash":a}e=d("GeoPrivateMakeComponent").makeGeoComponent("GeoBasePressable",a);g["default"]=e}),98);
__d("GeoBaseInlinePressable.react",["GeoBasePressable.react","GeoBaseText.react","GeoPrivateMakeComponent","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return i.jsx(c("GeoBasePressable.react"),babelHelpers["extends"]({},a,{children:i.jsx(c("GeoBaseText.react"),{color:"inherit",size:"value",weight:"inherit",xstyle:j.fullWidth,children:b})}))}a.displayName=a.name+" [from "+f.id+"]";var j={fullWidth:{width:"xh8yej3",$$css:!0}};b=d("GeoPrivateMakeComponent").makeGeoComponent("GeoBaseInlinePressable",a);g["default"]=b}),98);
__d("GeoHintActionButton.react",["GeoButton.react","GeoPrivateMakeComponent","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.variant;b=b===void 0?"primary":b;a=babelHelpers.objectWithoutPropertiesLoose(a,["variant"]);return i.jsx(c("GeoButton.react"),babelHelpers["extends"]({variant:b},a))}a.displayName=a.name+" [from "+f.id+"]";b=d("GeoPrivateMakeComponent").makeGeoComponent("GeoHintActionButton",a);g["default"]=b}),98);
__d("GeoPrivateHintAdditionalContent.react",["GeoBaseSpacingLayout.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.action;a=a.learnMore;var d=b!=null;return i.jsxs(c("GeoBaseSpacingLayout.react"),{align:"center",context:"container",direction:"horizontal",relation:"section",xstyle:[j.root,!d&&j.singleContent],children:[d&&b,a!=null&&a]})}a.displayName=a.name+" [from "+f.id+"]";var j={root:{justifyContent:"x1qughib",marginTop:"x1xmf6yo",$$css:!0},singleContent:{flexDirection:"x15zctf7",$$css:!0}};g["default"]=a}),98);
__d("GeoPopoverContent.react",["GeoPrivateHintAdditionalContent.react","GeoPrivateHintContent.react","GeoPrivateMakeComponent","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.action,d=a.content,e=a.description,f=a.heading,g=a.learnMore,h=a.status;a=babelHelpers.objectWithoutPropertiesLoose(a,["action","content","description","heading","learnMore","status"]);return i.jsx(c("GeoPrivateHintContent.react"),babelHelpers["extends"]({},a,{additionalContent:b!=null||g!=null?i.jsx(c("GeoPrivateHintAdditionalContent.react"),{action:b,learnMore:g}):null,content:d,description:e,heading:f,status:h}))}a.displayName=a.name+" [from "+f.id+"]";b=d("GeoPrivateMakeComponent").makeGeoComponent("GeoPopoverContent",a);g["default"]=b}),98);
__d("GeoPopoverUtils",[],(function(a,b,c,d,e,f){"use strict";a=function(a){var b=a.isSticky;b=b===void 0?!0:b;var c=a.renderDelay;c=c===void 0?280:c;var d=a.hideOnBlur;d=d===void 0?!0:d;a=a.groupName;a=a===void 0?"GeoPopover":a;return{isSticky:b,renderDelay:c,hideOnBlur:d,groupName:a}};f.getDefaultProps=a}),66);
__d("GeoPopover.react",["GeoPopoverContent.react","GeoPopoverUtils","GeoPrivateHintLayer.react","GeoPrivateMakeComponent","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.action,e=a.learnMore,f=a.heading,g=a.description,h=a.content,j=a.status;a=babelHelpers.objectWithoutPropertiesLoose(a,["action","learnMore","heading","description","content","status"]);var k=d("GeoPopoverUtils").getDefaultProps(a),l=function(a){return i.jsx(c("GeoPopoverContent.react"),babelHelpers["extends"]({},a,{action:b,content:h,description:g,heading:f,learnMore:e,status:j}))};return i.jsx(c("GeoPrivateHintLayer.react"),babelHelpers["extends"]({},a,k,{contentRenderer:l,popoverType:"popover"}))}a.displayName=a.name+" [from "+f.id+"]";b=d("GeoPrivateMakeComponent").makeGeoComponent("GeoPopover",a);g["default"]=b}),98);
__d("GeoPrivateOnboardingThemeProvider",["GeoPrivateThemeContext","react","useGeoTheme"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useMemo;function k(a){return babelHelpers["extends"]({},a,{selectInteractiveColorPalette:function(b){var c=b.color==="primary"?"onboarding":b.color;return a.selectInteractiveColorPalette(babelHelpers["extends"]({},b,{color:c}))},selectOutline:function(b){var c=b.color==="primary"?"onboarding":b.color;return a.selectOutline(babelHelpers["extends"]({},b,{color:c}))}})}function a(a){a=a.children;var b=c("useGeoTheme")(),d=j(function(){return k(b)},[b]);return i.jsx(c("GeoPrivateThemeContext").Provider,{value:d,children:a})}a.displayName=a.name+" [from "+f.id+"]";g.GeoPrivateOnboardingThemeProvider=a}),98);
__d("GeoPrivateStepCount.react",["fbt","GeoBaseText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.currentStep,d=a.maxSteps,e=a.textColorVariant;e=e===void 0?"placeholder":e;a=a.xstyle;return j.jsx(c("GeoBaseText.react"),{color:e,size:"value",textAlign:"center",xstyle:a,children:h._("{current_step}\/{total_steps}",[h._param("current_step",b),h._param("total_steps",d)])})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("GeoPrivateTourContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={activeConceptID:null,activeConceptIndex:-1,hideOnBlur:!0,hideOnEscape:!0,isTourVisible:!1,liftTour:!1,conceptCount:0,onComplete:c("emptyFunction"),onError:c("emptyFunction"),onHide:c("emptyFunction"),onNext:c("emptyFunction"),onPrevious:c("emptyFunction"),registerConcept:function(){return function(){}},tourCompletionLabel:"done",wait:0};e=a.createContext(b);f=e;g["default"]=f}),98);
__d("GeoPrivateTourFeatureStepContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={activeActionID:null,activeActionIndex:-1,actionCount:0,onComplete:c("emptyFunction"),onHide:c("emptyFunction"),onNext:c("emptyFunction"),onPrevious:c("emptyFunction"),registerAction:function(){return function(){}}};e=a.createContext(b);f=e;g["default"]=f}),98);
__d("GeoPrivateTourHighlight.react",["GeoBaseContextualLayer.react","GeoPrivateLayerPositionContext","react","stylex","useDebounced","useGeoTheme","useMergeRefs","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useContext,m=b.useLayoutEffect,n=b.useMemo,o=b.useRef,p=b.useState,q="start",r={root:{paddingTop:"x1nn3v0j",paddingEnd:"xg83lxy",paddingBottom:"x1120s5i",paddingStart:"x1h0ha7o",marginTop:"x1kgmq87",marginEnd:"xwrv7xz",marginBottom:"xmgb6t1",marginStart:"x8182xy",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",height:"x5yr21d",width:"xh8yej3",$$css:!0},disableContext:{pointerEvents:"x47corl",$$css:!0}};function a(a){var b=a.context,d=a.imperativeRef;a=a.isContextDisabled;a=a===void 0?!1:a;var e=c("useGeoTheme")();e=e.selectOnboardingPulseAnimation;var f=o(null),g=s(b),i=g[0],k=g[1];g=c("useMergeRefs")(f,d);var m=l(c("GeoPrivateLayerPositionContext"));d=n(function(){return babelHelpers["extends"]({},m,{position:q})},[m]);u(b,function(){var a;(a=f.current)==null?void 0:a.reposition();k()});b=j.jsx(c("GeoBaseContextualLayer.react"),{align:"stretch",context:b,disableAutoFlip:!0,imperativeRef:g,position:q,children:j.jsx("div",{className:(h||(h=c("stylex")))(r.root,e({variant:"base"}),!a&&r.disableContext),style:i})});return j.jsx(c("GeoPrivateLayerPositionContext").Provider,{value:d,children:b})}a.displayName=a.name+" [from "+f.id+"]";function s(a){var b=p(function(){return t(a)}),d=b[0],e=b[1];b=k(function(){return e(t(a))},[a]);b=c("useDebounced")(b,100);return[d,b]}function t(a){if(a instanceof HTMLElement)return{borderRadius:window.getComputedStyle(a).borderRadius,width:a.offsetWidth};if(a instanceof SVGElement){a=a.getBoundingClientRect();var b=a.width;a=a.height;return{width:b,height:a}}return null}function u(a,b){var d=c("useResizeObserver")(b);m(function(){d(a);return function(){d(null)}},[a,d])}g["default"]=a}),98);
__d("GeoPrivateTourIntroContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={onHide:c("emptyFunction"),setShowIntro:c("emptyFunction"),showIntro:null};e=a.createContext(b);f=e;g["default"]=f}),98);
__d("GeoPrivateTourLayerTunnel.react",["BaseScrollableAreaContext","getComputedStyle","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useEffect,l=b.useState;function m(a){return a.parentElement instanceof HTMLElement?a.parentElement:null}function n(a){a=(h||(h=c("getComputedStyle")))(a);var b=["auto","scroll"];return a!=null&&(b.includes(a.overflowX)||b.includes(a.overflowY))}function o(a){a=m(a);while(a!=null&&a!==document.body){if(n(a))return a;a=m(a)}return null}function p(a){var b=[];a=a!=null?o(a):null;while(a!=null)b.push(a),a=o(a);return b}function a(a){var b=a.children,d=a.contextRef;a=l([]);var e=a[0],f=a[1];k(function(){f(p(d.current).map(function(a){return{getDOMNode:function(){return a}}}))},[d]);return j.jsx(c("BaseScrollableAreaContext").Provider,{value:e,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GeoTourStepHideSources",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BLUR:"blur",ESCAPE:"escape",CLOSE:"close",COMPLETE:"complete"});b=a;f["default"]=b}),66);
__d("GeoPrivateTourLayer.react",["BaseContextualLayerAnchorRootContext","GeoBaseContextualLayer.react","GeoBaseLayerEscapeBehavior.react","GeoBaseSpacingLayout.react","GeoCloseButton.react","GeoHeading.react","GeoPrivateCard.react","GeoPrivateCardFooter.react","GeoPrivateCardLayerContext","GeoPrivateCardLayoutContext","GeoPrivateMakeComponent","GeoPrivateOnboardingThemeProvider","GeoPrivateTourContext","GeoPrivateTourHighlight.react","GeoPrivateTourLayerTunnel.react","GeoSection.react","GeoText.react","GeoTourStepHideSources","observeIntersection","react","stylex","useGeoOnClickOutside","useGeoTheme"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useContext,m=b.useEffect,n=b.useImperativeHandle,o=b.useLayoutEffect,p=b.useRef,q=b.useState,r={card:{minWidth:"x1s3yuht",maxWidth:"xxc7z9f",$$css:!0},cardHoriz:{marginStart:"xmupa6y",marginEnd:"xqmxbcd",marginTop:"x9otpla",marginBottom:"x1wsgfga",$$css:!0},cardVert:{marginStart:"xp7jhwk",marginEnd:"x1n0m28w",marginTop:"xqui205",marginBottom:"x1hq5gj4",$$css:!0},cardContent:{paddingBottom:"x18d9i69",paddingEnd:"x4uap5",paddingLeft:null,paddingRight:null,$$css:!0},absoluteCardContent:{paddingBottom:"x18d9i69",$$css:!0},close:{marginTop:"x1xmf6yo",marginEnd:"x1emribx",marginBottom:"x1e56ztr",marginStart:"x1i64zmx",$$css:!0},closeAbsolute:{position:"x10l6tqk",top:"xfr5jun",end:"x1923su1",$$css:!0},image:{display:"x78zum5",alignItems:"x6s0dn4",alignSelf:"xamitd3",flexDirection:"xdt5ytf",marginBottom:"x1e56ztr",overflowX:"x6ikm8r",overflowY:"x10wlt62",":not([stylex-hack]) img_maxWidth":"xc6yx5s",$$css:!0},imageFullbleed:{borderBottomEndRadius:"x5pf9jr",borderBottomStartRadius:"xo71vjh",marginBottom:"xat24cr",$$css:!0}};function a(a){var b=a.align,e=a.content,f=a.contextRef,g=a.heading,i=a.id,o=a.image,q=a.imageFit;q=q===void 0?"centered":q;var s=a.isContextDisabled,u=a.isVisible,v=a.liftStep;v=v===void 0?!1:v;var w=a.moreButton,y=a.nextButton,z=a.onHide,A=a.onShow,B=a.position;B=B===void 0?"below":B;var C=a.previousButton,D=a.stepCount;a=babelHelpers.objectWithoutPropertiesLoose(a,["align","content","contextRef","heading","id","image","imageFit","isContextDisabled","isVisible","liftStep","moreButton","nextButton","onHide","onShow","position","previousButton","stepCount"]);var E=t(u?f:null);a=l(c("GeoPrivateTourContext"));var F=a.hideOnBlur,G=a.hideOnEscape,H=a.imperativeRef;a=a.liftTour;var I=p(null),J=B==="start"||B==="end",K=J?"middle":"start";b=(b=b)!=null?b:K;K=k(function(){E!=null&&F===!0&&z(c("GeoTourStepHideSources").BLUR)},[E,F,z]);var L=k(function(){G===!0&&z(c("GeoTourStepHideSources").ESCAPE)},[G,z]);m(function(){A&&u&&A()},[u,A]);c("useGeoOnClickOutside")(K,[f,I]);var M=p(null),N=p(null);n(H,function(){return{reposition:function(){var a;(a=M.current)==null?void 0:a.reposition();(a=N.current)==null?void 0:a.reposition()}}},[]);K=p(document.body);if(E==null)return null;H=j.jsxs(c("GeoPrivateTourLayerTunnel.react"),{contextRef:f,children:[j.jsx(c("GeoPrivateTourHighlight.react"),{context:E,imperativeRef:N,isContextDisabled:s}),j.jsx(c("GeoPrivateCardLayerContext").Provider,{value:!0,children:j.jsx(c("GeoBaseLayerEscapeBehavior.react"),{onEscape:L,children:j.jsx(c("GeoBaseContextualLayer.react"),{align:b,context:E,"data-testid":void 0,hidden:!u,imperativeRef:M,position:B,children:j.jsx(d("GeoPrivateOnboardingThemeProvider").GeoPrivateOnboardingThemeProvider,{children:j.jsx("div",{className:(h||(h=c("stylex")))(r.card,J&&r.cardHoriz,!J&&r.cardVert),id:i,children:j.jsx(c("GeoPrivateCard.react"),{containerRef:I,"data-testid":void 0,footer:j.jsx(c("GeoPrivateCardFooter.react"),{primaryButton:y,secondaryButton:w,startContent:j.jsxs(c("GeoBaseSpacingLayout.react"),{grow:"fill",children:[C,D]})}),xstyle:r.card,children:j.jsx(x,{content:e,heading:g,image:o,imageFit:q,onHide:z})})})})})})})]});return a||v?j.jsx(c("BaseContextualLayerAnchorRootContext").Provider,{value:K,children:H}):H}a.displayName=a.name+" [from "+f.id+"]";function s(a){if(a instanceof HTMLElement)return a.offsetParent;if(a instanceof SVGElement){a=(a=a.ownerSVGElement)==null?void 0:a.parentNode;return a instanceof HTMLElement?a.offsetParent:null}return null}function t(a){var b=l(c("GeoPrivateTourContext")),d=b.onError;b=b.wait;var e=q(a==null?void 0:a.current),f=e[0],g=e[1];e=a!=null&&f==null;var h=k(function(){var b=a==null?void 0:a.current,c=s(b)!=null;g(c?b:null)},[a]),i=k(function(){d("timed out waiting for context ref")},[d]);o(h,[h]);w(e?h:null);v(e?i:null,b);h=k(function(b){return g(b?a==null?void 0:a.current:null)},[a]);u(a==null?void 0:a.current,h);return f}function u(a,b){o(function(){if(a==null)return;var d=c("observeIntersection")(a,function(a){return b(a.intersectionRatio>0)},{root:s(a)});return function(){return d.remove()}},[a,b])}function v(a,b){m(function(){if(a){var c=window.setTimeout(a,b);return function(){return window.clearTimeout(c)}}},[a,b])}function w(a){m(function(){if(a==null)return;var b,c=function c(){a(),b!=null&&(b=window.requestAnimationFrame(c))};b=window.requestAnimationFrame(c);return function(){window.cancelAnimationFrame(b),b=null}},[a])}function x(a){var b=a.content,d=a.heading,e=a.image,f=a.imageFit,g=a.onHide;a=c("useGeoTheme")();a=a.selectBorderRadius;var i=!!(e!=null&&d!==null);a=e!=null&&j.jsx("div",{className:(h||(h=c("stylex")))(r.image,f==="fullbleed"&&a({context:"container"}),f==="fullbleed"&&r.imageFullbleed),children:e});return j.jsxs(c("GeoPrivateCardLayoutContext").Provider,{value:i?z:y,children:[f==="fullbleed"&&a,j.jsxs("div",{className:"x78zum5 x1qjc9v5 xeuugli",children:[j.jsxs(c("GeoSection.react"),{children:[f==="centered"&&a,d!=null&&j.jsx(c("GeoHeading.react"),{level:3,textAlign:"start",children:d}),j.jsx(c("GeoText.react"),{children:b})]}),j.jsx("div",{className:(h||(h=c("stylex")))(!i&&r.close,i&&r.closeAbsolute),children:j.jsx(c("GeoCloseButton.react"),{onClick:function(){return g(c("GeoTourStepHideSources").CLOSE)}})})]})]})}x.displayName=x.name+" [from "+f.id+"]";function y(){return r.cardContent}function z(){return r.absoluteCardContent}e=d("GeoPrivateMakeComponent").makeGeoComponent("GeoPrivateTourLayer",a);g["default"]=e}),98);
__d("GeoSearchableMultiSelector.react",["GeoBaseFormInputLayout.react","GeoBaseSearchableSelector.react","GeoBaseSearchableSelectorUtils","GeoPrivateCheckboxInputLayout.react","GeoPrivateMakeComponent","GeoPrivateSelectAllHeader.react","GeoPrivateSelectorMediaUtils","GeoSelectionContext","react","useGeoEmptyStringViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useCallback,k=b.useMemo;function a(a){var b=a.buttonLabelRenderer,e=a.children,f=a.containerRef,g=a["data-button-testid"],h=a["data-option-testid"],n=a["data-search-testid"];g=a["data-testid"];g=a.description;var o=a.disabledMessage,p=a.errorMessage,q=a.hasSelectAll,r=q===void 0?!1:q,s=a.isDisabled,t=a.isEdited;q=a.isLabelHidden;var u=a.isOptional,v=a.isValid,w=a.label,x=a.labelID,y=a.media,z=a.onChange,A=a.searchInclusions,B=a.tooltip,C=a.tooltipText,D=a.warningMessage,E=a.value,F=a.xstyle,G=babelHelpers.objectWithoutPropertiesLoose(a,["buttonLabelRenderer","children","containerRef","data-button-testid","data-option-testid","data-search-testid","data-testid","description","disabledMessage","errorMessage","hasSelectAll","isDisabled","isEdited","isLabelHidden","isOptional","isValid","label","labelID","media","onChange","searchInclusions","tooltip","tooltipText","warningMessage","value","xstyle"]);c("useGeoEmptyStringViolation")(w,"GeoSearchableMultiSelector");var H=d("GeoBaseSearchableSelectorUtils").useButtonLabel(E,b),I=k(function(){return d("GeoPrivateSelectorMediaUtils").getSearchableEntriesMedia(E,G.ratio,y)},[y,G.ratio,E]),J=j(function(a){z([].concat(a))},[z]),K=j(function(a){if(a.length===1){var b=E.indexOf(a[0]);if(b===-1)J([].concat(E,a));else{var c=[].concat(E);c.splice(b,1);J(c)}}else J(a)},[J,E]);a=k(function(){return{onSelect:J,isSingleSelection:!1,value:E}},[J,E]);b=c("GeoSelectionContext");return i.jsx(b.Provider,{value:a,children:i.jsx(c("GeoBaseFormInputLayout.react"),{containerRef:f,"data-testid":void 0,description:g,disabledMessage:o,errorMessage:p,isDisabled:s,isEdited:t,isLabelHidden:q,isOptional:u,isValid:v,label:w,labelID:x,tooltip:(b=B)!=null?b:C,warningMessage:D,xstyle:F,children:function(a){var b=a.inputID,d=a.labelledBy,f=a.describedBy;a=a.errorMessageID;return i.jsx(c("GeoBaseSearchableSelector.react"),babelHelpers["extends"]({},G,{binaryControlRenderer:l,"data-layer-testid":h,"data-option-testid":n,"data-testid":void 0,describedBy:f,errorMessageID:a,header:r?function(a){return i.jsx(m,{items:a,onSelect:K,selectedItems:E})}:null,inputID:b,isDisabled:s,isEdited:t,isMultiSelectable:!0,label:H,labelledBy:d,loggingName:"GeoSearchableMultiSelector",media:I,onSelect:K,searchInclusions:A,selectedEntries:E,children:e}))}})})}a.displayName=a.name+" [from "+f.id+"]";function l(a){var b=a.isDisabled;a=a.isSelected;return i.jsx(c("GeoPrivateCheckboxInputLayout.react"),{isDisabled:b,value:a})}l.displayName=l.name+" [from "+f.id+"]";function m(a){var b=a["data-testid"],d=a.items,e=a.onSelect,f=a.selectedItems,g=k(function(){var a=d.length,b=f.length;if(b===0)return!1;else if(b===a)return!0;else return"indeterminate"},[f.length,d.length]);b=j(function(){e(g===!1?[].concat(d):[])},[g,d,e]);return i.jsx(c("GeoPrivateSelectAllHeader.react"),{"data-testid":void 0,isAllSelected:g===!0,onSelectAll:b,value:g})}m.displayName=m.name+" [from "+f.id+"]";e=d("GeoPrivateMakeComponent").makeGeoComponent("GeoSearchableMultiSelector",a);g["default"]=e}),98);
__d("addToSet",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(a.has(b))return a;a=new Set(a);a.add(b);return a}f["default"]=a}),66);
__d("removeFromSet",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(!a.has(b))return a;a=new Set(a);a["delete"](b);return a}f["default"]=a}),66);
__d("GeoTour.react",["GeoPrivateLoggingRegion.react","GeoPrivateMakeComponent","GeoPrivateTourContext","GeoPrivateTourIntroContext","addToSet","react","removeFromSet","useGeoPrivatePopupBlocker","useShallowEqualMemo"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useCallback,k=b.useEffect,l=b.useState;function a(a){var b=a.children,d=a.hideOnBlur;d=d===void 0?!0:d;var e=a.hideOnEscape;e=e===void 0?!0:e;var f=a.imperativeRef,g=a.intro,h=a.isActive,m=a.liftTour;m=m===void 0?!1:m;var n=a.onComplete,o=a.onError,p=a.onHide,q=a.tourCompletionLabel;q=q===void 0?"done":q;var r=a.wait;r=r===void 0?3e3:r;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","hideOnBlur","hideOnEscape","imperativeRef","intro","isActive","liftTour","onComplete","onError","onHide","tourCompletionLabel","wait"]);a=l(new Set());var s=a[0],t=a[1];a=l(null);var u=a[0],v=a[1];a=l(null);var w=a[0],x=a[1],y=Array.from(s),z=y.length,A=y.findIndex(function(a){return a===u}),B=c("useGeoPrivatePopupBlocker")(h),C=j(function(){x(null),v(null)},[]),D=j(function(a){p==null?void 0:p(a)},[p]);k(function(){B||C()},[B,C]);k(function(){B&&(g!==null&&w===null&&x(!0),(g==null||w===!1)&&z>0&&u===null&&v(y[0]))},[u,z,y,g,B,w]);a=j(function(a){t(function(b){return c("addToSet")(b,a)});return function(){t(function(b){return c("removeFromSet")(b,a)})}},[]);s=j(function(a){o==null?void 0:o(a)},[o]);var E=j(function(){D("complete"),n==null?void 0:n()},[n,D]);h=j(function(){if(u===null&&y.length>0){v(y[0]);return}A<y.length-1?v(y[A+1]):E()},[A,u,y,E]);var F=j(function(){A>0&&v(y[A-1])},[y,A]),G=c("useShallowEqualMemo")({activeConceptID:u,activeConceptIndex:A,conceptCount:z,hideOnBlur:d,hideOnEscape:e,imperativeRef:f,isTourVisible:B,liftTour:m,onComplete:E,onError:s,onHide:D,onNext:h,onPrevious:F,registerConcept:a,tourCompletionLabel:q,wait:r}),H=c("useShallowEqualMemo")({onHide:D,setShowIntro:x,showIntro:w});return B?i.jsx(c("GeoPrivateLoggingRegion.react"),{name:"GeoTour",children:function(a){return i.jsx("span",{"data-testid":void 0,children:i.jsxs(c("GeoPrivateTourContext").Provider,{value:G,children:[i.jsx(c("GeoPrivateTourIntroContext").Provider,{value:H,children:g}),b]})})}}):null}a.displayName=a.name+" [from "+f.id+"]";e=d("GeoPrivateMakeComponent").makeGeoComponent("GeoTour",a);g["default"]=e}),98);
__d("GeoTourStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("Quay l\u1ea1i");b=h._("Ti\u1ebfp t\u1ee5c");c=h._("B\u1ecf qua");d=h._("Xong");e=h._("B\u1eaft \u0111\u1ea7u");f=h._("Cho t\u00f4i xem");var i=h._("T\u00ecm hi\u1ec3u th\u00eam"),j=h._(["Ti\u1ebfp","174b5f5ffc2568d748b82150816e2ec9",1]),k=h._("Xem c\u00e1ch l\u00e0m"),l=h._("Hi\u1ec3n th\u1ecb sau"),m=h._("L\u00fac kh\u00e1c"),n=h._("B\u1ecf qua");h=h._("D\u00f9ng th\u1eed");g.BACK_LABEL=a;g.CONTINUE_LABEL=b;g.DISMISS_LABEL=c;g.DONE_LABEL=d;g.GET_STARTED_LABEL=e;g.SHOW_ME_LABEL=f;g.LEARN_MORE_LABEL=i;g.NEXT_LABEL=j;g.SEE_HOW_LABEL=k;g.SHOW_LATER_LABEL=l;g.NOT_NOW_LABEL=m;g.SKIP_LABEL=n;g.TRY_IT_LABEL=h}),226);
__d("GeoTourFeatureStep.react",["GeoButton.react","GeoPrivateLoggingRegion.react","GeoPrivateMakeComponent","GeoPrivateTourContext","GeoPrivateTourFeatureStepContext","GeoPrivateTourLayer.react","GeoTourStrings","addToSet","react","removeFromSet","useUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useCallback,k=b.useContext,l=b.useLayoutEffect,m=b.useMemo,n=b.useState;function a(a){var b=a.children,e=a.contextRef,f=a["data-primary-button-testid"];f=a["data-secondary-button-testid"];f=a.geoOverride_moreLabel;var g=a.onHide,h=a.onMore,o=a.onNext,p=a.onPrevious,q=babelHelpers.objectWithoutPropertiesLoose(a,["children","contextRef","data-primary-button-testid","data-secondary-button-testid","geoOverride_moreLabel","onHide","onMore","onNext","onPrevious"]);a=n(new Set());var r=a[0],s=a[1];a=n(null);var t=a[0],u=a[1],v=Array.from(r),w=v.length,x=v.findIndex(function(a){return a===t});a=k(c("GeoPrivateTourContext"));r=a.activeConceptIndex;var y=a.activeConceptID,z=a.conceptCount,A=a.isTourVisible,B=a.onComplete,C=a.onHide,D=a.onNext,E=a.onPrevious,F=a.registerConcept,G=a.tourCompletionLabel,H=c("useUniqueID")();l(function(){return F(H)},[H,F]);var I=j(function(a){s(function(b){return c("addToSet")(b,a)});return function(){s(function(b){return c("removeFromSet")(b,a)})}},[]),J=j(function(a){g==null?void 0:g(a),u(null),C(a)},[g,C]);a=j(function(){u(null),g==null?void 0:g("complete"),B()},[B,g]);var K=j(function(){h==null?void 0:h(),t===null&&v.length>0&&u(v[0])},[v,t,h]),L=j(function(){o==null?void 0:o(),D()},[o,D]),M=j(function(){p==null?void 0:p(),E()},[p,E]),N=function(){switch(G){case"try_it":return d("GeoTourStrings").TRY_IT_LABEL;case"get_started":return d("GeoTourStrings").GET_STARTED_LABEL;case"learn_more":return d("GeoTourStrings").LEARN_MORE_LABEL;default:return d("GeoTourStrings").DONE_LABEL}},O=r<z-1?i.jsx(c("GeoButton.react"),{"data-testid":void 0,label:d("GeoTourStrings").NEXT_LABEL,onClick:L,variant:"primary"}):i.jsx(c("GeoButton.react"),{"data-testid":void 0,label:N(),onClick:a,variant:"primary"}),P=r>0?i.jsx(c("GeoButton.react"),{label:d("GeoTourStrings").BACK_LABEL,onClick:M}):void 0,Q=v.length>0&&t===null?i.jsx(c("GeoButton.react"),{"data-testid":void 0,label:f!=null?f:d("GeoTourStrings").SEE_HOW_LABEL,onClick:K}):void 0,R=j(function(a){u(null),C(a)},[C]),S=j(function(){u(null),B()},[B]),T=j(function(){x<v.length-1?u(v[x+1]):(u(null),L())},[v,x,L]),U=j(function(){x>0?u(v[x-1]):u(null)},[v,x]),V=m(function(){return{activeActionID:t,activeActionIndex:x,actionCount:w,onComplete:S,onHide:R,onNext:T,onPrevious:U,registerAction:I}},[w,x,t,S,R,T,U,I]);return i.jsx(c("GeoPrivateLoggingRegion.react"),{name:"GeoTourFeatureStep",children:function(a){return i.jsxs(c("GeoPrivateTourFeatureStepContext").Provider,{value:V,children:[i.jsx(c("GeoPrivateTourLayer.react"),babelHelpers["extends"]({contextRef:e,isVisible:A&&H===y&&t===null,moreButton:Q,nextButton:O,onHide:J,previousButton:P},q)),b]})}})}a.displayName=a.name+" [from "+f.id+"]";e=d("GeoPrivateMakeComponent").makeGeoComponent("GeoTourFeatureStep",a);g["default"]=e}),98);
__d("List.react",["cx","joinClasses","react"],(function(a,b,c,d,e,f,g){var h,i=h||b("react");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.border,e=a.direction,f=a.spacing,g=a.valign,h=a.edgepadding;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","border","direction","spacing","valign","edgepadding"]);e==="vertical"&&(g=null);e=(e==="vertical"?"_4kg":"")+(e==="horizontal"?" _4ki":"")+(g==="top"?" _509-":"")+(g==="middle"?" _509_":"")+(g==="bottom"?" _50a0":"");var j;(f!=="none"||d!=="none")&&(j=(d==="none"?"_6-i":"")+(d==="light"?" _4ks":"")+(d==="medium"?" _4kt":"")+(d==="dark"?" _4ku":""));var k;f!=="none"&&(k=(h?"":"_6-h")+(f==="small"?" _704":"")+(f==="medium"?" _6-j":"")+(f==="large"?" _703":""));c=b("joinClasses")(c,"uiList",e,j,k);return i.jsx("ul",babelHelpers["extends"]({className:c},a))};return c}(i.Component);a.defaultProps={border:"medium",spacing:"medium",direction:"vertical",valign:"top",edgepadding:!1};e.exports=a}),null);
__d("ReactComponentWithPureRenderMixin",["shallowCompare"],(function(a,b,c,d,e,f){"use strict";a={shouldComponentUpdate:function(a,c){return b("shallowCompare")(this,a,c)}};c=a;f["default"]=c}),66);
__d("WebLayoutStickyElement.react",["WebLayoutStickyContext","fbjs/lib/emptyFunction","intersectionObserverEntryIsIntersecting","react","stylex","useIntersectionObserver","useMergeRefs","useRefEffect","useResizeObserver","useVisibility"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useContext,m=b.useRef,n=b.useState,o={root:{position:"x1n2onr6",width:"xh8yej3",top:"x13vifvy",$$css:!0},sticky:{position:"x7wzq59",$$css:!0}};function a(a){var b=a.children,d=a.elementRef,e=a.isSticky;e=e===void 0?!0:e;var f=a.onStuckChange,g=a.style;a=a.xstyle;var i=l(c("WebLayoutStickyContext")),n=i.onStuckChange,q=i.register;i=i.update;var s=m(null),t=k(function(a,b){f&&f(a),b instanceof HTMLElement&&n(b,a)},[n,f]);t=r(t);var u=t.sentinelBottomVisibilityRef,v=t.sentinelTopVisibilityRef,w=t.setSticky;t=k(function(a,b){w(a);if(a)return q(b,s.current)},[q,w]);t=p({isSticky:e,onStickyChange:t,xstyle:a});i=c("useResizeObserver")(i);d=c("useMergeRefs")(d,t,i);t=c("useMergeRefs")(s,v);return j.jsxs("div",{className:(h||(h=c("stylex")))(o.root,e&&o.sticky,a),ref:d,style:g,children:[j.jsx("div",{className:"x10l6tqk x17qophe xh8yej3 xjm9jq1 x47corl x1pdr0v7",ref:t}),j.jsx("div",{className:"x10l6tqk x17qophe xh8yej3 xjm9jq1 x47corl x1ey2m1c",ref:u}),b]})}a.displayName=a.name+" [from "+f.id+"]";function p(a){var b=a.isSticky,d=a.onStickyChange,e=a.xstyle;return c("useRefEffect")(function(a){if(b)return d(b,a);if(Boolean(e)===!1)return;var c,f,g,h=function(){var b=q(a);f!==b&&(f=b,c&&c(),c=d(b,a))};h();var i=function(){window.cancelAnimationFrame(g),g=window.requestAnimationFrame(h)};window.addEventListener("resize",i);return function(){c&&c(),window.removeEventListener("resize",i),window.cancelAnimationFrame(g)}},[b,d,e])}function q(a){return window.getComputedStyle(a).position==="sticky"}function r(a){var b=n(!1),d=b[0],e=b[1],f=m(null),g=m(!1),h=m(0),i=m(null),j=m(!1);b=k(function(a){i.current=a,f.current&&f.current()},[]);b=c("useVisibility")({onVisibilityChange:d?b:c("fbjs/lib/emptyFunction")});b=b[0];var l=k(function(b){function d(){var d,e=c("intersectionObserverEntryIsIntersecting")(b);d=(d=i.current)!=null?d:!1;var f=h.current,k=b.boundingClientRect.top;f=k<=f;h.current=k;k=g.current===!1;k=k&&d;g.current=!0;d=k||f;k=d&&!e;j.current=k;a&&a(k,b.target.parentElement)}if(i.current==null){f.current=function(){f.current=null,d()};return}d()},[a]);l=c("useIntersectionObserver")(d?l:c("fbjs/lib/emptyFunction"),{root:null,threshold:1});var o=k(function(b){e(b),b||(i.current=null,g.current=!1,h.current=0,j.current&&a&&a(!1))},[a]);return{sentinelBottomVisibilityRef:d?b:null,sentinelTopVisibilityRef:d?l:null,setSticky:o}}g["default"]=a}),98);
__d("roundTo",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){a=Math.round((a+Number.EPSILON)/b)*b;b=String(b).length-String(Math.floor(b)).length-1;return b>=0?parseFloat(a.toFixed(b)):a}f["default"]=a}),66);
__d("signalsNow",["AdsCurrentUser","DateTime","Timezone","TimezoneNamesData"],(function(a,b,c,d,e,f,g){"use strict";d("Timezone").registerNamesModule(b("TimezoneNamesData"));function h(){return h.getNow()}a=c("AdsCurrentUser").timezoneName!=null&&c("AdsCurrentUser").timezoneName!==""?d("Timezone").getByNameOrNull(c("AdsCurrentUser").timezoneName):null;h.getNow=function(){return c("DateTime").localNow().instant};h.UTC=d("Timezone").UTC;h.PST8PDT=d("Timezone").PST8PDT;h.LOCAL_TIMEZONE_ID=a!=null?a:d("Timezone").getEnvironmentTimezoneID();h.asPSTDateTime=function(){return new(c("DateTime"))(h.getNow(),d("Timezone").PST8PDT)};h.asUTCDateTime=function(){return new(c("DateTime"))(h.getNow(),d("Timezone").UTC)};h.asLocalDateTime=function(){return new(c("DateTime"))(h.getNow(),h.LOCAL_TIMEZONE_ID)};e=h;g["default"]=e}),98);
__d("xuiglyph",[],(function(a,b,c,d,e,f){function a(a){throw new Error("xuiglyph: Unexpected xuiglyph call.")}f["default"]=a}),66);