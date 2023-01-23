;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    277: function (e, r, t) {},
    278: function (e, r, t) {},
    279: function (e, r, t) {},
    280: function (e, r, t) {},
    281: function (e, r, t) {},
    282: function (e, r, t) {},
    283: function (e, r) {
      e.exports = function (e) {
        return null == e
      }
    },
    284: function (e, r, t) {},
    285: function (e, r, t) {},
    286: function (e, r, t) {},
    287: function (e, r, t) {},
    288: function (e, r, t) {},
    289: function (e, r, t) {},
    299: function (e, r, t) {
      'use strict'
      t.r(r)
      var a = t(20),
        s = {
          name: 'SidebarGroup',
          components: { DropdownTransition: t(115).a },
          props: ['item', 'open', 'collapsable', 'depth'],
          beforeCreate() {
            this.$options.components.SidebarLinks = t(299).default
          },
          methods: { isActive: a.e }
        },
        i = (t(313), t(6)),
        o = Object(i.a)(
          s,
          function () {
            var e = this,
              r = e.$createElement,
              t = e._self._c || r
            return t(
              'section',
              {
                staticClass: 'sidebar-group',
                class: [
                  { collapsable: e.collapsable, 'is-sub-group': 0 !== e.depth },
                  'depth-' + e.depth
                ]
              },
              [
                e.item.path
                  ? t(
                      'RouterLink',
                      {
                        staticClass: 'sidebar-heading clickable',
                        class: {
                          open: e.open,
                          active: e.isActive(e.$route, e.item.path)
                        },
                        attrs: { to: e.item.path },
                        nativeOn: {
                          click: function (r) {
                            return e.$emit('toggle')
                          }
                        }
                      },
                      [
                        t('span', [e._v(e._s(e.item.title))]),
                        e._v(' '),
                        e.collapsable
                          ? t('span', {
                              staticClass: 'arrow',
                              class: e.open ? 'down' : 'right'
                            })
                          : e._e()
                      ]
                    )
                  : t(
                      'p',
                      {
                        staticClass: 'sidebar-heading',
                        class: { open: e.open },
                        on: {
                          click: function (r) {
                            return e.$emit('toggle')
                          }
                        }
                      },
                      [
                        t('span', [e._v(e._s(e.item.title))]),
                        e._v(' '),
                        e.collapsable
                          ? t('span', {
                              staticClass: 'arrow',
                              class: e.open ? 'down' : 'right'
                            })
                          : e._e()
                      ]
                    ),
                e._v(' '),
                t(
                  'DropdownTransition',
                  [
                    e.open || !e.collapsable
                      ? t('SidebarLinks', {
                          staticClass: 'sidebar-group-items',
                          attrs: {
                            items: e.item.children,
                            'sidebar-depth': e.item.sidebarDepth,
                            'initial-open-group-index':
                              e.item.initialOpenGroupIndex,
                            depth: e.depth + 1
                          }
                        })
                      : e._e()
                  ],
                  1
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports
      function n(e, r, t, a, s) {
        const i = {
          props: { to: r, activeClass: '', exactActiveClass: '' },
          class: { active: a, 'sidebar-link': !0 }
        }
        return (
          s > 2 && (i.style = { 'padding-left': s + 'rem' }),
          e('RouterLink', i, t)
        )
      }
      function l(e, r, t, s, i, o = 1) {
        return !r || o > i
          ? null
          : e(
              'ul',
              { class: 'sidebar-sub-headers' },
              r.map((r) => {
                const c = Object(a.e)(s, t + '#' + r.slug)
                return e('li', { class: 'sidebar-sub-header' }, [
                  n(e, t + '#' + r.slug, r.title, c, r.level - 1),
                  l(e, r.children, t, s, i, o + 1)
                ])
              })
            )
      }
      var c = {
        functional: !0,
        props: ['item', 'sidebarDepth'],
        render(
          e,
          {
            parent: {
              $page: r,
              $site: t,
              $route: s,
              $themeConfig: i,
              $themeLocaleConfig: o
            },
            props: { item: c, sidebarDepth: u }
          }
        ) {
          const p = Object(a.e)(s, c.path),
            h =
              'auto' === c.type
                ? p ||
                  c.children.some((e) =>
                    Object(a.e)(s, c.basePath + '#' + e.slug)
                  )
                : p,
            d =
              'external' === c.type
                ? (function (e, r, t) {
                    return e(
                      'a',
                      {
                        attrs: {
                          href: r,
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        },
                        class: { 'sidebar-link': !0 }
                      },
                      [t, e('OutboundLink')]
                    )
                  })(e, c.path, c.title || c.path)
                : n(e, c.path, c.title || c.path, h),
            g = [
              r.frontmatter.sidebarDepth,
              u,
              o.sidebarDepth,
              i.sidebarDepth,
              1
            ].find((e) => void 0 !== e),
            f = o.displayAllHeaders || i.displayAllHeaders
          if ('auto' === c.type) return [d, l(e, c.children, c.basePath, s, g)]
          if ((h || f) && c.headers && !a.d.test(c.path)) {
            return [d, l(e, Object(a.c)(c.headers), c.path, s, g)]
          }
          return d
        }
      }
      t(314)
      function u(e, r) {
        if ('group' === r.type) {
          const t = r.path && Object(a.e)(e, r.path),
            s = r.children.some((r) =>
              'group' === r.type
                ? u(e, r)
                : 'page' === r.type && Object(a.e)(e, r.path)
            )
          return t || s
        }
        return !1
      }
      var p = {
          name: 'SidebarLinks',
          components: {
            SidebarGroup: o,
            SidebarLink: Object(i.a)(c, void 0, void 0, !1, null, null, null)
              .exports
          },
          props: ['items', 'depth', 'sidebarDepth', 'initialOpenGroupIndex'],
          data() {
            return { openGroupIndex: this.initialOpenGroupIndex || 0 }
          },
          watch: {
            $route() {
              this.refreshIndex()
            }
          },
          created() {
            this.refreshIndex()
          },
          methods: {
            refreshIndex() {
              const e = (function (e, r) {
                for (let t = 0; t < r.length; t++) {
                  const a = r[t]
                  if (u(e, a)) return t
                }
                return -1
              })(this.$route, this.items)
              e > -1 && (this.openGroupIndex = e)
            },
            toggleGroup(e) {
              this.openGroupIndex = e === this.openGroupIndex ? -1 : e
            },
            isActive(e) {
              return Object(a.e)(this.$route, e.regularPath)
            }
          }
        },
        h = Object(i.a)(
          p,
          function () {
            var e = this,
              r = e.$createElement,
              t = e._self._c || r
            return e.items.length
              ? t(
                  'ul',
                  { staticClass: 'sidebar-links' },
                  e._l(e.items, function (r, a) {
                    return t(
                      'li',
                      { key: a },
                      [
                        'group' === r.type
                          ? t('SidebarGroup', {
                              attrs: {
                                item: r,
                                open: a === e.openGroupIndex,
                                collapsable: r.collapsable || r.collapsible,
                                depth: e.depth
                              },
                              on: {
                                toggle: function (r) {
                                  return e.toggleGroup(a)
                                }
                              }
                            })
                          : t('SidebarLink', {
                              attrs: {
                                'sidebar-depth': e.sidebarDepth,
                                item: r
                              }
                            })
                      ],
                      1
                    )
                  }),
                  0
                )
              : e._e()
          },
          [],
          !1,
          null,
          null,
          null
        )
      r.default = h.exports
    },
    300: function (e, r, t) {
      'use strict'
      t(277)
    },
    301: function (e, r, t) {
      'use strict'
      t(278)
    },
    302: function (e, r, t) {
      'use strict'
      !(function (r, t, a) {
        let s
        ;(s = a.define) && s.amd
          ? s([], function () {
              return t
            })
          : (s = a.modules)
          ? (s['FlexSearch'.toLowerCase()] = t)
          : (e.exports = t)
      })(
        0,
        (function e(r) {
          function t(e, r) {
            const t = r ? r.id : e && e.id
            ;(this.id = t || 0 === t ? t : S++),
              this.init(e, r),
              o(this, 'index', function () {
                return this.a
                  ? Object.keys(this.a.index[this.a.keys[0]].c)
                  : Object.keys(this.c)
              }),
              o(this, 'length', function () {
                return this.index.length
              })
          }
          function a(e, r, t, a) {
            return (
              this.u !== this.g &&
                ((this.o = this.o.concat(t)),
                this.u++,
                a && this.o.length >= a && (this.u = this.g),
                this.u === this.g &&
                  (this.cache && this.j.set(r, this.o),
                  this.F && this.F(this.o))),
              this
            )
          }
          function s(e, r) {
            const t = e.length,
              a = y(r),
              s = []
            for (let i = 0, o = 0; i < t; i++) {
              const t = e[i]
              ;((a && r(t)) || (!a && !r[t])) && (s[o++] = t)
            }
            return s
          }
          function i(e, r, t, a, s, i, o, n, l, c) {
            let u
            if (
              ((t = m(t, o ? 0 : s, n, i, r, l, c)),
              n && ((n = t.page), (u = t.next), (t = t.result)),
              o)
            )
              r = this.where(o, null, s, t)
            else {
              for (
                r = t, t = this.l, s = r.length, i = Array(s), o = 0;
                o < s;
                o++
              )
                i[o] = t[r[o]]
              r = i
            }
            return (
              (t = r),
              a &&
                (y(a) ||
                  ((R = a.split(':')),
                  1 < R.length ? (a = g) : ((R = R[0]), (a = d))),
                t.sort(a)),
              (t = f(n, u, t)),
              this.cache && this.j.set(e, t),
              t
            )
          }
          function o(e, r, t) {
            Object.defineProperty(e, r, { get: t })
          }
          function n(e) {
            return new RegExp(e, 'g')
          }
          function l(e, r) {
            for (let t = 0; t < r.length; t += 2) e = e.replace(r[t], r[t + 1])
            return e
          }
          function c(e, r, t, a, s, i, o, n) {
            return r[t]
              ? r[t]
              : ((s = s ? (n - (o || n / 1.5)) * i + (o || n / 1.5) * s : i),
                (r[t] = s),
                s >= o &&
                  ((e = (e = e[n - ((s + 0.5) >> 0)])[t] || (e[t] = []))[
                    e.length
                  ] = a),
                s)
          }
          function u(e, r) {
            if (e) {
              const t = Object.keys(e)
              for (let a = 0, s = t.length; a < s; a++) {
                const s = t[a],
                  i = e[s]
                if (i)
                  for (let t = 0, a = i.length; t < a; t++) {
                    if (i[t] === r) {
                      1 === a ? delete e[s] : i.splice(t, 1)
                      break
                    }
                    w(i[t]) && u(i[t], r)
                  }
              }
            }
          }
          function p(e) {
            let r = '',
              t = ''
            var a = ''
            for (let s = 0; s < e.length; s++) {
              const i = e[s]
              i !== t &&
                (s && 'h' === i
                  ? ((a =
                      'a' === a ||
                      'e' === a ||
                      'i' === a ||
                      'o' === a ||
                      'u' === a ||
                      'y' === a),
                    ((('a' === t ||
                      'e' === t ||
                      'i' === t ||
                      'o' === t ||
                      'u' === t ||
                      'y' === t) &&
                      a) ||
                      ' ' === t) &&
                      (r += i))
                  : (r += i)),
                (a = s === e.length - 1 ? '' : e[s + 1]),
                (t = i)
            }
            return r
          }
          function h(e, r) {
            return 0 > (e = e.length - r.length) ? 1 : e ? -1 : 0
          }
          function d(e, r) {
            return (e = e[R]) < (r = r[R]) ? -1 : e > r ? 1 : 0
          }
          function g(e, r) {
            const t = R.length
            for (let a = 0; a < t; a++) (e = e[R[a]]), (r = r[R[a]])
            return e < r ? -1 : e > r ? 1 : 0
          }
          function f(e, r, t) {
            return e ? { page: e, next: r ? '' + r : null, result: t } : t
          }
          function m(e, r, t, a, s, i, o) {
            let n,
              l = []
            if (!0 === t) {
              t = '0'
              var c = ''
            } else c = t && t.split(':')
            const u = e.length
            if (1 < u) {
              const y = x(),
                w = []
              let D, k
              var p,
                h = 0
              let E
              var d = !0
              let A,
                L,
                C,
                S,
                T,
                B,
                R = 0
              if (
                (c &&
                  (2 === c.length
                    ? ((S = c), (c = !1))
                    : (c = T = parseInt(c[0], 10))),
                o)
              ) {
                for (D = x(); h < u; h++)
                  if ('not' === s[h])
                    for (k = e[h], E = k.length, p = 0; p < E; p++)
                      D['@' + k[p]] = 1
                  else C = h + 1
                if (q(C)) return f(t, n, l)
                h = 0
              } else L = b(s) && s
              for (; h < u; h++) {
                const b = h === (C || u) - 1
                if (!L || !h)
                  if ((p = L || (s && s[h])) && 'and' !== p) {
                    if ('or' !== p) continue
                    B = !1
                  } else B = i = !0
                if (((k = e[h]), (E = k.length))) {
                  if (d) {
                    if (!A) {
                      A = k
                      continue
                    }
                    var g = A.length
                    for (p = 0; p < g; p++) {
                      var m = '@' + (d = A[p])
                      ;(o && D[m]) || ((y[m] = 1), i || (l[R++] = d))
                    }
                    ;(A = null), (d = !1)
                  }
                  for (m = !1, p = 0; p < E; p++) {
                    var v = '@' + (g = k[p])
                    const e = i ? y[v] || 0 : h
                    if (!((!e && !a) || (o && D[v]) || (!i && y[v])))
                      if (e === h) {
                        if (b) {
                          if ((!T || --T < R) && ((l[R++] = g), r && R === r))
                            return f(t, R + (c || 0), l)
                        } else y[v] = h + 1
                        m = !0
                      } else a && ((v = w[e] || (w[e] = []))[v.length] = g)
                  }
                  if (B && !m && !a) break
                } else if (B && !a) return f(t, n, k)
              }
              if (A)
                if (((h = A.length), o))
                  for (p = c ? parseInt(c, 10) : 0; p < h; p++)
                    D['@' + (e = A[p])] || (l[R++] = e)
                else l = A
              if (a)
                for (
                  R = l.length,
                    S
                      ? ((h = parseInt(S[0], 10) + 1),
                        (p = parseInt(S[1], 10) + 1))
                      : ((h = w.length), (p = 0));
                  h--;

                )
                  if ((g = w[h])) {
                    for (E = g.length; p < E; p++)
                      if (
                        ((a = g[p]),
                        (!o || !D['@' + a]) && ((l[R++] = a), r && R === r))
                      )
                        return f(t, h + ':' + p, l)
                    p = 0
                  }
            } else
              !u ||
                (s && 'not' === s[0]) ||
                ((l = e[0]), c && (c = parseInt(c[0], 10)))
            return (
              r &&
                ((o = l.length),
                c && c > o && (c = 0),
                (n = (c = c || 0) + r),
                n < o ? (l = l.slice(c, n)) : ((n = 0), c && (l = l.slice(c)))),
              f(t, n, l)
            )
          }
          function b(e) {
            return 'string' == typeof e
          }
          function v(e) {
            return e.constructor === Array
          }
          function y(e) {
            return 'function' == typeof e
          }
          function w(e) {
            return 'object' == typeof e
          }
          function q(e) {
            return void 0 === e
          }
          function D(e) {
            const r = Array(e)
            for (let t = 0; t < e; t++) r[t] = x()
            return r
          }
          function x() {
            return Object.create(null)
          }
          function k() {
            let e, r
            self.onmessage = function (t) {
              if ((t = t.data))
                if (t.search) {
                  const a = r.search(
                    t.content,
                    t.threshold
                      ? {
                          limit: t.limit,
                          threshold: t.threshold,
                          where: t.where
                        }
                      : t.limit
                  )
                  self.postMessage({
                    id: e,
                    content: t.content,
                    limit: t.limit,
                    result: a
                  })
                } else
                  t.add
                    ? r.add(t.id, t.content)
                    : t.update
                    ? r.update(t.id, t.content)
                    : t.remove
                    ? r.remove(t.id)
                    : t.clear
                    ? r.clear()
                    : t.info
                    ? (((t = r.info()).worker = e), console.log(t))
                    : t.register &&
                      ((e = t.id),
                      (t.options.cache = !1),
                      (t.options.async = !1),
                      (t.options.worker = !1),
                      (r = new Function(
                        t.register.substring(
                          t.register.indexOf('{') + 1,
                          t.register.lastIndexOf('}')
                        )
                      )()),
                      (r = new r(t.options)))
            }
          }
          function E(t, a, s, i) {
            t = r(
              'flexsearch',
              'id' + t,
              k,
              function (e) {
                ;(e = e.data) &&
                  e.result &&
                  i(
                    e.id,
                    e.content,
                    e.result,
                    e.limit,
                    e.where,
                    e.cursor,
                    e.suggest
                  )
              },
              a
            )
            const o = e.toString()
            return (
              (s.id = a), t.postMessage({ register: o, options: s, id: a }), t
            )
          }
          const A = {
              encode: 'icase',
              f: 'forward',
              split: /\W+/,
              cache: !1,
              async: !1,
              g: !1,
              D: !1,
              a: !1,
              b: 9,
              threshold: 0,
              depth: 0
            },
            L = {
              memory: { encode: 'extra', f: 'strict', threshold: 0, b: 1 },
              speed: {
                encode: 'icase',
                f: 'strict',
                threshold: 1,
                b: 3,
                depth: 2
              },
              match: { encode: 'extra', f: 'full', threshold: 1, b: 3 },
              score: {
                encode: 'extra',
                f: 'strict',
                threshold: 1,
                b: 9,
                depth: 4
              },
              balance: {
                encode: 'balance',
                f: 'strict',
                threshold: 0,
                b: 3,
                depth: 3
              },
              fast: {
                encode: 'icase',
                f: 'strict',
                threshold: 8,
                b: 9,
                depth: 1
              }
            },
            C = []
          let S = 0
          const T = {},
            B = {}
          let R
          ;(t.create = function (e, r) {
            return new t(e, r)
          }),
            (t.registerMatcher = function (e) {
              for (const r in e) e.hasOwnProperty(r) && C.push(n(r), e[r])
              return this
            }),
            (t.registerEncoder = function (e, r) {
              return (U[e] = r.bind(U)), this
            }),
            (t.registerLanguage = function (e, r) {
              return (T[e] = r.filter), (B[e] = r.stemmer), this
            }),
            (t.encode = function (e, r) {
              return U[e](r)
            }),
            (t.prototype.init = function (e, r) {
              if (((this.v = []), r)) {
                var s = r.preset
                e = r
              } else e || (e = A), (s = e.preset)
              if (
                ((r = {}),
                b(e) ? ((r = L[e]), (e = {})) : s && (r = L[s]),
                (s = e.worker))
              )
                if ('undefined' == typeof Worker)
                  (e.worker = !1), (this.m = null)
                else {
                  var i = parseInt(s, 10) || 4
                  ;(this.C = -1),
                    (this.u = 0),
                    (this.o = []),
                    (this.F = null),
                    (this.m = Array(i))
                  for (var o = 0; o < i; o++)
                    this.m[o] = E(this.id, o, e, a.bind(this))
                }
              if (
                ((this.f = e.tokenize || r.f || this.f || A.f),
                (this.split = q((s = e.split))
                  ? this.split || A.split
                  : b(s)
                  ? n(s)
                  : s),
                (this.D = e.rtl || this.D || A.D),
                (this.async =
                  'undefined' == typeof Promise || q((s = e.async))
                    ? this.async || A.async
                    : s),
                (this.g = q((s = e.worker)) ? this.g || A.g : s),
                (this.threshold = q((s = e.threshold))
                  ? r.threshold || this.threshold || A.threshold
                  : s),
                (this.b = q((s = e.resolution))
                  ? (s = r.b || this.b || A.b)
                  : s),
                s <= this.threshold && (this.b = this.threshold + 1),
                (this.depth =
                  'strict' !== this.f || q((s = e.depth))
                    ? r.depth || this.depth || A.depth
                    : s),
                (this.w =
                  ((s = q((s = e.encode)) ? r.encode || A.encode : s) &&
                    U[s] &&
                    U[s].bind(U)) ||
                  (y(s) ? s : this.w || !1)),
                (s = e.matcher) && this.addMatcher(s),
                (s = (r = e.lang) || e.filter))
              ) {
                if ((b(s) && (s = T[s]), v(s))) {
                  ;(i = this.w), (o = x())
                  for (var l = 0; l < s.length; l++) {
                    var c = i ? i(s[l]) : s[l]
                    o[c] = 1
                  }
                  s = o
                }
                this.filter = s
              }
              if ((s = r || e.stemmer)) {
                var u
                for (u in ((r = b(s) ? B[s] : s), (i = this.w), (o = []), r))
                  r.hasOwnProperty(u) &&
                    ((l = i ? i(u) : u),
                    o.push(n(l + '($|\\W)'), i ? i(r[u]) : r[u]))
                this.stemmer = u = o
              }
              if (
                ((this.a = o =
                  (s = e.doc)
                    ? (function e(r) {
                        const t = x()
                        for (const a in r)
                          if (r.hasOwnProperty(a)) {
                            const s = r[a]
                            v(s)
                              ? (t[a] = s.slice(0))
                              : w(s)
                              ? (t[a] = e(s))
                              : (t[a] = s)
                          }
                        return t
                      })(s)
                    : this.a || A.a),
                (this.i = D(this.b - (this.threshold || 0))),
                (this.h = x()),
                (this.c = x()),
                o)
              ) {
                if (
                  ((this.l = x()),
                  (e.doc = null),
                  (u = o.index = {}),
                  (r = o.keys = []),
                  (i = o.field),
                  (l = o.tag),
                  (c = o.store),
                  v(o.id) || (o.id = o.id.split(':')),
                  c)
                ) {
                  var p = x()
                  if (b(c)) p[c] = 1
                  else if (v(c)) for (let e = 0; e < c.length; e++) p[c[e]] = 1
                  else w(c) && (p = c)
                  o.store = p
                }
                if (l) {
                  if (((this.G = x()), (c = x()), i))
                    if (b(i)) c[i] = e
                    else if (v(i)) for (p = 0; p < i.length; p++) c[i[p]] = e
                    else w(i) && (c = i)
                  for (v(l) || (o.tag = l = [l]), i = 0; i < l.length; i++)
                    this.G[l[i]] = x()
                  ;(this.I = l), (i = c)
                }
                if (i) {
                  let a
                  for (
                    v(i) ||
                      (w(i)
                        ? ((a = i), (o.field = i = Object.keys(i)))
                        : (o.field = i = [i])),
                      o = 0;
                    o < i.length;
                    o++
                  )
                    v((l = i[o])) ||
                      (a && (e = a[l]), (r[o] = l), (i[o] = l.split(':'))),
                      (u[l] = new t(e))
                }
                e.doc = s
              }
              return (
                (this.B = !0),
                (this.j =
                  !!(this.cache = s =
                    q((s = e.cache)) ? this.cache || A.cache : s) && new F(s)),
                this
              )
            }),
            (t.prototype.encode = function (e) {
              return (
                e &&
                  (C.length && (e = l(e, C)),
                  this.v.length && (e = l(e, this.v)),
                  this.w && (e = this.w(e)),
                  this.stemmer && (e = l(e, this.stemmer))),
                e
              )
            }),
            (t.prototype.addMatcher = function (e) {
              const r = this.v
              for (const t in e) e.hasOwnProperty(t) && r.push(n(t), e[t])
              return this
            }),
            (t.prototype.add = function (e, r, t, a, i) {
              if (this.a && w(e)) return this.A('add', e, r)
              if (r && b(r) && (e || 0 === e)) {
                var o = '@' + e
                if (this.c[o] && !a) return this.update(e, r)
                if (this.g)
                  return (
                    ++this.C >= this.m.length && (this.C = 0),
                    this.m[this.C].postMessage({ add: !0, id: e, content: r }),
                    (this.c[o] = '' + this.C),
                    t && t(),
                    this
                  )
                if (!i) {
                  if (this.async && 'function' != typeof importScripts) {
                    let s = this
                    return (
                      (o = new Promise(function (t) {
                        setTimeout(function () {
                          s.add(e, r, null, a, !0), (s = null), t()
                        })
                      })),
                      t ? (o.then(t), this) : o
                    )
                  }
                  if (t) return this.add(e, r, null, a, !0), t(), this
                }
                if (!(r = this.encode(r)).length) return this
                ;(i = y((t = this.f)) ? t(r) : r.split(this.split)),
                  this.filter && (i = s(i, this.filter))
                const d = x()
                d._ctx = x()
                const g = i.length,
                  f = this.threshold,
                  m = this.depth,
                  b = this.b,
                  v = this.i,
                  w = this.D
                for (let r = 0; r < g; r++) {
                  var n = i[r]
                  if (n) {
                    var l = n.length,
                      u = (w ? r + 1 : g - r) / g,
                      p = ''
                    switch (t) {
                      case 'reverse':
                      case 'both':
                        for (var h = l; --h; )
                          c(
                            v,
                            d,
                            (p = n[h] + p),
                            e,
                            w ? 1 : (l - h) / l,
                            u,
                            f,
                            b - 1
                          )
                        p = ''
                      case 'forward':
                        for (h = 0; h < l; h++)
                          c(
                            v,
                            d,
                            (p += n[h]),
                            e,
                            w ? (h + 1) / l : 1,
                            u,
                            f,
                            b - 1
                          )
                        break
                      case 'full':
                        for (h = 0; h < l; h++) {
                          const r = (w ? h + 1 : l - h) / l
                          for (let t = l; t > h; t--)
                            c(v, d, (p = n.substring(h, t)), e, r, u, f, b - 1)
                        }
                        break
                      default:
                        if (
                          ((l = c(v, d, n, e, 1, u, f, b - 1)),
                          m && 1 < g && l >= f)
                        )
                          for (
                            l = d._ctx[n] || (d._ctx[n] = x()),
                              n = this.h[n] || (this.h[n] = D(b - (f || 0))),
                              0 > (u = r - m) && (u = 0),
                              (p = r + m + 1) > g && (p = g);
                            u < p;
                            u++
                          )
                            u !== r &&
                              c(
                                n,
                                l,
                                i[u],
                                e,
                                0,
                                b - (u < r ? r - u : u - r),
                                f,
                                b - 1
                              )
                    }
                  }
                }
                ;(this.c[o] = 1), (this.B = !1)
              }
              return this
            }),
            (t.prototype.A = function (e, r, t) {
              if (v(r)) {
                var a = r.length
                if (a--) {
                  for (var s = 0; s < a; s++) this.A(e, r[s])
                  return this.A(e, r[a], t)
                }
              } else {
                var i,
                  o = this.a.index,
                  n = this.a.keys,
                  l = this.a.tag
                s = this.a.store
                var c = this.a.id
                a = r
                for (var u = 0; u < c.length; u++) a = a[c[u]]
                if ('remove' === e && (delete this.l[a], (c = n.length), c--)) {
                  for (r = 0; r < c; r++) o[n[r]].remove(a)
                  return o[n[c]].remove(a, t)
                }
                if (l) {
                  for (i = 0; i < l.length; i++) {
                    var p = l[i],
                      h = r
                    for (c = p.split(':'), u = 0; u < c.length; u++) h = h[c[u]]
                    h = '@' + h
                  }
                  i = (i = this.G[p])[h] || (i[h] = [])
                }
                for (let s = 0, i = (c = this.a.field).length; s < i; s++) {
                  for (p = c[s], l = r, h = 0; h < p.length; h++) l = l[p[h]]
                  ;(p = o[n[s]]),
                    (h = 'add' === e ? p.add : p.update),
                    s === i - 1 ? h.call(p, a, l, t) : h.call(p, a, l)
                }
                if (s) {
                  for (t = Object.keys(s), e = x(), o = 0; o < t.length; o++)
                    if (s[(n = t[o])]) {
                      let t, a
                      for (n = n.split(':'), c = 0; c < n.length; c++)
                        (t = (t || r)[(l = n[c])]), (a = (a || e)[l] = t)
                    }
                  r = e
                }
                i && (i[i.length] = r), (this.l[a] = r)
              }
              return this
            }),
            (t.prototype.update = function (e, r, t) {
              return this.a && w(e)
                ? this.A('update', e, r)
                : (this.c['@' + e] &&
                    b(r) &&
                    (this.remove(e), this.add(e, r, t, !0)),
                  this)
            }),
            (t.prototype.remove = function (e, r, t) {
              if (this.a && w(e)) return this.A('remove', e, r)
              var a = '@' + e
              if (this.c[a]) {
                if (this.g)
                  return (
                    this.m[this.c[a]].postMessage({ remove: !0, id: e }),
                    delete this.c[a],
                    r && r(),
                    this
                  )
                if (!t) {
                  if (this.async && 'function' != typeof importScripts) {
                    let t = this
                    return (
                      (a = new Promise(function (r) {
                        setTimeout(function () {
                          t.remove(e, null, !0), (t = null), r()
                        })
                      })),
                      r ? (a.then(r), this) : a
                    )
                  }
                  if (r) return this.remove(e, null, !0), r(), this
                }
                for (r = 0; r < this.b - (this.threshold || 0); r++)
                  u(this.i[r], e)
                this.depth && u(this.h, e), delete this.c[a], (this.B = !1)
              }
              return this
            }),
            (t.prototype.search = function (e, r, t, a) {
              if (w(r)) {
                if (v(r)) for (var o = 0; o < r.length; o++) r[o].query = e
                else r.query = e
                ;(e = r), (r = 1e3)
              } else
                r && y(r) ? ((t = r), (r = 1e3)) : r || 0 === r || (r = 1e3)
              if (!this.g) {
                var n = [],
                  l = e
                if (w(e) && !v(e)) {
                  t || ((t = e.callback) && (l.callback = null))
                  var c = e.sort,
                    u = e.page
                  ;(r = e.limit), (E = e.threshold)
                  var p = e.suggest
                  e = e.query
                }
                if (this.a) {
                  E = this.a.index
                  const s = l.where
                  var d = l.bool || 'or',
                    g = l.field
                  let h,
                    m,
                    y = d
                  if (g) v(g) || (g = [g])
                  else if (v(l)) {
                    var f = l
                    ;(g = []), (y = [])
                    for (var q = 0; q < l.length; q++)
                      (o = (a = l[q]).bool || d),
                        (g[q] = a.field),
                        (y[q] = o),
                        'not' === o ? (h = !0) : 'and' === o && (m = !0)
                  } else g = this.a.keys
                  for (d = g.length, q = 0; q < d; q++)
                    f && (l = f[q]),
                      u && !b(l) && ((l.page = null), (l.limit = 0)),
                      (n[q] = E[g[q]].search(l, 0))
                  if (t) return t(i.call(this, e, y, n, c, r, p, s, u, m, h))
                  if (this.async) {
                    const t = this
                    return new Promise(function (a) {
                      Promise.all(n).then(function (o) {
                        a(i.call(t, e, y, o, c, r, p, s, u, m, h))
                      })
                    })
                  }
                  return i.call(this, e, y, n, c, r, p, s, u, m, h)
                }
                if ((E || (E = this.threshold || 0), !a)) {
                  if (this.async && 'function' != typeof importScripts) {
                    let e = this
                    return (
                      (E = new Promise(function (t) {
                        setTimeout(function () {
                          t(e.search(l, r, null, !0)), (e = null)
                        })
                      })),
                      t ? (E.then(t), this) : E
                    )
                  }
                  if (t) return t(this.search(l, r, null, !0)), this
                }
                if (!e || !b(e)) return n
                if (((l = e), this.cache))
                  if (this.B) {
                    if ((t = this.j.get(e))) return t
                  } else this.j.clear(), (this.B = !0)
                if (!(l = this.encode(l)).length) return n
                ;(t = y((t = this.f)) ? t(l) : l.split(this.split)),
                  this.filter && (t = s(t, this.filter)),
                  (f = t.length),
                  (a = !0),
                  (o = [])
                var D = x(),
                  k = 0
                if (
                  (1 < f &&
                    (this.depth && 'strict' === this.f ? (d = !0) : t.sort(h)),
                  !d || (q = this.h))
                ) {
                  const e = this.b
                  for (; k < f; k++) {
                    let r = t[k]
                    if (r) {
                      if (d) {
                        if (!g)
                          if (q[r]) (g = r), (D[r] = 1)
                          else if (!p) return n
                        if (p && k === f - 1 && !o.length)
                          (d = !1), (r = g || r), (D[r] = 0)
                        else if (!g) continue
                      }
                      if (!D[r]) {
                        const t = []
                        let s = !1,
                          i = 0
                        const n = d ? q[g] : this.i
                        if (n) {
                          let a
                          for (let o = 0; o < e - E; o++)
                            (a = n[o] && n[o][r]) && ((t[i++] = a), (s = !0))
                        }
                        if (s)
                          (g = r),
                            (o[o.length] = 1 < i ? t.concat.apply([], t) : t[0])
                        else if (!p) {
                          a = !1
                          break
                        }
                        D[r] = 1
                      }
                    }
                  }
                } else a = !1
                return (
                  a && (n = m(o, r, u, p)), this.cache && this.j.set(e, n), n
                )
              }
              ;(this.F = t), (this.u = 0), (this.o = [])
              for (var E = 0; E < this.g; E++)
                this.m[E].postMessage({ search: !0, limit: r, content: e })
            }),
            (t.prototype.find = function (e, r) {
              return this.where(e, r, 1)[0] || null
            }),
            (t.prototype.where = function (e, r, t, a) {
              const s = this.l,
                i = []
              let o,
                n = 0
              var l
              let c
              if (w(e)) {
                t || (t = r)
                var u = Object.keys(e),
                  p = u.length
                if (((o = !1), 1 === p && 'id' === u[0])) return [s[e.id]]
                if ((l = this.I) && !a)
                  for (var h = 0; h < l.length; h++) {
                    var d = l[h],
                      g = e[d]
                    if (!q(g)) {
                      if (((c = this.G[d]['@' + g]), 0 == --p)) return c
                      u.splice(u.indexOf(d), 1), delete e[d]
                      break
                    }
                  }
                for (l = Array(p), h = 0; h < p; h++) l[h] = u[h].split(':')
              } else {
                if (y(e)) {
                  for (t = (r = a || Object.keys(s)).length, u = 0; u < t; u++)
                    e((p = s[r[u]])) && (i[n++] = p)
                  return i
                }
                if (q(r)) return [s[e]]
                if ('id' === e) return [s[r]]
                ;(u = [e]), (p = 1), (l = [e.split(':')]), (o = !0)
              }
              for (
                h = (a = c || a || Object.keys(s)).length, d = 0;
                d < h;
                d++
              ) {
                g = c ? a[d] : s[a[d]]
                let h = !0
                for (let t = 0; t < p; t++) {
                  o || (r = e[u[t]])
                  const a = l[t],
                    s = a.length
                  let i = g
                  if (1 < s) for (let e = 0; e < s; e++) i = i[a[e]]
                  else i = i[a[0]]
                  if (i !== r) {
                    h = !1
                    break
                  }
                }
                if (h && ((i[n++] = g), t && n === t)) break
              }
              return i
            }),
            (t.prototype.info = function () {
              if (!this.g)
                return {
                  id: this.id,
                  items: this.length,
                  cache: !(!this.cache || !this.cache.s) && this.cache.s.length,
                  matcher: C.length + (this.v ? this.v.length : 0),
                  worker: this.g,
                  threshold: this.threshold,
                  depth: this.depth,
                  resolution: this.b,
                  contextual: this.depth && 'strict' === this.f
                }
              for (let e = 0; e < this.g; e++)
                this.m[e].postMessage({ info: !0, id: this.id })
            }),
            (t.prototype.clear = function () {
              return this.destroy().init()
            }),
            (t.prototype.destroy = function () {
              if (
                (this.cache && (this.j.clear(), (this.j = null)),
                (this.i = this.h = this.c = null),
                this.a)
              ) {
                const e = this.a.keys
                for (let r = 0; r < e.length; r++) this.a.index[e[r]].destroy()
                this.a = this.l = null
              }
              return this
            }),
            (t.prototype.export = function (e) {
              const r = !e || q(e.serialize) || e.serialize
              if (this.a) {
                const r = !e || q(e.doc) || e.doc
                var t = !e || q(e.index) || e.index
                e = []
                let a = 0
                if (t)
                  for (t = this.a.keys; a < t.length; a++) {
                    const r = this.a.index[t[a]]
                    e[a] = [r.i, r.h, Object.keys(r.c)]
                  }
                r && (e[a] = this.l)
              } else e = [this.i, this.h, Object.keys(this.c)]
              return r && (e = JSON.stringify(e)), e
            }),
            (t.prototype.import = function (e, r) {
              ;(!r || q(r.serialize) || r.serialize) && (e = JSON.parse(e))
              const t = x()
              if (this.a) {
                var a = !r || q(r.doc) || r.doc,
                  s = 0
                if (!r || q(r.index) || r.index) {
                  const a = (r = this.a.keys).length
                  for (var i = e[0][2]; s < i.length; s++) t[i[s]] = 1
                  for (s = 0; s < a; s++) {
                    i = this.a.index[r[s]]
                    const a = e[s]
                    a && ((i.i = a[0]), (i.h = a[1]), (i.c = t))
                  }
                }
                a && (this.l = w(a) ? a : e[s])
              } else {
                for (a = e[2], s = 0; s < a.length; s++) t[a[s]] = 1
                ;(this.i = e[0]), (this.h = e[1]), (this.c = t)
              }
            })
          const N = (function () {
              const e = n('\\s+'),
                r = n('[^a-z0-9 ]'),
                t = [n('[-/]'), ' ', r, '', e, ' ']
              return function (e) {
                return p(l(e.toLowerCase(), t))
              }
            })(),
            U = {
              icase: function (e) {
                return e.toLowerCase()
              },
              simple: (function () {
                const e = n('\\s+'),
                  r = n('[^a-z0-9 ]'),
                  t = n('[-/]'),
                  a = [
                    n('[àáâãäå]'),
                    'a',
                    n('[èéêë]'),
                    'e',
                    n('[ìíîï]'),
                    'i',
                    n('[òóôõöő]'),
                    'o',
                    n('[ùúûüű]'),
                    'u',
                    n('[ýŷÿ]'),
                    'y',
                    n('ñ'),
                    'n',
                    n('[çc]'),
                    'k',
                    n('ß'),
                    's',
                    n(' & '),
                    ' and ',
                    t,
                    ' ',
                    r,
                    '',
                    e,
                    ' '
                  ]
                return function (e) {
                  return ' ' === (e = l(e.toLowerCase(), a)) ? '' : e
                }
              })(),
              advanced: (function () {
                const e = n('ae'),
                  r = n('ai'),
                  t = n('ay'),
                  a = n('ey'),
                  s = n('oe'),
                  i = n('ue'),
                  o = n('ie'),
                  c = n('sz'),
                  u = n('zs'),
                  h = n('ck'),
                  d = n('cc'),
                  g = [
                    e,
                    'a',
                    r,
                    'ei',
                    t,
                    'ei',
                    a,
                    'ei',
                    s,
                    'o',
                    i,
                    'u',
                    o,
                    'i',
                    c,
                    's',
                    u,
                    's',
                    n('sh'),
                    's',
                    h,
                    'k',
                    d,
                    'k',
                    n('th'),
                    't',
                    n('dt'),
                    't',
                    n('ph'),
                    'f',
                    n('pf'),
                    'f',
                    n('ou'),
                    'o',
                    n('uo'),
                    'u'
                  ]
                return function (e, r) {
                  return e
                    ? (2 < (e = this.simple(e)).length && (e = l(e, g)),
                      r || (1 < e.length && (e = p(e))),
                      e)
                    : e
                }
              })(),
              extra: (function () {
                const e = [
                  n('p'),
                  'b',
                  n('z'),
                  's',
                  n('[cgq]'),
                  'k',
                  n('n'),
                  'm',
                  n('d'),
                  't',
                  n('[vw]'),
                  'f',
                  n('[aeiouy]'),
                  ''
                ]
                return function (r) {
                  if (!r) return r
                  if (1 < (r = this.advanced(r, !0)).length) {
                    r = r.split(' ')
                    for (let t = 0; t < r.length; t++) {
                      const a = r[t]
                      1 < a.length && (r[t] = a[0] + l(a.substring(1), e))
                    }
                    r = p((r = r.join(' ')))
                  }
                  return r
                }
              })(),
              balance: N
            },
            F = (function () {
              function e(e) {
                this.clear(), (this.H = !0 !== e && e)
              }
              return (
                (e.prototype.clear = function () {
                  ;(this.cache = x()),
                    (this.count = x()),
                    (this.index = x()),
                    (this.s = [])
                }),
                (e.prototype.set = function (e, r) {
                  if (this.H && q(this.cache[e])) {
                    let t = this.s.length
                    if (t === this.H) {
                      t--
                      const e = this.s[t]
                      delete this.cache[e],
                        delete this.count[e],
                        delete this.index[e]
                    }
                    ;(this.index[e] = t),
                      (this.s[t] = e),
                      (this.count[e] = -1),
                      (this.cache[e] = r),
                      this.get(e)
                  } else this.cache[e] = r
                }),
                (e.prototype.get = function (e) {
                  const r = this.cache[e]
                  if (this.H && r) {
                    var t = ++this.count[e]
                    const r = this.index
                    let s = r[e]
                    if (0 < s) {
                      const i = this.s
                      for (var a = s; this.count[i[--s]] <= t && -1 !== s; );
                      if ((s++, s !== a)) {
                        for (t = a; t > s; t--)
                          (a = i[t - 1]), (i[t] = a), (r[a] = t)
                        ;(i[s] = e), (r[e] = s)
                      }
                    }
                  }
                  return r
                }),
                e
              )
            })()
          return t
        })(
          (function () {
            const e = {},
              r =
                'undefined' != typeof Blob &&
                'undefined' != typeof URL &&
                URL.createObjectURL
            return function (t, a, s, i, o) {
              return (
                (s = r
                  ? URL.createObjectURL(
                      new Blob(['(' + s.toString() + ')()'], {
                        type: 'text/javascript'
                      })
                    )
                  : t + '.min.js'),
                e[(t += '-' + a)] || (e[t] = []),
                (e[t][o] = new Worker(s)),
                (e[t][o].onmessage = i),
                e[t][o]
              )
            }
          })()
        ),
        this
      )
    },
    303: function (e, r, t) {
      t(19), t(9)
      const a = t(304)
      function s(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      }
      ;(e.exports.getPageText = (e) => {
        if (!e._strippedContent) return ''
        const { html: r } = e._context.markdown.render(e._strippedContent)
        return a.decode(r.replace(/(<[^>]+>)+/g, ' ').replace(/^\s*#\s/gm, ''))
      }),
        (e.exports.highlightText = (e, r) => {
          let t = e
          if (
            ((highlightWords = r.split(' ').filter((e) => e.length > 0)),
            highlightWords.length > 0)
          )
            for (const e of highlightWords)
              t = t.replace(new RegExp(s(e), 'ig'), '<em>$&</em>')
          else t = e.replace(new RegExp(s(r), 'ig'), '<em>$&</em>')
          return t
        })
    },
    304: function (e, r, t) {
      ;(function (e) {
        var a
        /*! https://mths.be/he v1.2.0 by @mathias | MIT license */ !(function (
          s
        ) {
          var i = r,
            o = (e && e.exports, 'object' == typeof global && global)
          o.global !== o && o.window
          var n = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            l = /[\x01-\x7F]/g,
            c = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
            u =
              /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
            p = {
              '­': 'shy',
              '‌': 'zwnj',
              '‍': 'zwj',
              '‎': 'lrm',
              '⁣': 'ic',
              '⁢': 'it',
              '⁡': 'af',
              '‏': 'rlm',
              '​': 'ZeroWidthSpace',
              '⁠': 'NoBreak',
              '̑': 'DownBreve',
              '⃛': 'tdot',
              '⃜': 'DotDot',
              '\t': 'Tab',
              '\n': 'NewLine',
              ' ': 'puncsp',
              ' ': 'MediumSpace',
              ' ': 'thinsp',
              ' ': 'hairsp',
              ' ': 'emsp13',
              ' ': 'ensp',
              ' ': 'emsp14',
              ' ': 'emsp',
              ' ': 'numsp',
              ' ': 'nbsp',
              '  ': 'ThickSpace',
              '‾': 'oline',
              _: 'lowbar',
              '‐': 'dash',
              '–': 'ndash',
              '—': 'mdash',
              '―': 'horbar',
              ',': 'comma',
              ';': 'semi',
              '⁏': 'bsemi',
              ':': 'colon',
              '⩴': 'Colone',
              '!': 'excl',
              '¡': 'iexcl',
              '?': 'quest',
              '¿': 'iquest',
              '.': 'period',
              '‥': 'nldr',
              '…': 'mldr',
              '·': 'middot',
              "'": 'apos',
              '‘': 'lsquo',
              '’': 'rsquo',
              '‚': 'sbquo',
              '‹': 'lsaquo',
              '›': 'rsaquo',
              '"': 'quot',
              '“': 'ldquo',
              '”': 'rdquo',
              '„': 'bdquo',
              '«': 'laquo',
              '»': 'raquo',
              '(': 'lpar',
              ')': 'rpar',
              '[': 'lsqb',
              ']': 'rsqb',
              '{': 'lcub',
              '}': 'rcub',
              '⌈': 'lceil',
              '⌉': 'rceil',
              '⌊': 'lfloor',
              '⌋': 'rfloor',
              '⦅': 'lopar',
              '⦆': 'ropar',
              '⦋': 'lbrke',
              '⦌': 'rbrke',
              '⦍': 'lbrkslu',
              '⦎': 'rbrksld',
              '⦏': 'lbrksld',
              '⦐': 'rbrkslu',
              '⦑': 'langd',
              '⦒': 'rangd',
              '⦓': 'lparlt',
              '⦔': 'rpargt',
              '⦕': 'gtlPar',
              '⦖': 'ltrPar',
              '⟦': 'lobrk',
              '⟧': 'robrk',
              '⟨': 'lang',
              '⟩': 'rang',
              '⟪': 'Lang',
              '⟫': 'Rang',
              '⟬': 'loang',
              '⟭': 'roang',
              '❲': 'lbbrk',
              '❳': 'rbbrk',
              '‖': 'Vert',
              '§': 'sect',
              '¶': 'para',
              '@': 'commat',
              '*': 'ast',
              '/': 'sol',
              undefined: null,
              '&': 'amp',
              '#': 'num',
              '%': 'percnt',
              '‰': 'permil',
              '‱': 'pertenk',
              '†': 'dagger',
              '‡': 'Dagger',
              '•': 'bull',
              '⁃': 'hybull',
              '′': 'prime',
              '″': 'Prime',
              '‴': 'tprime',
              '⁗': 'qprime',
              '‵': 'bprime',
              '⁁': 'caret',
              '`': 'grave',
              '´': 'acute',
              '˜': 'tilde',
              '^': 'Hat',
              '¯': 'macr',
              '˘': 'breve',
              '˙': 'dot',
              '¨': 'die',
              '˚': 'ring',
              '˝': 'dblac',
              '¸': 'cedil',
              '˛': 'ogon',
              ˆ: 'circ',
              ˇ: 'caron',
              '°': 'deg',
              '©': 'copy',
              '®': 'reg',
              '℗': 'copysr',
              '℘': 'wp',
              '℞': 'rx',
              '℧': 'mho',
              '℩': 'iiota',
              '←': 'larr',
              '↚': 'nlarr',
              '→': 'rarr',
              '↛': 'nrarr',
              '↑': 'uarr',
              '↓': 'darr',
              '↔': 'harr',
              '↮': 'nharr',
              '↕': 'varr',
              '↖': 'nwarr',
              '↗': 'nearr',
              '↘': 'searr',
              '↙': 'swarr',
              '↝': 'rarrw',
              '↝̸': 'nrarrw',
              '↞': 'Larr',
              '↟': 'Uarr',
              '↠': 'Rarr',
              '↡': 'Darr',
              '↢': 'larrtl',
              '↣': 'rarrtl',
              '↤': 'mapstoleft',
              '↥': 'mapstoup',
              '↦': 'map',
              '↧': 'mapstodown',
              '↩': 'larrhk',
              '↪': 'rarrhk',
              '↫': 'larrlp',
              '↬': 'rarrlp',
              '↭': 'harrw',
              '↰': 'lsh',
              '↱': 'rsh',
              '↲': 'ldsh',
              '↳': 'rdsh',
              '↵': 'crarr',
              '↶': 'cularr',
              '↷': 'curarr',
              '↺': 'olarr',
              '↻': 'orarr',
              '↼': 'lharu',
              '↽': 'lhard',
              '↾': 'uharr',
              '↿': 'uharl',
              '⇀': 'rharu',
              '⇁': 'rhard',
              '⇂': 'dharr',
              '⇃': 'dharl',
              '⇄': 'rlarr',
              '⇅': 'udarr',
              '⇆': 'lrarr',
              '⇇': 'llarr',
              '⇈': 'uuarr',
              '⇉': 'rrarr',
              '⇊': 'ddarr',
              '⇋': 'lrhar',
              '⇌': 'rlhar',
              '⇐': 'lArr',
              '⇍': 'nlArr',
              '⇑': 'uArr',
              '⇒': 'rArr',
              '⇏': 'nrArr',
              '⇓': 'dArr',
              '⇔': 'iff',
              '⇎': 'nhArr',
              '⇕': 'vArr',
              '⇖': 'nwArr',
              '⇗': 'neArr',
              '⇘': 'seArr',
              '⇙': 'swArr',
              '⇚': 'lAarr',
              '⇛': 'rAarr',
              '⇝': 'zigrarr',
              '⇤': 'larrb',
              '⇥': 'rarrb',
              '⇵': 'duarr',
              '⇽': 'loarr',
              '⇾': 'roarr',
              '⇿': 'hoarr',
              '∀': 'forall',
              '∁': 'comp',
              '∂': 'part',
              '∂̸': 'npart',
              '∃': 'exist',
              '∄': 'nexist',
              '∅': 'empty',
              '∇': 'Del',
              '∈': 'in',
              '∉': 'notin',
              '∋': 'ni',
              '∌': 'notni',
              '϶': 'bepsi',
              '∏': 'prod',
              '∐': 'coprod',
              '∑': 'sum',
              '+': 'plus',
              '±': 'pm',
              '÷': 'div',
              '×': 'times',
              '<': 'lt',
              '≮': 'nlt',
              '<⃒': 'nvlt',
              '=': 'equals',
              '≠': 'ne',
              '=⃥': 'bne',
              '⩵': 'Equal',
              '>': 'gt',
              '≯': 'ngt',
              '>⃒': 'nvgt',
              '¬': 'not',
              '|': 'vert',
              '¦': 'brvbar',
              '−': 'minus',
              '∓': 'mp',
              '∔': 'plusdo',
              '⁄': 'frasl',
              '∖': 'setmn',
              '∗': 'lowast',
              '∘': 'compfn',
              '√': 'Sqrt',
              '∝': 'prop',
              '∞': 'infin',
              '∟': 'angrt',
              '∠': 'ang',
              '∠⃒': 'nang',
              '∡': 'angmsd',
              '∢': 'angsph',
              '∣': 'mid',
              '∤': 'nmid',
              '∥': 'par',
              '∦': 'npar',
              '∧': 'and',
              '∨': 'or',
              '∩': 'cap',
              '∩︀': 'caps',
              '∪': 'cup',
              '∪︀': 'cups',
              '∫': 'int',
              '∬': 'Int',
              '∭': 'tint',
              '⨌': 'qint',
              '∮': 'oint',
              '∯': 'Conint',
              '∰': 'Cconint',
              '∱': 'cwint',
              '∲': 'cwconint',
              '∳': 'awconint',
              '∴': 'there4',
              '∵': 'becaus',
              '∶': 'ratio',
              '∷': 'Colon',
              '∸': 'minusd',
              '∺': 'mDDot',
              '∻': 'homtht',
              '∼': 'sim',
              '≁': 'nsim',
              '∼⃒': 'nvsim',
              '∽': 'bsim',
              '∽̱': 'race',
              '∾': 'ac',
              '∾̳': 'acE',
              '∿': 'acd',
              '≀': 'wr',
              '≂': 'esim',
              '≂̸': 'nesim',
              '≃': 'sime',
              '≄': 'nsime',
              '≅': 'cong',
              '≇': 'ncong',
              '≆': 'simne',
              '≈': 'ap',
              '≉': 'nap',
              '≊': 'ape',
              '≋': 'apid',
              '≋̸': 'napid',
              '≌': 'bcong',
              '≍': 'CupCap',
              '≭': 'NotCupCap',
              '≍⃒': 'nvap',
              '≎': 'bump',
              '≎̸': 'nbump',
              '≏': 'bumpe',
              '≏̸': 'nbumpe',
              '≐': 'doteq',
              '≐̸': 'nedot',
              '≑': 'eDot',
              '≒': 'efDot',
              '≓': 'erDot',
              '≔': 'colone',
              '≕': 'ecolon',
              '≖': 'ecir',
              '≗': 'cire',
              '≙': 'wedgeq',
              '≚': 'veeeq',
              '≜': 'trie',
              '≟': 'equest',
              '≡': 'equiv',
              '≢': 'nequiv',
              '≡⃥': 'bnequiv',
              '≤': 'le',
              '≰': 'nle',
              '≤⃒': 'nvle',
              '≥': 'ge',
              '≱': 'nge',
              '≥⃒': 'nvge',
              '≦': 'lE',
              '≦̸': 'nlE',
              '≧': 'gE',
              '≧̸': 'ngE',
              '≨︀': 'lvnE',
              '≨': 'lnE',
              '≩': 'gnE',
              '≩︀': 'gvnE',
              '≪': 'll',
              '≪̸': 'nLtv',
              '≪⃒': 'nLt',
              '≫': 'gg',
              '≫̸': 'nGtv',
              '≫⃒': 'nGt',
              '≬': 'twixt',
              '≲': 'lsim',
              '≴': 'nlsim',
              '≳': 'gsim',
              '≵': 'ngsim',
              '≶': 'lg',
              '≸': 'ntlg',
              '≷': 'gl',
              '≹': 'ntgl',
              '≺': 'pr',
              '⊀': 'npr',
              '≻': 'sc',
              '⊁': 'nsc',
              '≼': 'prcue',
              '⋠': 'nprcue',
              '≽': 'sccue',
              '⋡': 'nsccue',
              '≾': 'prsim',
              '≿': 'scsim',
              '≿̸': 'NotSucceedsTilde',
              '⊂': 'sub',
              '⊄': 'nsub',
              '⊂⃒': 'vnsub',
              '⊃': 'sup',
              '⊅': 'nsup',
              '⊃⃒': 'vnsup',
              '⊆': 'sube',
              '⊈': 'nsube',
              '⊇': 'supe',
              '⊉': 'nsupe',
              '⊊︀': 'vsubne',
              '⊊': 'subne',
              '⊋︀': 'vsupne',
              '⊋': 'supne',
              '⊍': 'cupdot',
              '⊎': 'uplus',
              '⊏': 'sqsub',
              '⊏̸': 'NotSquareSubset',
              '⊐': 'sqsup',
              '⊐̸': 'NotSquareSuperset',
              '⊑': 'sqsube',
              '⋢': 'nsqsube',
              '⊒': 'sqsupe',
              '⋣': 'nsqsupe',
              '⊓': 'sqcap',
              '⊓︀': 'sqcaps',
              '⊔': 'sqcup',
              '⊔︀': 'sqcups',
              '⊕': 'oplus',
              '⊖': 'ominus',
              '⊗': 'otimes',
              '⊘': 'osol',
              '⊙': 'odot',
              '⊚': 'ocir',
              '⊛': 'oast',
              '⊝': 'odash',
              '⊞': 'plusb',
              '⊟': 'minusb',
              '⊠': 'timesb',
              '⊡': 'sdotb',
              '⊢': 'vdash',
              '⊬': 'nvdash',
              '⊣': 'dashv',
              '⊤': 'top',
              '⊥': 'bot',
              '⊧': 'models',
              '⊨': 'vDash',
              '⊭': 'nvDash',
              '⊩': 'Vdash',
              '⊮': 'nVdash',
              '⊪': 'Vvdash',
              '⊫': 'VDash',
              '⊯': 'nVDash',
              '⊰': 'prurel',
              '⊲': 'vltri',
              '⋪': 'nltri',
              '⊳': 'vrtri',
              '⋫': 'nrtri',
              '⊴': 'ltrie',
              '⋬': 'nltrie',
              '⊴⃒': 'nvltrie',
              '⊵': 'rtrie',
              '⋭': 'nrtrie',
              '⊵⃒': 'nvrtrie',
              '⊶': 'origof',
              '⊷': 'imof',
              '⊸': 'mumap',
              '⊹': 'hercon',
              '⊺': 'intcal',
              '⊻': 'veebar',
              '⊽': 'barvee',
              '⊾': 'angrtvb',
              '⊿': 'lrtri',
              '⋀': 'Wedge',
              '⋁': 'Vee',
              '⋂': 'xcap',
              '⋃': 'xcup',
              '⋄': 'diam',
              '⋅': 'sdot',
              '⋆': 'Star',
              '⋇': 'divonx',
              '⋈': 'bowtie',
              '⋉': 'ltimes',
              '⋊': 'rtimes',
              '⋋': 'lthree',
              '⋌': 'rthree',
              '⋍': 'bsime',
              '⋎': 'cuvee',
              '⋏': 'cuwed',
              '⋐': 'Sub',
              '⋑': 'Sup',
              '⋒': 'Cap',
              '⋓': 'Cup',
              '⋔': 'fork',
              '⋕': 'epar',
              '⋖': 'ltdot',
              '⋗': 'gtdot',
              '⋘': 'Ll',
              '⋘̸': 'nLl',
              '⋙': 'Gg',
              '⋙̸': 'nGg',
              '⋚︀': 'lesg',
              '⋚': 'leg',
              '⋛': 'gel',
              '⋛︀': 'gesl',
              '⋞': 'cuepr',
              '⋟': 'cuesc',
              '⋦': 'lnsim',
              '⋧': 'gnsim',
              '⋨': 'prnsim',
              '⋩': 'scnsim',
              '⋮': 'vellip',
              '⋯': 'ctdot',
              '⋰': 'utdot',
              '⋱': 'dtdot',
              '⋲': 'disin',
              '⋳': 'isinsv',
              '⋴': 'isins',
              '⋵': 'isindot',
              '⋵̸': 'notindot',
              '⋶': 'notinvc',
              '⋷': 'notinvb',
              '⋹': 'isinE',
              '⋹̸': 'notinE',
              '⋺': 'nisd',
              '⋻': 'xnis',
              '⋼': 'nis',
              '⋽': 'notnivc',
              '⋾': 'notnivb',
              '⌅': 'barwed',
              '⌆': 'Barwed',
              '⌌': 'drcrop',
              '⌍': 'dlcrop',
              '⌎': 'urcrop',
              '⌏': 'ulcrop',
              '⌐': 'bnot',
              '⌒': 'profline',
              '⌓': 'profsurf',
              '⌕': 'telrec',
              '⌖': 'target',
              '⌜': 'ulcorn',
              '⌝': 'urcorn',
              '⌞': 'dlcorn',
              '⌟': 'drcorn',
              '⌢': 'frown',
              '⌣': 'smile',
              '⌭': 'cylcty',
              '⌮': 'profalar',
              '⌶': 'topbot',
              '⌽': 'ovbar',
              '⌿': 'solbar',
              '⍼': 'angzarr',
              '⎰': 'lmoust',
              '⎱': 'rmoust',
              '⎴': 'tbrk',
              '⎵': 'bbrk',
              '⎶': 'bbrktbrk',
              '⏜': 'OverParenthesis',
              '⏝': 'UnderParenthesis',
              '⏞': 'OverBrace',
              '⏟': 'UnderBrace',
              '⏢': 'trpezium',
              '⏧': 'elinters',
              '␣': 'blank',
              '─': 'boxh',
              '│': 'boxv',
              '┌': 'boxdr',
              '┐': 'boxdl',
              '└': 'boxur',
              '┘': 'boxul',
              '├': 'boxvr',
              '┤': 'boxvl',
              '┬': 'boxhd',
              '┴': 'boxhu',
              '┼': 'boxvh',
              '═': 'boxH',
              '║': 'boxV',
              '╒': 'boxdR',
              '╓': 'boxDr',
              '╔': 'boxDR',
              '╕': 'boxdL',
              '╖': 'boxDl',
              '╗': 'boxDL',
              '╘': 'boxuR',
              '╙': 'boxUr',
              '╚': 'boxUR',
              '╛': 'boxuL',
              '╜': 'boxUl',
              '╝': 'boxUL',
              '╞': 'boxvR',
              '╟': 'boxVr',
              '╠': 'boxVR',
              '╡': 'boxvL',
              '╢': 'boxVl',
              '╣': 'boxVL',
              '╤': 'boxHd',
              '╥': 'boxhD',
              '╦': 'boxHD',
              '╧': 'boxHu',
              '╨': 'boxhU',
              '╩': 'boxHU',
              '╪': 'boxvH',
              '╫': 'boxVh',
              '╬': 'boxVH',
              '▀': 'uhblk',
              '▄': 'lhblk',
              '█': 'block',
              '░': 'blk14',
              '▒': 'blk12',
              '▓': 'blk34',
              '□': 'squ',
              '▪': 'squf',
              '▫': 'EmptyVerySmallSquare',
              '▭': 'rect',
              '▮': 'marker',
              '▱': 'fltns',
              '△': 'xutri',
              '▴': 'utrif',
              '▵': 'utri',
              '▸': 'rtrif',
              '▹': 'rtri',
              '▽': 'xdtri',
              '▾': 'dtrif',
              '▿': 'dtri',
              '◂': 'ltrif',
              '◃': 'ltri',
              '◊': 'loz',
              '○': 'cir',
              '◬': 'tridot',
              '◯': 'xcirc',
              '◸': 'ultri',
              '◹': 'urtri',
              '◺': 'lltri',
              '◻': 'EmptySmallSquare',
              '◼': 'FilledSmallSquare',
              '★': 'starf',
              '☆': 'star',
              '☎': 'phone',
              '♀': 'female',
              '♂': 'male',
              '♠': 'spades',
              '♣': 'clubs',
              '♥': 'hearts',
              '♦': 'diams',
              '♪': 'sung',
              '✓': 'check',
              '✗': 'cross',
              '✠': 'malt',
              '✶': 'sext',
              '❘': 'VerticalSeparator',
              '⟈': 'bsolhsub',
              '⟉': 'suphsol',
              '⟵': 'xlarr',
              '⟶': 'xrarr',
              '⟷': 'xharr',
              '⟸': 'xlArr',
              '⟹': 'xrArr',
              '⟺': 'xhArr',
              '⟼': 'xmap',
              '⟿': 'dzigrarr',
              '⤂': 'nvlArr',
              '⤃': 'nvrArr',
              '⤄': 'nvHarr',
              '⤅': 'Map',
              '⤌': 'lbarr',
              '⤍': 'rbarr',
              '⤎': 'lBarr',
              '⤏': 'rBarr',
              '⤐': 'RBarr',
              '⤑': 'DDotrahd',
              '⤒': 'UpArrowBar',
              '⤓': 'DownArrowBar',
              '⤖': 'Rarrtl',
              '⤙': 'latail',
              '⤚': 'ratail',
              '⤛': 'lAtail',
              '⤜': 'rAtail',
              '⤝': 'larrfs',
              '⤞': 'rarrfs',
              '⤟': 'larrbfs',
              '⤠': 'rarrbfs',
              '⤣': 'nwarhk',
              '⤤': 'nearhk',
              '⤥': 'searhk',
              '⤦': 'swarhk',
              '⤧': 'nwnear',
              '⤨': 'toea',
              '⤩': 'tosa',
              '⤪': 'swnwar',
              '⤳': 'rarrc',
              '⤳̸': 'nrarrc',
              '⤵': 'cudarrr',
              '⤶': 'ldca',
              '⤷': 'rdca',
              '⤸': 'cudarrl',
              '⤹': 'larrpl',
              '⤼': 'curarrm',
              '⤽': 'cularrp',
              '⥅': 'rarrpl',
              '⥈': 'harrcir',
              '⥉': 'Uarrocir',
              '⥊': 'lurdshar',
              '⥋': 'ldrushar',
              '⥎': 'LeftRightVector',
              '⥏': 'RightUpDownVector',
              '⥐': 'DownLeftRightVector',
              '⥑': 'LeftUpDownVector',
              '⥒': 'LeftVectorBar',
              '⥓': 'RightVectorBar',
              '⥔': 'RightUpVectorBar',
              '⥕': 'RightDownVectorBar',
              '⥖': 'DownLeftVectorBar',
              '⥗': 'DownRightVectorBar',
              '⥘': 'LeftUpVectorBar',
              '⥙': 'LeftDownVectorBar',
              '⥚': 'LeftTeeVector',
              '⥛': 'RightTeeVector',
              '⥜': 'RightUpTeeVector',
              '⥝': 'RightDownTeeVector',
              '⥞': 'DownLeftTeeVector',
              '⥟': 'DownRightTeeVector',
              '⥠': 'LeftUpTeeVector',
              '⥡': 'LeftDownTeeVector',
              '⥢': 'lHar',
              '⥣': 'uHar',
              '⥤': 'rHar',
              '⥥': 'dHar',
              '⥦': 'luruhar',
              '⥧': 'ldrdhar',
              '⥨': 'ruluhar',
              '⥩': 'rdldhar',
              '⥪': 'lharul',
              '⥫': 'llhard',
              '⥬': 'rharul',
              '⥭': 'lrhard',
              '⥮': 'udhar',
              '⥯': 'duhar',
              '⥰': 'RoundImplies',
              '⥱': 'erarr',
              '⥲': 'simrarr',
              '⥳': 'larrsim',
              '⥴': 'rarrsim',
              '⥵': 'rarrap',
              '⥶': 'ltlarr',
              '⥸': 'gtrarr',
              '⥹': 'subrarr',
              '⥻': 'suplarr',
              '⥼': 'lfisht',
              '⥽': 'rfisht',
              '⥾': 'ufisht',
              '⥿': 'dfisht',
              '⦚': 'vzigzag',
              '⦜': 'vangrt',
              '⦝': 'angrtvbd',
              '⦤': 'ange',
              '⦥': 'range',
              '⦦': 'dwangle',
              '⦧': 'uwangle',
              '⦨': 'angmsdaa',
              '⦩': 'angmsdab',
              '⦪': 'angmsdac',
              '⦫': 'angmsdad',
              '⦬': 'angmsdae',
              '⦭': 'angmsdaf',
              '⦮': 'angmsdag',
              '⦯': 'angmsdah',
              '⦰': 'bemptyv',
              '⦱': 'demptyv',
              '⦲': 'cemptyv',
              '⦳': 'raemptyv',
              '⦴': 'laemptyv',
              '⦵': 'ohbar',
              '⦶': 'omid',
              '⦷': 'opar',
              '⦹': 'operp',
              '⦻': 'olcross',
              '⦼': 'odsold',
              '⦾': 'olcir',
              '⦿': 'ofcir',
              '⧀': 'olt',
              '⧁': 'ogt',
              '⧂': 'cirscir',
              '⧃': 'cirE',
              '⧄': 'solb',
              '⧅': 'bsolb',
              '⧉': 'boxbox',
              '⧍': 'trisb',
              '⧎': 'rtriltri',
              '⧏': 'LeftTriangleBar',
              '⧏̸': 'NotLeftTriangleBar',
              '⧐': 'RightTriangleBar',
              '⧐̸': 'NotRightTriangleBar',
              '⧜': 'iinfin',
              '⧝': 'infintie',
              '⧞': 'nvinfin',
              '⧣': 'eparsl',
              '⧤': 'smeparsl',
              '⧥': 'eqvparsl',
              '⧫': 'lozf',
              '⧴': 'RuleDelayed',
              '⧶': 'dsol',
              '⨀': 'xodot',
              '⨁': 'xoplus',
              '⨂': 'xotime',
              '⨄': 'xuplus',
              '⨆': 'xsqcup',
              '⨍': 'fpartint',
              '⨐': 'cirfnint',
              '⨑': 'awint',
              '⨒': 'rppolint',
              '⨓': 'scpolint',
              '⨔': 'npolint',
              '⨕': 'pointint',
              '⨖': 'quatint',
              '⨗': 'intlarhk',
              '⨢': 'pluscir',
              '⨣': 'plusacir',
              '⨤': 'simplus',
              '⨥': 'plusdu',
              '⨦': 'plussim',
              '⨧': 'plustwo',
              '⨩': 'mcomma',
              '⨪': 'minusdu',
              '⨭': 'loplus',
              '⨮': 'roplus',
              '⨯': 'Cross',
              '⨰': 'timesd',
              '⨱': 'timesbar',
              '⨳': 'smashp',
              '⨴': 'lotimes',
              '⨵': 'rotimes',
              '⨶': 'otimesas',
              '⨷': 'Otimes',
              '⨸': 'odiv',
              '⨹': 'triplus',
              '⨺': 'triminus',
              '⨻': 'tritime',
              '⨼': 'iprod',
              '⨿': 'amalg',
              '⩀': 'capdot',
              '⩂': 'ncup',
              '⩃': 'ncap',
              '⩄': 'capand',
              '⩅': 'cupor',
              '⩆': 'cupcap',
              '⩇': 'capcup',
              '⩈': 'cupbrcap',
              '⩉': 'capbrcup',
              '⩊': 'cupcup',
              '⩋': 'capcap',
              '⩌': 'ccups',
              '⩍': 'ccaps',
              '⩐': 'ccupssm',
              '⩓': 'And',
              '⩔': 'Or',
              '⩕': 'andand',
              '⩖': 'oror',
              '⩗': 'orslope',
              '⩘': 'andslope',
              '⩚': 'andv',
              '⩛': 'orv',
              '⩜': 'andd',
              '⩝': 'ord',
              '⩟': 'wedbar',
              '⩦': 'sdote',
              '⩪': 'simdot',
              '⩭': 'congdot',
              '⩭̸': 'ncongdot',
              '⩮': 'easter',
              '⩯': 'apacir',
              '⩰': 'apE',
              '⩰̸': 'napE',
              '⩱': 'eplus',
              '⩲': 'pluse',
              '⩳': 'Esim',
              '⩷': 'eDDot',
              '⩸': 'equivDD',
              '⩹': 'ltcir',
              '⩺': 'gtcir',
              '⩻': 'ltquest',
              '⩼': 'gtquest',
              '⩽': 'les',
              '⩽̸': 'nles',
              '⩾': 'ges',
              '⩾̸': 'nges',
              '⩿': 'lesdot',
              '⪀': 'gesdot',
              '⪁': 'lesdoto',
              '⪂': 'gesdoto',
              '⪃': 'lesdotor',
              '⪄': 'gesdotol',
              '⪅': 'lap',
              '⪆': 'gap',
              '⪇': 'lne',
              '⪈': 'gne',
              '⪉': 'lnap',
              '⪊': 'gnap',
              '⪋': 'lEg',
              '⪌': 'gEl',
              '⪍': 'lsime',
              '⪎': 'gsime',
              '⪏': 'lsimg',
              '⪐': 'gsiml',
              '⪑': 'lgE',
              '⪒': 'glE',
              '⪓': 'lesges',
              '⪔': 'gesles',
              '⪕': 'els',
              '⪖': 'egs',
              '⪗': 'elsdot',
              '⪘': 'egsdot',
              '⪙': 'el',
              '⪚': 'eg',
              '⪝': 'siml',
              '⪞': 'simg',
              '⪟': 'simlE',
              '⪠': 'simgE',
              '⪡': 'LessLess',
              '⪡̸': 'NotNestedLessLess',
              '⪢': 'GreaterGreater',
              '⪢̸': 'NotNestedGreaterGreater',
              '⪤': 'glj',
              '⪥': 'gla',
              '⪦': 'ltcc',
              '⪧': 'gtcc',
              '⪨': 'lescc',
              '⪩': 'gescc',
              '⪪': 'smt',
              '⪫': 'lat',
              '⪬': 'smte',
              '⪬︀': 'smtes',
              '⪭': 'late',
              '⪭︀': 'lates',
              '⪮': 'bumpE',
              '⪯': 'pre',
              '⪯̸': 'npre',
              '⪰': 'sce',
              '⪰̸': 'nsce',
              '⪳': 'prE',
              '⪴': 'scE',
              '⪵': 'prnE',
              '⪶': 'scnE',
              '⪷': 'prap',
              '⪸': 'scap',
              '⪹': 'prnap',
              '⪺': 'scnap',
              '⪻': 'Pr',
              '⪼': 'Sc',
              '⪽': 'subdot',
              '⪾': 'supdot',
              '⪿': 'subplus',
              '⫀': 'supplus',
              '⫁': 'submult',
              '⫂': 'supmult',
              '⫃': 'subedot',
              '⫄': 'supedot',
              '⫅': 'subE',
              '⫅̸': 'nsubE',
              '⫆': 'supE',
              '⫆̸': 'nsupE',
              '⫇': 'subsim',
              '⫈': 'supsim',
              '⫋︀': 'vsubnE',
              '⫋': 'subnE',
              '⫌︀': 'vsupnE',
              '⫌': 'supnE',
              '⫏': 'csub',
              '⫐': 'csup',
              '⫑': 'csube',
              '⫒': 'csupe',
              '⫓': 'subsup',
              '⫔': 'supsub',
              '⫕': 'subsub',
              '⫖': 'supsup',
              '⫗': 'suphsub',
              '⫘': 'supdsub',
              '⫙': 'forkv',
              '⫚': 'topfork',
              '⫛': 'mlcp',
              '⫤': 'Dashv',
              '⫦': 'Vdashl',
              '⫧': 'Barv',
              '⫨': 'vBar',
              '⫩': 'vBarv',
              '⫫': 'Vbar',
              '⫬': 'Not',
              '⫭': 'bNot',
              '⫮': 'rnmid',
              '⫯': 'cirmid',
              '⫰': 'midcir',
              '⫱': 'topcir',
              '⫲': 'nhpar',
              '⫳': 'parsim',
              '⫽': 'parsl',
              '⫽⃥': 'nparsl',
              '♭': 'flat',
              '♮': 'natur',
              '♯': 'sharp',
              '¤': 'curren',
              '¢': 'cent',
              $: 'dollar',
              '£': 'pound',
              '¥': 'yen',
              '€': 'euro',
              '¹': 'sup1',
              '½': 'half',
              '⅓': 'frac13',
              '¼': 'frac14',
              '⅕': 'frac15',
              '⅙': 'frac16',
              '⅛': 'frac18',
              '²': 'sup2',
              '⅔': 'frac23',
              '⅖': 'frac25',
              '³': 'sup3',
              '¾': 'frac34',
              '⅗': 'frac35',
              '⅜': 'frac38',
              '⅘': 'frac45',
              '⅚': 'frac56',
              '⅝': 'frac58',
              '⅞': 'frac78',
              '𝒶': 'ascr',
              '𝕒': 'aopf',
              '𝔞': 'afr',
              '𝔸': 'Aopf',
              '𝔄': 'Afr',
              '𝒜': 'Ascr',
              ª: 'ordf',
              á: 'aacute',
              Á: 'Aacute',
              à: 'agrave',
              À: 'Agrave',
              ă: 'abreve',
              Ă: 'Abreve',
              â: 'acirc',
              Â: 'Acirc',
              å: 'aring',
              Å: 'angst',
              ä: 'auml',
              Ä: 'Auml',
              ã: 'atilde',
              Ã: 'Atilde',
              ą: 'aogon',
              Ą: 'Aogon',
              ā: 'amacr',
              Ā: 'Amacr',
              æ: 'aelig',
              Æ: 'AElig',
              '𝒷': 'bscr',
              '𝕓': 'bopf',
              '𝔟': 'bfr',
              '𝔹': 'Bopf',
              ℬ: 'Bscr',
              '𝔅': 'Bfr',
              '𝔠': 'cfr',
              '𝒸': 'cscr',
              '𝕔': 'copf',
              ℭ: 'Cfr',
              '𝒞': 'Cscr',
              ℂ: 'Copf',
              ć: 'cacute',
              Ć: 'Cacute',
              ĉ: 'ccirc',
              Ĉ: 'Ccirc',
              č: 'ccaron',
              Č: 'Ccaron',
              ċ: 'cdot',
              Ċ: 'Cdot',
              ç: 'ccedil',
              Ç: 'Ccedil',
              '℅': 'incare',
              '𝔡': 'dfr',
              ⅆ: 'dd',
              '𝕕': 'dopf',
              '𝒹': 'dscr',
              '𝒟': 'Dscr',
              '𝔇': 'Dfr',
              ⅅ: 'DD',
              '𝔻': 'Dopf',
              ď: 'dcaron',
              Ď: 'Dcaron',
              đ: 'dstrok',
              Đ: 'Dstrok',
              ð: 'eth',
              Ð: 'ETH',
              ⅇ: 'ee',
              ℯ: 'escr',
              '𝔢': 'efr',
              '𝕖': 'eopf',
              ℰ: 'Escr',
              '𝔈': 'Efr',
              '𝔼': 'Eopf',
              é: 'eacute',
              É: 'Eacute',
              è: 'egrave',
              È: 'Egrave',
              ê: 'ecirc',
              Ê: 'Ecirc',
              ě: 'ecaron',
              Ě: 'Ecaron',
              ë: 'euml',
              Ë: 'Euml',
              ė: 'edot',
              Ė: 'Edot',
              ę: 'eogon',
              Ę: 'Eogon',
              ē: 'emacr',
              Ē: 'Emacr',
              '𝔣': 'ffr',
              '𝕗': 'fopf',
              '𝒻': 'fscr',
              '𝔉': 'Ffr',
              '𝔽': 'Fopf',
              ℱ: 'Fscr',
              ﬀ: 'fflig',
              ﬃ: 'ffilig',
              ﬄ: 'ffllig',
              ﬁ: 'filig',
              fj: 'fjlig',
              ﬂ: 'fllig',
              ƒ: 'fnof',
              ℊ: 'gscr',
              '𝕘': 'gopf',
              '𝔤': 'gfr',
              '𝒢': 'Gscr',
              '𝔾': 'Gopf',
              '𝔊': 'Gfr',
              ǵ: 'gacute',
              ğ: 'gbreve',
              Ğ: 'Gbreve',
              ĝ: 'gcirc',
              Ĝ: 'Gcirc',
              ġ: 'gdot',
              Ġ: 'Gdot',
              Ģ: 'Gcedil',
              '𝔥': 'hfr',
              ℎ: 'planckh',
              '𝒽': 'hscr',
              '𝕙': 'hopf',
              ℋ: 'Hscr',
              ℌ: 'Hfr',
              ℍ: 'Hopf',
              ĥ: 'hcirc',
              Ĥ: 'Hcirc',
              ℏ: 'hbar',
              ħ: 'hstrok',
              Ħ: 'Hstrok',
              '𝕚': 'iopf',
              '𝔦': 'ifr',
              '𝒾': 'iscr',
              ⅈ: 'ii',
              '𝕀': 'Iopf',
              ℐ: 'Iscr',
              ℑ: 'Im',
              í: 'iacute',
              Í: 'Iacute',
              ì: 'igrave',
              Ì: 'Igrave',
              î: 'icirc',
              Î: 'Icirc',
              ï: 'iuml',
              Ï: 'Iuml',
              ĩ: 'itilde',
              Ĩ: 'Itilde',
              İ: 'Idot',
              į: 'iogon',
              Į: 'Iogon',
              ī: 'imacr',
              Ī: 'Imacr',
              ĳ: 'ijlig',
              Ĳ: 'IJlig',
              ı: 'imath',
              '𝒿': 'jscr',
              '𝕛': 'jopf',
              '𝔧': 'jfr',
              '𝒥': 'Jscr',
              '𝔍': 'Jfr',
              '𝕁': 'Jopf',
              ĵ: 'jcirc',
              Ĵ: 'Jcirc',
              ȷ: 'jmath',
              '𝕜': 'kopf',
              '𝓀': 'kscr',
              '𝔨': 'kfr',
              '𝒦': 'Kscr',
              '𝕂': 'Kopf',
              '𝔎': 'Kfr',
              ķ: 'kcedil',
              Ķ: 'Kcedil',
              '𝔩': 'lfr',
              '𝓁': 'lscr',
              ℓ: 'ell',
              '𝕝': 'lopf',
              ℒ: 'Lscr',
              '𝔏': 'Lfr',
              '𝕃': 'Lopf',
              ĺ: 'lacute',
              Ĺ: 'Lacute',
              ľ: 'lcaron',
              Ľ: 'Lcaron',
              ļ: 'lcedil',
              Ļ: 'Lcedil',
              ł: 'lstrok',
              Ł: 'Lstrok',
              ŀ: 'lmidot',
              Ŀ: 'Lmidot',
              '𝔪': 'mfr',
              '𝕞': 'mopf',
              '𝓂': 'mscr',
              '𝔐': 'Mfr',
              '𝕄': 'Mopf',
              ℳ: 'Mscr',
              '𝔫': 'nfr',
              '𝕟': 'nopf',
              '𝓃': 'nscr',
              ℕ: 'Nopf',
              '𝒩': 'Nscr',
              '𝔑': 'Nfr',
              ń: 'nacute',
              Ń: 'Nacute',
              ň: 'ncaron',
              Ň: 'Ncaron',
              ñ: 'ntilde',
              Ñ: 'Ntilde',
              ņ: 'ncedil',
              Ņ: 'Ncedil',
              '№': 'numero',
              ŋ: 'eng',
              Ŋ: 'ENG',
              '𝕠': 'oopf',
              '𝔬': 'ofr',
              ℴ: 'oscr',
              '𝒪': 'Oscr',
              '𝔒': 'Ofr',
              '𝕆': 'Oopf',
              º: 'ordm',
              ó: 'oacute',
              Ó: 'Oacute',
              ò: 'ograve',
              Ò: 'Ograve',
              ô: 'ocirc',
              Ô: 'Ocirc',
              ö: 'ouml',
              Ö: 'Ouml',
              ő: 'odblac',
              Ő: 'Odblac',
              õ: 'otilde',
              Õ: 'Otilde',
              ø: 'oslash',
              Ø: 'Oslash',
              ō: 'omacr',
              Ō: 'Omacr',
              œ: 'oelig',
              Œ: 'OElig',
              '𝔭': 'pfr',
              '𝓅': 'pscr',
              '𝕡': 'popf',
              ℙ: 'Popf',
              '𝔓': 'Pfr',
              '𝒫': 'Pscr',
              '𝕢': 'qopf',
              '𝔮': 'qfr',
              '𝓆': 'qscr',
              '𝒬': 'Qscr',
              '𝔔': 'Qfr',
              ℚ: 'Qopf',
              ĸ: 'kgreen',
              '𝔯': 'rfr',
              '𝕣': 'ropf',
              '𝓇': 'rscr',
              ℛ: 'Rscr',
              ℜ: 'Re',
              ℝ: 'Ropf',
              ŕ: 'racute',
              Ŕ: 'Racute',
              ř: 'rcaron',
              Ř: 'Rcaron',
              ŗ: 'rcedil',
              Ŗ: 'Rcedil',
              '𝕤': 'sopf',
              '𝓈': 'sscr',
              '𝔰': 'sfr',
              '𝕊': 'Sopf',
              '𝔖': 'Sfr',
              '𝒮': 'Sscr',
              'Ⓢ': 'oS',
              ś: 'sacute',
              Ś: 'Sacute',
              ŝ: 'scirc',
              Ŝ: 'Scirc',
              š: 'scaron',
              Š: 'Scaron',
              ş: 'scedil',
              Ş: 'Scedil',
              ß: 'szlig',
              '𝔱': 'tfr',
              '𝓉': 'tscr',
              '𝕥': 'topf',
              '𝒯': 'Tscr',
              '𝔗': 'Tfr',
              '𝕋': 'Topf',
              ť: 'tcaron',
              Ť: 'Tcaron',
              ţ: 'tcedil',
              Ţ: 'Tcedil',
              '™': 'trade',
              ŧ: 'tstrok',
              Ŧ: 'Tstrok',
              '𝓊': 'uscr',
              '𝕦': 'uopf',
              '𝔲': 'ufr',
              '𝕌': 'Uopf',
              '𝔘': 'Ufr',
              '𝒰': 'Uscr',
              ú: 'uacute',
              Ú: 'Uacute',
              ù: 'ugrave',
              Ù: 'Ugrave',
              ŭ: 'ubreve',
              Ŭ: 'Ubreve',
              û: 'ucirc',
              Û: 'Ucirc',
              ů: 'uring',
              Ů: 'Uring',
              ü: 'uuml',
              Ü: 'Uuml',
              ű: 'udblac',
              Ű: 'Udblac',
              ũ: 'utilde',
              Ũ: 'Utilde',
              ų: 'uogon',
              Ų: 'Uogon',
              ū: 'umacr',
              Ū: 'Umacr',
              '𝔳': 'vfr',
              '𝕧': 'vopf',
              '𝓋': 'vscr',
              '𝔙': 'Vfr',
              '𝕍': 'Vopf',
              '𝒱': 'Vscr',
              '𝕨': 'wopf',
              '𝓌': 'wscr',
              '𝔴': 'wfr',
              '𝒲': 'Wscr',
              '𝕎': 'Wopf',
              '𝔚': 'Wfr',
              ŵ: 'wcirc',
              Ŵ: 'Wcirc',
              '𝔵': 'xfr',
              '𝓍': 'xscr',
              '𝕩': 'xopf',
              '𝕏': 'Xopf',
              '𝔛': 'Xfr',
              '𝒳': 'Xscr',
              '𝔶': 'yfr',
              '𝓎': 'yscr',
              '𝕪': 'yopf',
              '𝒴': 'Yscr',
              '𝔜': 'Yfr',
              '𝕐': 'Yopf',
              ý: 'yacute',
              Ý: 'Yacute',
              ŷ: 'ycirc',
              Ŷ: 'Ycirc',
              ÿ: 'yuml',
              Ÿ: 'Yuml',
              '𝓏': 'zscr',
              '𝔷': 'zfr',
              '𝕫': 'zopf',
              ℨ: 'Zfr',
              ℤ: 'Zopf',
              '𝒵': 'Zscr',
              ź: 'zacute',
              Ź: 'Zacute',
              ž: 'zcaron',
              Ž: 'Zcaron',
              ż: 'zdot',
              Ż: 'Zdot',
              Ƶ: 'imped',
              þ: 'thorn',
              Þ: 'THORN',
              ŉ: 'napos',
              α: 'alpha',
              Α: 'Alpha',
              β: 'beta',
              Β: 'Beta',
              γ: 'gamma',
              Γ: 'Gamma',
              δ: 'delta',
              Δ: 'Delta',
              ε: 'epsi',
              ϵ: 'epsiv',
              Ε: 'Epsilon',
              ϝ: 'gammad',
              Ϝ: 'Gammad',
              ζ: 'zeta',
              Ζ: 'Zeta',
              η: 'eta',
              Η: 'Eta',
              θ: 'theta',
              ϑ: 'thetav',
              Θ: 'Theta',
              ι: 'iota',
              Ι: 'Iota',
              κ: 'kappa',
              ϰ: 'kappav',
              Κ: 'Kappa',
              λ: 'lambda',
              Λ: 'Lambda',
              μ: 'mu',
              µ: 'micro',
              Μ: 'Mu',
              ν: 'nu',
              Ν: 'Nu',
              ξ: 'xi',
              Ξ: 'Xi',
              ο: 'omicron',
              Ο: 'Omicron',
              π: 'pi',
              ϖ: 'piv',
              Π: 'Pi',
              ρ: 'rho',
              ϱ: 'rhov',
              Ρ: 'Rho',
              σ: 'sigma',
              Σ: 'Sigma',
              ς: 'sigmaf',
              τ: 'tau',
              Τ: 'Tau',
              υ: 'upsi',
              Υ: 'Upsilon',
              ϒ: 'Upsi',
              φ: 'phi',
              ϕ: 'phiv',
              Φ: 'Phi',
              χ: 'chi',
              Χ: 'Chi',
              ψ: 'psi',
              Ψ: 'Psi',
              ω: 'omega',
              Ω: 'ohm',
              а: 'acy',
              А: 'Acy',
              б: 'bcy',
              Б: 'Bcy',
              в: 'vcy',
              В: 'Vcy',
              г: 'gcy',
              Г: 'Gcy',
              ѓ: 'gjcy',
              Ѓ: 'GJcy',
              д: 'dcy',
              Д: 'Dcy',
              ђ: 'djcy',
              Ђ: 'DJcy',
              е: 'iecy',
              Е: 'IEcy',
              ё: 'iocy',
              Ё: 'IOcy',
              є: 'jukcy',
              Є: 'Jukcy',
              ж: 'zhcy',
              Ж: 'ZHcy',
              з: 'zcy',
              З: 'Zcy',
              ѕ: 'dscy',
              Ѕ: 'DScy',
              и: 'icy',
              И: 'Icy',
              і: 'iukcy',
              І: 'Iukcy',
              ї: 'yicy',
              Ї: 'YIcy',
              й: 'jcy',
              Й: 'Jcy',
              ј: 'jsercy',
              Ј: 'Jsercy',
              к: 'kcy',
              К: 'Kcy',
              ќ: 'kjcy',
              Ќ: 'KJcy',
              л: 'lcy',
              Л: 'Lcy',
              љ: 'ljcy',
              Љ: 'LJcy',
              м: 'mcy',
              М: 'Mcy',
              н: 'ncy',
              Н: 'Ncy',
              њ: 'njcy',
              Њ: 'NJcy',
              о: 'ocy',
              О: 'Ocy',
              п: 'pcy',
              П: 'Pcy',
              р: 'rcy',
              Р: 'Rcy',
              с: 'scy',
              С: 'Scy',
              т: 'tcy',
              Т: 'Tcy',
              ћ: 'tshcy',
              Ћ: 'TSHcy',
              у: 'ucy',
              У: 'Ucy',
              ў: 'ubrcy',
              Ў: 'Ubrcy',
              ф: 'fcy',
              Ф: 'Fcy',
              х: 'khcy',
              Х: 'KHcy',
              ц: 'tscy',
              Ц: 'TScy',
              ч: 'chcy',
              Ч: 'CHcy',
              џ: 'dzcy',
              Џ: 'DZcy',
              ш: 'shcy',
              Ш: 'SHcy',
              щ: 'shchcy',
              Щ: 'SHCHcy',
              ъ: 'hardcy',
              Ъ: 'HARDcy',
              ы: 'ycy',
              Ы: 'Ycy',
              ь: 'softcy',
              Ь: 'SOFTcy',
              э: 'ecy',
              Э: 'Ecy',
              ю: 'yucy',
              Ю: 'YUcy',
              я: 'yacy',
              Я: 'YAcy',
              ℵ: 'aleph',
              ℶ: 'beth',
              ℷ: 'gimel',
              ℸ: 'daleth'
            },
            h = /["&'<>`]/g,
            d = {
              '"': '&quot;',
              '&': '&amp;',
              "'": '&#x27;',
              '<': '&lt;',
              '>': '&gt;',
              '`': '&#x60;'
            },
            g = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
            f =
              /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
            m =
              /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
            b = {
              aacute: 'á',
              Aacute: 'Á',
              abreve: 'ă',
              Abreve: 'Ă',
              ac: '∾',
              acd: '∿',
              acE: '∾̳',
              acirc: 'â',
              Acirc: 'Â',
              acute: '´',
              acy: 'а',
              Acy: 'А',
              aelig: 'æ',
              AElig: 'Æ',
              af: '⁡',
              afr: '𝔞',
              Afr: '𝔄',
              agrave: 'à',
              Agrave: 'À',
              alefsym: 'ℵ',
              aleph: 'ℵ',
              alpha: 'α',
              Alpha: 'Α',
              amacr: 'ā',
              Amacr: 'Ā',
              amalg: '⨿',
              amp: '&',
              AMP: '&',
              and: '∧',
              And: '⩓',
              andand: '⩕',
              andd: '⩜',
              andslope: '⩘',
              andv: '⩚',
              ang: '∠',
              ange: '⦤',
              angle: '∠',
              angmsd: '∡',
              angmsdaa: '⦨',
              angmsdab: '⦩',
              angmsdac: '⦪',
              angmsdad: '⦫',
              angmsdae: '⦬',
              angmsdaf: '⦭',
              angmsdag: '⦮',
              angmsdah: '⦯',
              angrt: '∟',
              angrtvb: '⊾',
              angrtvbd: '⦝',
              angsph: '∢',
              angst: 'Å',
              angzarr: '⍼',
              aogon: 'ą',
              Aogon: 'Ą',
              aopf: '𝕒',
              Aopf: '𝔸',
              ap: '≈',
              apacir: '⩯',
              ape: '≊',
              apE: '⩰',
              apid: '≋',
              apos: "'",
              ApplyFunction: '⁡',
              approx: '≈',
              approxeq: '≊',
              aring: 'å',
              Aring: 'Å',
              ascr: '𝒶',
              Ascr: '𝒜',
              Assign: '≔',
              ast: '*',
              asymp: '≈',
              asympeq: '≍',
              atilde: 'ã',
              Atilde: 'Ã',
              auml: 'ä',
              Auml: 'Ä',
              awconint: '∳',
              awint: '⨑',
              backcong: '≌',
              backepsilon: '϶',
              backprime: '‵',
              backsim: '∽',
              backsimeq: '⋍',
              Backslash: '∖',
              Barv: '⫧',
              barvee: '⊽',
              barwed: '⌅',
              Barwed: '⌆',
              barwedge: '⌅',
              bbrk: '⎵',
              bbrktbrk: '⎶',
              bcong: '≌',
              bcy: 'б',
              Bcy: 'Б',
              bdquo: '„',
              becaus: '∵',
              because: '∵',
              Because: '∵',
              bemptyv: '⦰',
              bepsi: '϶',
              bernou: 'ℬ',
              Bernoullis: 'ℬ',
              beta: 'β',
              Beta: 'Β',
              beth: 'ℶ',
              between: '≬',
              bfr: '𝔟',
              Bfr: '𝔅',
              bigcap: '⋂',
              bigcirc: '◯',
              bigcup: '⋃',
              bigodot: '⨀',
              bigoplus: '⨁',
              bigotimes: '⨂',
              bigsqcup: '⨆',
              bigstar: '★',
              bigtriangledown: '▽',
              bigtriangleup: '△',
              biguplus: '⨄',
              bigvee: '⋁',
              bigwedge: '⋀',
              bkarow: '⤍',
              blacklozenge: '⧫',
              blacksquare: '▪',
              blacktriangle: '▴',
              blacktriangledown: '▾',
              blacktriangleleft: '◂',
              blacktriangleright: '▸',
              blank: '␣',
              blk12: '▒',
              blk14: '░',
              blk34: '▓',
              block: '█',
              bne: '=⃥',
              bnequiv: '≡⃥',
              bnot: '⌐',
              bNot: '⫭',
              bopf: '𝕓',
              Bopf: '𝔹',
              bot: '⊥',
              bottom: '⊥',
              bowtie: '⋈',
              boxbox: '⧉',
              boxdl: '┐',
              boxdL: '╕',
              boxDl: '╖',
              boxDL: '╗',
              boxdr: '┌',
              boxdR: '╒',
              boxDr: '╓',
              boxDR: '╔',
              boxh: '─',
              boxH: '═',
              boxhd: '┬',
              boxhD: '╥',
              boxHd: '╤',
              boxHD: '╦',
              boxhu: '┴',
              boxhU: '╨',
              boxHu: '╧',
              boxHU: '╩',
              boxminus: '⊟',
              boxplus: '⊞',
              boxtimes: '⊠',
              boxul: '┘',
              boxuL: '╛',
              boxUl: '╜',
              boxUL: '╝',
              boxur: '└',
              boxuR: '╘',
              boxUr: '╙',
              boxUR: '╚',
              boxv: '│',
              boxV: '║',
              boxvh: '┼',
              boxvH: '╪',
              boxVh: '╫',
              boxVH: '╬',
              boxvl: '┤',
              boxvL: '╡',
              boxVl: '╢',
              boxVL: '╣',
              boxvr: '├',
              boxvR: '╞',
              boxVr: '╟',
              boxVR: '╠',
              bprime: '‵',
              breve: '˘',
              Breve: '˘',
              brvbar: '¦',
              bscr: '𝒷',
              Bscr: 'ℬ',
              bsemi: '⁏',
              bsim: '∽',
              bsime: '⋍',
              bsol: '\\',
              bsolb: '⧅',
              bsolhsub: '⟈',
              bull: '•',
              bullet: '•',
              bump: '≎',
              bumpe: '≏',
              bumpE: '⪮',
              bumpeq: '≏',
              Bumpeq: '≎',
              cacute: 'ć',
              Cacute: 'Ć',
              cap: '∩',
              Cap: '⋒',
              capand: '⩄',
              capbrcup: '⩉',
              capcap: '⩋',
              capcup: '⩇',
              capdot: '⩀',
              CapitalDifferentialD: 'ⅅ',
              caps: '∩︀',
              caret: '⁁',
              caron: 'ˇ',
              Cayleys: 'ℭ',
              ccaps: '⩍',
              ccaron: 'č',
              Ccaron: 'Č',
              ccedil: 'ç',
              Ccedil: 'Ç',
              ccirc: 'ĉ',
              Ccirc: 'Ĉ',
              Cconint: '∰',
              ccups: '⩌',
              ccupssm: '⩐',
              cdot: 'ċ',
              Cdot: 'Ċ',
              cedil: '¸',
              Cedilla: '¸',
              cemptyv: '⦲',
              cent: '¢',
              centerdot: '·',
              CenterDot: '·',
              cfr: '𝔠',
              Cfr: 'ℭ',
              chcy: 'ч',
              CHcy: 'Ч',
              check: '✓',
              checkmark: '✓',
              chi: 'χ',
              Chi: 'Χ',
              cir: '○',
              circ: 'ˆ',
              circeq: '≗',
              circlearrowleft: '↺',
              circlearrowright: '↻',
              circledast: '⊛',
              circledcirc: '⊚',
              circleddash: '⊝',
              CircleDot: '⊙',
              circledR: '®',
              circledS: 'Ⓢ',
              CircleMinus: '⊖',
              CirclePlus: '⊕',
              CircleTimes: '⊗',
              cire: '≗',
              cirE: '⧃',
              cirfnint: '⨐',
              cirmid: '⫯',
              cirscir: '⧂',
              ClockwiseContourIntegral: '∲',
              CloseCurlyDoubleQuote: '”',
              CloseCurlyQuote: '’',
              clubs: '♣',
              clubsuit: '♣',
              colon: ':',
              Colon: '∷',
              colone: '≔',
              Colone: '⩴',
              coloneq: '≔',
              comma: ',',
              commat: '@',
              comp: '∁',
              compfn: '∘',
              complement: '∁',
              complexes: 'ℂ',
              cong: '≅',
              congdot: '⩭',
              Congruent: '≡',
              conint: '∮',
              Conint: '∯',
              ContourIntegral: '∮',
              copf: '𝕔',
              Copf: 'ℂ',
              coprod: '∐',
              Coproduct: '∐',
              copy: '©',
              COPY: '©',
              copysr: '℗',
              CounterClockwiseContourIntegral: '∳',
              crarr: '↵',
              cross: '✗',
              Cross: '⨯',
              cscr: '𝒸',
              Cscr: '𝒞',
              csub: '⫏',
              csube: '⫑',
              csup: '⫐',
              csupe: '⫒',
              ctdot: '⋯',
              cudarrl: '⤸',
              cudarrr: '⤵',
              cuepr: '⋞',
              cuesc: '⋟',
              cularr: '↶',
              cularrp: '⤽',
              cup: '∪',
              Cup: '⋓',
              cupbrcap: '⩈',
              cupcap: '⩆',
              CupCap: '≍',
              cupcup: '⩊',
              cupdot: '⊍',
              cupor: '⩅',
              cups: '∪︀',
              curarr: '↷',
              curarrm: '⤼',
              curlyeqprec: '⋞',
              curlyeqsucc: '⋟',
              curlyvee: '⋎',
              curlywedge: '⋏',
              curren: '¤',
              curvearrowleft: '↶',
              curvearrowright: '↷',
              cuvee: '⋎',
              cuwed: '⋏',
              cwconint: '∲',
              cwint: '∱',
              cylcty: '⌭',
              dagger: '†',
              Dagger: '‡',
              daleth: 'ℸ',
              darr: '↓',
              dArr: '⇓',
              Darr: '↡',
              dash: '‐',
              dashv: '⊣',
              Dashv: '⫤',
              dbkarow: '⤏',
              dblac: '˝',
              dcaron: 'ď',
              Dcaron: 'Ď',
              dcy: 'д',
              Dcy: 'Д',
              dd: 'ⅆ',
              DD: 'ⅅ',
              ddagger: '‡',
              ddarr: '⇊',
              DDotrahd: '⤑',
              ddotseq: '⩷',
              deg: '°',
              Del: '∇',
              delta: 'δ',
              Delta: 'Δ',
              demptyv: '⦱',
              dfisht: '⥿',
              dfr: '𝔡',
              Dfr: '𝔇',
              dHar: '⥥',
              dharl: '⇃',
              dharr: '⇂',
              DiacriticalAcute: '´',
              DiacriticalDot: '˙',
              DiacriticalDoubleAcute: '˝',
              DiacriticalGrave: '`',
              DiacriticalTilde: '˜',
              diam: '⋄',
              diamond: '⋄',
              Diamond: '⋄',
              diamondsuit: '♦',
              diams: '♦',
              die: '¨',
              DifferentialD: 'ⅆ',
              digamma: 'ϝ',
              disin: '⋲',
              div: '÷',
              divide: '÷',
              divideontimes: '⋇',
              divonx: '⋇',
              djcy: 'ђ',
              DJcy: 'Ђ',
              dlcorn: '⌞',
              dlcrop: '⌍',
              dollar: '$',
              dopf: '𝕕',
              Dopf: '𝔻',
              dot: '˙',
              Dot: '¨',
              DotDot: '⃜',
              doteq: '≐',
              doteqdot: '≑',
              DotEqual: '≐',
              dotminus: '∸',
              dotplus: '∔',
              dotsquare: '⊡',
              doublebarwedge: '⌆',
              DoubleContourIntegral: '∯',
              DoubleDot: '¨',
              DoubleDownArrow: '⇓',
              DoubleLeftArrow: '⇐',
              DoubleLeftRightArrow: '⇔',
              DoubleLeftTee: '⫤',
              DoubleLongLeftArrow: '⟸',
              DoubleLongLeftRightArrow: '⟺',
              DoubleLongRightArrow: '⟹',
              DoubleRightArrow: '⇒',
              DoubleRightTee: '⊨',
              DoubleUpArrow: '⇑',
              DoubleUpDownArrow: '⇕',
              DoubleVerticalBar: '∥',
              downarrow: '↓',
              Downarrow: '⇓',
              DownArrow: '↓',
              DownArrowBar: '⤓',
              DownArrowUpArrow: '⇵',
              DownBreve: '̑',
              downdownarrows: '⇊',
              downharpoonleft: '⇃',
              downharpoonright: '⇂',
              DownLeftRightVector: '⥐',
              DownLeftTeeVector: '⥞',
              DownLeftVector: '↽',
              DownLeftVectorBar: '⥖',
              DownRightTeeVector: '⥟',
              DownRightVector: '⇁',
              DownRightVectorBar: '⥗',
              DownTee: '⊤',
              DownTeeArrow: '↧',
              drbkarow: '⤐',
              drcorn: '⌟',
              drcrop: '⌌',
              dscr: '𝒹',
              Dscr: '𝒟',
              dscy: 'ѕ',
              DScy: 'Ѕ',
              dsol: '⧶',
              dstrok: 'đ',
              Dstrok: 'Đ',
              dtdot: '⋱',
              dtri: '▿',
              dtrif: '▾',
              duarr: '⇵',
              duhar: '⥯',
              dwangle: '⦦',
              dzcy: 'џ',
              DZcy: 'Џ',
              dzigrarr: '⟿',
              eacute: 'é',
              Eacute: 'É',
              easter: '⩮',
              ecaron: 'ě',
              Ecaron: 'Ě',
              ecir: '≖',
              ecirc: 'ê',
              Ecirc: 'Ê',
              ecolon: '≕',
              ecy: 'э',
              Ecy: 'Э',
              eDDot: '⩷',
              edot: 'ė',
              eDot: '≑',
              Edot: 'Ė',
              ee: 'ⅇ',
              efDot: '≒',
              efr: '𝔢',
              Efr: '𝔈',
              eg: '⪚',
              egrave: 'è',
              Egrave: 'È',
              egs: '⪖',
              egsdot: '⪘',
              el: '⪙',
              Element: '∈',
              elinters: '⏧',
              ell: 'ℓ',
              els: '⪕',
              elsdot: '⪗',
              emacr: 'ē',
              Emacr: 'Ē',
              empty: '∅',
              emptyset: '∅',
              EmptySmallSquare: '◻',
              emptyv: '∅',
              EmptyVerySmallSquare: '▫',
              emsp: ' ',
              emsp13: ' ',
              emsp14: ' ',
              eng: 'ŋ',
              ENG: 'Ŋ',
              ensp: ' ',
              eogon: 'ę',
              Eogon: 'Ę',
              eopf: '𝕖',
              Eopf: '𝔼',
              epar: '⋕',
              eparsl: '⧣',
              eplus: '⩱',
              epsi: 'ε',
              epsilon: 'ε',
              Epsilon: 'Ε',
              epsiv: 'ϵ',
              eqcirc: '≖',
              eqcolon: '≕',
              eqsim: '≂',
              eqslantgtr: '⪖',
              eqslantless: '⪕',
              Equal: '⩵',
              equals: '=',
              EqualTilde: '≂',
              equest: '≟',
              Equilibrium: '⇌',
              equiv: '≡',
              equivDD: '⩸',
              eqvparsl: '⧥',
              erarr: '⥱',
              erDot: '≓',
              escr: 'ℯ',
              Escr: 'ℰ',
              esdot: '≐',
              esim: '≂',
              Esim: '⩳',
              eta: 'η',
              Eta: 'Η',
              eth: 'ð',
              ETH: 'Ð',
              euml: 'ë',
              Euml: 'Ë',
              euro: '€',
              excl: '!',
              exist: '∃',
              Exists: '∃',
              expectation: 'ℰ',
              exponentiale: 'ⅇ',
              ExponentialE: 'ⅇ',
              fallingdotseq: '≒',
              fcy: 'ф',
              Fcy: 'Ф',
              female: '♀',
              ffilig: 'ﬃ',
              fflig: 'ﬀ',
              ffllig: 'ﬄ',
              ffr: '𝔣',
              Ffr: '𝔉',
              filig: 'ﬁ',
              FilledSmallSquare: '◼',
              FilledVerySmallSquare: '▪',
              fjlig: 'fj',
              flat: '♭',
              fllig: 'ﬂ',
              fltns: '▱',
              fnof: 'ƒ',
              fopf: '𝕗',
              Fopf: '𝔽',
              forall: '∀',
              ForAll: '∀',
              fork: '⋔',
              forkv: '⫙',
              Fouriertrf: 'ℱ',
              fpartint: '⨍',
              frac12: '½',
              frac13: '⅓',
              frac14: '¼',
              frac15: '⅕',
              frac16: '⅙',
              frac18: '⅛',
              frac23: '⅔',
              frac25: '⅖',
              frac34: '¾',
              frac35: '⅗',
              frac38: '⅜',
              frac45: '⅘',
              frac56: '⅚',
              frac58: '⅝',
              frac78: '⅞',
              frasl: '⁄',
              frown: '⌢',
              fscr: '𝒻',
              Fscr: 'ℱ',
              gacute: 'ǵ',
              gamma: 'γ',
              Gamma: 'Γ',
              gammad: 'ϝ',
              Gammad: 'Ϝ',
              gap: '⪆',
              gbreve: 'ğ',
              Gbreve: 'Ğ',
              Gcedil: 'Ģ',
              gcirc: 'ĝ',
              Gcirc: 'Ĝ',
              gcy: 'г',
              Gcy: 'Г',
              gdot: 'ġ',
              Gdot: 'Ġ',
              ge: '≥',
              gE: '≧',
              gel: '⋛',
              gEl: '⪌',
              geq: '≥',
              geqq: '≧',
              geqslant: '⩾',
              ges: '⩾',
              gescc: '⪩',
              gesdot: '⪀',
              gesdoto: '⪂',
              gesdotol: '⪄',
              gesl: '⋛︀',
              gesles: '⪔',
              gfr: '𝔤',
              Gfr: '𝔊',
              gg: '≫',
              Gg: '⋙',
              ggg: '⋙',
              gimel: 'ℷ',
              gjcy: 'ѓ',
              GJcy: 'Ѓ',
              gl: '≷',
              gla: '⪥',
              glE: '⪒',
              glj: '⪤',
              gnap: '⪊',
              gnapprox: '⪊',
              gne: '⪈',
              gnE: '≩',
              gneq: '⪈',
              gneqq: '≩',
              gnsim: '⋧',
              gopf: '𝕘',
              Gopf: '𝔾',
              grave: '`',
              GreaterEqual: '≥',
              GreaterEqualLess: '⋛',
              GreaterFullEqual: '≧',
              GreaterGreater: '⪢',
              GreaterLess: '≷',
              GreaterSlantEqual: '⩾',
              GreaterTilde: '≳',
              gscr: 'ℊ',
              Gscr: '𝒢',
              gsim: '≳',
              gsime: '⪎',
              gsiml: '⪐',
              gt: '>',
              Gt: '≫',
              GT: '>',
              gtcc: '⪧',
              gtcir: '⩺',
              gtdot: '⋗',
              gtlPar: '⦕',
              gtquest: '⩼',
              gtrapprox: '⪆',
              gtrarr: '⥸',
              gtrdot: '⋗',
              gtreqless: '⋛',
              gtreqqless: '⪌',
              gtrless: '≷',
              gtrsim: '≳',
              gvertneqq: '≩︀',
              gvnE: '≩︀',
              Hacek: 'ˇ',
              hairsp: ' ',
              half: '½',
              hamilt: 'ℋ',
              hardcy: 'ъ',
              HARDcy: 'Ъ',
              harr: '↔',
              hArr: '⇔',
              harrcir: '⥈',
              harrw: '↭',
              Hat: '^',
              hbar: 'ℏ',
              hcirc: 'ĥ',
              Hcirc: 'Ĥ',
              hearts: '♥',
              heartsuit: '♥',
              hellip: '…',
              hercon: '⊹',
              hfr: '𝔥',
              Hfr: 'ℌ',
              HilbertSpace: 'ℋ',
              hksearow: '⤥',
              hkswarow: '⤦',
              hoarr: '⇿',
              homtht: '∻',
              hookleftarrow: '↩',
              hookrightarrow: '↪',
              hopf: '𝕙',
              Hopf: 'ℍ',
              horbar: '―',
              HorizontalLine: '─',
              hscr: '𝒽',
              Hscr: 'ℋ',
              hslash: 'ℏ',
              hstrok: 'ħ',
              Hstrok: 'Ħ',
              HumpDownHump: '≎',
              HumpEqual: '≏',
              hybull: '⁃',
              hyphen: '‐',
              iacute: 'í',
              Iacute: 'Í',
              ic: '⁣',
              icirc: 'î',
              Icirc: 'Î',
              icy: 'и',
              Icy: 'И',
              Idot: 'İ',
              iecy: 'е',
              IEcy: 'Е',
              iexcl: '¡',
              iff: '⇔',
              ifr: '𝔦',
              Ifr: 'ℑ',
              igrave: 'ì',
              Igrave: 'Ì',
              ii: 'ⅈ',
              iiiint: '⨌',
              iiint: '∭',
              iinfin: '⧜',
              iiota: '℩',
              ijlig: 'ĳ',
              IJlig: 'Ĳ',
              Im: 'ℑ',
              imacr: 'ī',
              Imacr: 'Ī',
              image: 'ℑ',
              ImaginaryI: 'ⅈ',
              imagline: 'ℐ',
              imagpart: 'ℑ',
              imath: 'ı',
              imof: '⊷',
              imped: 'Ƶ',
              Implies: '⇒',
              in: '∈',
              incare: '℅',
              infin: '∞',
              infintie: '⧝',
              inodot: 'ı',
              int: '∫',
              Int: '∬',
              intcal: '⊺',
              integers: 'ℤ',
              Integral: '∫',
              intercal: '⊺',
              Intersection: '⋂',
              intlarhk: '⨗',
              intprod: '⨼',
              InvisibleComma: '⁣',
              InvisibleTimes: '⁢',
              iocy: 'ё',
              IOcy: 'Ё',
              iogon: 'į',
              Iogon: 'Į',
              iopf: '𝕚',
              Iopf: '𝕀',
              iota: 'ι',
              Iota: 'Ι',
              iprod: '⨼',
              iquest: '¿',
              iscr: '𝒾',
              Iscr: 'ℐ',
              isin: '∈',
              isindot: '⋵',
              isinE: '⋹',
              isins: '⋴',
              isinsv: '⋳',
              isinv: '∈',
              it: '⁢',
              itilde: 'ĩ',
              Itilde: 'Ĩ',
              iukcy: 'і',
              Iukcy: 'І',
              iuml: 'ï',
              Iuml: 'Ï',
              jcirc: 'ĵ',
              Jcirc: 'Ĵ',
              jcy: 'й',
              Jcy: 'Й',
              jfr: '𝔧',
              Jfr: '𝔍',
              jmath: 'ȷ',
              jopf: '𝕛',
              Jopf: '𝕁',
              jscr: '𝒿',
              Jscr: '𝒥',
              jsercy: 'ј',
              Jsercy: 'Ј',
              jukcy: 'є',
              Jukcy: 'Є',
              kappa: 'κ',
              Kappa: 'Κ',
              kappav: 'ϰ',
              kcedil: 'ķ',
              Kcedil: 'Ķ',
              kcy: 'к',
              Kcy: 'К',
              kfr: '𝔨',
              Kfr: '𝔎',
              kgreen: 'ĸ',
              khcy: 'х',
              KHcy: 'Х',
              kjcy: 'ќ',
              KJcy: 'Ќ',
              kopf: '𝕜',
              Kopf: '𝕂',
              kscr: '𝓀',
              Kscr: '𝒦',
              lAarr: '⇚',
              lacute: 'ĺ',
              Lacute: 'Ĺ',
              laemptyv: '⦴',
              lagran: 'ℒ',
              lambda: 'λ',
              Lambda: 'Λ',
              lang: '⟨',
              Lang: '⟪',
              langd: '⦑',
              langle: '⟨',
              lap: '⪅',
              Laplacetrf: 'ℒ',
              laquo: '«',
              larr: '←',
              lArr: '⇐',
              Larr: '↞',
              larrb: '⇤',
              larrbfs: '⤟',
              larrfs: '⤝',
              larrhk: '↩',
              larrlp: '↫',
              larrpl: '⤹',
              larrsim: '⥳',
              larrtl: '↢',
              lat: '⪫',
              latail: '⤙',
              lAtail: '⤛',
              late: '⪭',
              lates: '⪭︀',
              lbarr: '⤌',
              lBarr: '⤎',
              lbbrk: '❲',
              lbrace: '{',
              lbrack: '[',
              lbrke: '⦋',
              lbrksld: '⦏',
              lbrkslu: '⦍',
              lcaron: 'ľ',
              Lcaron: 'Ľ',
              lcedil: 'ļ',
              Lcedil: 'Ļ',
              lceil: '⌈',
              lcub: '{',
              lcy: 'л',
              Lcy: 'Л',
              ldca: '⤶',
              ldquo: '“',
              ldquor: '„',
              ldrdhar: '⥧',
              ldrushar: '⥋',
              ldsh: '↲',
              le: '≤',
              lE: '≦',
              LeftAngleBracket: '⟨',
              leftarrow: '←',
              Leftarrow: '⇐',
              LeftArrow: '←',
              LeftArrowBar: '⇤',
              LeftArrowRightArrow: '⇆',
              leftarrowtail: '↢',
              LeftCeiling: '⌈',
              LeftDoubleBracket: '⟦',
              LeftDownTeeVector: '⥡',
              LeftDownVector: '⇃',
              LeftDownVectorBar: '⥙',
              LeftFloor: '⌊',
              leftharpoondown: '↽',
              leftharpoonup: '↼',
              leftleftarrows: '⇇',
              leftrightarrow: '↔',
              Leftrightarrow: '⇔',
              LeftRightArrow: '↔',
              leftrightarrows: '⇆',
              leftrightharpoons: '⇋',
              leftrightsquigarrow: '↭',
              LeftRightVector: '⥎',
              LeftTee: '⊣',
              LeftTeeArrow: '↤',
              LeftTeeVector: '⥚',
              leftthreetimes: '⋋',
              LeftTriangle: '⊲',
              LeftTriangleBar: '⧏',
              LeftTriangleEqual: '⊴',
              LeftUpDownVector: '⥑',
              LeftUpTeeVector: '⥠',
              LeftUpVector: '↿',
              LeftUpVectorBar: '⥘',
              LeftVector: '↼',
              LeftVectorBar: '⥒',
              leg: '⋚',
              lEg: '⪋',
              leq: '≤',
              leqq: '≦',
              leqslant: '⩽',
              les: '⩽',
              lescc: '⪨',
              lesdot: '⩿',
              lesdoto: '⪁',
              lesdotor: '⪃',
              lesg: '⋚︀',
              lesges: '⪓',
              lessapprox: '⪅',
              lessdot: '⋖',
              lesseqgtr: '⋚',
              lesseqqgtr: '⪋',
              LessEqualGreater: '⋚',
              LessFullEqual: '≦',
              LessGreater: '≶',
              lessgtr: '≶',
              LessLess: '⪡',
              lesssim: '≲',
              LessSlantEqual: '⩽',
              LessTilde: '≲',
              lfisht: '⥼',
              lfloor: '⌊',
              lfr: '𝔩',
              Lfr: '𝔏',
              lg: '≶',
              lgE: '⪑',
              lHar: '⥢',
              lhard: '↽',
              lharu: '↼',
              lharul: '⥪',
              lhblk: '▄',
              ljcy: 'љ',
              LJcy: 'Љ',
              ll: '≪',
              Ll: '⋘',
              llarr: '⇇',
              llcorner: '⌞',
              Lleftarrow: '⇚',
              llhard: '⥫',
              lltri: '◺',
              lmidot: 'ŀ',
              Lmidot: 'Ŀ',
              lmoust: '⎰',
              lmoustache: '⎰',
              lnap: '⪉',
              lnapprox: '⪉',
              lne: '⪇',
              lnE: '≨',
              lneq: '⪇',
              lneqq: '≨',
              lnsim: '⋦',
              loang: '⟬',
              loarr: '⇽',
              lobrk: '⟦',
              longleftarrow: '⟵',
              Longleftarrow: '⟸',
              LongLeftArrow: '⟵',
              longleftrightarrow: '⟷',
              Longleftrightarrow: '⟺',
              LongLeftRightArrow: '⟷',
              longmapsto: '⟼',
              longrightarrow: '⟶',
              Longrightarrow: '⟹',
              LongRightArrow: '⟶',
              looparrowleft: '↫',
              looparrowright: '↬',
              lopar: '⦅',
              lopf: '𝕝',
              Lopf: '𝕃',
              loplus: '⨭',
              lotimes: '⨴',
              lowast: '∗',
              lowbar: '_',
              LowerLeftArrow: '↙',
              LowerRightArrow: '↘',
              loz: '◊',
              lozenge: '◊',
              lozf: '⧫',
              lpar: '(',
              lparlt: '⦓',
              lrarr: '⇆',
              lrcorner: '⌟',
              lrhar: '⇋',
              lrhard: '⥭',
              lrm: '‎',
              lrtri: '⊿',
              lsaquo: '‹',
              lscr: '𝓁',
              Lscr: 'ℒ',
              lsh: '↰',
              Lsh: '↰',
              lsim: '≲',
              lsime: '⪍',
              lsimg: '⪏',
              lsqb: '[',
              lsquo: '‘',
              lsquor: '‚',
              lstrok: 'ł',
              Lstrok: 'Ł',
              lt: '<',
              Lt: '≪',
              LT: '<',
              ltcc: '⪦',
              ltcir: '⩹',
              ltdot: '⋖',
              lthree: '⋋',
              ltimes: '⋉',
              ltlarr: '⥶',
              ltquest: '⩻',
              ltri: '◃',
              ltrie: '⊴',
              ltrif: '◂',
              ltrPar: '⦖',
              lurdshar: '⥊',
              luruhar: '⥦',
              lvertneqq: '≨︀',
              lvnE: '≨︀',
              macr: '¯',
              male: '♂',
              malt: '✠',
              maltese: '✠',
              map: '↦',
              Map: '⤅',
              mapsto: '↦',
              mapstodown: '↧',
              mapstoleft: '↤',
              mapstoup: '↥',
              marker: '▮',
              mcomma: '⨩',
              mcy: 'м',
              Mcy: 'М',
              mdash: '—',
              mDDot: '∺',
              measuredangle: '∡',
              MediumSpace: ' ',
              Mellintrf: 'ℳ',
              mfr: '𝔪',
              Mfr: '𝔐',
              mho: '℧',
              micro: 'µ',
              mid: '∣',
              midast: '*',
              midcir: '⫰',
              middot: '·',
              minus: '−',
              minusb: '⊟',
              minusd: '∸',
              minusdu: '⨪',
              MinusPlus: '∓',
              mlcp: '⫛',
              mldr: '…',
              mnplus: '∓',
              models: '⊧',
              mopf: '𝕞',
              Mopf: '𝕄',
              mp: '∓',
              mscr: '𝓂',
              Mscr: 'ℳ',
              mstpos: '∾',
              mu: 'μ',
              Mu: 'Μ',
              multimap: '⊸',
              mumap: '⊸',
              nabla: '∇',
              nacute: 'ń',
              Nacute: 'Ń',
              nang: '∠⃒',
              nap: '≉',
              napE: '⩰̸',
              napid: '≋̸',
              napos: 'ŉ',
              napprox: '≉',
              natur: '♮',
              natural: '♮',
              naturals: 'ℕ',
              nbsp: ' ',
              nbump: '≎̸',
              nbumpe: '≏̸',
              ncap: '⩃',
              ncaron: 'ň',
              Ncaron: 'Ň',
              ncedil: 'ņ',
              Ncedil: 'Ņ',
              ncong: '≇',
              ncongdot: '⩭̸',
              ncup: '⩂',
              ncy: 'н',
              Ncy: 'Н',
              ndash: '–',
              ne: '≠',
              nearhk: '⤤',
              nearr: '↗',
              neArr: '⇗',
              nearrow: '↗',
              nedot: '≐̸',
              NegativeMediumSpace: '​',
              NegativeThickSpace: '​',
              NegativeThinSpace: '​',
              NegativeVeryThinSpace: '​',
              nequiv: '≢',
              nesear: '⤨',
              nesim: '≂̸',
              NestedGreaterGreater: '≫',
              NestedLessLess: '≪',
              NewLine: '\n',
              nexist: '∄',
              nexists: '∄',
              nfr: '𝔫',
              Nfr: '𝔑',
              nge: '≱',
              ngE: '≧̸',
              ngeq: '≱',
              ngeqq: '≧̸',
              ngeqslant: '⩾̸',
              nges: '⩾̸',
              nGg: '⋙̸',
              ngsim: '≵',
              ngt: '≯',
              nGt: '≫⃒',
              ngtr: '≯',
              nGtv: '≫̸',
              nharr: '↮',
              nhArr: '⇎',
              nhpar: '⫲',
              ni: '∋',
              nis: '⋼',
              nisd: '⋺',
              niv: '∋',
              njcy: 'њ',
              NJcy: 'Њ',
              nlarr: '↚',
              nlArr: '⇍',
              nldr: '‥',
              nle: '≰',
              nlE: '≦̸',
              nleftarrow: '↚',
              nLeftarrow: '⇍',
              nleftrightarrow: '↮',
              nLeftrightarrow: '⇎',
              nleq: '≰',
              nleqq: '≦̸',
              nleqslant: '⩽̸',
              nles: '⩽̸',
              nless: '≮',
              nLl: '⋘̸',
              nlsim: '≴',
              nlt: '≮',
              nLt: '≪⃒',
              nltri: '⋪',
              nltrie: '⋬',
              nLtv: '≪̸',
              nmid: '∤',
              NoBreak: '⁠',
              NonBreakingSpace: ' ',
              nopf: '𝕟',
              Nopf: 'ℕ',
              not: '¬',
              Not: '⫬',
              NotCongruent: '≢',
              NotCupCap: '≭',
              NotDoubleVerticalBar: '∦',
              NotElement: '∉',
              NotEqual: '≠',
              NotEqualTilde: '≂̸',
              NotExists: '∄',
              NotGreater: '≯',
              NotGreaterEqual: '≱',
              NotGreaterFullEqual: '≧̸',
              NotGreaterGreater: '≫̸',
              NotGreaterLess: '≹',
              NotGreaterSlantEqual: '⩾̸',
              NotGreaterTilde: '≵',
              NotHumpDownHump: '≎̸',
              NotHumpEqual: '≏̸',
              notin: '∉',
              notindot: '⋵̸',
              notinE: '⋹̸',
              notinva: '∉',
              notinvb: '⋷',
              notinvc: '⋶',
              NotLeftTriangle: '⋪',
              NotLeftTriangleBar: '⧏̸',
              NotLeftTriangleEqual: '⋬',
              NotLess: '≮',
              NotLessEqual: '≰',
              NotLessGreater: '≸',
              NotLessLess: '≪̸',
              NotLessSlantEqual: '⩽̸',
              NotLessTilde: '≴',
              NotNestedGreaterGreater: '⪢̸',
              NotNestedLessLess: '⪡̸',
              notni: '∌',
              notniva: '∌',
              notnivb: '⋾',
              notnivc: '⋽',
              NotPrecedes: '⊀',
              NotPrecedesEqual: '⪯̸',
              NotPrecedesSlantEqual: '⋠',
              NotReverseElement: '∌',
              NotRightTriangle: '⋫',
              NotRightTriangleBar: '⧐̸',
              NotRightTriangleEqual: '⋭',
              NotSquareSubset: '⊏̸',
              NotSquareSubsetEqual: '⋢',
              NotSquareSuperset: '⊐̸',
              NotSquareSupersetEqual: '⋣',
              NotSubset: '⊂⃒',
              NotSubsetEqual: '⊈',
              NotSucceeds: '⊁',
              NotSucceedsEqual: '⪰̸',
              NotSucceedsSlantEqual: '⋡',
              NotSucceedsTilde: '≿̸',
              NotSuperset: '⊃⃒',
              NotSupersetEqual: '⊉',
              NotTilde: '≁',
              NotTildeEqual: '≄',
              NotTildeFullEqual: '≇',
              NotTildeTilde: '≉',
              NotVerticalBar: '∤',
              npar: '∦',
              nparallel: '∦',
              nparsl: '⫽⃥',
              npart: '∂̸',
              npolint: '⨔',
              npr: '⊀',
              nprcue: '⋠',
              npre: '⪯̸',
              nprec: '⊀',
              npreceq: '⪯̸',
              nrarr: '↛',
              nrArr: '⇏',
              nrarrc: '⤳̸',
              nrarrw: '↝̸',
              nrightarrow: '↛',
              nRightarrow: '⇏',
              nrtri: '⋫',
              nrtrie: '⋭',
              nsc: '⊁',
              nsccue: '⋡',
              nsce: '⪰̸',
              nscr: '𝓃',
              Nscr: '𝒩',
              nshortmid: '∤',
              nshortparallel: '∦',
              nsim: '≁',
              nsime: '≄',
              nsimeq: '≄',
              nsmid: '∤',
              nspar: '∦',
              nsqsube: '⋢',
              nsqsupe: '⋣',
              nsub: '⊄',
              nsube: '⊈',
              nsubE: '⫅̸',
              nsubset: '⊂⃒',
              nsubseteq: '⊈',
              nsubseteqq: '⫅̸',
              nsucc: '⊁',
              nsucceq: '⪰̸',
              nsup: '⊅',
              nsupe: '⊉',
              nsupE: '⫆̸',
              nsupset: '⊃⃒',
              nsupseteq: '⊉',
              nsupseteqq: '⫆̸',
              ntgl: '≹',
              ntilde: 'ñ',
              Ntilde: 'Ñ',
              ntlg: '≸',
              ntriangleleft: '⋪',
              ntrianglelefteq: '⋬',
              ntriangleright: '⋫',
              ntrianglerighteq: '⋭',
              nu: 'ν',
              Nu: 'Ν',
              num: '#',
              numero: '№',
              numsp: ' ',
              nvap: '≍⃒',
              nvdash: '⊬',
              nvDash: '⊭',
              nVdash: '⊮',
              nVDash: '⊯',
              nvge: '≥⃒',
              nvgt: '>⃒',
              nvHarr: '⤄',
              nvinfin: '⧞',
              nvlArr: '⤂',
              nvle: '≤⃒',
              nvlt: '<⃒',
              nvltrie: '⊴⃒',
              nvrArr: '⤃',
              nvrtrie: '⊵⃒',
              nvsim: '∼⃒',
              nwarhk: '⤣',
              nwarr: '↖',
              nwArr: '⇖',
              nwarrow: '↖',
              nwnear: '⤧',
              oacute: 'ó',
              Oacute: 'Ó',
              oast: '⊛',
              ocir: '⊚',
              ocirc: 'ô',
              Ocirc: 'Ô',
              ocy: 'о',
              Ocy: 'О',
              odash: '⊝',
              odblac: 'ő',
              Odblac: 'Ő',
              odiv: '⨸',
              odot: '⊙',
              odsold: '⦼',
              oelig: 'œ',
              OElig: 'Œ',
              ofcir: '⦿',
              ofr: '𝔬',
              Ofr: '𝔒',
              ogon: '˛',
              ograve: 'ò',
              Ograve: 'Ò',
              ogt: '⧁',
              ohbar: '⦵',
              ohm: 'Ω',
              oint: '∮',
              olarr: '↺',
              olcir: '⦾',
              olcross: '⦻',
              oline: '‾',
              olt: '⧀',
              omacr: 'ō',
              Omacr: 'Ō',
              omega: 'ω',
              Omega: 'Ω',
              omicron: 'ο',
              Omicron: 'Ο',
              omid: '⦶',
              ominus: '⊖',
              oopf: '𝕠',
              Oopf: '𝕆',
              opar: '⦷',
              OpenCurlyDoubleQuote: '“',
              OpenCurlyQuote: '‘',
              operp: '⦹',
              oplus: '⊕',
              or: '∨',
              Or: '⩔',
              orarr: '↻',
              ord: '⩝',
              order: 'ℴ',
              orderof: 'ℴ',
              ordf: 'ª',
              ordm: 'º',
              origof: '⊶',
              oror: '⩖',
              orslope: '⩗',
              orv: '⩛',
              oS: 'Ⓢ',
              oscr: 'ℴ',
              Oscr: '𝒪',
              oslash: 'ø',
              Oslash: 'Ø',
              osol: '⊘',
              otilde: 'õ',
              Otilde: 'Õ',
              otimes: '⊗',
              Otimes: '⨷',
              otimesas: '⨶',
              ouml: 'ö',
              Ouml: 'Ö',
              ovbar: '⌽',
              OverBar: '‾',
              OverBrace: '⏞',
              OverBracket: '⎴',
              OverParenthesis: '⏜',
              par: '∥',
              para: '¶',
              parallel: '∥',
              parsim: '⫳',
              parsl: '⫽',
              part: '∂',
              PartialD: '∂',
              pcy: 'п',
              Pcy: 'П',
              percnt: '%',
              period: '.',
              permil: '‰',
              perp: '⊥',
              pertenk: '‱',
              pfr: '𝔭',
              Pfr: '𝔓',
              phi: 'φ',
              Phi: 'Φ',
              phiv: 'ϕ',
              phmmat: 'ℳ',
              phone: '☎',
              pi: 'π',
              Pi: 'Π',
              pitchfork: '⋔',
              piv: 'ϖ',
              planck: 'ℏ',
              planckh: 'ℎ',
              plankv: 'ℏ',
              plus: '+',
              plusacir: '⨣',
              plusb: '⊞',
              pluscir: '⨢',
              plusdo: '∔',
              plusdu: '⨥',
              pluse: '⩲',
              PlusMinus: '±',
              plusmn: '±',
              plussim: '⨦',
              plustwo: '⨧',
              pm: '±',
              Poincareplane: 'ℌ',
              pointint: '⨕',
              popf: '𝕡',
              Popf: 'ℙ',
              pound: '£',
              pr: '≺',
              Pr: '⪻',
              prap: '⪷',
              prcue: '≼',
              pre: '⪯',
              prE: '⪳',
              prec: '≺',
              precapprox: '⪷',
              preccurlyeq: '≼',
              Precedes: '≺',
              PrecedesEqual: '⪯',
              PrecedesSlantEqual: '≼',
              PrecedesTilde: '≾',
              preceq: '⪯',
              precnapprox: '⪹',
              precneqq: '⪵',
              precnsim: '⋨',
              precsim: '≾',
              prime: '′',
              Prime: '″',
              primes: 'ℙ',
              prnap: '⪹',
              prnE: '⪵',
              prnsim: '⋨',
              prod: '∏',
              Product: '∏',
              profalar: '⌮',
              profline: '⌒',
              profsurf: '⌓',
              prop: '∝',
              Proportion: '∷',
              Proportional: '∝',
              propto: '∝',
              prsim: '≾',
              prurel: '⊰',
              pscr: '𝓅',
              Pscr: '𝒫',
              psi: 'ψ',
              Psi: 'Ψ',
              puncsp: ' ',
              qfr: '𝔮',
              Qfr: '𝔔',
              qint: '⨌',
              qopf: '𝕢',
              Qopf: 'ℚ',
              qprime: '⁗',
              qscr: '𝓆',
              Qscr: '𝒬',
              quaternions: 'ℍ',
              quatint: '⨖',
              quest: '?',
              questeq: '≟',
              quot: '"',
              QUOT: '"',
              rAarr: '⇛',
              race: '∽̱',
              racute: 'ŕ',
              Racute: 'Ŕ',
              radic: '√',
              raemptyv: '⦳',
              rang: '⟩',
              Rang: '⟫',
              rangd: '⦒',
              range: '⦥',
              rangle: '⟩',
              raquo: '»',
              rarr: '→',
              rArr: '⇒',
              Rarr: '↠',
              rarrap: '⥵',
              rarrb: '⇥',
              rarrbfs: '⤠',
              rarrc: '⤳',
              rarrfs: '⤞',
              rarrhk: '↪',
              rarrlp: '↬',
              rarrpl: '⥅',
              rarrsim: '⥴',
              rarrtl: '↣',
              Rarrtl: '⤖',
              rarrw: '↝',
              ratail: '⤚',
              rAtail: '⤜',
              ratio: '∶',
              rationals: 'ℚ',
              rbarr: '⤍',
              rBarr: '⤏',
              RBarr: '⤐',
              rbbrk: '❳',
              rbrace: '}',
              rbrack: ']',
              rbrke: '⦌',
              rbrksld: '⦎',
              rbrkslu: '⦐',
              rcaron: 'ř',
              Rcaron: 'Ř',
              rcedil: 'ŗ',
              Rcedil: 'Ŗ',
              rceil: '⌉',
              rcub: '}',
              rcy: 'р',
              Rcy: 'Р',
              rdca: '⤷',
              rdldhar: '⥩',
              rdquo: '”',
              rdquor: '”',
              rdsh: '↳',
              Re: 'ℜ',
              real: 'ℜ',
              realine: 'ℛ',
              realpart: 'ℜ',
              reals: 'ℝ',
              rect: '▭',
              reg: '®',
              REG: '®',
              ReverseElement: '∋',
              ReverseEquilibrium: '⇋',
              ReverseUpEquilibrium: '⥯',
              rfisht: '⥽',
              rfloor: '⌋',
              rfr: '𝔯',
              Rfr: 'ℜ',
              rHar: '⥤',
              rhard: '⇁',
              rharu: '⇀',
              rharul: '⥬',
              rho: 'ρ',
              Rho: 'Ρ',
              rhov: 'ϱ',
              RightAngleBracket: '⟩',
              rightarrow: '→',
              Rightarrow: '⇒',
              RightArrow: '→',
              RightArrowBar: '⇥',
              RightArrowLeftArrow: '⇄',
              rightarrowtail: '↣',
              RightCeiling: '⌉',
              RightDoubleBracket: '⟧',
              RightDownTeeVector: '⥝',
              RightDownVector: '⇂',
              RightDownVectorBar: '⥕',
              RightFloor: '⌋',
              rightharpoondown: '⇁',
              rightharpoonup: '⇀',
              rightleftarrows: '⇄',
              rightleftharpoons: '⇌',
              rightrightarrows: '⇉',
              rightsquigarrow: '↝',
              RightTee: '⊢',
              RightTeeArrow: '↦',
              RightTeeVector: '⥛',
              rightthreetimes: '⋌',
              RightTriangle: '⊳',
              RightTriangleBar: '⧐',
              RightTriangleEqual: '⊵',
              RightUpDownVector: '⥏',
              RightUpTeeVector: '⥜',
              RightUpVector: '↾',
              RightUpVectorBar: '⥔',
              RightVector: '⇀',
              RightVectorBar: '⥓',
              ring: '˚',
              risingdotseq: '≓',
              rlarr: '⇄',
              rlhar: '⇌',
              rlm: '‏',
              rmoust: '⎱',
              rmoustache: '⎱',
              rnmid: '⫮',
              roang: '⟭',
              roarr: '⇾',
              robrk: '⟧',
              ropar: '⦆',
              ropf: '𝕣',
              Ropf: 'ℝ',
              roplus: '⨮',
              rotimes: '⨵',
              RoundImplies: '⥰',
              rpar: ')',
              rpargt: '⦔',
              rppolint: '⨒',
              rrarr: '⇉',
              Rrightarrow: '⇛',
              rsaquo: '›',
              rscr: '𝓇',
              Rscr: 'ℛ',
              rsh: '↱',
              Rsh: '↱',
              rsqb: ']',
              rsquo: '’',
              rsquor: '’',
              rthree: '⋌',
              rtimes: '⋊',
              rtri: '▹',
              rtrie: '⊵',
              rtrif: '▸',
              rtriltri: '⧎',
              RuleDelayed: '⧴',
              ruluhar: '⥨',
              rx: '℞',
              sacute: 'ś',
              Sacute: 'Ś',
              sbquo: '‚',
              sc: '≻',
              Sc: '⪼',
              scap: '⪸',
              scaron: 'š',
              Scaron: 'Š',
              sccue: '≽',
              sce: '⪰',
              scE: '⪴',
              scedil: 'ş',
              Scedil: 'Ş',
              scirc: 'ŝ',
              Scirc: 'Ŝ',
              scnap: '⪺',
              scnE: '⪶',
              scnsim: '⋩',
              scpolint: '⨓',
              scsim: '≿',
              scy: 'с',
              Scy: 'С',
              sdot: '⋅',
              sdotb: '⊡',
              sdote: '⩦',
              searhk: '⤥',
              searr: '↘',
              seArr: '⇘',
              searrow: '↘',
              sect: '§',
              semi: ';',
              seswar: '⤩',
              setminus: '∖',
              setmn: '∖',
              sext: '✶',
              sfr: '𝔰',
              Sfr: '𝔖',
              sfrown: '⌢',
              sharp: '♯',
              shchcy: 'щ',
              SHCHcy: 'Щ',
              shcy: 'ш',
              SHcy: 'Ш',
              ShortDownArrow: '↓',
              ShortLeftArrow: '←',
              shortmid: '∣',
              shortparallel: '∥',
              ShortRightArrow: '→',
              ShortUpArrow: '↑',
              shy: '­',
              sigma: 'σ',
              Sigma: 'Σ',
              sigmaf: 'ς',
              sigmav: 'ς',
              sim: '∼',
              simdot: '⩪',
              sime: '≃',
              simeq: '≃',
              simg: '⪞',
              simgE: '⪠',
              siml: '⪝',
              simlE: '⪟',
              simne: '≆',
              simplus: '⨤',
              simrarr: '⥲',
              slarr: '←',
              SmallCircle: '∘',
              smallsetminus: '∖',
              smashp: '⨳',
              smeparsl: '⧤',
              smid: '∣',
              smile: '⌣',
              smt: '⪪',
              smte: '⪬',
              smtes: '⪬︀',
              softcy: 'ь',
              SOFTcy: 'Ь',
              sol: '/',
              solb: '⧄',
              solbar: '⌿',
              sopf: '𝕤',
              Sopf: '𝕊',
              spades: '♠',
              spadesuit: '♠',
              spar: '∥',
              sqcap: '⊓',
              sqcaps: '⊓︀',
              sqcup: '⊔',
              sqcups: '⊔︀',
              Sqrt: '√',
              sqsub: '⊏',
              sqsube: '⊑',
              sqsubset: '⊏',
              sqsubseteq: '⊑',
              sqsup: '⊐',
              sqsupe: '⊒',
              sqsupset: '⊐',
              sqsupseteq: '⊒',
              squ: '□',
              square: '□',
              Square: '□',
              SquareIntersection: '⊓',
              SquareSubset: '⊏',
              SquareSubsetEqual: '⊑',
              SquareSuperset: '⊐',
              SquareSupersetEqual: '⊒',
              SquareUnion: '⊔',
              squarf: '▪',
              squf: '▪',
              srarr: '→',
              sscr: '𝓈',
              Sscr: '𝒮',
              ssetmn: '∖',
              ssmile: '⌣',
              sstarf: '⋆',
              star: '☆',
              Star: '⋆',
              starf: '★',
              straightepsilon: 'ϵ',
              straightphi: 'ϕ',
              strns: '¯',
              sub: '⊂',
              Sub: '⋐',
              subdot: '⪽',
              sube: '⊆',
              subE: '⫅',
              subedot: '⫃',
              submult: '⫁',
              subne: '⊊',
              subnE: '⫋',
              subplus: '⪿',
              subrarr: '⥹',
              subset: '⊂',
              Subset: '⋐',
              subseteq: '⊆',
              subseteqq: '⫅',
              SubsetEqual: '⊆',
              subsetneq: '⊊',
              subsetneqq: '⫋',
              subsim: '⫇',
              subsub: '⫕',
              subsup: '⫓',
              succ: '≻',
              succapprox: '⪸',
              succcurlyeq: '≽',
              Succeeds: '≻',
              SucceedsEqual: '⪰',
              SucceedsSlantEqual: '≽',
              SucceedsTilde: '≿',
              succeq: '⪰',
              succnapprox: '⪺',
              succneqq: '⪶',
              succnsim: '⋩',
              succsim: '≿',
              SuchThat: '∋',
              sum: '∑',
              Sum: '∑',
              sung: '♪',
              sup: '⊃',
              Sup: '⋑',
              sup1: '¹',
              sup2: '²',
              sup3: '³',
              supdot: '⪾',
              supdsub: '⫘',
              supe: '⊇',
              supE: '⫆',
              supedot: '⫄',
              Superset: '⊃',
              SupersetEqual: '⊇',
              suphsol: '⟉',
              suphsub: '⫗',
              suplarr: '⥻',
              supmult: '⫂',
              supne: '⊋',
              supnE: '⫌',
              supplus: '⫀',
              supset: '⊃',
              Supset: '⋑',
              supseteq: '⊇',
              supseteqq: '⫆',
              supsetneq: '⊋',
              supsetneqq: '⫌',
              supsim: '⫈',
              supsub: '⫔',
              supsup: '⫖',
              swarhk: '⤦',
              swarr: '↙',
              swArr: '⇙',
              swarrow: '↙',
              swnwar: '⤪',
              szlig: 'ß',
              Tab: '\t',
              target: '⌖',
              tau: 'τ',
              Tau: 'Τ',
              tbrk: '⎴',
              tcaron: 'ť',
              Tcaron: 'Ť',
              tcedil: 'ţ',
              Tcedil: 'Ţ',
              tcy: 'т',
              Tcy: 'Т',
              tdot: '⃛',
              telrec: '⌕',
              tfr: '𝔱',
              Tfr: '𝔗',
              there4: '∴',
              therefore: '∴',
              Therefore: '∴',
              theta: 'θ',
              Theta: 'Θ',
              thetasym: 'ϑ',
              thetav: 'ϑ',
              thickapprox: '≈',
              thicksim: '∼',
              ThickSpace: '  ',
              thinsp: ' ',
              ThinSpace: ' ',
              thkap: '≈',
              thksim: '∼',
              thorn: 'þ',
              THORN: 'Þ',
              tilde: '˜',
              Tilde: '∼',
              TildeEqual: '≃',
              TildeFullEqual: '≅',
              TildeTilde: '≈',
              times: '×',
              timesb: '⊠',
              timesbar: '⨱',
              timesd: '⨰',
              tint: '∭',
              toea: '⤨',
              top: '⊤',
              topbot: '⌶',
              topcir: '⫱',
              topf: '𝕥',
              Topf: '𝕋',
              topfork: '⫚',
              tosa: '⤩',
              tprime: '‴',
              trade: '™',
              TRADE: '™',
              triangle: '▵',
              triangledown: '▿',
              triangleleft: '◃',
              trianglelefteq: '⊴',
              triangleq: '≜',
              triangleright: '▹',
              trianglerighteq: '⊵',
              tridot: '◬',
              trie: '≜',
              triminus: '⨺',
              TripleDot: '⃛',
              triplus: '⨹',
              trisb: '⧍',
              tritime: '⨻',
              trpezium: '⏢',
              tscr: '𝓉',
              Tscr: '𝒯',
              tscy: 'ц',
              TScy: 'Ц',
              tshcy: 'ћ',
              TSHcy: 'Ћ',
              tstrok: 'ŧ',
              Tstrok: 'Ŧ',
              twixt: '≬',
              twoheadleftarrow: '↞',
              twoheadrightarrow: '↠',
              uacute: 'ú',
              Uacute: 'Ú',
              uarr: '↑',
              uArr: '⇑',
              Uarr: '↟',
              Uarrocir: '⥉',
              ubrcy: 'ў',
              Ubrcy: 'Ў',
              ubreve: 'ŭ',
              Ubreve: 'Ŭ',
              ucirc: 'û',
              Ucirc: 'Û',
              ucy: 'у',
              Ucy: 'У',
              udarr: '⇅',
              udblac: 'ű',
              Udblac: 'Ű',
              udhar: '⥮',
              ufisht: '⥾',
              ufr: '𝔲',
              Ufr: '𝔘',
              ugrave: 'ù',
              Ugrave: 'Ù',
              uHar: '⥣',
              uharl: '↿',
              uharr: '↾',
              uhblk: '▀',
              ulcorn: '⌜',
              ulcorner: '⌜',
              ulcrop: '⌏',
              ultri: '◸',
              umacr: 'ū',
              Umacr: 'Ū',
              uml: '¨',
              UnderBar: '_',
              UnderBrace: '⏟',
              UnderBracket: '⎵',
              UnderParenthesis: '⏝',
              Union: '⋃',
              UnionPlus: '⊎',
              uogon: 'ų',
              Uogon: 'Ų',
              uopf: '𝕦',
              Uopf: '𝕌',
              uparrow: '↑',
              Uparrow: '⇑',
              UpArrow: '↑',
              UpArrowBar: '⤒',
              UpArrowDownArrow: '⇅',
              updownarrow: '↕',
              Updownarrow: '⇕',
              UpDownArrow: '↕',
              UpEquilibrium: '⥮',
              upharpoonleft: '↿',
              upharpoonright: '↾',
              uplus: '⊎',
              UpperLeftArrow: '↖',
              UpperRightArrow: '↗',
              upsi: 'υ',
              Upsi: 'ϒ',
              upsih: 'ϒ',
              upsilon: 'υ',
              Upsilon: 'Υ',
              UpTee: '⊥',
              UpTeeArrow: '↥',
              upuparrows: '⇈',
              urcorn: '⌝',
              urcorner: '⌝',
              urcrop: '⌎',
              uring: 'ů',
              Uring: 'Ů',
              urtri: '◹',
              uscr: '𝓊',
              Uscr: '𝒰',
              utdot: '⋰',
              utilde: 'ũ',
              Utilde: 'Ũ',
              utri: '▵',
              utrif: '▴',
              uuarr: '⇈',
              uuml: 'ü',
              Uuml: 'Ü',
              uwangle: '⦧',
              vangrt: '⦜',
              varepsilon: 'ϵ',
              varkappa: 'ϰ',
              varnothing: '∅',
              varphi: 'ϕ',
              varpi: 'ϖ',
              varpropto: '∝',
              varr: '↕',
              vArr: '⇕',
              varrho: 'ϱ',
              varsigma: 'ς',
              varsubsetneq: '⊊︀',
              varsubsetneqq: '⫋︀',
              varsupsetneq: '⊋︀',
              varsupsetneqq: '⫌︀',
              vartheta: 'ϑ',
              vartriangleleft: '⊲',
              vartriangleright: '⊳',
              vBar: '⫨',
              Vbar: '⫫',
              vBarv: '⫩',
              vcy: 'в',
              Vcy: 'В',
              vdash: '⊢',
              vDash: '⊨',
              Vdash: '⊩',
              VDash: '⊫',
              Vdashl: '⫦',
              vee: '∨',
              Vee: '⋁',
              veebar: '⊻',
              veeeq: '≚',
              vellip: '⋮',
              verbar: '|',
              Verbar: '‖',
              vert: '|',
              Vert: '‖',
              VerticalBar: '∣',
              VerticalLine: '|',
              VerticalSeparator: '❘',
              VerticalTilde: '≀',
              VeryThinSpace: ' ',
              vfr: '𝔳',
              Vfr: '𝔙',
              vltri: '⊲',
              vnsub: '⊂⃒',
              vnsup: '⊃⃒',
              vopf: '𝕧',
              Vopf: '𝕍',
              vprop: '∝',
              vrtri: '⊳',
              vscr: '𝓋',
              Vscr: '𝒱',
              vsubne: '⊊︀',
              vsubnE: '⫋︀',
              vsupne: '⊋︀',
              vsupnE: '⫌︀',
              Vvdash: '⊪',
              vzigzag: '⦚',
              wcirc: 'ŵ',
              Wcirc: 'Ŵ',
              wedbar: '⩟',
              wedge: '∧',
              Wedge: '⋀',
              wedgeq: '≙',
              weierp: '℘',
              wfr: '𝔴',
              Wfr: '𝔚',
              wopf: '𝕨',
              Wopf: '𝕎',
              wp: '℘',
              wr: '≀',
              wreath: '≀',
              wscr: '𝓌',
              Wscr: '𝒲',
              xcap: '⋂',
              xcirc: '◯',
              xcup: '⋃',
              xdtri: '▽',
              xfr: '𝔵',
              Xfr: '𝔛',
              xharr: '⟷',
              xhArr: '⟺',
              xi: 'ξ',
              Xi: 'Ξ',
              xlarr: '⟵',
              xlArr: '⟸',
              xmap: '⟼',
              xnis: '⋻',
              xodot: '⨀',
              xopf: '𝕩',
              Xopf: '𝕏',
              xoplus: '⨁',
              xotime: '⨂',
              xrarr: '⟶',
              xrArr: '⟹',
              xscr: '𝓍',
              Xscr: '𝒳',
              xsqcup: '⨆',
              xuplus: '⨄',
              xutri: '△',
              xvee: '⋁',
              xwedge: '⋀',
              yacute: 'ý',
              Yacute: 'Ý',
              yacy: 'я',
              YAcy: 'Я',
              ycirc: 'ŷ',
              Ycirc: 'Ŷ',
              ycy: 'ы',
              Ycy: 'Ы',
              yen: '¥',
              yfr: '𝔶',
              Yfr: '𝔜',
              yicy: 'ї',
              YIcy: 'Ї',
              yopf: '𝕪',
              Yopf: '𝕐',
              yscr: '𝓎',
              Yscr: '𝒴',
              yucy: 'ю',
              YUcy: 'Ю',
              yuml: 'ÿ',
              Yuml: 'Ÿ',
              zacute: 'ź',
              Zacute: 'Ź',
              zcaron: 'ž',
              Zcaron: 'Ž',
              zcy: 'з',
              Zcy: 'З',
              zdot: 'ż',
              Zdot: 'Ż',
              zeetrf: 'ℨ',
              ZeroWidthSpace: '​',
              zeta: 'ζ',
              Zeta: 'Ζ',
              zfr: '𝔷',
              Zfr: 'ℨ',
              zhcy: 'ж',
              ZHcy: 'Ж',
              zigrarr: '⇝',
              zopf: '𝕫',
              Zopf: 'ℤ',
              zscr: '𝓏',
              Zscr: '𝒵',
              zwj: '‍',
              zwnj: '‌'
            },
            v = {
              aacute: 'á',
              Aacute: 'Á',
              acirc: 'â',
              Acirc: 'Â',
              acute: '´',
              aelig: 'æ',
              AElig: 'Æ',
              agrave: 'à',
              Agrave: 'À',
              amp: '&',
              AMP: '&',
              aring: 'å',
              Aring: 'Å',
              atilde: 'ã',
              Atilde: 'Ã',
              auml: 'ä',
              Auml: 'Ä',
              brvbar: '¦',
              ccedil: 'ç',
              Ccedil: 'Ç',
              cedil: '¸',
              cent: '¢',
              copy: '©',
              COPY: '©',
              curren: '¤',
              deg: '°',
              divide: '÷',
              eacute: 'é',
              Eacute: 'É',
              ecirc: 'ê',
              Ecirc: 'Ê',
              egrave: 'è',
              Egrave: 'È',
              eth: 'ð',
              ETH: 'Ð',
              euml: 'ë',
              Euml: 'Ë',
              frac12: '½',
              frac14: '¼',
              frac34: '¾',
              gt: '>',
              GT: '>',
              iacute: 'í',
              Iacute: 'Í',
              icirc: 'î',
              Icirc: 'Î',
              iexcl: '¡',
              igrave: 'ì',
              Igrave: 'Ì',
              iquest: '¿',
              iuml: 'ï',
              Iuml: 'Ï',
              laquo: '«',
              lt: '<',
              LT: '<',
              macr: '¯',
              micro: 'µ',
              middot: '·',
              nbsp: ' ',
              not: '¬',
              ntilde: 'ñ',
              Ntilde: 'Ñ',
              oacute: 'ó',
              Oacute: 'Ó',
              ocirc: 'ô',
              Ocirc: 'Ô',
              ograve: 'ò',
              Ograve: 'Ò',
              ordf: 'ª',
              ordm: 'º',
              oslash: 'ø',
              Oslash: 'Ø',
              otilde: 'õ',
              Otilde: 'Õ',
              ouml: 'ö',
              Ouml: 'Ö',
              para: '¶',
              plusmn: '±',
              pound: '£',
              quot: '"',
              QUOT: '"',
              raquo: '»',
              reg: '®',
              REG: '®',
              sect: '§',
              shy: '­',
              sup1: '¹',
              sup2: '²',
              sup3: '³',
              szlig: 'ß',
              thorn: 'þ',
              THORN: 'Þ',
              times: '×',
              uacute: 'ú',
              Uacute: 'Ú',
              ucirc: 'û',
              Ucirc: 'Û',
              ugrave: 'ù',
              Ugrave: 'Ù',
              uml: '¨',
              uuml: 'ü',
              Uuml: 'Ü',
              yacute: 'ý',
              Yacute: 'Ý',
              yen: '¥',
              yuml: 'ÿ'
            },
            y = {
              0: '�',
              128: '€',
              130: '‚',
              131: 'ƒ',
              132: '„',
              133: '…',
              134: '†',
              135: '‡',
              136: 'ˆ',
              137: '‰',
              138: 'Š',
              139: '‹',
              140: 'Œ',
              142: 'Ž',
              145: '‘',
              146: '’',
              147: '“',
              148: '”',
              149: '•',
              150: '–',
              151: '—',
              152: '˜',
              153: '™',
              154: 'š',
              155: '›',
              156: 'œ',
              158: 'ž',
              159: 'Ÿ'
            },
            w = [
              1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21,
              22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131,
              132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
              145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
              158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983,
              64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992,
              64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001,
              65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070,
              131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214,
              393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358,
              655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502,
              917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111
            ],
            q = String.fromCharCode,
            D = {}.hasOwnProperty,
            x = function (e, r) {
              return D.call(e, r)
            },
            k = function (e, r) {
              if (!e) return r
              var t,
                a = {}
              for (t in r) a[t] = x(e, t) ? e[t] : r[t]
              return a
            },
            E = function (e, r) {
              var t = ''
              return (e >= 55296 && e <= 57343) || e > 1114111
                ? (r &&
                    C(
                      'character reference outside the permissible Unicode range'
                    ),
                  '�')
                : x(y, e)
                ? (r && C('disallowed character reference'), y[e])
                : (r &&
                    (function (e, r) {
                      for (var t = -1, a = e.length; ++t < a; )
                        if (e[t] == r) return !0
                      return !1
                    })(w, e) &&
                    C('disallowed character reference'),
                  e > 65535 &&
                    ((t += q((((e -= 65536) >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += q(e)))
            },
            A = function (e) {
              return '&#x' + e.toString(16).toUpperCase() + ';'
            },
            L = function (e) {
              return '&#' + e + ';'
            },
            C = function (e) {
              throw Error('Parse error: ' + e)
            },
            S = function (e, r) {
              ;(r = k(r, S.options)).strict &&
                f.test(e) &&
                C('forbidden code point')
              var t = r.encodeEverything,
                a = r.useNamedReferences,
                s = r.allowUnsafeSymbols,
                i = r.decimal ? L : A,
                o = function (e) {
                  return i(e.charCodeAt(0))
                }
              return (
                t
                  ? ((e = e.replace(l, function (e) {
                      return a && x(p, e) ? '&' + p[e] + ';' : o(e)
                    })),
                    a &&
                      (e = e
                        .replace(/&gt;\u20D2/g, '&nvgt;')
                        .replace(/&lt;\u20D2/g, '&nvlt;')
                        .replace(/&#x66;&#x6A;/g, '&fjlig;')),
                    a &&
                      (e = e.replace(u, function (e) {
                        return '&' + p[e] + ';'
                      })))
                  : a
                  ? (s ||
                      (e = e.replace(h, function (e) {
                        return '&' + p[e] + ';'
                      })),
                    (e = (e = e
                      .replace(/&gt;\u20D2/g, '&nvgt;')
                      .replace(/&lt;\u20D2/g, '&nvlt;')).replace(
                      u,
                      function (e) {
                        return '&' + p[e] + ';'
                      }
                    )))
                  : s || (e = e.replace(h, o)),
                e
                  .replace(n, function (e) {
                    var r = e.charCodeAt(0),
                      t = e.charCodeAt(1)
                    return i(1024 * (r - 55296) + t - 56320 + 65536)
                  })
                  .replace(c, o)
              )
            }
          S.options = {
            allowUnsafeSymbols: !1,
            encodeEverything: !1,
            strict: !1,
            useNamedReferences: !1,
            decimal: !1
          }
          var T = function (e, r) {
            var t = (r = k(r, T.options)).strict
            return (
              t && g.test(e) && C('malformed character reference'),
              e.replace(m, function (e, a, s, i, o, n, l, c, u) {
                var p, h, d, g, f, m
                return a
                  ? b[(f = a)]
                  : s
                  ? ((f = s),
                    (m = i) && r.isAttributeValue
                      ? (t &&
                          '=' == m &&
                          C('`&` did not start a character reference'),
                        e)
                      : (t &&
                          C(
                            'named character reference was not terminated by a semicolon'
                          ),
                        v[f] + (m || '')))
                  : o
                  ? ((d = o),
                    (h = n),
                    t &&
                      !h &&
                      C(
                        'character reference was not terminated by a semicolon'
                      ),
                    (p = parseInt(d, 10)),
                    E(p, t))
                  : l
                  ? ((g = l),
                    (h = c),
                    t &&
                      !h &&
                      C(
                        'character reference was not terminated by a semicolon'
                      ),
                    (p = parseInt(g, 16)),
                    E(p, t))
                  : (t &&
                      C(
                        'named character reference was not terminated by a semicolon'
                      ),
                    e)
              })
            )
          }
          T.options = { isAttributeValue: !1, strict: !1 }
          var B = {
            version: '1.2.0',
            encode: S,
            decode: T,
            escape: function (e) {
              return e.replace(h, function (e) {
                return d[e]
              })
            },
            unescape: T
          }
          void 0 ===
            (a = function () {
              return B
            }.call(r, t, r, e)) || (e.exports = a)
        })()
      }).call(this, t(69)(e))
    },
    305: function (e, r, t) {
      'use strict'
      t(279)
    },
    306: function (e, r, t) {
      'use strict'
      t(280)
    },
    307: function (e, r, t) {
      'use strict'
      t(281)
    },
    308: function (e, r, t) {
      'use strict'
      t(282)
    },
    309: function (e, r, t) {
      'use strict'
      t(284)
    },
    310: function (e, r, t) {
      var a = t(26),
        s = t(12),
        i = t(21)
      e.exports = function (e) {
        return (
          'string' == typeof e || (!s(e) && i(e) && '[object String]' == a(e))
        )
      }
    },
    311: function (e, r, t) {
      'use strict'
      t(285)
    },
    312: function (e, r, t) {
      'use strict'
      t(286)
    },
    313: function (e, r, t) {
      'use strict'
      t(287)
    },
    314: function (e, r, t) {
      'use strict'
      t(288)
    },
    315: function (e, r, t) {
      'use strict'
      t(289)
    },
    335: function (e, r, t) {
      'use strict'
      t.r(r)
      var a = t(70),
        s = {
          name: 'Home',
          components: { NavLink: a.a },
          computed: {
            data() {
              return this.$page.frontmatter
            },
            actionLink() {
              return { link: this.data.actionLink, text: this.data.actionText }
            }
          }
        },
        i = (t(300), t(6)),
        o = Object(i.a)(
          s,
          function () {
            var e = this,
              r = e.$createElement,
              t = e._self._c || r
            return t(
              'main',
              {
                staticClass: 'home',
                attrs: {
                  'aria-labelledby':
                    null !== e.data.heroText ? 'main-title' : null
                }
              },
              [
                t('header', { staticClass: 'hero' }, [
                  e.data.heroImage
                    ? t('img', {
                        attrs: {
                          src: e.$withBase(e.data.heroImage),
                          alt: e.data.heroAlt || 'hero'
                        }
                      })
                    : e._e(),
                  e._v(' '),
                  null !== e.data.heroText
                    ? t('h1', { attrs: { id: 'main-title' } }, [
                        e._v(
                          '\n      ' +
                            e._s(e.data.heroText || e.$title || 'Hello') +
                            '\n    '
                        )
                      ])
                    : e._e(),
                  e._v(' '),
                  null !== e.data.tagline
                    ? t('p', { staticClass: 'description' }, [
                        e._v(
                          '\n      ' +
                            e._s(
                              e.data.tagline ||
                                e.$description ||
                                'Welcome to your VuePress site'
                            ) +
                            '\n    '
                        )
                      ])
                    : e._e(),
                  e._v(' '),
                  e.data.actionText && e.data.actionLink
                    ? t(
                        'p',
                        { staticClass: 'action' },
                        [
                          t('NavLink', {
                            staticClass: 'action-button',
                            attrs: { item: e.actionLink }
                          })
                        ],
                        1
                      )
                    : e._e()
                ]),
                e._v(' '),
                e.data.features && e.data.features.length
                  ? t(
                      'div',
                      { staticClass: 'features' },
                      e._l(e.data.features, function (r, a) {
                        return t('div', { key: a, staticClass: 'feature' }, [
                          t('h2', [e._v(e._s(r.title))]),
                          e._v(' '),
                          t('p', [e._v(e._s(r.details))])
                        ])
                      }),
                      0
                    )
                  : e._e(),
                e._v(' '),
                t('Content', { staticClass: 'theme-default-content custom' }),
                e._v(' '),
                e.data.footer
                  ? t('div', { staticClass: 'footer' }, [
                      e._v('\n    ' + e._s(e.data.footer) + '\n  ')
                    ])
                  : e._e()
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        n = (t(19), t(122)),
        l = t.n(n),
        c = (e, r, t = null) => {
          let a = l()(r, 'title', '')
          return (
            l()(r, 'frontmatter.tags') &&
              (a += ' ' + r.frontmatter.tags.join(' ')),
            t && (a += ' ' + t),
            u(e, a)
          )
        }
      const u = (e, r) => {
        const t = (e) => e.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'),
          a = new RegExp('[^\0-]'),
          s = e
            .split(/\s+/g)
            .map((e) => e.trim())
            .filter((e) => !!e)
        if (a.test(e)) return s.some((e) => r.toLowerCase().indexOf(e) > -1)
        {
          const a = e.endsWith(' ')
          return new RegExp(
            s
              .map((e, r) =>
                s.length !== r + 1 || a
                  ? `(?=.*\\b${t(e)}\\b)`
                  : `(?=.*\\b${t(e)})`
              )
              .join('') + '.+',
            'gi'
          ).test(r)
        }
      }
      var p = {
          name: 'SearchBox',
          data: () => ({
            query: '',
            focused: !1,
            focusIndex: 0,
            placeholder: void 0
          }),
          computed: {
            showSuggestions() {
              return this.focused && this.suggestions && this.suggestions.length
            },
            suggestions() {
              const e = this.query.trim().toLowerCase()
              if (!e) return
              const { pages: r } = this.$site,
                t = this.$site.themeConfig.searchMaxSuggestions || 10,
                a = this.$localePath,
                s = []
              for (let i = 0; i < r.length && !(s.length >= t); i++) {
                const o = r[i]
                if (this.getPageLocalePath(o) === a && this.isSearchable(o))
                  if (c(e, o)) s.push(o)
                  else if (o.headers)
                    for (
                      let r = 0;
                      r < o.headers.length && !(s.length >= t);
                      r++
                    ) {
                      const t = o.headers[r]
                      t.title &&
                        c(e, o, t.title) &&
                        s.push(
                          Object.assign({}, o, {
                            path: o.path + '#' + t.slug,
                            header: t
                          })
                        )
                    }
              }
              return s
            },
            alignRight() {
              return (
                (this.$site.themeConfig.nav || []).length +
                  (this.$site.repo ? 1 : 0) <=
                2
              )
            }
          },
          mounted() {
            ;(this.placeholder =
              this.$site.themeConfig.searchPlaceholder || ''),
              document.addEventListener('keydown', this.onHotkey)
          },
          beforeDestroy() {
            document.removeEventListener('keydown', this.onHotkey)
          },
          methods: {
            getPageLocalePath(e) {
              for (const r in this.$site.locales || {})
                if ('/' !== r && 0 === e.path.indexOf(r)) return r
              return '/'
            },
            isSearchable(e) {
              let r = null
              return (
                null === r ||
                ((r = Array.isArray(r) ? r : new Array(r)),
                r.filter((r) => e.path.match(r)).length > 0)
              )
            },
            onHotkey(e) {
              e.srcElement === document.body &&
                's'.includes(e.key) &&
                (this.$refs.input.focus(), e.preventDefault())
            },
            onUp() {
              this.showSuggestions &&
                (this.focusIndex > 0
                  ? this.focusIndex--
                  : (this.focusIndex = this.suggestions.length - 1))
            },
            onDown() {
              this.showSuggestions &&
                (this.focusIndex < this.suggestions.length - 1
                  ? this.focusIndex++
                  : (this.focusIndex = 0))
            },
            go(e) {
              this.showSuggestions &&
                (this.$router.push(this.suggestions[e].path),
                (this.query = ''),
                (this.focusIndex = 0))
            },
            focus(e) {
              this.focusIndex = e
            },
            unfocus() {
              this.focusIndex = -1
            }
          }
        },
        h =
          (t(301),
          Object(i.a)(
            p,
            function () {
              var e = this,
                r = e.$createElement,
                t = e._self._c || r
              return t('div', { staticClass: 'search-box' }, [
                t('input', {
                  ref: 'input',
                  class: { focused: e.focused },
                  attrs: {
                    'aria-label': 'Search',
                    placeholder: e.placeholder,
                    autocomplete: 'off',
                    spellcheck: 'false'
                  },
                  domProps: { value: e.query },
                  on: {
                    input: function (r) {
                      e.query = r.target.value
                    },
                    focus: function (r) {
                      e.focused = !0
                    },
                    blur: function (r) {
                      e.focused = !1
                    },
                    keyup: [
                      function (r) {
                        return !r.type.indexOf('key') &&
                          e._k(r.keyCode, 'enter', 13, r.key, 'Enter')
                          ? null
                          : e.go(e.focusIndex)
                      },
                      function (r) {
                        return !r.type.indexOf('key') &&
                          e._k(r.keyCode, 'up', 38, r.key, ['Up', 'ArrowUp'])
                          ? null
                          : e.onUp.apply(null, arguments)
                      },
                      function (r) {
                        return !r.type.indexOf('key') &&
                          e._k(r.keyCode, 'down', 40, r.key, [
                            'Down',
                            'ArrowDown'
                          ])
                          ? null
                          : e.onDown.apply(null, arguments)
                      }
                    ]
                  }
                }),
                e._v(' '),
                e.showSuggestions
                  ? t(
                      'ul',
                      {
                        staticClass: 'suggestions',
                        class: { 'align-right': e.alignRight },
                        on: { mouseleave: e.unfocus }
                      },
                      e._l(e.suggestions, function (r, a) {
                        return t(
                          'li',
                          {
                            key: a,
                            staticClass: 'suggestion',
                            class: { focused: a === e.focusIndex },
                            on: {
                              mousedown: function (r) {
                                return e.go(a)
                              },
                              mouseenter: function (r) {
                                return e.focus(a)
                              }
                            }
                          },
                          [
                            t(
                              'a',
                              {
                                attrs: { href: r.path },
                                on: {
                                  click: function (e) {
                                    e.preventDefault()
                                  }
                                }
                              },
                              [
                                t('span', { staticClass: 'page-title' }, [
                                  e._v(e._s(r.title || r.path))
                                ]),
                                e._v(' '),
                                r.header
                                  ? t('span', { staticClass: 'header' }, [
                                      e._v('> ' + e._s(r.header.title))
                                    ])
                                  : e._e()
                              ]
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : e._e()
              ])
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        d = t(302),
        g = t.n(d),
        f = t(303),
        m = {
          extends: h,
          data: () => ({ index: null }),
          computed: {
            suggestions() {
              const e = this.query.trim().toLowerCase()
              if (!e) return
              return this.index
                .search(e, 10)
                .map((e) => ({
                  ...e,
                  title: this.getSuggestionTitle(e),
                  text: this.getSuggestionText(e)
                }))
            }
          },
          mounted() {
            this.setupFlexSearch()
          },
          methods: {
            go(e) {
              if (!this.showSuggestions) return
              const r = this.suggestions[e].path
              this.$route.path !== r &&
                this.$router.push(this.suggestions[e].path),
                (this.query = ''),
                (this.focusIndex = 0)
            },
            setupFlexSearch() {
              this.index = new g.a({
                encode: 'icase',
                tokenize: 'forward',
                resolution: 9,
                doc: { id: 'key', field: ['title', 'content', 'headers'] }
              })
              const { pages: e } = this.$site
              this.index.add(e)
            },
            getSuggestionTitle(e) {
              const r = e.title ? e.title : e.regularPath
              return Object(f.highlightText)(r, this.query)
            },
            getSuggestionText(e) {
              const r = e.content,
                t = r.toLowerCase().indexOf(this.query.toLowerCase()),
                a = this.query.split(' ')[0]
              let s = -1 === t ? r.toLowerCase().indexOf(a.toLowerCase()) : t,
                i = ''
              s > 15 && ((s -= 15), (i = '.. '))
              const o = e.content.substr(s, 60)
              return i + Object(f.highlightText)(o, this.query)
            }
          }
        },
        b =
          (t(305),
          Object(i.a)(
            m,
            function () {
              var e = this,
                r = e.$createElement,
                t = e._self._c || r
              return t('div', { staticClass: 'search-box' }, [
                t('input', {
                  ref: 'input',
                  class: { focused: e.focused },
                  attrs: {
                    'aria-label': 'Search',
                    placeholder: e.placeholder,
                    autocomplete: 'off',
                    spellcheck: 'false'
                  },
                  domProps: { value: e.query },
                  on: {
                    input: function (r) {
                      e.query = r.target.value
                    },
                    focus: function (r) {
                      e.focused = !0
                    },
                    blur: function (r) {
                      e.focused = !1
                    },
                    keyup: [
                      function (r) {
                        return !r.type.indexOf('key') &&
                          e._k(r.keyCode, 'enter', 13, r.key, 'Enter')
                          ? null
                          : e.go(e.focusIndex)
                      },
                      function (r) {
                        return !r.type.indexOf('key') &&
                          e._k(r.keyCode, 'up', 38, r.key, ['Up', 'ArrowUp'])
                          ? null
                          : e.onUp.apply(null, arguments)
                      },
                      function (r) {
                        return !r.type.indexOf('key') &&
                          e._k(r.keyCode, 'down', 40, r.key, [
                            'Down',
                            'ArrowDown'
                          ])
                          ? null
                          : e.onDown.apply(null, arguments)
                      }
                    ]
                  }
                }),
                e._v(' '),
                e.showSuggestions
                  ? t(
                      'ul',
                      {
                        staticClass: 'suggestions',
                        class: { 'align-right': e.alignRight },
                        on: { mouseleave: e.unfocus }
                      },
                      e._l(e.suggestions, function (r, a) {
                        return t(
                          'li',
                          {
                            key: a,
                            staticClass: 'suggestion',
                            class: { focused: a === e.focusIndex },
                            on: {
                              mousedown: function (r) {
                                return e.go(a)
                              },
                              mouseenter: function (r) {
                                return e.focus(a)
                              }
                            }
                          },
                          [
                            t(
                              'a',
                              {
                                attrs: { href: r.regularPath },
                                on: {
                                  click: function (e) {
                                    e.preventDefault()
                                  }
                                }
                              },
                              [
                                t('span', {
                                  staticClass: 'suggestion__title',
                                  domProps: {
                                    innerHTML: e._s(r.title || r.regularPath)
                                  }
                                }),
                                e._v(' '),
                                t('span', {
                                  staticClass: 'suggestion__result',
                                  domProps: { innerHTML: e._s(r.text) }
                                })
                              ]
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : e._e()
              ])
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        v =
          (t(306),
          Object(i.a)(
            {},
            function () {
              var e = this,
                r = e.$createElement,
                t = e._self._c || r
              return t(
                'div',
                {
                  staticClass: 'sidebar-button',
                  on: {
                    click: function (r) {
                      return e.$emit('toggle-sidebar')
                    }
                  }
                },
                [
                  t(
                    'svg',
                    {
                      staticClass: 'icon',
                      attrs: {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'aria-hidden': 'true',
                        role: 'img',
                        viewBox: '0 0 448 512'
                      }
                    },
                    [
                      t('path', {
                        attrs: {
                          fill: 'currentColor',
                          d: 'M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z'
                        }
                      })
                    ]
                  )
                ]
              )
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        y = (t(9), t(114)),
        w = t(20),
        q = {
          name: 'NavLinks',
          components: { NavLink: a.a, DropdownLink: y.a },
          computed: {
            userNav() {
              return (
                this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
              )
            },
            nav() {
              const { locales: e } = this.$site
              if (e && Object.keys(e).length > 1) {
                const r = this.$page.path,
                  t = this.$router.options.routes,
                  a = this.$site.themeConfig.locales || {},
                  s = {
                    text: this.$themeLocaleConfig.selectText || 'Languages',
                    ariaLabel:
                      this.$themeLocaleConfig.ariaLabel || 'Select language',
                    items: Object.keys(e).map((s) => {
                      const i = e[s],
                        o = (a[s] && a[s].label) || i.lang
                      let n
                      return (
                        i.lang === this.$lang
                          ? (n = r)
                          : ((n = r.replace(this.$localeConfig.path, s)),
                            t.some((e) => e.path === n) || (n = s)),
                        { text: o, link: n }
                      )
                    })
                  }
                return [...this.userNav, s]
              }
              return this.userNav
            },
            userLinks() {
              return (this.nav || []).map((e) =>
                Object.assign(Object(w.j)(e), {
                  items: (e.items || []).map(w.j)
                })
              )
            },
            repoLink() {
              const { repo: e } = this.$site.themeConfig
              return e
                ? /^https?:/.test(e)
                  ? e
                  : 'https://github.com/' + e
                : null
            },
            repoLabel() {
              if (!this.repoLink) return
              if (this.$site.themeConfig.repoLabel)
                return this.$site.themeConfig.repoLabel
              const e = this.repoLink.match(/^https?:\/\/[^/]+/)[0],
                r = ['GitHub', 'GitLab', 'Bitbucket']
              for (let t = 0; t < r.length; t++) {
                const a = r[t]
                if (new RegExp(a, 'i').test(e)) return a
              }
              return 'Source'
            }
          }
        },
        D =
          (t(307),
          Object(i.a)(
            q,
            function () {
              var e = this,
                r = e.$createElement,
                t = e._self._c || r
              return e.userLinks.length || e.repoLink
                ? t(
                    'nav',
                    { staticClass: 'nav-links' },
                    [
                      e._l(e.userLinks, function (e) {
                        return t(
                          'div',
                          { key: e.link, staticClass: 'nav-item' },
                          [
                            'links' === e.type
                              ? t('DropdownLink', { attrs: { item: e } })
                              : t('NavLink', { attrs: { item: e } })
                          ],
                          1
                        )
                      }),
                      e._v(' '),
                      e.repoLink
                        ? t(
                            'a',
                            {
                              staticClass: 'repo-link',
                              attrs: {
                                href: e.repoLink,
                                target: '_blank',
                                rel: 'noopener noreferrer'
                              }
                            },
                            [
                              e._v('\n    ' + e._s(e.repoLabel) + '\n    '),
                              t('OutboundLink')
                            ],
                            1
                          )
                        : e._e()
                    ],
                    2
                  )
                : e._e()
            },
            [],
            !1,
            null,
            null,
            null
          ).exports)
      function x(e, r) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)[r]
      }
      var k = {
          name: 'Navbar',
          components: {
            SidebarButton: v,
            NavLinks: D,
            SearchBox: b,
            AlgoliaSearchBox: {}
          },
          data: () => ({ linksWrapMaxWidth: null }),
          computed: {
            algolia() {
              return (
                this.$themeLocaleConfig.algolia ||
                this.$site.themeConfig.algolia ||
                {}
              )
            },
            isAlgoliaSearch() {
              return (
                this.algolia && this.algolia.apiKey && this.algolia.indexName
              )
            }
          },
          mounted() {
            const e =
                parseInt(x(this.$el, 'paddingLeft')) +
                parseInt(x(this.$el, 'paddingRight')),
              r = () => {
                document.documentElement.clientWidth < 719
                  ? (this.linksWrapMaxWidth = null)
                  : (this.linksWrapMaxWidth =
                      this.$el.offsetWidth -
                      e -
                      ((this.$refs.siteName &&
                        this.$refs.siteName.offsetWidth) ||
                        0))
              }
            r(), window.addEventListener('resize', r, !1)
          }
        },
        E =
          (t(308),
          Object(i.a)(
            k,
            function () {
              var e = this,
                r = e.$createElement,
                t = e._self._c || r
              return t(
                'header',
                { staticClass: 'navbar' },
                [
                  t('SidebarButton', {
                    on: {
                      'toggle-sidebar': function (r) {
                        return e.$emit('toggle-sidebar')
                      }
                    }
                  }),
                  e._v(' '),
                  t(
                    'RouterLink',
                    { staticClass: 'home-link', attrs: { to: e.$localePath } },
                    [
                      e.$site.themeConfig.logo
                        ? t('img', {
                            staticClass: 'logo',
                            attrs: {
                              src: e.$withBase(e.$site.themeConfig.logo),
                              alt: e.$siteTitle
                            }
                          })
                        : e._e(),
                      e._v(' '),
                      e.$siteTitle
                        ? t(
                            'span',
                            {
                              ref: 'siteName',
                              staticClass: 'site-name',
                              class: { 'can-hide': e.$site.themeConfig.logo }
                            },
                            [e._v(e._s(e.$siteTitle))]
                          )
                        : e._e()
                    ]
                  ),
                  e._v(' '),
                  t(
                    'div',
                    {
                      staticClass: 'links',
                      style: e.linksWrapMaxWidth
                        ? { 'max-width': e.linksWrapMaxWidth + 'px' }
                        : {}
                    },
                    [
                      e.isAlgoliaSearch
                        ? t('AlgoliaSearchBox', {
                            attrs: { options: e.algolia }
                          })
                        : !1 !== e.$site.themeConfig.search &&
                          !1 !== e.$page.frontmatter.search
                        ? t('SearchBox')
                        : e._e(),
                      e._v(' '),
                      t('NavLinks', { staticClass: 'can-hide' })
                    ],
                    1
                  )
                ],
                1
              )
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        A = t(283),
        L = t.n(A),
        C = {
          name: 'PageEdit',
          computed: {
            lastUpdated() {
              return this.$page.lastUpdated
            },
            lastUpdatedText() {
              return 'string' == typeof this.$themeLocaleConfig.lastUpdated
                ? this.$themeLocaleConfig.lastUpdated
                : 'string' == typeof this.$site.themeConfig.lastUpdated
                ? this.$site.themeConfig.lastUpdated
                : 'Last Updated'
            },
            editLink() {
              const e = L()(this.$page.frontmatter.editLink)
                  ? this.$site.themeConfig.editLinks
                  : this.$page.frontmatter.editLink,
                {
                  repo: r,
                  docsDir: t = '',
                  docsBranch: a = 'master',
                  docsRepo: s = r
                } = this.$site.themeConfig
              return e && s && this.$page.relativePath
                ? this.createEditLink(r, s, t, a, this.$page.relativePath)
                : null
            },
            editLinkText() {
              return (
                this.$themeLocaleConfig.editLinkText ||
                this.$site.themeConfig.editLinkText ||
                'Edit this page'
              )
            }
          },
          methods: {
            createEditLink(e, r, t, a, s) {
              if (/bitbucket.org/.test(r)) {
                return (
                  r.replace(w.a, '') +
                  '/src' +
                  `/${a}/` +
                  (t ? t.replace(w.a, '') + '/' : '') +
                  s +
                  `?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`
                )
              }
              if (/gitlab.com/.test(r)) {
                return (
                  r.replace(w.a, '') +
                  '/-/edit' +
                  `/${a}/` +
                  (t ? t.replace(w.a, '') + '/' : '') +
                  s
                )
              }
              return (
                (w.i.test(r) ? r : 'https://github.com/' + r).replace(w.a, '') +
                '/edit' +
                `/${a}/` +
                (t ? t.replace(w.a, '') + '/' : '') +
                s
              )
            }
          }
        },
        S =
          (t(309),
          Object(i.a)(
            C,
            function () {
              var e = this,
                r = e.$createElement,
                t = e._self._c || r
              return t('footer', { staticClass: 'page-edit' }, [
                e.editLink
                  ? t(
                      'div',
                      { staticClass: 'edit-link' },
                      [
                        t(
                          'a',
                          {
                            attrs: {
                              href: e.editLink,
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [e._v(e._s(e.editLinkText))]
                        ),
                        e._v(' '),
                        t('OutboundLink')
                      ],
                      1
                    )
                  : e._e(),
                e._v(' '),
                e.lastUpdated
                  ? t('div', { staticClass: 'last-updated' }, [
                      t('span', { staticClass: 'prefix' }, [
                        e._v(e._s(e.lastUpdatedText) + ':')
                      ]),
                      e._v(' '),
                      t('span', { staticClass: 'time' }, [
                        e._v(e._s(e.lastUpdated))
                      ])
                    ])
                  : e._e()
              ])
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        T = t(310),
        B = t.n(T),
        R = {
          name: 'PageNav',
          props: ['sidebarItems'],
          computed: {
            prev() {
              return U(N.PREV, this)
            },
            next() {
              return U(N.NEXT, this)
            }
          }
        }
      const N = {
        NEXT: {
          resolveLink: function (e, r) {
            return F(e, r, 1)
          },
          getThemeLinkConfig: ({ nextLinks: e }) => e,
          getPageLinkConfig: ({ frontmatter: e }) => e.next
        },
        PREV: {
          resolveLink: function (e, r) {
            return F(e, r, -1)
          },
          getThemeLinkConfig: ({ prevLinks: e }) => e,
          getPageLinkConfig: ({ frontmatter: e }) => e.prev
        }
      }
      function U(
        e,
        { $themeConfig: r, $page: t, $route: a, $site: s, sidebarItems: i }
      ) {
        const {
            resolveLink: o,
            getThemeLinkConfig: n,
            getPageLinkConfig: l
          } = e,
          c = n(r),
          u = l(t),
          p = L()(u) ? c : u
        return !1 === p
          ? void 0
          : B()(p)
          ? Object(w.k)(s.pages, p, a.path)
          : o(t, i)
      }
      function F(e, r, t) {
        const a = []
        !(function e(r, t) {
          for (let a = 0, s = r.length; a < s; a++)
            'group' === r[a].type ? e(r[a].children || [], t) : t.push(r[a])
        })(r, a)
        for (let r = 0; r < a.length; r++) {
          const s = a[r]
          if ('page' === s.type && s.path === decodeURIComponent(e.path))
            return a[r + t]
        }
      }
      var O = R,
        V =
          (t(311),
          {
            components: {
              PageEdit: S,
              PageNav: Object(i.a)(
                O,
                function () {
                  var e = this,
                    r = e.$createElement,
                    t = e._self._c || r
                  return e.prev || e.next
                    ? t('div', { staticClass: 'page-nav' }, [
                        t('p', { staticClass: 'inner' }, [
                          e.prev
                            ? t(
                                'span',
                                { staticClass: 'prev' },
                                [
                                  e._v('\n      ←\n      '),
                                  'external' === e.prev.type
                                    ? t(
                                        'a',
                                        {
                                          staticClass: 'prev',
                                          attrs: {
                                            href: e.prev.path,
                                            target: '_blank',
                                            rel: 'noopener noreferrer'
                                          }
                                        },
                                        [
                                          e._v(
                                            '\n        ' +
                                              e._s(
                                                e.prev.title || e.prev.path
                                              ) +
                                              '\n\n        '
                                          ),
                                          t('OutboundLink')
                                        ],
                                        1
                                      )
                                    : t(
                                        'RouterLink',
                                        {
                                          staticClass: 'prev',
                                          attrs: { to: e.prev.path }
                                        },
                                        [
                                          e._v(
                                            '\n        ' +
                                              e._s(
                                                e.prev.title || e.prev.path
                                              ) +
                                              '\n      '
                                          )
                                        ]
                                      )
                                ],
                                1
                              )
                            : e._e(),
                          e._v(' '),
                          e.next
                            ? t(
                                'span',
                                { staticClass: 'next' },
                                [
                                  'external' === e.next.type
                                    ? t(
                                        'a',
                                        {
                                          attrs: {
                                            href: e.next.path,
                                            target: '_blank',
                                            rel: 'noopener noreferrer'
                                          }
                                        },
                                        [
                                          e._v(
                                            '\n        ' +
                                              e._s(
                                                e.next.title || e.next.path
                                              ) +
                                              '\n\n        '
                                          ),
                                          t('OutboundLink')
                                        ],
                                        1
                                      )
                                    : t(
                                        'RouterLink',
                                        { attrs: { to: e.next.path } },
                                        [
                                          e._v(
                                            '\n        ' +
                                              e._s(
                                                e.next.title || e.next.path
                                              ) +
                                              '\n      '
                                          )
                                        ]
                                      ),
                                  e._v('\n      →\n    ')
                                ],
                                1
                              )
                            : e._e()
                        ])
                      ])
                    : e._e()
                },
                [],
                !1,
                null,
                null,
                null
              ).exports
            },
            props: ['sidebarItems']
          }),
        _ =
          (t(312),
          Object(i.a)(
            V,
            function () {
              var e = this,
                r = e.$createElement,
                t = e._self._c || r
              return t(
                'main',
                { staticClass: 'page' },
                [
                  e._t('top'),
                  e._v(' '),
                  t('Content', { staticClass: 'theme-default-content' }),
                  e._v(' '),
                  t('PageEdit'),
                  e._v(' '),
                  t(
                    'PageNav',
                    e._b({}, 'PageNav', { sidebarItems: e.sidebarItems }, !1)
                  ),
                  e._v(' '),
                  e._t('bottom')
                ],
                2
              )
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        I = {
          name: 'Sidebar',
          components: { SidebarLinks: t(299).default, NavLinks: D },
          props: ['items']
        },
        G =
          (t(315),
          {
            name: 'Layout',
            components: {
              Home: o,
              Page: _,
              Sidebar: Object(i.a)(
                I,
                function () {
                  var e = this.$createElement,
                    r = this._self._c || e
                  return r(
                    'aside',
                    { staticClass: 'sidebar' },
                    [
                      r('NavLinks'),
                      this._v(' '),
                      this._t('top'),
                      this._v(' '),
                      r('SidebarLinks', {
                        attrs: { depth: 0, items: this.items }
                      }),
                      this._v(' '),
                      this._t('bottom')
                    ],
                    2
                  )
                },
                [],
                !1,
                null,
                null,
                null
              ).exports,
              Navbar: E
            },
            data: () => ({ isSidebarOpen: !1 }),
            computed: {
              shouldShowNavbar() {
                const { themeConfig: e } = this.$site,
                  { frontmatter: r } = this.$page
                return (
                  !1 !== r.navbar &&
                  !1 !== e.navbar &&
                  (this.$title ||
                    e.logo ||
                    e.repo ||
                    e.nav ||
                    this.$themeLocaleConfig.nav)
                )
              },
              shouldShowSidebar() {
                const { frontmatter: e } = this.$page
                return !e.home && !1 !== e.sidebar && this.sidebarItems.length
              },
              sidebarItems() {
                return Object(w.l)(
                  this.$page,
                  this.$page.regularPath,
                  this.$site,
                  this.$localePath
                )
              },
              pageClasses() {
                const e = this.$page.frontmatter.pageClass
                return [
                  {
                    'no-navbar': !this.shouldShowNavbar,
                    'sidebar-open': this.isSidebarOpen,
                    'no-sidebar': !this.shouldShowSidebar
                  },
                  e
                ]
              }
            },
            mounted() {
              this.$router.afterEach(() => {
                this.isSidebarOpen = !1
              })
            },
            methods: {
              toggleSidebar(e) {
                ;(this.isSidebarOpen =
                  'boolean' == typeof e ? e : !this.isSidebarOpen),
                  this.$emit('toggle-sidebar', this.isSidebarOpen)
              },
              onTouchStart(e) {
                this.touchStart = {
                  x: e.changedTouches[0].clientX,
                  y: e.changedTouches[0].clientY
                }
              },
              onTouchEnd(e) {
                const r = e.changedTouches[0].clientX - this.touchStart.x,
                  t = e.changedTouches[0].clientY - this.touchStart.y
                Math.abs(r) > Math.abs(t) &&
                  Math.abs(r) > 40 &&
                  (r > 0 && this.touchStart.x <= 80
                    ? this.toggleSidebar(!0)
                    : this.toggleSidebar(!1))
              }
            }
          }),
        P = Object(i.a)(
          G,
          function () {
            var e = this,
              r = e.$createElement,
              t = e._self._c || r
            return t(
              'div',
              {
                staticClass: 'theme-container',
                class: e.pageClasses,
                on: { touchstart: e.onTouchStart, touchend: e.onTouchEnd }
              },
              [
                e.shouldShowNavbar
                  ? t('Navbar', { on: { 'toggle-sidebar': e.toggleSidebar } })
                  : e._e(),
                e._v(' '),
                t('div', {
                  staticClass: 'sidebar-mask',
                  on: {
                    click: function (r) {
                      return e.toggleSidebar(!1)
                    }
                  }
                }),
                e._v(' '),
                t('Sidebar', {
                  attrs: { items: e.sidebarItems },
                  on: { 'toggle-sidebar': e.toggleSidebar },
                  scopedSlots: e._u(
                    [
                      {
                        key: 'top',
                        fn: function () {
                          return [e._t('sidebar-top')]
                        },
                        proxy: !0
                      },
                      {
                        key: 'bottom',
                        fn: function () {
                          return [e._t('sidebar-bottom')]
                        },
                        proxy: !0
                      }
                    ],
                    null,
                    !0
                  )
                }),
                e._v(' '),
                e.$page.frontmatter.home
                  ? t('Home')
                  : t('Page', {
                      attrs: { 'sidebar-items': e.sidebarItems },
                      scopedSlots: e._u(
                        [
                          {
                            key: 'top',
                            fn: function () {
                              return [e._t('page-top')]
                            },
                            proxy: !0
                          },
                          {
                            key: 'bottom',
                            fn: function () {
                              return [e._t('page-bottom')]
                            },
                            proxy: !0
                          }
                        ],
                        null,
                        !0
                      )
                    })
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      r.default = P.exports
    }
  }
])
