;(window.webpackJsonp = window.webpackJsonp || []).push([
  [177],
  {
    507: function (t, a, s) {
      'use strict'
      s.r(a)
      var r = s(6),
        e = Object(r.a)(
          {},
          function () {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h1', { attrs: { id: 'padding' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#padding' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Padding')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'Padding values in Chart options can be supplied in couple of different formats.'
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'number' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#number' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Number')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'If this value is a number, it is applied to all sides (left, top, right, bottom).'
                  )
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'For example, defining a 20px padding to all sides of chart:'
                  )
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-javascript extra-class' }, [
                  s(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      s('code', [
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('let')]
                        ),
                        t._v(' chart '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' data'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('layout')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('padding')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('20')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                s('h2', { attrs: { id: 'top-left-bottom-right-object' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#top-left-bottom-right-object' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' {top, left, bottom, right} object')
                ]),
                t._v(' '),
                s('p', [
                  t._v('If this value is an object, the '),
                  s('code', [t._v('left')]),
                  t._v(' property defines the left padding. Similarly the '),
                  s('code', [t._v('right')]),
                  t._v(', '),
                  s('code', [t._v('top')]),
                  t._v(' and '),
                  s('code', [t._v('bottom')]),
                  t._v(
                    ' properties can also be specified.\nOmitted properties default to '
                  ),
                  s('code', [t._v('0')]),
                  t._v('.')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'Lets say you wanted to add 50px of padding to the left side of the chart canvas, you would do:'
                  )
                ]),
                t._v(' '),
                s('div', { staticClass: 'language-javascript extra-class' }, [
                  s(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      s('code', [
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('let')]
                        ),
                        t._v(' chart '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'line'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' data'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('layout')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('padding')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('left')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('50')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ]),
                s('h2', { attrs: { id: 'x-y-object' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#x-y-object' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' {x, y} object')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'This is a shorthand for defining left/right and top/bottom to the same values.'
                  )
                ]),
                t._v(' '),
                s(
                  'p',
                  [
                    t._v(
                      'For example, 10px left / right and 4px top / bottom padding on a Radial Linear Axis '
                    ),
                    s(
                      'RouterLink',
                      {
                        attrs: {
                          to: '/axes/radial/linear.html#linear-radial-axis-specific-tick-options'
                        }
                      },
                      [t._v('tick backdropPadding')]
                    ),
                    t._v(':')
                  ],
                  1
                ),
                t._v(' '),
                s('div', { staticClass: 'language-javascript extra-class' }, [
                  s(
                    'pre',
                    { pre: !0, attrs: { class: 'language-javascript' } },
                    [
                      s('code', [
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('let')]
                        ),
                        t._v(' chart '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v('=')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token keyword' } },
                          [t._v('new')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token class-name' } },
                          [t._v('Chart')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('(')]
                        ),
                        t._v('ctx'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('type')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token string' } },
                          [t._v("'radar'")]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('data')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' data'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('options')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('scales')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n          '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('r')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('ticks')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n              '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('backdropPadding')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('{')]
                        ),
                        t._v('\n                  '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('x')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('10')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(',')]
                        ),
                        t._v('\n                  '),
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token literal-property property' }
                          },
                          [t._v('y')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token operator' } },
                          [t._v(':')]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token number' } },
                          [t._v('4')]
                        ),
                        t._v('\n              '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n            '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n        '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n    '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        t._v('\n'),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('}')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(')')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v(';')]
                        ),
                        t._v('\n')
                      ])
                    ]
                  )
                ])
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      a.default = e.exports
    }
  }
])
