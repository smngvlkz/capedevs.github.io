(self.webpackChunk_N_E = self.webpackChunk_N_E || [])
    .push(
        [
          [ 31 ], {
            2449 : function(e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {value : !0}),
                  t.CommentCount = void 0;
              var r = l(n(7294)), o = l(n(5697)), i = n(6674), c = n(7990);
              function l(e) { return e && e.__esModule ? e : {default : e} }
              function a(e) {
                return (a = "function" == typeof Symbol &&
                                    "symbol" == typeof Symbol.iterator
                                ? function(e) { return typeof e }
                                : function(e) {
                                    return e && "function" == typeof Symbol &&
                                                   e.constructor === Symbol &&
                                                   e !== Symbol.prototype
                                               ? "symbol"
                                               : typeof e
                                  })(e)
              }
              function u() {
                return (u = Object.assign || function(e) {
                         for (var t = 1; t < arguments.length; t++) {
                           var n = arguments[t];
                           for (var r in n)
                             Object.prototype.hasOwnProperty.call(n, r) &&
                                 (e[r] = n[r])
                         }
                         return e
                       }).apply(this, arguments)
              }
              function s(e, t) {
                return (s = Object.setPrototypeOf ||
                            function(e, t) { return e.__proto__ = t, e })(e, t)
              }
              function f(e) {
                return (f = Object.setPrototypeOf
                                ? Object.getPrototypeOf
                                : function(e) {
                                    return e.__proto__ ||
                                           Object.getPrototypeOf(e)
                                  })(e)
              }
              var d = (0, i.debounce)(function() {
                window.DISQUSWIDGETS &&
                    window.DISQUSWIDGETS.getCount({reset : !0})
              }, 300, !1), p = function(e) {
                !function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw TypeError(
                        "Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                    constructor : {value : e, writable : !0, configurable : !0}
                  }),
                  t && s(e, t)
                }(l, e);
                var t, n,
                    o = (t =
                             function() {
                               if ("undefined" == typeof Reflect ||
                                   !Reflect.construct || Reflect.construct.sham)
                                 return !1;
                               if ("function" == typeof Proxy)
                                 return !0;
                               try {
                                 return Date.prototype.toString.call(
                                            Reflect.construct(Date, [],
                                                              function() {})),
                                        !0
                               } catch (e) {
                                 return !1
                               }
                             }(),
                         function() {
                           var e, n = f(l);
                           return e = t ? Reflect.construct(n, arguments,
                                                            f(this).constructor)
                                        : n.apply(this, arguments),
                                  e && ("object" === a(e) ||
                                        "function" == typeof e)
                                      ? e
                                      : function(e) {
                                          if (void 0 === e)
                                            throw ReferenceError(
                                                "this hasn't been initialised - super() hasn't been called");
                                          return e
                                        }(this)
                         });
                function l() {
                  return !function(e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function")
                  }(this, l),
                         o.apply(this, arguments)
                }
                return n =
                           [
                             {
                               key : "componentDidMount",
                               value : function() { this.loadInstance() }
                             },
                             {
                               key : "shouldComponentUpdate",
                               value : function(e) {
                                 return this.props !== e &&
                                        (0, i.shallowComparison)(this.props, e)
                               }
                             },
                             {
                               key : "componentDidUpdate",
                               value : function(e) {
                                 this.props.shortname !== e.shortname &&
                                     this.cleanInstance(),
                                     this.loadInstance()
                               }
                             },
                             {
                               key : "componentWillUnmount",
                               value : function() { this.cleanInstance() }
                             },
                             {
                               key : "loadInstance",
                               value : function() {
                                 var e = window.document;
                                 e.getElementById(c.COMMENT_COUNT_SCRIPT_ID)
                                     ? d()
                                     : (0, i.insertScript)(
                                           "https://".concat(
                                               this.props.shortname,
                                               ".disqus.com/count.js"),
                                           c.COMMENT_COUNT_SCRIPT_ID, e.body)
                               }
                             },
                             {
                               key : "cleanInstance",
                               value : function() {
                                 var e = window.document;
                                 (0, i.removeScript)(c.COMMENT_COUNT_SCRIPT_ID,
                                                     e.body),
                                     window.DISQUSWIDGETS = void 0,
                                     (0, i.removeResources)()
                               }
                             },
                             {
                               key : "render",
                               value : function() {
                                 var e = this.props,
                                     t = (e.shortname, e.config),
                                     n = e.children, o = e.className,
                                     i = function(e, t) {
                                       if (null == e)
                                         return {};
                                       var n, r, o = function(e, t) {
                                         if (null == e)
                                           return {};
                                         var n, r, o = {}, i = Object.keys(e);
                                         for (r = 0; r < i.length; r++)
                                           n = i[r],
                                           t.indexOf(n) >= 0 || (o[n] = e[n]);
                                         return o
                                       }(e, t);
                                       if (Object.getOwnPropertySymbols) {
                                         var i =
                                             Object.getOwnPropertySymbols(e);
                                         for (r = 0; r < i.length; r++)
                                           n = i[r],
                                           !(t.indexOf(n) >= 0) &&
                                               Object.prototype
                                                   .propertyIsEnumerable.call(
                                                       e, n) &&
                                               (o[n] = e[n])
                                       }
                                       return o
                                     }(e, [
                                       "shortname", "config", "children",
                                       "className"
                                     ]);
                                 return r.default.createElement(
                                     "span", u({}, i, {
                                       className :
                                           "".concat(c.COMMENT_COUNT_CLASS)
                                               .concat(o ? " ".concat(o) : ""),
                                       "data-disqus-identifier" : t.identifier,
                                       "data-disqus-url" : t.url
                                     }),
                                     n)
                               }
                             }
                           ],
                       function(e, t) {
                         for (var n = 0; n < t.length; n++) {
                           var r = t[n];
                           r.enumerable = r.enumerable || !1,
                           r.configurable = !0,
                           "value" in r && (r.writable = !0),
                           Object.defineProperty(e, r.key, r)
                         }
                       }(l.prototype, n),
                       l
              }(r.default.Component);
              t.CommentCount = p, p.propTypes = {
                shortname : o.default.string.isRequired,
                config : o.default
                             .shape({
                               identifier : o.default.string,
                               url : o.default.string,
                               title : o.default.string
                             })
                             .isRequired,
                className : o.default.string,
                children : o.default.node
              }
            },
            5890 : function(e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {value : !0}),
                  t.CommentEmbed = void 0;
              var r = c(n(7294)), o = c(n(5697)), i = n(7990);
              function c(e) { return e && e.__esModule ? e : {default : e} }
              function l(e) {
                return (l = "function" == typeof Symbol &&
                                    "symbol" == typeof Symbol.iterator
                                ? function(e) { return typeof e }
                                : function(e) {
                                    return e && "function" == typeof Symbol &&
                                                   e.constructor === Symbol &&
                                                   e !== Symbol.prototype
                                               ? "symbol"
                                               : typeof e
                                  })(e)
              }
              function a() {
                return (a = Object.assign || function(e) {
                         for (var t = 1; t < arguments.length; t++) {
                           var n = arguments[t];
                           for (var r in n)
                             Object.prototype.hasOwnProperty.call(n, r) &&
                                 (e[r] = n[r])
                         }
                         return e
                       }).apply(this, arguments)
              }
              function u(e, t) {
                return (u = Object.setPrototypeOf ||
                            function(e, t) { return e.__proto__ = t, e })(e, t)
              }
              function s(e) {
                return (s = Object.setPrototypeOf
                                ? Object.getPrototypeOf
                                : function(e) {
                                    return e.__proto__ ||
                                           Object.getPrototypeOf(e)
                                  })(e)
              }
              var f = function(e) {
                !function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw TypeError(
                        "Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                    constructor : {value : e, writable : !0, configurable : !0}
                  }),
                  t && u(e, t)
                }(i, e);
                var t, n,
                    o = (t =
                             function() {
                               if ("undefined" == typeof Reflect ||
                                   !Reflect.construct || Reflect.construct.sham)
                                 return !1;
                               if ("function" == typeof Proxy)
                                 return !0;
                               try {
                                 return Date.prototype.toString.call(
                                            Reflect.construct(Date, [],
                                                              function() {})),
                                        !0
                               } catch (e) {
                                 return !1
                               }
                             }(),
                         function() {
                           var e, n = s(i);
                           return e = t ? Reflect.construct(n, arguments,
                                                            s(this).constructor)
                                        : n.apply(this, arguments),
                                  e && ("object" === l(e) ||
                                        "function" == typeof e)
                                      ? e
                                      : function(e) {
                                          if (void 0 === e)
                                            throw ReferenceError(
                                                "this hasn't been initialised - super() hasn't been called");
                                          return e
                                        }(this)
                         });
                function i() {
                  return !function(e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function")
                  }(this, i),
                         o.apply(this, arguments)
                }
                return n =
                           [
                             {
                               key : "getSrc",
                               value : function() {
                                 var e = Number(this.props.commentId)
                                             .toString(36),
                                     t = this.props.showParentComment ? "1"
                                                                      : "0",
                                     n = this.props.showMedia ? "1" : "0";
                                 return "https://embed.disqus.com/p/"
                                     .concat(e, "?p=")
                                     .concat(t, "&m=")
                                     .concat(n)
                               }
                             },
                             {
                               key : "render",
                               value : function() {
                                 var e = this.props, t = e.width, n = e.height,
                                     o = (e.commentId, e.showMedia,
                                          e.showParentComment, function(e, t) {
                                            if (null == e)
                                              return {};
                                            var n, r, o = function(e, t) {
                                              if (null == e)
                                                return {};
                                              var n, r, o = {},
                                                        i = Object.keys(e);
                                              for (r = 0; r < i.length; r++)
                                                n = i[r], t.indexOf(n) >= 0 ||
                                                              (o[n] = e[n]);
                                              return o
                                            }(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                              var i =
                                                  Object.getOwnPropertySymbols(
                                                      e);
                                              for (r = 0; r < i.length; r++)
                                                n = i[r],
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype
                                                        .propertyIsEnumerable
                                                        .call(e, n) &&
                                                    (o[n] = e[n])
                                            }
                                            return o
                                          }(e, [
                                            "width", "height", "commentId",
                                            "showMedia", "showParentComment"
                                          ]));
                                 return r.default.createElement(
                                     "iframe", a({}, o, {
                                       src : this.getSrc(),
                                       width : t,
                                       height : n,
                                       seamless : "seamless",
                                       scrolling : "no",
                                       frameBorder : "0"
                                     }))
                               }
                             }
                           ],
                       function(e, t) {
                         for (var n = 0; n < t.length; n++) {
                           var r = t[n];
                           r.enumerable = r.enumerable || !1,
                           r.configurable = !0,
                           "value" in r && (r.writable = !0),
                           Object.defineProperty(e, r.key, r)
                         }
                       }(i.prototype, n),
                       i
              }(r.default.Component);
              t.CommentEmbed = f, f.defaultProps = {
                showMedia : !0,
                showParentComment : !0,
                width : i.COMMENT_EMBED_WIDTH,
                height : i.COMMENT_EMBED_HEIGHT
              },
              f.propTypes = {
                commentId : o.default.string.isRequired,
                showMedia : o.default.bool,
                showParentComment : o.default.bool,
                width : o.default.number,
                height : o.default.number,
                className : o.default.string
              }
            },
            4811 : function(e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {value : !0}),
                  t.DiscussionEmbed = void 0;
              var r = l(n(7294)), o = l(n(5697)), i = n(6674), c = n(7990);
              function l(e) { return e && e.__esModule ? e : {default : e} }
              function a(e) {
                return (a = "function" == typeof Symbol &&
                                    "symbol" == typeof Symbol.iterator
                                ? function(e) { return typeof e }
                                : function(e) {
                                    return e && "function" == typeof Symbol &&
                                                   e.constructor === Symbol &&
                                                   e !== Symbol.prototype
                                               ? "symbol"
                                               : typeof e
                                  })(e)
              }
              function u() {
                return (u = Object.assign || function(e) {
                         for (var t = 1; t < arguments.length; t++) {
                           var n = arguments[t];
                           for (var r in n)
                             Object.prototype.hasOwnProperty.call(n, r) &&
                                 (e[r] = n[r])
                         }
                         return e
                       }).apply(this, arguments)
              }
              function s(e, t) {
                return (s = Object.setPrototypeOf ||
                            function(e, t) { return e.__proto__ = t, e })(e, t)
              }
              function f(e) {
                return (f = Object.setPrototypeOf
                                ? Object.getPrototypeOf
                                : function(e) {
                                    return e.__proto__ ||
                                           Object.getPrototypeOf(e)
                                  })(e)
              }
              var d = function(e) {
                !function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw TypeError(
                        "Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                    constructor : {value : e, writable : !0, configurable : !0}
                  }),
                  t && s(e, t)
                }(l, e);
                var t, n,
                    o = (t =
                             function() {
                               if ("undefined" == typeof Reflect ||
                                   !Reflect.construct || Reflect.construct.sham)
                                 return !1;
                               if ("function" == typeof Proxy)
                                 return !0;
                               try {
                                 return Date.prototype.toString.call(
                                            Reflect.construct(Date, [],
                                                              function() {})),
                                        !0
                               } catch (e) {
                                 return !1
                               }
                             }(),
                         function() {
                           var e, n = f(l);
                           return e = t ? Reflect.construct(n, arguments,
                                                            f(this).constructor)
                                        : n.apply(this, arguments),
                                  e && ("object" === a(e) ||
                                        "function" == typeof e)
                                      ? e
                                      : function(e) {
                                          if (void 0 === e)
                                            throw ReferenceError(
                                                "this hasn't been initialised - super() hasn't been called");
                                          return e
                                        }(this)
                         });
                function l() {
                  return !function(e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function")
                  }(this, l),
                         o.apply(this, arguments)
                }
                return n =
                           [
                             {
                               key : "componentDidMount",
                               value : function() {
                                 "undefined" != typeof window &&
                                     window.disqus_shortname &&
                                     window.disqus_shortname !==
                                         this.props.shortname &&
                                     this.cleanInstance(),
                                     this.loadInstance()
                               }
                             },
                             {
                               key : "shouldComponentUpdate",
                               value : function(e) {
                                 return this.props !== e &&
                                        (0, i.shallowComparison)(this.props, e)
                               }
                             },
                             {
                               key : "componentDidUpdate",
                               value : function(e) {
                                 this.props.shortname !== e.shortname &&
                                     this.cleanInstance(),
                                     this.loadInstance()
                               }
                             },
                             {
                               key : "componentWillUnmount",
                               value : function() { this.cleanInstance() }
                             },
                             {
                               key : "loadInstance",
                               value : function() {
                                 var e = window.document;
                                 window && window.DISQUS &&
                                         e.getElementById(c.EMBED_SCRIPT_ID)
                                     ? window.DISQUS.reset({
                                         reload : !0,
                                         config : this.getDisqusConfig(
                                             this.props.config)
                                       })
                                     : (window.disqus_config =
                                            this.getDisqusConfig(
                                                this.props.config),
                                        window.disqus_shortname =
                                            this.props.shortname,
                                        (0, i.insertScript)(
                                            "https://".concat(
                                                this.props.shortname,
                                                ".disqus.com/embed.js"),
                                            c.EMBED_SCRIPT_ID, e.body))
                               }
                             },
                             {
                               key : "cleanInstance",
                               value : function() {
                                 var e = window.document;
                                 (0, i.removeScript)(c.EMBED_SCRIPT_ID, e.body),
                                     window && window.DISQUS &&
                                         window.DISQUS.reset({});
                                 try {
                                   delete window.DISQUS
                                 } catch (e) {
                                   window.DISQUS = void 0
                                 }
                                 var t = e.getElementById(c.THREAD_ID);
                                 if (t)
                                   for (; t.hasChildNodes();)
                                     t.removeChild(t.firstChild);
                                 (0, i.removeResources)()
                               }
                             },
                             {
                               key : "getDisqusConfig",
                               value : function(e) {
                                 return function() {
                                   var t = this;
                                   this.page.identifier = e.identifier,
                                   this.page.url = e.url,
                                   this.page.title = e.title,
                                   this.page.category_id = e.categoryID,
                                   this.page.remote_auth_s3 = e.remoteAuthS3,
                                   this.page.api_key = e.apiKey,
                                   e.sso && (this.sso = e.sso),
                                   e.language && (this.language = e.language),
                                   c.CALLBACKS.forEach(function(
                                       n) { t.callbacks[n] = [ e[n] ] })
                                 }
                               }
                             },
                             {
                               key : "render",
                               value : function() {
                                 var e = this.props,
                                     t = (e.shortname, e.config,
                                          function(e, t) {
                                            if (null == e)
                                              return {};
                                            var n, r, o = function(e, t) {
                                              if (null == e)
                                                return {};
                                              var n, r, o = {},
                                                        i = Object.keys(e);
                                              for (r = 0; r < i.length; r++)
                                                n = i[r], t.indexOf(n) >= 0 ||
                                                              (o[n] = e[n]);
                                              return o
                                            }(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                              var i =
                                                  Object.getOwnPropertySymbols(
                                                      e);
                                              for (r = 0; r < i.length; r++)
                                                n = i[r],
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype
                                                        .propertyIsEnumerable
                                                        .call(e, n) &&
                                                    (o[n] = e[n])
                                            }
                                            return o
                                          }(e, [ "shortname", "config" ]));
                                 return r.default.createElement(
                                     "div", u({}, t, {id : c.THREAD_ID}))
                               }
                             }
                           ],
                       function(e, t) {
                         for (var n = 0; n < t.length; n++) {
                           var r = t[n];
                           r.enumerable = r.enumerable || !1,
                           r.configurable = !0,
                           "value" in r && (r.writable = !0),
                           Object.defineProperty(e, r.key, r)
                         }
                       }(l.prototype, n),
                       l
              }(r.default.Component);
              t.DiscussionEmbed = d, d.propTypes = {
                shortname : o.default.string.isRequired,
                config : o.default
                             .shape({
                               identifier : o.default.string,
                               url : o.default.string,
                               title : o.default.string,
                               language : o.default.string,
                               categoryID : o.default.string,
                               remoteAuthS3 : o.default.string,
                               apiKey : o.default.string,
                               preData : o.default.func,
                               preInit : o.default.func,
                               onInit : o.default.func,
                               onReady : o.default.func,
                               afterRender : o.default.func,
                               preReset : o.default.func,
                               onIdentify : o.default.func,
                               beforeComment : o.default.func,
                               onNewComment : o.default.func,
                               onPaginate : o.default.func,
                               sso : o.default.shape({
                                 name : o.default.string,
                                 button : o.default.string,
                                 icon : o.default.string,
                                 url : o.default.string,
                                 logout : o.default.string,
                                 profile_url : o.default.string,
                                 width : o.default.string,
                                 height : o.default.string
                               })
                             })
                             .isRequired
              }
            },
            4573 : function(e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {value : !0}),
                  t.Recommendations = void 0;
              var r = l(n(7294)), o = l(n(5697)), i = n(6674), c = n(7990);
              function l(e) { return e && e.__esModule ? e : {default : e} }
              function a(e) {
                return (a = "function" == typeof Symbol &&
                                    "symbol" == typeof Symbol.iterator
                                ? function(e) { return typeof e }
                                : function(e) {
                                    return e && "function" == typeof Symbol &&
                                                   e.constructor === Symbol &&
                                                   e !== Symbol.prototype
                                               ? "symbol"
                                               : typeof e
                                  })(e)
              }
              function u() {
                return (u = Object.assign || function(e) {
                         for (var t = 1; t < arguments.length; t++) {
                           var n = arguments[t];
                           for (var r in n)
                             Object.prototype.hasOwnProperty.call(n, r) &&
                                 (e[r] = n[r])
                         }
                         return e
                       }).apply(this, arguments)
              }
              function s(e, t) {
                return (s = Object.setPrototypeOf ||
                            function(e, t) { return e.__proto__ = t, e })(e, t)
              }
              function f(e) {
                return (f = Object.setPrototypeOf
                                ? Object.getPrototypeOf
                                : function(e) {
                                    return e.__proto__ ||
                                           Object.getPrototypeOf(e)
                                  })(e)
              }
              var d = function(e) {
                !function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw TypeError(
                        "Super expression must either be null or a function");
                  e.prototype = Object.create(t && t.prototype, {
                    constructor : {value : e, writable : !0, configurable : !0}
                  }),
                  t && s(e, t)
                }(l, e);
                var t, n,
                    o = (t =
                             function() {
                               if ("undefined" == typeof Reflect ||
                                   !Reflect.construct || Reflect.construct.sham)
                                 return !1;
                               if ("function" == typeof Proxy)
                                 return !0;
                               try {
                                 return Date.prototype.toString.call(
                                            Reflect.construct(Date, [],
                                                              function() {})),
                                        !0
                               } catch (e) {
                                 return !1
                               }
                             }(),
                         function() {
                           var e, n = f(l);
                           return e = t ? Reflect.construct(n, arguments,
                                                            f(this).constructor)
                                        : n.apply(this, arguments),
                                  e && ("object" === a(e) ||
                                        "function" == typeof e)
                                      ? e
                                      : function(e) {
                                          if (void 0 === e)
                                            throw ReferenceError(
                                                "this hasn't been initialised - super() hasn't been called");
                                          return e
                                        }(this)
                         });
                function l() {
                  return !function(e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function")
                  }(this, l),
                         o.apply(this, arguments)
                }
                return n =
                           [
                             {
                               key : "componentDidMount",
                               value : function() { this.loadInstance() }
                             },
                             {
                               key : "shouldComponentUpdate",
                               value : function(e) {
                                 return this.props !== e &&
                                        (0, i.shallowComparison)(this.props, e)
                               }
                             },
                             {
                               key : "componentDidUpdate",
                               value : function() { this.loadInstance() }
                             },
                             {
                               key : "componentWillUnmount",
                               value : function() { this.cleanInstance() }
                             },
                             {
                               key : "getDisqusConfig",
                               value : function(e) {
                                 return function() {
                                   this.page.identifier = e.identifier,
                                   this.page.url = e.url,
                                   this.page.title = e.title,
                                   this.language = e.language
                                 }
                               }
                             },
                             {
                               key : "loadInstance",
                               value : function() {
                                 "undefined" != typeof window &&
                                     window.document &&
                                     (window.disqus_config =
                                          this.getDisqusConfig(
                                              this.props.config),
                                      window.document.getElementById(
                                          c.RECOMMENDATIONS_SCRIPT_ID)
                                          ? this.reloadInstance()
                                          : (0, i.insertScript)(
                                                "https://".concat(
                                                    this.props.shortname,
                                                    ".disqus.com/recommendations.js"),
                                                c.RECOMMENDATIONS_SCRIPT_ID,
                                                window.document.body))
                               }
                             },
                             {
                               key : "reloadInstance",
                               value : function() {
                                 window && window.DISQUS_RECOMMENDATIONS &&
                                     window.DISQUS_RECOMMENDATIONS.reset(
                                         {reload : !0})
                               }
                             },
                             {
                               key : "cleanInstance",
                               value : function() {
                                 (0,
                                  i.removeScript)(c.RECOMMENDATIONS_SCRIPT_ID,
                                                  window.document.body);
                                 try {
                                   delete window.DISQUS_RECOMMENDATIONS
                                 } catch (e) {
                                   window.DISQUS_RECOMMENDATIONS = void 0
                                 }
                                 var e = window.document.getElementById(
                                     c.RECOMMENDATIONS_ID);
                                 if (e)
                                   for (; e.hasChildNodes();)
                                     e.removeChild(e.firstChild);
                                 (0, i.removeResources)()
                               }
                             },
                             {
                               key : "render",
                               value : function() {
                                 var e = this.props,
                                     t = (e.shortname, e.config,
                                          function(e, t) {
                                            if (null == e)
                                              return {};
                                            var n, r, o = function(e, t) {
                                              if (null == e)
                                                return {};
                                              var n, r, o = {},
                                                        i = Object.keys(e);
                                              for (r = 0; r < i.length; r++)
                                                n = i[r], t.indexOf(n) >= 0 ||
                                                              (o[n] = e[n]);
                                              return o
                                            }(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                              var i =
                                                  Object.getOwnPropertySymbols(
                                                      e);
                                              for (r = 0; r < i.length; r++)
                                                n = i[r],
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype
                                                        .propertyIsEnumerable
                                                        .call(e, n) &&
                                                    (o[n] = e[n])
                                            }
                                            return o
                                          }(e, [ "shortname", "config" ]));
                                 return r.default.createElement(
                                     "div",
                                     u({}, t, {id : c.RECOMMENDATIONS_ID}))
                               }
                             }
                           ],
                       function(e, t) {
                         for (var n = 0; n < t.length; n++) {
                           var r = t[n];
                           r.enumerable = r.enumerable || !1,
                           r.configurable = !0,
                           "value" in r && (r.writable = !0),
                           Object.defineProperty(e, r.key, r)
                         }
                       }(l.prototype, n),
                       l
              }(r.default.Component);
              t.Recommendations = d, d.propTypes = {
                shortname : o.default.string.isRequired,
                config : o.default.shape({
                  identifier : o.default.string,
                  url : o.default.string,
                  title : o.default.string,
                  language : o.default.string
                })
              }
            },
            7990 : function(e, t) {
              "use strict";
              Object.defineProperty(t, "__esModule", {value : !0}),
                  t.CALLBACKS = t.RECOMMENDATIONS_SCRIPT_ID =
                      t.RECOMMENDATIONS_ID = t.COMMENT_EMBED_HEIGHT =
                          t.COMMENT_EMBED_WIDTH = t.COMMENT_COUNT_SCRIPT_ID =
                              t.COMMENT_COUNT_CLASS = t.EMBED_SCRIPT_ID =
                                  t.THREAD_ID = void 0,
                  t.THREAD_ID = "disqus_thread",
                  t.EMBED_SCRIPT_ID = "dsq-embed-scr",
                  t.COMMENT_COUNT_CLASS = "disqus-comment-count",
                  t.COMMENT_COUNT_SCRIPT_ID = "dsq-count-scr",
                  t.COMMENT_EMBED_WIDTH = 420, t.COMMENT_EMBED_HEIGHT = 320,
                  t.RECOMMENDATIONS_ID = "disqus_recommendations",
                  t.RECOMMENDATIONS_SCRIPT_ID = "dsq-recs-scr", t.CALLBACKS = [
                    "preData", "preInit", "onInit", "onReady", "afterRender",
                    "preReset", "onIdentify", "beforeComment", "onNewComment",
                    "onPaginate"
                  ]
            },
            3944 : function(e, t, n) {
              "use strict";
              Object.defineProperty(t, "qw", {
                enumerable : !0,
                get : function() { return i.DiscussionEmbed }
              });
              var r = n(2449), o = n(5890), i = n(4811), c = n(4573);
              r.CommentCount, o.CommentEmbed, i.DiscussionEmbed,
                  c.Recommendations
            },
            6674 : function(e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {value : !0}),
                  t.insertScript =
                      function(e, t, n) {
                    var r = window.document.createElement("script");
                    return r.async = !0, r.src = e, r.id = t, n.appendChild(r),
                           r
                  },
                  t.removeScript =
                      function(e, t) {
                    var n = window.document.getElementById(e);
                    n && t.removeChild(n)
                  },
                  t.removeResources =
                      function() {
                    window.document
                        .querySelectorAll(
                            'link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]')
                        .forEach(function(e) { return e.remove() })
                  },
                  t.debounce =
                      function(e, t, n) {
                    var r;
                    return function() {
                      var o = this, i = arguments, c = n && !r;
                      window.clearTimeout(r),
                          r = setTimeout(
                              function() { r = null, n || e.apply(o, i) }, t),
                          c && e.apply(o, i)
                    }
                  },
                  t.isReactElement = l, t.shallowComparison = function e(t, n) {
                    var r, o = function(e) {
                      if ("undefined" == typeof Symbol ||
                          null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (e = function(e, t) {
                              if (e) {
                                if ("string" == typeof e)
                                  return c(e, void 0);
                                var n = Object.prototype.toString.call(e).slice(
                                    8, -1);
                                if ("Object" === n && e.constructor &&
                                        (n = e.constructor.name),
                                    "Map" === n || "Set" === n)
                                  return Array.from(e);
                                if ("Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/
                                        .test(n))
                                  return c(e, void 0)
                              }
                            }(e))) {
                          var t = 0, n = function() {};
                          return {
                            s: n, n: function() {
                              return t >= e.length ? {done : !0}
                                                   : {done : !1, value : e[t++]}
                            }, e: function(e) { throw e }, f: n
                          }
                        }
                        throw TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                      }
                      var r, o, i = !0, l = !1;
                      return {
                        s: function() { r = e[Symbol.iterator]() },
                            n: function() {
                              var e = r.next();
                              return i = e.done, e
                            }, e: function(e) { l = !0, o = e }, f: function() {
                              try {
                                i || null == r.return || r.return()
                              } finally {
                                if (l)
                                  throw o
                              }
                            }
                      }
                    }(new Set(Object.keys(t), Object.keys(n)));
                    try {
                      for (o.s(); !(r = o.n()).done;) {
                        var a = r.value;
                        if ("object" === i(t[a])) {
                          if (e(t[a], n[a]))
                            return !0
                        } else if (t[a] !== n[a] && !l(t[a]))
                          return !0
                      }
                    } catch (e) {
                      o.e(e)
                    } finally {
                      o.f()
                    }
                    return !1
                  };
              var r, o = (r = n(7294)) && r.__esModule ? r : {default : r};
              function i(e) {
                return (i = "function" == typeof Symbol &&
                                    "symbol" == typeof Symbol.iterator
                                ? function(e) { return typeof e }
                                : function(e) {
                                    return e && "function" == typeof Symbol &&
                                                   e.constructor === Symbol &&
                                                   e !== Symbol.prototype
                                               ? "symbol"
                                               : typeof e
                                  })(e)
              }
              function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++)
                  r[n] = e[n];
                return r
              }
              function l(e) {
                return !!o.default.isValidElement(e) ||
                       !!Array.isArray(e) &&
                           e.some(function(
                               e) { return o.default.isValidElement(e) })
              }
            },
            365 : function(e, t, n) {
              var r = n(1445)("jsonp");
              e.exports = function(e, t, n) {
                "function" == typeof t && (n = t, t = {}), t || (t = {});
                var c, l, a = t.prefix || "__jp", u = t.name || a + o++,
                          s = t.param || "callback",
                          f = null != t.timeout ? t.timeout : 6e4,
                          d = encodeURIComponent,
                          p = document.getElementsByTagName("script")[0] ||
                              document.head;
                function h() {
                  c.parentNode && c.parentNode.removeChild(c),
                      window[u] = i, l && clearTimeout(l)
                }
                return f && (l = setTimeout(
                                 function() { h(), n && n(Error("Timeout")) },
                                 f)),
                       window[u] = function(
                           e) { r("jsonp got", e), h(), n && n(null, e) },
                       e += (~e.indexOf("?") ? "&" : "?") + s + "=" + d(u),
                       r('jsonp req "%s"', e = e.replace("?&", "?")),
                       (c = document.createElement("script")).src = e,
                       p.parentNode.insertBefore(c, p),
                       function() { window[u] && h() }
              };
              var o = 0;
              function i() {}
            },
            1445 : function(e, t, n) {
              var r = n(3454);
              function o() {
                var e;
                try {
                  e = t.storage.debug
                } catch (e) {
                }
                return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
              }
              (t=e.exports=n(4805)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,r)}},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=o,t.useColors=function(){return"undefined"!=typeof window&&!!window.process&&"renderer"===window.process.type||"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(o())
            },
            4805 : function(e, t, n) {
              var r;
              function o(e) {
                function n() {
                  if (n.enabled) {
                    var e = +new Date, o = e - (r || e);
                    n.diff = o, n.prev = r, n.curr = e, r = e;
                    for (var i = Array(arguments.length), c = 0; c < i.length;
                         c++)
                      i[c] = arguments[c];
                    i[0] = t.coerce(i[0]),
                    "string" != typeof i[0] && i.unshift("%O");
                    var l = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g,
                                        function(e, r) {
                                          if ("%%" === e)
                                            return e;
                                          l++;
                                          var o = t.formatters[r];
                                          if ("function" == typeof o) {
                                            var c = i[l];
                                            e = o.call(n, c), i.splice(l, 1),
                                            l--
                                          }
                                          return e
                                        }),
                    t.formatArgs.call(n, i),
                    (n.log || t.log || console.log.bind(console)).apply(n, i)
                  }
                }
                return n.namespace = e, n.enabled = t.enabled(e),
                       n.useColors = t.useColors(), n.color = function(e) {
                         var n, r = 0;
                         for (n in e)
                           r = (r << 5) - r + e.charCodeAt(n) | 0;
                         return t.colors[Math.abs(r) % t.colors.length]
                       }(e), "function" == typeof t.init && t.init(n), n
              }
              (t = e.exports = o.debug = o.default = o)
                  .coerce = function(
                  e) { return e instanceof Error ? e.stack || e.message : e },
                t.disable = function() { t.enable("") },
                t.enable =
                    function(e) {
                  t.save(e), t.names = [], t.skips = [];
                  for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                           r = n.length, o = 0;
                       o < r; o++)
                    n[o] && ("-" === (e = n[o].replace(/\*/g, ".*?"))[0]
                                 ? t.skips.push(RegExp("^" + e.substr(1) + "$"))
                                 : t.names.push(RegExp("^" + e + "$")))
                },
                t.enabled =
                    function(e) {
                  var n, r;
                  for (n = 0, r = t.skips.length; n < r; n++)
                    if (t.skips[n].test(e))
                      return !1;
                  for (n = 0, r = t.names.length; n < r; n++)
                    if (t.names[n].test(e))
                      return !0;
                  return !1
                },
                t.humanize = n(971), t.names = [], t.skips = [],
                t.formatters = {}
            },
            971 : function(e) {
              function t(e, t, n) {
                return e < t         ? void 0
                       : e < 1.5 * t ? Math.floor(e / t) + " " + n
                                     : Math.ceil(e / t) + " " + n + "s"
              }
              e.exports = function(e, n) {
                n = n || {};
                var r = typeof e;
                if ("string" === r && e.length > 0)
                  return function(e) {
                    if (!((e = String(e)).length > 100)) {
                      var t =
                          /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i
                              .exec(e);
                      if (t) {
                        var n = parseFloat(t[1]);
                        switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                          return 315576e5 * n;
                        case "days":
                        case "day":
                        case "d":
                          return 864e5 * n;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                          return 36e5 * n;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                          return 6e4 * n;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                          return 1e3 * n;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                          return n;
                        default:
                          return
                        }
                      }
                    }
                  }(e);
                if ("number" === r && !1 === isNaN(e))
                  return n.long ? t(e, 864e5, "day") || t(e, 36e5, "hour") ||
                                      t(e, 6e4, "minute") ||
                                      t(e, 1e3, "second") || e + " ms"
                         : e >= 864e5 ? Math.round(e / 864e5) + "d"
                         : e >= 36e5  ? Math.round(e / 36e5) + "h"
                         : e >= 6e4   ? Math.round(e / 6e4) + "m"
                         : e >= 1e3   ? Math.round(e / 1e3) + "s"
                                      : e + "ms";
                throw Error(
                    "val is not a non-empty string or a valid number. val=" +
                    JSON.stringify(e))
              }
            },
            3454 : function(e, t, n) {
              "use strict";
              var r, o;
              e.exports =
                  (null == (r = n.g.process) ? void 0 : r.env) &&
                          "object" == typeof (null == (o = n.g.process) ? void 0
                                                                        : o.env)
                      ? n.g.process
                      : n(7663)
            },
            8864 : function(e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {value : !0}),
                  function(e, t) {
                    for (var n in t)
                      Object.defineProperty(e, n, {enumerable : !0, get : t[n]})
                  }(t, {
                    default : function() { return l },
                    noSSR : function() { return c }
                  });
              let r = n(8754);
              n(5893), n(7294);
              let o = r._(n(6016));
              function i(e) {
                return {
                default:
                  (null == e ? void 0 : e.default) || e
                }
              }
              function c(e, t) {
                return delete t.webpack, delete t.modules, e(t)
              }
              function l(e, t) {
                let n = o.default, r = {
                  loading : e => {
                    let {error : t, isLoading : n, pastDelay : r} = e;
                    return null
                  }
                };
                e instanceof Promise ? r.loader = () => e
                : "function" == typeof e
                    ? r.loader = e
                    : "object" == typeof e && (r = {...r, ...e});
                let l = (r = {...r, ...t}).loader;
                return (r.loadableGenerated &&
                            (r = {...r, ...r.loadableGenerated},
                             delete r.loadableGenerated),
                        "boolean" != typeof r.ssr || r.ssr)
                           ? n({
                               ...r,
                               loader : () =>
                                   null != l ? l().then(i)
                                             : Promise.resolve(i(() => null))
                             })
                           : (delete r.webpack, delete r.modules, c(n, r))
              }
              ("function" == typeof t.default ||
               "object" == typeof t.default && null !== t.default) &&
                  void 0 === t.default.__esModule &&
                  (Object.defineProperty(t.default, "__esModule", {value : !0}),
                   Object.assign(t.default, t), e.exports = t.default)
            },
            572 : function(e, t, n) {
              "use strict";
              Object.defineProperty(t, "__esModule", {value : !0}),
                  Object.defineProperty(
                      t, "LoadableContext",
                      {enumerable : !0, get : function() { return r }});
              let r = n(8754)._(n(7294)).default.createContext(null)
            },
            6016 : function(e, t, n) {
              "use strict"; /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
              Object.defineProperty(t, "__esModule", {value : !0}),
                  Object.defineProperty(
                      t, "default",
                      {enumerable : !0, get : function() { return d }});
              let r = n(8754)._(n(7294)), o = n(572), i = [], c = [], l = !1;
              function a(e) {
                let t = e(), n = {loading : !0, loaded : null, error : null};
                return n.promise =
                           t.then(e => (n.loading = !1, n.loaded = e, e))
                               .catch(
                                   e => {throw n.loading = !1, n.error = e, e}),
                       n
              }
              class u {
                promise() { return this._res.promise }
                retry() {
                  this._clearTimeouts(),
                      this._res = this._loadFn(this._opts.loader),
                      this._state = {pastDelay : !1, timedOut : !1};
                  let {_res : e, _opts : t} = this;
                  e.loading &&
                      ("number" == typeof t.delay &&
                           (0 === t.delay
                                ? this._state.pastDelay = !0
                                : this._delay = setTimeout(
                                      () => {this._update({pastDelay : !0})},
                                      t.delay)),
                       "number" == typeof t.timeout &&
                           (this._timeout = setTimeout(
                                () => {this._update({timedOut : !0})},
                                t.timeout))),
                      this._res.promise
                          .then(() => {this._update({}), this._clearTimeouts()})
                          .catch(
                              e => {this._update({}), this._clearTimeouts()}),
                      this._update({})
                }
                _update(e) {
                  this._state = {
                    ...this._state,
                    error : this._res.error,
                    loaded : this._res.loaded,
                    loading : this._res.loading,
                    ...e
                  },
                  this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                  clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() { return this._state }
                subscribe(e) {
                  return this._callbacks.add(e),
                         () => { this._callbacks.delete(e) }
                }
                constructor(e, t) {
                  this._loadFn = e, this._opts = t, this._callbacks = new Set,
                  this._delay = null, this._timeout = null, this.retry()
                }
              }
              function s(e) {
                return function(e, t) {
                  let n = Object.assign({
                    loader : null,
                    loading : null,
                    delay : 200,
                    timeout : null,
                    webpack : null,
                    modules : null
                  },
                                        t),
                      i = null;
                  function a() {
                    if (!i) {
                      let t = new u(e, n);
                      i = {
                        getCurrentValue : t.getCurrentValue.bind(t),
                        subscribe : t.subscribe.bind(t),
                        retry : t.retry.bind(t),
                        promise : t.promise.bind(t)
                      }
                    }
                    return i.promise()
                  }
                  if (!l) {
                    let e = n.webpack ? n.webpack() : n.modules;
                    e && c.push(t => {
                      for (let n of e)
                        if (t.includes(n))
                          return a()
                    })
                  }
                  function s(e, t) {
                    !function() {
                      a();
                      let e = r.default.useContext(o.LoadableContext);
                      e && Array.isArray(n.modules) &&
                          n.modules.forEach(t => {e(t)})
                    }();
                    let c = r.default.useSyncExternalStore(
                        i.subscribe, i.getCurrentValue, i.getCurrentValue);
                    return r.default.useImperativeHandle(
                               t, () => ({retry : i.retry}), []),
                           r.default.useMemo(() => {
                             var t;
                             return c.loading || c.error
                                        ? r.default.createElement(n.loading, {
                                            isLoading : c.loading,
                                            pastDelay : c.pastDelay,
                                            timedOut : c.timedOut,
                                            error : c.error,
                                            retry : i.retry
                                          })
                                    : c.loaded ? r.default.createElement(
                                                     (t = c.loaded) && t.default
                                                         ? t.default
                                                         : t,
                                                     e)
                                               : null
                           }, [ e, c ])
                  }
                  return s.preload = () => a(),
                         s.displayName = "LoadableComponent",
                         r.default.forwardRef(s)
                }(a, e)
              }
              function f(e, t) {
                let n = [];
                for (; e.length;) {
                  let r = e.pop();
                  n.push(r(t))
                }
                return Promise.all(n).then(() => {
                  if (e.length)
                    return f(e, t)
                })
              }
              s.preloadAll = () => new Promise((e, t) => {f(i).then(e, t)}),
              s.preloadReady = e =>
                  (void 0 === e && (e = []), new Promise(t => {
                     let n = () => (l = !0, t());
                     f(c, e).then(n, n)
                   })),
              window.__NEXT_PRELOADREADY = s.preloadReady;
              let d = s
            },
            7663 : function(e) {
              !function() {
                var t = {
                  229 : function(e) {
                    var t, n, r, o = e.exports = {};
                    function i() {
                      throw Error("setTimeout has not been defined")
                    }
                    function c() {
                      throw Error("clearTimeout has not been defined")
                    }
                    function l(e) {
                      if (t === setTimeout)
                        return setTimeout(e, 0);
                      if ((t === i || !t) && setTimeout)
                        return t = setTimeout, setTimeout(e, 0);
                      try {
                        return t(e, 0)
                      } catch (n) {
                        try {
                          return t.call(null, e, 0)
                        } catch (n) {
                          return t.call(this, e, 0)
                        }
                      }
                    }
                    !function() {
                      try {
                        t = "function" == typeof setTimeout ? setTimeout : i
                      } catch (e) {
                        t = i
                      }
                      try {
                        n = "function" == typeof clearTimeout ? clearTimeout : c
                      } catch (e) {
                        n = c
                      }
                    }();
                    var a = [], u = !1, s = -1;
                    function f() {
                      u && r &&
                          (u = !1, r.length ? a = r.concat(a) : s = -1,
                           a.length && d())
                    }
                    function d() {
                      if (!u) {
                        var e = l(f);
                        u = !0;
                        for (var t = a.length; t;) {
                          for (r = a, a = []; ++s < t;)
                            r && r[s].run();
                          s = -1, t = a.length
                        }
                        r = null, u = !1, function(e) {
                          if (n === clearTimeout)
                            return clearTimeout(e);
                          if ((n === c || !n) && clearTimeout)
                            return n = clearTimeout, clearTimeout(e);
                          try {
                            n(e)
                          } catch (t) {
                            try {
                              return n.call(null, e)
                            } catch (t) {
                              return n.call(this, e)
                            }
                          }
                        }(e)
                      }
                    }
                    function p(e, t) { this.fun = e, this.array = t }
                    function h() {}
                    o.nextTick =
                        function(e) {
                      var t = Array(arguments.length - 1);
                      if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++)
                          t[n - 1] = arguments[n];
                      a.push(new p(e, t)), 1 !== a.length || u || l(d)
                    },
                    p.prototype.run =
                        function() { this.fun.apply(null, this.array) },
                    o.title = "browser", o.browser = !0, o.env = {},
                    o.argv = [], o.version = "", o.versions = {}, o.on = h,
                    o.addListener = h, o.once = h, o.off = h,
                    o.removeListener = h, o.removeAllListeners = h, o.emit = h,
                    o.prependListener = h, o.prependOnceListener = h,
                    o.listeners = function(e) { return [] },
                    o.binding = function(
                        e) { throw Error("process.binding is not supported") },
                    o.cwd = function() { return "/" },
                    o.chdir = function(
                        e) { throw Error("process.chdir is not supported") },
                    o.umask = function() { return 0 }
                  }
                },
                    n = {};
                function r(e) {
                  var o = n[e];
                  if (void 0 !== o)
                    return o.exports;
                  var i = n[e] = {exports : {}}, c = !0;
                  try {
                    t[e](i, i.exports, r), c = !1
                  } finally {
                    c && delete n[e]
                  }
                  return i.exports
                }
                r.ab = "//";
                var o = r(229);
                e.exports = o
              }()
            },
            5152 : function(e, t, n) { e.exports = n(8864) },
            9008 : function(e, t, n) { e.exports = n(7828) },
            2703 : function(e, t, n) {
              "use strict";
              var r = n(414);
              function o() {}
              function i() {}
              i.resetWarningCache = o, e.exports = function() {
                function e(e, t, n, o, i, c) {
                  if (c !== r) {
                    var l = Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw l.name = "Invariant Violation", l
                  }
                }
                function t() { return e }
                e.isRequired = e;
                var n = {
                  array : e,
                  bigint : e,
                  bool : e,
                  func : e,
                  number : e,
                  object : e,
                  string : e,
                  symbol : e,
                  any : e,
                  arrayOf : t,
                  element : e,
                  elementType : e,
                  instanceOf : t,
                  node : e,
                  objectOf : t,
                  oneOf : t,
                  oneOfType : t,
                  shape : t,
                  exact : t,
                  checkPropTypes : i,
                  resetWarningCache : o
                };
                return n.PropTypes = n, n
              }
            },
            5697 : function(e, t, n) { e.exports = n(2703)() },
            414 : function(e) {
              "use strict";
              e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            3967 : function(e, t) {
              var n; /*!
Copyright (c) 2018 Jed Watson.
Licensed under the MIT License (MIT), see
http://jedwatson.github.io/classnames
*/
              !function() {
                "use strict";
                var r = {}.hasOwnProperty;
                function o() {
                  for (var e = "", t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    n &&
                        (e = i(e, function(e) {
                           if ("string" == typeof e || "number" == typeof e)
                             return e;
                           if ("object" != typeof e)
                             return "";
                           if (Array.isArray(e))
                             return o.apply(null, e);
                           if (e.toString !== Object.prototype.toString &&
                               !e.toString.toString().includes("[native code]"))
                             return e.toString();
                           var t = "";
                           for (var n in e)
                             r.call(e, n) && e[n] && (t = i(t, n));
                           return t
                         }(n)))
                  }
                  return e
                }
                function i(e, t) { return t ? e ? e + " " + t : e + t : e }
                e.exports
                    ? (o.default = o, e.exports = o)
                    : void 0 !== (n = (function() { return o }).apply(t, [])) &&
                          (e.exports = n)
              }()
            },
            4345 : function(e, t, n) {
              "use strict";
              function r() {}
              function o() {}
              n.d(t,
                  {ok : function() { return r }, t1 : function() { return o }})
            },
            7962 : function(e, t, n) {
              "use strict";
              n.d(t, {B : function() { return o }});
              let r = {};
              function o(e, t) {
                let n = t || r;
                return i(e,
                         "boolean" != typeof n.includeImageAlt ||
                             n.includeImageAlt,
                         "boolean" != typeof n.includeHtml || n.includeHtml)
              }
              function i(e, t, n) {
                if (e && "object" == typeof e) {
                  if ("value" in e)
                    return "html" !== e.type || n ? e.value : "";
                  if (t && "alt" in e && e.alt)
                    return e.alt;
                  if ("children" in e)
                    return c(e.children, t, n)
                }
                return Array.isArray(e) ? c(e, t, n) : ""
              }
              function c(e, t, n) {
                let r = [], o = -1;
                for (; ++o < e.length;)
                  r[o] = i(e[o], t, n);
                return r.join("")
              }
            },
            3402 : function(e, t, n) {
              "use strict";
              n.d(t, {w : function() { return i }});
              var r = n(2761), o = n(5459);
              let i = {
                tokenize : function(e, t, n) {
                  return function(t) {
                    return (0, o.xz)(t) ? (0, r.f)(e, i, "linePrefix")(t) : i(t)
                  };
                  function i(e) {
                    return null === e || (0, o.Ch)(e) ? t(e) : n(e)
                  }
                },
                partial : !0
              }
            },
            2761 : function(e, t, n) {
              "use strict";
              n.d(t, {f : function() { return o }});
              var r = n(5459);
              function o(e, t, n, o) {
                let i = o ? o - 1 : Number.POSITIVE_INFINITY, c = 0;
                return function(o) {
                  return (0, r.xz)(o) ? (e.enter(n), function o(l) {
                    return (0, r.xz)(l) && c++ < i ? (e.consume(l), o)
                                                   : (e.exit(n), t(l))
                  }(o)) : t(o)
                }
              }
            },
            5459 : function(e, t, n) {
              "use strict";
              n.d(t, {
                AF : function() { return a },
                Av : function() { return c },
                B8 : function() { return h },
                Ch : function() { return s },
                H$ : function() { return o },
                Xh : function() { return p },
                jv : function() { return r },
                n9 : function() { return i },
                pY : function() { return l },
                sR : function() { return u },
                xz : function() { return d },
                z3 : function() { return f }
              });
              let r = m(/[A-Za-z]/), o = m(/[\dA-Za-z]/),
                  i = m(/[#-'*+\--9=?A-Z^-~]/);
              function c(e) { return null !== e && (e < 32 || 127 === e) }
              let l = m(/\d/), a = m(/[\dA-Fa-f]/), u = m(/[!-/:-@[-`{-~]/);
              function s(e) { return null !== e && e < -2 }
              function f(e) { return null !== e && (e < 0 || 32 === e) }
              function d(e) { return -2 === e || -1 === e || 32 === e }
              let p = m(/\p{P}|\p{S}/u), h = m(/\s/);
              function m(e) {
                return function(t) {
                  return null !== t && t > -1 && e.test(String.fromCharCode(t))
                }
              }
            },
            1905 : function(e, t, n) {
              "use strict";
              function r(e, t, n, r) {
                let o;
                let i = e.length, c = 0;
                if (t = t < 0   ? -t > i ? 0 : i + t
                        : t > i ? i
                                : t,
                    n = n > 0 ? n : 0, r.length < 1e4)
                  (o = Array.from(r)).unshift(t, n), e.splice(...o);
                else
                  for (n && e.splice(t, n); c < r.length;)
                    (o = r.slice(c, c + 1e4)).unshift(t, 0), e.splice(...o),
                        c += 1e4, t += 1e4
              }
              function o(e, t) {
                return e.length > 0 ? (r(e, e.length, 0, t), e) : t
              }
              n.d(t, {V : function() { return o }, d : function() { return r }})
            },
            2987 : function(e, t, n) {
              "use strict";
              n.d(t, {r : function() { return o }});
              var r = n(5459);
              function o(e) {
                return null === e || (0, r.z3)(e) || (0, r.B8)(e) ? 1
                       : (0, r.Xh)(e)                             ? 2
                                                                  : void 0
              }
            },
            4663 : function(e, t, n) {
              "use strict";
              n.d(t, {W : function() { return i }});
              var r = n(1905);
              let o = {}.hasOwnProperty;
              function i(e) {
                let t = {}, n = -1;
                for (; ++n < e.length;)
                  !function(e, t) {
                    let n;
                    for (n in t) {
                      let i;
                      let c = (o.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                          l = t[n];
                      if (l)
                        for (i in l) {
                          o.call(c, i) || (c[i] = []);
                          let e = l[i];
                          !function(e, t) {
                            let n = -1, o = [];
                            for (; ++n < t.length;)
                              ("after" === t[n].add ? e : o).push(t[n]);
                            (0, r.d)(e, 0, 0, o)
                          }(c[i], Array.isArray(e) ? e
                                  : e              ? [ e ]
                                                   : [])
                        }
                    }
                  }(t, e[n]);
                return t
              }
            },
            1098 : function(e, t, n) {
              "use strict";
              function r(e) {
                return e.replace(/[\t\n\r ]+/g, " ")
                    .replace(/^ | $/g, "")
                    .toLowerCase()
                    .toUpperCase()
              }
              n.d(t, {d : function() { return r }})
            },
            3233 : function(e, t, n) {
              "use strict";
              function r(e, t, n) {
                let r = [], o = -1;
                for (; ++o < e.length;) {
                  let i = e[o].resolveAll;
                  i && !r.includes(i) && (t = i(t, n), r.push(i))
                }
                return t
              }
              n.d(t, {C : function() { return r }})
            },
            5955 : function(e, t, n) {
              "use strict";
              n.d(t, {w_ : function() { return s }});
              var r = n(7294), o = {
                color : void 0,
                size : void 0,
                className : void 0,
                style : void 0,
                attr : void 0
              },
                  i = r.createContext && r.createContext(o),
                  c = [ "attr", "size", "title" ];
              function l() {
                return (l = Object.assign ? Object.assign.bind() : function(e) {
                         for (var t = 1; t < arguments.length; t++) {
                           var n = arguments[t];
                           for (var r in n)
                             Object.prototype.hasOwnProperty.call(n, r) &&
                                 (e[r] = n[r])
                         }
                         return e
                       }).apply(this, arguments)
              }
              function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                  })),
                      n.push.apply(n, r)
                }
                return n
              }
              function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? a(Object(n), !0).forEach(function(t) {
                    var r, o;
                    r = t, o = n[t],
                    (r =
                         function(e) {
                           var t = function(e, t) {
                             if ("object" != typeof e || !e)
                               return e;
                             var n = e[Symbol.toPrimitive];
                             if (void 0 !== n) {
                               var r = n.call(e, t || "default");
                               if ("object" != typeof r)
                                 return r;
                               throw TypeError(
                                   "@@toPrimitive must return a primitive value.")
                             }
                             return ("string" === t ? String : Number)(e)
                           }(e, "string");
                           return "symbol" == typeof t ? t : t + ""
                         }(r)) in e
                        ? Object.defineProperty(e, r, {
                            value : o,
                            enumerable : !0,
                            configurable : !0,
                            writable : !0
                          })
                        : e[r] = o
                  })
                  : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                            e, Object.getOwnPropertyDescriptors(n))
                        : a(Object(n)).forEach(function(t) {
                          Object.defineProperty(
                              e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                }
                return e
              }
              function s(e) {
                return t => r.createElement(
                           f, l({attr : u({}, e.attr)}, t), function e(t) {
                             return t && t.map((t, n) => r.createElement(
                                                   t.tag, u({key : n}, t.attr),
                                                   e(t.child)))
                           }(e.child))
              }
              function f(e) {
                var t = t => {
                  var n,
                      {attr : o, size : i, title : a} = e, s = function(e, t) {
                        if (null == e)
                          return {};
                        var n, r, o = function(e, t) {
                          if (null == e)
                            return {};
                          var n = {};
                          for (var r in e)
                            if (Object.prototype.hasOwnProperty.call(e, r)) {
                              if (t.indexOf(r) >= 0)
                                continue;
                              n[r] = e[r]
                            }
                          return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          for (r = 0; r < i.length; r++)
                            n = i[r],
                            !(t.indexOf(n) >= 0) &&
                                Object.prototype.propertyIsEnumerable.call(e,
                                                                           n) &&
                                (o[n] = e[n])
                        }
                        return o
                      }(e, c), f = i || t.size || "1em";
                  return t.className && (n = t.className),
                         e.className && (n = (n ? n + " " : "") + e.className),
                         r.createElement(
                             "svg",
                             l({
                               stroke : "currentColor",
                               fill : "currentColor",
                               strokeWidth : "0"
                             },
                               t.attr, o, s, {
                                 className : n,
                                 style :
                                     u(u({color : e.color || t.color}, t.style),
                                       e.style),
                                 height : f,
                                 width : f,
                                 xmlns : "http://www.w3.org/2000/svg"
                               }),
                             a && r.createElement("title", null, a), e.children)
                };
                return void 0 !== i
                           ? r.createElement(i.Consumer, null, e => t(e))
                           : t(o)
              }
            },
            8258 : function(e, t, n) {
              "use strict";
              n.d(t, {
                Dk : function() { return D },
                LQ : function() { return b },
                N0 : function() { return R },
                Vq : function() { return S },
                cG : function() { return _ },
                pA : function() { return T },
                r2 : function() { return P },
                ud : function() { return A }
              });
              var r = n(5893), o = n(7294), i = n(3967), c = n(365),
                  l = Object.defineProperty, a = Object.defineProperties,
                  u = Object.getOwnPropertyDescriptors,
                  s = Object.getOwnPropertySymbols,
                  f = Object.prototype.hasOwnProperty,
                  d = Object.prototype.propertyIsEnumerable,
                  p = (e, t, n) => t in e ? l(e, t, {
                    enumerable : !0,
                    configurable : !0,
                    writable : !0,
                    value : n
                  })
                                          : e[t] = n,
                  h = (e, t) => {
                    for (var n in t || (t = {}))
                      f.call(t, n) && p(e, n, t[n]);
                    if (s)
                      for (var n of s(t))
                        d.call(t, n) && p(e, n, t[n]);
                    return e
                  }, m = (e, t) => a(e, u(t)), g = (e, t) => {
                    var n = {};
                    for (var r in e)
                      f.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && s)
                      for (var r of s(e))
                        0 > t.indexOf(r) && d.call(e, r) && (n[r] = e[r]);
                    return n
                  };
              function y(e) {
                return t => {
                  var {
                    bgStyle : n = {},
                    borderRadius : o = 0,
                    iconFillColor : i = "white",
                    round : c = !1,
                    size : l = 64
                  } = t,
                a = g(t, [
                      "bgStyle", "borderRadius", "iconFillColor", "round",
                      "size"
                ]);
                  return (0, r.jsxs)(
                      "svg",
                      m(h({viewBox : "0 0 64 64", width : l, height : l}, a), {
                        children : [
                          c ? (0, r.jsx)("circle", {
                            cx : "32",
                            cy : "32",
                            r : "32",
                            fill : e.color,
                            style : n
                          })
                            : (0, r.jsx)("rect", {
                                width : "64",
                                height : "64",
                                rx : o,
                                ry : o,
                                fill : e.color,
                                style : n
                              }),
                          (0, r.jsx)("path", {d : e.path, fill : i})
                        ]
                      }))
                }
              }
              let b = y({
                color : "#7f7f7f",
                networkName : "email",
                path :
                    "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
              });
              function w(e) {
                let t = Object.entries(e)
                            .filter(([, e ]) => null != e)
                            .map(([ e, t ]) => `${encodeURIComponent(e)}=${
                                     encodeURIComponent(String(t))}`);
                return t.length > 0 ? `?${t.join("&")}` : ""
              }
              let v = e => !!e &&
                           ("object" == typeof e || "function" == typeof e) &&
                           "function" == typeof e.then,
                  C = (e, t) => ({
                    left : window.outerWidth / 2 +
                               (window.screenX || window.screenLeft || 0) -
                               e / 2,
                    top : window.outerHeight / 2 +
                              (window.screenY || window.screenTop || 0) - t / 2
                  }),
                  k = (e, t) => ({
                    top : (window.screen.height - t) / 2,
                    left : (window.screen.width - e) / 2
                  });
              function O(e) {
                var {
                  beforeOnClick : t,
                  children : n,
                  className : o,
                  disabled : c,
                  disabledStyle : l = {opacity : .6},
                  forwardedRef : a,
                  htmlTitle : u,
                  networkLink : s,
                  networkName : f,
                  onClick : d,
                  onShareWindowClose : p,
                  openShareDialogOnClick : y = !0,
                  opts : b,
                  resetButtonStyle : w = !0,
                  style : O,
                  url : x,
                  windowHeight : _ = 400,
                  windowPosition : S = "windowCenter",
                  windowWidth : E = 550
                } = e,
             j = g(e, [
               "beforeOnClick", "children", "className", "disabled",
               "disabledStyle", "forwardedRef", "htmlTitle", "networkLink",
               "networkName", "onClick", "onShareWindowClose",
               "openShareDialogOnClick", "opts", "resetButtonStyle", "style",
               "url", "windowHeight", "windowPosition", "windowWidth"
             ]);
                let D =
                    async e => {
                  let n = s(x, b);
                  if (!c) {
                    if (e.preventDefault(), t) {
                      let e = t();
                      v(e) && await e
                    }
                    y &&
                        function(e, t, n) {
                          var {height : r, width : o} = t;
                          let i = h({
                            height : r,
                            width : o,
                            location : "no",
                            toolbar : "no",
                            status : "no",
                            directories : "no",
                            menubar : "no",
                            scrollbars : "yes",
                            resizable : "no",
                            centerscreen : "yes",
                            chrome : "yes"
                          },
                                    g(t, [ "height", "width" ])),
                              c = window.open(e, "",
                                              Object.keys(i)
                                                  .map(e => `${e}=${i[e]}`)
                                                  .join(", "));
                          if (n) {
                            let e = window.setInterval(() => {
                              try {
                                (null === c || c.closed) &&
                                    (window.clearInterval(e), n(c))
                              } catch (e) {
                                console.error(e)
                              }
                            }, 1e3)
                          }
                        }(n,
                          h({height : _, width : E},
                            "windowCenter" === S ? C(E, _) : k(E, _)),
                          p),
                        d && d(e, n)
                  }
                },
                    M = i("react-share__ShareButton", {
                      "react-share__ShareButton--disabled" : !!c,
                      disabled : !!c
                    },
                          o),
                    I = w ? h(h({
                                backgroundColor : "transparent",
                                border : "none",
                                padding : 0,
                                font : "inherit",
                                color : "inherit",
                                cursor : "pointer"
                              },
                                O),
                              c && l)
                          : h(h({}, O), c && l);
                return (0, r.jsx)("button", m(h({}, j), {
                                    className : M,
                                    onClick : D,
                                    ref : a,
                                    style : I,
                                    title : u,
                                    children : n
                                  }))
              }
              function x(e, t, n, i) {
                function c(o, c) {
                  let l = n(o), a = h({}, o);
                  return Object.keys(l).forEach(e => {delete a[e]}),
                         (0, r.jsx)(O, m(h(h({}, i), a), {
                                      forwardedRef : c,
                                      networkName : e,
                                      networkLink : t,
                                      opts : n(o)
                                    }))
                }
                return c.displayName = `ShareButton-${e}`, (0, o.forwardRef)(c)
              }
              let _ = x("email",
                        function(e, {subject : t, body : n, separator : r}) {
                          return "mailto:" +
                                 w({subject : t, body : n ? n + r + e : e})
                        },
                        e => ({
                          subject : e.subject,
                          body : e.body,
                          separator : e.separator || " "
                        }),
                        {
                          openShareDialogOnClick : !1,
                          onClick : (e, t) => { window.location.href = t }
                        }),
                  S = y({
                    color : "#0965FE",
                    networkName : "facebook",
                    path :
                        "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                  });
              y({
                color : "#0A7CFF",
                networkName : "facebookmessenger",
                path :
                    "M 53.066406 21.871094 C 52.667969 21.339844 51.941406 21.179688 51.359375 21.496094 L 37.492188 29.058594 L 28.867188 21.660156 C 28.339844 21.207031 27.550781 21.238281 27.054688 21.730469 L 11.058594 37.726562 C 10.539062 38.25 10.542969 39.09375 11.0625 39.613281 C 11.480469 40.027344 12.121094 40.121094 12.640625 39.839844 L 26.503906 32.28125 L 35.136719 39.679688 C 35.667969 40.132812 36.457031 40.101562 36.949219 39.609375 L 52.949219 23.613281 C 53.414062 23.140625 53.464844 22.398438 53.066406 21.871094 Z M 53.066406 21.871094"
              }),
                  x("facebookmessenger",
                    function(e, {appId : t, redirectUri : n, to : r}) {
                      return "https://www.facebook.com/dialog/send" + w({
                               link : e,
                               redirect_uri : n || e,
                               app_id : t,
                               to : r
                             })
                    },
                    e => ({
                      appId : e.appId,
                      redirectUri : e.redirectUri,
                      to : e.to
                    }),
                    {windowWidth : 1e3, windowHeight : 820});
              class E extends Error {
                constructor(e) { super(e), this.name = "AssertionError" }
              }
              function j(e, t) {
                if (!e)
                  throw new E(t)
              }
              let D = x("facebook",
                        function(e, {hashtag : t}) {
                          return j(e, "facebook.url"),
                                 "https://www.facebook.com/sharer/sharer.php" +
                                     w({u : e, hashtag : t})
                        },
                        e => ({hashtag : e.hashtag}),
                        {windowWidth : 550, windowHeight : 400});
              function M(e) {
                var {
                  children : t = e => e,
                  className : n,
                  getCount : c,
                  url : l
                } = e,
               a = g(e, [ "children", "className", "getCount", "url" ]);
                let u =
                        function() {
                  let e = (0, o.useRef)(!1);
                  return (0, o.useEffect)(
                             () => (e.current = !0, () => {e.current = !1}),
                             []),
                         (0, o.useCallback)(() => e.current, [])
                }(),
                    [ s, f ] = (0, o.useState)(void 0),
                    [ d, p ] = (0, o.useState)(!1);
                return (0, o.useEffect)(
                           () => {p(!0), c(l, e => {u() && (f(e), p(!1))})},
                           [ l ]),
                       (0, r.jsx)(
                           "span",
                           m(h({className : i("react-share__ShareCount", n)},
                               a),
                             {children : !d && void 0 !== s && t(s)}))
              }
              function I(e) {
                let t = t => (0, r.jsx)(M, h({getCount : e}, t));
                return t.displayName = `ShareCount(${e.name})`, t
              }
              I(function(e, t) {
                c(`https://graph.facebook.com/?id=${
                      e}&fields=og_object{engagement}`,
                  (e, n) => {t(!e && n && n.og_object && n.og_object.engagement
                                   ? n.og_object.engagement.count
                                   : void 0)})
              }),
                  y({
                    color : "#009ad9",
                    networkName : "hatena",
                    path :
                        "M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 "
                  }),
                  x("hatena",
                    function(e, {title : t}) {
                      return j(e, "hatena.url"),
                             `http://b.hatena.ne.jp/add?mode=confirm&url=${
                                 e}&title=${t}`
                    },
                    e => ({title : e.title}), {
                      windowWidth : 660,
                      windowHeight : 460,
                      windowPosition : "windowCenter"
                    }),
                  I(function(e, t) {
                    c("https://bookmark.hatenaapis.com/count/entry" +
                          w({url : e}),
                      (e, n) => {t(null != n ? n : void 0)})
                  }),
                  y({
                    color : "#1F1F1F",
                    networkName : "instapaper",
                    path :
                        "M35.688 43.012c0 2.425.361 2.785 3.912 3.056V48H24.401v-1.932c3.555-.27 3.912-.63 3.912-3.056V20.944c0-2.379-.36-2.785-3.912-3.056V16H39.6v1.888c-3.55.27-3.912.675-3.912 3.056v22.068h.001z"
                  }),
                  x("instapaper",
                    function(e, {title : t, description : n}) {
                      return j(e, "instapaper.url"),
                             "http://www.instapaper.com/hello2" +
                                 w({url : e, title : t, description : n})
                    },
                    e => ({title : e.title, description : e.description}), {
                      windowWidth : 500,
                      windowHeight : 500,
                      windowPosition : "windowCenter"
                    }),
                  y({
                    color : "#00b800",
                    networkName : "line",
                    path :
                        "M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"
                  }),
                  x("line",
                    function(e, {title : t}) {
                      return j(e, "line.url"),
                             "https://social-plugins.line.me/lineit/share" +
                                 w({url : e, text : t})
                    },
                    e => ({title : e.title}),
                    {windowWidth : 500, windowHeight : 500});
              let T = y({
                color : "#0077B5",
                networkName : "linkedin",
                path :
                    "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
              }),
                  P = x("linkedin",
                        function(e, {title : t, summary : n, source : r}) {
                          return j(e, "linkedin.url"),
                                 "https://linkedin.com/shareArticle" + w({
                                   url : e,
                                   mini : "true",
                                   title : t,
                                   summary : n,
                                   source : r
                                 })
                        },
                        ({title : e, summary : t, source : n}) =>
                            ({title : e, summary : t, source : n}),
                        {windowWidth : 750, windowHeight : 600});
              y({
                color : "#21A5D8",
                networkName : "livejournal",
                path :
                    "M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z"
              }),
                  x("livejournal",
                    function(e, {title : t, description : n}) {
                      return j(e, "livejournal.url"),
                             "https://www.livejournal.com/update.bml" +
                                 w({subject : t, event : n})
                    },
                    e => ({title : e.title, description : e.description}),
                    {windowWidth : 660, windowHeight : 460}),
                  y({
                    color : "#168DE2",
                    networkName : "mailru",
                    path :
                        "M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z"
                  }),
                  x("mailru",
                    function(e, {title : t, description : n, imageUrl : r}) {
                      return j(e, "mailru.url"),
                             "https://connect.mail.ru/share" + w({
                               url : e,
                               title : t,
                               description : n,
                               image_url : r
                             })
                    },
                    e => ({
                      title : e.title,
                      description : e.description,
                      imageUrl : e.imageUrl
                    }),
                    {windowWidth : 660, windowHeight : 460}),
                  y({
                    color : "#F97400",
                    networkName : "ok",
                    path :
                        "M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z "
                  }),
                  x("ok",
                    function(e, {title : t, description : n, image : r}) {
                      return j(e, "ok.url"), "https://connect.ok.ru/offer" + w({
                                               url : e,
                                               title : t,
                                               description : n,
                                               imageUrl : r
                                             })
                    },
                    e => ({
                      title : e.title,
                      description : e.description,
                      image : e.image
                    }),
                    {
                      windowWidth : 588,
                      windowHeight : 480,
                      windowPosition : "screenCenter"
                    }),
                  I(function(e, t) {
                    window.OK || (window.OK = {
                      Share : {
                        count : function(e, t) {
                          var n, r;
                          null == (r = (n = window.OK.callbacks)[e]) ||
                              r.call(n, t)
                        }
                      },
                      callbacks : []
                    });
                    let n = window.OK.callbacks.length;
                    return window.ODKL = {
                      updateCount(e, t) {
                        var n, r;
                        let o =
                            "" === e
                                ? 0
                                : parseInt(e.replace("react-share-", ""), 10);
                        null == (r = (n = window.OK.callbacks)[o]) ||
                            r.call(n, "" === t ? void 0 : parseInt(t, 10))
                      }
                    },
                           window.OK.callbacks.push(t),
                           c("https://connect.ok.ru/dk" + w({
                               "st.cmd" : "extLike",
                               uid : `react-share-${n}`,
                               ref : e
                             }))
                  }),
                  y({
                    color : "#E60023",
                    networkName : "pinterest",
                    path :
                        "M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"
                  }),
                  x("pinterest",
                    function(e, {media : t, description : n, pinId : r}) {
                      return r ? `https://pinterest.com/pin/${r}/repin/x/`
                               : (j(e, "pinterest.url"),
                                  j(t, "pinterest.media"),
                                  "https://pinterest.com/pin/create/button/" +
                                      w({url : e, media : t, description : n}))
                    },
                    e => ({
                      media : e.media,
                      description : e.description,
                      pinId : e.pinId
                    }),
                    {windowWidth : 1e3, windowHeight : 730}),
                  I(function(e, t) {
                    c("https://api.pinterest.com/v1/urls/count.json" +
                          w({url : e}),
                      (e, n) => {t(n ? n.count : void 0)})
                  }),
                  y({
                    color : "#EF3F56",
                    networkName : "pocket",
                    path :
                        "M41.084 29.065l-7.528 7.882a2.104 2.104 0 0 1-1.521.666 2.106 2.106 0 0 1-1.522-.666l-7.528-7.882c-.876-.914-.902-2.43-.065-3.384.84-.955 2.228-.987 3.1-.072l6.015 6.286 6.022-6.286c.88-.918 2.263-.883 3.102.071.841.938.82 2.465-.06 3.383l-.015.002zm6.777-10.976C47.463 16.84 46.361 16 45.14 16H18.905c-1.2 0-2.289.82-2.716 2.044-.125.363-.189.743-.189 1.125v10.539l.112 2.096c.464 4.766 2.73 8.933 6.243 11.838.06.053.125.102.19.153l.04.033c1.882 1.499 3.986 2.514 6.259 3.014a14.662 14.662 0 0 0 6.13.052c.118-.042.235-.065.353-.087.03 0 .065-.022.098-.042a15.395 15.395 0 0 0 6.011-2.945l.039-.045.18-.153c3.502-2.902 5.765-7.072 6.248-11.852L48 29.674v-10.52c0-.366-.041-.728-.161-1.08l.022.015z"
                  }),
                  x("pocket",
                    function(e, {title : t}) {
                      return j(e, "pocket.url"), "https://getpocket.com/save" +
                                                     w({url : e, title : t})
                    },
                    e => ({title : e.title}),
                    {windowWidth : 500, windowHeight : 500}),
                  y({
                    color : "#FF5700",
                    networkName : "reddit",
                    path :
                        "M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344"
                  }),
                  x("reddit",
                    function(e, {title : t}) {
                      return j(e, "reddit.url"),
                             "https://www.reddit.com/submit" +
                                 w({url : e, title : t})
                    },
                    e => ({title : e.title}), {
                      windowWidth : 660,
                      windowHeight : 460,
                      windowPosition : "windowCenter"
                    }),
                  x("gab",
                    function(e, {title : t}) {
                      return j(e, "gab.url"),
                             "https://gab.com/compose" + w({url : e, text : t})
                    },
                    e => ({title : e.title}), {
                      windowWidth : 660,
                      windowHeight : 640,
                      windowPosition : "windowCenter"
                    }),
                  y({
                    color : "#00d178",
                    networkName : "gab",
                    path :
                        "m17.0506,23.97457l5.18518,0l0,14.23933c0,6.82699 -3.72695,10.09328 -9.33471,10.09328c-2.55969,0 -4.82842,-0.87286 -6.22084,-2.0713l2.07477,-3.88283c1.19844,0.81051 2.33108,1.29543 3.85511,1.29543c2.75366,0 4.44049,-1.97432 4.44049,-4.82149l0,-0.87286c-1.16728,1.39242 -2.81947,2.0713 -4.63446,2.0713c-4.44048,0 -7.81068,-3.68885 -7.81068,-8.28521c0,-4.59289 3.37019,-8.28174 7.81068,-8.28174c1.81499,0 3.46718,0.67888 4.63446,2.0713l0,-1.55521zm-3.62997,11.39217c1.97777,0 3.62997,-1.6522 3.62997,-3.62652c0,-1.97432 -1.6522,-3.62305 -3.62997,-3.62305c-1.97778,0 -3.62997,1.64873 -3.62997,3.62305c0,1.97432 1.65219,3.62652 3.62997,3.62652zm25.7077,4.13913l-5.18518,0l0,-1.29197c-1.00448,1.13264 -2.3969,1.81152 -4.21188,1.81152c-3.62997,0 -5.63893,-2.52504 -5.63893,-5.4034c0,-4.27076 5.251,-5.85715 9.78846,-4.49937c-0.09698,-1.39241 -0.9733,-2.39343 -2.78829,-2.39343c-1.26426,0 -2.72248,0.48492 -3.62997,1.00102l-1.5552,-3.72003c1.19844,-0.77587 3.40136,-1.55174 5.96452,-1.55174c3.78931,0 7.25648,2.13365 7.25648,7.95962l0,8.08777zm-5.18518,-6.14809c-2.42806,-0.77587 -4.66563,-0.3533 -4.66563,1.36124c0,1.00101 0.84168,1.6799 1.84616,1.6799c1.20191,0 2.56315,-0.96984 2.81947,-3.04115zm13.00626,-17.66495l0,9.83695c1.16727,-1.39242 2.81946,-2.0713 4.63445,-2.0713c4.44048,0 7.81068,3.68885 7.81068,8.28174c0,4.59636 -3.37019,8.28521 -7.81068,8.28521c-1.81499,0 -3.46718,-0.67888 -4.63445,-2.0713l0,1.55174l-5.18519,0l0,-23.81304l5.18519,0zm3.62997,19.67391c1.97777,0 3.62997,-1.6522 3.62997,-3.62652c0,-1.97432 -1.6522,-3.62305 -3.62997,-3.62305c-1.97778,0 -3.62997,1.64873 -3.62997,3.62305c0,1.97432 1.65219,3.62652 3.62997,3.62652zm0,0"
                  }),
                  I(function(e, t) {
                    c(`https://www.reddit.com/api/info.json?limit=1&url=${e}`,
                      {param : "jsonp"},
                      (e, n) => {t(!e && n && n.data &&
                                           n.data.children.length > 0 &&
                                           n.data.children[0].data.score
                                       ? n.data.children[0].data.score
                                       : void 0)})
                  }),
                  y({
                    color : "#25A3E3",
                    networkName : "telegram",
                    path :
                        "m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"
                  }),
                  x("telegram",
                    function(e, {title : t}) {
                      return j(e, "telegram.url"),
                             "https://telegram.me/share/url" +
                                 w({url : e, text : t})
                    },
                    e => ({title : e.title}),
                    {windowWidth : 550, windowHeight : 400}),
                  y({
                    color : "#34526f",
                    networkName : "tumblr",
                    path :
                        "M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z"
                  }),
                  x("tumblr",
                    function(e,
                             {title : t, caption : n, tags : r, posttype : o}) {
                      return j(e, "tumblr.url"),
                             "https://www.tumblr.com/widgets/share/tool" + w({
                               canonicalUrl : e,
                               title : t,
                               caption : n,
                               tags : r,
                               posttype : o
                             })
                    },
                    e => ({
                      title : e.title,
                      tags : (e.tags || []).join(","),
                      caption : e.caption,
                      posttype : e.posttype || "link"
                    }),
                    {windowWidth : 660, windowHeight : 460}),
                  I(function(e, t) {
                    return c(
                        "https://api.tumblr.com/v2/share/stats" + w({url : e}),
                        (e,
                         n) => {t(!e && n && n.response ? n.response.note_count
                                                        : void 0)})
                  }),
                  y({
                    color : "#00aced",
                    networkName : "twitter",
                    path :
                        "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                  }),
                  x("twitter",
                    function(e, {
                      title : t,
                      via : n,
                      hashtags : r = [],
                      related : o = []
                    }) {
                      return j(e, "twitter.url"),
                             j(Array.isArray(r),
                               "twitter.hashtags is not an array"),
                             j(Array.isArray(o),
                               "twitter.related is not an array"),
                             "https://twitter.com/intent/tweet" + w({
                               url : e,
                               text : t,
                               via : n,
                               hashtags : r.length > 0 ? r.join(",") : void 0,
                               related : o.length > 0 ? o.join(",") : void 0
                             })
                    },
                    e => ({
                      hashtags : e.hashtags,
                      title : e.title,
                      via : e.via,
                      related : e.related
                    }),
                    {windowWidth : 550, windowHeight : 400}),
                  y({
                    color : "#7360f2",
                    networkName : "viber",
                    path :
                        "m31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z"
                  }),
                  x("viber",
                    function(e, {title : t, separator : n}) {
                      return j(e, "viber.url"),
                             "viber://forward" + w({text : t ? t + n + e : e})
                    },
                    e => ({title : e.title, separator : e.separator || " "}),
                    {windowWidth : 660, windowHeight : 460}),
                  y({
                    color : "#4C75A3",
                    networkName : "vk",
                    path :
                        "M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z"
                  }),
                  x("vk",
                    function(
                        e, {title : t, image : n, noParse : r, noVkLinks : o}) {
                      return j(e, "vk.url"), "https://vk.com/share.php" + w({
                                               url : e,
                                               title : t,
                                               image : n,
                                               noparse : r ? 1 : 0,
                                               no_vk_links : o ? 1 : 0
                                             })
                    },
                    e => ({
                      title : e.title,
                      image : e.image,
                      noParse : e.noParse,
                      noVkLinks : e.noVkLinks
                    }),
                    {windowWidth : 660, windowHeight : 460}),
                  I(function(e, t) {
                    window.VK || (window.VK = {}), window.VK.Share = {
                      count : (e, t) => {
                        var n, r;
                        return null == (r = null == (n = window.VK.callbacks)
                                                ? void 0
                                                : n[e])
                                   ? void 0
                                   : r.call(n, t)
                      }
                    },
                                                   window.VK.callbacks = [];
                    let n = window.VK.callbacks.length;
                    return window.VK.callbacks.push(t),
                           c("https://vk.com/share.php" +
                             w({act : "count", index : n, url : e}))
                  }),
                  y({
                    color : "#DF2029",
                    networkName : "weibo",
                    path :
                        "M40.9756152,15.0217119 C40.5000732,15.0546301 39.9999314,15.1204666 39.5325878,15.2192213 C38.6634928,15.4085016 38.0977589,16.2643757 38.2863368,17.1284787 C38.4667163,18.0008129 39.3194143,18.5686519 40.1885094,18.3793715 C42.8613908,17.8115326 45.7720411,18.6427174 47.7316073,20.8153207 C49.6911735,22.996153 50.2077122,25.975254 49.3714112,28.5840234 C49.1008441,29.4316684 49.5763861,30.3533789 50.4208857,30.6249537 C51.2653852,30.8965286 52.1754769,30.4192153 52.4542425,29.5715703 C53.6349013,25.9011885 52.9133876,21.7699494 50.1585171,18.7085538 C48.0923641,16.4042776 45.2063093,15.1533848 42.3530505,15.0217119 C41.8775084,14.9970227 41.4511594,14.9887937 40.9756152,15.0217119 Z M27.9227762,19.8277737 C24.9957268,20.140498 20.863421,22.4365431 17.2312548,26.0822378 C13.2711279,30.0571148 11,34.2871065 11,37.9328012 C11,44.9032373 19.8713401,49.125 28.5786978,49.125 C39.9917329,49.125 47.600423,42.4261409 47.600423,37.1427636 C47.600423,33.9496952 44.9603397,32.1638816 42.549827,31.4149913 C41.9594976,31.2339421 41.5167516,31.1434164 41.8283133,30.3616079 C42.5006339,28.66632 42.6236176,27.1932286 41.8939054,26.1480742 C40.5328692,24.1894405 36.7203236,24.2881952 32.448635,26.0822378 C32.448635,26.0822378 31.1203949,26.6912261 31.4647526,25.6213825 C32.1206742,23.4981576 32.0304845,21.712342 31.0056075,20.6836478 C30.2840938,19.9512176 29.2510184,19.6878718 27.9227762,19.8277737 Z M42.0906819,20.6836478 C41.6233383,20.6589586 41.1723917,20.716566 40.7132466,20.8153207 C39.9671353,20.9716828 39.4997917,21.7781784 39.6637721,22.5270687 C39.8277525,23.275959 40.5574647,23.7450433 41.303576,23.5804521 C42.1972686,23.3911718 43.2057485,23.6380596 43.8616701,24.3704897 C44.5175916,25.1029198 44.6733735,26.0657797 44.3864073,26.9381118 C44.1486363,27.6705419 44.5093932,28.4770397 45.2391054,28.7156963 C45.9688176,28.9461239 46.780521,28.5922524 47.0100936,27.8598223 C47.584026,26.0740087 47.2396661,24.0248493 45.8950269,22.5270687 C44.886547,21.4078489 43.4845162,20.7494842 42.0906819,20.6836478 Z M29.496988,29.9665891 C35.3100922,30.1723275 39.9917329,33.0691319 40.3852858,37.0769272 C40.8362324,41.6607904 35.5970585,45.9319315 28.6442899,46.6232144 C21.6915214,47.3144973 15.6488446,44.154347 15.197898,39.5787128 C14.7469514,34.9948495 20.059916,30.7237084 27.004486,30.0324256 C27.8735831,29.950131 28.6688875,29.9336709 29.496988,29.9665891 Z M25.5614586,34.3776322 C23.183744,34.5916017 20.9372116,35.9577073 19.9205332,37.9328012 C18.5348994,40.6238672 19.9041362,43.6029661 23.0689567,44.582284 C26.340366,45.5945202 30.1857056,44.0638213 31.5303448,41.1587879 C32.8503864,38.3195909 31.1613894,35.3734082 27.9227762,34.5751416 C27.1438688,34.3776322 26.356763,34.3035667 25.5614586,34.3776322 Z M24.052839,38.7228388 C24.3316067,38.7310678 24.5857748,38.8215935 24.8399449,38.9203482 C25.8648218,39.3400561 26.1845841,40.4428158 25.5614586,41.4221338 C24.9219361,42.3932227 23.5690963,42.8623069 22.5442194,42.4096807 C21.5357395,41.9652856 21.2487754,40.8542948 21.8882979,39.9078951 C22.3638421,39.2001542 23.2247386,38.7146097 24.052839,38.7228388 Z"
                  }),
                  x("weibo", function(e, {title : t, image : n}) {
                    return j(e, "weibo.url"),
                           "http://service.weibo.com/share/share.php" +
                               w({url : e, title : t, pic : n})
                  }, e => ({title : e.title, image : e.image}), {
                    windowWidth : 660,
                    windowHeight : 550,
                    windowPosition : "screenCenter"
                  });
              let A = y({
                color : "#25D366",
                networkName : "whatsapp",
                path :
                    "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
              }),
                  R = x("whatsapp",
                        function(e, {title : t, separator : n}) {
                          return j(e, "whatsapp.url"),
                                 "https://" +
                                     (/(android|iphone|ipad|mobile)/i.test(
                                          navigator.userAgent)
                                          ? "api"
                                          : "web") +
                                     ".whatsapp.com/send" +
                                     w({text : t ? t + n + e : e})
                        },
                        e =>
                            ({title : e.title, separator : e.separator || " "}),
                        {windowWidth : 550, windowHeight : 400});
              y({
                color : "#4326c4",
                networkName : "workplace",
                path :
                    "M34.019,10.292c0.21,0.017,0.423,0.034,0.636,0.049 c3.657,0.262,6.976,1.464,9.929,3.635c3.331,2.448,5.635,5.65,6.914,9.584c0.699,2.152,0.983,4.365,0.885,6.623 c-0.136,3.171-1.008,6.13-2.619,8.867c-0.442,0.75-0.908,1.492-1.495,2.141c-0.588,0.651-1.29,1.141-2.146,1.383 c-1.496,0.426-3.247-0.283-3.961-1.642c-0.26-0.494-0.442-1.028-0.654-1.548c-1.156-2.838-2.311-5.679-3.465-8.519 c-0.017-0.042-0.037-0.082-0.065-0.145c-0.101,0.245-0.192,0.472-0.284,0.698c-1.237,3.051-2.475,6.103-3.711,9.155 c-0.466,1.153-1.351,1.815-2.538,2.045c-1.391,0.267-2.577-0.154-3.496-1.247c-0.174-0.209-0.31-0.464-0.415-0.717 c-2.128-5.22-4.248-10.442-6.37-15.665c-0.012-0.029-0.021-0.059-0.036-0.104c0.054-0.003,0.103-0.006,0.15-0.006 c1.498-0.001,2.997,0,4.495-0.004c0.12-0.001,0.176,0.03,0.222,0.146c1.557,3.846,3.117,7.691,4.679,11.536 c0.018,0.046,0.039,0.091,0.067,0.159c0.273-0.673,0.536-1.32,0.797-1.968c1.064-2.627,2.137-5.25,3.19-7.883 c0.482-1.208,1.376-1.917,2.621-2.135c1.454-0.255,2.644,0.257,3.522,1.449c0.133,0.18,0.229,0.393,0.313,0.603 c1.425,3.495,2.848,6.991,4.269,10.488c0.02,0.047,0.04,0.093,0.073,0.172c0.196-0.327,0.385-0.625,0.559-0.935 c0.783-1.397,1.323-2.886,1.614-4.461c0.242-1.312,0.304-2.634,0.187-3.962c-0.242-2.721-1.16-5.192-2.792-7.38 c-2.193-2.939-5.086-4.824-8.673-5.625c-1.553-0.346-3.124-0.405-4.705-0.257c-3.162,0.298-6.036,1.366-8.585,3.258 c-3.414,2.534-5.638,5.871-6.623,10.016c-0.417,1.76-0.546,3.547-0.384,5.348c0.417,4.601,2.359,8.444,5.804,11.517 c2.325,2.073,5.037,3.393,8.094,3.989c1.617,0.317,3.247,0.395,4.889,0.242c1-0.094,1.982-0.268,2.952-0.529 c0.04-0.01,0.081-0.018,0.128-0.028c0,1.526,0,3.047,0,4.586c-0.402,0.074-0.805,0.154-1.21,0.221 c-0.861,0.14-1.728,0.231-2.601,0.258c-0.035,0.002-0.071,0.013-0.108,0.021c-0.493,0-0.983,0-1.476,0 c-0.049-0.007-0.1-0.018-0.149-0.022c-0.315-0.019-0.629-0.033-0.945-0.058c-1.362-0.105-2.702-0.346-4.017-0.716 c-3.254-0.914-6.145-2.495-8.66-4.752c-2.195-1.971-3.926-4.29-5.176-6.963c-1.152-2.466-1.822-5.057-1.993-7.774 c-0.014-0.226-0.033-0.451-0.05-0.676c0-0.502,0-1.003,0-1.504c0.008-0.049,0.02-0.099,0.022-0.148 c0.036-1.025,0.152-2.043,0.338-3.052c0.481-2.616,1.409-5.066,2.8-7.331c2.226-3.625,5.25-6.386,9.074-8.254 c2.536-1.24,5.217-1.947,8.037-2.126c0.23-0.015,0.461-0.034,0.691-0.051C33.052,10.292,33.535,10.292,34.019,10.292z"
              }),
                  x("workplace",
                    function(e, {quote : t, hashtag : n}) {
                      return j(e, "workplace.url"),
                             "https://work.facebook.com/sharer.php" +
                                 w({u : e, quote : t, hashtag : n})
                    },
                    e => ({quote : e.quote, hashtag : e.hashtag}),
                    {windowWidth : 550, windowHeight : 400}),
                  y({
                    color : "#000000",
                    networkName : "X",
                    path :
                        "M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z"
                  })
            },
            5186 :
                function(e, t, n) {
                  "use strict";
                  function r(e, t) {
                    let n = String(e);
                    if ("string" != typeof t)
                      throw TypeError("Expected character");
                    let r = 0, o = n.indexOf(t);
                    for (; -1 !== o;)
                      r++, o = n.indexOf(t, o + t.length);
                    return r
                  }
                  n.d(t, {Z : function() { return eA }});
                  var o = n(4345), i = n(5459), c = n(8718), l = n(6093);
                  let a = "phrasing",
                      u = [ "autolink", "link", "image", "label" ];
                  function s(e) {
                    this.enter(
                        {type : "link", title : null, url : "", children : []},
                        e)
                  }
                  function f(e) {
                    this.config.enter.autolinkProtocol.call(this, e)
                  }
                  function d(e) {
                    this.config.exit.autolinkProtocol.call(this, e)
                  }
                  function p(e) {
                    this.config.exit.data.call(this, e);
                    let t = this.stack[this.stack.length - 1];
                    (0, o.ok)("link" === t.type),
                        t.url = "http://" + this.sliceSerialize(e)
                  }
                  function h(e) { this.config.exit.autolinkEmail.call(this, e) }
                  function m(e) { this.exit(e) }
                  function g(e) {
                    !function(e, t, n) {
                      let r = (0, l.O)((n || {}).ignore || []), o = function(e) {
                        let t = [];
                        if (!Array.isArray(e))
                          throw TypeError(
                              "Expected find and replace tuple or list of tuples");
                        let n = !e[0] || Array.isArray(e[0]) ? e : [ e ],
                            r = -1;
                        for (; ++r < n.length;) {
                          var o;
                          let e = n[r];
                          t.push([
                            "string" == typeof (o = e[0])
                                ? RegExp(
                                      function(e) {
                                        if ("string" != typeof e)
                                          throw TypeError("Expected a string");
                                        return e
                                            .replace(/[|\\{}()[\]^$+*?.]/g,
                                                     "\\$&")
                                            .replace(/-/g, "\\x2d")
                                      }(o),
                                      "g")
                                : o,
                            function(e) {
                              return "function" == typeof e
                                         ? e
                                         : function() { return e }
                            }(e[1])
                          ])
                        }
                        return t
                      }(t), i = -1;
                      for (; ++i < o.length;)
                        (0, c.S4)(e, "text", a);
                      function a(e, t) {
                        let n, c = -1;
                        for (; ++c < t.length;) {
                          let e = t[c], o = n ? n.children : void 0;
                          if (r(e, o ? o.indexOf(e) : void 0, n))
                            return;
                          n = e
                        }
                        if (n)
                          return function(e, t) {
                            let n = t[t.length - 1], r = o[i][0], c = o[i][1],
                                l = 0, a = n.children.indexOf(e), u = !1,
                                s = [];
                            r.lastIndex = 0;
                            let f = r.exec(e.value);
                            for (; f;) {
                              let n = f.index, o = {
                                index : f.index,
                                input : f.input,
                                stack : [...t, e ]
                              },
                                  i = c(...f, o);
                              if ("string" == typeof i &&
                                      (i = i.length > 0
                                               ? {type : "text", value : i}
                                               : void 0),
                                  !1 === i ? r.lastIndex = n + 1
                                           : (l !== n && s.push({
                                               type : "text",
                                               value : e.value.slice(l, n)
                                             }),
                                              Array.isArray(i) ? s.push(...i)
                                                               : i && s.push(i),
                                              l = n + f[0].length, u = !0),
                                  !r.global)
                                break;
                              f = r.exec(e.value)
                            }
                            return u ? (l < e.value.length && s.push({
                                     type : "text",
                                     value : e.value.slice(l)
                                   }),
                                        n.children.splice(a, 1, ...s))
                                     : s = [ e ],
                                       a + s.length
                          }(e, t)
                      }
                    }(e,
                      [
                        [
                          /(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, y
                        ],
                        [ /([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, b ]
                      ],
                      {ignore : [ "link", "linkReference" ]})
                  }
                  function y(e, t, n, o, i) {
                    let c = "";
                    if (!w(i) ||
                        (/^w/i.test(t) && (n = t + n, t = "", c = "http://"),
                         !function(e) {
                           let t = e.split(".");
                           return !(t.length < 2 ||
                                    t[t.length - 1] &&
                                        (/_/.test(t[t.length - 1]) ||
                                         !/[a-zA-Z\d]/.test(t[t.length - 1])) ||
                                    t[t.length - 2] &&
                                        (/_/.test(t[t.length - 2]) ||
                                         !/[a-zA-Z\d]/.test(t[t.length - 2])))
                         }(n)))
                      return !1;
                    let l = function(e) {
                      let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
                      if (!t)
                        return [ e, void 0 ];
                      e = e.slice(0, t.index);
                      let n = t[0], o = n.indexOf(")"), i = r(e, "("),
                          c = r(e, ")");
                      for (; -1 !== o && i > c;)
                        e += n.slice(0, o + 1),
                            o = (n = n.slice(o + 1)).indexOf(")"), c++;
                      return [ e, n ]
                    }(n + o);
                    if (!l[0])
                      return !1;
                    let a = {
                      type : "link",
                      title : null,
                      url : c + t + l[0],
                      children : [ {type : "text", value : t + l[0]} ]
                    };
                    return l[1] ? [ a, {type : "text", value : l[1]} ] : a
                  }
                  function b(e, t, n, r) {
                    return !(!w(r, !0) || /[-\d_]$/.test(n)) && {
                      type: "link", title: null, url: "mailto:" + t + "@" + n,
                          children: [ {type : "text", value : t + "@" + n} ]
                    }
                  }
                  function w(e, t) {
                    let n = e.input.charCodeAt(e.index - 1);
                    return (0 === e.index || (0, i.B8)(n) || (0, i.Xh)(n)) &&
                           (!t || 47 !== n)
                  }
                  var v = n(1098);
                  function C(e) {
                    this.enter({
                      type : "footnoteDefinition",
                      identifier : "",
                      label : "",
                      children : []
                    },
                               e)
                  }
                  function k() { this.buffer() }
                  function O(e) {
                    let t = this.resume(),
                        n = this.stack[this.stack.length - 1];
                    (0, o.ok)("footnoteDefinition" === n.type),
                        n.label = t,
                        n.identifier =
                            (0, v.d)(this.sliceSerialize(e)).toLowerCase()
                  }
                  function x(e) { this.exit(e) }
                  function _(e) {
                    this.enter({
                      type : "footnoteReference",
                      identifier : "",
                      label : ""
                    },
                               e)
                  }
                  function S() { this.buffer() }
                  function E(e) {
                    let t = this.resume(),
                        n = this.stack[this.stack.length - 1];
                    (0, o.ok)("footnoteReference" === n.type),
                        n.label = t,
                        n.identifier =
                            (0, v.d)(this.sliceSerialize(e)).toLowerCase()
                  }
                  function j(e) { this.exit(e) }
                  function D(e, t, n, r) {
                    let o = n.createTracker(r), i = o.move("[^"),
                        c = n.enter("footnoteReference"),
                        l = n.enter("reference");
                    return i += o.move(n.safe(
                               n.associationId(e),
                               {...o.current(), before : i, after : "]"})),
                           l(), c(), i += o.move("]")
                  }
                  function M(e, t, n, r) {
                    let o = n.createTracker(r), i = o.move("[^"),
                        c = n.enter("footnoteDefinition"), l = n.enter("label");
                    return i += o.move(n.safe(
                               n.associationId(e),
                               {...o.current(), before : i, after : "]"})),
                           l(),
                           i +=
                           o.move("]:" + (e.children && e.children.length > 0
                                              ? " "
                                              : "")),
                           o.shift(4),
                           i += o.move(n.indentLines(
                               n.containerFlow(e, o.current()), I)),
                           c(), i
                  }
                  function I(e, t, n) {
                    return 0 === t ? e : (n ? "" : "    ") + e
                  }
                  D.peek = function() { return "[" };
                  let T = [
                    "autolink", "destinationLiteral", "destinationRaw",
                    "reference", "titleQuote", "titleApostrophe"
                  ];
                  function P(e) {
                    this.enter({type : "delete", children : []}, e)
                  }
                  function A(e) { this.exit(e) }
                  function R(e, t, n, r) {
                    let o = n.createTracker(r), i = n.enter("strikethrough"),
                        c = o.move("~~");
                    return c +=
                           n.containerPhrasing(
                               e, {...o.current(), before : c, after : "~"}) +
                           o.move("~~"),
                           i(), c
                  }
                  function L(e) { return e.length }
                  function N(e) {
                    let t = "string" == typeof e ? e.codePointAt(0) : 0;
                    return 67 === t || 99 === t    ? 99
                           : 76 === t || 108 === t ? 108
                           : 82 === t || 114 === t ? 114
                                                   : 0
                  }
                  R.peek = function() { return "~" };
                  n(1623);
                  var z = n(7962);
                  function F(e, t, n) {
                    let r = e.value || "", o = "`", i = -1;
                    for (; RegExp("(^|[^`])" + o + "([^`]|$)").test(r);)
                      o += "`";
                    for (/[^ \r\n]/.test(r) &&
                             (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) ||
                              /^`|`$/.test(r)) &&
                             (r = " " + r + " ");
                         ++i < n.unsafe.length;) {
                      let e;
                      let t = n.unsafe[i], o = n.compilePattern(t);
                      if (t.atBreak)
                        for (; e = o.exec(r);) {
                          let t = e.index;
                          10 === r.charCodeAt(t) &&
                              13 === r.charCodeAt(t - 1) && t--,
                              r = r.slice(0, t) + " " + r.slice(e.index + 1)
                        }
                    }
                    return o + r + o
                  }
                  F.peek = function() { return "`" }, (0, l.O)([
                    "break", "delete", "emphasis", "footnote",
                    "footnoteReference", "image", "imageReference",
                    "inlineCode", "inlineMath", "link", "linkReference",
                    "mdxJsxTextElement", "mdxTextExpression", "strong", "text",
                    "textDirective"
                  ]);
                  let H = function(e, t, n, r) {
                    let o = function(e) {
                      let t = e.options.listItemIndent || "one";
                      if ("tab" !== t && "one" !== t && "mixed" !== t)
                        throw Error(
                            "Cannot serialize items with `" + t +
                            "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
                      return t
                    }(n), i = n.bulletCurrent || function(e) {
                      let t = e.options.bullet || "*";
                      if ("*" !== t && "+" !== t && "-" !== t)
                        throw Error(
                            "Cannot serialize items with `" + t +
                            "` for `options.bullet`, expected `*`, `+`, or `-`");
                      return t
                    }(n);
                    t && "list" === t.type && t.ordered &&
                        (i = ("number" == typeof t.start && t.start > -1
                                  ? t.start
                                  : 1) +
                             (!1 === n.options.incrementListMarker
                                  ? 0
                                  : t.children.indexOf(e)) +
                             i);
                    let c = i.length + 1;
                    ("tab" === o ||
                     "mixed" === o &&
                         (t && "list" === t.type && t.spread || e.spread)) &&
                        (c = 4 * Math.ceil(c / 4));
                    let l = n.createTracker(r);
                    l.move(i + " ".repeat(c - i.length)), l.shift(c);
                    let a = n.enter("listItem"),
                        u = n.indentLines(
                            n.containerFlow(e, l.current()), function(e, t, n) {
                              return t ? (n ? "" : " ".repeat(c)) + e
                                       : (n ? i
                                            : i + " ".repeat(c - i.length)) +
                                             e
                            });
                    return a(), u
                  };
                  function q(e) {
                    let t = e._align;
                    (0, o.ok)(t, "expected `_align` on table"),
                        this.enter({
                          type : "table",
                          align : t.map(function(
                              e) { return "none" === e ? null : e }),
                          children : []
                        },
                                   e),
                        this.data.inTable = !0
                  }
                  function U(e) { this.exit(e), this.data.inTable = void 0 }
                  function W(e) {
                    this.enter({type : "tableRow", children : []}, e)
                  }
                  function B(e) { this.exit(e) }
                  function V(e) {
                    this.enter({type : "tableCell", children : []}, e)
                  }
                  function $(e) {
                    let t = this.resume();
                    this.data.inTable && (t = t.replace(/\\([\\|])/g, Z));
                    let n = this.stack[this.stack.length - 1];
                    (0, o.ok)("inlineCode" === n.type), n.value = t,
                                                        this.exit(e)
                  }
                  function Z(e, t) { return "|" === t ? t : e }
                  function K(e) {
                    let t = this.stack[this.stack.length - 2];
                    (0, o.ok)("listItem" === t.type),
                        t.checked = "taskListCheckValueChecked" === e.type
                  }
                  function Q(e) {
                    let t = this.stack[this.stack.length - 2];
                    if (t && "listItem" === t.type &&
                        "boolean" == typeof t.checked) {
                      let e = this.stack[this.stack.length - 1];
                      (0, o.ok)("paragraph" === e.type);
                      let n = e.children[0];
                      if (n && "text" === n.type) {
                        let r;
                        let o = t.children, i = -1;
                        for (; ++i < o.length;) {
                          let e = o[i];
                          if ("paragraph" === e.type) {
                            r = e;
                            break
                          }
                        }
                        r === e &&
                            (n.value = n.value.slice(1),
                             0 === n.value.length
                                 ? e.children.shift()
                                 : e.position && n.position &&
                                       "number" ==
                                           typeof n.position.start.offset &&
                                       (n.position.start.column++,
                                        n.position.start.offset++,
                                        e.position.start = Object.assign(
                                            {}, n.position.start)))
                      }
                    }
                    this.exit(e)
                  }
                  function G(e, t, n, r) {
                    let o = e.children[0],
                        i = "boolean" == typeof e.checked && o &&
                            "paragraph" === o.type,
                        c = "[" + (e.checked ? "x" : " ") + "] ",
                        l = n.createTracker(r);
                    i && l.move(c);
                    let a = H(e, t, n, {...r, ...l.current()});
                    return i &&
                               (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,
                                              function(e) { return e + c })),
                           a
                  }
                  var X = n(4663);
                  let Y = {
                    tokenize : function(e, t, n) {
                      let r = 0;
                      return function t(i) {
                        return (87 === i || 119 === i) && r < 3
                                   ? (r++, e.consume(i), t)
                               : 46 === i && 3 === r ? (e.consume(i), o)
                                                     : n(i)
                      };
                      function o(e) { return null === e ? n(e) : t(e) }
                    },
                    partial : !0
                  },
                      J = {
                        tokenize : function(e, t, n) {
                          let r, o, c;
                          return l;
                          function l(t) {
                            return 46 === t || 95 === t ? e.check(et, u, a)(t)
                                   : null === t || (0, i.z3)(t) ||
                                           (0, i.B8)(t) ||
                                           45 !== t && (0, i.Xh)(t)
                                       ? u(t)
                                       : (c = !0, e.consume(t), l)
                          }
                          function a(t) {
                            return 95 === t ? r = !0 : (o = r, r = void 0),
                                              e.consume(t), l
                          }
                          function u(e) { return o || r || !c ? n(e) : t(e) }
                        },
                        partial : !0
                      },
                      ee = {
                        tokenize : function(e, t) {
                          let n = 0, r = 0;
                          return o;
                          function o(l) {
                            return 40 === l            ? (n++, e.consume(l), o)
                                   : 41 === l && r < n ? c(l)
                                   : 33 === l || 34 === l || 38 === l ||
                                           39 === l || 41 === l || 42 === l ||
                                           44 === l || 46 === l || 58 === l ||
                                           59 === l || 60 === l || 63 === l ||
                                           93 === l || 95 === l || 126 === l
                                       ? e.check(et, t, c)(l)
                                   : null === l || (0, i.z3)(l) || (0, i.B8)(l)
                                       ? t(l)
                                       : (e.consume(l), o)
                          }
                          function c(t) {
                            return 41 === t && r++, e.consume(t), o
                          }
                        },
                        partial : !0
                      },
                      et = {
                        tokenize : function(e, t, n) {
                          return r;
                          function r(l) {
                            return 33 === l || 34 === l || 39 === l ||
                                           41 === l || 42 === l || 44 === l ||
                                           46 === l || 58 === l || 59 === l ||
                                           63 === l || 95 === l || 126 === l
                                       ? (e.consume(l), r)
                                   : 38 === l ? (e.consume(l), c)
                                   : 93 === l ? (e.consume(l), o)
                                   : 60 === l || null === l || (0, i.z3)(l) ||
                                           (0, i.B8)(l)
                                       ? t(l)
                                       : n(l)
                          }
                          function o(e) {
                            return null === e || 40 === e || 91 === e ||
                                           (0, i.z3)(e) || (0, i.B8)(e)
                                       ? t(e)
                                       : r(e)
                          }
                          function c(t) {
                            return (0, i.jv)(t) ? function t(o) {
                              return 59 === o       ? (e.consume(o), r)
                                     : (0, i.jv)(o) ? (e.consume(o), t)
                                                    : n(o)
                            }(t) : n(t)
                          }
                        },
                        partial : !0
                      },
                      en = {
                        tokenize : function(e, t, n) {
                          return function(t) { return e.consume(t), r };
                          function r(e) { return (0, i.H$)(e) ? n(e) : t(e) }
                        },
                        partial : !0
                      },
                      er = {
                        tokenize : function(e, t, n) {
                          let r = this;
                          return function(t) {
                            return 87 !== t && 119 !== t ||
                                           !ea.call(r, r.previous) ||
                                           ed(r.events)
                                       ? n(t)
                                       : (e.enter("literalAutolink"),
                                          e.enter("literalAutolinkWww"),
                                          e.check(
                                              Y,
                                              e.attempt(J, e.attempt(ee, o), n),
                                              n)(t))
                          };
                          function o(n) {
                            return e.exit("literalAutolinkWww"),
                                   e.exit("literalAutolink"), t(n)
                          }
                        },
                        previous : ea
                      },
                      eo = {
                        tokenize : function(e, t, n) {
                          let r = this, o = "", c = !1;
                          return function(t) {
                            return (72 === t || 104 === t) &&
                                           eu.call(r, r.previous) &&
                                           !ed(r.events)
                                       ? (e.enter("literalAutolink"),
                                          e.enter("literalAutolinkHttp"),
                                          o += String.fromCodePoint(t),
                                          e.consume(t), l)
                                       : n(t)
                          };
                          function l(t) {
                            if ((0, i.jv)(t) && o.length < 5)
                              return o += String.fromCodePoint(t), e.consume(t),
                                     l;
                            if (58 === t) {
                              let n = o.toLowerCase();
                              if ("http" === n || "https" === n)
                                return e.consume(t), a
                            }
                            return n(t)
                          }
                          function a(t) {
                            return 47 === t
                                       ? (e.consume(t), c) ? u : (c = !0, a)
                                       : n(t)
                          }
                          function u(t) {
                            return null === t || (0, i.Av)(t) || (0, i.z3)(t) ||
                                           (0, i.B8)(t) || (0, i.Xh)(t)
                                       ? n(t)
                                       : e.attempt(J, e.attempt(ee, s), n)(t)
                          }
                          function s(n) {
                            return e.exit("literalAutolinkHttp"),
                                   e.exit("literalAutolink"), t(n)
                          }
                        },
                        previous : eu
                      },
                      ei = {
                        tokenize : function(e, t, n) {
                          let r, o;
                          let c = this;
                          return function(t) {
                            return !ef(t) || !es.call(c, c.previous) ||
                                           ed(c.events)
                                       ? n(t)
                                       : (e.enter("literalAutolink"),
                                          e.enter("literalAutolinkEmail"),
                                          function t(r) {
                                            return ef(r) ? (e.consume(r), t)
                                                   : 64 === r
                                                       ? (e.consume(r), l)
                                                       : n(r)
                                          }(t))
                          };
                          function l(t) {
                            return 46 === t ? e.check(en, u, a)(t)
                                   : 45 === t || 95 === t || (0, i.H$)(t)
                                       ? (o = !0, e.consume(t), l)
                                       : u(t)
                          }
                          function a(t) { return e.consume(t), r = !0, l }
                          function u(l) {
                            return o && r && (0, i.jv)(c.previous)
                                       ? (e.exit("literalAutolinkEmail"),
                                          e.exit("literalAutolink"), t(l))
                                       : n(l)
                          }
                        },
                        previous : es
                      },
                      ec = {}, el = 48;
                  for (; el < 123;)
                    ec[el] = ei, 58 == ++el ? el = 65 : 91 === el && (el = 97);
                  function ea(e) {
                    return null === e || 40 === e || 42 === e || 95 === e ||
                           91 === e || 93 === e || 126 === e || (0, i.z3)(e)
                  }
                  function eu(e) { return !(0, i.jv)(e) }
                  function es(e) { return !(47 === e || ef(e)) }
                  function ef(e) {
                    return 43 === e || 45 === e || 46 === e || 95 === e ||
                           (0, i.H$)(e)
                  }
                  function ed(e) {
                    let t = e.length, n = !1;
                    for (; t--;) {
                      let r = e[t][1];
                      if (("labelLink" === r.type || "labelImage" === r.type) &&
                          !r._balanced) {
                        n = !0;
                        break
                      }
                      if (r._gfmAutolinkLiteralWalkedInto) {
                        n = !1;
                        break
                      }
                    }
                    return e.length > 0 && !n &&
                               (e[e.length - 1][1]
                                    ._gfmAutolinkLiteralWalkedInto = !0),
                           n
                  }
                  ec[43] = ei, ec[45] = ei, ec[46] = ei, ec[95] = ei,
                  ec[72] = [ ei, eo ], ec[104] = [ ei, eo ],
                  ec[87] = [ ei, er ], ec[119] = [ ei, er ];
                  var ep = n(3402), eh = n(2761);
                  let em = {
                    tokenize : function(e, t, n) {
                      let r = this;
                      return (0, eh.f)(e, function(e) {
                        let o = r.events[r.events.length - 1];
                        return o &&
                                       "gfmFootnoteDefinitionIndent" ===
                                           o[1].type &&
                                       4 ===
                                           o[2].sliceSerialize(o[1], !0).length
                                   ? t(e)
                                   : n(e)
                      }, "gfmFootnoteDefinitionIndent", 5)
                    },
                    partial : !0
                  };
                  function eg(e, t, n) {
                    let r;
                    let o = this, i = o.events.length,
                        c = o.parser.gfmFootnotes ||
                            (o.parser.gfmFootnotes = []);
                    for (; i--;) {
                      let e = o.events[i][1];
                      if ("labelImage" === e.type) {
                        r = e;
                        break
                      }
                      if ("gfmFootnoteCall" === e.type ||
                          "labelLink" === e.type || "label" === e.type ||
                          "image" === e.type || "link" === e.type)
                        break
                    }
                    return function(i) {
                      if (!r || !r._balanced)
                        return n(i);
                      let l = (0, v.d)(
                          o.sliceSerialize({start : r.end, end : o.now()}));
                      return 94 === l.codePointAt(0) && c.includes(l.slice(1))
                                 ? (e.enter("gfmFootnoteCallLabelMarker"),
                                    e.consume(i),
                                    e.exit("gfmFootnoteCallLabelMarker"), t(i))
                                 : n(i)
                    }
                  }
                  function ey(e, t) {
                    let n = e.length;
                    for (; n--;)
                      if ("labelImage" === e[n][1].type &&
                          "enter" === e[n][0]) {
                        e[n][1];
                        break
                      }
                    e[n + 1][1].type = "data",
                          e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
                    let r = {
                      type : "gfmFootnoteCall",
                      start : Object.assign({}, e[n + 3][1].start),
                      end : Object.assign({}, e[e.length - 1][1].end)
                    },
                        o = {
                          type : "gfmFootnoteCallMarker",
                          start : Object.assign({}, e[n + 3][1].end),
                          end : Object.assign({}, e[n + 3][1].end)
                        };
                    o.end.column++, o.end.offset++, o.end._bufferIndex++;
                    let i = {
                      type : "gfmFootnoteCallString",
                      start : Object.assign({}, o.end),
                      end : Object.assign({}, e[e.length - 1][1].start)
                    },
                        c = {
                          type : "chunkString",
                          contentType : "string",
                          start : Object.assign({}, i.start),
                          end : Object.assign({}, i.end)
                        },
                        l = [
                          e[n + 1], e[n + 2], [ "enter", r, t ], e[n + 3],
                          e[n + 4], [ "enter", o, t ], [ "exit", o, t ],
                          [ "enter", i, t ], [ "enter", c, t ],
                          [ "exit", c, t ], [ "exit", i, t ], e[e.length - 2],
                          e[e.length - 1], [ "exit", r, t ]
                        ];
                    return e.splice(n, e.length - n + 1, ...l), e
                  }
                  function eb(e, t, n) {
                    let r;
                    let o = this,
                        c = o.parser.gfmFootnotes ||
                            (o.parser.gfmFootnotes = []),
                        l = 0;
                    return function(t) {
                      return e.enter("gfmFootnoteCall"),
                             e.enter("gfmFootnoteCallLabelMarker"),
                             e.consume(t), e.exit("gfmFootnoteCallLabelMarker"),
                             a
                    };
                    function a(t) {
                      return 94 !== t ? n(t)
                                      : (e.enter("gfmFootnoteCallMarker"),
                                         e.consume(t),
                                         e.exit("gfmFootnoteCallMarker"),
                                         e.enter("gfmFootnoteCallString"),
                                         e.enter("chunkString").contentType =
                                             "string",
                                         u)
                    }
                    function u(a) {
                      if (l > 999 || 93 === a && !r || null === a || 91 === a ||
                          (0, i.z3)(a))
                        return n(a);
                      if (93 === a) {
                        e.exit("chunkString");
                        let r = e.exit("gfmFootnoteCallString");
                        return c.includes((0, v.d)(o.sliceSerialize(r)))
                                   ? (e.enter("gfmFootnoteCallLabelMarker"),
                                      e.consume(a),
                                      e.exit("gfmFootnoteCallLabelMarker"),
                                      e.exit("gfmFootnoteCall"), t)
                                   : n(a)
                      }
                      return (0, i.z3)(a) || (r = !0), l++, e.consume(a),
                             92 === a ? s : u
                    }
                    function s(t) {
                      return 91 === t || 92 === t || 93 === t
                                 ? (e.consume(t), l++, u)
                                 : u(t)
                    }
                  }
                  function ew(e, t, n) {
                    let r, o;
                    let c = this,
                        l = c.parser.gfmFootnotes ||
                            (c.parser.gfmFootnotes = []),
                        a = 0;
                    return function(t) {
                      return e.enter("gfmFootnoteDefinition")._container = !0,
                             e.enter("gfmFootnoteDefinitionLabel"),
                             e.enter("gfmFootnoteDefinitionLabelMarker"),
                             e.consume(t),
                             e.exit("gfmFootnoteDefinitionLabelMarker"), u
                    };
                    function u(t) {
                      return 94 === t
                                 ? (e.enter("gfmFootnoteDefinitionMarker"),
                                    e.consume(t),
                                    e.exit("gfmFootnoteDefinitionMarker"),
                                    e.enter("gfmFootnoteDefinitionLabelString"),
                                    e.enter("chunkString").contentType =
                                        "string",
                                    s)
                                 : n(t)
                    }
                    function s(t) {
                      if (a > 999 || 93 === t && !o || null === t || 91 === t ||
                          (0, i.z3)(t))
                        return n(t);
                      if (93 === t) {
                        e.exit("chunkString");
                        let n = e.exit("gfmFootnoteDefinitionLabelString");
                        return r = (0, v.d)(c.sliceSerialize(n)),
                               e.enter("gfmFootnoteDefinitionLabelMarker"),
                               e.consume(t),
                               e.exit("gfmFootnoteDefinitionLabelMarker"),
                               e.exit("gfmFootnoteDefinitionLabel"), d
                      }
                      return (0, i.z3)(t) || (o = !0), a++, e.consume(t),
                             92 === t ? f : s
                    }
                    function f(t) {
                      return 91 === t || 92 === t || 93 === t
                                 ? (e.consume(t), a++, s)
                                 : s(t)
                    }
                    function d(t) {
                      return 58 === t
                                 ? (e.enter("definitionMarker"), e.consume(t),
                                    e.exit("definitionMarker"),
                                    l.includes(r) || l.push(r),
                                    (0,
                                     eh.f)(e, p,
                                           "gfmFootnoteDefinitionWhitespace"))
                                 : n(t)
                    }
                    function p(e) { return t(e) }
                  }
                  function ev(e, t, n) {
                    return e.check(ep.w, t, e.attempt(em, t, n))
                  }
                  function eC(e) { e.exit("gfmFootnoteDefinition") }
                  var ek = n(1905), eO = n(2987), ex = n(3233);
                  class e_ {
                    constructor() { this.map = [] }
                    add(e, t, n) {
                      !function(e, t, n, r) {
                        let o = 0;
                        if (0 !== n || 0 !== r.length) {
                          for (; o < e.map.length;) {
                            if (e.map[o][0] === t) {
                              e.map[o][1] += n, e.map[o][2].push(...r);
                              return
                            }
                            o += 1
                          }
                          e.map.push([ t, n, r ])
                        }
                      }(this, e, t, n)
                    }
                    consume(e) {
                      if (this.map.sort(function(e, t) { return e[0] - t[0] }),
                          0 === this.map.length)
                        return;
                      let t = this.map.length, n = [];
                      for (; t > 0;)
                        t -= 1,
                            n.push(e.slice(this.map[t][0] + this.map[t][1]),
                                   this.map[t][2]),
                            e.length = this.map[t][0];
                      n.push([...e ]), e.length = 0;
                      let r = n.pop();
                      for (; r;)
                        e.push(...r), r = n.pop();
                      this.map.length = 0
                    }
                  }
                  function eS(e, t, n) {
                    let r;
                    let o = this, c = 0, l = 0;
                    return function(e) {
                      let t = o.events.length - 1;
                      for (; t > -1;) {
                        let e = o.events[t][1].type;
                        if ("lineEnding" === e || "linePrefix" === e)
                          t--;
                        else
                          break
                      }
                      let r = t > -1 ? o.events[t][1].type : null,
                          i = "tableHead" === r || "tableRow" === r ? w : a;
                      return i === w && o.parser.lazy[o.now().line] ? n(e)
                                                                    : i(e)
                    };
                    function a(t) {
                      return e.enter("tableHead"), e.enter("tableRow"),
                             124 === t || (r = !0, l += 1), u(t)
                    }
                    function u(t) {
                      return null === t ? n(t)
                             : (0, i.Ch)(t)
                                 ? l > 1 ? (l = 0, o.interrupt = !0,
                                            e.exit("tableRow"),
                                            e.enter("lineEnding"), e.consume(t),
                                            e.exit("lineEnding"), d)
                                         : n(t)
                             : (0, i.xz)(t) ? (0, eh.f)(e, u, "whitespace")(t)
                             : (l += 1, r && (r = !1, c += 1), 124 === t)
                                 ? (e.enter("tableCellDivider"), e.consume(t),
                                    e.exit("tableCellDivider"), r = !0, u)
                                 : (e.enter("data"), s(t))
                    }
                    function s(t) {
                      return null === t || 124 === t || (0, i.z3)(t)
                                 ? (e.exit("data"), u(t))
                                 : (e.consume(t), 92 === t ? f : s)
                    }
                    function f(t) {
                      return 92 === t || 124 === t ? (e.consume(t), s) : s(t)
                    }
                    function d(t) {
                      return (o.interrupt = !1, o.parser.lazy[o.now().line])
                                 ? n(t)
                             : (e.enter("tableDelimiterRow"), r = !1,
                                (0, i.xz)(t))
                                 ? (0, eh.f)(e, p, "linePrefix",
                                             o.parser.constructs.disable.null
                                                     .includes("codeIndented")
                                                 ? void 0
                                                 : 4)(t)
                                 : p(t)
                    }
                    function p(t) {
                      return 45 === t || 58 === t ? m(t)
                             : 124 === t
                                 ? (r = !0, e.enter("tableCellDivider"),
                                    e.consume(t), e.exit("tableCellDivider"), h)
                                 : n(t)
                    }
                    function h(t) {
                      return (0, i.xz)(t) ? (0, eh.f)(e, m, "whitespace")(t)
                                          : m(t)
                    }
                    function m(t) {
                      return 58 === t                     ? (l += 1, r = !0,
                                         e.enter("tableDelimiterMarker"),
                                         e.consume(t),
                                         e.exit("tableDelimiterMarker"), g)
                             : 45 === t                   ? (l += 1, g(t))
                             : null === t || (0, i.Ch)(t) ? b(t)
                                                          : n(t)
                    }
                    function g(t) {
                      return 45 === t
                                 ? (e.enter("tableDelimiterFiller"),
                                    function t(n) {
                                      return 45 === n ? (e.consume(n), t)
                                             : 58 === n
                                                 ? (r = !0,
                                                    e.exit(
                                                        "tableDelimiterFiller"),
                                                    e.enter(
                                                        "tableDelimiterMarker"),
                                                    e.consume(n),
                                                    e.exit(
                                                        "tableDelimiterMarker"),
                                                    y)
                                                 : (e.exit(
                                                        "tableDelimiterFiller"),
                                                    y(n))
                                    }(t))
                                 : n(t)
                    }
                    function y(t) {
                      return (0, i.xz)(t) ? (0, eh.f)(e, b, "whitespace")(t)
                                          : b(t)
                    }
                    function b(o) {
                      return 124 === o ? p(o)
                             : null === o || (0, i.Ch)(o)
                                 ? r && c === l ? (e.exit("tableDelimiterRow"),
                                                   e.exit("tableHead"), t(o))
                                                : n(o)
                                 : n(o)
                    }
                    function w(t) { return e.enter("tableRow"), v(t) }
                    function v(n) {
                      return 124 === n
                                 ? (e.enter("tableCellDivider"), e.consume(n),
                                    e.exit("tableCellDivider"), v)
                             : null === n || (0, i.Ch)(n)
                                 ? (e.exit("tableRow"), t(n))
                             : (0, i.xz)(n) ? (0, eh.f)(e, v, "whitespace")(n)
                                            : (e.enter("data"), C(n))
                    }
                    function C(t) {
                      return null === t || 124 === t || (0, i.z3)(t)
                                 ? (e.exit("data"), v(t))
                                 : (e.consume(t), 92 === t ? k : C)
                    }
                    function k(t) {
                      return 92 === t || 124 === t ? (e.consume(t), C) : C(t)
                    }
                  }
                  function eE(e, t) {
                    let n, r, o, i = -1, c = !0, l = 0, a = [ 0, 0, 0, 0 ],
                                 u = [ 0, 0, 0, 0 ], s = !1, f = 0, d = new e_;
                    for (; ++i < e.length;) {
                      let p = e[i], h = p[1];
                      "enter" === p[0]
                          ? "tableHead" === h.type ? (s = !1,
                                                      0 !== f &&
                                                          (eD(d, t, f, n, r),
                                                           r = void 0, f = 0),
                                                      n = {
                                                        type : "table",
                                                        start : Object.assign(
                                                            {}, h.start),
                                                        end : Object.assign(
                                                            {}, h.end)
                                                      },
                                                      d.add(i, 0, [ [
                                                              "enter", n, t
                                                            ] ]))
                            : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (c = !0,
                                                                                         o = void 0,
                                                                                         a =
                                                                                             [
                                                                                               0,
                                                                                               0,
                                                                                               0,
                                                                                               0
                                                                                             ],
                                                                                         u =
                                                                                             [
                                                                                               0,
                                                                                               i + 1,
                                                                                               0,
                                                                                               0
                                                                                             ],
                                                                                         s && (s = !1, r = {
                                                                                           type :
                                                                                               "tableBody",
                                                                                           start :
                                                                                               Object
                                                                                                   .assign(
                                                                                                       {},
                                                                                                       h.start),
                                                                                           end :
                                                                                               Object
                                                                                                   .assign(
                                                                                                       {},
                                                                                                       h.end)
                                                                                         },
                                                                                               d.add(
                                                                                                   i,
                                                                                                   0,
                                                                                                   [ [
                                                                                                     "enter",
                                                                                                     r,
                                                                                                     t
                                                                                                   ] ])),
                                                                                         l = "tableDelimiterRow" === h.type ? 2
                                                                                             : r ? 3
                                                                                                 : 1)
                            : l && ("data" === h.type ||
                                    "tableDelimiterMarker" === h.type ||
                                    "tableDelimiterFiller" === h.type)
                                ? (c = !1,
                                   0 === u[2] &&
                                       (0 !== a[1] &&
                                            (u[0] = u[1],
                                             o = ej(d, t, a, l, void 0, o),
                                             a = [ 0, 0, 0, 0 ]),
                                        u[2] = i))
                                : "tableCellDivider" === h.type &&
                                      (c ? c = !1
                                         : (0 !== a[1] &&
                                                (u[0] = u[1],
                                                 o = ej(d, t, a, l, void 0, o)),
                                            u = [ (a = u)[1], i, 0, 0 ]))
                      : "tableHead" === h.type ? (s = !0, f = i)
                      : "tableRow" === h.type || "tableDelimiterRow" === h.type ? (f = i,
                                                                                   0 !== a[1]
                                                                                       ? (u[0] = u
                                                                                              [1],
                                                                                          o = ej(
                                                                                              d,
                                                                                              t,
                                                                                              a,
                                                                                              l,
                                                                                              i,
                                                                                              o))
                                                                                       : 0 !== u[1] &&
                                                                                             (o = ej(
                                                                                                  d,
                                                                                                  t,
                                                                                                  u,
                                                                                                  l,
                                                                                                  i,
                                                                                                  o)),
                                                                                   l = 0)
                                                                                : l &&
                                                                                      ("data" ===
                                                                                           h.type ||
                                                                                       "tableDelimiterMarker" ===
                                                                                           h.type ||
                                                                                       "tableDelimiterFiller" ===
                                                                                           h.type) &&
                                                                                      (u[3] =
                                                                                           i)
                    }
                    for (0 !== f && eD(d, t, f, n, r), d.consume(t.events),
                         i = -1;
                         ++i < t.events.length;) {
                      let e = t.events[i];
                      "enter" === e[0] && "table" === e[1].type &&
                          (e[1]._align =
                               function(e, t) {
                                 let n = !1, r = [];
                                 for (; t < e.length;) {
                                   let o = e[t];
                                   if (n) {
                                     if ("enter" === o[0])
                                       "tableContent"===o[1].type&&r.push("tableDelimiterMarker"===e[t+1][1].type?"left":"none");
                                     else if ("tableContent" === o[1].type) {
                                       if ("tableDelimiterMarker" ===
                                           e[t - 1][1].type) {
                                         let e = r.length - 1;
                                         r[e] = "left" === r[e] ? "center"
                                                                : "right"
                                       }
                                     } else if ("tableDelimiterRow" ===
                                                o[1].type)
                                       break
                                   } else
                                     "enter" === o[0] &&
                                         "tableDelimiterRow" === o[1].type &&
                                         (n = !0);
                                   t += 1
                                 }
                                 return r
                               }(t.events, i))
                    }
                    return e
                  }
                  function ej(e, t, n, r, o, i) {
                    0 !== n[0] &&
                        (i.end = Object.assign({}, eM(t.events, n[0])),
                         e.add(n[0], 0, [ [ "exit", i, t ] ]));
                    let c = eM(t.events, n[1]);
                    if (i = {
                          type : 1 === r   ? "tableHeader"
                                 : 2 === r ? "tableDelimiter"
                                           : "tableData",
                          start : Object.assign({}, c),
                          end : Object.assign({}, c)
                        },
                        e.add(n[1], 0, [ [ "enter", i, t ] ]), 0 !== n[2]) {
                      let o = eM(t.events, n[2]), i = eM(t.events, n[3]), c = {
                        type : "tableContent",
                        start : Object.assign({}, o),
                        end : Object.assign({}, i)
                      };
                      if (e.add(n[2], 0, [ [ "enter", c, t ] ]), 2 !== r) {
                        let r = t.events[n[2]], o = t.events[n[3]];
                        if (r[1].end = Object.assign({}, o[1].end),
                            r[1].type = "chunkText", r[1].contentType = "text",
                            n[3] > n[2] + 1) {
                          let t = n[2] + 1, r = n[3] - n[2] - 1;
                          e.add(t, r, [])
                        }
                      }
                      e.add(n[3] + 1, 0, [ [ "exit", c, t ] ])
                    }
                    return void 0 !== o &&
                               (i.end = Object.assign({}, eM(t.events, o)),
                                e.add(o, 0, [ [ "exit", i, t ] ]), i = void 0),
                           i
                  }
                  function eD(e, t, n, r, o) {
                    let i = [], c = eM(t.events, n);
                    o && (o.end = Object.assign({}, c),
                          i.push([ "exit", o, t ])),
                        r.end = Object.assign({}, c), i.push([ "exit", r, t ]),
                        e.add(n + 1, 0, i)
                  }
                  function eM(e, t) {
                    let n = e[t], r = "enter" === n[0] ? "start" : "end";
                    return n[1][r]
                  }
                  let eI = {
                    tokenize : function(e, t, n) {
                      let r = this;
                      return function(t) {
                        return null === r.previous &&
                                       r._gfmTasklistFirstContentOfListItem
                                   ? (e.enter("taskListCheck"),
                                      e.enter("taskListCheckMarker"),
                                      e.consume(t),
                                      e.exit("taskListCheckMarker"), o)
                                   : n(t)
                      };
                      function o(t) {
                        return (0, i.z3)(t)
                                   ? (e.enter("taskListCheckValueUnchecked"),
                                      e.consume(t),
                                      e.exit("taskListCheckValueUnchecked"), c)
                               : 88 === t || 120 === t
                                   ? (e.enter("taskListCheckValueChecked"),
                                      e.consume(t),
                                      e.exit("taskListCheckValueChecked"), c)
                                   : n(t)
                      }
                      function c(t) {
                        return 93 === t ? (e.enter("taskListCheckMarker"),
                                           e.consume(t),
                                           e.exit("taskListCheckMarker"),
                                           e.exit("taskListCheck"), l)
                                        : n(t)
                      }
                      function l(r) {
                        return (0, i.Ch)(r) ? t(r)
                               : (0, i.xz)(r)
                                   ? e.check({tokenize : eT}, t, n)(r)
                                   : n(r)
                      }
                    }
                  };
                  function eT(e, t, n) {
                    return (0, eh.f)(
                        e, function(e) { return null === e ? n(e) : t(e) },
                        "whitespace")
                  }
                  let eP = {};
                  function eA(e) {
                    let t = e || eP, n = this.data(),
                        r = n.micromarkExtensions ||
                            (n.micromarkExtensions = []),
                        o = n.fromMarkdownExtensions ||
                            (n.fromMarkdownExtensions = []),
                        i = n.toMarkdownExtensions ||
                            (n.toMarkdownExtensions = []);
                    r.push((0, X.W)([
                      {text : ec}, {
                        document : {
                          91 : {
                            tokenize : ew,
                            continuation : {tokenize : ev},
                            exit : eC
                          }
                        },
                        text : {
                          91 : {tokenize : eb},
                          93 : {add : "after", tokenize : eg, resolveTo : ey}
                        }
                      },
                      function(e) {
                        let t = (e || {}).singleTilde, n = {
                          tokenize : function(e, n, r) {
                            let o = this.previous, i = this.events, c = 0;
                            return function(l) {
                              return 126===o&&"characterEscape"!==i[i.length-1][1].type?r(l):(e.enter("strikethroughSequenceTemporary"),function i(l){let a=(0,eO.r)(o);if(126===l)return c>1?r(l):(e.consume(l),c++,i);if(c<2&&!t)return r(l);let u=e.exit("strikethroughSequenceTemporary"),s=(0,eO.r)(l);return u._open=!s||2===s&&!!a,u._close=!a||2===a&&!!s,n(l)}(l))
                            }
                          },
                          resolveAll : function(e, t) {
                            let n = -1;
                            for (; ++n < e.length;)
                              if ("enter" === e[n][0] &&
                                  "strikethroughSequenceTemporary" ===
                                      e[n][1].type &&
                                  e[n][1]._close) {
                                let r = n;
                                for (; r--;)
                                  if ("exit" === e[r][0] &&
                                      "strikethroughSequenceTemporary" ===
                                          e[r][1].type &&
                                      e[r][1]._open &&
                                      e[n][1].end.offset -
                                              e[n][1].start.offset ==
                                          e[r][1].end.offset -
                                              e[r][1].start.offset) {
                                    e[n][1].type = "strikethroughSequence",
                                    e[r][1].type = "strikethroughSequence";
                                    let o = {
                                      type : "strikethrough",
                                      start : Object.assign({}, e[r][1].start),
                                      end : Object.assign({}, e[n][1].end)
                                    },
                                        i = {
                                          type : "strikethroughText",
                                          start :
                                              Object.assign({}, e[r][1].end),
                                          end : Object.assign({}, e[n][1].start)
                                        },
                                        c =
                                            [
                                              [ "enter", o, t ],
                                              [ "enter", e[r][1], t ],
                                              [ "exit", e[r][1], t ],
                                              [ "enter", i, t ]
                                            ],
                                        l = t.parser.constructs.insideSpan.null;
                                    l &&
                                        (0, ek.d)(
                                            c, c.length, 0,
                                            (0, ex.C)(l, e.slice(r + 1, n), t)),
                                        (0, ek.d)(c, c.length, 0,
                                                  [
                                                    [ "exit", i, t ],
                                                    [ "enter", e[n][1], t ],
                                                    [ "exit", e[n][1], t ],
                                                    [ "exit", o, t ]
                                                  ]),
                                        (0, ek.d)(e, r - 1, n - r + 3, c),
                                        n = r + c.length - 2;
                                    break
                                  }
                              }
                            for (n = -1; ++n < e.length;)
                              "strikethroughSequenceTemporary" ===
                                      e[n][1].type &&
                                  (e[n][1].type = "data");
                            return e
                          }
                        };
                        return null == t && (t = !0), {
                          text: {126: n}, insideSpan: {null: [ n ]},
                              attentionMarkers: {null: [ 126 ]}
                        }
                      }(t),
                      {flow : {null : {tokenize : eS, resolveAll : eE}}},
                      {text : {91 : eI}}
                    ])),
                        o.push([
                          {
                            transforms : [ g ],
                            enter : {
                              literalAutolink : s,
                              literalAutolinkEmail : f,
                              literalAutolinkHttp : f,
                              literalAutolinkWww : f
                            },
                            exit : {
                              literalAutolink : m,
                              literalAutolinkEmail : h,
                              literalAutolinkHttp : d,
                              literalAutolinkWww : p
                            }
                          },
                          {
                            enter : {
                              gfmFootnoteDefinition : C,
                              gfmFootnoteDefinitionLabelString : k,
                              gfmFootnoteCall : _,
                              gfmFootnoteCallString : S
                            },
                            exit : {
                              gfmFootnoteDefinition : x,
                              gfmFootnoteDefinitionLabelString : O,
                              gfmFootnoteCall : j,
                              gfmFootnoteCallString : E
                            }
                          },
                          {
                            canContainEols : [ "delete" ],
                            enter : {strikethrough : P},
                            exit : {strikethrough : A}
                          },
                          {
                            enter : {
                              table : q,
                              tableData : V,
                              tableHeader : V,
                              tableRow : W
                            },
                            exit : {
                              codeText : $,
                              table : U,
                              tableData : B,
                              tableHeader : B,
                              tableRow : B
                            }
                          },
                          {
                            exit : {
                              taskListCheckValueChecked : K,
                              taskListCheckValueUnchecked : K,
                              paragraph : Q
                            }
                          }
                        ]),
                        i.push({
                          extensions : [
                            {
                              unsafe : [
                                {
                                  character : "@",
                                  before : "[+\\-.\\w]",
                                  after : "[\\-.\\w]",
                                  inConstruct : a,
                                  notInConstruct : u
                                },
                                {
                                  character : ".",
                                  before : "[Ww]",
                                  after : "[\\-.\\w]",
                                  inConstruct : a,
                                  notInConstruct : u
                                },
                                {
                                  character : ":",
                                  before : "[ps]",
                                  after : "\\/",
                                  inConstruct : a,
                                  notInConstruct : u
                                }
                              ]
                            },
                            {
                              unsafe : [ {
                                character : "[",
                                inConstruct :
                                    [ "phrasing", "label", "reference" ]
                              } ],
                              handlers : {
                                footnoteDefinition : M,
                                footnoteReference : D
                              }
                            },
                            {
                              unsafe : [ {
                                character : "~",
                                inConstruct : "phrasing",
                                notInConstruct : T
                              } ],
                              handlers : {delete : R}
                            },
                            function(e) {
                              let t = e || {}, n = t.tableCellPadding,
                                  r = t.tablePipeAlign, o = t.stringLength,
                                  i = n ? " " : "|";
                              return {
                                unsafe : [
                                  {character : "\r", inConstruct : "tableCell"},
                                  {character : "\n", inConstruct : "tableCell"},
                                  {
                                    atBreak : !0,
                                    character : "|",
                                    after : "[	 :-]"
                                  },
                                  {character : "|", inConstruct : "tableCell"},
                                  {atBreak : !0, character : ":", after : "-"},
                                  {
                                    atBreak : !0,
                                    character : "-",
                                    after : "[:|-]"
                                  }
                                ],
                                handlers : {
                                  inlineCode : function(e, t, n) {
                                    let r = F(e, t, n);
                                    return n.stack.includes("tableCell") &&
                                               (r = r.replace(/\|/g, "\\$&")),
                                           r
                                  },
                                  table : function(e, t, n, r) {
                                    return l(function(e, t, n) {
                                      let r = e.children, o = -1, i = [],
                                          c = t.enter("table");
                                      for (; ++o < r.length;)
                                        i[o] = a(r[o], t, n);
                                      return c(), i
                                    }(e, n, r), e.align)
                                  },
                                  tableCell : c,
                                  tableRow : function(e, t, n, r) {
                                    let o = l([ a(e, n, r) ]);
                                    return o.slice(0, o.indexOf("\n"))
                                  }
                                }
                              };
                              function c(e, t, n, r) {
                                let o = n.enter("tableCell"),
                                    c = n.enter("phrasing"),
                                    l = n.containerPhrasing(
                                        e, {...r, before : i, after : i});
                                return c(), o(), l
                              }
                              function l(e, t) {
                                return function(e, t = {}) {
                                  let n = (t.align || []).concat(),
                                      r = t.stringLength || L, o = [], i = [],
                                      c = [], l = [], a = 0, u = -1;
                                  for (; ++u < e.length;) {
                                    let n = [], o = [], f = -1;
                                    for (e[u].length > a && (a = e[u].length);
                                         ++f < e[u].length;) {
                                      var s;
                                      let i = null == (s = e[u][f]) ? ""
                                                                    : String(s);
                                      if (!1 !== t.alignDelimiters) {
                                        let e = r(i);
                                        o[f] = e,
                                        (void 0 === l[f] || e > l[f]) &&
                                            (l[f] = e)
                                      }
                                      n.push(i)
                                    }
                                    i[u] = n, c[u] = o
                                  }
                                  let f = -1;
                                  if ("object" == typeof n && "length" in n)
                                    for (; ++f < a;)
                                      o[f] = N(n[f]);
                                  else {
                                    let e = N(n);
                                    for (; ++f < a;)
                                      o[f] = e
                                  }
                                  f = -1;
                                  let d = [], p = [];
                                  for (; ++f < a;) {
                                    let e = o[f], n = "", r = "";
                                    99 === e    ? (n = ":", r = ":")
                                    : 108 === e ? n = ":"
                                                : 114 === e && (r = ":");
                                    let i = !1 === t.alignDelimiters
                                                ? 1
                                                : Math.max(1, l[f] - n.length -
                                                                  r.length),
                                        c = n + "-".repeat(i) + r;
                                    !1 !== t.alignDelimiters &&
                                        ((i = n.length + i + r.length) > l[f] &&
                                             (l[f] = i),
                                         p[f] = i),
                                        d[f] = c
                                  }
                                  i.splice(1, 0, d), c.splice(1, 0, p), u = -1;
                                  let h = [];
                                  for (; ++u < i.length;) {
                                    let e = i[u], n = c[u];
                                    f = -1;
                                    let r = [];
                                    for (; ++f < a;) {
                                      let i = e[f] || "", c = "", u = "";
                                      if (!1 !== t.alignDelimiters) {
                                        let e = l[f] - (n[f] || 0), t = o[f];
                                        114 === t ? c = " ".repeat(e)
                                        : 99 === t
                                            ? e % 2
                                                  ? (c = " ".repeat(e / 2 + .5),
                                                     u = " ".repeat(e / 2 - .5))
                                                  : u = c = " ".repeat(e / 2)
                                            : u = " ".repeat(e)
                                      }
                                      !1 === t.delimiterStart || f ||
                                          r.push("|"),
                                          !1 !== t.padding &&
                                              !(!1 === t.alignDelimiters &&
                                                "" === i) &&
                                              (!1 !== t.delimiterStart || f) &&
                                              r.push(" "),
                                          !1 !== t.alignDelimiters && r.push(c),
                                          r.push(i),
                                          !1 !== t.alignDelimiters && r.push(u),
                                          !1 !== t.padding && r.push(" "),
                                          (!1 !== t.delimiterEnd ||
                                           f !== a - 1) &&
                                              r.push("|")
                                    }
                                    h.push(!1 === t.delimiterEnd
                                               ? r.join("").replace(/ +$/, "")
                                               : r.join(""))
                                  }
                                  return h.join("\n")
                                }(e, {
                                  align : t,
                                  alignDelimiters : r,
                                  padding : n,
                                  stringLength : o
                                })
                              }
                              function a(e, t, n) {
                                let r = e.children, o = -1, i = [],
                                    l = t.enter("tableRow");
                                for (; ++o < r.length;)
                                  i[o] = c(r[o], e, t, n);
                                return l(), i
                              }
                            }(t),
                            {
                              unsafe : [
                                {atBreak : !0, character : "-", after : "[:|-]"}
                              ],
                              handlers : {listItem : G}
                            }
                          ]
                        })
                  }
                },
            6093 : function(e, t, n) {
              "use strict";
              n.d(t, {O : function() { return r }});
              let r = function(e) {
                if (null == e)
                  return i;
                if ("function" == typeof e)
                  return o(e);
                if ("object" == typeof e)
                  return Array.isArray(e) ? function(e) {
                    let t = [], n = -1;
                    for (; ++n < e.length;)
                      t[n] = r(e[n]);
                    return o(function(...e) {
                      let n = -1;
                      for (; ++n < t.length;)
                        if (t[n].apply(this, e))
                          return !0;
                      return !1
                    })
                  }(e) : o(function(t) {
                    let n;
                    for (n in e)
                      if (t[n] !== e[n])
                        return !1;
                    return !0
                  });
                if ("string" == typeof e)
                  return o(function(t) { return t && t.type === e });
                throw Error("Expected function, string, or object as test")
              };
              function o(e) {
                return function(t, n, r) {
                  var o;
                  return !!(null !== (o = t) && "object" == typeof o &&
                            "type" in o &&
                            e.call(this, t, "number" == typeof n ? n : void 0,
                                   r || void 0))
                }
              }
              function i() { return !0 }
            },
            8718 : function(e, t, n) {
              "use strict";
              n.d(t,
                  {BK : function() { return i }, S4 : function() { return c }});
              var r = n(6093);
              let o = [], i = !1;
              function c(e, t, n, c) {
                let l;
                "function" == typeof t && "function" != typeof n
                    ? (c = n, n = t)
                    : l = t;
                let a = (0, r.O)(l), u = c ? -1 : 1;
                (function e(r, l, s) {
                  let f = r && "object" == typeof r ? r : {};
                  if ("string" == typeof f.type) {
                    let e = "string" == typeof f.tagName ? f.tagName
                            : "string" == typeof f.name  ? f.name
                                                         : void 0;
                    Object.defineProperty(d, "name", {
                      value : "node (" + r.type + (e ? "<" + e + ">" : "") + ")"
                    })
                  }
                  return d;
                  function d() {
                    var f;
                    let d, p, h, m = o;
                    if ((!t || a(r, l, s[s.length - 1] || void 0)) &&
                        (m = Array.isArray(f = n(r, s)) ? f
                             : "number" == typeof f     ? [ !0, f ]
                             : null == f                ? o
                                                        : [ f ])[0] === i)
                      return m;
                    if ("children" in r && r.children && r.children &&
                        "skip" !== m[0])
                      for (p = (c ? r.children.length : -1) + u,
                          h = s.concat(r);
                           p > -1 && p < r.children.length;) {
                        if ((d = e(r.children[p], p, h)())[0] === i)
                          return d;
                        p = "number" == typeof d[1] ? d[1] : p + u
                      }
                    return m
                  }
                })(e, void 0, [])()
              }
            },
            1623 : function(e, t, n) {
              "use strict";
              n.d(t, {Vn : function() { return o }});
              var r = n(8718);
              function o(e, t, n, o) {
                let i, c, l;
                "function" == typeof t && "function" != typeof n
                    ? (c = void 0, l = t, i = n)
                    : (c = t, l = n, i = o),
                    (0, r.S4)(e, c, function(e, t) {
                      let n = t[t.length - 1],
                          r = n ? n.children.indexOf(e) : void 0;
                      return l(e, r, n)
                    }, i)
              }
            }
          }
        ]);