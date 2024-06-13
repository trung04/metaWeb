;/*FB_PKG_DELIM*/

__d("ActorURI",["ActorURIConfig","URI"],(function(a,b,c,d,e,f,g){var h;function a(a,b){return new(h||(h=c("URI")))(a).addQueryData(c("ActorURIConfig").PARAMETER_ACTOR,b)}g.create=a;g.PARAMETER_ACTOR=c("ActorURIConfig").PARAMETER_ACTOR}),98);
__d("idx",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){try{return b(a)}catch(a){if(a instanceof TypeError)if(h(a))return null;else if(j(a))return void 0;throw a}}var g;function h(a){a=a.message;g||(g=k("null"));return g.test(a)}var i;function j(a){a=a.message;i||(i=k("undefined"));return i.test(a)}function k(a){return new RegExp("^"+a+" | "+a+"$|^[^\\(]* "+a+" ")}f["default"]=a}),66);
__d("CSSFade",["cx","invariant","Style","cr:5662","cr:6108","cr:6669","requestAnimationFrameAcrossTransitions"],(function(a,b,c,d,e,f,g,h){"use strict";var i="css-fade-animation",j="css-show-animation",k="CSSFade_hide",l="CSSFade_show";a=document.createElement("div").animate!==void 0;var m={cancel:function(){}};function n(a,c){a!=null||h(0,5875);a=b("cr:6669").get(a,c);a&&a.cancel();return a}function o(a,b,c){a=((a=a)!=null?(a=a.style)!=null?a.animation:a:a)||"";b=b+"s "+c;a.length>5&&(b=a.slice(0,-1)+(", "+b));return b}function p(a,b){a=((a=a)!=null?(a=a.style)!=null?a.animation:a:a)||"";a=a.split(",");var c=a.findIndex(function(a){return a.indexOf(b)>-1});c!==-1&&a.splice(c,1);return a.join(",")}c={show:function(a,c){c===void 0&&(c={});var d=c.duration!=null?c.duration/1e3:.3;n(a,i);n(a,j);b("cr:6108").removeClass(a,c.invisible?"invisible_elem":"hidden_elem");b("requestAnimationFrameAcrossTransitions")(function(){a.style.animation=o(a,d,l)});var e=b("cr:5662").listen(a,"animationend",function(){c.callback&&c.callback(),a.style.animation=p(a,l)}),f={cancel:function(){a.style.animation=p(a,l),e.remove(),f.cancel=function(){}}};b("cr:6669").set(a,j,f);return f},hide:function(a,c){c===void 0&&(c={});var d=function(){b("cr:6108").addClass(a,c.invisible?"invisible_elem":"hidden_elem"),c.callback&&c.callback(),a.style.animation=p(a,k)};if(c.simple){d();return m}var e=c.duration!=null?c.duration/1e3:.3;n(a,j);n(a,i);b("requestAnimationFrameAcrossTransitions")(function(){a.style.animation=o(a,e,k)});var f=b("cr:5662").listen(a,"animationend",d),g={cancel:function(){a.style.animation=p(a,k),f.remove(),g.cancel=function(){}}};b("cr:6669").set(a,i,g);return g}};d={show:function(a,c){c===void 0&&(c={});var d=c.duration!=null?c.duration:300;n(a,i);n(a,j);b("cr:6108").removeClass(a,c.invisible?"invisible_elem":"hidden_elem");b("Style").set(a,"opacity","1");var e=c.peekStateFade?"0.6":"0";e=a.animate([{opacity:e},{opacity:"1.0"}],{duration:d});c.callback&&(e.onfinish=c.callback);b("cr:6669").set(a,j,e);return e},hide:function(a,c){c===void 0&&(c={});var d=c.duration!=null?c.duration:300;n(a,j);if(c.simple===!0){b("cr:6108").addClass(a,c.invisible?"invisible_elem":"hidden_elem");return m}else{n(a,i);b("Style").set(a,"opacity","0");var e=c.peekStateFade?"0.4":"0";e=a.animate([{opacity:"1.0"},{opacity:e}],{duration:d});e.onfinish=function(){b("cr:6108").addClass(a,c.invisible?"invisible_elem":"hidden_elem"),c.callback&&c.callback()};b("cr:6669").set(a,i,e);return e}}};e.exports=a?d:c}),null);
__d("CookieConsentDialogFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1746397");b=d("FalcoLoggerInternal").create("cookie_consent_dialog",a);e=b;g["default"]=e}),98);
__d("DialogHideOnSuccess",["csx","CSS"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("success",this._handle.bind(this))};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null};c._handle=function(a,c){b("CSS").matchesSelector(c.getTarget(),"._s")&&this._layer.hide()};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("DialogPosition",["Vector"],(function(a,b,c,d,e,f,g){var h=40,i;function a(a,b,d,e,f){d===void 0&&(d=null);e===void 0&&(e=!1);f===void 0&&(f=!1);var g=c("Vector").getViewportDimensions(),j=!1;e&&d&&(j=d+b>g.y);if(d!=null&&!j)return d;if(i)return i;e=f?Math.floor((g.y-b)/2):Math.floor((g.x+a)*(g.y-b)/(4*g.x));return Math.max(e,h)}function b(a){i=a}g.calculateTopMargin=a;g.setFixedTopMargin=b}),98);
__d("flattenArray",[],(function(a,b,c,d,e,f){function a(a){var b=[];g(a,b);return b}function g(a,b){var c=a.length,d=0;while(c--){var e=a[d++];Array.isArray(e)?g(e,b):b.push(e)}}f["default"]=a}),66);
__d("JSXDOM",["FbtResultBase","cr:6114","flattenArray"],(function(a,b,c,d,e,f){a=["a","blockquote","br","button","canvas","checkbox","dd","div","dl","dt","em","form","h1","h2","h3","h4","h5","h6","hr","i","iframe","img","input","label","li","option","p","pre","select","span","strong","table","tbody","thead","td","textarea","th","tr","ul","video"];var g={};a.forEach(function(a){var c=function(c,d){arguments.length>2&&(d=Array.prototype.slice.call(arguments,1));!d&&c&&(d=c.children,delete c.children);d&&(d=Array.isArray(d)?d:[d],d=d.map(function(a){return a instanceof b("FbtResultBase")?a.flattenToArray():a}),d=b("flattenArray")(d));return b("cr:6114").create(a,c,d)};g[a]=c});e.exports=g}),null);
__d("focusWithinLayer",["DOMQuery","Focus","TabbableElements","getActiveElement"],(function(a,b,c,d,e,f,g){function a(a,b){var e=d("DOMQuery").scry(a,".autofocus")[0],f=!0;if(!e){var g=c("getActiveElement")();if(d("DOMQuery").isNodeOfType(g,["input","textarea"]))return;g=d("TabbableElements").find(a);for(var h=0;h<g.length;h++){var i=g[h];if(i.tagName!=="A"||i.getAttribute("role")==="button"||i.getAttribute("role")==="menuitem"){e=g[h];break}}}else e.tabIndex!==0&&(f=!1);e?f?d("Focus").set(e,b):d("Focus").setWithoutOutline(e):a.offsetWidth||(a.tabIndex=-1,d("Focus").setWithoutOutline(a))}g["default"]=a}),98);
__d("LayerAutoFocus",["focusWithinLayer"],(function(a,b,c,d,e,f,g){a=function(){function a(a){this._subscription=null,this._layer=a,this._subscription=null}var b=a.prototype;b.enable=function(){this._subscription=this._layer.subscribe("aftershow",this._focus.bind(this))};b.disable=function(){this._subscription&&this._subscription.unsubscribe(),this._subscription=null};b._focus=function(){var a=this._layer.getRoot();a&&c("focusWithinLayer")(a,!0)};return a}();g["default"]=a}),98);
__d("LayerButtons",["csx","Button","Event","LayerHideSources","Parent"],(function(a,b,c,d,e,f,g){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._listener=b("Event").listen(this._layer.getRoot(),"click",this._handle.bind(this))};c.disable=function(){this._listener.remove(),this._listener=null};c._handle=function(a){var c=a.getTarget(),d=b("Parent").byClass(c,"layerHide");if(d){this._layer.hide(b("LayerHideSources").LAYER_HIDE_BUTTON);return}d=b("Parent").byClass(c,"layerConfirm");if(d){if(this._isButton(d)&&!b("Button").isEnabled(d))return;if(this._isInNestedLayer(d))return;this._layer.inform("confirm",d)===!1&&a.prevent();return}d=b("Parent").byClass(c,"layerCancel");if(d){if(this._isButton(d)&&!b("Button").isEnabled(d))return;if(this._isInNestedLayer(d))return;this._layer.inform("cancel",d)!==!1&&this._layer.hide(b("LayerHideSources").LAYER_CANCEL_BUTTON);a.prevent();return}d=b("Parent").byClass(c,"layerButton");if(d){if(this._isButton(d)&&!b("Button").isEnabled(d))return;if(this._isInNestedLayer(d))return;this._layer.inform("button",d)===!1&&a.prevent()}};c._isInNestedLayer=function(a){a=b("Parent").byClass(a,"uiLayer");var c=this._layer.getRoot();return!!(a&&c!==a)};c._isButton=function(a){return!!(b("Parent").byClass(a,"uiButton")||b("Parent").bySelector(a,"._42ft"))};return a}();a.prototype._listener=null;e.exports=a}),null);
__d("LayerFormHooks",["Event"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){var a=this._layer.getRoot();this._subscriptions=[b("Event").listen(a,"submit",this._onSubmit.bind(this)),b("Event").listen(a,"success",this._onSuccess.bind(this)),b("Event").listen(a,"error",this._onError.bind(this))]};c.disable=function(){this._subscriptions.forEach(function(a){a.remove()}),this._subscriptions=null};c._onSubmit=function(a){this._layer.inform("submit",a)===!1&&a.kill()};c._onSuccess=function(a){this._layer.inform("success",a)===!1&&a.kill()};c._onError=function(a){var b=a.getData();this._layer.inform("error",{response:b.response})===!1&&a.kill()};return a}();Object.assign(a.prototype,{_subscriptions:null});e.exports=a}),null);
__d("LayerRefocusOnHide",["ContextualThing","DOM","DOMQuery","Focus","Parent","getActiveElement","nullthrows"],(function(a,b,c,d,e,f,g){a=function(){function a(a){this._layer=a}var b=a.prototype;b.enable=function(){this._subscription=this._layer.subscribe("hide",this._handle.bind(this))};b.disable=function(){c("nullthrows")(this._subscription).unsubscribe(),this._subscription=null};b._handle=function(){var a=c("getActiveElement")();if(a===document.body||d("DOMQuery").contains(this._layer.getRoot(),a)){a=this._layer.getCausalElement();while(a&&!a.offsetWidth){var b=d("Parent").byClass(a,"uiToggle");if(b&&b.offsetWidth)a=c("DOM").scry(b,'[rel="toggle"]')[0];else{b=d("ContextualThing").getContext(a);b?a=b:a=a.parentNode}}a&&(a=a,d("Focus").set(a))}};return a}();Object.assign(a.prototype,{_subscription:null});g["default"]=a}),98);
__d("Toggler",["csx","invariant","$","Arbiter","ArbiterMixin","CSS","ContextualThing","DOM","DataStore","Event","Focus","Keys","Parent","TabbableElements","TimeSlice","createArrayFromMixed","emptyFunction","ge","getContextualParent","getObjectValues","killswitch","mixin","queryThenMutateDOM","setImmediate"],(function(a,b,c,d,e,f,g,h,i){var j=[],k,l=!1;function m(){l||(l=!0,c("setImmediate")(function(){l=!1}))}var n=function(){n=c("emptyFunction"),c("Event").listen(document.documentElement,"click",function(a){if(l)return;var b=a.getTarget();j.forEach(function(a){a.clickedTarget=b,a.active&&!a.sticky&&!d("ContextualThing").containsIncludingLayers(a.getActive(),b)&&!a.inTargetFlyout(b)&&a.inActiveDialog()&&!a.isIgnoredByModalLayer(b)&&a.hide()})},c("Event").Priority.URGENT)},o=function(e){babelHelpers.inheritsLoose(b,e);function b(){var a;a=e.call(this)||this;a.active=null;a.togglers={};a.setSticky(!1);j.push(babelHelpers.assertThisInitialized(a));a.subscribe(["show","hide"],b.inform.bind(b));return n()||babelHelpers.assertThisInitialized(a)}var f=b.prototype;f.focusFirstTabbableDescendant=function(a,b){if(!c("killswitch")("TOGGLER_FAST_SHOW")){b.$Toggler2&&b.$Toggler2.cancel();var e=null;b.$Toggler2=c("queryThenMutateDOM")(function(){var b=a.querySelector(".uiToggleFlyout");b&&(e=d("TabbableElements").findFirst(b)||b)},function(){delete b.$Toggler2,e&&(e.tabIndex==null&&(e.tabIndex=-1),d("Focus").setWithoutOutline(e))})}else{var f=a.querySelector(".uiToggleFlyout");if(f){f=d("TabbableElements").find(f)[0]||f;f.tabIndex==null&&(f.tabIndex=-1);d("Focus").setWithoutOutline(f)}}};f.show=function(a){var b=p(this,a),e=b.active;if(a!==e){e&&b.hide();b.active=a;d("CSS").addClass(a,"openToggler");e=c("DOM").scry(a,'a[rel="toggle"]');e.length>0&&e[0].getAttribute("data-target")&&d("CSS").removeClass(c("$")(e[0].getAttribute("data-target")),"toggleTargetClosed");this.focusFirstTabbableDescendant(a,b);e.length>0&&(c("DOM").appendContent(a,b.getToggler("next")),c("DOM").prependContent(a,b.getToggler("prev")));c("Event").listen(a,"keydown",function(d){if(c("Event").getKeyCode(d)===c("Keys").ESC&&b.isShown()){var e=c("DOM").scry(a,'a[rel="toggle"]')[0];e&&e.focus();b.hide();d.kill()}});a.getAttribute("data-toggle-wc")&&(b.__continuation=c("TimeSlice").getGuardedContinuation("Toggler.show inform"));b.inform("show",b,"state")}};f.hide=function(a){var b=p(this,a);b.$Toggler2&&b.$Toggler2.cancel();var e=b.active;if(e&&(!a||a===e)){d("CSS").removeClass(e,"openToggler");a=c("DOM").scry(e,'a[rel="toggle"]');a.length>0&&a[0].getAttribute("data-target")&&d("CSS").addClass(c("$")(a[0].getAttribute("data-target")),"toggleTargetClosed");c("getObjectValues")(b.togglers).forEach(c("DOM").remove);e.getAttribute("data-toggle-wc")&&(b.__continuation=c("TimeSlice").getGuardedContinuation("Toggler.hide inform"));b.inform("hide",b,"state");b.active=null}};f.toggle=function(a){var b=p(this,a);b.active===a?b.hide():b.show(a);m()};f.getActive=function(){return p(this).active};f.isShown=function(){return p(this).active&&d("CSS").hasClass(p(this).active,"openToggler")};b.isNodeShown=function(a){return d("CSS").hasClass(a,"openToggler")};f.inTargetFlyout=function(a){var b=q(this.getActive());return Boolean(b&&d("ContextualThing").containsIncludingLayers(b,a))};f.inActiveDialog=function(){var b=a.Dialog&&a.Dialog.getCurrent();return!b||c("DOM").contains(b.getRoot(),this.getActive())};f.isIgnoredByModalLayer=function(a){a=!!d("Parent").bySelector(a,"._3qw");var b=!!d("Parent").bySelector(this.getActive(),"._3qw"),c=window.__AMA_NOTIFICATION_TRAY_UPSELL_MODAL_SHOWN__===!0;return a&&!b||c};f.getToggler=function(a){var b=p(this);b.togglers[a]||(b.togglers[a]=c("DOM").create("button",{className:"hideToggler",onfocus:function(){var a=c("DOM").scry(b.active,'a[rel="toggle"]')[0];a&&a.focus();b.hide()},style:{right:a==="next"?"0":""}}),b.togglers[a].setAttribute("type","button"));return this.togglers[a]};f.setSticky=function(a){var b=p(this);a=a!==!1;a!==b.sticky&&(b.sticky=a,a?b.$Toggler1&&b.$Toggler1.unsubscribe():b.$Toggler1=c("Arbiter").subscribe("pre_page_transition",b.hide.bind(b,null)));return b};f.setPrePageTransitionCallback=function(a){var b=p(this);b.$Toggler1&&b.$Toggler1.unsubscribe();b.$Toggler1=c("Arbiter").subscribe("pre_page_transition",a)};b.bootstrap=function(a){a=a.parentNode;a!=null||i(0,3354);var c=b.getInstance(a);c!=null||i(0,3355);c.toggle(a)};b.createInstance=function(a){var c=new b().setSticky(!0);d("DataStore").set(a,"toggler",c);return c};b.destroyInstance=function(a){var b=d("DataStore").get(a,"toggler");b&&b.$Toggler2&&b.$Toggler2.cancel();d("DataStore").remove(a,"toggler")};b.getInstance=function(a){a=a;while(a){var e=d("DataStore").get(a,"toggler");if(e)return e;if(a instanceof Element)if(d("CSS").hasClass(a,"uiToggleContext"))return b.createInstance(a);else if(!c("killswitch")("JEWEL_TOGGLER_INSTANCE_FIXES")&&d("CSS").hasClass(a,"uiToggleFlyout"))return b.createInstance(a).setSticky(!1);a=c("getContextualParent")(a)}return k=k||new b()};b.listen=function(a,d,e){return b.subscribe(c("createArrayFromMixed")(a),function(a,b){if(b.getActive()===d){if(b.__continuation){var c=b.__continuation;delete b.__continuation;return c(function(){return e(a,b)})}return e(a,b)}})};b.addListener=function(a){var c=a.events,d=a.element,e=a.handler;return b.listen(c,d,function(){return e.callback()})};return b}(c("mixin")(c("ArbiterMixin")));Object.assign(o,o.prototype,c("ArbiterMixin"));Object.assign(o,{subscribe:function(a){return function(b,d){b=c("createArrayFromMixed")(b);b.includes("show")&&j.forEach(function(a){a.getActive()&&setTimeout(d.bind(null,"show",a),0)});return a(b,d)}}(o.subscribe.bind(o))});function p(a,b){return a instanceof o?a:o.getInstance(b)}function q(a){a=c("DOM").scry(a,'a[rel="toggle"]');return a.length>0&&a[0].getAttribute("data-target")?c("ge")(a[0].getAttribute("data-target")):null}g["default"]=o}),98);
__d("LayerTogglerContext",["Toggler"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._root=this._layer.getRoot(),b("Toggler").createInstance(this._root).setSticky(!1)};c.disable=function(){b("Toggler").destroyInstance(this._root),this._root=null};return a}();e.exports=a}),null);
__d("DialogX",["cx","fbt","Arbiter","CSS","DOMQuery","DialogPosition","Event","JSXDOM","Layer","LayerAutoFocus","LayerButtons","LayerFormHooks","LayerRefocusOnHide","LayerTabIsolation","LayerTogglerContext","ModalLayer","Style","Vector","debounce","getOrCreateDOMID","goURI","isTruthy","shield"],(function(a,b,c,d,e,f,g,h,i){a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e._configure=function(b,e){var f=this;a.prototype._configure.call(this,b,e);e=this.getRoot();e!=null&&d("CSS").addClass(e,"_4-hy");if(b.autohide)var g=this.subscribe("show",function(){g.unsubscribe(),window.setTimeout(c("shield")(f.hide,f),b.autohide)});if(b.redirectURI)var h=this.subscribe("hide",function(){h.unsubscribe();var a=b.redirectURI;a!=null&&c("goURI")(a)});this._fixedTopPosition=b.fixedTopPosition;this._ignoreFixedTopInShortViewport=b.ignoreFixedTopInShortViewport;this._isVerticallyCentered=b.isVerticallyCentered};e._getDefaultBehaviors=function(){return a.prototype._getDefaultBehaviors.call(this).concat([j,c("ModalLayer"),this._config.autofocus===!1?void 0:c("LayerAutoFocus"),c("LayerButtons"),c("LayerFormHooks"),c("LayerTabIsolation"),c("LayerTogglerContext"),c("LayerRefocusOnHide")].filter(c("isTruthy")))};e._buildWrapper=function(a,b){var e=a.xui?"_4t2a":"_t _9l18",f=a.xui?"_59s7 _9l2g":"_1yv";this._innerContent=c("JSXDOM").div(null,b);b={className:f,role:"dialog"};if(a.labelledBy)b["aria-labelledby"]=a.labelledBy;else if(a.label)b["aria-label"]=a.label;else if(a.titleID)b["aria-labelledby"]=a.titleID;else if(a.titleClass){f=d("DOMQuery").scry(this._innerContent,a.titleClass);if(f.length){f=c("getOrCreateDOMID")(f[0]);b["aria-labelledby"]=f}else b["aria-label"]=this._getDefaultLabel()}else b["aria-label"]=this._getDefaultLabel();f={className:e};a["data-testid"]&&(f["data-testid"]=a["data-testid"]);this._wrapper=c("JSXDOM").div(b,c("JSXDOM").div(f,this._innerContent));a.width!=null&&this.setWidth(a.width);a.height!=null&&this.setHeight(a.height);return c("JSXDOM").div({className:"_10"},this._wrapper)};e._getDefaultLabel=function(){return i._("N\u1ed9i dung h\u1ed9p tho\u1ea1i")};e.getContentRoot=function(){return this._wrapper};e.getInnerContent=function(){return this._innerContent};e.updatePosition=function(){var a=c("Vector").getElementDimensions(this._wrapper);a=d("DialogPosition").calculateTopMargin(a.x,a.y,this._fixedTopPosition,(a=this._ignoreFixedTopInShortViewport)!=null?a:!1,(a=this._isVerticallyCentered)!=null?a:!1);c("Style").set(this._wrapper,"margin-top",a+"px");this.inform("update_position",{type:"DialogX",top:a});return!0};e.setWidth=function(a){if(a==="100%")this._width=void 0,c("Style").set(this._wrapper,"width","");else{a=Math.floor(a);if(a===this._width)return;this._width=a;c("Style").set(this._wrapper,"width",a+"px")}};e.getWidth=function(){return this._width};e.setHeight=function(a){a=Math.floor(a);if(a===this._height)return;this._height=a;c("Style").set(this._wrapper,"height",a+"px")};e.getFixedTopPosition=function(){return this._fixedTopPosition};e.shouldIgnoreFixedTopInShortViewport=function(){return this._ignoreFixedTopInShortViewport};return b}(c("Layer"));var j=function(){function a(a){this._subscription=null,this._resize=null,this._layer=a}var b=a.prototype;b.enable=function(){var a=this;this._subscription=this._layer.subscribe(["show","hide"],function(b){b==="show"?(a._attach(),c("Arbiter").inform("layer_shown",{type:"DialogX"})):(a._detach(),c("Arbiter").inform("layer_hidden",{type:"DialogX"}))})};b.disable=function(){var a;(a=this._subscription)==null?void 0:a.unsubscribe();this._subscription=null;this._resize&&this._detach()};b._attach=function(){this._layer.updatePosition(),this._resize=c("Event").listen(window,"resize",c("debounce")(this._layer.updatePosition.bind(this._layer)))};b._detach=function(){var a;(a=this._resize)==null?void 0:a.remove();this._resize=null};return a}();g["default"]=a}),226);
__d("LayerFadeOnHide",["invariant","CSSFade","Layer","SubscriptionsHandler","UserAgent_DEPRECATED","clearTimeout","emptyFunction","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){a=function(){function a(a){this._layer=a,this._subscriptionsHandler=new(c("SubscriptionsHandler"))()}var b=a.prototype;b.enable=function(){if(d("UserAgent_DEPRECATED").ie()<9)return;this._subscription=this._layer.subscribe("starthide",this._handleStartHide.bind(this))};b.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._subscriptionsHandler.release()};b._getDuration=function(){return 150};b._handleStartHide=function(){var a=this,b=!0,d=c("Layer").subscribe("show",function(){d.unsubscribe(),b=!1}),e=c("setTimeoutAcrossTransitions")(function(){d.unsubscribe();d=null;var c=function(){a._layer.finishHide()};b?a._animate(c):c()},0);this._subscriptionsHandler.addSubscriptions({remove:function(){c("clearTimeout")(e)}});return!1};b._animate=function(a){var b=this._layer.getRoot();b!=null||h(0,70);c("CSSFade").hide(b,{callback:function(){a()},duration:this._getDuration()})};a.forDuration=function(b){var d=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}return a}(a);d.prototype._getDuration=c("emptyFunction").thatReturns(b);return d};return a}();Object.assign(a.prototype,{_subscription:null});g["default"]=a}),98);
__d("LinkController",["DataStore","Event","Parent","removeFromArray","trackReferrer"],(function(a,b,c,d,e,f,g){var h="@@LinkController",i=[],j=[];function a(a){i.push(a);return{remove:function(){return c("removeFromArray")(i,a)}}}function b(a){j.push(a);return{remove:function(){return c("removeFromArray")(j,a)}}}function e(a){a=a.getTarget();var b=d("Parent").byTag(a,"a");if(!(b instanceof HTMLAnchorElement))return;var e=l(b);if(e==null||e.trim()===""||n(a)||d("DataStore").get(b,h)||e.endsWith("#"))return;a=c("Event").listen(b,"click",function(a){c("trackReferrer")(b,e),!b.rel&&(!b.target||b.target==="_self")&&!m(a)&&k(b,a)});d("DataStore").set(b,h,a)}function k(a,b){i.concat(j).every(function(c){if(c(a,b)===!1){b.prevent();return!1}return!0})}function l(a){if(a&&!a.rel){a=a.getAttribute("href");if(a!=null){var b=a.match(/^(\w+):/);if(!b||b[1].match(/^http/i))return a}}return null}function m(a){return a.getModifiers().any||a.which!=null&&a.which!==1}function n(a){return a.nodeName==="INPUT"&&a.type==="file"}(f=c("Event")).listen(document.documentElement,"mousedown",e,f.Priority.URGENT);f.listen(document.documentElement,"keydown",e,f.Priority.URGENT);g.registerHandler=a;g.registerFallbackHandler=b}),98);
__d("PageTransitionPriorities",[],(function(a,b,c,d,e,f){a=5;b=a+1;c=b+1;f.DEFAULT=a;f.LEFT_NAV=b;f.SOCIAL_SEARCH_DIALOG=c}),66);
__d("computeRelativeURI",["URI","isEmpty","isFacebookURI"],(function(a,b,c,d,e,f,g){var h,i;function j(a,b){if(!b)return a;if(b.charAt(0)=="/")return b;var c=a.split("/").slice(0,-1);c[0]!=="";b.split("/").forEach(function(a){a==="."||(a===".."?c.length>1&&(c=c.slice(0,-1)):c.push(a))});return c.join("/")}function a(a,b){var d=new(h||(h=c("URI")))(),e=new h(a),f=new h(b);if(f.getDomain()&&!c("isFacebookURI")(f))return b;var g=e;a=["Protocol","Domain","Port","Path","QueryData","Fragment"];a.forEach(function(a){var b=a==="Path"&&g===e;b&&d.setPath(j(e.getPath(),f.getPath()));(i||(i=c("isEmpty")))(f["get"+a]())||(g=f);b||d["set"+a](g["get"+a]())});return d}g["default"]=a}),98);
__d("PageTransitionsRegistrar",["invariant","DOMQuery","Form","LinkController","PageTransitionPriorities","Parent","URI","computeRelativeURI","getReferrerURI","goURI","requireDeferred","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){var i,j=c("requireDeferred")("PageTransitions").__setRef("PageTransitionsRegistrar");c("setTimeout")(function(){j.onReady(function(a){a&&a._init&&a._init()})},0);var k=[],l=[];e={DELAY_HISTORY:"delay_history_PTR",registerHandler:function(a,b){a!=null||h(0,5202),b=b||d("PageTransitionPriorities").DEFAULT,k[b]||(k[b]=[]),k[b].push(a)},removeHandler:function(a,b){b=b||d("PageTransitionPriorities").DEFAULT;var c=-1;k[b]&&(c=k[b].indexOf(a));c>-1&&k[b].splice(c,1)},registerCompletionCallback:function(a){l.push(a)},getMostRecentURI:o,getReferrerURI:c("getReferrerURI"),_getTransitionHandlers:function(){return k},_getCompletionCallbacks:function(){return l},_resetCompletionCallbacks:function(){l=[]},__onClick:e,__onSubmit:f};var m=null;function b(a){m=a,c("setTimeoutAcrossTransitions")(function(){m=null},0)}function e(a){if(m){if(!a.isDefaultPrevented()){n(m);var b=m.getAttribute("href");b&&c("goURI")(b)}a.kill()}}function n(a){var b=a.getAttribute("href")||"",d=c("computeRelativeURI")(o().getQualifiedURI().toString(),b).toString();b!=d&&a.setAttribute("href",d)}function f(a,b){b=b;var e=a.getTarget();if(d("Form").getAttribute(e,"rel")||d("Form").getAttribute(e,"target"))return;var f=new(i||(i=c("URI")))(d("Form").getAttribute(e,"action"));f=c("computeRelativeURI")(o().toString(),f.toString());e.setAttribute("action",f.toString());if((d("Form").getAttribute(e,"method")||"GET").toUpperCase()=="GET"){e=d("Form").serialize(e);b&&(d("DOMQuery").isNodeOfType(b,"input")&&b.type==="submit"||(b=d("Parent").byTag(b,"button")))&&b.name&&(e[b.name]=b.value);typeof f==="string"&&(f=new(i||(i=c("URI")))(f));c("goURI")(f.addQueryData(e));a.kill()}}d("LinkController").registerFallbackHandler(b);function o(){if(a.PageTransitions&&a.PageTransitions.isInitialized())return a.PageTransitions.getMostRecentURI();else{var b=(i||(i=c("URI"))).getRequestURI(!1);b=b.getUnqualifiedURI();var d=new i(b).setFragment(""),e=b.getFragment();e.charAt(0)==="!"&&d.toString()===e.substr(1)&&(b=d);return b}}f=e;g["default"]=f}),98);
__d("LayerHideOnTransition",["LayerHideSources","PageTransitionsRegistrar"],(function(a,b,c,d,e,f,g){a=function(){function a(a){var b=this;this._handler=function(a){b._enabled&&b.isTransitionRelevant(a)&&b._layer.hide(c("LayerHideSources").TRANSITION),b._subscribe()};this._layer=a}var b=a.prototype;b.enable=function(){this._enabled=!0,this._subscribed||setTimeout(this._subscribe.bind(this),0)};b.disable=function(){this._enabled=!1,c("PageTransitionsRegistrar").removeHandler(this._handler)};b.isTransitionRelevant=function(a){return!0};b._subscribe=function(){c("PageTransitionsRegistrar").registerHandler(this._handler),this._subscribed=!0};return a}();Object.assign(a.prototype,{_enabled:!1,_subscribed:!1});g["default"]=a}),98);
__d("LayerRemoveOnHide",["DOM"],(function(a,b,c,d,e,f,g){a=function(){function a(a){this._layer=a}var b=a.prototype;b.enable=function(){this._subscription=this._layer.subscribe("hide",c("DOM").remove.bind(null,this._layer.getRoot()))};b.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};return a}();Object.assign(a.prototype,{_subscription:null});g["default"]=a}),98);
__d("coalesce",[],(function(a,b,c,d,e,f){function a(){for(var a=0;a<arguments.length;++a)if((a<0||arguments.length<=a?void 0:arguments[a])!=null)return a<0||arguments.length<=a?void 0:arguments[a];return null}f["default"]=a}),66);
__d("firstx",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;return d}h(0,1145)}g["default"]=a}),98);
__d("goOrReplace",["Env","URI","isFacebookURI"],(function(a,b,c,d,e,f,g){var h,i;function a(a,b,d){b=new(h||(h=c("URI")))(b);(i||(i=c("Env"))).isCQuick&&c("isFacebookURI")(b)&&b.addQueryData({cquick:(i||(i=c("Env"))).iframeKey,cquick_token:i.iframeToken,ctarget:i.iframeTarget});b=b.toString();d?a.replace(b):a.href==b?a.reload():a.href=b}g["default"]=a}),98);