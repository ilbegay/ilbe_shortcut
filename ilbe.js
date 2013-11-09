//     keymaster.js
//     (c) 2011-2012 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.
(function (e) { function f(e, t) { var n = e.length; while (n--) if (e[n] === t) return n; return -1 } function l(e, t) { if (e.length != t.length) return !1; for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1; return !0 } function h(e) { for (t in r) r[t] = e[c[t]] } function p(e, t) { var i, o, u, l, c; i = e.keyCode, f(a, i) == -1 && a.push(i); if (i == 93 || i == 224) i = 91; if (i in r) { r[i] = !0; for (u in s) s[u] == i && (m[u] = !0); return } h(e); if (!m.filter.call(this, e)) return; if (!(i in n)) return; for (l = 0; l < n[i].length; l++) { o = n[i][l]; if (o.scope == t || o.scope == "all") { c = o.mods.length > 0; for (u in r) if (!r[u] && f(o.mods, +u) > -1 || r[u] && f(o.mods, +u) == -1) c = !1; (o.mods.length == 0 && !r[16] && !r[18] && !r[17] && !r[91] || c) && o.method(e, o) === !1 && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0)) } } } function d(e) { var t = e.keyCode, n, i = f(a, t); i >= 0 && a.splice(i, 1); if (t == 93 || t == 224) t = 91; if (t in r) { r[t] = !1; for (n in s) s[n] == t && (m[n] = !1) } } function v() { for (t in r) r[t] = !1; for (t in s) m[t] = !1 } function m(e, t, r) { var i, s, o, a; i = T(e), r === undefined && (r = t, t = "all"); for (o = 0; o < i.length; o++) s = [], e = i[o].split("+"), e.length > 1 && (s = N(e), e = [e[e.length - 1]]), e = e[0], e = u(e), e in n || (n[e] = []), n[e].push({ shortcut: i[o], scope: t, method: r, key: i[o], mods: s }) } function g(e, t) { var r = e.split("+"), i = [], s, o; r.length > 1 && (i = N(r), e = r[r.length - 1]), e = u(e), t === undefined && (t = S()); if (!n[e]) return; for (s in n[e]) o = n[e][s], o.scope === t && l(o.mods, i) && (n[e][s] = {}) } function y(e) { return typeof e == "string" && (e = u(e)), f(a, e) != -1 } function b() { return a.slice(0) } function w(e) { var t = (e.target || e.srcElement).tagName; return t != "INPUT" && t != "SELECT" && t != "TEXTAREA" } function E(e) { i = e || "all" } function S() { return i || "all" } function x(e) { var t, r, i; for (t in n) { r = n[t]; for (i = 0; i < r.length;) r[i].scope === e ? r.splice(i, 1) : i++ } } function T(e) { var t; return e = e.replace(/\s/g, ""), t = e.split(","), t[t.length - 1] == "" && (t[t.length - 2] += ","), t } function N(e) { var t = e.slice(0, e.length - 1); for (mi = 0; mi < t.length; mi++) t[mi] = s[t[mi]]; return t } function C(e, t, n) { e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, function () { n(window.event) }) } function L() { var t = e.key; return e.key = k, t } var t, n = {}, r = { 16: !1, 18: !1, 17: !1, 91: !1 }, i = "all", s = { "?": 16, shift: 16, "?": 18, alt: 18, option: 18, "?": 17, ctrl: 17, control: 17, "?": 91, command: 91 }, o = { backspace: 8, tab: 9, clear: 12, enter: 13, "return": 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, "delete": 46, home: 36, end: 35, pageup: 33, pagedown: 34, ",": 188, ".": 190, "/": 191, "`": 192, "-": 189, "=": 187, ";": 186, "'": 222, "[": 219, "]": 221, "\\": 220 }, u = function (e) { return o[e] || e.toUpperCase().charCodeAt(0) }, a = []; for (t = 1; t < 20; t++) o["f" + t] = 111 + t; var c = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey" }; for (t in s) m[t] = !1; C(document, "keydown", function (e) { p(e, i) }), C(document, "keyup", d), C(window, "focus", v); var k = e.key; e.key = m, e.key.setScope = E, e.key.getScope = S, e.key.deleteScope = x, e.key.filter = w, e.key.isPressed = y, e.key.getPressedKeyCodes = b, e.key.noConflict = L, e.key.unbind = g, typeof module != "undefined" && (module.exports = key) })(this);

