(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [ 922 ], {
    843 : function(e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/posts/[slug]", function() { return s(3257) }
      ])
    },
    3257 : function(e, t, s) {
      "use strict";
      s.r(t), s.d(t, {
        __N_SSG : function() { return N },
        default : function() { return f }
      });
      var a = s(5893), n = s(7168), i = s(3944), l = s(9008), r = s.n(l),
          c = s(5675), d = s.n(c), o = s(8773), u = s(5152), h = s.n(u),
          x = s(1664), p = s.n(x), m = s(8258), g = s(5186);
      let j = h()(() => s.e(295).then(s.bind(s, 3295)),
                  {loadableGenerated : {webpack : () => [3295]}, ssr : !1});
      var N = !0;
      function f(e) {
        let {data : t,
             content : s,
             otherPosts :
                 l} = e,
                 c = {
                   url : "https://capedevs.github.io/posts/".concat(t.slug),
                   identifier : t.slug,
                   title : t.title
                 },
                 u = "https://capedevs.github.io/posts/".concat(t.slug),
                 h = /!\[.*?\]\((.*?)\)/g, x = s.match(h),
                 N = x ? x.map(e => {
                            let t = e.match(/\((.*?)\)/);
                            return t ? t[1] : null
                          }).filter(e => null !== e)
                       : [],
                 f = s.replace(h, "");
        return (0, a.jsxs)("div", {
          className : "prose prose-lg max-w-3xl mx-auto pt-24 px-4",
          children : [
            (0, a.jsxs)(r(), {
              children : [
                (0, a.jsx)("title", {children : t.title}),
                (0, a.jsx)("meta", {property : "og:title", content : t.title}),
                (0,
                 a.jsx)("meta",
                        {property : "og:description", content : t.description}),
                (0, a.jsx)("meta", {property : "og:image", content : t.image}),
                (0, a.jsx)("meta", {
                  property : "og:url",
                  content : "https://capedevs.github.io/posts/".concat(t.slug)
                })
              ]
            }),
            (0, a.jsx)("h1", {children : t.title}),
            (0, a.jsx)("p", {children : t.description}), (0, a.jsx)("p", {
              className : "text-gray-500 text-sm",
              children : t.date && !isNaN(new Date(t.date))
                             ? (0, n.WU)(new Date(t.date), "MMM dd, yyyy")
                             : "Invalid date"
            }),
            (0, a.jsxs)("p", {
              className : "flex items-center",
              children :
                  [ (0, a.jsx)(o.Xws, {className : "mr-2"}), " ", t.author ]
            }),
            (0, a.jsx)(j, {remarkPlugins : [ g.Z ], children : f}),
            N.length > 0 && (0, a.jsx)("div", {
              className : "gallery-grid mt-8",
              children : N.map((e, t) => (0, a.jsx)("div", {
                                 className : "gallery-item",
                                 children : (0, a.jsx)(d(), {
                                   src : e,
                                   alt : "Image ".concat(t + 1),
                                   width : 500,
                                   height : 300,
                                   layout : "responsive",
                                   objectFit : "contain"
                                 })
                               },
                                                    t))
            }),
            (0, a.jsxs)("div", {
              className :
                  "social-share-buttons flex justify-center space-x-4 mt-8",
              children : [
                (0, a.jsx)(m.Dk, {
                  url : u,
                  children : (0, a.jsx)(m.Vq, {size : 32, round : !0})
                }),
                (0, a.jsx)(m.N0, {
                  url : u,
                  children : (0, a.jsx)(m.ud, {size : 32, round : !0})
                }),
                (0, a.jsx)(m.r2, {
                  url : u,
                  children : (0, a.jsx)(m.pA, {size : 32, round : !0})
                }),
                (0, a.jsx)(m.cG, {
                  url : u,
                  children : (0, a.jsx)(m.LQ, {size : 32, round : !0})
                })
              ]
            }),
            (0, a.jsx)(i.qw,
                       {shortname : "https-capedevs-github-io", config : c}),
            (0, a.jsxs)("section", {
              className : "w-full mb-12 text-left",
              children : [
                (0, a.jsx)("h2", {
                  className :
                      "text-2xl font-semibold text-left text-gray-800 mb-4",
                  children : "READ MORE"
                }),
                l.map(
                    e => (0, a.jsx)(p(), {
                      href : "/posts/".concat(e.slug),
                      legacyBehavior : !0,
                      children : (0, a.jsxs)("a", {
                        className :
                            "block p-6 bg-white rounded-lg border-gray-200 shadow-md hover:bg-gray-100 mb-6 no-underline",
                        children : [
                          (0, a.jsx)("h3", {
                            className : "text-xl font-bold",
                            children : e.data.title
                          }),
                          (0, a.jsx)("p", {
                            className : "text-gray-700",
                            children :
                                e.data.description &&
                                        e.data.description.length > 100
                                    ? e.data.description.substring(0, 100) +
                                          "..."
                                    : e.data.description
                          }),
                          (0, a.jsx)("p", {
                            className : "text-gray-500 text-sm",
                            children :
                                e.data.date && !isNaN(new Date(e.data.date))
                                    ? (0, n.WU)(new Date(e.data.date),
                                                "MMM dd, yyyy")
                                    : "Invalid date"
                          })
                        ]
                      })
                    },
                                    e.slug))
              ]
            })
          ]
        })
      }
    }
  },
  function(e) {
    e.O(0, [ 365, 168, 31, 888, 774, 179 ], function() { return e(e.s = 843) }),
        _N_E = e.O()
  }
]);