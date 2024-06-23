(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [ 295 ], {
    4470 : function(e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty, n = Object.prototype.toString,
          r = Object.defineProperty, i = Object.getOwnPropertyDescriptor,
          l = function(e) {
            return "function" == typeof Array.isArray
                       ? Array.isArray(e)
                       : "[object Array]" === n.call(e)
          }, o = function(e) {
            if (!e || "[object Object]" !== n.call(e))
              return !1;
            var r, i = t.call(e, "constructor"),
                   l = e.constructor && e.constructor.prototype &&
                       t.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !i && !l)
              return !1;
            for (r in e)
              ;
            return void 0 === r || t.call(e, r)
          }, a = function(e, t) {
            r && "__proto__" === t.name ? r(e, t.name, {
              enumerable : !0,
              configurable : !0,
              value : t.newValue,
              writable : !0
            })
                                        : e[t.name] = t.newValue
          }, u = function(e, n) {
            if ("__proto__" === n) {
              if (!t.call(e, n))
                return;
              if (i)
                return i(e, n).value
            }
            return e[n]
          };
      e.exports = function e() {
        var t, n, r, i, s, c, f = arguments[0], p = 1, h = arguments.length,
                              d = !1;
        for ("boolean" == typeof f && (d = f, f = arguments[1] || {}, p = 2),
             (null == f || "object" != typeof f && "function" != typeof f) &&
                 (f = {});
             p < h; ++p)
          if (t = arguments[p], null != t)
            for (n in t)
              r = u(f, n),
              f !== (i = u(t, n)) &&
                  (d && i && (o(i) || (s = l(i)))
                       ? (s ? (s = !1, c = r && l(r) ? r : [])
                            : c = r && o(r) ? r : {},
                          a(f, {name : n, newValue : e(d, c, i)}))
                       : void 0 !== i && a(f, {name : n, newValue : i}));
        return f
      }
    },
    8139 : function(e) {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n = /\n/g, r = /^\s*/,
          i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, l = /^:\s*/,
          o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
          a = /^[;\s]*/, u = /^\s+|\s+$/g;
      function s(e) { return e ? e.replace(u, "") : "" }
      e.exports = function(e, u) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e)
          return [];
        u = u || {};
        var c = 1, f = 1;
        function p(e) {
          var t = e.match(n);
          t && (c += t.length);
          var r = e.lastIndexOf("\n");
          f = ~r ? e.length - r : f + e.length
        }
        function h() {
          var e = {line : c, column : f};
          return function(t) { return t.position = new d(e), y(r), t }
        }
        function d(e) {
          this.start = e, this.end = {line : c, column : f},
          this.source = u.source
        }
        d.prototype.content = e;
        var m = [];
        function g(t) {
          var n = Error(u.source + ":" + c + ":" + f + ": " + t);
          if (n.reason = t, n.filename = u.source, n.line = c, n.column = f,
              n.source = e, u.silent)
            m.push(n);
          else
            throw n
        }
        function y(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return p(r), e = e.slice(r.length), n
          }
        }
        function x(e) {
          var t;
          for (e = e || []; t = v();)
            !1 !== t && e.push(t);
          return e
        }
        function v() {
          var t = h();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (var n = 2; "" != e.charAt(n) &&
                            ("*" != e.charAt(n) || "/" != e.charAt(n + 1));)
              ++n;
            if (n += 2, "" === e.charAt(n - 1))
              return g("End of comment missing");
            var r = e.slice(2, n - 2);
            return f += 2, p(r), e = e.slice(n), f += 2,
                                 t({type : "comment", comment : r})
          }
        }
        return y(r), function() {
          var e, n = [];
          for (x(n); e = function() {
                 var e = h(), n = y(i);
                 if (n) {
                   if (v(), !y(l))
                     return g("property missing ':'");
                   var r = y(o), u = e({
                                   type : "declaration",
                                   property : s(n[0].replace(t, "")),
                                   value : r ? s(r[0].replace(t, "")) : ""
                                 });
                   return y(a), u
                 }
               }();)
            !1 !== e && (n.push(e), x(n));
          return n
        }()
      }
    },
    5174 : function(e, t, n) {
      "use strict";
      var r = this && this.__importDefault ||
              function(e) { return e && e.__esModule ? e : {default : e} };
      Object.defineProperty(t, "__esModule", {value : !0});
      var i = r(n(8139));
      t.default = function(e, t) {
        var n = null;
        if (!e || "string" != typeof e)
          return n;
        var r = (0, i.default)(e), l = "function" == typeof t;
        return r.forEach(function(e) {
          if ("declaration" === e.type) {
            var r = e.property, i = e.value;
            l ? t(r, i, e) : i && ((n = n || {})[r] = i)
          }
        }),
               n
      }
    },
    3295 : function(e, t, n) {
      "use strict";
      n.r(t), n.d(t, {
        default : function() { return nm },
        defaultUrlTransform : function() { return ng }
      });
      var r = {};
      n.r(r), n.d(r, {
        boolean : function() { return y },
        booleanish : function() { return x },
        commaOrSpaceSeparated : function() { return w },
        commaSeparated : function() { return S },
        number : function() { return k },
        overloadedBoolean : function() { return v },
        spaceSeparated : function() { return b }
      });
      var i = {};
      n.r(i), n.d(i, {
        attentionMarkers : function() { return ty },
        contentInitial : function() { return tf },
        disable : function() { return tx },
        document : function() { return tc },
        flow : function() { return th },
        flowInitial : function() { return tp },
        insideSpan : function() { return tg },
        string : function() { return td },
        text : function() { return tm }
      });
      var l = n(4345);
      let o = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
          a = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
          u = {};
      function s(e, t) { return ((t || u).jsx ? a : o).test(e) }
      let c = /[ \t\n\f\r]/g;
      function f(e) { return "" === e.replace(c, "") }
      class p {
        constructor(e, t, n) {
          this.property = e, this.normal = t, n && (this.space = n)
        }
      }
      function h(e, t) {
        let n = {}, r = {}, i = -1;
        for (; ++i < e.length;)
          Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
        return new p(n, r, t)
      }
      function d(e) { return e.toLowerCase() }
      p.prototype.property = {}, p.prototype.normal = {},
      p.prototype.space = null;
      class m {
        constructor(e, t) { this.property = e, this.attribute = t }
      }
      m.prototype.space = null, m.prototype.boolean = !1,
      m.prototype.booleanish = !1, m.prototype.overloadedBoolean = !1,
      m.prototype.number = !1, m.prototype.commaSeparated = !1,
      m.prototype.spaceSeparated = !1, m.prototype.commaOrSpaceSeparated = !1,
      m.prototype.mustUseProperty = !1, m.prototype.defined = !1;
      let g = 0, y = C(), x = C(), v = C(), k = C(), b = C(), S = C(), w = C();
      function C() { return 2 ** ++g }
      let E = Object.keys(r);
      class I extends m {
        constructor(e, t, n, i) {
          var l, o;
          let a = -1;
          if (super(e, t), i && (this.space = i), "number" == typeof n)
            for (; ++a < E.length;) {
              let e = E[a];
              l = E[a], (o = (n & r[e]) === r[e]) && (this[l] = o)
            }
        }
      }
      I.prototype.defined = !0;
      let T = {}.hasOwnProperty;
      function P(e) {
        let t;
        let n = {}, r = {};
        for (t in e.properties)
          if (T.call(e.properties, t)) {
            let i = e.properties[t],
                l = new I(t, e.transform(e.attributes || {}, t), i, e.space);
            e.mustUseProperty && e.mustUseProperty.includes(t) &&
                (l.mustUseProperty = !0),
                n[t] = l, r[d(t)] = t, r[d(l.attribute)] = t
          }
        return new p(n, r, e.space)
      }
      let z = P({
        space : "xlink",
        transform : (e, t) => "xlink:" + t.slice(5).toLowerCase(),
        properties : {
          xLinkActuate : null,
          xLinkArcRole : null,
          xLinkHref : null,
          xLinkRole : null,
          xLinkShow : null,
          xLinkTitle : null,
          xLinkType : null
        }
      }),
          O = P({
            space : "xml",
            transform : (e, t) => "xml:" + t.slice(3).toLowerCase(),
            properties : {xmlLang : null, xmlBase : null, xmlSpace : null}
          });
      function A(e, t) { return t in e ? e[t] : t }
      function L(e, t) { return A(e, t.toLowerCase()) }
      let D=P({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:L,properties:{xmlns:null,xmlnsXLink:null}}),M=P({transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:x,ariaAutoComplete:null,ariaBusy:x,ariaChecked:x,ariaColCount:k,ariaColIndex:k,ariaColSpan:k,ariaControls:b,ariaCurrent:null,ariaDescribedBy:b,ariaDetails:null,ariaDisabled:x,ariaDropEffect:b,ariaErrorMessage:null,ariaExpanded:x,ariaFlowTo:b,ariaGrabbed:x,ariaHasPopup:null,ariaHidden:x,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:b,ariaLevel:k,ariaLive:null,ariaModal:x,ariaMultiLine:x,ariaMultiSelectable:x,ariaOrientation:null,ariaOwns:b,ariaPlaceholder:null,ariaPosInSet:k,ariaPressed:x,ariaReadOnly:x,ariaRelevant:null,ariaRequired:x,ariaRoleDescription:b,ariaRowCount:k,ariaRowIndex:k,ariaRowSpan:k,ariaSelected:x,ariaSetSize:k,ariaSort:null,ariaValueMax:k,ariaValueMin:k,ariaValueNow:k,ariaValueText:null,role:null}}),F=P({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:L,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:S,acceptCharset:b,accessKey:b,action:null,allow:null,allowFullScreen:y,allowPaymentRequest:y,allowUserMedia:y,alt:null,as:null,async:y,autoCapitalize:null,autoComplete:b,autoFocus:y,autoPlay:y,blocking:b,capture:null,charSet:null,checked:y,cite:null,className:b,cols:k,colSpan:null,content:null,contentEditable:x,controls:y,controlsList:b,coords:k|S,crossOrigin:null,data:null,dateTime:null,decoding:null,default:y,defer:y,dir:null,dirName:null,disabled:y,download:v,draggable:x,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:y,formTarget:null,headers:b,height:k,hidden:y,high:k,href:null,hrefLang:null,htmlFor:b,httpEquiv:b,id:null,imageSizes:null,imageSrcSet:null,inert:y,inputMode:null,integrity:null,is:null,isMap:y,itemId:null,itemProp:b,itemRef:b,itemScope:y,itemType:b,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:y,low:k,manifest:null,max:null,maxLength:k,media:null,method:null,min:null,minLength:k,multiple:y,muted:y,name:null,nonce:null,noModule:y,noValidate:y,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:y,optimum:k,pattern:null,ping:b,placeholder:null,playsInline:y,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:y,referrerPolicy:null,rel:b,required:y,reversed:y,rows:k,rowSpan:k,sandbox:b,scope:null,scoped:y,seamless:y,selected:y,shadowRootClonable:y,shadowRootDelegatesFocus:y,shadowRootMode:null,shape:null,size:k,sizes:null,slot:null,span:k,spellCheck:x,src:null,srcDoc:null,srcLang:null,srcSet:null,start:k,step:null,style:null,tabIndex:k,target:null,title:null,translate:null,type:null,typeMustMatch:y,useMap:null,value:x,width:k,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:b,axis:null,background:null,bgColor:null,border:k,borderColor:null,bottomMargin:k,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:y,declare:y,event:null,face:null,frame:null,frameBorder:null,hSpace:k,leftMargin:k,link:null,longDesc:null,lowSrc:null,marginHeight:k,marginWidth:k,noResize:y,noHref:y,noShade:y,noWrap:y,object:null,profile:null,prompt:null,rev:null,rightMargin:k,rules:null,scheme:null,scrolling:x,standby:null,summary:null,text:null,topMargin:k,valueType:null,version:null,vAlign:null,vLink:null,vSpace:k,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:y,disableRemotePlayback:y,prefix:null,property:null,results:k,security:null,unselectable:null}}),N=P({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:A,properties:{about:w,accentHeight:k,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:k,amplitude:k,arabicForm:null,ascent:k,attributeName:null,attributeType:null,azimuth:k,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:k,by:null,calcMode:null,capHeight:k,className:b,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:k,diffuseConstant:k,direction:null,display:null,dur:null,divisor:k,dominantBaseline:null,download:y,dx:null,dy:null,edgeMode:null,editable:null,elevation:k,enableBackground:null,end:null,event:null,exponent:k,externalResourcesRequired:null,fill:null,fillOpacity:k,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:S,g2:S,glyphName:S,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:k,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:k,horizOriginX:k,horizOriginY:k,id:null,ideographic:k,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:k,k:k,k1:k,k2:k,k3:k,k4:k,kernelMatrix:w,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:k,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:k,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:k,overlineThickness:k,paintOrder:null,panose1:null,path:null,pathLength:k,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:b,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:k,pointsAtY:k,pointsAtZ:k,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:w,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:w,rev:w,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:w,requiredFeatures:w,requiredFonts:w,requiredFormats:w,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:k,specularExponent:k,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:k,strikethroughThickness:k,string:null,stroke:null,strokeDashArray:w,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:k,strokeOpacity:k,strokeWidth:null,style:null,surfaceScale:k,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:w,tabIndex:k,tableValues:null,target:null,targetX:k,targetY:k,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:w,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:k,underlineThickness:k,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:k,values:null,vAlphabetic:k,vMathematical:k,vectorEffect:null,vHanging:k,vIdeographic:k,version:null,vertAdvY:k,vertOriginX:k,vertOriginY:k,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:k,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),R=h([O,z,D,M,F],"html"),j=h([O,z,D,M,N],"svg"),_=/^data[-\w.:]+$/i,H=/-[a-z]/g,B=/[A-Z]/g;
      function U(e) { return "-" + e.toLowerCase() }
      function V(e) { return e.charAt(1).toUpperCase() }
      let q = {
        classId : "classID",
        dataType : "datatype",
        itemId : "itemID",
        strokeDashArray : "strokeDasharray",
        strokeDashOffset : "strokeDashoffset",
        strokeLineCap : "strokeLinecap",
        strokeLineJoin : "strokeLinejoin",
        strokeMiterLimit : "strokeMiterlimit",
        typeOf : "typeof",
        xLinkActuate : "xlinkActuate",
        xLinkArcRole : "xlinkArcrole",
        xLinkHref : "xlinkHref",
        xLinkRole : "xlinkRole",
        xLinkShow : "xlinkShow",
        xLinkTitle : "xlinkTitle",
        xLinkType : "xlinkType",
        xmlnsXLink : "xmlnsXlink"
      };
      var $ = n(5174), Y = $.default || $;
      let W = Q("end"), K = Q("start");
      function Q(e) {
        return function(t) {
          let n = t && t.position && t.position[e] || {};
          if ("number" == typeof n.line && n.line > 0 &&
              "number" == typeof n.column && n.column > 0)
            return {
              line: n.line, column: n.column,
                  offset: "number" == typeof n.offset && n.offset > -1
                      ? n.offset
                      : void 0
            }
        }
      }
      function X(e) {
        return e && "object" == typeof e ? "position" in e || "type" in e
                                               ? Z(e.position)
                                           : "start" in e || "end" in e   ? Z(e)
                                           : "line" in e || "column" in e ? J(e)
                                                                          : ""
                                         : ""
      }
      function J(e) { return G(e && e.line) + ":" + G(e && e.column) }
      function Z(e) { return J(e && e.start) + "-" + J(e && e.end) }
      function G(e) { return e && "number" == typeof e ? e : 1 }
      class ee extends Error {
        constructor(e, t, n) {
          super(), "string" == typeof t && (n = t, t = void 0);
          let r = "", i = {}, l = !1;
          if (t && (i = "line" in t && "column" in t ? {place : t}
                        : "start" in t && "end" in t ? {place : t}
                        : "type" in t ? {ancestors : [ t ], place : t.position}
                                      : {...t}),
              "string" == typeof e
                  ? r = e
                  : !i.cause && e && (l = !0, r = e.message, i.cause = e),
              !i.ruleId && !i.source && "string" == typeof n) {
            let e = n.indexOf(":");
            -1 === e ? i.ruleId = n
                     : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1))
          }
          if (!i.place && i.ancestors && i.ancestors) {
            let e = i.ancestors[i.ancestors.length - 1];
            e && (i.place = e.position)
          }
          let o = i.place && "start" in i.place ? i.place.start : i.place;
          this.ancestors = i.ancestors || void 0,
          this.cause = i.cause || void 0, this.column = o ? o.column : void 0,
          this.fatal = void 0, this.file, this.message = r,
          this.line = o ? o.line : void 0, this.name = X(i.place) || "1:1",
          this.place = i.place || void 0, this.reason = this.message,
          this.ruleId = i.ruleId || void 0, this.source = i.source || void 0,
          this.stack = l && i.cause && "string" == typeof i.cause.stack
                           ? i.cause.stack
                           : "",
          this.actual, this.expected, this.note, this.url
        }
      }
      ee.prototype.file = "", ee.prototype.name = "", ee.prototype.reason = "",
      ee.prototype.message = "", ee.prototype.stack = "",
      ee.prototype.column = void 0, ee.prototype.line = void 0,
      ee.prototype.ancestors = void 0, ee.prototype.cause = void 0,
      ee.prototype.fatal = void 0, ee.prototype.place = void 0,
      ee.prototype.ruleId = void 0, ee.prototype.source = void 0;
      let et = {}.hasOwnProperty, en = new Map, er = /[A-Z]/g, ei = /-([a-z])/g,
          el = new Set([ "table", "tbody", "thead", "tfoot", "tr" ]),
          eo = new Set([ "td", "th" ]),
          ea = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
      function eu(e, t, n) {
        return"element"===t.type?function(e,t,n){let r=e.schema,i=r;"svg"===t.tagName.toLowerCase()&&"html"===r.space&&(i=j,e.schema=i),e.ancestors.push(t);let l=ep(e,t.tagName,!1),o=function(e,t){let n,r;let i={};for(r in t.properties)if("children"!==r&&et.call(t.properties,r)){let l=function(e,t,n){let r=function(e,t){let n=d(t),r=t,i=m;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&_.test(t)){if("-"===t.charAt(4)){let e=t.slice(5).replace(H,V);r="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!H.test(e)){let n=e.replace(B,U);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}i=I}return new i(r,t)}(e.schema,t);if(!(null==n||"number"==typeof n&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?function(e,t){let n={};return(""===e[e.length-1]?[...e,""]:e).join((n.padRight?" ":"")+","+(!1===n.padLeft?"":" ")).trim()}(n):n.join(" ").trim()),"style"===r.property){let t="object"==typeof n?n:function(e,t){let n={};try{Y(t,function(e,t){let r=e;"--"!==r.slice(0,2)&&("-ms-"===r.slice(0,4)&&(r="ms-"+r.slice(4)),r=r.replace(ei,ed)),n[r]=t})}catch(t){if(!e.ignoreInvalidStyle){let n=new ee("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:t,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=ea+"#cannot-parse-style-attribute",n}}return n}(e,String(n));return"css"===e.stylePropertyNameCase&&(t=function(e){let t;let n={};for(t in e)et.call(e,t)&&(n[function(e){let t=e.replace(er,em);return"ms-"===t.slice(0,3)&&(t="-"+t),t}(t)]=e[t]);return n}(t)),["style",t]}return["react"===e.elementAttributeNameCase&&r.space?q[r.property]||r.property:r.attribute,n]}}(e,r,t.properties[r]);if(l){let[r,o]=l;e.tableCellAlignToStyle&&"align"===r&&"string"==typeof o&&eo.has(t.tagName)?n=o:i[r]=o}}return n&&((i.style||(i.style={}))["css"===e.stylePropertyNameCase?"text-align":"textAlign"]=n),i}(e,t),a=ef(e,t);return el.has(t.tagName)&&(a=a.filter(function(e){return"string"!=typeof e||!("object"==typeof e?"text"===e.type&&f(e.value):f(e))})),es(e,o,l,t),ec(o,a),e.ancestors.pop(),e.schema=r,e.create(t,l,o,n)}(e,t,n):"mdxFlowExpression"===t.type||"mdxTextExpression"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return(0,l.ok)("ExpressionStatement"===n.type),e.evaluater.evaluateExpression(n.expression)}eh(e,t.position)}(e,t):"mdxJsxFlowElement"===t.type||"mdxJsxTextElement"===t.type?function(e,t,n){let r=e.schema,i=r;"svg"===t.name&&"html"===r.space&&(i=j,e.schema=i),e.ancestors.push(t);let o=null===t.name?e.Fragment:ep(e,t.name,!0),a=function(e,t){let n={};for(let r of t.attributes)if("mdxJsxExpressionAttribute"===r.type){if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];(0,l.ok)("ExpressionStatement"===t.type);let i=t.expression;(0,l.ok)("ObjectExpression"===i.type);let o=i.properties[0];(0,l.ok)("SpreadElement"===o.type),Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else eh(e,t.position)}else{let i;let o=r.name;if(r.value&&"object"==typeof r.value){if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];(0,l.ok)("ExpressionStatement"===t.type),i=e.evaluater.evaluateExpression(t.expression)}else eh(e,t.position)}else i=null===r.value||r.value;n[o]=i}return n}(e,t),u=ef(e,t);return es(e,a,o,t),ec(a,u),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}(e,t,n):"mdxjsEsm"===t.type?function(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);eh(e,t.position)}(e,t):"root"===t.type?function(e,t,n){let r={};return ec(r,ef(e,t)),e.create(t,e.Fragment,r,n)}(e,t,n):"text"===t.type?t.value:void 0
      }
      function es(e, t, n, r) {
        "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r)
      }
      function ec(e, t) {
        if (t.length > 0) {
          let n = t.length > 1 ? t : t[0];
          n && (e.children = n)
        }
      }
      function ef(e, t) {
        let n = [], r = -1, i = e.passKeys ? new Map : en;
        for (; ++r < t.children.length;) {
          let l;
          let o = t.children[r];
          if (e.passKeys) {
            let e =
                "element" === o.type ? o.tagName
                : "mdxJsxFlowElement" === o.type || "mdxJsxTextElement" === o.type ? o.name
                                                                                   : void 0;
            if (e) {
              let t = i.get(e) || 0;
              l = e + "-" + t, i.set(e, t + 1)
            }
          }
          let a = eu(e, o, l);
          void 0 !== a && n.push(a)
        }
        return n
      }
      function ep(e, t, n) {
        let r;
        if (n) {
          if (t.includes(".")) {
            let e;
            let n = t.split("."), i = -1;
            for (; ++i < n.length;) {
              let t = s(n[i]) ? {type : "Identifier", name : n[i]}
                              : {type : "Literal", value : n[i]};
              e = e ? {
                type : "MemberExpression",
                object : e,
                property : t,
                computed : !!(i && "Literal" === t.type),
                optional : !1
              }
                    : t
            }
            (0, l.ok)(e, "always a result"), r = e
          } else
            r = s(t) && !/^[a-z]/.test(t) ? {type : "Identifier", name : t}
                                          : {type : "Literal", value : t}
        } else
          r = {type : "Literal", value : t};
        if ("Literal" === r.type) {
          let t = r.value;
          return et.call(e.components, t) ? e.components[t] : t
        }
        if (e.evaluater)
          return e.evaluater.evaluateExpression(r);
        eh(e)
      }
      function eh(e, t) {
        let n = new ee("Cannot handle MDX estrees without `createEvaluater`", {
          ancestors : e.ancestors,
          place : t,
          ruleId : "mdx-estree",
          source : "hast-util-to-jsx-runtime"
        });
        throw n.file = e.filePath || void 0,
              n.url = ea + "#cannot-handle-mdx-estrees-without-createevaluater",
              n
      }
      function ed(e, t) { return t.toUpperCase() }
      function em(e) { return "-" + e.toLowerCase() }
      let eg = {
        action : [ "form" ],
        cite : [ "blockquote", "del", "ins", "q" ],
        data : [ "object" ],
        formAction : [ "button", "input" ],
        href : [ "a", "area", "base", "link" ],
        icon : [ "menuitem" ],
        itemId : null,
        manifest : [ "html" ],
        ping : [ "a", "area" ],
        poster : [ "video" ],
        src : [
          "audio", "embed", "iframe", "img", "input", "script", "source",
          "track", "video"
        ]
      };
      var ey = n(5893), ex = n(7962), ev = n(1905);
      class ek {
        constructor(e) { this.left = e ? [...e ] : [], this.right = [] }
        get(e) {
          if (e < 0 || e >= this.left.length + this.right.length)
            throw RangeError("Cannot access index `" + e +
                             "` in a splice buffer of size `" +
                             (this.left.length + this.right.length) + "`");
          return e < this.left.length
                     ? this.left[e]
                     : this.right[this.right.length - e + this.left.length - 1]
        }
        get length() { return this.left.length + this.right.length }
        shift() { return this.setCursor(0), this.right.pop() }
        slice(e, t) {
          let n = null == t ? Number.POSITIVE_INFINITY : t;
          return n < this.left.length ? this.left.slice(e, n)
                 : e > this.left.length
                     ? this.right
                           .slice(this.right.length - n + this.left.length,
                                  this.right.length - e + this.left.length)
                           .reverse()
                     : this.left.slice(e).concat(
                           this.right
                               .slice(this.right.length - n + this.left.length)
                               .reverse())
        }
        splice(e, t, n) {
          this.setCursor(Math.trunc(e));
          let r = this.right.splice(this.right.length - (t || 0),
                                    Number.POSITIVE_INFINITY);
          return n && eb(this.left, n), r.reverse()
        }
        pop() {
          return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop()
        }
        push(e) { this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e) }
        pushMany(e) {
          this.setCursor(Number.POSITIVE_INFINITY), eb(this.left, e)
        }
        unshift(e) { this.setCursor(0), this.right.push(e) }
        unshiftMany(e) { this.setCursor(0), eb(this.right, e.reverse()) }
        setCursor(e) {
          if (e !== this.left.length &&
              (!(e > this.left.length) || 0 !== this.right.length) &&
              (!(e < 0) || 0 !== this.left.length)) {
            if (e < this.left.length) {
              let t = this.left.splice(e, Number.POSITIVE_INFINITY);
              eb(this.right, t.reverse())
            } else {
              let t =
                  this.right.splice(this.left.length + this.right.length - e,
                                    Number.POSITIVE_INFINITY);
              eb(this.left, t.reverse())
            }
          }
        }
      }
      function eb(e, t) {
        let n = 0;
        if (t.length < 1e4)
          e.push(...t);
        else
          for (; n < t.length;)
            e.push(...t.slice(n, n + 1e4)), n += 1e4
      }
      function eS(e) {
        let t, n, r, i, l, o, a;
        let u = {}, s = -1, c = new ek(e);
        for (; ++s < c.length;) {
          for (; (s in u);)
            s = u[s];
          if (t = c.get(s),
              s && "chunkFlow" === t[1].type &&
                  "listItemPrefix" === c.get(s - 1)[1].type &&
                  ((r = 0) < (o = t[1]._tokenizer.events).length &&
                       "lineEndingBlank" === o[r][1].type && (r += 2),
                   r < o.length && "content" === o[r][1].type))
            for (; ++r < o.length && "content" !== o[r][1].type;)
              "chunkText" === o[r][1].type &&
                  (o[r][1]._isInFirstContentOfListItem = !0, r++);
          if ("enter" === t[0])
            t[1].contentType && (Object.assign(u, function(e, t) {
              let n, r;
              let i = e.get(t)[1], l = e.get(t)[2], o = t - 1, a = [],
                  u = i._tokenizer || l.parser[i.contentType](i.start),
                  s = u.events, c = [], f = {}, p = -1, h = i, d = 0, m = 0,
                  g = [ 0 ];
              for (; h;) {
                for (; e.get(++o)[1] !== h;)
                  ;
                a.push(o),
                    !h._tokenizer &&
                        (n = l.sliceStream(h), h.next || n.push(null),
                         r && u.defineSkip(h.start),
                         h._isInFirstContentOfListItem &&
                             (u._gfmTasklistFirstContentOfListItem = !0),
                         u.write(n),
                         h._isInFirstContentOfListItem &&
                             (u._gfmTasklistFirstContentOfListItem = void 0)),
                    r = h, h = h.next
              }
              for (h = i; ++p < s.length;)
                "exit" === s[p][0] && "enter" === s[p - 1][0] &&
                    s[p][1].type === s[p - 1][1].type &&
                    s[p][1].start.line !== s[p][1].end.line &&
                    (m = p + 1, g.push(m), h._tokenizer = void 0,
                     h.previous = void 0, h = h.next);
              for (u.events = [],
                  h ? (h._tokenizer = void 0, h.previous = void 0) : g.pop(),
                  p = g.length;
                   p--;) {
                let t = s.slice(g[p], g[p + 1]), n = a.pop();
                c.push([ n, n + t.length - 1 ]), e.splice(n, 2, t)
              }
              for (c.reverse(), p = -1; ++p < c.length;)
                f[d + c[p][0]] = d + c[p][1], d += c[p][1] - c[p][0] - 1;
              return f
            }(c, s)), s = u[s], a = !0);
          else if (t[1]._container) {
            for (r = s, n = void 0; r--;)
              if ("lineEnding" === (i = c.get(r))[1].type ||
                  "lineEndingBlank" === i[1].type)
                "enter" === i[0] &&
                    (n && (c.get(n)[1].type = "lineEndingBlank"),
                     i[1].type = "lineEnding", n = r);
              else
                break;
            n && (t[1].end = Object.assign({}, c.get(n)[1].start),
                  (l = c.slice(n, s)).unshift(t), c.splice(n, s - n + 1, l))
          }
        }
        return (0, ev.d)(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !a
      }
      var ew = n(4663), eC = n(2761), eE = n(5459);
      let eI = {
        tokenize : function(e) {
          let t;
          let n = e.attempt(
              this.parser.constructs.contentInitial,
              function(t) {
                if (null === t) {
                  e.consume(t);
                  return
                }
                return e.enter("lineEnding"), e.consume(t),
                       e.exit("lineEnding"), (0, eC.f)(e, n, "linePrefix")
              },
              function(n) {
                return e.enter("paragraph"), function n(r) {
                  let i = e.enter("chunkText",
                                  {contentType : "text", previous : t});
                  return t && (t.next = i), t = i, function t(r) {
                    if (null === r) {
                      e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
                      return
                    }
                    return (0, eE.Ch)(r)
                               ? (e.consume(r), e.exit("chunkText"), n)
                               : (e.consume(r), t)
                  }(r)
                }(n)
              });
          return n
        }
      },
          eT = {
            tokenize : function(e) {
              let t, n, r;
              let i = this, l = [], o = 0;
              return a;
              function a(t) {
                if (o < l.length) {
                  let n = l[o];
                  return i.containerState = n[1],
                         e.attempt(n[0].continuation, u, s)(t)
                }
                return s(t)
              }
              function u(e) {
                if (o++, i.containerState._closeFlow) {
                  let n;
                  i.containerState._closeFlow = void 0, t && y();
                  let r = i.events.length, l = r;
                  for (; l--;)
                    if ("exit" === i.events[l][0] &&
                        "chunkFlow" === i.events[l][1].type) {
                      n = i.events[l][1].end;
                      break
                    }
                  g(o);
                  let a = r;
                  for (; a < i.events.length;)
                    i.events[a][1].end = Object.assign({}, n), a++;
                  return (0, ev.d)(i.events, l + 1, 0, i.events.slice(r)),
                         i.events.length = a, s(e)
                }
                return a(e)
              }
              function s(n) {
                if (o === l.length) {
                  if (!t)
                    return p(n);
                  if (t.currentConstruct && t.currentConstruct.concrete)
                    return d(n);
                  i.interrupt =
                      !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack)
                }
                return i.containerState = {}, e.check(eP, c, f)(n)
              }
              function c(e) { return t && y(), g(o), p(e) }
              function f(e) {
                return i.parser.lazy[i.now().line] = o !== l.length,
                       r = i.now().offset, d(e)
              }
              function p(t) {
                return i.containerState = {}, e.attempt(eP, h, d)(t)
              }
              function h(e) {
                return o++, l.push([ i.currentConstruct, i.containerState ]),
                       p(e)
              }
              function d(r) {
                if (null === r) {
                  t && y(), g(0), e.consume(r);
                  return
                }
                return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
                  contentType : "flow",
                  previous : n,
                  _tokenizer : t
                }),
                       function t(n) {
                         if (null === n) {
                           m(e.exit("chunkFlow"), !0), g(0), e.consume(n);
                           return
                         }
                         return (0, eE.Ch)(n)
                                    ? (e.consume(n), m(e.exit("chunkFlow")),
                                       o = 0, i.interrupt = void 0, a)
                                    : (e.consume(n), t)
                       }(r)
              }
              function m(e, l) {
                let a = i.sliceStream(e);
                if (l && a.push(null), e.previous = n, n && (n.next = e), n = e,
                    t.defineSkip(e.start), t.write(a),
                    i.parser.lazy[e.start.line]) {
                  let e, n, l = t.events.length;
                  for (; l--;)
                    if (t.events[l][1].start.offset < r &&
                        (!t.events[l][1].end || t.events[l][1].end.offset > r))
                      return;
                  let a = i.events.length, u = a;
                  for (; u--;)
                    if ("exit" === i.events[u][0] &&
                        "chunkFlow" === i.events[u][1].type) {
                      if (e) {
                        n = i.events[u][1].end;
                        break
                      }
                      e = !0
                    }
                  for (g(o), l = a; l < i.events.length;)
                    i.events[l][1].end = Object.assign({}, n), l++;
                  (0, ev.d)(i.events, u + 1, 0, i.events.slice(a)),
                      i.events.length = l
                }
              }
              function g(t) {
                let n = l.length;
                for (; n-- > t;) {
                  let t = l[n];
                  i.containerState = t[1], t[0].exit.call(i, e)
                }
                l.length = t
              }
              function y() {
                t.write([ null ]), n = void 0, t = void 0,
                                   i.containerState._closeFlow = void 0
              }
            }
          },
          eP = {
            tokenize : function(e, t, n) {
              return (0, eC.f)(
                  e, e.attempt(this.parser.constructs.document, t, n),
                  "linePrefix",
                  this.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4)
            }
          };
      var ez = n(3402);
      let eO = {
        tokenize : function(e, t) {
          let n;
          return function(t) {
            return e.enter("content"),
                   n = e.enter("chunkContent", {contentType : "content"}), r(t)
          };
          function r(t) {
            return null === t      ? i(t)
                   : (0, eE.Ch)(t) ? e.check(eA, l, i)(t)
                                   : (e.consume(t), r)
          }
          function i(n) {
            return e.exit("chunkContent"), e.exit("content"), t(n)
          }
          function l(t) {
            return e.consume(t), e.exit("chunkContent"),
                   n.next = e.enter("chunkContent",
                                    {contentType : "content", previous : n}),
                   n = n.next, r
          }
        },
        resolve : function(e) { return eS(e), e }
      },
          eA = {
            tokenize : function(e, t, n) {
              let r = this;
              return function(t) {
                return e.exit("chunkContent"), e.enter("lineEnding"),
                       e.consume(t), e.exit("lineEnding"),
                       (0, eC.f)(e, i, "linePrefix")
              };
              function i(i) {
                if (null === i || (0, eE.Ch)(i))
                  return n(i);
                let l = r.events[r.events.length - 1];
                return !r.parser.constructs.disable.null.includes(
                           "codeIndented") &&
                               l && "linePrefix" === l[1].type &&
                               l[2].sliceSerialize(l[1], !0).length >= 4
                           ? t(i)
                           : e.interrupt(r.parser.constructs.flow, n, t)(i)
              }
            },
            partial : !0
          },
          eL = {
            tokenize : function(e) {
              let t = this,
                  n = e.attempt(
                      ez.w,
                      function(r) {
                        if (null === r) {
                          e.consume(r);
                          return
                        }
                        return e.enter("lineEndingBlank"), e.consume(r),
                               e.exit("lineEndingBlank"),
                               t.currentConstruct = void 0, n
                      },
                      e.attempt(this.parser.constructs.flowInitial, r,
                                (0, eC.f)(e,
                                          e.attempt(this.parser.constructs.flow,
                                                    r, e.attempt(eO, r)),
                                          "linePrefix")));
              return n;
              function r(r) {
                if (null === r) {
                  e.consume(r);
                  return
                }
                return e.enter("lineEnding"), e.consume(r),
                       e.exit("lineEnding"), t.currentConstruct = void 0, n
              }
            }
          },
          eD = {resolveAll : eR()}, eM = eN("string"), eF = eN("text");
      function eN(e) {
        return {
          tokenize: function(t) {
            let n = this, r = this.parser.constructs[e], i = t.attempt(r, l, o);
            return l;
            function l(e) { return u(e) ? i(e) : o(e) }
            function o(e) {
              if (null === e) {
                t.consume(e);
                return
              }
              return t.enter("data"), t.consume(e), a
            }
            function a(e) {
              return u(e) ? (t.exit("data"), i(e)) : (t.consume(e), a)
            }
            function u(e) {
              if (null === e)
                return !0;
              let t = r[e], i = -1;
              if (t)
                for (; ++i < t.length;) {
                  let e = t[i];
                  if (!e.previous || e.previous.call(n, n.previous))
                    return !0
                }
              return !1
            }
          }, resolveAll: eR("text" === e ? ej : void 0)
        }
      }
      function eR(e) {
        return function(t, n) {
          let r, i = -1;
          for (; ++i <= t.length;)
            void 0 === r
                ? t[i] && "data" === t[i][1].type && (r = i, i++)
                : t[i] && "data" === t[i][1].type ||
                      (i !== r + 2 && (t[r][1].end = t[i - 1][1].end,
                                       t.splice(r + 2, i - r - 2), i = r + 2),
                       r = void 0);
          return e ? e(t, n) : t
        }
      }
      function ej(e, t) {
        let n = 0;
        for (; ++n <= e.length;)
          if ((n === e.length || "lineEnding" === e[n][1].type) &&
              "data" === e[n - 1][1].type) {
            let r;
            let i = e[n - 1][1], l = t.sliceStream(i), o = l.length, a = -1,
                u = 0;
            for (; o--;) {
              let e = l[o];
              if ("string" == typeof e) {
                for (a = e.length; 32 === e.charCodeAt(a - 1);)
                  u++, a--;
                if (a)
                  break;
                a = -1
              } else if (-2 === e)
                r = !0, u++;
              else if (-1 === e)
                ;
              else {
                o++;
                break
              }
            }
            if (u) {
              let l = {
                type : n === e.length || r || u < 2 ? "lineSuffix"
                                                    : "hardBreakTrailing",
                start : {
                  line : i.end.line,
                  column : i.end.column - u,
                  offset : i.end.offset - u,
                  _index : i.start._index + o,
                  _bufferIndex : o ? a : i.start._bufferIndex + a
                },
                end : Object.assign({}, i.end)
              };
              i.end = Object.assign({}, l.start),
              i.start.offset === i.end.offset
                  ? Object.assign(i, l)
                  : (e.splice(n, 0, [ "enter", l, t ], [ "exit", l, t ]),
                     n += 2)
            }
            n++
          }
        return e
      }
      var e_ = n(3233);
      let eH = {
        name : "thematicBreak",
        tokenize : function(e, t, n) {
          let r, i = 0;
          return function(l) {
            return e.enter("thematicBreak"), r = l, function l(o) {
              return o === r ? (e.enter("thematicBreakSequence"),
                                function t(n) {
                                  return n === r
                                             ? (e.consume(n), i++, t)
                                             : (e.exit("thematicBreakSequence"),
                                                (0, eE.xz)(n)
                                                    ? (0, eC.f)(e, l,
                                                                "whitespace")(n)
                                                    : l(n))
                                }(o))
                     : i >= 3 && (null === o || (0, eE.Ch)(o))
                         ? (e.exit("thematicBreak"), t(o))
                         : n(o)
            }(l)
          }
        }
      },
          eB = {
            name : "list",
            tokenize : function(e, t, n) {
              let r = this, i = r.events[r.events.length - 1],
                  l = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(
                                                                i[1], !0)
                                                            .length
                                                      : 0,
                  o = 0;
              return function(t) {
                let i = r.containerState.type ||
                        (42 === t || 43 === t || 45 === t ? "listUnordered"
                                                          : "listOrdered");
                if ("listUnordered" === i ? !r.containerState.marker ||
                                                t === r.containerState.marker
                                          : (0, eE.pY)(t)) {
                  if (r.containerState.type || (r.containerState.type = i,
                                                e.enter(i, {_container : !0})),
                      "listUnordered" === i)
                    return e.enter("listItemPrefix"),
                           42 === t || 45 === t ? e.check(eH, n, a)(t) : a(t);
                  if (!r.interrupt || 49 === t)
                    return e.enter("listItemPrefix"), e.enter("listItemValue"),
                           function t(i) {
                             return (0, eE.pY)(i) && ++o < 10
                                        ? (e.consume(i), t)
                                    : (!r.interrupt || o < 2) &&
                                            (r.containerState.marker
                                                 ? i === r.containerState.marker
                                                 : 41 === i || 46 === i)
                                        ? (e.exit("listItemValue"), a(i))
                                        : n(i)
                           }(t)
                }
                return n(t)
              };
              function a(t) {
                return e.enter("listItemMarker"), e.consume(t),
                       e.exit("listItemMarker"),
                       r.containerState.marker = r.containerState.marker || t,
                       e.check(ez.w, r.interrupt ? n : u, e.attempt(eU, c, s))
              }
              function u(e) {
                return r.containerState.initialBlankLine = !0, l++, c(e)
              }
              function s(t) {
                return (0, eE.xz)(t)
                           ? (e.enter("listItemPrefixWhitespace"), e.consume(t),
                              e.exit("listItemPrefixWhitespace"), c)
                           : n(t)
              }
              function c(n) {
                return r.containerState.size =
                           l + r.sliceSerialize(e.exit("listItemPrefix"), !0)
                                   .length,
                       t(n)
              }
            },
            continuation : {
              tokenize : function(e, t, n) {
                let r = this;
                return r.containerState
                           ._closeFlow = void 0,
           e.check(ez.w,
                   function(n) {
                     return r.containerState.furtherBlankLines =
                                r.containerState.furtherBlankLines ||
                                r.containerState.initialBlankLine,
                            (0, eC.f)(e, t, "listItemIndent",
                                      r.containerState.size + 1)(n)
                   },
                   function(n) {
                     return r.containerState.furtherBlankLines || !(0, eE.xz)(n)
                                ? (r.containerState.furtherBlankLines = void 0,
                                   r.containerState.initialBlankLine = void 0,
                                   i(n))
                                : (r.containerState.furtherBlankLines = void 0,
                                   r.containerState.initialBlankLine = void 0,
                                   e.attempt(eV, t, i)(n))
                   });
                function i(i) {
                  return r.containerState._closeFlow = !0, r.interrupt = void 0,
                         (0, eC.f)(e, e.attempt(eB, t, n), "linePrefix",
                                   r.parser.constructs.disable.null.includes(
                                       "codeIndented")
                                       ? void 0
                                       : 4)(i)
                }
              }
            },
            exit : function(e) { e.exit(this.containerState.type) }
          },
          eU = {
            tokenize : function(e, t, n) {
              let r = this;
              return (0, eC.f)(
                  e,
                  function(e) {
                    let i = r.events[r.events.length - 1];
                    return !(0, eE.xz)(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e)
                                                                                           : n(e)
                  },
                  "listItemPrefixWhitespace",
                  r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 5)
            },
            partial : !0
          },
          eV = {
            tokenize : function(e, t, n) {
              let r = this;
              return (0, eC.f)(e, function(e) {
                let i = r.events[r.events.length - 1];
                return i && "listItemIndent" === i[1].type &&
                               i[2].sliceSerialize(i[1], !0).length ===
                                   r.containerState.size
                           ? t(e)
                           : n(e)
              }, "listItemIndent", r.containerState.size + 1)
            },
            partial : !0
          },
          eq = {
            name : "blockQuote",
            tokenize : function(e, t, n) {
              let r = this;
              return function(t) {
                if (62 === t) {
                  let n = r.containerState;
                  return n.open || (e.enter("blockQuote", {_container : !0}),
                                    n.open = !0),
                         e.enter("blockQuotePrefix"),
                         e.enter("blockQuoteMarker"), e.consume(t),
                         e.exit("blockQuoteMarker"), i
                }
                return n(t)
              };
              function i(n) {
                return (0, eE.xz)(n) ? (e.enter("blockQuotePrefixWhitespace"),
                                        e.consume(n),
                                        e.exit("blockQuotePrefixWhitespace"),
                                        e.exit("blockQuotePrefix"), t)
                                     : (e.exit("blockQuotePrefix"), t(n))
              }
            },
            continuation : {
              tokenize : function(e, t, n) {
                let r = this;
                return function(t) {
                  return (0, eE.xz)(t)
                             ? (0,
                                eC.f)(e, i, "linePrefix",
                                      r.parser.constructs.disable.null.includes(
                                          "codeIndented")
                                          ? void 0
                                          : 4)(t)
                             : i(t)
                };
                function i(r) { return e.attempt(eq, t, n)(r) }
              }
            },
            exit : function(e) { e.exit("blockQuote") }
          };
      function e$(e, t, n, r, i, l, o, a, u) {
        let s = u || Number.POSITIVE_INFINITY, c = 0;
        return function(t) {
          return 60 === t ? (e.enter(r), e.enter(i), e.enter(l), e.consume(t),
                             e.exit(l), f)
                 : null === t || 32 === t || 41 === t || (0, eE.Av)(t)
                     ? n(t)
                     : (e.enter(r), e.enter(o), e.enter(a),
                        e.enter("chunkString", {contentType : "string"}), d(t))
        };
        function f(n) {
          return 62 === n
                     ? (e.enter(l), e.consume(n), e.exit(l), e.exit(i),
                        e.exit(r), t)
                     : (e.enter(a),
                        e.enter("chunkString", {contentType : "string"}), p(n))
        }
        function p(t) {
          return 62 === t ? (e.exit("chunkString"), e.exit(a), f(t))
                 : null === t || 60 === t || (0, eE.Ch)(t)
                     ? n(t)
                     : (e.consume(t), 92 === t ? h : p)
        }
        function h(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t)
        }
        function d(i) {
          return !c && (null === i || 41 === i || (0, eE.z3)(i))
                     ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r),
                        t(i))
                 : c < s && 40 === i ? (e.consume(i), c++, d)
                 : 41 === i          ? (e.consume(i), c--, d)
                 : null === i || 32 === i || 40 === i || (0, eE.Av)(i)
                     ? n(i)
                     : (e.consume(i), 92 === i ? m : d)
        }
        function m(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), d) : d(t)
        }
      }
      function eY(e, t, n, r, i, l) {
        let o;
        let a = this, u = 0;
        return function(t) {
          return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(l), s
        };
        function s(f) {
          return u > 999 || null === f || 91 === f || 93 === f && !o ||
                         94 === f && !u &&
                             "_hiddenFootnoteSupport" in a.parser.constructs
                     ? n(f)
                 : 93 === f ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i),
                               e.exit(r), t)
                 : (0, eE.Ch)(f)
                     ? (e.enter("lineEnding"), e.consume(f),
                        e.exit("lineEnding"), s)
                     : (e.enter("chunkString", {contentType : "string"}), c(f))
        }
        function c(t) {
          return null === t || 91 === t || 93 === t || (0, eE.Ch)(t) ||
                         u++ > 999
                     ? (e.exit("chunkString"), s(t))
                     : (e.consume(t), o || (o = !(0, eE.xz)(t)),
                        92 === t ? f : c)
        }
        function f(t) {
          return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, c)
                                                  : c(t)
        }
      }
      function eW(e, t, n, r, i, l) {
        let o;
        return function(t) {
          return 34 === t || 39 === t || 40 === t
                     ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i),
                        o = 40 === t ? 41 : t, a)
                     : n(t)
        };
        function a(n) {
          return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
                         : (e.enter(l), u(n))
        }
        function u(t) {
          return t === o      ? (e.exit(l), a(o))
                 : null === t ? n(t)
                 : (0, eE.Ch)(t)
                     ? (e.enter("lineEnding"), e.consume(t),
                        e.exit("lineEnding"), (0, eC.f)(e, u, "linePrefix"))
                     : (e.enter("chunkString", {contentType : "string"}), s(t))
        }
        function s(t) {
          return t === o || null === t || (0, eE.Ch)(t)
                     ? (e.exit("chunkString"), u(t))
                     : (e.consume(t), 92 === t ? c : s)
        }
        function c(t) { return t === o || 92 === t ? (e.consume(t), s) : s(t) }
      }
      function eK(e, t) {
        let n;
        return function r(i) {
          return (0, eE.Ch)(i) ? (e.enter("lineEnding"), e.consume(i),
                                  e.exit("lineEnding"), n = !0, r)
                 : (0, eE.xz)(i)
                     ? (0, eC.f)(e, r, n ? "linePrefix" : "lineSuffix")(i)
                     : t(i)
        }
      }
      var eQ = n(1098);
      let eX = {
        tokenize : function(e, t, n) {
          return function(t) { return (0, eE.z3)(t) ? eK(e, r)(t) : n(t) };
          function r(t) {
            return eW(e, i, n, "definitionTitle", "definitionTitleMarker",
                      "definitionTitleString")(t)
          }
          function i(t) {
            return (0, eE.xz)(t) ? (0, eC.f)(e, l, "whitespace")(t) : l(t)
          }
          function l(e) { return null === e || (0, eE.Ch)(e) ? t(e) : n(e) }
        },
        partial : !0
      },
          eJ = {
            name : "codeIndented",
            tokenize : function(e, t, n) {
              let r = this;
              return function(t) {
                return e.enter("codeIndented"),
                       (0, eC.f)(e, i, "linePrefix", 5)(t)
              };
              function i(t) {
                let i = r.events[r.events.length - 1];
                return i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?function t(n){return null===n?l(n):(0,eE.Ch)(n)?e.attempt(eZ,t,l)(n):(e.enter("codeFlowValue"),function n(r){return null===r||(0,eE.Ch)(r)?(e.exit("codeFlowValue"),t(r)):(e.consume(r),n)}(n))}(t):n(t)
              }
              function l(n) { return e.exit("codeIndented"), t(n) }
            }
          },
          eZ = {
            tokenize : function(e, t, n) {
              let r = this;
              return i;
              function i(t) {
                return r.parser.lazy[r.now().line] ? n(t)
                       : (0, eE.Ch)(t) ? (e.enter("lineEnding"), e.consume(t),
                                          e.exit("lineEnding"), i)
                                       : (0, eC.f)(e, l, "linePrefix", 5)(t)
              }
              function l(e) {
                let l = r.events[r.events.length - 1];
                return l && "linePrefix" === l[1].type &&
                               l[2].sliceSerialize(l[1], !0).length >= 4
                           ? t(e)
                       : (0, eE.Ch)(e) ? i(e)
                                       : n(e)
              }
            },
            partial : !0
          },
          eG = {
            name : "setextUnderline",
            tokenize : function(e, t, n) {
              let r;
              let i = this;
              return function(t) {
                let o, a = i.events.length;
                for (; a--;)
                  if ("lineEnding" !== i.events[a][1].type &&
                      "linePrefix" !== i.events[a][1].type &&
                      "content" !== i.events[a][1].type) {
                    o = "paragraph" === i.events[a][1].type;
                    break
                  }
                return !i.parser.lazy[i.now().line] && (i.interrupt || o)
                           ? (e.enter("setextHeadingLine"), r = t,
                              e.enter("setextHeadingLineSequence"),
                              function t(n) {
                                return n === r
                                           ? (e.consume(n), t)
                                           : (e.exit(
                                                  "setextHeadingLineSequence"),
                                              (0, eE.xz)(n)
                                                  ? (0, eC.f)(e, l,
                                                              "lineSuffix")(n)
                                                  : l(n))
                              }(t))
                           : n(t)
              };
              function l(r) {
                return null === r || (0, eE.Ch)(r)
                           ? (e.exit("setextHeadingLine"), t(r))
                           : n(r)
              }
            },
            resolveTo : function(e, t) {
              let n, r, i, l = e.length;
              for (; l--;)
                if ("enter" === e[l][0]) {
                  if ("content" === e[l][1].type) {
                    n = l;
                    break
                  }
                  "paragraph" === e[l][1].type && (r = l)
                } else
                  "content" === e[l][1].type && e.splice(l, 1),
                      i || "definition" !== e[l][1].type || (i = l);
              let o = {
                type : "setextHeading",
                start : Object.assign({}, e[r][1].start),
                end : Object.assign({}, e[e.length - 1][1].end)
              };
              return e[r][1].type = "setextHeadingText",
                     i ? (e.splice(r, 0, [ "enter", o, t ]),
                          e.splice(i + 1, 0, [ "exit", e[n][1], t ]),
                          e[n][1].end = Object.assign({}, e[i][1].end))
                       : e[n][1] = o,
                     e.push([ "exit", o, t ]), e
            }
          },
          e0 =
              [
                "address",    "article",  "aside",   "base",     "basefont",
                "blockquote", "body",     "caption", "center",   "col",
                "colgroup",   "dd",       "details", "dialog",   "dir",
                "div",        "dl",       "dt",      "fieldset", "figcaption",
                "figure",     "footer",   "form",    "frame",    "frameset",
                "h1",         "h2",       "h3",      "h4",       "h5",
                "h6",         "head",     "header",  "hr",       "html",
                "iframe",     "legend",   "li",      "link",     "main",
                "menu",       "menuitem", "nav",     "noframes", "ol",
                "optgroup",   "option",   "p",       "param",    "search",
                "section",    "summary",  "table",   "tbody",    "td",
                "tfoot",      "th",       "thead",   "title",    "tr",
                "track",      "ul"
              ],
          e1 = [ "pre", "script", "style", "textarea" ], e2 = {
            tokenize : function(e, t, n) {
              return function(r) {
                return e.enter("lineEnding"), e.consume(r),
                       e.exit("lineEnding"), e.attempt(ez.w, t, n)
              }
            },
            partial : !0
          },
          e4 = {
            tokenize : function(e, t, n) {
              let r = this;
              return function(t) {
                return (0, eE.Ch)(t) ? (e.enter("lineEnding"), e.consume(t),
                                        e.exit("lineEnding"), i)
                                     : n(t)
              };
              function i(e) { return r.parser.lazy[r.now().line] ? n(e) : t(e) }
            },
            partial : !0
          },
          e3 = {
            tokenize : function(e, t, n) {
              let r = this;
              return function(t) {
                return null === t ? n(t)
                                  : (e.enter("lineEnding"), e.consume(t),
                                     e.exit("lineEnding"), i)
              };
              function i(e) { return r.parser.lazy[r.now().line] ? n(e) : t(e) }
            },
            partial : !0
          },
          e5 = {
            name : "codeFenced",
            tokenize : function(e, t, n) {
              let r;
              let i = this, l = {
                tokenize : function(e, t, n) {
                  let l = 0;
                  return function(t) {
                    return e.enter("lineEnding"), e.consume(t),
                           e.exit("lineEnding"), o
                  };
                  function o(t) {
                    return e.enter("codeFencedFence"),
                           (0, eE.xz)(t)
                               ? (0, eC.f)(
                                     e, u, "linePrefix",
                                     i.parser.constructs.disable.null.includes(
                                         "codeIndented")
                                         ? void 0
                                         : 4)(t)
                               : u(t)
                  }
                  function u(t) {
                    return t === r
                               ? (e.enter("codeFencedFenceSequence"),
                                  function t(i) {
                                    return i === r ? (l++, e.consume(i), t)
                                           : l >= a
                                               ? (e.exit(
                                                      "codeFencedFenceSequence"),
                                                  (0, eE.xz)(i)
                                                      ? (0,
                                                         eC.f)(e, s,
                                                               "whitespace")(i)
                                                      : s(i))
                                               : n(i)
                                  }(t))
                               : n(t)
                  }
                  function s(r) {
                    return null === r || (0, eE.Ch)(r)
                               ? (e.exit("codeFencedFence"), t(r))
                               : n(r)
                  }
                },
                partial : !0
              },
                  o = 0, a = 0;
              return function(t) {
                return function(t) {
                  let l = i.events[i.events.length - 1];
                  return o = l && "linePrefix" === l[1].type ? l[2].sliceSerialize(
                                                                       l[1], !0)
                                                                   .length
                                                             : 0,
                         r = t, e.enter("codeFenced"),
                         e.enter("codeFencedFence"),
                         e.enter("codeFencedFenceSequence"), function t(i) {
                           return i === r ? (a++, e.consume(i), t)
                                  : a < 3
                                      ? n(i)
                                      : (e.exit("codeFencedFenceSequence"),
                                         (0, eE.xz)(i)
                                             ? (0, eC.f)(e, u, "whitespace")(i)
                                             : u(i))
                         }(t)
                }(t)
              };
              function u(l) {
                return null === l || (0, eE.Ch)(l)
                           ? (e.exit("codeFencedFence"),
                              i.interrupt ? t(l) : e.check(e3, c, d)(l))
                           : (e.enter("codeFencedFenceInfo"),
                              e.enter("chunkString", {contentType : "string"}),
                              function t(i) {
                                return null === i || (0, eE.Ch)(i)
                                           ? (e.exit("chunkString"),
                                              e.exit("codeFencedFenceInfo"),
                                              u(i))
                                       : (0, eE.xz)(i)
                                           ? (e.exit("chunkString"),
                                              e.exit("codeFencedFenceInfo"),
                                              (0, eC.f)(e, s, "whitespace")(i))
                                       : 96 === i && i === r ? n(i)
                                                             : (e.consume(i), t)
                              }(l))
              }
              function s(t) {
                return null === t || (0, eE.Ch)(t)
                           ? u(t)
                           : (e.enter("codeFencedFenceMeta"),
                              e.enter("chunkString", {contentType : "string"}),
                              function t(i) {
                                return null === i || (0, eE.Ch)(i)
                                           ? (e.exit("chunkString"),
                                              e.exit("codeFencedFenceMeta"),
                                              u(i))
                                       : 96 === i && i === r ? n(i)
                                                             : (e.consume(i), t)
                              }(t))
              }
              function c(t) { return e.attempt(l, d, f)(t) }
              function f(t) {
                return e.enter("lineEnding"), e.consume(t),
                       e.exit("lineEnding"), p
              }
              function p(t) {
                return o > 0 && (0, eE.xz)(t)
                           ? (0, eC.f)(e, h, "linePrefix", o + 1)(t)
                           : h(t)
              }
              function h(t) {
                return null === t || (0, eE.Ch)(t)
                           ? e.check(e3, c, d)(t)
                           : (e.enter("codeFlowValue"), function t(n) {
                               return null === n || (0, eE.Ch)(n)
                                          ? (e.exit("codeFlowValue"), h(n))
                                          : (e.consume(n), t)
                             }(t))
              }
              function d(n) { return e.exit("codeFenced"), t(n) }
            },
            concrete : !0
          },
          e6 = document.createElement("i");
      function e9(e) {
        let t = "&" + e + ";";
        e6.innerHTML = t;
        let n = e6.textContent;
        return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t &&
               n
      }
      let e7 = {
        name : "characterReference",
        tokenize : function(e, t, n) {
          let r, i;
          let l = this, o = 0;
          return function(t) {
            return e.enter("characterReference"),
                   e.enter("characterReferenceMarker"), e.consume(t),
                   e.exit("characterReferenceMarker"), a
          };
          function a(t) {
            return 35 === t ? (e.enter("characterReferenceMarkerNumeric"),
                               e.consume(t),
                               e.exit("characterReferenceMarkerNumeric"), u)
                            : (e.enter("characterReferenceValue"), r = 31,
                               i = eE.H$, s(t))
          }
          function u(t) {
            return 88 === t || 120 === t
                       ? (e.enter("characterReferenceMarkerHexadecimal"),
                          e.consume(t),
                          e.exit("characterReferenceMarkerHexadecimal"),
                          e.enter("characterReferenceValue"), r = 6, i = eE.AF,
                          s)
                       : (e.enter("characterReferenceValue"), r = 7, i = eE.pY,
                          s(t))
          }
          function s(a) {
            if (59 === a && o) {
              let r = e.exit("characterReferenceValue");
              return i !== eE.H$ || e9(l.sliceSerialize(r))
                         ? (e.enter("characterReferenceMarker"), e.consume(a),
                            e.exit("characterReferenceMarker"),
                            e.exit("characterReference"), t)
                         : n(a)
            }
            return i(a) && o++ < r ? (e.consume(a), s) : n(a)
          }
        }
      },
          e8 = {
            name : "characterEscape",
            tokenize : function(e, t, n) {
              return function(t) {
                return e.enter("characterEscape"), e.enter("escapeMarker"),
                       e.consume(t), e.exit("escapeMarker"), r
              };
              function r(r) {
                return (0, eE.sR)(r)
                           ? (e.enter("characterEscapeValue"), e.consume(r),
                              e.exit("characterEscapeValue"),
                              e.exit("characterEscape"), t)
                           : n(r)
              }
            }
          },
          te = {
            name : "lineEnding",
            tokenize : function(e, t) {
              return function(n) {
                return e.enter("lineEnding"), e.consume(n),
                       e.exit("lineEnding"), (0, eC.f)(e, t, "linePrefix")
              }
            }
          },
          tt = {
            name : "labelEnd",
            tokenize : function(e, t, n) {
              let r, i;
              let l = this, o = l.events.length;
              for (; o--;)
                if (("labelImage" === l.events[o][1].type ||
                     "labelLink" === l.events[o][1].type) &&
                    !l.events[o][1]._balanced) {
                  r = l.events[o][1];
                  break
                }
              return function(t) {
                return r ? r._inactive
                               ? c(t)
                               : (i = l.parser.defined.includes(
                                      (0, eQ.d)(l.sliceSerialize(
                                          {start : r.end, end : l.now()}))),
                                  e.enter("labelEnd"), e.enter("labelMarker"),
                                  e.consume(t), e.exit("labelMarker"),
                                  e.exit("labelEnd"), a)
                         : n(t)
              };
              function a(t) {
                return 40 === t   ? e.attempt(tn, s, i ? s : c)(t)
                       : 91 === t ? e.attempt(tr, s, i ? u : c)(t)
                       : i        ? s(t)
                                  : c(t)
              }
              function u(t) { return e.attempt(ti, s, c)(t) }
              function s(e) { return t(e) }
              function c(e) { return r._balanced = !0, n(e) }
            },
            resolveTo : function(e, t) {
              let n, r, i, l, o = e.length, a = 0;
              for (; o--;)
                if (n = e[o][1], r) {
                  if ("link" === n.type ||
                      "labelLink" === n.type && n._inactive)
                    break;
                  "enter" === e[o][0] && "labelLink" === n.type &&
                      (n._inactive = !0)
                } else if (i) {
                  if ("enter" === e[o][0] &&
                      ("labelImage" === n.type || "labelLink" === n.type) &&
                      !n._balanced && (r = o, "labelLink" !== n.type)) {
                    a = 2;
                    break
                  }
                } else
                  "labelEnd" === n.type && (i = o);
              let u = {
                type : "labelLink" === e[r][1].type ? "link" : "image",
                start : Object.assign({}, e[r][1].start),
                end : Object.assign({}, e[e.length - 1][1].end)
              },
                  s = {
                    type : "label",
                    start : Object.assign({}, e[r][1].start),
                    end : Object.assign({}, e[i][1].end)
                  },
                  c = {
                    type : "labelText",
                    start : Object.assign({}, e[r + a + 2][1].end),
                    end : Object.assign({}, e[i - 2][1].start)
                  };
              return l = [ [ "enter", u, t ], [ "enter", s, t ] ],
                     l = (0, ev.V)(l, e.slice(r + 1, r + a + 3)),
                     l = (0, ev.V)(l, [ [ "enter", c, t ] ]),
                     l = (0, ev.V)(
                         l, (0, e_.C)(t.parser.constructs.insideSpan.null,
                                      e.slice(r + a + 4, i - 3), t)),
                     l = (0, ev.V)(l,
                                   [
                                     [ "exit", c, t ], e[i - 2], e[i - 1],
                                     [ "exit", s, t ]
                                   ]),
                     l = (0, ev.V)(l, e.slice(i + 1)),
                     l = (0, ev.V)(l, [ [ "exit", u, t ] ]),
                     (0, ev.d)(e, r, e.length, l), e
            },
            resolveAll : function(e) {
              let t = -1;
              for (; ++t < e.length;) {
                let n = e[t][1];
                ("labelImage" === n.type || "labelLink" === n.type ||
                 "labelEnd" === n.type) &&
                    (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                     n.type = "data", t++)
              }
              return e
            }
          },
          tn = {
            tokenize : function(e, t, n) {
              return function(t) {
                return e.enter("resource"), e.enter("resourceMarker"),
                       e.consume(t), e.exit("resourceMarker"), r
              };
              function r(t) { return (0, eE.z3)(t) ? eK(e, i)(t) : i(t) }
              function i(t) {
                return 41 === t ? s(t)
                                : e$(e, l, o, "resourceDestination",
                                     "resourceDestinationLiteral",
                                     "resourceDestinationLiteralMarker",
                                     "resourceDestinationRaw",
                                     "resourceDestinationString", 32)(t)
              }
              function l(t) { return (0, eE.z3)(t) ? eK(e, a)(t) : s(t) }
              function o(e) { return n(e) }
              function a(t) {
                return 34 === t || 39 === t || 40 === t
                           ? eW(e, u, n, "resourceTitle", "resourceTitleMarker",
                                "resourceTitleString")(t)
                           : s(t)
              }
              function u(t) { return (0, eE.z3)(t) ? eK(e, s)(t) : s(t) }
              function s(r) {
                return 41 === r
                           ? (e.enter("resourceMarker"), e.consume(r),
                              e.exit("resourceMarker"), e.exit("resource"), t)
                           : n(r)
              }
            }
          },
          tr = {
            tokenize : function(e, t, n) {
              let r = this;
              return function(t) {
                return eY.call(r, e, i, l, "reference", "referenceMarker",
                               "referenceString")(t)
              };
              function i(e) {
                return r.parser.defined.includes((0, eQ.d)(
                           r.sliceSerialize(r.events[r.events.length - 1][1])
                               .slice(1, -1)))
                           ? t(e)
                           : n(e)
              }
              function l(e) { return n(e) }
            }
          },
          ti = {
            tokenize : function(e, t, n) {
              return function(t) {
                return e.enter("reference"), e.enter("referenceMarker"),
                       e.consume(t), e.exit("referenceMarker"), r
              };
              function r(r) {
                return 93 === r
                           ? (e.enter("referenceMarker"), e.consume(r),
                              e.exit("referenceMarker"), e.exit("reference"), t)
                           : n(r)
              }
            }
          },
          tl = {
            name : "labelStartImage",
            tokenize : function(e, t, n) {
              let r = this;
              return function(t) {
                return e.enter("labelImage"), e.enter("labelImageMarker"),
                       e.consume(t), e.exit("labelImageMarker"), i
              };
              function i(t) {
                return 91 === t
                           ? (e.enter("labelMarker"), e.consume(t),
                              e.exit("labelMarker"), e.exit("labelImage"), l)
                           : n(t)
              }
              function l(e) {
                return 94 === e && "_hiddenFootnoteSupport" in
                                       r.parser.constructs
                           ? n(e)
                           : t(e)
              }
            },
            resolveAll : tt.resolveAll
          };
      var to = n(2987);
      let ta = {
        name : "attention",
        tokenize : function(e, t) {
          let n;
          let r = this.parser.constructs.attentionMarkers.null,
              i = this.previous, l = (0, to.r)(i);
          return function(o) {
            return n = o, e.enter("attentionSequence"), function o(a) {
              if (a === n)
                return e.consume(a), o;
              let u = e.exit("attentionSequence"), s = (0, to.r)(a),
                  c = !s || 2 === s && l || r.includes(a),
                  f = !l || 2 === l && s || r.includes(i);
              return u._open = !!(42 === n ? c : c && (l || !f)),
                     u._close = !!(42 === n ? f : f && (s || !c)), t(a)
            }(o)
          }
        },
        resolveAll : function(e, t) {
          let n, r, i, l, o, a, u, s, c = -1;
          for (; ++c < e.length;)
            if ("enter" === e[c][0] && "attentionSequence" === e[c][1].type &&
                e[c][1]._close) {
              for (n = c; n--;)
                if ("exit" === e[n][0] &&
                    "attentionSequence" === e[n][1].type && e[n][1]._open &&
                    t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                        t.sliceSerialize(e[c][1]).charCodeAt(0)) {
                  if ((e[n][1]._close || e[c][1]._open) &&
                      (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
                      !((e[n][1].end.offset - e[n][1].start.offset +
                         e[c][1].end.offset - e[c][1].start.offset) %
                        3))
                    continue;
                  a = e[n][1].end.offset - e[n][1].start.offset > 1 &&
                              e[c][1].end.offset - e[c][1].start.offset > 1
                          ? 2
                          : 1;
                  let f = Object.assign({}, e[n][1].end),
                      p = Object.assign({}, e[c][1].start);
                  tu(f, -a), tu(p, a),
                      l = {
                        type : a > 1 ? "strongSequence" : "emphasisSequence",
                        start : f,
                        end : Object.assign({}, e[n][1].end)
                      },
                      o = {
                        type : a > 1 ? "strongSequence" : "emphasisSequence",
                        start : Object.assign({}, e[c][1].start),
                        end : p
                      },
                      i = {
                        type : a > 1 ? "strongText" : "emphasisText",
                        start : Object.assign({}, e[n][1].end),
                        end : Object.assign({}, e[c][1].start)
                      },
                      r = {
                        type : a > 1 ? "strong" : "emphasis",
                        start : Object.assign({}, l.start),
                        end : Object.assign({}, o.end)
                      },
                      e[n][1].end = Object.assign({}, l.start),
                      e[c][1].start = Object.assign({}, o.end), u = [],
                      e[n][1].end.offset - e[n][1].start.offset &&
                          (u = (0, ev.V)(
                               u,
                               [
                                 [ "enter", e[n][1], t ], [ "exit", e[n][1], t ]
                               ])),
                      u = (0, ev.V)(u,
                                    [
                                      [ "enter", r, t ], [ "enter", l, t ],
                                      [ "exit", l, t ], [ "enter", i, t ]
                                    ]),
                      u = (0, ev.V)(
                          u, (0, e_.C)(t.parser.constructs.insideSpan.null,
                                       e.slice(n + 1, c), t)),
                      u = (0, ev.V)(u,
                                    [
                                      [ "exit", i, t ], [ "enter", o, t ],
                                      [ "exit", o, t ], [ "exit", r, t ]
                                    ]),
                      e[c][1].end.offset - e[c][1].start.offset
                          ? (s = 2, u = (0, ev.V)(u,
                                                  [
                                                    [ "enter", e[c][1], t ],
                                                    [ "exit", e[c][1], t ]
                                                  ]))
                          : s = 0,
                      (0, ev.d)(e, n - 1, c - n + 3, u),
                      c = n + u.length - s - 2;
                  break
                }
            }
          for (c = -1; ++c < e.length;)
            "attentionSequence" === e[c][1].type && (e[c][1].type = "data");
          return e
        }
      };
      function tu(e, t) { e.column += t, e.offset += t, e._bufferIndex += t }
      let ts = {
        name : "labelStartLink",
        tokenize : function(e, t, n) {
          let r = this;
          return function(t) {
            return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t),
                   e.exit("labelMarker"), e.exit("labelLink"), i
          };
          function i(e) {
            return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                       ? n(e)
                       : t(e)
          }
        },
        resolveAll : tt.resolveAll
      },
          tc = {
            42 : eB,
            43 : eB,
            45 : eB,
            48 : eB,
            49 : eB,
            50 : eB,
            51 : eB,
            52 : eB,
            53 : eB,
            54 : eB,
            55 : eB,
            56 : eB,
            57 : eB,
            62 : eq
          },
          tf = {
            91 : {
              name : "definition",
              tokenize : function(e, t, n) {
                let r;
                let i = this;
                return function(t) {
                  return e.enter("definition"),
                         eY.call(i, e, l, n, "definitionLabel",
                                 "definitionLabelMarker",
                                 "definitionLabelString")(t)
                };
                function l(t) {
                  return (r = (0, eQ.d)(
                              i.sliceSerialize(i.events[i.events.length - 1][1])
                                  .slice(1, -1)),
                          58 === t)
                             ? (e.enter("definitionMarker"), e.consume(t),
                                e.exit("definitionMarker"), o)
                             : n(t)
                }
                function o(t) { return (0, eE.z3)(t) ? eK(e, a)(t) : a(t) }
                function a(t) {
                  return e$(e, u, n, "definitionDestination",
                            "definitionDestinationLiteral",
                            "definitionDestinationLiteralMarker",
                            "definitionDestinationRaw",
                            "definitionDestinationString")(t)
                }
                function u(t) { return e.attempt(eX, s, s)(t) }
                function s(t) {
                  return (0, eE.xz)(t) ? (0, eC.f)(e, c, "whitespace")(t) : c(t)
                }
                function c(l) {
                  return null === l || (0, eE.Ch)(l)
                             ? (e.exit("definition"), i.parser.defined.push(r),
                                t(l))
                             : n(l)
                }
              }
            }
          },
          tp = {[-2] : eJ, [-1] : eJ, 32 : eJ}, th = {
            35 : {
              name : "headingAtx",
              tokenize : function(e, t, n) {
                let r = 0;
                return function(i) {
                  return e.enter("atxHeading"), e.enter("atxHeadingSequence"), function i(l) {
                    return 35 === l && r++ < 6 ? (e.consume(l), i)
                           : null === l || (0, eE.z3)(l)
                               ? (e.exit("atxHeadingSequence"),
                                  function n(r) {
                                    return 35 === r
                                               ? (e.enter("atxHeadingSequence"),
                                                  function t(r) {
                                                    return 35 === r
                                                               ? (e.consume(r),
                                                                  t)
                                                               : (e.exit(
                                                                      "atxHeadingSequence"),
                                                                  n(r))
                                                  }(r))
                                           : null === r || (0, eE.Ch)(r)
                                               ? (e.exit("atxHeading"), t(r))
                                           : (0, eE.xz)(r)
                                               ? (0, eC.f)(e, n,
                                                           "whitespace")(r)
                                               : (e.enter("atxHeadingText"),
                                                  function t(r) {
                                                    return null === r ||
                                                                   35 === r ||
                                                                   (0, eE.z3)(r)
                                                               ? (e.exit(
                                                                      "atxHeadingText"),
                                                                  n(r))
                                                               : (e.consume(r),
                                                                  t)
                                                  }(r))
                                  }(l))
                               : n(l)
                  }(i)
                }
              },
              resolve : function(e, t) {
                let n, r, i = e.length - 2, l = 3;
                return "whitespace" === e[3][1].type && (l += 2),
                       i - 2 > l && "whitespace" === e[i][1].type && (i -= 2),
                       "atxHeadingSequence" === e[i][1].type &&
                           (l === i - 1 ||
                            i - 4 > l && "whitespace" === e[i - 2][1].type) &&
                           (i -= l + 1 === i ? 2 : 4),
                       i > l &&
                           (n = {
                             type : "atxHeadingText",
                             start : e[l][1].start,
                             end : e[i][1].end
                           },
                            r = {
                              type : "chunkText",
                              start : e[l][1].start,
                              end : e[i][1].end,
                              contentType : "text"
                            },
                            (0, ev.d)(e, l, i - l + 1,
                                      [
                                        [ "enter", n, t ], [ "enter", r, t ],
                                        [ "exit", r, t ], [ "exit", n, t ]
                                      ])),
                       e
              }
            },
            42 : eH,
            45 : [ eG, eH ],
            60 : {
              name : "htmlFlow",
              tokenize : function(e, t, n) {
                let r, i, l, o, a;
                let u = this;
                return function(t) {
                  return e.enter("htmlFlow"), e.enter("htmlFlowData"),
                         e.consume(t), s
                };
                function s(o) {
                  return 33 === o   ? (e.consume(o), c)
                         : 47 === o ? (e.consume(o), i = !0, h)
                         : 63 === o ? (e.consume(o), r = 3, u.interrupt ? t : L)
                         : (0, eE.jv)(o)
                             ? (e.consume(o), l = String.fromCharCode(o), d)
                             : n(o)
                }
                function c(i) {
                  return 45 === i   ? (e.consume(i), r = 2, f)
                         : 91 === i ? (e.consume(i), r = 5, o = 0, p)
                         : (0, eE.jv)(i)
                             ? (e.consume(i), r = 4, u.interrupt ? t : L)
                             : n(i)
                }
                function f(r) {
                  return 45 === r ? (e.consume(r), u.interrupt ? t : L) : n(r)
                }
                function p(r) {
                  let i = "CDATA[";
                  return r === i.charCodeAt(o++)
                             ? (e.consume(r), o === i.length)
                                   ? u.interrupt ? t : C
                                   : p
                             : n(r)
                }
                function h(t) {
                  return (0, eE.jv)(t)
                             ? (e.consume(t), l = String.fromCharCode(t), d)
                             : n(t)
                }
                function d(o) {
                  if (null === o || 47 === o || 62 === o || (0, eE.z3)(o)) {
                    let a = 47 === o, s = l.toLowerCase();
                    return!a&&!i&&e1.includes(s)?(r=1,u.interrupt?t(o):C(o)):e0.includes(l.toLowerCase())?(r=6,a)?(e.consume(o),m):u.interrupt?t(o):C(o):(r=7,u.interrupt&&!u.parser.lazy[u.now().line]?n(o):i?function t(n){return(0,eE.xz)(n)?(e.consume(n),t):S(n)}(o):g(o))
                  }
                  return 45 === o || (0, eE.H$)(o)
                             ? (e.consume(o), l += String.fromCharCode(o), d)
                             : n(o)
                }
                function m(r) {
                  return 62 === r ? (e.consume(r), u.interrupt ? t : C) : n(r)
                }
                function g(t) {
                  return 47 === t ? (e.consume(t), S)
                         : 58 === t || 95 === t || (0, eE.jv)(t)
                             ? (e.consume(t), y)
                         : (0, eE.xz)(t) ? (e.consume(t), g)
                                         : S(t)
                }
                function y(t) {
                  return 45 === t || 46 === t || 58 === t || 95 === t ||
                                 (0, eE.H$)(t)
                             ? (e.consume(t), y)
                             : x(t)
                }
                function x(t) {
                  return 61 === t        ? (e.consume(t), v)
                         : (0, eE.xz)(t) ? (e.consume(t), x)
                                         : g(t)
                }
                function v(t) {
                  return null === t || 60 === t || 61 === t || 62 === t ||
                                 96 === t
                             ? n(t)
                         : 34 === t || 39 === t ? (e.consume(t), a = t, k)
                         : (0, eE.xz)(t)
                             ? (e.consume(t), v)
                             : function t(n) {
                                 return null === n || 34 === n || 39 === n ||
                                                47 === n || 60 === n ||
                                                61 === n || 62 === n ||
                                                96 === n || (0, eE.z3)(n)
                                            ? x(n)
                                            : (e.consume(n), t)
                               }(t)
                }
                function k(t) {
                  return t === a ? (e.consume(t), a = null, b)
                         : null === t || (0, eE.Ch)(t) ? n(t)
                                                       : (e.consume(t), k)
                }
                function b(e) {
                  return 47 === e || 62 === e || (0, eE.xz)(e) ? g(e) : n(e)
                }
                function S(t) { return 62 === t ? (e.consume(t), w) : n(t) }
                function w(t) {
                  return null === t || (0, eE.Ch)(t) ? C(t)
                         : (0, eE.xz)(t)             ? (e.consume(t), w)
                                                     : n(t)
                }
                function C(t) {
                  return 45 === t && 2 === r   ? (e.consume(t), P)
                         : 60 === t && 1 === r ? (e.consume(t), z)
                         : 62 === t && 4 === r ? (e.consume(t), D)
                         : 63 === t && 3 === r ? (e.consume(t), L)
                         : 93 === t && 5 === r ? (e.consume(t), A)
                         : (0, eE.Ch)(t) && (6 === r || 7 === r)
                             ? (e.exit("htmlFlowData"), e.check(e2, M, E)(t))
                         : null === t || (0, eE.Ch)(t)
                             ? (e.exit("htmlFlowData"), E(t))
                             : (e.consume(t), C)
                }
                function E(t) { return e.check(e4, I, M)(t) }
                function I(t) {
                  return e.enter("lineEnding"), e.consume(t),
                         e.exit("lineEnding"), T
                }
                function T(t) {
                  return null === t || (0, eE.Ch)(t)
                             ? E(t)
                             : (e.enter("htmlFlowData"), C(t))
                }
                function P(t) { return 45 === t ? (e.consume(t), L) : C(t) }
                function z(t) {
                  return 47 === t ? (e.consume(t), l = "", O) : C(t)
                }
                function O(t) {
                  if (62 === t) {
                    let n = l.toLowerCase();
                    return e1.includes(n) ? (e.consume(t), D) : C(t)
                  }
                  return (0, eE.jv)(t) && l.length < 8
                             ? (e.consume(t), l += String.fromCharCode(t), O)
                             : C(t)
                }
                function A(t) { return 93 === t ? (e.consume(t), L) : C(t) }
                function L(t) {
                  return 62 === t              ? (e.consume(t), D)
                         : 45 === t && 2 === r ? (e.consume(t), L)
                                               : C(t)
                }
                function D(t) {
                  return null === t || (0, eE.Ch)(t)
                             ? (e.exit("htmlFlowData"), M(t))
                             : (e.consume(t), D)
                }
                function M(n) { return e.exit("htmlFlow"), t(n) }
              },
              resolveTo : function(e) {
                let t = e.length;
                for (; t-- &&
                       ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);)
                  ;
                return t > 1 && "linePrefix" === e[t - 2][1].type &&
                           (e[t][1].start = e[t - 2][1].start,
                            e[t + 1][1].start = e[t - 2][1].start,
                            e.splice(t - 2, 2)),
                       e
              },
              concrete : !0
            },
            61 : eG,
            95 : eH,
            96 : e5,
            126 : e5
          },
          td = {38 : e7, 92 : e8}, tm = {
            [-5] : te,
            [-4] : te,
            [-3] : te,
            33 : tl,
            38 : e7,
            42 : ta,
            60 : [
              {
                name : "autolink",
                tokenize : function(e, t, n) {
                  let r = 0;
                  return function(t) {
                    return e.enter("autolink"), e.enter("autolinkMarker"),
                           e.consume(t), e.exit("autolinkMarker"),
                           e.enter("autolinkProtocol"), i
                  };
                  function i(t) {
                    return (0, eE.jv)(t) ? (e.consume(t), l)
                           : 64 === t    ? n(t)
                                         : a(t)
                  }
                  function l(t) {
                    return 43 === t || 45 === t || 46 === t || (0, eE.H$)(t)
                               ? (r = 1,
                                  function t(n) {
                                    return 58 === n ? (e.consume(n), r = 0, o)
                                           : (43 === n || 45 === n ||
                                              46 === n || (0, eE.H$)(n)) &&
                                                   r++ < 32
                                               ? (e.consume(n), t)
                                               : (r = 0, a(n))
                                  }(t))
                               : a(t)
                  }
                  function o(r) {
                    return 62 === r ? (e.exit("autolinkProtocol"),
                                       e.enter("autolinkMarker"), e.consume(r),
                                       e.exit("autolinkMarker"),
                                       e.exit("autolink"), t)
                           : null === r || 32 === r || 60 === r || (0, eE.Av)(r)
                               ? n(r)
                               : (e.consume(r), o)
                  }
                  function a(t) {
                    return 64 === t        ? (e.consume(t), u)
                           : (0, eE.n9)(t) ? (e.consume(t), a)
                                           : n(t)
                  }
                  function u(i) {
                    return (0, eE.H$)(i) ? function i(l) {
                      return 46 === l ? (e.consume(l), r = 0, u)
                             : 62 === l
                                 ? (e.exit("autolinkProtocol").type =
                                        "autolinkEmail",
                                    e.enter("autolinkMarker"), e.consume(l),
                                    e.exit("autolinkMarker"),
                                    e.exit("autolink"), t)
                                 : function t(l) {
                                     if ((45 === l || (0, eE.H$)(l)) &&
                                         r++ < 63) {
                                       let n = 45 === l ? t : i;
                                       return e.consume(l), n
                                     }
                                     return n(l)
                                   }(l)
                    }(i) : n(i)
                  }
                }
              },
              {
                name : "htmlText",
                tokenize : function(e, t, n) {
                  let r, i, l;
                  let o = this;
                  return function(t) {
                    return e.enter("htmlText"), e.enter("htmlTextData"),
                           e.consume(t), a
                  };
                  function a(t) {
                    return 33 === t        ? (e.consume(t), u)
                           : 47 === t      ? (e.consume(t), k)
                           : 63 === t      ? (e.consume(t), x)
                           : (0, eE.jv)(t) ? (e.consume(t), S)
                                           : n(t)
                  }
                  function u(t) {
                    return 45 === t        ? (e.consume(t), s)
                           : 91 === t      ? (e.consume(t), i = 0, h)
                           : (0, eE.jv)(t) ? (e.consume(t), y)
                                           : n(t)
                  }
                  function s(t) { return 45 === t ? (e.consume(t), p) : n(t) }
                  function c(t) {
                    return null === t      ? n(t)
                           : 45 === t      ? (e.consume(t), f)
                           : (0, eE.Ch)(t) ? (l = c, O(t))
                                           : (e.consume(t), c)
                  }
                  function f(t) { return 45 === t ? (e.consume(t), p) : c(t) }
                  function p(e) {
                    return 62 === e ? z(e) : 45 === e ? f(e) : c(e)
                  }
                  function h(t) {
                    let r = "CDATA[";
                    return t === r.charCodeAt(i++)
                               ? (e.consume(t), i === r.length ? d : h)
                               : n(t)
                  }
                  function d(t) {
                    return null === t      ? n(t)
                           : 93 === t      ? (e.consume(t), m)
                           : (0, eE.Ch)(t) ? (l = d, O(t))
                                           : (e.consume(t), d)
                  }
                  function m(t) { return 93 === t ? (e.consume(t), g) : d(t) }
                  function g(t) {
                    return 62 === t ? z(t) : 93 === t ? (e.consume(t), g) : d(t)
                  }
                  function y(t) {
                    return null === t || 62 === t ? z(t)
                           : (0, eE.Ch)(t)        ? (l = y, O(t))
                                                  : (e.consume(t), y)
                  }
                  function x(t) {
                    return null === t      ? n(t)
                           : 63 === t      ? (e.consume(t), v)
                           : (0, eE.Ch)(t) ? (l = x, O(t))
                                           : (e.consume(t), x)
                  }
                  function v(e) { return 62 === e ? z(e) : x(e) }
                  function k(t) {
                    return (0, eE.jv)(t) ? (e.consume(t), b) : n(t)
                  }
                  function b(t) {
                    return 45 === t || (0, eE.H$)(t)
                               ? (e.consume(t), b)
                               : function t(n) {
                                   return (0, eE.Ch)(n)   ? (l = t, O(n))
                                          : (0, eE.xz)(n) ? (e.consume(n), t)
                                                          : z(n)
                                 }(t)
                  }
                  function S(t) {
                    return 45 === t || (0, eE.H$)(t) ? (e.consume(t), S)
                           : 47 === t || 62 === t || (0, eE.z3)(t) ? w(t)
                                                                   : n(t)
                  }
                  function w(t) {
                    return 47 === t ? (e.consume(t), z)
                           : 58 === t || 95 === t || (0, eE.jv)(t)
                               ? (e.consume(t), C)
                           : (0, eE.Ch)(t) ? (l = w, O(t))
                           : (0, eE.xz)(t) ? (e.consume(t), w)
                                           : z(t)
                  }
                  function C(t) {
                    return 45 === t || 46 === t || 58 === t || 95 === t ||
                                   (0, eE.H$)(t)
                               ? (e.consume(t), C)
                               : function t(n) {
                                   return 61 === n        ? (e.consume(n), E)
                                          : (0, eE.Ch)(n) ? (l = t, O(n))
                                          : (0, eE.xz)(n) ? (e.consume(n), t)
                                                          : w(n)
                                 }(t)
                  }
                  function E(t) {
                    return null === t || 60 === t || 61 === t || 62 === t ||
                                   96 === t
                               ? n(t)
                           : 34 === t || 39 === t ? (e.consume(t), r = t, I)
                           : (0, eE.Ch)(t)        ? (l = E, O(t))
                           : (0, eE.xz)(t)        ? (e.consume(t), E)
                                                  : (e.consume(t), T)
                  }
                  function I(t) {
                    return t === r         ? (e.consume(t), r = void 0, P)
                           : null === t    ? n(t)
                           : (0, eE.Ch)(t) ? (l = I, O(t))
                                           : (e.consume(t), I)
                  }
                  function T(t) {
                    return null === t || 34 === t || 39 === t || 60 === t ||
                                   61 === t || 96 === t
                               ? n(t)
                           : 47 === t || 62 === t || (0, eE.z3)(t)
                               ? w(t)
                               : (e.consume(t), T)
                  }
                  function P(e) {
                    return 47 === e || 62 === e || (0, eE.z3)(e) ? w(e) : n(e)
                  }
                  function z(r) {
                    return 62 === r ? (e.consume(r), e.exit("htmlTextData"),
                                       e.exit("htmlText"), t)
                                    : n(r)
                  }
                  function O(t) {
                    return e.exit("htmlTextData"), e.enter("lineEnding"),
                           e.consume(t), e.exit("lineEnding"), A
                  }
                  function A(t) {
                    return (0, eE.xz)(t)
                               ? (0, eC.f)(
                                     e, L, "linePrefix",
                                     o.parser.constructs.disable.null.includes(
                                         "codeIndented")
                                         ? void 0
                                         : 4)(t)
                               : L(t)
                  }
                  function L(t) { return e.enter("htmlTextData"), l(t) }
                }
              }
            ],
            91 : ts,
            92 : [
              {
                name : "hardBreakEscape",
                tokenize : function(e, t, n) {
                  return function(
                      t) { return e.enter("hardBreakEscape"), e.consume(t), r };
                  function r(r) {
                    return (0, eE.Ch)(r) ? (e.exit("hardBreakEscape"), t(r))
                                         : n(r)
                  }
                }
              },
              e8
            ],
            93 : tt,
            95 : ta,
            96 : {
              name : "codeText",
              tokenize : function(e, t, n) {
                let r, i, l = 0;
                return function(t) {
                  return e.enter("codeText"), e.enter("codeTextSequence"),
                         function t(n) {
                           return 96 === n ? (e.consume(n), l++, t)
                                           : (e.exit("codeTextSequence"), o(n))
                         }(t)
                };
                function o(u) {
                  return null === u ? n(u)
                         : 32 === u ? (e.enter("space"), e.consume(u),
                                       e.exit("space"), o)
                         : 96 === u
                             ? (i = e.enter("codeTextSequence"), r = 0,
                                function n(o) {
                                  return 96 === o ? (e.consume(o), r++, n)
                                         : r === l
                                             ? (e.exit("codeTextSequence"),
                                                e.exit("codeText"), t(o))
                                             : (i.type = "codeTextData", a(o))
                                }(u))
                         : (0, eE.Ch)(u) ? (e.enter("lineEnding"), e.consume(u),
                                            e.exit("lineEnding"), o)
                                         : (e.enter("codeTextData"), a(u))
                }
                function a(t) {
                  return null === t || 32 === t || 96 === t || (0, eE.Ch)(t)
                             ? (e.exit("codeTextData"), o(t))
                             : (e.consume(t), a)
                }
              },
              resolve : function(e) {
                let t, n, r = e.length - 4, i = 3;
                if (("lineEnding" === e[3][1].type ||
                     "space" === e[i][1].type) &&
                    ("lineEnding" === e[r][1].type ||
                     "space" === e[r][1].type)) {
                  for (t = i; ++t < r;)
                    if ("codeTextData" === e[t][1].type) {
                      e[i][1].type = "codeTextPadding",
                      e[r][1].type = "codeTextPadding", i += 2, r -= 2;
                      break
                    }
                }
                for (t = i - 1, r++; ++t <= r;)
                  void 0 === n
                      ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                      : (t === r || "lineEnding" === e[t][1].type) &&
                            (e[n][1].type = "codeTextData",
                             t !== n + 2 && (e[n][1].end = e[t - 1][1].end,
                                             e.splice(n + 2, t - n - 2),
                                             r -= t - n - 2, t = n + 2),
                             n = void 0);
                return e
              },
              previous : function(e) {
                return 96 !== e ||
                       "characterEscape" ===
                           this.events[this.events.length - 1][1].type
              }
            }
          },
          tg = {null : [ ta, eD ]}, ty = {null : [ 42, 95 ]}, tx = {null : []},
          tv = /[\0\t\n\r]/g;
      function tk(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 ||
                       n > 55295 && n < 57344 || n > 64975 && n < 65008 ||
                       (65535 & n) == 65535 || (65535 & n) == 65534 ||
                       n > 1114111
                   ? "�"
                   : String.fromCodePoint(n)
      }
      let tb =
          /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function tS(e, t, n) {
        if (t)
          return t;
        if (35 === n.charCodeAt(0)) {
          let e = n.charCodeAt(1), t = 120 === e || 88 === e;
          return tk(n.slice(t ? 2 : 1), t ? 16 : 10)
        }
        return e9(n) || e
      }
      let tw = {}.hasOwnProperty;
      function tC(e) {
        return { line: e.line, column: e.column, offset: e.offset }
      }
      function tE(e, t) {
        if (e)
          throw Error("Cannot close `" + e.type + "` (" +
                      X({start : e.start, end : e.end}) +
                      "): a different token (`" + t.type + "`, " +
                      X({start : t.start, end : t.end}) + ") is open");
        throw Error("Cannot close document, a token (`" + t.type + "`, " +
                    X({start : t.start, end : t.end}) + ") is still open")
      }
      function tI(e) {
        let t = this;
        t.parser = function(n) {
          var r, l;
          let o, a, u, s;
          return "string" != typeof (r = {
                   ...t.data("settings"),
                   ...e,
                   extensions : t.data("micromarkExtensions") || [],
                   mdastExtensions : t.data("fromMarkdownExtensions") || []
                 }) &&
                     (l = r, r = void 0),
                 (function(e) {
                   let t = {
                     transforms : [],
                     canContainEols : [
                       "emphasis", "fragment", "heading", "paragraph", "strong"
                     ],
                     enter : {
                       autolink : r(y),
                       autolinkProtocol : s,
                       autolinkEmail : s,
                       atxHeading : r(d),
                       blockQuote : r(function() {
                         return { type: "blockquote", children: [] }
                       }),
                       characterEscape : s,
                       characterReference : s,
                       codeFenced : r(h),
                       codeFencedFenceInfo : i,
                       codeFencedFenceMeta : i,
                       codeIndented : r(h, i),
                       codeText : r(
                           function() {
                             return { type: "inlineCode", value: "" }
                           },
                           i),
                       codeTextData : s,
                       data : s,
                       codeFlowValue : s,
                       definition : r(function() {
                         return {
                           type: "definition", identifier: "", label: null,
                               title: null, url: ""
                         }
                       }),
                       definitionDestinationString : i,
                       definitionLabelString : i,
                       definitionTitleString : i,
                       emphasis : r(function() {
                         return { type: "emphasis", children: [] }
                       }),
                       hardBreakEscape : r(m),
                       hardBreakTrailing : r(m),
                       htmlFlow : r(g, i),
                       htmlFlowData : s,
                       htmlText : r(g, i),
                       htmlTextData : s,
                       image : r(function() {
                         return {
                           type: "image", title: null, url: "", alt: null
                         }
                       }),
                       label : i,
                       link : r(y),
                       listItem : r(function(e) {
                         return {
                           type: "listItem", spread: e._spread, checked: null,
                               children: []
                         }
                       }),
                       listItemValue : function(e) {
                         this.data.expectingFirstListItemValue &&
                             (this.stack[this.stack.length - 2].start =
                                  Number.parseInt(this.sliceSerialize(e), 10),
                              this.data.expectingFirstListItemValue = void 0)
                       },
                       listOrdered : r(x,
                                       function() {
                                         this.data.expectingFirstListItemValue =
                                             !0
                                       }),
                       listUnordered : r(x),
                       paragraph : r(function() {
                         return { type: "paragraph", children: [] }
                       }),
                       reference :
                           function() { this.data.referenceType = "collapsed" },
                       referenceString : i,
                       resourceDestinationString : i,
                       resourceTitleString : i,
                       setextHeading : r(d),
                       strong : r(function() {
                         return { type: "strong", children: [] }
                       }),
                       thematicBreak : r(function() {
                         return { type: "thematicBreak" }
                       })
                     },
                     exit : {
                       atxHeading : o(),
                       atxHeadingSequence : function(e) {
                         let t = this.stack[this.stack.length - 1];
                         if (!t.depth) {
                           let n = this.sliceSerialize(e).length;
                           t.depth = n
                         }
                       },
                       autolink : o(),
                       autolinkEmail : function(e) {
                         c.call(this, e),
                             this.stack[this.stack.length - 1].url =
                                 "mailto:" + this.sliceSerialize(e)
                       },
                       autolinkProtocol : function(e) {
                         c.call(this, e),
                             this.stack[this.stack.length - 1].url =
                                 this.sliceSerialize(e)
                       },
                       blockQuote : o(),
                       characterEscapeValue : c,
                       characterReferenceMarkerHexadecimal : p,
                       characterReferenceMarkerNumeric : p,
                       characterReferenceValue : function(e) {
                         let t;
                         let n = this.sliceSerialize(e),
                             r = this.data.characterReferenceType;
                         r ? (t = tk(n, "characterReferenceMarkerNumeric" === r
                                            ? 10
                                            : 16),
                              this.data.characterReferenceType = void 0)
                           : t = e9(n);
                         let i = this.stack[this.stack.length - 1];
                         i.value += t
                       },
                       characterReference : function(
                           e) { this.stack.pop().position.end = tC(e.end) },
                       codeFenced : o(function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1]
                             .value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
                           this.data.flowCodeInside = void 0
                       }),
                       codeFencedFence : function() {
                         this.data.flowCodeInside ||
                             (this.buffer(), this.data.flowCodeInside = !0)
                       },
                       codeFencedFenceInfo : function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1].lang = e
                       },
                       codeFencedFenceMeta : function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1].meta = e
                       },
                       codeFlowValue : c,
                       codeIndented : o(function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1].value =
                             e.replace(/(\r?\n|\r)$/g, "")
                       }),
                       codeText : o(function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1].value = e
                       }),
                       codeTextData : c,
                       data : c,
                       definition : o(),
                       definitionDestinationString : function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1].url = e
                       },
                       definitionLabelString : function(e) {
                         let t = this.resume(),
                             n = this.stack[this.stack.length - 1];
                         n.label = t,
                         n.identifier =
                             (0, eQ.d)(this.sliceSerialize(e)).toLowerCase()
                       },
                       definitionTitleString : function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1].title = e
                       },
                       emphasis : o(),
                       hardBreakEscape : o(f),
                       hardBreakTrailing : o(f),
                       htmlFlow : o(function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1].value = e
                       }),
                       htmlFlowData : c,
                       htmlText : o(function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1].value = e
                       }),
                       htmlTextData : c,
                       image : o(function() {
                         let e = this.stack[this.stack.length - 1];
                         if (this.data.inReference) {
                           let t = this.data.referenceType || "shortcut";
                           e.type += "Reference", e.referenceType = t,
                                                  delete e.url, delete e.title
                         } else
                           delete e.identifier, delete e.label;
                         this.data.referenceType = void 0
                       }),
                       label : function() {
                         let e = this.stack[this.stack.length - 1],
                             t = this.resume(),
                             n = this.stack[this.stack.length - 1];
                         if (this.data.inReference = !0, "link" === n.type) {
                           let t = e.children;
                           n.children = t
                         } else
                           n.alt = t
                       },
                       labelText : function(e) {
                         let t = this.sliceSerialize(e),
                             n = this.stack[this.stack.length - 2];
                         n.label = t.replace(tb, tS),
                         n.identifier = (0, eQ.d)(t).toLowerCase()
                       },
                       lineEnding : function(e) {
                         let n = this.stack[this.stack.length - 1];
                         if (this.data.atHardBreak) {
                           n.children[n.children.length - 1]
                               .position.end = tC(e.end),
                             this.data.atHardBreak = void 0;
                           return
                         }
                         !this.data.setextHeadingSlurpLineEnding &&
                             t.canContainEols.includes(n.type) &&
                             (s.call(this, e), c.call(this, e))
                       },
                       link : o(function() {
                         let e = this.stack[this.stack.length - 1];
                         if (this.data.inReference) {
                           let t = this.data.referenceType || "shortcut";
                           e.type += "Reference", e.referenceType = t,
                                                  delete e.url, delete e.title
                         } else
                           delete e.identifier, delete e.label;
                         this.data.referenceType = void 0
                       }),
                       listItem : o(),
                       listOrdered : o(),
                       listUnordered : o(),
                       paragraph : o(),
                       referenceString : function(e) {
                         let t = this.resume(),
                             n = this.stack[this.stack.length - 1];
                         n.label = t,
                         n.identifier =
                             (0, eQ.d)(this.sliceSerialize(e)).toLowerCase(),
                         this.data.referenceType = "full"
                       },
                       resourceDestinationString : function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1].url = e
                       },
                       resourceTitleString : function() {
                         let e = this.resume();
                         this.stack[this.stack.length - 1].title = e
                       },
                       resource : function() { this.data.inReference = void 0 },
                       setextHeading : o(function() {
                         this.data.setextHeadingSlurpLineEnding = void 0
                       }),
                       setextHeadingLineSequence : function(e) {
                         this.stack[this.stack.length - 1].depth =
                             61 === this.sliceSerialize(e).codePointAt(0) ? 1
                                                                          : 2
                       },
                       setextHeadingText : function() {
                         this.data.setextHeadingSlurpLineEnding = !0
                       },
                       strong : o(),
                       thematicBreak : o()
                     }
                   };
                   (function e(t, n) {
                     let r = -1;
                     for (; ++r < n.length;) {
                       let i = n[r];
                       Array.isArray(i) ? e(t, i) : function(e, t) {
                         let n;
                         for (n in t)
                           if (tw.call(t, n))
                             switch (n) {
                             case "canContainEols": {
                               let r = t[n];
                               r && e[n].push(...r);
                               break
                             }
                             case "transforms": {
                               let r = t[n];
                               r && e[n].push(...r);
                               break
                             }
                             case "enter":
                             case "exit": {
                               let r = t[n];
                               r && Object.assign(e[n], r)
                             }
                             }
                       }(t, i)
                     }
                   })(t, (e || {}).mdastExtensions || []);
                   let n = {};
                   return function(e) {
                     let r = {type : "root", children : []}, o = {
                       stack : [ r ],
                       tokenStack : [],
                       config : t,
                       enter : l,
                       exit : a,
                       buffer : i,
                       resume : u,
                       data : n
                     },
                         s = [], c = -1;
                     for (; ++c < e.length;)
                       ("listOrdered" === e[c][1].type ||
                        "listUnordered" === e[c][1].type) &&
                           ("enter" === e[c][0]
                                ? s.push(c)
                                : c = function(e, t, n) {
                                    let r, i, l, o, a = t - 1, u = -1, s = !1;
                                    for (; ++a <= n;) {
                                      let t = e[a];
                                      switch (t[1].type) {
                                      case "listUnordered":
                                      case "listOrdered":
                                      case "blockQuote":
                                        "enter" === t[0] ? u++ : u--,
                                            o = void 0;
                                        break;
                                      case "lineEndingBlank":
                                        "enter" === t[0] &&
                                            (!r || o || u || l || (l = a),
                                             o = void 0);
                                        break;
                                      case "linePrefix":
                                      case "listItemValue":
                                      case "listItemMarker":
                                      case "listItemPrefix":
                                      case "listItemPrefixWhitespace":
                                        break;
                                      default:
                                        o = void 0
                                      }
                                      if (!u && "enter" === t[0] &&
                                              "listItemPrefix" === t[1].type ||
                                          -1 === u && "exit" === t[0] &&
                                              ("listUnordered" === t[1].type ||
                                               "listOrdered" === t[1].type)) {
                                        if (r) {
                                          let o = a;
                                          for (i = void 0; o--;) {
                                            let t = e[o];
                                            if ("lineEnding" === t[1].type ||
                                                "lineEndingBlank" ===
                                                    t[1].type) {
                                              if ("exit" === t[0])
                                                continue;
                                              i && (e[i][1].type =
                                                        "lineEndingBlank",
                                                    s = !0),
                                                  t[1].type = "lineEnding",
                                                  i = o
                                            } else if (
                                                "linePrefix" === t[1].type ||
                                                "blockQuotePrefix" ===
                                                    t[1].type ||
                                                "blockQuotePrefixWhitespace" ===
                                                    t[1].type ||
                                                "blockQuoteMarker" ===
                                                    t[1].type ||
                                                "listItemIndent" === t[1].type)
                                              ;
                                            else
                                              break
                                          }
                                          l && (!i || l < i) &&
                                              (r._spread = !0),
                                              r.end = Object.assign(
                                                  {},
                                                  i ? e[i][1].start : t[1].end),
                                              e.splice(i || a, 0,
                                                       [ "exit", r, t[2] ]),
                                              a++, n++
                                        }
                                        if ("listItemPrefix" === t[1].type) {
                                          let i = {
                                            type : "listItem",
                                            _spread : !1,
                                            start :
                                                Object.assign({}, t[1].start),
                                            end : void 0
                                          };
                                          r = i,
                                          e.splice(a, 0, [ "enter", i, t[2] ]),
                                          a++, n++, l = void 0, o = !0
                                        }
                                      }
                                    }
                                    return e[t][1]._spread = s, n
                                  }(e, s.pop(), c));
                     for (c = -1; ++c < e.length;) {
                       let n = t[e[c][0]];
                       tw.call(n, e[c][1].type) &&
                           n[e[c][1].type].call(
                               Object.assign(
                                   {sliceSerialize : e[c][2].sliceSerialize},
                                   o),
                               e[c][1])
                     }
                     if (o.tokenStack.length > 0) {
                       let e = o.tokenStack[o.tokenStack.length - 1];
                       (e[1] || tE).call(o, void 0, e[0])
                     }
                     for (r.position = {
                            start :
                                tC(e.length > 0
                                       ? e[0][1].start
                                       : {line : 1, column : 1, offset : 0}),
                            end : tC(e.length > 0
                                         ? e[e.length - 2][1].end
                                         : {line : 1, column : 1, offset : 0})
                          },
                         c = -1;
                          ++c < t.transforms.length;)
                       r = t.transforms[c](r) || r;
                     return r
                   };
                   function r(e, t) {
                     return function(
                         n) { l.call(this, e(n), n), t && t.call(this, n) }
                   }
                   function i() {
                     this.stack.push({type : "fragment", children : []})
                   }
                   function l(e, t, n) {
                     this.stack[this.stack.length - 1].children.push(e),
                         this.stack.push(e), this.tokenStack.push([ t, n ]),
                         e.position = {
                           start : tC(t.start),
                           end : void 0
                         }
                   }
                   function o(e) {
                     return function(
                         t) { e && e.call(this, t), a.call(this, t) }
                   }
                   function a(e, t) {
                     let n = this.stack.pop(), r = this.tokenStack.pop();
                     if (r)
                       r[0].type !== e.type &&
                           (t ? t.call(this, e, r[0])
                              : (r[1] || tE).call(this, e, r[0]));
                     else
                       throw Error("Cannot close `" + e.type + "` (" +
                                   X({start : e.start, end : e.end}) +
                                   "): it’s not open");
                     n.position.end = tC(e.end)
                   }
                   function u() { return (0, ex.B)(this.stack.pop()) }
                   function s(e) {
                     let t = this.stack[this.stack.length - 1].children,
                         n = t[t.length - 1];
                     n && "text" === n.type ||
                         ((n = {type : "text", value : ""})
                              .position = {start : tC(e.start), end : void 0},
                          t.push(n)),
                         this.stack.push(n)
                   }
                   function c(e) {
                     let t = this.stack.pop();
                     t.value += this.sliceSerialize(e),
                         t.position.end = tC(e.end)
                   }
                   function f() { this.data.atHardBreak = !0 }
                   function p(e) { this.data.characterReferenceType = e.type }
                   function h() {
                     return { type: "code", lang: null, meta: null, value: "" }
                   }
                   function d() {
                     return { type: "heading", depth: 0, children: [] }
                   }
                   function m() {
                     return { type: "break" }
                   }
                   function g() {
                     return { type: "html", value: "" }
                   }
                   function y() {
                     return { type: "link", title: null, url: "", children: [] }
                   }
                   function x(e) {
                     return {
                       type: "list", ordered: "listOrdered" === e.type,
                           start: null, spread: e._spread, children: []
                     }
                   }
                 })(l)(function(e) {
                   for (; !eS(e);)
                     ;
                   return e
                 }((function(e) {
                     let t = {
                       defined : [],
                       lazy : {},
                       constructs :
                           (0, ew.W)([ i, ...(e || {}).extensions || [] ]),
                       content : n(eI),
                       document : n(eT),
                       flow : n(eL),
                       string : n(eM),
                       text : n(eF)
                     };
                     return t;
                     function n(e) {
                       return function(n) {
                         return function(e, t, n) {
                           let r = Object.assign(
                                   n ? Object.assign({}, n)
                                     : {line : 1, column : 1, offset : 0},
                                   {_index : 0, _bufferIndex : -1}),
                               i = {}, l = [], o = [], a = [], u = {
                                 consume : function(e) {
                                   (0, eE.Ch)(e)
                                       ? (r.line++, r.column = 1,
                                          r.offset += -3 === e ? 2 : 1, g())
                                       : -1 !== e && (r.column++, r.offset++),
                                       r._bufferIndex < 0
                                           ? r._index++
                                           : (r._bufferIndex++,
                                              r._bufferIndex ===
                                                      o[r._index].length &&
                                                  (r._bufferIndex = -1,
                                                   r._index++)),
                                       s.previous = e
                                 },
                                 enter : function(e, t) {
                                   let n = t || {};
                                   return n.type = e, n.start = p(),
                                          s.events.push([ "enter", n, s ]),
                                          a.push(n), n
                                 },
                                 exit : function(e) {
                                   let t = a.pop();
                                   return t.end = p(),
                                          s.events.push([ "exit", t, s ]), t
                                 },
                                 attempt : d(function(e, t) { m(e, t.from) }),
                                 check : d(h),
                                 interrupt : d(h, {interrupt : !0})
                               },
                               s = {
                                 previous : null,
                                 code : null,
                                 containerState : {},
                                 events : [],
                                 parser : e,
                                 sliceStream : f,
                                 sliceSerialize : function(e, t) {
                                   return function(e, t) {
                                     let n, r = -1, i = [];
                                     for (; ++r < e.length;) {
                                       let l;
                                       let o = e[r];
                                       if ("string" == typeof o)
                                         l = o;
                                       else
                                         switch (o) {
                                         case -5:
                                           l = "\r";
                                           break;
                                         case -4:
                                           l = "\n";
                                           break;
                                         case -3:
                                           l = "\r\n";
                                           break;
                                         case -2:
                                           l = t ? " " : "	";
                                           break;
                                         case -1:
                                           if (!t && n)
                                             continue;
                                           l = " ";
                                           break;
                                         default:
                                           l = String.fromCharCode(o)
                                         }
                                       n = -2 === o, i.push(l)
                                     }
                                     return i.join("")
                                   }(f(e), t)
                                 },
                                 now : p,
                                 defineSkip : function(
                                     e) { i[e.line] = e.column, g() },
                                 write : function(e) {
                                   return (o = (0, ev.V)(o, e),
                                           function() {
                                             let e;
                                             for (; r._index < o.length;) {
                                               let n = o[r._index];
                                               if ("string" == typeof n)
                                                 for (e = r._index,
                                                     r._bufferIndex < 0 &&
                                                          (r._bufferIndex = 0);
                                                      r._index === e &&
                                                      r._bufferIndex <
                                                          n.length;) {
                                                   var t;
                                                   t = n.charCodeAt(
                                                       r._bufferIndex),
                                                   c = c(t)
                                                 }
                                               else
                                                 c = c(n)
                                             }
                                           }(),
                                           null !== o[o.length - 1])
                                              ? []
                                              : (m(t, 0),
                                                 s.events =
                                                     (0, e_.C)(l, s.events, s),
                                                 s.events)
                                 }
                               },
                               c = t.tokenize.call(s, u);
                           return t.resolveAll && l.push(t), s;
                           function f(e) {
                             return function(e, t) {
                               let n;
                               let r = t.start._index, i = t.start._bufferIndex,
                                   l = t.end._index, o = t.end._bufferIndex;
                               if (r === l)
                                 n = [ e[r].slice(i, o) ];
                               else {
                                 if (n = e.slice(r, l), i > -1) {
                                   let e = n[0];
                                   "string" == typeof e ? n[0] = e.slice(i)
                                                        : n.shift()
                                 }
                                 o > 0 && n.push(e[l].slice(0, o))
                               }
                               return n
                             }(o, e)
                           }
                           function p() {
                             let {
                               line : e,
                               column : t,
                               offset : n,
                               _index : i,
                               _bufferIndex : l
                             } = r;
                             return {
                               line: e, column: t, offset: n, _index: i,
                                   _bufferIndex: l
                             }
                           }
                           function h(e, t) { t.restore() }
                           function d(e, t) {
                             return function(n, i, l) {
                               let o, c, f, h;
                               return Array.isArray(n) ? d(n)
                                      : "tokenize" in n
                                          ? d([ n ])
                                          : function(e) {
                                              let t = null !== e && n[e],
                                                  r = null !== e && n.null;
                                              return d([
                                                ...Array.isArray(t) ? t
                                                : t                 ? [ t ]
                                                                    : [],
                                                ...Array.isArray(r) ? r
                                                : r                 ? [ r ]
                                                                    : []
                                              ])(e)
                                            };
                               function d(e) {
                                 return (o = e, c = 0, 0 === e.length) ? l
                                                                       : m(e[c])
                               }
                               function m(e) {
                                 return function(n) {
                                   return (h =
                                               function() {
                                                 let e = p(), t = s.previous,
                                                     n = s.currentConstruct,
                                                     i = s.events.length,
                                                     l = Array.from(a);
                                                 return {
                                                   restore: function() {
                                                     r = e, s.previous = t,
                                                     s.currentConstruct = n,
                                                     s.events.length = i, a = l,
                                                     g()
                                                   }, from: i
                                                 }
                                               }(),
                                           f = e,
                                           e.partial ||
                                               (s.currentConstruct = e),
                                           e.name && s.parser.constructs.disable
                                                         .null.includes(e.name))
                                              ? x(n)
                                              : e.tokenize.call(
                                                    t ? Object.assign(
                                                            Object.create(s), t)
                                                      : s,
                                                    u, y, x)(n)
                                 }
                               }
                               function y(t) { return e(f, h), i }
                               function x(e) {
                                 return (h.restore(), ++c < o.length) ? m(o[c])
                                                                      : l
                               }
                             }
                           }
                           function m(e, t) {
                             e.resolveAll && !l.includes(e) && l.push(e),
                                 e.resolve &&
                                     (0, ev.d)(s.events, t, s.events.length - t,
                                               e.resolve(s.events.slice(t), s)),
                                 e.resolveTo &&
                                     (s.events = e.resolveTo(s.events, s))
                           }
                           function g() {
                             r.line in i && r.column < 2 &&
                                 (r.column = i[r.line],
                                  r.offset += i[r.line] - 1)
                           }
                         }(t, e, n)
                       }
                     }
                   })(l)
                       .document()
                       .write((a = 1, u = "", s = !0, function(e, t, n) {
                         let r, i, l, c, f;
                         let p = [];
                         for (e = u + ("string" == typeof e
                                           ? e.toString()
                                           : new TextDecoder(t || void 0)
                                                 .decode(e)),
                             l = 0, u = "",
                             s && (65279 === e.charCodeAt(0) && l++,
                                   s = void 0);
                              l < e.length;) {
                           if (tv.lastIndex = l,
                               c = (r = tv.exec(e)) && void 0 !== r.index
                                       ? r.index
                                       : e.length,
                               f = e.charCodeAt(c), !r) {
                             u = e.slice(l);
                             break
                           }
                           if (10 === f && l === c && o)
                             p.push(-3), o = void 0;
                           else
                             switch (o && (p.push(-5), o = void 0),
                                     l < c &&
                                         (p.push(e.slice(l, c)), a += c - l),
                                     f) {
                             case 0:
                               p.push(65533), a++;
                               break;
                             case 9:
                               for (i = 4 * Math.ceil(a / 4), p.push(-2);
                                    a++ < i;)
                                 p.push(-1);
                               break;
                             case 10:
                               p.push(-4), a = 1;
                               break;
                             default:
                               o = !0, a = 1
                             }
                           l = c + 1
                         }
                         return n && (o && p.push(-5), u && p.push(u),
                                      p.push(null)),
                                p
                       })(n, r, !0))))
        }
      }
      let tT = "object" == typeof self ? self : globalThis,
          tP =
              (e, t) => {
                let n = (t, n) => (e.set(n, t), t), r = i => {
                  if (e.has(i))
                    return e.get(i);
                  let [l, o] = t[i];
                  switch (l) {
                  case 0:
                  case -1:
                    return n(o, i);
                  case 1: {
                    let e = n([], i);
                    for (let t of o)
                      e.push(r(t));
                    return e
                  }
                  case 2: {
                    let e = n({}, i);
                    for (let [t, n] of o)
                      e[r(t)] = r(n);
                    return e
                  }
                  case 3:
                    return n(new Date(o), i);
                  case 4: {
                    let {source : e, flags : t} = o;
                    return n(new RegExp(e, t), i)
                  }
                  case 5: {
                    let e = n(new Map, i);
                    for (let [t, n] of o)
                      e.set(r(t), r(n));
                    return e
                  }
                  case 6: {
                    let e = n(new Set, i);
                    for (let t of o)
                      e.add(r(t));
                    return e
                  }
                  case 7: {
                    let {name : e, message : t} = o;
                    return n(new tT[e](t), i)
                  }
                  case 8:
                    return n(BigInt(o), i);
                  case "BigInt":
                    return n(Object(BigInt(o)), i)
                  }
                  return n(new tT[l](o), i)
                };
                return r
              },
          tz = e => tP(new Map, e)(0), {toString : tO} = {},
          {keys : tA} = Object,
          tL =
              e => {
                let t = typeof e;
                if ("object" !== t || !e)
                  return [ 0, t ];
                let n = tO.call(e).slice(8, -1);
                switch (n) {
                case "Array":
                  return [ 1, "" ];
                case "Object":
                  return [ 2, "" ];
                case "Date":
                  return [ 3, "" ];
                case "RegExp":
                  return [ 4, "" ];
                case "Map":
                  return [ 5, "" ];
                case "Set":
                  return [ 6, "" ]
                }
                return n.includes("Array")   ? [ 1, n ]
                       : n.includes("Error") ? [ 7, n ]
                                             : [ 2, n ]
              },
          tD = ([ e, t ]) => 0 === e && ("function" === t || "symbol" === t),
          tM = (e, t, n, r) => {
            let i = (e, t) => {
              let i = r.push(e) - 1;
              return n.set(t, i), i
            }, l = r => {
              if (n.has(r))
                return n.get(r);
              let [o, a] = tL(r);
              switch (o) {
              case 0: {
                let t = r;
                switch (a) {
                case "bigint":
                  o = 8, t = r.toString();
                  break;
                case "function":
                case "symbol":
                  if (e)
                    throw TypeError("unable to serialize " + a);
                  t = null;
                  break;
                case "undefined":
                  return i([ -1 ], r)
                }
                return i([ o, t ], r)
              }
              case 1: {
                if (a)
                  return i([ a, [...r ] ], r);
                let e = [], t = i([ o, e ], r);
                for (let t of r)
                  e.push(l(t));
                return t
              }
              case 2: {
                if (a)
                  switch (a) {
                  case "BigInt":
                    return i([ a, r.toString() ], r);
                  case "Boolean":
                  case "Number":
                  case "String":
                    return i([ a, r.valueOf() ], r)
                  }
                if (t && "toJSON" in r)
                  return l(r.toJSON());
                let n = [], u = i([ o, n ], r);
                for (let t of tA(r))
                  (e || !tD(tL(r[t]))) && n.push([ l(t), l(r[t]) ]);
                return u
              }
              case 3:
                return i([ o, r.toISOString() ], r);
              case 4: {
                let {source : e, flags : t} = r;
                return i([ o, {source : e, flags : t} ], r)
              }
              case 5: {
                let t = [], n = i([ o, t ], r);
                for (let [n, i] of r)
                  (e || !(tD(tL(n)) || tD(tL(i)))) && t.push([ l(n), l(i) ]);
                return n
              }
              case 6: {
                let t = [], n = i([ o, t ], r);
                for (let n of r)
                  (e || !tD(tL(n))) && t.push(l(n));
                return n
              }
              }
              let {message : u} = r;
              return i([ o, {name : a, message : u} ], r)
            };
            return l
          }, tF = (e, {json : t, lossy : n} = {}) => {
            let r = [];
            return tM(!(t || n), !!t, new Map, r)(e), r
          };
      var tN = "function" == typeof structuredClone
                   ? (e, t) => t && ("json" in t || "lossy" in t)
                                   ? tz(tF(e, t))
                                   : structuredClone(e)
                   : (e, t) => tz(tF(e, t));
      function tR(e) {
        let t = [], n = -1, r = 0, i = 0;
        for (; ++n < e.length;) {
          let l = e.charCodeAt(n), o = "";
          if (37 === l && (0, eE.H$)(e.charCodeAt(n + 1)) &&
              (0, eE.H$)(e.charCodeAt(n + 2)))
            i = 2;
          else if (l < 128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l))||(o=String.fromCharCode(l));
          else if (l > 55295 && l < 57344) {
            let t = e.charCodeAt(n + 1);
            l < 56320 && t > 56319 && t < 57344
                ? (o = String.fromCharCode(l, t), i = 1)
                : o = "�"
          } else
            o = String.fromCharCode(l);
          o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1,
                o = ""),
              i && (n += i, i = 0)
        }
        return t.join("") + e.slice(r)
      }
      function tj(e, t) {
        let n = [ {type : "text", value : "↩"} ];
        return t > 1 && n.push({
          type : "element",
          tagName : "sup",
          properties : {},
          children : [ {type : "text", value : String(t)} ]
        }),
               n
      }
      function t_(e, t) {
        return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "")
      }
      var tH = n(1623);
      function tB(e, t) {
        let n = t.referenceType, r = "]";
        if ("collapsed" === n
                ? r += "[]"
                : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
            "imageReference" === t.type)
          return [ {type : "text", value : "![" + t.alt + r} ];
        let i = e.all(t), l = i[0];
        l && "text" === l.type ? l.value = "[" + l.value
                               : i.unshift({type : "text", value : "["});
        let o = i[i.length - 1];
        return o && "text" === o.type ? o.value += r
                                      : i.push({type : "text", value : r}),
               i
      }
      function tU(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t
      }
      function tV(e, t, n) {
        let r = 0, i = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t;)
            r++, t = e.codePointAt(r)
        }
        if (n) {
          let t = e.codePointAt(i - 1);
          for (; 9 === t || 32 === t;)
            i--, t = e.codePointAt(i - 1)
        }
        return i > r ? e.slice(r, i) : ""
      }
      let tq = {
        blockquote : function(e, t) {
          let n = {
            type : "element",
            tagName : "blockquote",
            properties : {},
            children : e.wrap(e.all(t), !0)
          };
          return e.patch(t, n), e.applyData(t, n)
        },
        break : function(e, t) {
          let n = {
            type : "element",
            tagName : "br",
            properties : {},
            children : []
          };
          return e.patch(t, n),
                 [ e.applyData(t, n), {type : "text", value : "\n"} ]
        },
        code : function(e, t) {
          let n = t.value ? t.value + "\n" : "", r = {};
          t.lang && (r.className = [ "language-" + t.lang ]);
          let i = {
            type : "element",
            tagName : "code",
            properties : r,
            children : [ {type : "text", value : n} ]
          };
          return t.meta && (i.data = {meta : t.meta}), e.patch(t, i),
                 i = {
                   type : "element",
                   tagName : "pre",
                   properties : {},
                   children : [ i = e.applyData(t, i) ]
                 },
                 e.patch(t, i), i
        },
        delete : function(e, t) {
          let n = {
            type : "element",
            tagName : "del",
            properties : {},
            children : e.all(t)
          };
          return e.patch(t, n), e.applyData(t, n)
        },
        emphasis : function(e, t) {
          let n = {
            type : "element",
            tagName : "em",
            properties : {},
            children : e.all(t)
          };
          return e.patch(t, n), e.applyData(t, n)
        },
        footnoteReference : function(e, t) {
          let n;
          let r = "string" == typeof e.options.clobberPrefix
                      ? e.options.clobberPrefix
                      : "user-content-",
              i = String(t.identifier).toUpperCase(), l = tR(i.toLowerCase()),
              o = e.footnoteOrder.indexOf(i), a = e.footnoteCounts.get(i);
          void 0 === a
              ? (a = 0, e.footnoteOrder.push(i), n = e.footnoteOrder.length)
              : n = o + 1,
                a += 1, e.footnoteCounts.set(i, a);
          let u = {
            type : "element",
            tagName : "a",
            properties : {
              href : "#" + r + "fn-" + l,
              id : r + "fnref-" + l + (a > 1 ? "-" + a : ""),
              dataFootnoteRef : !0,
              ariaDescribedBy : [ "footnote-label" ]
            },
            children : [ {type : "text", value : String(n)} ]
          };
          e.patch(t, u);
          let s = {
            type : "element",
            tagName : "sup",
            properties : {},
            children : [ u ]
          };
          return e.patch(t, s), e.applyData(t, s)
        },
        heading : function(e, t) {
          let n = {
            type : "element",
            tagName : "h" + t.depth,
            properties : {},
            children : e.all(t)
          };
          return e.patch(t, n), e.applyData(t, n)
        },
        html : function(e, t) {
          if (e.options.allowDangerousHtml) {
            let n = {type : "raw", value : t.value};
            return e.patch(t, n), e.applyData(t, n)
          }
        },
        imageReference : function(e, t) {
          let n = String(t.identifier).toUpperCase(),
              r = e.definitionById.get(n);
          if (!r)
            return tB(e, t);
          let i = {src : tR(r.url || ""), alt : t.alt};
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let l = {
            type : "element",
            tagName : "img",
            properties : i,
            children : []
          };
          return e.patch(t, l), e.applyData(t, l)
        },
        image : function(e, t) {
          let n = {src : tR(t.url)};
          null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
              null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type : "element",
            tagName : "img",
            properties : n,
            children : []
          };
          return e.patch(t, r), e.applyData(t, r)
        },
        inlineCode : function(e, t) {
          let n = {type : "text", value : t.value.replace(/\r?\n|\r/g, " ")};
          e.patch(t, n);
          let r = {
            type : "element",
            tagName : "code",
            properties : {},
            children : [ n ]
          };
          return e.patch(t, r), e.applyData(t, r)
        },
        linkReference : function(e, t) {
          let n = String(t.identifier).toUpperCase(),
              r = e.definitionById.get(n);
          if (!r)
            return tB(e, t);
          let i = {href : tR(r.url || "")};
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let l = {
            type : "element",
            tagName : "a",
            properties : i,
            children : e.all(t)
          };
          return e.patch(t, l), e.applyData(t, l)
        },
        link : function(e, t) {
          let n = {href : tR(t.url)};
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type : "element",
            tagName : "a",
            properties : n,
            children : e.all(t)
          };
          return e.patch(t, r), e.applyData(t, r)
        },
        listItem : function(e, t, n) {
          let r = e.all(t), i = n ? function(e) {
            let t = !1;
            if ("list" === e.type) {
              t = e.spread || !1;
              let n = e.children, r = -1;
              for (; !t && ++r < n.length;)
                t = tU(n[r])
            }
            return t
          }(n) : tU(t), l = {}, o = [];
          if ("boolean" == typeof t.checked) {
            let e;
            let n = r[0];
            n && "element" === n.type && "p" === n.tagName
                ? e = n
                : (e = {
                    type : "element",
                    tagName : "p",
                    properties : {},
                    children : []
                  },
                   r.unshift(e)),
                  e.children.length > 0 &&
                      e.children.unshift({type : "text", value : " "}),
                  e.children.unshift({
                    type : "element",
                    tagName : "input",
                    properties :
                        {type : "checkbox", checked : t.checked, disabled : !0},
                    children : []
                  }),
                  l.className = [ "task-list-item" ]
          }
          let a = -1;
          for (; ++a < r.length;) {
            let e = r[a];
            (i || 0 !== a || "element" !== e.type || "p" !== e.tagName) &&
                o.push({type : "text", value : "\n"}),
                "element" !== e.type || "p" !== e.tagName || i
                    ? o.push(e)
                    : o.push(...e.children)
          }
          let u = r[r.length - 1];
          u && (i || "element" !== u.type || "p" !== u.tagName) &&
              o.push({type : "text", value : "\n"});
          let s =
              {type : "element", tagName : "li", properties : l, children : o};
          return e.patch(t, s), e.applyData(t, s)
        },
        list : function(e, t) {
          let n = {}, r = e.all(t), i = -1;
          for ("number" == typeof t.start && 1 !== t.start &&
                   (n.start = t.start);
               ++i < r.length;) {
            let e = r[i];
            if ("element" === e.type && "li" === e.tagName && e.properties &&
                Array.isArray(e.properties.className) &&
                e.properties.className.includes("task-list-item")) {
              n.className = [ "contains-task-list" ];
              break
            }
          }
          let l = {
            type : "element",
            tagName : t.ordered ? "ol" : "ul",
            properties : n,
            children : e.wrap(r, !0)
          };
          return e.patch(t, l), e.applyData(t, l)
        },
        paragraph : function(e, t) {
          let n = {
            type : "element",
            tagName : "p",
            properties : {},
            children : e.all(t)
          };
          return e.patch(t, n), e.applyData(t, n)
        },
        root : function(e, t) {
          let n = {type : "root", children : e.wrap(e.all(t))};
          return e.patch(t, n), e.applyData(t, n)
        },
        strong : function(e, t) {
          let n = {
            type : "element",
            tagName : "strong",
            properties : {},
            children : e.all(t)
          };
          return e.patch(t, n), e.applyData(t, n)
        },
        table : function(e, t) {
          let n = e.all(t), r = n.shift(), i = [];
          if (r) {
            let n = {
              type : "element",
              tagName : "thead",
              properties : {},
              children : e.wrap([ r ], !0)
            };
            e.patch(t.children[0], n), i.push(n)
          }
          if (n.length > 0) {
            let r = {
              type : "element",
              tagName : "tbody",
              properties : {},
              children : e.wrap(n, !0)
            },
                l = K(t.children[1]), o = W(t.children[t.children.length - 1]);
            l && o && (r.position = {start : l, end : o}), i.push(r)
          }
          let l = {
            type : "element",
            tagName : "table",
            properties : {},
            children : e.wrap(i, !0)
          };
          return e.patch(t, l), e.applyData(t, l)
        },
        tableCell : function(e, t) {
          let n = {
            type : "element",
            tagName : "td",
            properties : {},
            children : e.all(t)
          };
          return e.patch(t, n), e.applyData(t, n)
        },
        tableRow : function(e, t, n) {
          let r = n ? n.children : void 0,
              i = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
              l = n && "table" === n.type ? n.align : void 0,
              o = l ? l.length : t.children.length, a = -1, u = [];
          for (; ++a < o;) {
            let n = t.children[a], r = {}, o = l ? l[a] : void 0;
            o && (r.align = o);
            let s =
                {type : "element", tagName : i, properties : r, children : []};
            n && (s.children = e.all(n), e.patch(n, s), s = e.applyData(n, s)),
                u.push(s)
          }
          let s = {
            type : "element",
            tagName : "tr",
            properties : {},
            children : e.wrap(u, !0)
          };
          return e.patch(t, s), e.applyData(t, s)
        },
        text : function(e, t) {
          let n = {
            type : "text",
            value : function(e) {
              let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, l = [];
              for (; r;)
                l.push(tV(t.slice(i, r.index), i > 0, !0), r[0]),
                    i = r.index + r[0].length, r = n.exec(t);
              return l.push(tV(t.slice(i), i > 0, !1)), l.join("")
            }(String(t.value))
          };
          return e.patch(t, n), e.applyData(t, n)
        },
        thematicBreak : function(e, t) {
          let n = {
            type : "element",
            tagName : "hr",
            properties : {},
            children : []
          };
          return e.patch(t, n), e.applyData(t, n)
        },
        toml : t$,
        yaml : t$,
        definition : t$,
        footnoteDefinition : t$
      };
      function t$() {}
      let tY = {}.hasOwnProperty, tW = {};
      function tK(e, t) {
        e.position && (t.position = function(e) {
          let t = K(e), n = W(e);
          if (t && n)
            return { start: t, end: n }
        }(e))
      }
      function tQ(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
          "string" == typeof t && ("element" === n.type ? n.tagName = t : n = {
            type : "element",
            tagName : t,
            properties : {},
            children : "children" in n ? n.children : [ n ]
          }),
              "element" === n.type && i && Object.assign(n.properties, tN(i)),
              "children" in n && n.children && null != r && (n.children = r)
        }
        return n
      }
      function tX(e, t) {
        let n = [], r = -1;
        for (t && n.push({type : "text", value : "\n"}); ++r < e.length;)
          r && n.push({type : "text", value : "\n"}), n.push(e[r]);
        return t && e.length > 0 && n.push({type : "text", value : "\n"}), n
      }
      function tJ(e) {
        let t = 0, n = e.charCodeAt(t);
        for (; 9 === n || 32 === n;)
          t++, n = e.charCodeAt(t);
        return e.slice(t)
      }
      function tZ(e, t) {
        let n = function(e, t) {
          let n = t || tW, r = new Map, i = new Map, l = {
            all : function(e) {
              let t = [];
              if ("children" in e) {
                let n = e.children, r = -1;
                for (; ++r < n.length;) {
                  let i = l.one(n[r], e);
                  if (i) {
                    if (r && "break" === n[r - 1].type &&
                        (Array.isArray(i) || "text" !== i.type ||
                             (i.value = tJ(i.value)),
                         !Array.isArray(i) && "element" === i.type)) {
                      let e = i.children[0];
                      e && "text" === e.type && (e.value = tJ(e.value))
                    }
                    Array.isArray(i) ? t.push(...i) : t.push(i)
                  }
                }
              }
              return t
            },
            applyData : tQ,
            definitionById : r,
            footnoteById : i,
            footnoteCounts : new Map,
            footnoteOrder : [],
            handlers : {...tq, ...n.handlers},
            one : function(e, t) {
              let n = e.type, r = l.handlers[n];
              if (tY.call(l.handlers, n) && r)
                return r(l, e, t);
              if (l.options.passThrough && l.options.passThrough.includes(n)) {
                if ("children" in e) {
                  let {children : t, ...n} = e, r = tN(n);
                  return r.children = l.all(e), r
                }
                return tN(e)
              }
              return (l.options.unknownHandler || function(e, t) {
                let n = t.data || {},
                    r = "value" in t && !(tY.call(n, "hProperties") ||
                                          tY.call(n, "hChildren"))
                            ? {type : "text", value : t.value}
                            : {
                                type : "element",
                                tagName : "div",
                                properties : {},
                                children : e.all(t)
                              };
                return e.patch(t, r), e.applyData(t, r)
              })(l, e, t)
            },
            options : n,
            patch : tK,
            wrap : tX
          };
          return (0, tH.Vn)(e, function(e) {
                   if ("definition" === e.type ||
                       "footnoteDefinition" === e.type) {
                     let t = "definition" === e.type ? r : i,
                         n = String(e.identifier).toUpperCase();
                     t.has(n) || t.set(n, e)
                   }
                 }), l
        }(e, t), r = n.one(e, void 0), i = function(e) {
          let t = "string" == typeof e.options.clobberPrefix
                      ? e.options.clobberPrefix
                      : "user-content-",
              n = e.options.footnoteBackContent || tj,
              r = e.options.footnoteBackLabel || t_,
              i = e.options.footnoteLabel || "Footnotes",
              l = e.options.footnoteLabelTagName || "h2",
              o = e.options.footnoteLabelProperties ||
                  {className : [ "sr-only" ]},
              a = [], u = -1;
          for (; ++u < e.footnoteOrder.length;) {
            let i = e.footnoteById.get(e.footnoteOrder[u]);
            if (!i)
              continue;
            let l = e.all(i), o = String(i.identifier).toUpperCase(),
                s = tR(o.toLowerCase()), c = 0, f = [],
                p = e.footnoteCounts.get(o);
            for (; void 0 !== p && ++c <= p;) {
              f.length > 0 && f.push({type : "text", value : " "});
              let e = "string" == typeof n ? n : n(u, c);
              "string" == typeof e && (e = {type : "text", value : e}), f.push({
                type : "element",
                tagName : "a",
                properties : {
                  href : "#" + t + "fnref-" + s + (c > 1 ? "-" + c : ""),
                  dataFootnoteBackref : "",
                  ariaLabel : "string" == typeof r ? r : r(u, c),
                  className : [ "data-footnote-backref" ]
                },
                children : Array.isArray(e) ? e : [ e ]
              })
            }
            let h = l[l.length - 1];
            if (h && "element" === h.type && "p" === h.tagName) {
              let e = h.children[h.children.length - 1];
              e && "text" === e.type ? e.value += " "
                                     : h.children.push(
                                           {type : "text", value : " "}),
                  h.children.push(...f)
            } else
              l.push(...f);
            let d = {
              type : "element",
              tagName : "li",
              properties : {id : t + "fn-" + s},
              children : e.wrap(l, !0)
            };
            e.patch(i, d), a.push(d)
          }
          if (0 !== a.length)
            return {
              type: "element", tagName: "section",
                  properties: {dataFootnotes: !0, className : [ "footnotes" ]},
                  children: [
                    {
                      type : "element",
                      tagName : l,
                      properties : {...tN(o), id : "footnote-label"},
                      children : [ {type : "text", value : i} ]
                    },
                    {type : "text", value : "\n"}, {
                      type : "element",
                      tagName : "ol",
                      properties : {},
                      children : e.wrap(a, !0)
                    },
                    {type : "text", value : "\n"}
                  ]
            }
        }(n), o = Array.isArray(r) ? {type : "root", children : r} : r || {
          type : "root",
          children : []
        };
        return i && ((0, l.ok)("children" in o),
                     o.children.push({type : "text", value : "\n"}, i)),
               o
      }
      function tG(e, t) {
        return e && "run" in e ? async function(n, r) {
          let i = tZ(n, {file : r, ...t});
          await e.run(i, r)
        } : function(n, r) { return tZ(n, {file : r, ...t || e}) }
      }
      function t0(e) {
        if (e)
          throw e
      }
      var t1 = n(4470);
      function t2(e) {
        if ("object" != typeof e || null === e)
          return !1;
        let t = Object.getPrototypeOf(e);
        return (null === t || t === Object.prototype ||
                null === Object.getPrototypeOf(t)) &&
               !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
      }
      let t4 = {
        basename : function(e, t) {
          let n;
          if (void 0 !== t && "string" != typeof t)
            throw TypeError('"ext" argument must be a string');
          t3(e);
          let r = 0, i = -1, l = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; l--;)
              if (47 === e.codePointAt(l)) {
                if (n) {
                  r = l + 1;
                  break
                }
              } else
                i < 0 && (n = !0, i = l + 1);
            return i < 0 ? "" : e.slice(r, i)
          }
          if (t === e)
            return "";
          let o = -1, a = t.length - 1;
          for (; l--;)
            if (47 === e.codePointAt(l)) {
              if (n) {
                r = l + 1;
                break
              }
            } else
              o<0 && (n = !0, o = l + 1), a>- 1 &&
                  (e.codePointAt(l) === t.codePointAt(a--) ? a < 0 && (i = l)
                                                           : (a = -1, i = o));
          return r === i ? i = o : i < 0 && (i = e.length), e.slice(r, i)
        },
        dirname : function(e) {
          let t;
          if (t3(e), 0 === e.length)
            return ".";
          let n = -1, r = e.length;
          for (; --r;)
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break
              }
            } else
              t || (t = !0);
          return n < 0 ? 47 === e.codePointAt(0) ? "/" : "."
                 : 1 === n && 47 === e.codePointAt(0) ? "//"
                                                      : e.slice(0, n)
        },
        extname : function(e) {
          let t;
          t3(e);
          let n = e.length, r = -1, i = 0, l = -1, o = 0;
          for (; n--;) {
            let a = e.codePointAt(n);
            if (47 === a) {
              if (t) {
                i = n + 1;
                break
              }
              continue
            }
            r < 0 && (t = !0, r = n + 1),
                46 === a ? l<0 ? l = n : 1 !== o && (o = 1) : l>- 1 && (o = -1)
          }
          return l < 0 || r < 0 || 0 === o ||
                         1 === o && l === r - 1 && l === i + 1
                     ? ""
                     : e.slice(l, r)
        },
        join : function(...e) {
          let t, n = -1;
          for (; ++n < e.length;)
            t3(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
          return void 0 === t ? "." : function(e) {
            t3(e);
            let t = 47 === e.codePointAt(0), n = function(e, t) {
              let n, r, i = "", l = 0, o = -1, a = 0, u = -1;
              for (; ++u <= e.length;) {
                if (u < e.length)
                  n = e.codePointAt(u);
                else if (47 === n)
                  break;
                else
                  n = 47;
                if (47 === n) {
                  if (o === u - 1 || 1 === a)
                    ;
                  else if (o !== u - 1 && 2 === a) {
                    if (i.length < 2 || 2 !== l ||
                        46 !== i.codePointAt(i.length - 1) ||
                        46 !== i.codePointAt(i.length - 2)) {
                      if (i.length > 2) {
                        if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                          r < 0 ? (i = "", l = 0)
                                : l = (i = i.slice(0, r)).length - 1 -
                                      i.lastIndexOf("/"),
                                  o = u, a = 0;
                          continue
                        }
                      } else if (i.length > 0) {
                        i = "", l = 0, o = u, a = 0;
                        continue
                      }
                    }
                    t && (i = i.length > 0 ? i + "/.." : "..", l = 2)
                  } else
                    i.length > 0 ? i += "/" + e.slice(o + 1, u)
                                 : i = e.slice(o + 1, u),
                                   l = u - o - 1;
                  o = u, a = 0
                } else
                  46 === n && a > -1 ? a++ : a = -1
              }
              return i
            }(e, !t);
            return 0 !== n.length || t || (n = "."),
                   n.length > 0 && 47 === e.codePointAt(e.length - 1) &&
                       (n += "/"),
                   t ? "/" + n : n
          }(t)
        },
        sep : "/"
      };
      function t3(e) {
        if ("string" != typeof e)
          throw TypeError("Path must be a string. Received " +
                          JSON.stringify(e))
      }
      function t5(e) {
        return !!(null !== e && "object" == typeof e && "href" in e && e.href &&
                  "protocol" in e && e.protocol && void 0 === e.auth)
      }
      let t6 = [ "history", "path", "basename", "stem", "extname", "dirname" ];
      class t9 {
        constructor(e) {
          let t, n;
          t = e ? t5(e) ? {path : e}
                  : "string" == typeof e || e && "object" == typeof e &&
                                                "byteLength" in e &&
                                                "byteOffset" in e
                      ? {value : e}
                      : e
                : {},
          this.cwd = "/", this.data = {}, this.history = [], this.messages = [],
          this.value, this.map, this.result, this.stored;
          let r = -1;
          for (; ++r < t6.length;) {
            let e = t6[r];
            e in t && void 0 !== t[e] && null !== t[e] &&
                (this[e] = "history" === e ? [...t[e] ] : t[e])
          }
          for (n in t)
            t6.includes(n) || (this[n] = t[n])
        }
        get basename() {
          return "string" == typeof this.path ? t4.basename(this.path) : void 0
        }
        set basename(e) {
          t8(e, "basename"), t7(e, "basename"),
              this.path = t4.join(this.dirname || "", e)
        }
        get dirname() {
          return "string" == typeof this.path ? t4.dirname(this.path) : void 0
        }
        set dirname(e) {
          ne(this.basename, "dirname"),
              this.path = t4.join(e || "", this.basename)
        }
        get extname() {
          return "string" == typeof this.path ? t4.extname(this.path) : void 0
        }
        set extname(e) {
          if (t7(e, "extname"), ne(this.dirname, "extname"), e) {
            if (46 !== e.codePointAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots")
          }
          this.path = t4.join(this.dirname, this.stem + (e || ""))
        }
        get path() { return this.history[this.history.length - 1] }
        set path(e) {
          t5(e) && (e = function(e) {
            if ("string" == typeof e)
              e = new URL(e);
            else if (!t5(e)) {
              let t = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                  e + "`");
              throw t.code = "ERR_INVALID_ARG_TYPE", t
            }
            if ("file:" !== e.protocol) {
              let e = TypeError("The URL must be of scheme file");
              throw e.code = "ERR_INVALID_URL_SCHEME", e
            }
            return function(e) {
              if ("" !== e.hostname) {
                let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin');
                throw e.code = "ERR_INVALID_FILE_URL_HOST", e
              }
              let t = e.pathname, n = -1;
              for (; ++n < t.length;)
                if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                  let e = t.codePointAt(n + 2);
                  if (70 === e || 102 === e) {
                    let e = TypeError(
                        "File URL path must not include encoded / characters");
                    throw e.code = "ERR_INVALID_FILE_URL_PATH", e
                  }
                }
              return decodeURIComponent(t)
            }(e)
          }(e)), t8(e, "path"), this.path !== e && this.history.push(e)
        }
        get stem() {
          return "string" == typeof this.path
                     ? t4.basename(this.path, this.extname)
                     : void 0
        }
        set stem(e) {
          t8(e, "stem"), t7(e, "stem"),
              this.path = t4.join(this.dirname || "", e + (this.extname || ""))
        }
        fail(e, t, n) {
          let r = this.message(e, t, n);
          throw r.fatal = !0, r
        }
        info(e, t, n) {
          let r = this.message(e, t, n);
          return r.fatal = void 0, r
        }
        message(e, t, n) {
          let r = new ee(e, t, n);
          return this.path &&
                     (r.name = this.path + ":" + r.name, r.file = this.path),
                 r.fatal = !1, this.messages.push(r), r
        }
        toString(e) {
          return void 0 === this.value ? ""
                 : "string" == typeof this.value
                     ? this.value
                     : new TextDecoder(e || void 0).decode(this.value)
        }
      }
      function t7(e, t) {
        if (e && e.includes(t4.sep))
          throw Error("`" + t + "` cannot be a path: did not expect `" +
                      t4.sep + "`")
      }
      function t8(e, t) {
        if (!e)
          throw Error("`" + t + "` cannot be empty")
      }
      function ne(e, t) {
        if (!e)
          throw Error("Setting `" + t + "` requires `path` to be set too")
      }
      let nt = function(e) {
        let t = this.constructor.prototype, n = t[e],
            r = function() { return n.apply(r, arguments) };
        return Object.setPrototypeOf(r, t), r
      }, nn = {}.hasOwnProperty;
      class nr extends nt {
        constructor() {
          super("copy"),
              this.Compiler = void 0, this.Parser = void 0, this.attachers = [],
              this.compiler = void 0, this.freezeIndex = -1,
              this.frozen = void 0, this.namespace = {}, this.parser = void 0,
              this.transformers = function() {
                let e = [], t = {
                  run : function(...t) {
                    let n = -1, r = t.pop();
                    if ("function" != typeof r)
                      throw TypeError(
                          "Expected function as last argument, not " + r);
                    (function i(l, ...o) {
                      let a = e[++n], u = -1;
                      if (l) {
                        r(l);
                        return
                      }
                      for (; ++u < t.length;)
                        (null === o[u] || void 0 === o[u]) && (o[u] = t[u]);
                      t = o, a ? (function(e, t) {
                        let n;
                        return function(...t) {
                          let l;
                          let o = e.length > t.length;
                          o && t.push(r);
                          try {
                            l = e.apply(this, t)
                          } catch (e) {
                            if (o && n)
                              throw e;
                            return r(e)
                          }
                          o || (l && l.then && "function" == typeof l.then
                                    ? l.then(i, r)
                                : l instanceof Error ? r(l)
                                                     : i(l))
                        };
                        function r(e, ...i) { n || (n = !0, t(e, ...i)) }
                        function i(e) { r(null, e) }
                      })(a, i)(...o)
                               : r(null, ...o)
                    })(null, ...t)
                  },
                  use : function(n) {
                    if ("function" != typeof n)
                      throw TypeError(
                          "Expected `middelware` to be a function, not " + n);
                    return e.push(n), t
                  }
                };
                return t
              }()
        }
        copy() {
          let e = new nr, t = -1;
          for (; ++t < this.attachers.length;) {
            let n = this.attachers[t];
            e.use(...n)
          }
          return e.data(t1(!0, {}, this.namespace)), e
        }
        data(e, t) {
          return "string" == typeof e
                     ? 2 == arguments.length
                           ? (na("data", this.frozen), this.namespace[e] = t,
                              this)
                           : nn.call(this.namespace, e) && this.namespace[e] ||
                                 void 0
                 : e ? (na("data", this.frozen), this.namespace = e, this)
                     : this.namespace
        }
        freeze() {
          if (this.frozen)
            return this;
          for (; ++this.freezeIndex < this.attachers.length;) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0])
              continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            "function" == typeof n && this.transformers.use(n)
          }
          return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY,
                 this
        }
        parse(e) {
          this.freeze();
          let t = nc(e), n = this.parser || this.Parser;
          return nl("parse", n), n(String(t), t)
        }
        process(e, t) {
          let n = this;
          return this.freeze(), nl("process", this.parser || this.Parser),
                 no("process", this.compiler || this.Compiler),
                 t ? r(void 0, t) : new Promise(r);
          function r(r, i) {
            let o = nc(e), a = n.parse(o);
            function u(e, n) {
              e || !n ? i(e)
              : r     ? r(n)
                      : ((0, l.ok)(t, "`done` is defined if `resolve` is not"),
                     t(void 0, n))
            }
            n.run(a, o, function(e, t, r) {
              if (e || !t || !r)
                return u(e);
              let i = n.stringify(t, r);
              "string" == typeof i ||
                      i && "object" == typeof i && "byteLength" in
                                           i && "byteOffset" in i
                  ? r.value = i
                  : r.result = i,
                    u(e, r)
            })
          }
        }
        processSync(e) {
          let t, n = !1;
          return this.freeze(), nl("processSync", this.parser || this.Parser),
                 no("processSync", this.compiler || this.Compiler),
                 this.process(e, function(e, r) { n = !0, t0(e), t = r }),
                 ns("processSync", "process", n),
                 (0, l.ok)(t, "we either bailed on an error or have a tree"), t
        }
        run(e, t, n) {
          nu(e), this.freeze();
          let r = this.transformers;
          return n || "function" != typeof t || (n = t, t = void 0),
                 n ? i(void 0, n) : new Promise(i);
          function i(i, o) {
            (0, l.ok)("function" != typeof t,
                      "`file` can’t be a `done` anymore, we checked");
            let a = nc(t);
            r.run(e, a, function(t, r, a) {
              let u = r || e;
              t   ? o(t)
              : i ? i(u)
                  : ((0, l.ok)(n, "`done` is defined if `resolve` is not"),
                     n(void 0, u, a))
            })
          }
        }
        runSync(e, t) {
          let n, r = !1;
          return this.run(e, t, function(e, t) { t0(e), n = t, r = !0 }),
                 ns("runSync", "run", r),
                 (0, l.ok)(n, "we either bailed on an error or have a tree"), n
        }
        stringify(e, t) {
          this.freeze();
          let n = nc(t), r = this.compiler || this.Compiler;
          return no("stringify", r), nu(e), r(e, n)
        }
        use(e, ...t) {
          let n = this.attachers, r = this.namespace;
          if (na("use", this.frozen), null == e)
            ;
          else if ("function" == typeof e)
            o(e, t);
          else if ("object" == typeof e)
            Array.isArray(e) ? l(e) : i(e);
          else
            throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function i(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                  "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            l(e.plugins),
                e.settings && (r.settings = t1(!0, r.settings, e.settings))
          }
          function l(e) {
            let t = -1;
            if (null == e)
              ;
            else if (Array.isArray(e))
              for (; ++t < e.length;)
                !function(e) {
                  if ("function" == typeof e)
                    o(e, []);
                  else if ("object" == typeof e) {
                    if (Array.isArray(e)) {
                      let [t, ...n] = e;
                      o(t, n)
                    } else
                      i(e)
                  } else
                    throw TypeError("Expected usable value, not `" + e + "`")
                }(e[t]);
            else
              throw TypeError("Expected a list of plugins, not `" + e + "`")
          }
          function o(e, t) {
            let r = -1, i = -1;
            for (; ++r < n.length;)
              if (n[r][0] === e) {
                i = r;
                break
              }
            if (-1 === i)
              n.push([ e, ...t ]);
            else if (t.length > 0) {
              let [r, ...l] = t, o = n[i][1];
              t2(o) && t2(r) && (r = t1(!0, o, r)), n[i] = [ e, r, ...l ]
            }
          }
        }
      }
      let ni = new nr().freeze();
      function nl(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `parser`")
      }
      function no(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `compiler`")
      }
      function na(e, t) {
        if (t)
          throw Error(
              "Cannot call `" + e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
      }
      function nu(e) {
        if (!t2(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`")
      }
      function ns(e, t, n) {
        if (!n)
          throw Error("`" + e + "` finished async. Use `" + t + "` instead")
      }
      function nc(e) {
        return e && "object" == typeof e && "message" in e && "messages" in e
                   ? e
                   : new t9(e)
      }
      let nf = [], np = {allowDangerousHtml : !0},
          nh = /^(https?|ircs?|mailto|xmpp)$/i, nd = [
            {from : "astPlugins", id : "remove-buggy-html-in-markdown-parser"},
            {
              from : "allowDangerousHtml",
              id : "remove-buggy-html-in-markdown-parser"
            },
            {
              from : "allowNode",
              id : "replace-allownode-allowedtypes-and-disallowedtypes",
              to : "allowElement"
            },
            {
              from : "allowedTypes",
              id : "replace-allownode-allowedtypes-and-disallowedtypes",
              to : "allowedElements"
            },
            {
              from : "disallowedTypes",
              id : "replace-allownode-allowedtypes-and-disallowedtypes",
              to : "disallowedElements"
            },
            {from : "escapeHtml", id : "remove-buggy-html-in-markdown-parser"},
            {from : "includeElementIndex", id : "#remove-includeelementindex"},
            {
              from : "includeNodeIndex",
              id : "change-includenodeindex-to-includeelementindex"
            },
            {from : "linkTarget", id : "remove-linktarget"}, {
              from : "plugins",
              id : "change-plugins-to-remarkplugins",
              to : "remarkPlugins"
            },
            {from : "rawSourcePos", id : "#remove-rawsourcepos"}, {
              from : "renderers",
              id : "change-renderers-to-components",
              to : "components"
            },
            {
              from : "source",
              id : "change-source-to-children",
              to : "children"
            },
            {from : "sourcePos", id : "#remove-sourcepos"}, {
              from : "transformImageUri",
              id : "#add-urltransform",
              to : "urlTransform"
            },
            {
              from : "transformLinkUri",
              id : "#add-urltransform",
              to : "urlTransform"
            }
          ];
      function nm(e) {
        let t = e.allowedElements, n = e.allowElement, r = e.children || "",
            i = e.className, o = e.components, a = e.disallowedElements,
            u = e.rehypePlugins || nf, s = e.remarkPlugins || nf,
            c = e.remarkRehypeOptions ? {...e.remarkRehypeOptions, ...np} : np,
            f = e.skipHtml, p = e.unwrapDisallowed, h = e.urlTransform || ng,
            d = ni().use(tI).use(s).use(tG, c).use(u), m = new t9;
        for (
            let n of (
                "string" == typeof r
                    ? m.value = r
                    : (0, l.t1)("Unexpected value `" + r +
                                "` for `children` prop, expected `string`"),
                      t && a &&
                          (0, l.t1)(
                              "Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other"),
                      nd))
          Object.hasOwn(e, n.from) &&
              (0, l.t1)(
                  "Unexpected `" + n.from + "` prop, " +
                  (n.to ? "use `" + n.to + "` instead" : "remove it") +
                  " (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#" +
                  n.id + "> for more info)");
        let g = d.parse(m), y = d.runSync(g, m);
        return i && (y = {
                 type : "element",
                 tagName : "div",
                 properties : {className : i},
                 children : "root" === y.type ? y.children : [ y ]
               }),
               (0, tH.Vn)(y, function(e, r, i) {
                 if ("raw" === e.type && i && "number" == typeof r)
                   return f ? i.children.splice(r, 1)
                            : i.children[r] = {type : "text", value : e.value},
                              r;
                 if ("element" === e.type) {
                   let t;
                   for (t in eg)
                     if (Object.hasOwn(eg, t) &&
                         Object.hasOwn(e.properties, t)) {
                       let n = e.properties[t], r = eg[t];
                       (null === r || r.includes(e.tagName)) &&
                           (e.properties[t] = h(String(n || ""), t, e))
                     }
                 }
                 if ("element" === e.type) {
                   let l = t ? !t.includes(e.tagName)
                             : !!a && a.includes(e.tagName);
                   if (!l && n && "number" == typeof r && (l = !n(e, r, i)),
                       l && i && "number" == typeof r)
                     return p && e.children
                                ? i.children.splice(r, 1, ...e.children)
                                : i.children.splice(r, 1),
                            r
                 }
               }), function(e, t) {
                 var n, r, i;
                 let l;
                 if (!t || void 0 === t.Fragment)
                   throw TypeError("Expected `Fragment` in options");
                 let o = t.filePath || void 0;
                 if (t.development) {
                   if ("function" != typeof t.jsxDEV)
                     throw TypeError(
                         "Expected `jsxDEV` in options when `development: true`");
                   n = t.jsxDEV, l = function(e, t, r, i) {
                     let l = Array.isArray(r.children), a = K(e);
                     return n(t, r, i, l, {
                       columnNumber : a ? a.column - 1 : void 0,
                       fileName : o,
                       lineNumber : a ? a.line : void 0
                     },
                              void 0)
                   }
                 } else {
                   if ("function" != typeof t.jsx)
                     throw TypeError("Expected `jsx` in production options");
                   if ("function" != typeof t.jsxs)
                     throw TypeError("Expected `jsxs` in production options");
                   r = t.jsx, i = t.jsxs, l = function(e, t, n, l) {
                     let o = Array.isArray(n.children) ? i : r;
                     return l ? o(t, n, l) : o(t, n)
                   }
                 }
                 let a = {
                   Fragment : t.Fragment,
                   ancestors : [],
                   components : t.components || {},
                   create : l,
                   elementAttributeNameCase :
                       t.elementAttributeNameCase || "react",
                   evaluater : t.createEvaluater ? t.createEvaluater() : void 0,
                   filePath : o,
                   ignoreInvalidStyle : t.ignoreInvalidStyle || !1,
                   passKeys : !1 !== t.passKeys,
                   passNode : t.passNode || !1,
                   schema : "svg" === t.space ? j : R,
                   stylePropertyNameCase : t.stylePropertyNameCase || "dom",
                   tableCellAlignToStyle : !1 !== t.tableCellAlignToStyle
                 },
                     u = eu(a, e, void 0);
                 return u && "string" != typeof u
                            ? u
                            : a.create(e, a.Fragment, {children : u || void 0},
                                       void 0)
               }(y, {
                 Fragment : ey.Fragment,
                 components : o,
                 ignoreInvalidStyle : !0,
                 jsx : ey.jsx,
                 jsxs : ey.jsxs,
                 passKeys : !0,
                 passNode : !0
               })
      }
      function ng(e) {
        let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"),
            i = e.indexOf("/");
        return t < 0 || i > -1 && t > i || n > -1 && t > n || r > -1 && t > r ||
                       nh.test(e.slice(0, t))
                   ? e
                   : ""
      }
    }
  }
]);