function movePage(relPos) {
  var pageNavigation = document.getElementsByClassName("pagination a1");
  pageNavigation = pageNavigation[pageNavigation.length - 1]; // select the last one
  var currentPage = parseInt(pageNavigation.getElementsByTagName("strong")[0].innerText);
  var pageLinks = pageNavigation.getElementsByTagName("a");
  var newPage = currentPage + relPos;
  for (var i = 0; i < pageLinks.length; ++i) {
    if (pageLinks[i].innerText === '이전') { // 첫 페이지 링크 따라가지 않도록 함
      break;
    }
  }
  if (newPage < 1) {
    alert("가장 최신 글입니다!");
  } else {
    if (relPos != 0) {
      location.href = pageLinks[i].href.replace(/page=\d+/, "page=" + newPage);
    } else {
      location.href = pageLinks[i].href.replace(/page=\d+/, "page=" + 1) + "&pluginAction=3";
    }
  }
}

function moveArticle(relPos, refresh) {
  var boardList = document.getElementsByClassName("boardList")[0];
  var articles = boardList.getElementsByTagName("tr");
  var currentArticle = document.evaluate(".//img[@src='/modules/board/skins/xe_board_hancoma_title/images/common/iconArrowD8.gif']", boardList, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
  if (currentArticle !== null) {
    for (var i = 1; i < articles.length; i++) {
      if (articles[i] === currentArticle.parentNode.parentNode) {
        break;
      }
    }
    if ((i == 1 && relPos == -1) || (i == articles.length - 1 && relPos == 1)) {
      if (refresh) {
        location.href = location.href + '?pluginAction=' + (relPos + 2);
      } else {
        movePage(relPos);
      }
    } else {
      location.href = articles[i + relPos].getElementsByTagName("a")[0].href;
    }
  } else if (!refresh) {
    if (relPos == 1) {
      for (var i = 1; i < articles.length; i++) {
        if (articles[i].className !== "notice") {
          break;
        }
      }
    } else if (relPos == -1) {
      var i = articles.length - 1;
    }
    location.href = articles[i].getElementsByTagName("a")[0].href;
  }
}

var pluginAction = location.href.match(/pluginAction\=(\d+)/);
if (pluginAction !== null) {
  moveArticle(parseInt(pluginAction[1]) - 2, false);
}

// 설정 데이터 가져오기
chrome.extension.sendRequest({ method: "getLocalStorage" }, function (myLocalStorage_) {
  myLocalStorage = myLocalStorage_;

  var content = document.getElementById("content");

  var link = document.evaluate(".//a[contains(@href, 'todayhumor.co.kr')]", content, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < link.snapshotLength; i++) {
    var thisLink = link.snapshotItem(i);
    thisLink.setAttribute("class", thisLink.href);
    thisLink.addEventListener('click', function () {
      chrome.runtime.sendMessage({ action: "openLink", link: thisLink.className });
    });
    thisLink.href = "javascript:void(0)";
  }

  if (JSON.parse(myLocalStorage["enabled_zero"])) {
    var zero = document.evaluate(".//img[@src='http://www.ilbe.com/modules/point/icons/default_ilbe/0.gif']", content, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < zero.snapshotLength; i++) {
      var zerorow = zero.snapshotItem(i).parentNode.parentNode.parentNode;
      if (zerorow.className === "replyIndent" || zerorow.className === "userInfo") {
        zerorow = zerorow.parentNode;
      }
      zerorow.setAttribute("style", "background:#" + myLocalStorage["bgcolor_zerolevel"]);
    }
  }

  var watchlist = myLocalStorage["watchlist"].split(',');
  if (watchlist.length > 0) {
    var member = document.evaluate(".//div[starts-with(@class, 'member_')]", content, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < member.snapshotLength; i++) {
      var thisMember = member.snapshotItem(i);
      if (watchlist.indexOf(thisMember.className.split('_')[1]) > -1) {
        thisMember = thisMember.parentNode.parentNode;
        if (thisMember.className === "replyIndent" || thisMember.className === "userInfo") {
          thisMember = thisMember.parentNode;
        }
        thisMember.setAttribute("style", "background:#" + myLocalStorage["bgcolor_zerolevel"]);
      }
    }
  }

  // 저격 기능 추가
  var popupMenu = document.getElementById("popup_menu_area");
  popupMenu.addEventListener('DOMSubtreeModified', function () {
    var items = popupMenu.getElementsByTagName("li");
    var memberInfoPos = -1;
    var sniperPos = -1;
    for (var i = 0; i < items.length; ++i) {
      if (items[i].innerText === "회원 정보 보기") {
        memberInfoPos = i;
      }
      else if (items[i].innerText === "조준하기(구글)") {
        sniperPos = i;
      }
    }
    if (sniperPos == -1) {
      var image = chrome.extension.getURL("snipe.gif")
      var image2 = chrome.extension.getURL("add.gif")
      //var sniperNode = document.createElement("li");
      //sniperNode.setAttribute("style", "background-image:url('" + image + "')");
      //var sniperLink = document.createElement("a");
      //sniperLink.innerText = "조준하기(일베레이더)";
      var googlesniperNode = document.createElement("li");
      googlesniperNode.setAttribute("style", "background-image:url('" + image + "')");
      var googlesniperLink = document.createElement("a");
      googlesniperLink.innerText = "조준하기(구글)";
      var addwatchlistNode = document.createElement("li");
      addwatchlistNode.setAttribute("style", "background-image:url('" + image2 + "')");
      var addwatchlistLink = document.createElement("a");
      addwatchlistLink.innerText = "와치리스트에 추가하기";
      // http://www.ilbe.com/index.php?mid=ilbe&act=dispMemberInfo&member_srl=$$$ 
      var memberInfoHref = items[memberInfoPos].getElementsByTagName("a")[0].href; // 멤버 정보 보는 주소
      var memberSrl = memberInfoHref.match(/member_srl\=(\d+)/)[1];
      if (memberSrl !== undefined) {
        //sniperLink.href = "http://ilberadar.com/search.php?mid=" + memberSrl;
        //sniperLink.target = "_blank";
        googlesniperLink.href = "http://www.google.co.kr/search?q=site%3Ailbe.com+" + memberSrl;
        googlesniperLink.target = "_blank";
        addwatchlistLink.href = "javascript:void(0)";
        addwatchlistLink.setAttribute("class", memberSrl);
        if (watchlist.indexOf(memberSrl) > -1) {
          addwatchlistLink.addEventListener('click', function () {
            chrome.runtime.sendMessage({ action: "removeWatchlist", link: addwatchlistLink.className });
          });
          addwatchlistLink.innerText = "와치리스트에서 제거하기";
        } else {
          addwatchlistLink.addEventListener('click', function () {
            chrome.runtime.sendMessage({ action: "addWatchlist", link: addwatchlistLink.className });
          });
        }
      }
      //sniperNode.appendChild(sniperLink);
      googlesniperNode.appendChild(googlesniperLink);
      addwatchlistNode.appendChild(addwatchlistLink);
      //popupMenu.getElementsByTagName("ul")[0].appendChild(sniperNode);
      popupMenu.getElementsByTagName("ul")[0].appendChild(googlesniperNode);
      popupMenu.getElementsByTagName("ul")[0].appendChild(addwatchlistNode);
    }
  });

  if (JSON.parse(myLocalStorage["enabled_noala"])) {
    // 노알라 기능
    table_nodes = document.getElementsByTagName("table");
    for (var i = 0; i < table_nodes.length; ++i) {
      tr_node = table_nodes[i].getElementsByTagName("tr");
      for (var j = 0; j < tr_node.length; ++j) {
        td_node = tr_node[j].getElementsByTagName("td");
        var titleNode = null;
        for (var k = 0; k < td_node.length; ++k) {
          var classValue = td_node[k].getAttribute("class");
          if (classValue == "title") {
            titleNode = td_node[k];
          }
          else if (classValue == "recommend") {
            var count = Number(td_node[k].innerHTML);
            if (count != NaN) {
              var noalaCount = Math.floor(count / parseInt(myLocalStorage["noala_count"]));
              if (noalaCount > parseInt(myLocalStorage["noala_maxcount"]))
                noalaCount = parseInt(myLocalStorage["noala_maxcount"]);
              iconURL = chrome.extension.getURL("noala.png");

              for (var kk = 0; kk < noalaCount; ++kk) {
                var meter = document.createElement('img');
                meter.src = iconURL;
                titleNode.appendChild(meter);
              }
            }
          }
        }
      }
    }
  }

  key(myLocalStorage["keybinding_yes"], function () { if (JSON.parse(myLocalStorage["enabled_yn"])) { document.getElementsByTagName("button").item(0).click(); } });
  key(myLocalStorage["keybinding_no"], function () { if (JSON.parse(myLocalStorage["enabled_yn"])) { document.getElementsByTagName("button").item(1).click(); } });
  key(myLocalStorage["keybinding_scrap"], function () {
    if (JSON.parse(myLocalStorage["enabled_scrap"])) {
      document.getElementsByClassName("document_popup_menu").item(0).children.item(0).click();

      var scrap_link_elem = null;

      var repeat = 0;
      var checker_timer_id = setInterval(function () {
        repeat++;
        if (repeat > 10) {
          clearInterval(checker_timer_id);
        }
        else {
          if (scrap_link_elem == null) {
            scrap_link_elem = document.evaluate('//*[@id="popup_menu_area"]/ul/li[4]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (scrap_link_elem != null) {
              if (scrap_link_elem.getAttribute('onclick').indexOf("procMemberScrapDocument") != -1) {
                scrap_link_elem.click();
              }
              else {
                scrap_link_elem = document.evaluate('//*[@id="popup_menu_area"]/ul/li[2]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                if (scrap_link_elem.getAttribute('onclick').indexOf("procMemberScrapDocument") != -1) {
                  scrap_link_elem.click();
                }
              }
            }
          }
        }
      }, 250);
    }
  });
  key(myLocalStorage["keybinding_prevarticle"], function () {
    if (JSON.parse(myLocalStorage["enabled_page"])) {
      moveArticle(-1, true);
    }
  });
  key(myLocalStorage["keybinding_nextarticle"], function () {
    if (JSON.parse(myLocalStorage["enabled_page"])) {
      moveArticle(1, true);
    }
  });
  key(myLocalStorage["keybinding_prevpage"], function () {
    if (JSON.parse(myLocalStorage["enabled_page"])) {
      movePage(-1);
    }
  });
  key(myLocalStorage["keybinding_nextpage"], function () {
    if (JSON.parse(myLocalStorage["enabled_page"])) {
      movePage(1);
    }
  });
  key(myLocalStorage["keybinding_newest"], function () {
    if (JSON.parse(myLocalStorage["enabled_newest"])) {
      movePage(0);
    }
  });
  key(myLocalStorage["keybinding_reply"], function () {
    if (JSON.parse(myLocalStorage["enabled_reply"])) {
      document.getElementById("editor_1").focus(function () {
        document.getElementById("editor_1").select();
      });
      return false;
    }
  });
});
