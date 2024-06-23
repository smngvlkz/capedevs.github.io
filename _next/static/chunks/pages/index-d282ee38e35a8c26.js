(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(2285);
        },
      ]);
    },
    2285: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSG: function () {
            return r;
          },
          default: function () {
            return i;
          },
        });
      var n = a(5893),
        s = a(7168),
        l = a(1664),
        c = a.n(l),
        r = !0;
      function i(e) {
        let { posts: t } = e;
        return (0, n.jsx)("div", {
          className: "flex flex-col min-h-screen items-center bg-gray-50 pt-24",
          children: (0, n.jsxs)("main", {
            className:
              "flex flex-col items-center py-12 text-center container mx-auto px-4",
            children: [
              (0, n.jsx)("h1", {
                className: "text-4xl font-bold mb-6 text-gray-800",
                children:
                  "The Cape Software Community hosts a monthly meetup in Cape Town, South Africa",
              }),
              (0, n.jsxs)("section", {
                className: "w-full mb-12 text-left",
                children: [
                  (0, n.jsx)("h2", {
                    className:
                      "text-2xl font-semibold text-left text-gray-800 mb-4",
                    children: "Latest",
                  }),
                  t.slice(0, 3).map((e) =>
                    (0, n.jsx)(
                      c(),
                      {
                        href: "/posts/".concat(e.slug),
                        legacyBehavior: !0,
                        children: (0, n.jsxs)("a", {
                          className:
                            "block p-6 bg-white rounded-lg border-gray-200 mb-4 shadow-md hover:bg-gray-100",
                          children: [
                            (0, n.jsx)("h3", {
                              className: "text-xl font-bold",
                              children: e.data.title,
                            }),
                            (0, n.jsx)("p", {
                              className: "text-gray-700",
                              children:
                                e.data.description &&
                                e.data.description.length > 100
                                  ? e.data.description.substring(0, 100) + "..."
                                  : e.data.description,
                            }),
                            (0, n.jsx)("p", {
                              className: "text-gray-500 text-sm",
                              children:
                                e.data.date && !isNaN(new Date(e.data.date))
                                  ? (0, s.WU)(
                                      new Date(e.data.date),
                                      "MMM dd, yyyy",
                                    )
                                  : "Invalid date",
                            }),
                          ],
                        }),
                      },
                      e.slug,
                    ),
                  ),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [168, 888, 774, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);
