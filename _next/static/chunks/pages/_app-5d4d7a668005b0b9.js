(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [ 888 ], {
    1118 : function(e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app", function() { return r(5575) }
      ])
    },
    6691 : function(e, t) {
      "use strict";
      var r, n, o, i;
      Object.defineProperty(t, "__esModule", {value : !0}), function(e, t) {
        for (var r in t)
          Object.defineProperty(e, r, {enumerable : !0, get : t[r]})
      }(t, {
        ACTION_FAST_REFRESH : function() { return f },
        ACTION_NAVIGATE : function() { return s },
        ACTION_PREFETCH : function() { return c },
        ACTION_REFRESH : function() { return l },
        ACTION_RESTORE : function() { return a },
        ACTION_SERVER_ACTION : function() { return d },
        ACTION_SERVER_PATCH : function() { return u },
        PrefetchCacheEntryStatus : function() { return n },
        PrefetchKind : function() { return r },
        isThenable : function() { return p }
      });
      let l = "refresh", s = "navigate", a = "restore", u = "server-patch",
          c = "prefetch", f = "fast-refresh", d = "server-action";
      function p(e) {
        return e && ("object" == typeof e || "function" == typeof e) &&
               "function" == typeof e.then
      }
      (o = r || (r = {})).AUTO = "auto", o.FULL = "full",
                     o.TEMPORARY = "temporary",
                     (i = n || (n = {})).fresh = "fresh",
                     i.reusable = "reusable", i.expired = "expired",
                     i.stale = "stale",
                     ("function" == typeof t.default ||
                      "object" == typeof t.default && null !== t.default) &&
                         void 0 === t.default.__esModule &&
                         (Object.defineProperty(t.default, "__esModule",
                                                {value : !0}),
                          Object.assign(t.default, t), e.exports = t.default)
    },
    4318 : function(e, t, r) {
      "use strict";
      function n(e, t, r, n) { return !1 }
      Object.defineProperty(t, "__esModule", {value : !0}),
          Object.defineProperty(
              t, "getDomainLocale",
              {enumerable : !0, get : function() { return n }}),
          r(8364),
          ("function" == typeof t.default ||
           "object" == typeof t.default && null !== t.default) &&
              void 0 === t.default.__esModule &&
              (Object.defineProperty(t.default, "__esModule", {value : !0}),
               Object.assign(t.default, t), e.exports = t.default)
    },
    6541 : function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {value : !0}),
          Object.defineProperty(
              t, "Image", {enumerable : !0, get : function() { return y }});
      let n = r(8754), o = r(1757), i = r(5893), l = o._(r(7294)),
          s = n._(r(3935)), a = n._(r(7828)), u = r(7367), c = r(7903),
          f = r(4938);
      r(1997);
      let d = r(9953), p = n._(r(6663)), h = {
        deviceSizes : [ 640, 750, 828, 1080, 1200, 1920, 2048, 3840 ],
        imageSizes : [ 16, 32, 48, 64, 96, 128, 256, 384 ],
        path : "/_next/image/",
        loader : "default",
        dangerouslyAllowSVG : !1,
        unoptimized : !0
      };
      function m(e, t, r, n, o, i, l) {
        let s = null == e ? void 0 : e.src;
        e && e["data-loaded-src"] !== s &&
            (e["data-loaded-src"] = s,
             ("decode" in e ? e.decode() : Promise.resolve())
                 .catch(() => {})
                 .then(() => {
                   if (e.parentElement && e.isConnected) {
                     if ("empty" !== t && o(!0),
                         null == r ? void 0 : r.current) {
                       let t = new Event("load");
                       Object.defineProperty(t, "target",
                                             {writable : !1, value : e});
                       let n = !1, o = !1;
                       r.current({
                         ...t,
                         nativeEvent : t,
                         currentTarget : e,
                         target : e,
                         isDefaultPrevented : () => n,
                         isPropagationStopped : () => o,
                         persist : () => {},
                         preventDefault : () => {n = !0, t.preventDefault()},
                         stopPropagation : () => { o = !0, t.stopPropagation() }
                       })
                     }
                     (null == n ? void 0 : n.current) && n.current(e)
                   }
                 }))
      }
      function g(e) { return l.use ? {fetchPriority : e} : {fetchpriority : e} }
      let b = (0, l.forwardRef)((e, t) => {
        let {
          src : r,
          srcSet : n,
          sizes : o,
          height : s,
          width : a,
          decoding : u,
          className : c,
          style : f,
          fetchPriority : d,
          placeholder : p,
          loading : h,
          unoptimized : b,
          fill : v,
          onLoadRef : y,
          onLoadingCompleteRef : x,
          setBlurComplete : w,
          setShowAltText : j,
          sizesInput : _,
          onLoad : C,
          onError : S,
          ...P
        } = e;
        return (0, i.jsx)("img", {
          ...P,
          ...g(d),
          loading : h,
          width : a,
          height : s,
          decoding : u,
          "data-nimg" : v ? "fill" : "1",
          className : c,
          style : f,
          sizes : o,
          srcSet : n,
          src : r,
          ref : (0, l.useCallback)(e => {
            t && ("function" == typeof t
                      ? t(e)
                      : "object" == typeof t && (t.current = e)),
            e && (S && (e.src = e.src), e.complete && m(e, p, y, x, w, b, _))
          },
                                   [ r, p, y, x, w, S, b, _, t ]),
          onLoad : e => {m(e.currentTarget, p, y, x, w, b, _)},
          onError : e => { j(!0), "empty" !== p && w(!0), S && S(e) }
        })
      });
      function v(e) {
        let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};
        return t && s.default.preload
                   ? (s.default.preload(r.src, n), null)
                   : (0, i.jsx)(a.default, {
                       children :
                           (0, i.jsx)("link", {
                             rel : "preload",
                             href : r.srcSet ? void 0 : r.src,
                             ...n
                           },
                                      "__nimg-" + r.src + r.srcSet + r.sizes)
                     })
      }
      let y = (0, l.forwardRef)((e, t) => {
        let r = (0, l.useContext)(d.RouterContext),
            n = (0, l.useContext)(f.ImageConfigContext),
            o = (0, l.useMemo)(
                () => {
                  let e = h || n || c.imageConfigDefault,
                      t = [...e.deviceSizes, ...e.imageSizes ].sort((e, t) =>
                                                                        e - t),
                      r = e.deviceSizes.sort((e, t) => e - t);
                  return { ...e, allSizes: t, deviceSizes: r }
                },
                [ n ]),
            {onLoad : s, onLoadingComplete : a} = e, m = (0, l.useRef)(s);
        (0, l.useEffect)(() => {m.current = s}, [ s ]);
        let g = (0, l.useRef)(a);
        (0, l.useEffect)(() => {g.current = a}, [ a ]);
        let [y, x] = (0, l.useState)(!1), [ w, j ] = (0, l.useState)(!1),
                {props : _, meta : C} = (0, u.getImgProps)(e, {
                  defaultLoader : p.default,
                  imgConf : o,
                  blurComplete : y,
                  showAltText : w
                });
        return (0, i.jsxs)(i.Fragment, {
          children : [
            (0, i.jsx)(b, {
              ..._,
              unoptimized : C.unoptimized,
              placeholder : C.placeholder,
              fill : C.fill,
              onLoadRef : m,
              onLoadingCompleteRef : g,
              setBlurComplete : x,
              setShowAltText : j,
              sizesInput : e.sizes,
              ref : t
            }),
            C.priority ? (0, i.jsx)(v, {isAppRouter : !r, imgAttributes : _})
                       : null
          ]
        })
      });
      ("function" == typeof t.default ||
       "object" == typeof t.default && null !== t.default) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", {value : !0}),
           Object.assign(t.default, t), e.exports = t.default)
    },
    9577 : function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {value : !0}),
          Object.defineProperty(
              t, "default", {enumerable : !0, get : function() { return x }});
      let n = r(8754), o = r(5893), i = n._(r(7294)), l = r(1401), s = r(2045),
          a = r(7420), u = r(7201), c = r(1443), f = r(9953), d = r(5320),
          p = r(2905), h = r(4318), m = r(953), g = r(6691), b = new Set;
      function v(e, t, r, n, o, i) {
        if (i || (0, s.isLocalURL)(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o = t + "%" + r + "%" +
                    (void 0 !== n.locale ? n.locale
                     : "locale" in e     ? e.locale
                                         : void 0);
            if (b.has(o))
              return;
            b.add(o)
          }
          (async () => i ? e.prefetch(t, o) : e.prefetch(t, r, n))().catch(
              e => {})
        }
      }
      function y(e) { return "string" == typeof e ? e : (0, a.formatUrl)(e) }
      let x = i.default.forwardRef(function(e, t) {
        let r, n;
        let{href:a,as:b,children:x,prefetch:w=null,passHref:j,replace:_,shallow:C,scroll:S,locale:P,onClick:E,onMouseEnter:O,onTouchStart:N,legacyBehavior:M=!1,...R}=e;
        r = x, M && ("string" == typeof r || "number" == typeof r) &&
                   (r = (0, o.jsx)("a", {children : r}));
        let I = i.default.useContext(f.RouterContext),
            z = i.default.useContext(d.AppRouterContext), k = null != I ? I : z,
            T = !I, A = !1 !== w,
            L = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
            {href : D, as : F} = i.default.useMemo(() => {
              if (!I) {
                let e = y(a);
                return { href: e, as: b ? y(b) : e }
              }
              let [e, t] = (0, l.resolveHref)(I, a, !0);
              return { href: e, as: b ? (0, l.resolveHref)(I, b) : t || e }
            }, [ I, a, b ]), U = i.default.useRef(D), H = i.default.useRef(F);
        M && (n = i.default.Children.only(r));
        let B = M ? n && "object" == typeof n && n.ref : t,
            [ G, K, V ] = (0, p.useIntersection)({rootMargin : "200px"}),
            W = i.default.useCallback(e => {
              (H.current !== F || U.current !== D) &&
                  (V(), H.current = F, U.current = D),
              G(e),
              B && ("function" == typeof B
                        ? B(e)
                        : "object" == typeof B && (B.current = e))
            },
                                      [ F, B, D, V, G ]);
        i.default.useEffect(
            () => {k && K && A && v(k, D, F, {locale : P}, {kind : L}, T)},
            [ F, D, K, P, A, null == I ? void 0 : I.locale, k, T, L ]);
        let Y = {
          ref : W,
          onClick(e) {
            M || "function" != typeof E || E(e),
                M && n.props && "function" == typeof n.props.onClick &&
                    n.props.onClick(e),
                k &&
                    !e.defaultPrevented && function(e, t, r, n, o, l, a, u, c) {
                      let {nodeName : f} = e.currentTarget;
                      if ("A" === f.toUpperCase() && (function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey ||
                                   e.ctrlKey || e.shiftKey || e.altKey ||
                                   e.nativeEvent && 2 === e.nativeEvent.which
                          }(e) || !c && !(0, s.isLocalURL)(r)))
                        return;
                      e.preventDefault();
                      let d = () => {
                        let e = null == a || a;
                        "beforePopState" in t
                            ? t[o ? "replace" : "push"](
                                  r, n, {shallow : l, locale : u, scroll : e})
                            : t[o ? "replace" : "push"](n || r, {scroll : e})
                      };
                      c ? i.default.startTransition(d) : d()
                    }(e, k, D, F, _, C, S, P, T)
          },
          onMouseEnter(e) {
            M || "function" != typeof O || O(e),
                M && n.props && "function" == typeof n.props.onMouseEnter &&
                    n.props.onMouseEnter(e),
                k && (A || !T) &&
                    v(k, D, F,
                      {locale : P, priority : !0, bypassPrefetchedCheck : !0},
                      {kind : L}, T)
          },
          onTouchStart : function(e) {
            M || "function" != typeof N || N(e),
                M && n.props && "function" == typeof n.props.onTouchStart &&
                    n.props.onTouchStart(e),
                k && (A || !T) &&
                    v(k, D, F,
                      {locale : P, priority : !0, bypassPrefetchedCheck : !0},
                      {kind : L}, T)
          }
        };
        if ((0, u.isAbsoluteUrl)(F))
          Y.href = F;
        else if (!M || j || "a" === n.type && !("href" in n.props)) {
          let e = void 0 !== P ? P
                  : null == I  ? void 0
                               : I.locale,
              t = (null == I ? void 0 : I.isLocaleDomain) &&
                  (0, h.getDomainLocale)(F, e, null == I ? void 0 : I.locales,
                                         null == I ? void 0 : I.domainLocales);
          Y.href = t || (0, m.addBasePath)((0, c.addLocale)(
                            F, e, null == I ? void 0 : I.defaultLocale))
        }
        return M ? i.default.cloneElement(n, Y)
                 : (0, o.jsx)("a", {...R, ...Y, children : r})
      });
      ("function" == typeof t.default ||
       "object" == typeof t.default && null !== t.default) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", {value : !0}),
           Object.assign(t.default, t), e.exports = t.default)
    },
    2905 : function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {value : !0}),
          Object.defineProperty(
              t, "useIntersection",
              {enumerable : !0, get : function() { return a }});
      let n = r(7294), o = r(3815),
          i = "function" == typeof IntersectionObserver, l = new Map, s = [];
      function a(e) {
        let {rootRef : t,
             rootMargin : r,
             disabled : a} = e,
                        u = a || !i, [ c, f ] = (0, n.useState)(!1),
                        d = (0, n.useRef)(null),
                        p = (0, n.useCallback)(e => {d.current = e}, []);
        return (0, n.useEffect)(
                   () => {
                     if (i) {
                       if (u || c)
                         return;
                       let e = d.current;
                       if (e && e.tagName)
                         return function(e, t, r) {
                           let {id : n, observer : o, elements : i} = function(
                               e) {
                             let t;
                             let r = {
                               root : e.root || null,
                               margin : e.rootMargin || ""
                             },
                                 n = s.find(e => e.root === r.root &&
                                                 e.margin === r.margin);
                             if (n && (t = l.get(n)))
                               return t;
                             let o = new Map;
                             return t = {
                               id : r,
                               observer : new IntersectionObserver(
                                   e => {e.forEach(e => {
                                     let t = o.get(e.target),
                                         r = e.isIntersecting ||
                                             e.intersectionRatio > 0;
                                     t && r && t(r)
                                   })},
                                   e),
                               elements : o
                             },
                                    s.push(r), l.set(r, t), t
                           }(r);
                           return i.set(e, t), o.observe(e), function() {
                             if (i.delete(e), o.unobserve(e), 0 === i.size) {
                               o.disconnect(), l.delete(n);
                               let e = s.findIndex(e => e.root === n.root &&
                                                        e.margin === n.margin);
                               e > -1 && s.splice(e, 1)
                             }
                           }
                         }(e, e => e && f(e), {
                           root : null == t ? void 0 : t.current,
                           rootMargin : r
                         })
                     } else if (!c) {
                       let e = (0, o.requestIdleCallback)(() => f(!0));
                       return () => (0, o.cancelIdleCallback)(e)
                     }
                   },
                   [ u, r, t, c, d.current ]),
               [ p, c, (0, n.useCallback)(() => {f(!1)}, []) ]
      }
      ("function" == typeof t.default ||
       "object" == typeof t.default && null !== t.default) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", {value : !0}),
           Object.assign(t.default, t), e.exports = t.default)
    },
    7367 : function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {value : !0}),
          Object.defineProperty(
              t, "getImgProps",
              {enumerable : !0, get : function() { return s }}),
          r(1997);
      let n = r(9919), o = r(7903);
      function i(e) { return void 0 !== e.default }
      function l(e) {
        return void 0 === e           ? e
               : "number" == typeof e ? Number.isFinite(e) ? e : NaN
               : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10)
                                                            : NaN
      }
      function s(e, t) {
        var r;
        let s, a, u, {
          src : c,
          sizes : f,
          unoptimized : d = !1,
          priority : p = !1,
          loading : h,
          className : m,
          quality : g,
          width : b,
          height : v,
          fill : y = !1,
          style : x,
          overrideSrc : w,
          onLoad : j,
          onLoadingComplete : _,
          placeholder : C = "empty",
          blurDataURL : S,
          fetchPriority : P,
          layout : E,
          objectFit : O,
          objectPosition : N,
          lazyBoundary : M,
          lazyRoot : R,
          ...I
        } = e,
    {imgConf : z, showAltText : k, blurComplete : T, defaultLoader : A} = t,
    L = z || o.imageConfigDefault;
        if ("allSizes" in L)
          s = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes ].sort((e, t) => e - t),
              t = L.deviceSizes.sort((e, t) => e - t);
          s = {...L, allSizes : e, deviceSizes : t }
        }
        if (void 0 === A)
          throw Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
        let D = I.loader || A;
        delete I.loader, delete I.srcSet;
        let F = "__next_img_default" in D;
        if (F) {
          if ("custom" === s.loader)
            throw Error(
                'Image with src "' + c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
        } else {
          let e = D;
          D = t => {
            let {config : r, ...n} = t;
            return e(n)
          }
        }
        if (E) {
          "fill" === E && (y = !0);
          let e = {
            intrinsic : {maxWidth : "100%", height : "auto"},
            responsive : {width : "100%", height : "auto"}
          }[E];
          e && (x = {...x, ...e});
          let t = {responsive : "100vw", fill : "100vw"}[E];
          t && !f && (f = t)
        }
        let U = "", H = l(b), B = l(v);
        if ("object" == typeof (r = c) && (i(r) || void 0 !== r.src)) {
          let e = i(c) ? c.default : c;
          if (!e.src)
            throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e));
          if (!e.height || !e.width)
            throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e));
          if (a = e.blurWidth, u = e.blurHeight, S = S || e.blurDataURL,
              U = e.src, !y) {
            if (H || B) {
              if (H && !B) {
                let t = H / e.width;
                B = Math.round(e.height * t)
              } else if (!H && B) {
                let t = B / e.height;
                H = Math.round(e.width * t)
              }
            } else
              H = e.width, B = e.height
          }
        }
        let G = !p && ("lazy" === h || void 0 === h);
        (!(c = "string" == typeof c ? c : U) || c.startsWith("data:") ||
         c.startsWith("blob:")) &&
            (d = !0, G = !1),
            s.unoptimized && (d = !0),
            F && c.endsWith(".svg") && !s.dangerouslyAllowSVG && (d = !0),
            p && (P = "high");
        let K = l(g),
            V = Object.assign(y ? {
              position : "absolute",
              height : "100%",
              width : "100%",
              left : 0,
              top : 0,
              right : 0,
              bottom : 0,
              objectFit : O,
              objectPosition : N
            }
                                : {},
                              k ? {} : {color : "transparent"}, x),
            W = T || "empty" === C ? null
                : "blur" === C     ? 'url("data:image/svg+xml;charset=utf-8,' +
                                     (0, n.getImageBlurSvg)({
                                       widthInt : H,
                                       heightInt : B,
                                       blurWidth : a,
                                       blurHeight : u,
                                       blurDataURL : S || "",
                                       objectFit : V.objectFit
                                     }) +
                                     '")'
                               : 'url("' + C + '")',
            Y = W ? {
              backgroundSize : V.objectFit || "cover",
              backgroundPosition : V.objectPosition || "50% 50%",
              backgroundRepeat : "no-repeat",
              backgroundImage : W
            }
                  : {},
            q = function(e) {
              let {
                config : t,
                src : r,
                unoptimized : n,
                width : o,
                quality : i,
                sizes : l,
                loader : s
              } = e;
              if (n)
                return {src : r, srcSet : void 0, sizes : void 0};
              let {widths : a, kind : u} = function(e, t, r) {
                let {deviceSizes : n, allSizes : o} = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g, t = [];
                  for (let n; n = e.exec(r); n)
                    t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = .01 * Math.min(...t);
                    return { widths: o.filter(t => t >= n[0] * e), kind: "w" }
                  }
                  return { widths: o, kind: "w" }
                }
                return "number" != typeof t ? {widths : n, kind : "w"} : {
                  widths : [...new Set([ t, 2 * t ].map(
                      e => o.find(t => t >= e) || o[o.length - 1])) ],
                  kind : "x"
                }
              }(t, o, l), c = a.length - 1;
              return {
                sizes: l || "w" !== u ? l : "100vw",
                    srcSet: a
                        .map((e, n) => s({
                                         config : t,
                                         src : r,
                                         quality : i,
                                         width : e
                                       }) +
                                       " " + ("w" === u ? e : n + 1) + u)
                        .join(", "),
                    src: s({config : t, src : r, quality : i, width : a[c]})
              }
            }({
              config : s,
              src : c,
              unoptimized : d,
              width : H,
              quality : K,
              sizes : f,
              loader : D
            });
        return {
          props: {
            ...I,
            loading: G ? "lazy" : h,
            fetchPriority: P,
            width: H,
            height: B,
            decoding: "async",
            className: m,
            style: {...V, ...Y},
            sizes: q.sizes,
            srcSet: q.srcSet,
            src: w || q.src
          },
              meta: {unoptimized: d, priority: p, placeholder: C, fill: y}
        }
      }
    },
    9919 : function(e, t) {
      "use strict";
      function r(e) {
        let {
          widthInt : t,
          heightInt : r,
          blurWidth : n,
          blurHeight : o,
          blurDataURL : i,
          objectFit : l
        } = e,
       s = n ? 40 * n : t, a = o ? 40 * o : r,
       u = s && a ? "viewBox='0 0 " + s + " " + a + "'" : "";
        return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u +
               "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
               (u                 ? "none"
                : "contain" === l ? "xMidYMid"
                : "cover" === l   ? "xMidYMid slice"
                                  : "none") +
               "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
      }
      Object.defineProperty(t, "__esModule", {value : !0}),
          Object.defineProperty(
              t, "getImageBlurSvg",
              {enumerable : !0, get : function() { return r }})
    },
    5666 : function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {value : !0}), function(e, t) {
        for (var r in t)
          Object.defineProperty(e, r, {enumerable : !0, get : t[r]})
      }(t, {
        default : function() { return a },
        getImageProps : function() { return s }
      });
      let n = r(8754), o = r(7367), i = r(6541), l = n._(r(6663));
      function s(e) {
        let {props : t} = (0, o.getImgProps)(e, {
          defaultLoader : l.default,
          imgConf : {
            deviceSizes : [ 640, 750, 828, 1080, 1200, 1920, 2048, 3840 ],
            imageSizes : [ 16, 32, 48, 64, 96, 128, 256, 384 ],
            path : "/_next/image/",
            loader : "default",
            dangerouslyAllowSVG : !1,
            unoptimized : !0
          }
        });
        for (let [e, r] of Object.entries(t))
          void 0 === r && delete t[e];
        return { props: t }
      }
      let a = i.Image
    },
    6663 : function(e, t) {
      "use strict";
      function r(e) {
        let {config : t, src : r, width : n, quality : o} = e;
        return t.path + "?url=" + encodeURIComponent(r) + "&w=" + n +
               "&q=" + (o || 75)
      }
      Object.defineProperty(t, "__esModule", {value : !0}),
          Object.defineProperty(
              t, "default", {enumerable : !0, get : function() { return n }}),
          r.__next_img_default = !0;
      let n = r
    },
    5575 : function(e, t, r) {
      "use strict";
      r.r(t), r.d(t, {default : function() { return d }});
      var n = r(5893);
      function o() {
        return (0, n.jsx)("footer", {
          className : "w-full py-6 bg-white shadow-t-md mt-auto",
          children : (0, n.jsxs)("div", {
            className : "container mx-auto text-center px-4",
            children : [
              (0, n.jsx)("div", {
                className : "text-xl font-bold mb-2",
                children : "Cape Software Community"
              }),
              (0, n.jsx)("p", {
                className : "text-gray-600 mb-6",
                children :
                    "The Cape Software Community hosts a monthly meetup in Cape Town, South Africa"
              }),
              (0, n.jsx)("p", {
                className : "text-gray-500",
                children :
                    "\xa9 2024 Cape Software Community. All rights reserved."
              })
            ]
          })
        })
      }
      r(687);
      var i = r(5675), l = r.n(i), s = r(1664), a = r.n(s), u = r(7294);
      function c() {
        let [e, t] = (0, u.useState)(!1), r = () => { t(!1) };
        return (0, n.jsx)("header", {
          className : "w-full h-16 bg-white shadow-md fixed top-0 left-0 z-50",
          children : (0, n.jsxs)("div", {
            className :
                "container mx-auto flex justify-between items-center h-full px-4",
            children : [
              (0, n.jsx)("div", {
                className :
                    "text-2xl font-bold absolute left-1/2 transform -translate-x-1/2 z-30",
                children : "Cape Software Community"
              }),
              (0, n.jsx)("button", {
                onClick : () => t(!e),
                className : "lg:hidden absolute top-4 right-4 z-30",
                children : (0, n.jsx)(l(), {
                  src : e ? "/icons8-circled-x-32.png" : "/icons8-menu-32.png",
                  alt : e ? "Close Icon" : "Menu Icon",
                  width : 32,
                  height : 32
                })
              }),
              (0, n.jsx)("div", {
                className :
                    "fixed inset-0 z-20 bg-white bg-opacity-90 backdrop-blur-md flex flex-col items-center transform transition-transform duration-200 ease-in-out "
                        .concat(e ? "translate-y-16" : "-translate-y-full",
                                " lg:hidden"),
                children : (0, n.jsxs)("nav", {
                  className : "flex flex-col items-center space-y-4 mt-8",
                  children : [
                    (0, n.jsx)(a(), {
                      href : "/",
                      className :
                          "border-b-2 border-transparent hover:border-current font-semibold",
                      onClick : r,
                      children : "Home"
                    }),
                    (0, n.jsx)("a", {
                      href :
                          "https://www.meetup.com/cape-town-software-development-meetup/",
                      className :
                          "border-b-2 border-transparent hover:border-current font-semibold",
                      onClick : r,
                      children : "Meetup"
                    }),
                    (0, n.jsx)("a", {
                      href : "https://www.youtube.com/@CapeSoftwareCommunity",
                      className :
                          "border-b-2 border-transparent hover:border-current font-semibold",
                      onClick : r,
                      children : "YouTube"
                    })
                  ]
                })
              }),
              (0, n.jsx)("div", {
                className : "hidden lg:block",
                children : (0, n.jsxs)("nav", {
                  className : "flex space-x-4",
                  children : [
                    (0, n.jsx)(a(), {
                      href : "/",
                      className :
                          "border-b-2 border-transparent hover:border-current font-semibold",
                      children : "Home"
                    }),
                    (0, n.jsx)("a", {
                      href :
                          "https://www.meetup.com/cape-town-software-development-meetup/",
                      className :
                          "border-b-2 border-transparent hover:border-current font-semibold",
                      children : "Meetup"
                    }),
                    (0, n.jsx)("a", {
                      href : "https://www.youtube.com/@CapeSoftwareCommunity",
                      className :
                          "border-b-2 border-transparent hover:border-current font-semibold",
                      children : "YouTube"
                    })
                  ]
                })
              })
            ]
          })
        })
      }
      var f = e => {
        let {children : t} = e;
        return (0, n.jsxs)("div", {
          className : "flex flex-col min-h-screen items-center bg-gray-50",
          children : [
            (0, n.jsx)(c, {}),
            (0, n.jsx)("main", {className : "flex-grow", children : t}),
            (0, n.jsx)(o, {})
          ]
        })
      };
      r(2605);
      var d = function(e) {
        let {Component : t, pageProps : r} = e;
        return (0, n.jsxs)(f, {children : [ " ", (0, n.jsx)(t, {...r}) ]})
      }
    },
    687 : function() {},
    2605 : function() {},
    5675 : function(e, t, r) { e.exports = r(5666) },
    1664 : function(e, t, r) { e.exports = r(9577) }
  },
  function(e) {
    var t = function(t) { return e(e.s = t) };
    e.O(0, [ 774, 179 ], function() { return t(1118), t(9090) }), _N_E = e.O()
  }
]);