(function () {
    "use strict";
    !function (e, n, t, i, o, r) { var a = 4e3, c = "xnpe_async_hide"; function s(e) { return e.reduce((function (e, n) { return e[n] = function () { e._.push([n.toString(), arguments]) }, e }), { _: [] }) } function m(e, n, t) { var i = t.createElement(n); i.src = e; var o = t.getElementsByTagName(n)[0]; return o.parentNode.insertBefore(i, o), i } r.target = r.target || "https://api.exponea.com", r.file_path = r.file_path || r.target + "/js/exponea.min.js", e[t] = s(["anonymize", "initialize", "identify", "update", "track", "trackLink", "trackEnhancedEcommerce", "getHtml", "showHtml", "showBanner", "showWebLayer", "ping", "getAbTest", "loadDependency", "getRecommendation", "reloadWebLayers"]), e[t].notifications = s(["isAvailable", "isSubscribed", "subscribe", "unsubscribe"]), e[t].snippetVersion = "v2.1.0", function (e, n, t) { e[n]["_" + t] = {}, e[n]["_" + t].nowFn = e[t] && e[t].now ? e[t].now.bind(e[t]) : Date.now, e[n]["_" + t].snippetStartTime = e[n]["_" + t].nowFn() }(e, t, "performance"), function (e, n, t, i, o, r) { e[o] = { sdk: e[i], sdkObjectName: i, skipExperiments: !!t.new_experiments, sign: t.token + "/" + (r.exec(n.cookie) || ["", "new"])[1], path: t.target } }(e, n, r, t, o, RegExp("__exponea_etc__" + "=([\w-]+)")), function (e, n, t) { m(e.file_path, n, t) }(r, i, n), function (e, n, t, i, o, r, s) { if (e.new_experiments) { !0 === e.new_experiments && (e.new_experiments = {}); var p = e.new_experiments.hide_class || c, u = e.new_experiments.timeout || a, _ = encodeURIComponent(r.location.href.split("#")[0]), l = e.target + "/webxp/" + n + "/" + r[t].sign + "/modifications.min.js?http-referer=" + _ + "&timeout=" + u + "ms"; "sync" === e.new_experiments.mode && r.localStorage.getItem("__exponea__sync_modifications__") ? function (e, n, t, i, o) { t[o][n] = "<" + n + ' src="' + e + '"></' + n + ">", i.writeln(t[o][n]), i.writeln("<" + n + ">!" + o + ".init && document.writeln(" + o + "." + n + '.replace("/' + n + '/", "/' + n + '-async/").replace("><", " async><"))</' + n + ">") }(l, n, r, s, t) : function (e, n, t, i, o, r, a, c) { r.documentElement.classList.add(e); var s = m(t, i, r); function p() { o[c].init || m(t.replace("/" + i + "/", "/" + i + "-async/"), i, r) } function u() { r.documentElement.classList.remove(e) } s.onload = p, s.onerror = p, o.setTimeout(u, n), o[a]._revealPage = u }(p, u, l, n, r, s, o, t) } }(r, i, o, 0, t, e, n), function (e, n, t) { e[n].start = function (i) { i && Object.keys(i).forEach((function (e) { return t[e] = i[e] })), e[n].initialize(t) } }(e, t, r) }(window, document, "exponea", "script", "webxpClient", {
        target: "https://fcg-api.exponea.com",
        token: "5518b744-9170-11e8-8823-0a580a201a47",
        // replace with current customer ID or leave commented out for an anonymous customer
        // customer: window.currentUserId,
    });
    exponea.start();


})()
