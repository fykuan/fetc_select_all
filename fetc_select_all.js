// ==UserScript==
// @name        自動選取所有欠費
// @namespace   fykuan
// @include     http*://www.fetc.net.tw/UX/*
// @grant       none
// @version     1.0
// @author      fykuan@gmail.com
// @description https://github.com/fykuan/fetc_select_all/
// @require     https://greasyfork.org/scripts/12228/code/setMutationHandler.js
// ==/UserScript==


checkThem([].slice.call(document.querySelectorAll('input[type="checkbox"]')));

setMutationHandler(document, 'input[type="checkbox"]', checkThem);

function checkThem(nodes) {
    nodes.forEach(function(n) { n.checked = true });
}
