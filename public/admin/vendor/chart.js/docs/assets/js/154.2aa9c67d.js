;(window.webpackJsonp = window.webpackJsonp || []).push([
  [154],
  {
    483: function (e, t, i) {
      'use strict'
      i.r(t)
      var a = i(6),
        o = Object(a.a)(
          {},
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t
            return i(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': e.$parent.slotKey } },
              [
                i('h1', { attrs: { id: 'device-pixel-ratio' } }, [
                  i(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#device-pixel-ratio' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Device Pixel Ratio')
                ]),
                e._v(' '),
                i('p', [
                  e._v(
                    "By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio (e.g. Retina displays)."
                  )
                ]),
                e._v(' '),
                i('p', [
                  e._v(
                    'For applications where a chart will be converted to a bitmap, or printed to a higher DPI medium it can be desirable to render the chart at a higher resolution than the default.'
                  )
                ]),
                e._v(' '),
                i('p', [
                  e._v('Setting '),
                  i('code', [e._v('devicePixelRatio')]),
                  e._v(
                    ' to a value other than 1 will force the canvas size to be scaled by that amount, relative to the container size. There should be no visible difference on screen; the difference will only be visible when the image is zoomed or printed.'
                  )
                ]),
                e._v(' '),
                i('h2', { attrs: { id: 'configuration-options' } }, [
                  i(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#configuration-options' }
                    },
                    [e._v('#')]
                  ),
                  e._v(' Configuration Options')
                ]),
                e._v(' '),
                i('p', [e._v('Namespace: '), i('code', [e._v('options')])]),
                e._v(' '),
                i('table', [
                  i('thead', [
                    i('tr', [
                      i('th', [e._v('Name')]),
                      e._v(' '),
                      i('th', [e._v('Type')]),
                      e._v(' '),
                      i('th', [e._v('Default')]),
                      e._v(' '),
                      i('th', [e._v('Description')])
                    ])
                  ]),
                  e._v(' '),
                  i('tbody', [
                    i('tr', [
                      i('td', [i('code', [e._v('devicePixelRatio')])]),
                      e._v(' '),
                      i('td', [i('code', [e._v('number')])]),
                      e._v(' '),
                      i('td', [i('code', [e._v('window.devicePixelRatio')])]),
                      e._v(' '),
                      i('td', [
                        e._v("Override the window's default devicePixelRatio.")
                      ])
                    ])
                  ])
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
      t.default = o.exports
    }
  }
])
