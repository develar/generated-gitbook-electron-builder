"use strict"

require(["gitbook"], function (gitbook) {
  function addBeforeHeader(element) {
    jQuery(".book-header > h1").before(element)
  }

  function init() {
    if (window.location.href.indexOf("/donate") > 0) {
      return
    }
    //
    // const elementString2 = `<a class="btn pull-right hidden-mobile" href="https://yarn.pm/electron-builder"><img src="https://img.shields.io/npm/v/electron-builder.svg?label=latest"/></a>`
    // addBeforeHeader(elementString2)

    const elementString = `<a class="btn pull-right hidden-mobile" aria-label="donate" href="/donate">Donate</a>`
     addBeforeHeader(elementString)
  }

  gitbook.events.bind("page.change", () => {
    init()
  })
})