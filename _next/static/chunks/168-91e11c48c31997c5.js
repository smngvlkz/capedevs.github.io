"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [ 168 ], {
    7168 : function(t, e, n) {
      var r;
      n.d(e, {WU : function() { return z }});
      let a = {
        lessThanXSeconds :
            {one : "less than a second", other : "less than {{count}} seconds"},
        xSeconds : {one : "1 second", other : "{{count}} seconds"},
        halfAMinute : "half a minute",
        lessThanXMinutes :
            {one : "less than a minute", other : "less than {{count}} minutes"},
        xMinutes : {one : "1 minute", other : "{{count}} minutes"},
        aboutXHours : {one : "about 1 hour", other : "about {{count}} hours"},
        xHours : {one : "1 hour", other : "{{count}} hours"},
        xDays : {one : "1 day", other : "{{count}} days"},
        aboutXWeeks : {one : "about 1 week", other : "about {{count}} weeks"},
        xWeeks : {one : "1 week", other : "{{count}} weeks"},
        aboutXMonths :
            {one : "about 1 month", other : "about {{count}} months"},
        xMonths : {one : "1 month", other : "{{count}} months"},
        aboutXYears : {one : "about 1 year", other : "about {{count}} years"},
        xYears : {one : "1 year", other : "{{count}} years"},
        overXYears : {one : "over 1 year", other : "over {{count}} years"},
        almostXYears : {one : "almost 1 year", other : "almost {{count}} years"}
      };
      function i(t) {
        return function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0]
                                                                  : {},
              n = e.width ? String(e.width) : t.defaultWidth;
          return t.formats[n] || t.formats[t.defaultWidth]
        }
      }
      let o = {
        date : i({
          formats : {
            full : "EEEE, MMMM do, y",
            long : "MMMM do, y",
            medium : "MMM d, y",
            short : "MM/dd/yyyy"
          },
          defaultWidth : "full"
        }),
        time : i({
          formats : {
            full : "h:mm:ss a zzzz",
            long : "h:mm:ss a z",
            medium : "h:mm:ss a",
            short : "h:mm a"
          },
          defaultWidth : "full"
        }),
        dateTime : i({
          formats : {
            full : "{{date}} 'at' {{time}}",
            long : "{{date}} 'at' {{time}}",
            medium : "{{date}}, {{time}}",
            short : "{{date}}, {{time}}"
          },
          defaultWidth : "full"
        })
      },
          u = {
            lastWeek : "'last' eeee 'at' p",
            yesterday : "'yesterday at' p",
            today : "'today at' p",
            tomorrow : "'tomorrow at' p",
            nextWeek : "eeee 'at' p",
            other : "P"
          };
      function l(t) {
        return (e, n) => {
          let r;
          if ("formatting" === ((null == n ? void 0 : n.context)
                                    ? String(n.context)
                                    : "standalone") &&
              t.formattingValues) {
            let e = t.defaultFormattingWidth || t.defaultWidth,
                a = (null == n ? void 0 : n.width) ? String(n.width) : e;
            r = t.formattingValues[a] || t.formattingValues[e]
          } else {
            let e = t.defaultWidth, a = (null == n ? void 0 : n.width)
                                            ? String(n.width)
                                            : t.defaultWidth;
            r = t.values[a] || t.values[e]
          }
          return r[t.argumentCallback ? t.argumentCallback(e) : e]
        }
      }
      function d(t) {
        return function(e) {
          let n,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1]
                                                                  : {},
              a = r.width,
              i = a && t.matchPatterns[a] ||
                  t.matchPatterns[t.defaultMatchWidth],
              o = e.match(i);
          if (!o)
            return null;
          let u = o[0],
              l = a && t.parsePatterns[a] ||
                  t.parsePatterns[t.defaultParseWidth],
              d = Array.isArray(l) ? function(t, e) {
                for (let n = 0; n < t.length; n++)
                  if (e(t[n]))
                    return n
              }(l, t => t.test(u)) : function(t, e) {
                for (let n in t)
                  if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
                    return n
              }(l, t => t.test(u));
          return n = t.valueCallback ? t.valueCallback(d) : d, {
            value: n = r.valueCallback ? r.valueCallback(n) : n,
                   rest: e.slice(u.length)
          }
        }
      }
      let s = {
        code : "en-US",
        formatDistance : (t, e, n) => {
          let r;
          let i = a[t];
          return (r = "string" == typeof i ? i
                      : 1 === e            ? i.one
                                : i.other.replace("{{count}}", e.toString()),
                  null == n ? void 0 : n.addSuffix)
                     ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago"
                     : r
        },
        formatLong : o,
        formatRelative : (t, e, n, r) => u[t],
        localize : {
          ordinalNumber : (t, e) => {
            let n = Number(t), r = n % 100;
            if (r > 20 || r < 10)
              switch (r % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd"
              }
            return n + "th"
          },
          era : l({
            values : {
              narrow : [ "B", "A" ],
              abbreviated : [ "BC", "AD" ],
              wide : [ "Before Christ", "Anno Domini" ]
            },
            defaultWidth : "wide"
          }),
          quarter : l({
            values : {
              narrow : [ "1", "2", "3", "4" ],
              abbreviated : [ "Q1", "Q2", "Q3", "Q4" ],
              wide :
                  [ "1st quarter", "2nd quarter", "3rd quarter", "4th quarter" ]
            },
            defaultWidth : "wide",
            argumentCallback : t => t - 1
          }),
          month : l({
            values : {
              narrow : [
                "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"
              ],
              abbreviated : [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
                "Oct", "Nov", "Dec"
              ],
              wide : [
                "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"
              ]
            },
            defaultWidth : "wide"
          }),
          day : l({
            values : {
              narrow : [ "S", "M", "T", "W", "T", "F", "S" ],
              short : [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
              abbreviated : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
              wide : [
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday"
              ]
            },
            defaultWidth : "wide"
          }),
          dayPeriod : l({
            values : {
              narrow : {
                am : "a",
                pm : "p",
                midnight : "mi",
                noon : "n",
                morning : "morning",
                afternoon : "afternoon",
                evening : "evening",
                night : "night"
              },
              abbreviated : {
                am : "AM",
                pm : "PM",
                midnight : "midnight",
                noon : "noon",
                morning : "morning",
                afternoon : "afternoon",
                evening : "evening",
                night : "night"
              },
              wide : {
                am : "a.m.",
                pm : "p.m.",
                midnight : "midnight",
                noon : "noon",
                morning : "morning",
                afternoon : "afternoon",
                evening : "evening",
                night : "night"
              }
            },
            defaultWidth : "wide",
            formattingValues : {
              narrow : {
                am : "a",
                pm : "p",
                midnight : "mi",
                noon : "n",
                morning : "in the morning",
                afternoon : "in the afternoon",
                evening : "in the evening",
                night : "at night"
              },
              abbreviated : {
                am : "AM",
                pm : "PM",
                midnight : "midnight",
                noon : "noon",
                morning : "in the morning",
                afternoon : "in the afternoon",
                evening : "in the evening",
                night : "at night"
              },
              wide : {
                am : "a.m.",
                pm : "p.m.",
                midnight : "midnight",
                noon : "noon",
                morning : "in the morning",
                afternoon : "in the afternoon",
                evening : "in the evening",
                night : "at night"
              }
            },
            defaultFormattingWidth : "wide"
          })
        },
        match : {
          ordinalNumber : (r = {
            matchPattern : /^(\d+)(th|st|nd|rd)?/i,
            parsePattern : /\d+/i,
            valueCallback : t => parseInt(t, 10)
          },
                           function(t) {
                             let e = arguments.length > 1 &&
                                             void 0 !== arguments[1]
                                         ? arguments[1]
                                         : {},
                                 n = t.match(r.matchPattern);
                             if (!n)
                               return null;
                             let a = n[0], i = t.match(r.parsePattern);
                             if (!i)
                               return null;
                             let o =
                                 r.valueCallback ? r.valueCallback(i[0]) : i[0];
                             return {
                               value: o =
                                   e.valueCallback ? e.valueCallback(o) : o,
                                      rest: t.slice(a.length)
                             }
                           }),
          era : d({
            matchPatterns : {
              narrow : /^(b|a)/i,
              abbreviated :
                  /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide :
                  /^(before christ|before common era|anno domini|common era)/i
            },
            defaultMatchWidth : "wide",
            parsePatterns : {any : [ /^b/i, /^(a|c)/i ]},
            defaultParseWidth : "any"
          }),
          quarter : d({
            matchPatterns : {
              narrow : /^[1234]/i,
              abbreviated : /^q[1234]/i,
              wide : /^[1234](th|st|nd|rd)? quarter/i
            },
            defaultMatchWidth : "wide",
            parsePatterns : {any : [ /1/i, /2/i, /3/i, /4/i ]},
            defaultParseWidth : "any",
            valueCallback : t => t + 1
          }),
          month : d({
            matchPatterns : {
              narrow : /^[jfmasond]/i,
              abbreviated :
                  /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide :
                  /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
            },
            defaultMatchWidth : "wide",
            parsePatterns : {
              narrow : [
                /^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i,
                /^o/i, /^n/i, /^d/i
              ],
              any : [
                /^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i,
                /^au/i, /^s/i, /^o/i, /^n/i, /^d/i
              ]
            },
            defaultParseWidth : "any"
          }),
          day : d({
            matchPatterns : {
              narrow : /^[smtwf]/i,
              short : /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated : /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide :
                  /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
            },
            defaultMatchWidth : "wide",
            parsePatterns : {
              narrow : [ /^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i ],
              any : [ /^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i ]
            },
            defaultParseWidth : "any"
          }),
          dayPeriod : d({
            matchPatterns : {
              narrow :
                  /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any :
                  /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
            },
            defaultMatchWidth : "any",
            parsePatterns : {
              any : {
                am : /^a/i,
                pm : /^p/i,
                midnight : /^mi/i,
                noon : /^no/i,
                morning : /morning/i,
                afternoon : /afternoon/i,
                evening : /evening/i,
                night : /night/i
              }
            },
            defaultParseWidth : "any"
          })
        },
        options : {weekStartsOn : 0, firstWeekContainsDate : 1}
      },
          c = {};
      function h(t) {
        let e = Object.prototype.toString.call(t);
        return t instanceof Date ||
                       "object" == typeof t && "[object Date]" === e
                   ? new t.constructor(+t)
                   : new Date("number" == typeof t || "[object Number]" === e ||
                                      "string" == typeof t ||
                                      "[object String]" === e
                                  ? t
                                  : NaN)
      }
      function m(t) {
        let e = h(t);
        return e.setHours(0, 0, 0, 0), e
      }
      function f(t) {
        let e = h(t),
            n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(),
                                  e.getHours(), e.getMinutes(), e.getSeconds(),
                                  e.getMilliseconds()));
        return n.setUTCFullYear(e.getFullYear()), +t - +n
      }
      function g(t, e) {
        return t instanceof Date ? new t.constructor(e) : new Date(e)
      }
      function w(t, e) {
        var n, r, a, i, o, u, l, d;
        let s = null !== (d = null !== (l = null !== (u = null !== (o = null == e
                                                                            ? void 0
                                                                            : e.weekStartsOn) &&
                                                                  void 0 !== o
                                                              ? o
                                                          : null == e ? void 0
                                                          : null === (r = e.locale) ||
                                                                  void 0 === r
                                                              ? void 0
                                                          : null === (n = r.options) ||
                                                                  void 0 === n
                                                              ? void 0
                                                              : n.weekStartsOn) &&
                                                    void 0 !== u
                                                ? u
                                                : c.weekStartsOn) &&
                                      void 0 !== l
                                  ? l
                              : null === (i = c.locale) || void 0 === i ? void 0
                              : null === (a = i.options) || void 0 === a
                                  ? void 0
                                  : a.weekStartsOn) &&
                        void 0 !== d
                    ? d
                    : 0,
            m = h(t), f = m.getDay();
        return m.setDate(m.getDate() - ((f < s ? 7 : 0) + f - s)),
               m.setHours(0, 0, 0, 0), m
      }
      function v(t) { return w(t, {weekStartsOn : 1}) }
      function b(t) {
        let e = h(t), n = e.getFullYear(), r = g(t, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        let a = v(r), i = g(t, 0);
        i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
        let o = v(i);
        return e.getTime() >= a.getTime()   ? n + 1
               : e.getTime() >= o.getTime() ? n
                                            : n - 1
      }
      function y(t, e) {
        var n, r, a, i, o, u, l, d;
        let s = h(t), m = s.getFullYear(),
            f = null !== (d = null !== (l = null !== (u = null !== (o = null == e
                                                                            ? void 0
                                                                            : e.firstWeekContainsDate) &&
                                                                  void 0 !== o
                                                              ? o
                                                          : null == e ? void 0
                                                          : null === (r = e.locale) ||
                                                                  void 0 === r
                                                              ? void 0
                                                          : null === (n = r.options) ||
                                                                  void 0 === n
                                                              ? void 0
                                                              : n.firstWeekContainsDate) &&
                                                    void 0 !== u
                                                ? u
                                                : c.firstWeekContainsDate) &&
                                      void 0 !== l
                                  ? l
                              : null === (i = c.locale) || void 0 === i ? void 0
                              : null === (a = i.options) || void 0 === a
                                  ? void 0
                                  : a.firstWeekContainsDate) &&
                        void 0 !== d
                    ? d
                    : 1,
            v = g(t, 0);
        v.setFullYear(m + 1, 0, f), v.setHours(0, 0, 0, 0);
        let b = w(v, e), y = g(t, 0);
        y.setFullYear(m, 0, f), y.setHours(0, 0, 0, 0);
        let p = w(y, e);
        return s.getTime() >= b.getTime()   ? m + 1
               : s.getTime() >= p.getTime() ? m
                                            : m - 1
      }
      function p(t, e) {
        let n = Math.abs(t).toString().padStart(e, "0");
        return (t < 0 ? "-" : "") + n
      }
      let M = {
        y(t, e) {
          let n = t.getFullYear(), r = n > 0 ? n : 1 - n;
          return p("yy" === e ? r % 100 : r, e.length)
        },
        M(t, e) {
          let n = t.getMonth();
          return "M" === e ? String(n + 1) : p(n + 1, 2)
        },
        d : (t, e) => p(t.getDate(), e.length),
        a(t, e) {
          let n = t.getHours() / 12 >= 1 ? "pm" : "am";
          switch (e) {
          case "a":
          case "aa":
            return n.toUpperCase();
          case "aaa":
            return n;
          case "aaaaa":
            return n[0];
          default:
            return "am" === n ? "a.m." : "p.m."
          }
        },
        h : (t, e) => p(t.getHours() % 12 || 12, e.length),
        H : (t, e) => p(t.getHours(), e.length),
        m : (t, e) => p(t.getMinutes(), e.length),
        s : (t, e) => p(t.getSeconds(), e.length),
        S(t, e) {
          let n = e.length;
          return p(Math.trunc(t.getMilliseconds() * Math.pow(10, n - 3)),
                   e.length)
        }
      },
          k = {
            midnight : "midnight",
            noon : "noon",
            morning : "morning",
            afternoon : "afternoon",
            evening : "evening",
            night : "night"
          },
          x = {
            G : function(t, e, n) {
              let r = t.getFullYear() > 0 ? 1 : 0;
              switch (e) {
              case "G":
              case "GG":
              case "GGG":
                return n.era(r, {width : "abbreviated"});
              case "GGGGG":
                return n.era(r, {width : "narrow"});
              default:
                return n.era(r, {width : "wide"})
              }
            },
            y : function(t, e, n) {
              if ("yo" === e) {
                let e = t.getFullYear();
                return n.ordinalNumber(e > 0 ? e : 1 - e, {unit : "year"})
              }
              return M.y(t, e)
            },
            Y : function(t, e, n, r) {
              let a = y(t, r), i = a > 0 ? a : 1 - a;
              return "YY" === e   ? p(i % 100, 2)
                     : "Yo" === e ? n.ordinalNumber(i, {unit : "year"})
                                  : p(i, e.length)
            },
            R : function(t, e) { return p(b(t), e.length) },
            u : function(t, e) { return p(t.getFullYear(), e.length) },
            Q : function(t, e, n) {
              let r = Math.ceil((t.getMonth() + 1) / 3);
              switch (e) {
              case "Q":
                return String(r);
              case "QQ":
                return p(r, 2);
              case "Qo":
                return n.ordinalNumber(r, {unit : "quarter"});
              case "QQQ":
                return n.quarter(
                    r, {width : "abbreviated", context : "formatting"});
              case "QQQQQ":
                return n.quarter(r, {width : "narrow", context : "formatting"});
              default:
                return n.quarter(r, {width : "wide", context : "formatting"})
              }
            },
            q : function(t, e, n) {
              let r = Math.ceil((t.getMonth() + 1) / 3);
              switch (e) {
              case "q":
                return String(r);
              case "qq":
                return p(r, 2);
              case "qo":
                return n.ordinalNumber(r, {unit : "quarter"});
              case "qqq":
                return n.quarter(
                    r, {width : "abbreviated", context : "standalone"});
              case "qqqqq":
                return n.quarter(r, {width : "narrow", context : "standalone"});
              default:
                return n.quarter(r, {width : "wide", context : "standalone"})
              }
            },
            M : function(t, e, n) {
              let r = t.getMonth();
              switch (e) {
              case "M":
              case "MM":
                return M.M(t, e);
              case "Mo":
                return n.ordinalNumber(r + 1, {unit : "month"});
              case "MMM":
                return n.month(r,
                               {width : "abbreviated", context : "formatting"});
              case "MMMMM":
                return n.month(r, {width : "narrow", context : "formatting"});
              default:
                return n.month(r, {width : "wide", context : "formatting"})
              }
            },
            L : function(t, e, n) {
              let r = t.getMonth();
              switch (e) {
              case "L":
                return String(r + 1);
              case "LL":
                return p(r + 1, 2);
              case "Lo":
                return n.ordinalNumber(r + 1, {unit : "month"});
              case "LLL":
                return n.month(r,
                               {width : "abbreviated", context : "standalone"});
              case "LLLLL":
                return n.month(r, {width : "narrow", context : "standalone"});
              default:
                return n.month(r, {width : "wide", context : "standalone"})
              }
            },
            w : function(t, e, n, r) {
              let a = function(t, e) {
                let n = h(t);
                return Math.round(
                           (+w(n, e) -
                            +function(t, e) {
                              var n, r, a, i, o, u, l, d;
                              let s = null !== (d = null !== (l = null !== (u = null !== (o = null == e
                                                                                                  ? void 0
                                                                                                  : e.firstWeekContainsDate) &&
                                                                                        void 0 !==
                                                                                            o
                                                                                    ? o
                                                                                : null ==
                                                                                        e
                                                                                    ? void 0
                                                                                : null === (r = e.locale) ||
                                                                                        void 0 ===
                                                                                            r
                                                                                    ? void 0
                                                                                : null === (n = r.options) ||
                                                                                        void 0 ===
                                                                                            n
                                                                                    ? void 0
                                                                                    : n.firstWeekContainsDate) &&
                                                                          void 0 !==
                                                                              u
                                                                      ? u
                                                                      : c.firstWeekContainsDate) &&
                                                            void 0 !== l
                                                        ? l
                                                    : null === (i = c.locale) ||
                                                            void 0 === i
                                                        ? void 0
                                                    : null === (a = i.options) ||
                                                            void 0 === a
                                                        ? void 0
                                                        : a.firstWeekContainsDate) &&
                                              void 0 !== d
                                          ? d
                                          : 1,
                                  h = y(t, e), m = g(t, 0);
                              return m.setFullYear(h, 0, s),
                                     m.setHours(0, 0, 0, 0), w(m, e)
                            }(n, e)) /
                           6048e5) +
                       1
              }(t, r);
              return "wo" === e ? n.ordinalNumber(a, {unit : "week"})
                                : p(a, e.length)
            },
            I : function(t, e, n) {
              let r = function(t) {
                let e = h(t);
                return Math.round((+v(e) - +function(t) {
                                    let e = b(t), n = g(t, 0);
                                    return n.setFullYear(e, 0, 4),
                                           n.setHours(0, 0, 0, 0), v(n)
                                  }(e)) / 6048e5) + 1
              }(t);
              return "Io" === e ? n.ordinalNumber(r, {unit : "week"})
                                : p(r, e.length)
            },
            d : function(t, e, n) {
              return "do" === e ? n.ordinalNumber(t.getDate(), {unit : "date"})
                                : M.d(t, e)
            },
            D : function(t, e, n) {
              let r = function(t) {
                let e = h(t);
                return function(t, e) {
                  let n = m(t), r = m(e);
                  return Math.round((+n - f(n) - (+r - f(r))) / 864e5)
                }(e,
                       function(t) {
                         let e = h(t), n = g(t, 0);
                         return n.setFullYear(e.getFullYear(), 0, 1),
                                n.setHours(0, 0, 0, 0), n
                       }(e)) +
                       1
              }(t);
              return "Do" === e ? n.ordinalNumber(r, {unit : "dayOfYear"})
                                : p(r, e.length)
            },
            E : function(t, e, n) {
              let r = t.getDay();
              switch (e) {
              case "E":
              case "EE":
              case "EEE":
                return n.day(r,
                             {width : "abbreviated", context : "formatting"});
              case "EEEEE":
                return n.day(r, {width : "narrow", context : "formatting"});
              case "EEEEEE":
                return n.day(r, {width : "short", context : "formatting"});
              default:
                return n.day(r, {width : "wide", context : "formatting"})
              }
            },
            e : function(t, e, n, r) {
              let a = t.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
              switch (e) {
              case "e":
                return String(i);
              case "ee":
                return p(i, 2);
              case "eo":
                return n.ordinalNumber(i, {unit : "day"});
              case "eee":
                return n.day(a,
                             {width : "abbreviated", context : "formatting"});
              case "eeeee":
                return n.day(a, {width : "narrow", context : "formatting"});
              case "eeeeee":
                return n.day(a, {width : "short", context : "formatting"});
              default:
                return n.day(a, {width : "wide", context : "formatting"})
              }
            },
            c : function(t, e, n, r) {
              let a = t.getDay(), i = (a - r.weekStartsOn + 8) % 7 || 7;
              switch (e) {
              case "c":
                return String(i);
              case "cc":
                return p(i, e.length);
              case "co":
                return n.ordinalNumber(i, {unit : "day"});
              case "ccc":
                return n.day(a,
                             {width : "abbreviated", context : "standalone"});
              case "ccccc":
                return n.day(a, {width : "narrow", context : "standalone"});
              case "cccccc":
                return n.day(a, {width : "short", context : "standalone"});
              default:
                return n.day(a, {width : "wide", context : "standalone"})
              }
            },
            i : function(t, e, n) {
              let r = t.getDay(), a = 0 === r ? 7 : r;
              switch (e) {
              case "i":
                return String(a);
              case "ii":
                return p(a, e.length);
              case "io":
                return n.ordinalNumber(a, {unit : "day"});
              case "iii":
                return n.day(r,
                             {width : "abbreviated", context : "formatting"});
              case "iiiii":
                return n.day(r, {width : "narrow", context : "formatting"});
              case "iiiiii":
                return n.day(r, {width : "short", context : "formatting"});
              default:
                return n.day(r, {width : "wide", context : "formatting"})
              }
            },
            a : function(t, e, n) {
              let r = t.getHours() / 12 >= 1 ? "pm" : "am";
              switch (e) {
              case "a":
              case "aa":
                return n.dayPeriod(
                    r, {width : "abbreviated", context : "formatting"});
              case "aaa":
                return n
                    .dayPeriod(r,
                               {width : "abbreviated", context : "formatting"})
                    .toLowerCase();
              case "aaaaa":
                return n.dayPeriod(r,
                                   {width : "narrow", context : "formatting"});
              default:
                return n.dayPeriod(r, {width : "wide", context : "formatting"})
              }
            },
            b : function(t, e, n) {
              let r;
              let a = t.getHours();
              switch (r = 12 === a      ? k.noon
                          : 0 === a     ? k.midnight
                          : a / 12 >= 1 ? "pm"
                                        : "am",
                      e) {
              case "b":
              case "bb":
                return n.dayPeriod(
                    r, {width : "abbreviated", context : "formatting"});
              case "bbb":
                return n
                    .dayPeriod(r,
                               {width : "abbreviated", context : "formatting"})
                    .toLowerCase();
              case "bbbbb":
                return n.dayPeriod(r,
                                   {width : "narrow", context : "formatting"});
              default:
                return n.dayPeriod(r, {width : "wide", context : "formatting"})
              }
            },
            B : function(t, e, n) {
              let r;
              let a = t.getHours();
              switch (r = a >= 17   ? k.evening
                          : a >= 12 ? k.afternoon
                          : a >= 4  ? k.morning
                                    : k.night,
                      e) {
              case "B":
              case "BB":
              case "BBB":
                return n.dayPeriod(
                    r, {width : "abbreviated", context : "formatting"});
              case "BBBBB":
                return n.dayPeriod(r,
                                   {width : "narrow", context : "formatting"});
              default:
                return n.dayPeriod(r, {width : "wide", context : "formatting"})
              }
            },
            h : function(t, e, n) {
              if ("ho" === e) {
                let e = t.getHours() % 12;
                return 0 === e && (e = 12), n.ordinalNumber(e, {unit : "hour"})
              }
              return M.h(t, e)
            },
            H : function(t, e, n) {
              return "Ho" === e ? n.ordinalNumber(t.getHours(), {unit : "hour"})
                                : M.H(t, e)
            },
            K : function(t, e, n) {
              let r = t.getHours() % 12;
              return "Ko" === e ? n.ordinalNumber(r, {unit : "hour"})
                                : p(r, e.length)
            },
            k : function(t, e, n) {
              let r = t.getHours();
              return (0 === r && (r = 24), "ko" === e)
                         ? n.ordinalNumber(r, {unit : "hour"})
                         : p(r, e.length)
            },
            m : function(t, e, n) {
              return "mo" === e
                         ? n.ordinalNumber(t.getMinutes(), {unit : "minute"})
                         : M.m(t, e)
            },
            s : function(t, e, n) {
              return "so" === e
                         ? n.ordinalNumber(t.getSeconds(), {unit : "second"})
                         : M.s(t, e)
            },
            S : function(t, e) { return M.S(t, e) },
            X : function(t, e, n) {
              let r = t.getTimezoneOffset();
              if (0 === r)
                return "Z";
              switch (e) {
              case "X":
                return S(r);
              case "XXXX":
              case "XX":
                return W(r);
              default:
                return W(r, ":")
              }
            },
            x : function(t, e, n) {
              let r = t.getTimezoneOffset();
              switch (e) {
              case "x":
                return S(r);
              case "xxxx":
              case "xx":
                return W(r);
              default:
                return W(r, ":")
              }
            },
            O : function(t, e, n) {
              let r = t.getTimezoneOffset();
              switch (e) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + P(r, ":");
              default:
                return "GMT" + W(r, ":")
              }
            },
            z : function(t, e, n) {
              let r = t.getTimezoneOffset();
              switch (e) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + P(r, ":");
              default:
                return "GMT" + W(r, ":")
              }
            },
            t : function(
                t, e, n) { return p(Math.trunc(t.getTime() / 1e3), e.length) },
            T : function(t, e, n) { return p(t.getTime(), e.length) }
          };
      function P(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1]
                                                                : "",
            n = t > 0 ? "-" : "+", r = Math.abs(t), a = Math.trunc(r / 60),
            i = r % 60;
        return 0 === i ? n + String(a) : n + String(a) + e + p(i, 2)
      }
      function S(t, e) {
        return t % 60 == 0 ? (t > 0 ? "-" : "+") + p(Math.abs(t) / 60, 2)
                           : W(t, e)
      }
      function W(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1]
                                                                : "",
            n = Math.abs(t);
        return (t > 0 ? "-" : "+") + p(Math.trunc(n / 60), 2) + e + p(n % 60, 2)
      }
      let D =
              (t, e) => {
                switch (t) {
                case "P":
                  return e.date({width : "short"});
                case "PP":
                  return e.date({width : "medium"});
                case "PPP":
                  return e.date({width : "long"});
                default:
                  return e.date({width : "full"})
                }
              },
          T =
              (t, e) => {
                switch (t) {
                case "p":
                  return e.time({width : "short"});
                case "pp":
                  return e.time({width : "medium"});
                case "ppp":
                  return e.time({width : "long"});
                default:
                  return e.time({width : "full"})
                }
              },
          Y = {
            p : T,
            P : (t, e) => {
              let n;
              let r = t.match(/(P+)(p+)?/) || [], a = r[1], i = r[2];
              if (!i)
                return D(t, e);
              switch (a) {
              case "P":
                n = e.dateTime({width : "short"});
                break;
              case "PP":
                n = e.dateTime({width : "medium"});
                break;
              case "PPP":
                n = e.dateTime({width : "long"});
                break;
              default:
                n = e.dateTime({width : "full"})
              }
              return n.replace("{{date}}", D(a, e)).replace("{{time}}", T(i, e))
            }
          },
          C = /^D+$/, N = /^Y+$/, O = [ "D", "DD", "YY", "YYYY" ],
          q = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
          E = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, F = /^'([^]*?)'?$/,
          H = /''/g, j = /[a-zA-Z]/;
      function z(t, e, n) {
        var r, a, i, o, u, l, d, m, f, g, w, v, b, y, p, M, k, P;
        let S = null !== (g = null !== (f = null == n ? void 0 : n.locale) &&
                                      void 0 !== f
                                  ? f
                                  : c.locale) &&
                        void 0 !== g
                    ? g
                    : s,
            W = null !== (y = null !== (b = null !== (v = null !== (w = null == n
                                                                            ? void 0
                                                                            : n.firstWeekContainsDate) &&
                                                                  void 0 !== w
                                                              ? w
                                                          : null == n ? void 0
                                                          : null === (a = n.locale) ||
                                                                  void 0 === a
                                                              ? void 0
                                                          : null === (r = a.options) ||
                                                                  void 0 === r
                                                              ? void 0
                                                              : r.firstWeekContainsDate) &&
                                                    void 0 !== v
                                                ? v
                                                : c.firstWeekContainsDate) &&
                                      void 0 !== b
                                  ? b
                              : null === (o = c.locale) || void 0 === o ? void 0
                              : null === (i = o.options) || void 0 === i
                                  ? void 0
                                  : i.firstWeekContainsDate) &&
                        void 0 !== y
                    ? y
                    : 1,
            D = null !== (P = null !== (k = null !== (M = null !== (p = null == n
                                                                            ? void 0
                                                                            : n.weekStartsOn) &&
                                                                  void 0 !== p
                                                              ? p
                                                          : null == n ? void 0
                                                          : null === (l = n.locale) ||
                                                                  void 0 === l
                                                              ? void 0
                                                          : null === (u = l.options) ||
                                                                  void 0 === u
                                                              ? void 0
                                                              : u.weekStartsOn) &&
                                                    void 0 !== M
                                                ? M
                                                : c.weekStartsOn) &&
                                      void 0 !== k
                                  ? k
                              : null === (m = c.locale) || void 0 === m ? void 0
                              : null === (d = m.options) || void 0 === d
                                  ? void 0
                                  : d.weekStartsOn) &&
                        void 0 !== P
                    ? P
                    : 0,
            T = h(t);
        if (!((T instanceof Date ||
               "object" == typeof T &&
                   "[object Date]" === Object.prototype.toString.call(T) ||
               "number" == typeof T) &&
              !isNaN(Number(h(T)))))
          throw RangeError("Invalid time value");
        let z =
            e.match(E)
                .map(t => {
                  let e = t[0];
                  return "p" === e || "P" === e ? (0, Y[e])(t, S.formatLong) : t
                })
                .join("")
                .match(q)
                .map(t => {
                  if ("''" === t)
                    return {isToken : !1, value : "'"};
                  let e = t[0];
                  if ("'" === e)
                    return {
                      isToken : !1,
                      value : function(t) {
                        let e = t.match(F);
                        return e ? e[1].replace(H, "'") : t
                      }(t)
                    };
                  if (x[e])
                    return {isToken : !0, value : t};
                  if (e.match(j))
                    throw RangeError(
                        "Format string contains an unescaped latin alphabet character `" +
                        e + "`");
                  return { isToken: !1, value: t }
                });
        S.localize.preprocessor && (z = S.localize.preprocessor(T, z));
        let L = {firstWeekContainsDate : W, weekStartsOn : D, locale : S};
        return z
            .map(r => {
              if (!r.isToken)
                return r.value;
              let a = r.value;
              return (!(null == n ? void 0 : n.useAdditionalWeekYearTokens) &&
                          N.test(a) ||
                      !(null == n ? void 0 : n.useAdditionalDayOfYearTokens) &&
                          C.test(a)) &&
                         function(t, e, n) {
                           let r = function(t, e, n) {
                             let r =
                                 "Y" === t[0] ? "years" : "days of the month";
                             return "Use `"
                                 .concat(t.toLowerCase(), "` instead of `")
                                 .concat(t, "` (in `")
                                 .concat(e, "`) for formatting ")
                                 .concat(r, " to the input `")
                                 .concat(
                                     n,
                                     "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md")
                           }(t, e, n);
                           if (console.warn(r), O.includes(t))
                             throw RangeError(r)
                         }(a, e, String(t)),
                     (0, x[a[0]])(T, a, S.localize, L)
            })
            .join("")
      }
    }
  }
]);