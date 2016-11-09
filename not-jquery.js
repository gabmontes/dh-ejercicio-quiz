/**
 * not-jquery
 *
 * A partial (re)implementation of jQuery API as a polyfill for learning and
 * teaching purposes.
 *
 * https://gist.github.com/gabmontes/535a7b3b059b2a301a55b43e90ee0101
 */

(function (global) {
  const jqMethods = {
    // $().click()
    click: function (handler) {
      this._elements.forEach(function (elem) {
        elem.addEventListener('click', handler)
      })
      return this
    },
    // $().text()
    text: function (text) {
      this._elements.forEach(function (elem) {
        elem.textContent = text
      })
      return this
    },
    // $().html()
    html: function (html) {
      this._elements.forEach(function (elem) {
        elem.innerHTML = html
      })
      return this
    },
    // $().css()
    css: function (properties) {
      this._elements.forEach(function (elem) {
        Object.keys(properties).forEach(function (prop) {
          elem.style[prop] = properties[prop]
        })
      })
      return this
    },
    // $().toggleClass()
    toggleClass: function (className) {
      this._elements.forEach(function (elem) {
        elem.classList.toggle(className)
      })
      return this
    },
    // $().each()
    each: function (iterator) {
      this._elements.forEach(function (elem, i) {
        iterator.call(elem, i)
      })
      return this
    },
    // $().append()
    append: function (content) {
      this._elements.forEach(function (elem) {
        content.each(function () {
          elem.appendChild(this)
        })
      })
      return this
    }
  }
  function wrap(elements) {
    var wrapped = Object.create(jqMethods)
    wrapped._elements = elements
    return wrapped
  }
  // $(html|selector)
  global.$ = global.$ || function (string) {
    let elements
    if (string.charAt(0) === '<') {
      const parent = document.createElement('div')
      parent.innerHTML = string
      elements = parent.children
    } else {
      elements = document.querySelectorAll(string)
    }
    return wrap([...elements])
  }
  // $.getJSON()
  global.$.getJSON = global.$.getJSON || function (url, callback) {
    if (global.fetch) {
      fetch(url)
        .then(response => response.json())
        .then(callback)
    } else {
      const request = new XMLHttpRequest()
      request.open('GET', url, true)
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          callback(JSON.parse(request.responseText))
        }
      }
      request.send()
    }
  }
})(this)
