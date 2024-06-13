;/*FB_PKG_DELIM*/

__d("PhotosMimeType",[],(function(a,b,c,d,e,f){function g(a){return h(a)[0]==="image"}function a(a){var b=h(a);return g(a)&&(b[1]==="jpeg"||b[1]==="pjpeg")}function h(a){return a.split("/")}f.isImage=g;f.isJpeg=a}),66);
__d("DataTransfer",["PhotosMimeType","Promise","createArrayFromMixed","emptyFunction","promiseDone"],(function(a,b,c,d,e,f){var g,h=new RegExp("\r\n","g"),i="\n",j={"text/rtf":1,"text/html":1};function k(a){if(a.kind=="file")return a.getAsFile()}function l(a){return new(g||(g=b("Promise")))(function(b){a.file(function(a){b([a])})})}function m(a){return typeof a.webkitGetAsEntry==="function"?a.webkitGetAsEntry():null}function n(a,c){return new(g||(g=b("Promise")))(function(d){b("promiseDone")((g||(g=b("Promise"))).all(a.map(function(a){var b=m(a);if(b&&b.createReader!=null){c();return o(b)}else{return(b=k(a))!=null?b:[]}})),function(a){d(a.flatMap(b("emptyFunction").thatReturnsArgument))})})}function o(a){return new(g||(g=b("Promise")))(function(c){var d=a.createReader(),e=[],f=function(){b("promiseDone")((g||(g=b("Promise"))).all(e.map(function(a){if(a.isDirectory)return o(a);else return l(a)})),function(a){c(a.flatMap(b("emptyFunction").thatReturnsArgument))})},h=function a(){d.readEntries(function(b){b.length?(e=e.concat(b),a()):f()},f)};h()})}a=function(){"use strict";function a(a){this.data=a,this.types=a.types?b("createArrayFromMixed")(a.types):[]}var c=a.prototype;c.isRichText=function(){if(this.getHTML()&&this.getText())return!0;return this.isImage()?!1:this.types.some(function(a){return j[a]})};c.getText=function(){var a;!this.types.length?a=this.data.getData("Text"):this.types.indexOf("text/plain")!=-1&&(a=this.data.getData("text/plain"));return a?a.replace(h,i):null};c.getHTML=function(){if(this.data.getData)if(!this.types.length)return this.data.getData("Text");else if(this.types.indexOf("text/html")!=-1)return this.data.getData("text/html")};c.isLink=function(){return this.types.some(function(a){return a.indexOf("Url")!=-1||a.indexOf("text/uri-list")!=-1||a.indexOf("text/x-moz-url")!=-1})};c.getLink=function(){if(this.data.getData){if(this.types.indexOf("text/x-moz-url")!=-1){var a=this.data.getData("text/x-moz-url").split("\n");return a[0]}return this.types.indexOf("text/uri-list")!=-1?this.data.getData("text/uri-list"):this.data.getData("url")}return null};c.isImage=function(){var a=this.types.some(function(a){return a.indexOf("application/x-moz-file")!=-1});if(a)return!0;a=this.getFiles();for(var c=0;c<a.length;c++){var d=a[c].type;if(!b("PhotosMimeType").isImage(d))return!1}return!0};c.getCount=function(){if(Object.prototype.hasOwnProperty.call(this.data,"items"))return this.data.items.length;else if(Object.prototype.hasOwnProperty.call(this.data,"mozItemCount"))return this.data.mozItemCount;else if(this.data.files)return this.data.files.length;return null};c.getFiles=function(){if(this.data.items)return Array.prototype.slice.call(this.data.items).map(k).filter(b("emptyFunction").thatReturnsArgument);else if(this.data.files)return Array.prototype.slice.call(this.data.files);else return[]};c.getRecursiveFiles=function(a){if(this.data.items)return n(Array.prototype.slice.call(this.data.items),a);else if(this.data.files)return new(g||(g=b("Promise")))(Array.prototype.slice.call(this.data.files))};c.hasFiles=function(){return this.getFiles().length>0};return a}();e.exports=a}),null);
__d("DragDropFileUpload",[],(function(a,b,c,d,e,f){function a(){return typeof FileList!=="undefined"}f.isSupported=a}),66);
__d("DocumentDragDrop",["Arbiter","CSS","DOMQuery","DragDropFileUpload","Event","emptyFunction","getObjectValues","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){var h={},i=0;function j(){i=0,c("getObjectValues")(h).forEach(function(a){d("CSS").removeClass(a.element,a.className),c("Arbiter").inform("dragleave",{element:a.element})})}var k=null;function l(){k&&window.clearTimeout(k),k=window.setTimeout(function(){j()},500)}var m=function(){if(!d("DragDropFileUpload").isSupported())return;c("Event").listen(document,"dragenter",function(a){i===0&&c("getObjectValues")(h).forEach(function(b){d("CSS").addClass(b.element,b.className),c("Arbiter").inform("dragenter",{element:b.element,event:a})}),i++,l()});c("Event").listen(document,"dragleave",function(a){i--,i===0&&j(),l()});c("Event").listen(document,"drop",function(a){j();var b=a.getTarget();if(d("DOMQuery").isNodeOfType(a.getTarget(),"input")&&b.type==="file")return;a.prevent()});c("Event").listen(document,"dragover",c("Event").prevent);document.addEventListener("dragover",l,!0);m=c("emptyFunction")};a={init:function(){m()},registerStatusElement:function(a,b){m(),h[c("getOrCreateDOMID")(a)]={element:a,className:b},i>0&&d("CSS").addClass(a,b)},removeStatusElement:function(a){a=c("getOrCreateDOMID")(a);var b=h[a];b&&(d("CSS").removeClass(b.element,b.className),delete h[a])}};g["default"]=a}),98);
__d("DragDropTarget",["Arbiter","CSS","DataTransfer","DocumentDragDrop","DragDropFileUpload","Event","SubscriptionsHandler","emptyFunction"],(function(a,b,c,d,e,f,g){a=function(){function a(a){var b;this.$7=b=c("emptyFunction");this.$8=b;this.$9=b;this.$10=b;this.$11=b;this.$12=b.thatReturnsArgument;this.$1=a;this.$2=new(c("SubscriptionsHandler"))();this.$3=a;this.$4=0;this.$5=!1;this.$6=!1}var b=a.prototype;b.setOnDocumentDragEnterCallback=function(a){this.$13=a;return this};b.setOnDocumentDragLeaveCallback=function(a){this.$14=a;return this};b.setOnDragEnterCallback=function(a){this.$15=a;return this};b.setOnDragLeaveCallback=function(a){this.$16=a;return this};b.setOnFilesDropCallback=function(a){this.$7=a;return this};b.setOnFolderDropLogging=function(a){this.$8=a;return this};b.setOnURLDropCallback=function(a){this.$9=a;return this};b.setOnPlainTextDropCallback=function(a){this.$10=a;return this};b.setOnDropCallback=function(a){this.$11=a;return this};b.setTraverseFoldersRecursively=function(a){this.$6=a;return this};b.$17=function(a,b,c){var d={},e=!1;c.length&&(this.$7(c,b),d.files=c,e=!0);c=a.getLink();c&&(this.$9(c,b),d.url=c,e=!0);c=a.getText();c&&(this.$10(c,b),d.plainText=c,e=!0);e&&this.$11(d,b)};b.enable=function(){var a=this;if(!d("DragDropFileUpload").isSupported())return this;this.$2.engage();c("DocumentDragDrop").registerStatusElement(this.$3,"fbWantsDragDrop");this.$2.addSubscriptions(c("Event").listen(this.$1,"dragenter",function(){return a.$18.apply(a,arguments)}),c("Event").listen(this.$1,"dragleave",function(){return a.$19.apply(a,arguments)}),c("Event").listen(this.$1,"dragover",function(){return a.$20.apply(a,arguments)}),c("Event").listen(this.$1,"drop",function(b){var e;a.$4=0;(e=d("CSS")).removeClass(a.$3,"fbDropReady");e.removeClass(a.$3,"fbDropReadyPhoto");e.removeClass(a.$3,"fbDropReadyPhotos");e.removeClass(a.$3,"fbDropReadyLink");var f=new(c("DataTransfer"))(b.dataTransfer);if(a.$6){(e=f.getRecursiveFiles(a.$8))==null?void 0:e.then(function(c){a.$17(f,b,a.$12(c))})}else a.$17(f,b,a.$12(b.dataTransfer.files));b.kill()}));this.$2.addSubscriptions(c("Arbiter").subscribe("dragenter",function(){return a.$21.apply(a,arguments)}),c("Arbiter").subscribe("dragleave",function(){return a.$22.apply(a,arguments)}));this.$5=!0;return this};b.disable=function(){if(!this.$5)return this;c("DocumentDragDrop").removeStatusElement(this.$3);d("CSS").removeClass(this.$3,"fbDropReady");d("CSS").removeClass(this.$3,"fbDropReadyPhoto");d("CSS").removeClass(this.$3,"fbDropReadyPhotos");d("CSS").removeClass(this.$3,"fbDropReadyLink");this.$2.release();this.$5=!1;return this};b.setFileFilter=function(a){this.$12=a;return this};b.setStatusElement=function(a){this.$3=a;return this};b.$18=function(a){if(this.$4===0){var b=new(c("DataTransfer"))(a.dataTransfer);d("CSS").addClass(this.$3,"fbDropReady");if(b.isLink()||!b.isImage())d("CSS").addClass(this.$3,"fbDropReadyLink");else{((b=b.getCount())!=null?b:0)>1?d("CSS").addClass(this.$3,"fbDropReadyPhotos"):d("CSS").addClass(this.$3,"fbDropReadyPhoto")}this.$15&&this.$15()}this.$4++;a.preventDefault()};b.$19=function(a){this.$4=Math.max(this.$4-1,0);if(this.$4===0){(a=d("CSS")).removeClass(this.$3,"fbDropReady");a.removeClass(this.$3,"fbDropReadyPhoto");a.removeClass(this.$3,"fbDropReadyPhotos");a.removeClass(this.$3,"fbDropReadyLink");this.$16&&this.$16()}};b.$20=function(a){if(!a.dataTransfer){c("Event").kill(a);return}try{var b=a.dataTransfer.effectAllowed;a.dataTransfer.dropEffect=b=="move"||b=="linkMove"?"move":"copy"}catch(a){}c("Event").kill(a)};b.$21=function(a,b){this.$13&&b.element==this.$1&&this.$13()};b.$22=function(a,b){this.$4=0,this.$19(a),this.$14&&b.element==this.$1&&this.$14()};return a}();g["default"]=a}),98);
__d("FBDragDropFileInput.react",["cx","ClickableArea.react","DragDropTarget","expectationViolation","joinClasses","react","shallowCompare"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function k(a){return a.currentTarget}a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var c;c=a.call(this,b)||this;c.$2=function(){if(c.props.disableClick===!0)return;c.fileInputRef.current&&c.fileInputRef.current.click()};c.$1=function(a){var b=[],d=[];a.length>1&&!c.props.multiple&&b.push({type:"too_many_files"});for(var e=0;e<a.length;e++){var f=a[e];f.type===""&&(f=c.$4(f));c.props.checkMimeType&&!(c.$5(f.type)||c.$6(f.name))?b.push({type:"incorrect_type",data:{name:f.name}}):c.props.maxFileSize!=null&&f.size>c.props.maxFileSize?b.push({type:"file_too_large",data:{name:f.name}}):d.push(f)}c.props.onSelect(d,b)};c.$3=function(a){a.preventDefault(),c.$1(k(a).files)};c.dragDropTargetRef=j.createRef();c.fileInputRef=j.createRef();return c}var d=b.prototype;d.shouldComponentUpdate=function(a){return c("shallowCompare")(this,a)};d.componentDidMount=function(){this.dragDropTargetRef.current!=null?new(c("DragDropTarget"))(this.dragDropTargetRef.current).setOnFilesDropCallback(this.$1).enable():c("expectationViolation")("The dragDropTargetRef should always have a value")};d.render=function(){var a,b=this.props,d=b.className;b=b.disabled;return j.jsx(c("ClickableArea.react"),{onClick:this.$2,children:j.jsxs("div",{ref:this.dragDropTargetRef,className:c("joinClasses")(d,"_44he"),"data-testid":void 0,children:[this.props.children,j.jsx("input",{accept:this.props.mimeTypes.join(","),className:"_44hf",multiple:this.props.multiple,onChange:this.$3,ref:this.fileInputRef,type:"file",value:"",disabled:b})]})})};d.$5=function(a){var b=this.props.mimeTypes,c=a.substring(0,a.indexOf("/"))+"/*";return b.includes(a)||b.includes(c)};d.$6=function(a){var b=this.props.mimeTypes;b=b.filter(function(a){return a.startsWith(".")});for(var b=b,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;if(a.endsWith(e))return!0}return!1};d.$4=function(a){return a.name.endsWith(".msg")?Object.defineProperty(a,"type",{value:"application/vnd.ms-outlook"}):a};return b}(j.Component);a.defaultProps={checkMimeType:!0,disabled:!1};g["default"]=a}),98);
__d("GeoButtonGroup.react",["GeoPrivateBaseButtonGroup.react","GeoPrivateMakeComponent","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return i.jsx(c("GeoPrivateBaseButtonGroup.react"),babelHelpers["extends"]({},a,{children:b}))}a.displayName=a.name+" [from "+f.id+"]";b=d("GeoPrivateMakeComponent").makeGeoComponent("GeoButtonGroup",a);g["default"]=b}),98);
__d("LogicalGrid.react",["DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE","gkx","joinClasses","react"],(function(a,b,c,d,e,f,g){var h,i=h||(h=d("react"));a=h.Component;b=c("gkx")("24834");e=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=this.props,b=a.children;a=a.component;a=a||i.jsx("div",{});var d={className:c("joinClasses")(c("DangerouslyAccessReactElementInternals_DO_NOT_USE_IN_NEW_CODE")(a).props.className,this.props.className)};return i.cloneElement(a,d,[b])};return b}(a);e.defaultProps={component:b?null:i.jsx("div",{})};g["default"]=e}),98);
__d("base62",[],(function(a,b,c,d,e,f){"use strict";var g="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function a(a){if(!a)return"0";var b="";while(a>0)b=g[a%62]+b,a=Math.floor(a/62);return b}f["default"]=a}),66);
__d("isSoftNewlineEvent",["Keys"],(function(a,b,c,d,e,f){"use strict";function a(a){return a.which===b("Keys").RETURN&&(a.getModifierState("Shift")||a.getModifierState("Alt")||a.getModifierState("Control"))}e.exports=a}),null);