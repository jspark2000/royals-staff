;(window.webpackJsonp = window.webpackJsonp || []).push([
  [184],
  {
    514: function (t, a, s) {
      'use strict'
      s.r(a)
      var n = s(6),
        r = Object(n.a)(
          {},
          function () {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h1', { attrs: { id: 'chart-js' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#chart-js' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Chart.js')
                ]),
                t._v(' '),
                s('p', [
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://chartjs-slack.herokuapp.com/',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      s('img', {
                        attrs: {
                          src: 'https://img.shields.io/badge/slack-chartjs-blue.svg?style=flat-square&maxAge=3600',
                          alt: 'slack'
                        }
                      }),
                      s('OutboundLink')
                    ],
                    1
                  )
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'installation' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#installation' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Installation')
                ]),
                t._v(' '),
                s(
                  'p',
                  [
                    t._v('You can get the latest version of Chart.js from '),
                    s(
                      'a',
                      {
                        attrs: {
                          href: 'https://npmjs.com/package/chart.js',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('npm'), s('OutboundLink')],
                      1
                    ),
                    t._v(', the '),
                    s(
                      'a',
                      {
                        attrs: {
                          href: 'https://github.com/chartjs/Chart.js/releases/latest',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('GitHub releases'), s('OutboundLink')],
                      1
                    ),
                    t._v(', or use a '),
                    s(
                      'a',
                      {
                        attrs: {
                          href: 'https://www.jsdelivr.com/package/npm/chart.js',
                          target: '_blank',
                          rel: 'noopener noreferrer'
                        }
                      },
                      [t._v('Chart.js CDN'), s('OutboundLink')],
                      1
                    ),
                    t._v(
                      '. Detailed installation instructions can be found on the '
                    ),
                    s(
                      'RouterLink',
                      { attrs: { to: '/getting-started/installation.html' } },
                      [t._v('installation')]
                    ),
                    t._v(' page.')
                  ],
                  1
                ),
                t._v(' '),
                s('p', [
                  t._v(
                    "If you're using a front-end framework (e.g., React, Angular, or Vue), please check "
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/awesome#integrations',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('available integrations'), s('OutboundLink')],
                    1
                  ),
                  t._v('.')
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'creating-a-chart' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#creating-a-chart' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Creating a Chart')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    "It's easy to get started with Chart.js. All that's required is the script included in your page along with a single "
                  ),
                  s('code', [t._v('<canvas>')]),
                  t._v(' node to render the chart.')
                ]),
                t._v(' '),
                s(
                  'p',
                  [
                    t._v(
                      'In this example, we create a bar chart for a single dataset and render that in our page. You can see all the ways to use Chart.js in the '
                    ),
                    s(
                      'RouterLink',
                      { attrs: { to: '/getting-started/usage.html' } },
                      [t._v('usage documentation')]
                    ),
                    t._v('.')
                  ],
                  1
                ),
                t._v(' '),
                s('div', { staticClass: 'language-html extra-class' }, [
                  s('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                    s('code', [
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('canvas')
                        ]),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-name' } },
                          [t._v('id')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-value' } },
                          [
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token punctuation attr-equals'
                                }
                              },
                              [t._v('=')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            ),
                            t._v('myChart'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-name' } },
                          [t._v('width')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-value' } },
                          [
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token punctuation attr-equals'
                                }
                              },
                              [t._v('=')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            ),
                            t._v('400'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v(' '),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-name' } },
                          [t._v('height')]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token attr-value' } },
                          [
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token punctuation attr-equals'
                                }
                              },
                              [t._v('=')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            ),
                            t._v('400'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('canvas')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n'),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('<')]
                          ),
                          t._v('script')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      s('span', { pre: !0, attrs: { class: 'token script' } }, [
                        s(
                          'span',
                          {
                            pre: !0,
                            attrs: { class: 'token language-javascript' }
                          },
                          [
                            t._v('\n'),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('const')]
                            ),
                            t._v(' ctx '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v('=')]
                            ),
                            t._v(' document'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('.')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token function' } },
                              [t._v('getElementById')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'myChart'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('.')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token function' } },
                              [t._v('getContext')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'2d'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(';')]
                            ),
                            t._v('\n'),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token keyword' } },
                              [t._v('const')]
                            ),
                            t._v(' myChart '),
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
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('(')]
                            ),
                            t._v('ctx'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n    '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
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
                              [t._v("'bar'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('data')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n        '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('labels')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('[')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'Red'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'Blue'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'Yellow'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'Green'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'Purple'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'Orange'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(']')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n        '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('datasets')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('[')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n            '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('label')]
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
                              [t._v("'# of Votes'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n            '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('data')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('[')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('12')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('19')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('3')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('5')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('2')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token number' } },
                              [t._v('3')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(']')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n            '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('backgroundColor')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('[')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(255, 99, 132, 0.2)'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(54, 162, 235, 0.2)'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(255, 206, 86, 0.2)'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(75, 192, 192, 0.2)'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(153, 102, 255, 0.2)'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(255, 159, 64, 0.2)'")]
                            ),
                            t._v('\n            '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(']')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n            '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('borderColor')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('[')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(255, 99, 132, 1)'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(54, 162, 235, 1)'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(255, 206, 86, 1)'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(75, 192, 192, 1)'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(153, 102, 255, 1)'")]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token string' } },
                              [t._v("'rgba(255, 159, 64, 1)'")]
                            ),
                            t._v('\n            '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(']')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n            '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('borderWidth')]
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
                              [t._v('1')]
                            ),
                            t._v('\n        '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(']')]
                            ),
                            t._v('\n    '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(',')]
                            ),
                            t._v('\n    '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
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
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n        '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
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
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n            '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
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
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('{')]
                            ),
                            t._v('\n                '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: {
                                  class: 'token literal-property property'
                                }
                              },
                              [t._v('beginAtZero')]
                            ),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token operator' } },
                              [t._v(':')]
                            ),
                            t._v(' '),
                            s(
                              'span',
                              { pre: !0, attrs: { class: 'token boolean' } },
                              [t._v('true')]
                            ),
                            t._v('\n            '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            t._v('\n        '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            t._v('\n    '),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            t._v('\n'),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v('}')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(')')]
                            ),
                            s(
                              'span',
                              {
                                pre: !0,
                                attrs: { class: 'token punctuation' }
                              },
                              [t._v(';')]
                            ),
                            t._v('\n')
                          ]
                        )
                      ]),
                      s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                          s(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [t._v('</')]
                          ),
                          t._v('script')
                        ]),
                        s(
                          'span',
                          { pre: !0, attrs: { class: 'token punctuation' } },
                          [t._v('>')]
                        )
                      ]),
                      t._v('\n')
                    ])
                  ])
                ]),
                s('h2', { attrs: { id: 'contributing' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#contributing' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' Contributing')
                ]),
                t._v(' '),
                s(
                  'p',
                  [
                    t._v(
                      'Before submitting an issue or a pull request to the project, please take a moment to look over the '
                    ),
                    s(
                      'RouterLink',
                      { attrs: { to: '/developers/contributing.html' } },
                      [t._v('contributing guidelines')]
                    ),
                    t._v(' first.')
                  ],
                  1
                ),
                t._v(' '),
                s('p', [
                  t._v(
                    'For support using Chart.js, please post questions with the '
                  ),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://stackoverflow.com/questions/tagged/chart.js',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [
                      s('code', [t._v('chart.js')]),
                      t._v(' tag on Stack Overflow'),
                      s('OutboundLink')
                    ],
                    1
                  ),
                  t._v('.')
                ]),
                t._v(' '),
                s('h2', { attrs: { id: 'license' } }, [
                  s(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#license' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' License')
                ]),
                t._v(' '),
                s('p', [
                  t._v('Chart.js is available under the '),
                  s(
                    'a',
                    {
                      attrs: {
                        href: 'https://github.com/chartjs/Chart.js/blob/master/LICENSE.md',
                        target: '_blank',
                        rel: 'noopener noreferrer'
                      }
                    },
                    [t._v('MIT license'), s('OutboundLink')],
                    1
                  ),
                  t._v('.')
                ]),
                t._v(' '),
                s('p', [
                  t._v(
                    'Documentation is copyright © 2014-' +
                      t._s(new Date().getFullYear()) +
                      ' Chart.js contributors.'
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
      a.default = r.exports
    }
  }
])
