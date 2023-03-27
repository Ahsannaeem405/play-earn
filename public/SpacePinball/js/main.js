/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function () {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        f = "undefined" !== typeof module && module.exports, e = function () {
            for (var e, d = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "),
                "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], c = 0, g = d.length, b = {}; c < g; c++) if ((e = d[c]) && e[1] in a) {
                for (c = 0; c < e.length; c++) b[d[0][c]] = e[c];
                return b
            }
            return !1
        }(), c = {change: e.fullscreenchange, error: e.fullscreenerror}, g = {
            request: function (c) {
                return new Promise(function (d, k) {
                    var l = function () {
                        this.off("change",
                            l);
                        d()
                    }.bind(this);
                    this.on("change", l);
                    c = c || a.documentElement;
                    Promise.resolve(c[e.requestFullscreen]())["catch"](k)
                }.bind(this))
            }, exit: function () {
                return new Promise(function (c, d) {
                    if (this.isFullscreen) {
                        var k = function () {
                            this.off("change", k);
                            c()
                        }.bind(this);
                        this.on("change", k);
                        Promise.resolve(a[e.exitFullscreen]())["catch"](d)
                    } else c()
                }.bind(this))
            }, toggle: function (a) {
                return this.isFullscreen ? this.exit() : this.request(a)
            }, onchange: function (a) {
                this.on("change", a)
            }, onerror: function (a) {
                this.on("error", a)
            },
            on: function (e, d) {
                var l = c[e];
                l && a.addEventListener(l, d, !1)
            }, off: function (e, d) {
                var l = c[e];
                l && a.removeEventListener(l, d, !1)
            }, raw: e
        };
    e ? (Object.defineProperties(g, {
        isFullscreen: {
            get: function () {
                return !!a[e.fullscreenElement]
            }
        }, element: {
            enumerable: !0, get: function () {
                return a[e.fullscreenElement]
            }
        }, isEnabled: {
            enumerable: !0, get: function () {
                return !!a[e.fullscreenEnabled]
            }
        }
    }), f ? module.exports = g : window.screenfull = g) : f ? module.exports = {isEnabled: !1} : window.screenfull = {isEnabled: !1}
})();
(function () {
    function a(b) {
        b = String(b);
        return b.charAt(0).toUpperCase() + b.slice(1)
    }

    function f(b, a) {
        var d = -1, e = b ? b.length : 0;
        if ("number" == typeof e && -1 < e && e <= t) for (; ++d < e;) a(b[d], d, b); else c(b, a)
    }

    function e(b) {
        b = String(b).replace(/^ +| +$/g, "");
        return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b)
    }

    function c(b, a) {
        for (var d in b) r.call(b, d) && a(b[d], d, b)
    }

    function g(b) {
        return null == b ? a(b) : v.call(b).slice(8, -1)
    }

    function k(b, a) {
        var d = null != b ? typeof b[a] : "number";
        return !/^(?:boolean|number|string|undefined)$/.test(d) &&
            ("object" == d ? !!b[a] : !0)
    }

    function d(b) {
        return String(b).replace(/([ -])(?!$)/g, "$1?")
    }

    function l(b, a) {
        var d = null;
        f(b, function (e, c) {
            d = a(d, e, c, b)
        });
        return d
    }

    function m(b) {
        function a(a) {
            return l(a, function (a, c) {
                var h = c.pattern || d(c);
                !a && (a = RegExp("\\b" + h + " *\\d+[.\\w_]*", "i").exec(b) || RegExp("\\b" + h + " *\\w+-[\\w]*", "i").exec(b) || RegExp("\\b" + h + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(b)) && ((a = String(c.label && !RegExp(h, "i").test(c.label) ? c.label : a).split("/"))[1] && !/[\d.]+/.test(a[0]) && (a[0] +=
                    " " + a[1]), c = c.label || c, a = e(a[0].replace(RegExp(h, "i"), c).replace(RegExp("; *(?:" + c + "[_-])?", "i"), " ").replace(RegExp("(" + c + ")[-_.]?(\\w)", "i"), "$1 $2")));
                return a
            })
        }

        function h(a) {
            return l(a, function (a, d) {
                return a || (RegExp(d + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(b) || 0)[1] || null
            })
        }

        var f = q, n = b && "object" == typeof b && "String" != g(b);
        n && (f = b, b = null);
        var t = f.navigator || {}, r = t.userAgent || "";
        b || (b = r);
        var y = n ? !!t.likeChrome : /\bChrome\b/.test(b) && !/internal|\n/i.test(v.toString()),
            D = n ? "Object" : "ScriptBridgingProxyObject", R = n ? "Object" : "Environment",
            L = n && f.java ? "JavaPackage" : g(f.java), V = n ? "Object" : "RuntimeObject";
        R = (L = /\bJava/.test(L) && f.java) && g(f.environment) == R;
        var W = L ? "a" : "\u03b1", X = L ? "b" : "\u03b2", S = f.document || {}, J = f.operamini || f.opera,
            N = x.test(N = n && J ? J["[[Class]]"] : g(J)) ? N : J = null, p, O = b;
        n = [];
        var P = null, K = b == r;
        r = K && J && "function" == typeof J.version && J.version();
        var B = function (a) {
                return l(a, function (a, c) {
                    return a || RegExp("\\b" + (c.pattern || d(c)) + "\\b", "i").exec(b) && (c.label ||
                        c)
                })
            }([{label: "EdgeHTML", pattern: "Edge"}, "Trident", {
                label: "WebKit",
                pattern: "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]), u = function (a) {
                return l(a, function (a, c) {
                    return a || RegExp("\\b" + (c.pattern || d(c)) + "\\b", "i").exec(b) && (c.label || c)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                label: "Microsoft Edge",
                pattern: "Edge"
            }, "Midori", "Nook Browser",
                "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {label: "Opera", pattern: "OPR"}, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {label: "Firefox", pattern: "(?:Firefox|Minefield)"}, {label: "Firefox for iOS", pattern: "FxiOS"},
                {label: "IE", pattern: "IEMobile"}, {label: "IE", pattern: "MSIE"}, "Safari"]),
            C = a([{label: "BlackBerry", pattern: "BB10"}, "BlackBerry", {
                label: "Galaxy S",
                pattern: "GT-I9000"
            }, {label: "Galaxy S2", pattern: "GT-I9100"}, {
                label: "Galaxy S3",
                pattern: "GT-I9300"
            }, {label: "Galaxy S4", pattern: "GT-I9500"}, {label: "Galaxy S5", pattern: "SM-G900"}, {
                label: "Galaxy S6",
                pattern: "SM-G920"
            }, {label: "Galaxy S6 Edge", pattern: "SM-G925"}, {
                label: "Galaxy S7",
                pattern: "SM-G930"
            }, {label: "Galaxy S7 Edge", pattern: "SM-G935"}, "Google TV", "Lumia", "iPad",
                "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {label: "Xbox 360", pattern: "Xbox"}, "Xoom"]), H = function (a) {
                return l(a, function (a, c, e) {
                    return a || (c[C] || c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)] || RegExp("\\b" + d(e) + "(?:\\b|\\w*\\d)", "i").exec(b)) && e
                })
            }({
                Apple: {iPad: 1, iPhone: 1, iPod: 1},
                Archos: {},
                Amazon: {Kindle: 1, "Kindle Fire": 1},
                Asus: {Transformer: 1},
                "Barnes & Noble": {Nook: 1},
                BlackBerry: {PlayBook: 1},
                Google: {"Google TV": 1, Nexus: 1},
                HP: {TouchPad: 1},
                HTC: {},
                LG: {},
                Microsoft: {Xbox: 1, "Xbox One": 1},
                Motorola: {Xoom: 1},
                Nintendo: {"Wii U": 1, Wii: 1},
                Nokia: {Lumia: 1},
                Samsung: {"Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1},
                Sony: {PlayStation: 1, "PlayStation Vita": 1}
            }), w = function (a) {
                return l(a, function (a, c) {
                    var h = c.pattern || d(c);
                    if (!a && (a = RegExp("\\b" + h + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(b))) {
                        var q = a, f = c.label || c, l = {
                            "10.0": "10",
                            "6.4": "10 Technical Preview",
                            "6.3": "8.1",
                            "6.2": "8",
                            "6.1": "Server 2008 R2 / 7",
                            "6.0": "Server 2008 / Vista",
                            "5.2": "Server 2003 / XP 64-bit",
                            "5.1": "XP",
                            "5.01": "2000 SP1",
                            "5.0": "2000",
                            "4.0": "NT",
                            "4.90": "ME"
                        };
                        h && f && /^Win/i.test(q) && !/^Windows Phone /i.test(q) && (l = l[/[\d.]+$/.exec(q)]) && (q = "Windows " + l);
                        q = String(q);
                        h && f && (q = q.replace(RegExp(h, "i"), f));
                        a = q = e(q.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/,
                            " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    return a
                })
            }(["Windows Phone", "Android", "CentOS", {
                label: "Chrome OS",
                pattern: "CrOS"
            }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac",
                "Windows 98;", "Windows "]);
        B && (B = [B]);
        H && !C && (C = a([H]));
        if (p = /\bGoogle TV\b/.exec(C)) C = p[0];
        /\bSimulator\b/i.test(b) && (C = (C ? C + " " : "") + "Simulator");
        "Opera Mini" == u && /\bOPiOS\b/.test(b) && n.push("running in Turbo/Uncompressed mode");
        "IE" == u && /\blike iPhone OS\b/.test(b) ? (p = m(b.replace(/like iPhone OS/, "")), H = p.manufacturer, C = p.product) : /^iP/.test(C) ? (u || (u = "Safari"), w = "iOS" + ((p = / OS ([\d_]+)/i.exec(b)) ? " " + p[1].replace(/_/g, ".") : "")) : "Konqueror" != u || /buntu/i.test(w) ? H && "Google" != H && (/Chrome/.test(u) &&
            !/\bMobile Safari\b/i.test(b) || /\bVita\b/.test(C)) || /\bAndroid\b/.test(w) && /^Chrome/.test(u) && /\bVersion\//i.test(b) ? (u = "Android Browser", w = /\bAndroid\b/.test(w) ? w : "Android") : "Silk" == u ? (/\bMobi/i.test(b) || (w = "Android", n.unshift("desktop mode")), /Accelerated *= *true/i.test(b) && n.unshift("accelerated")) : "PaleMoon" == u && (p = /\bFirefox\/([\d.]+)\b/.exec(b)) ? n.push("identifying as Firefox " + p[1]) : "Firefox" == u && (p = /\b(Mobile|Tablet|TV)\b/i.exec(b)) ? (w || (w = "Firefox OS"), C || (C = p[1])) : !u || (p = !/\bMinefield\b/i.test(b) &&
            /\b(?:Firefox|Safari)\b/.exec(u)) ? (u && !C && /[\/,]|^[^(]+?\)/.test(b.slice(b.indexOf(p + "/") + 8)) && (u = null), (p = C || H || w) && (C || H || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(w)) && (u = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(w) ? w : p) + " Browser")) : "Electron" == u && (p = (/\bChrome\/([\d.]+)\b/.exec(b) || 0)[1]) && n.push("Chromium " + p) : w = "Kubuntu";
        r || (r = h(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", d(u), "(?:Firefox|Minefield|NetFront)"]));
        if (p = "iCab" == B && 3 < parseFloat(r) && "WebKit" || /\bOpera\b/.test(u) && (/\bOPR\b/.test(b) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(b) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(b) && ("Mac OS" == w ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(u) && "NetFront") B = [p];
        "IE" == u && (p = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(b) || 0)[1]) ? (u += " Mobile", w = "Windows Phone " + (/\+$/.test(p) ? p : p + ".x"), n.unshift("desktop mode")) : /\bWPDesktop\b/i.test(b) ? (u = "IE Mobile", w = "Windows Phone 8.x",
            n.unshift("desktop mode"), r || (r = (/\brv:([\d.]+)/.exec(b) || 0)[1])) : "IE" != u && "Trident" == B && (p = /\brv:([\d.]+)/.exec(b)) && (u && n.push("identifying as " + u + (r ? " " + r : "")), u = "IE", r = p[1]);
        if (K) {
            if (k(f, "global")) if (L && (p = L.lang.System, O = p.getProperty("os.arch"), w = w || p.getProperty("os.name") + " " + p.getProperty("os.version")), R) {
                try {
                    r = f.require("ringo/engine").version.join("."), u = "RingoJS"
                } catch (U) {
                    (p = f.system) && p.global.system == f.system && (u = "Narwhal", w || (w = p[0].os || null))
                }
                u || (u = "Rhino")
            } else "object" == typeof f.process &&
            !f.process.browser && (p = f.process) && ("object" == typeof p.versions && ("string" == typeof p.versions.electron ? (n.push("Node " + p.versions.node), u = "Electron", r = p.versions.electron) : "string" == typeof p.versions.nw && (n.push("Chromium " + r, "Node " + p.versions.node), u = "NW.js", r = p.versions.nw)), u || (u = "Node.js", O = p.arch, w = p.platform, r = (r = /[\d.]+/.exec(p.version)) ? r[0] : null)); else g(p = f.runtime) == D ? (u = "Adobe AIR", w = p.flash.system.Capabilities.os) : g(p = f.phantom) == V ? (u = "PhantomJS", r = (p = p.version || null) && p.major + "." + p.minor +
                "." + p.patch) : "number" == typeof S.documentMode && (p = /\bTrident\/(\d+)/i.exec(b)) ? (r = [r, S.documentMode], (p = +p[1] + 4) != r[1] && (n.push("IE " + r[1] + " mode"), B && (B[1] = ""), r[1] = p), r = "IE" == u ? String(r[1].toFixed(1)) : r[0]) : "number" == typeof S.documentMode && /^(?:Chrome|Firefox)\b/.test(u) && (n.push("masking as " + u + " " + r), u = "IE", r = "11.0", B = ["Trident"], w = "Windows");
            w = w && e(w)
        }
        r && (p = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(r) || /(?:alpha|beta)(?: ?\d)?/i.exec(b + ";" + (K && t.appMinorVersion)) || /\bMinefield\b/i.test(b) &&
            "a") && (P = /b/i.test(p) ? "beta" : "alpha", r = r.replace(RegExp(p + "\\+?$"), "") + ("beta" == P ? X : W) + (/\d+\+?/.exec(p) || ""));
        if ("Fennec" == u || "Firefox" == u && /\b(?:Android|Firefox OS)\b/.test(w)) u = "Firefox Mobile"; else if ("Maxthon" == u && r) r = r.replace(/\.[\d.]+/, ".x"); else if (/\bXbox\b/i.test(C)) "Xbox 360" == C && (w = null), "Xbox 360" == C && /\bIEMobile\b/.test(b) && n.unshift("mobile mode"); else if (!/^(?:Chrome|IE|Opera)$/.test(u) && (!u || C || /Browser|Mobi/.test(u)) || "Windows CE" != w && !/Mobi/i.test(b)) if ("IE" == u && K) try {
            null === f.external &&
            n.unshift("platform preview")
        } catch (U) {
            n.unshift("embedded")
        } else (/\bBlackBerry\b/.test(C) || /\bBB10\b/.test(b)) && (p = (RegExp(C.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(b) || 0)[1] || r) ? (p = [p, /BB10/.test(b)], w = (p[1] ? (C = null, H = "BlackBerry") : "Device Software") + " " + p[0], r = null) : this != c && "Wii" != C && (K && J || /Opera/.test(u) && /\b(?:MSIE|Firefox)\b/i.test(b) || "Firefox" == u && /\bOS X (?:\d+\.){2,}/.test(w) || "IE" == u && (w && !/^Win/.test(w) && 5.5 < r || /\bWindows XP\b/.test(w) && 8 < r || 8 == r && !/\bTrident\b/.test(b))) && !x.test(p =
            m.call(c, b.replace(x, "") + ";")) && p.name && (p = "ing as " + p.name + ((p = p.version) ? " " + p : ""), x.test(u) ? (/\bIE\b/.test(p) && "Mac OS" == w && (w = null), p = "identify" + p) : (p = "mask" + p, u = N ? e(N.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(p) && (w = null), K || (r = null)), B = ["Presto"], n.push(p)); else u += " Mobile";
        if (p = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(b) || 0)[1]) {
            p = [parseFloat(p.replace(/\.(\d)$/, ".0$1")), p];
            if ("Safari" == u && "+" == p[1].slice(-1)) u = "WebKit Nightly", P = "alpha", r = p[1].slice(0, -1); else if (r == p[1] || r == (p[2] =
                (/\bSafari\/([\d.]+\+?)/i.exec(b) || 0)[1])) r = null;
            p[1] = (/\bChrome\/([\d.]+)/i.exec(b) || 0)[1];
            537.36 == p[0] && 537.36 == p[2] && 28 <= parseFloat(p[1]) && "WebKit" == B && (B = ["Blink"]);
            K && (y || p[1]) ? (B && (B[1] = "like Chrome"), p = p[1] || (p = p[0], 530 > p ? 1 : 532 > p ? 2 : 532.05 > p ? 3 : 533 > p ? 4 : 534.03 > p ? 5 : 534.07 > p ? 6 : 534.1 > p ? 7 : 534.13 > p ? 8 : 534.16 > p ? 9 : 534.24 > p ? 10 : 534.3 > p ? 11 : 535.01 > p ? 12 : 535.02 > p ? "13+" : 535.07 > p ? 15 : 535.11 > p ? 16 : 535.19 > p ? 17 : 536.05 > p ? 18 : 536.1 > p ? 19 : 537.01 > p ? 20 : 537.11 > p ? "21+" : 537.13 > p ? 23 : 537.18 > p ? 24 : 537.24 > p ? 25 : 537.36 > p ? 26 : "Blink" !=
            B ? "27" : "28")) : (B && (B[1] = "like Safari"), p = (p = p[0], 400 > p ? 1 : 500 > p ? 2 : 526 > p ? 3 : 533 > p ? 4 : 534 > p ? "4+" : 535 > p ? 5 : 537 > p ? 6 : 538 > p ? 7 : 601 > p ? 8 : "8"));
            B && (B[1] += " " + (p += "number" == typeof p ? ".x" : /[.+]/.test(p) ? "" : "+"));
            "Safari" == u && (!r || 45 < parseInt(r)) && (r = p)
        }
        "Opera" == u && (p = /\bzbov|zvav$/.exec(w)) ? (u += " ", n.unshift("desktop mode"), "zvav" == p ? (u += "Mini", r = null) : u += "Mobile", w = w.replace(RegExp(" *" + p + "$"), "")) : "Safari" == u && /\bChrome\b/.exec(B && B[1]) && (n.unshift("desktop mode"), u = "Chrome Mobile", r = null, /\bOS X\b/.test(w) ? (H =
            "Apple", w = "iOS 4.3+") : w = null);
        r && 0 == r.indexOf(p = /[\d.]+$/.exec(w)) && -1 < b.indexOf("/" + p + "-") && (w = String(w.replace(p, "")).replace(/^ +| +$/g, ""));
        B && !/\b(?:Avant|Nook)\b/.test(u) && (/Browser|Lunascape|Maxthon/.test(u) || "Safari" != u && /^iOS/.test(w) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(u) && B[1]) && (p = B[B.length - 1]) && n.push(p);
        n.length && (n = ["(" + n.join("; ") + ")"]);
        H && C && 0 > C.indexOf(H) && n.push("on " + H);
        C && n.push((/^on /.test(n[n.length -
        1]) ? "" : "on ") + C);
        if (w) {
            var T = (p = / ([\d.+]+)$/.exec(w)) && "/" == w.charAt(w.length - p[0].length - 1);
            w = {
                architecture: 32,
                family: p && !T ? w.replace(p[0], "") : w,
                version: p ? p[1] : null,
                toString: function () {
                    var b = this.version;
                    return this.family + (b && !T ? " " + b : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }
        }
        (p = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(O)) && !/\bi686\b/i.test(O) ? (w && (w.architecture = 64, w.family = w.family.replace(RegExp(" *" + p), "")), u && (/\bWOW64\b/i.test(b) || K && /\w(?:86|32)$/.test(t.cpuClass || t.platform) && !/\bWin64; x64\b/i.test(b)) &&
        n.unshift("32-bit")) : w && /^OS X/.test(w.family) && "Chrome" == u && 39 <= parseFloat(r) && (w.architecture = 64);
        b || (b = null);
        f = {};
        f.description = b;
        f.layout = B && B[0];
        f.manufacturer = H;
        f.name = u;
        f.prerelease = P;
        f.product = C;
        f.ua = b;
        f.version = u && r;
        f.os = w || {
            architecture: null, family: null, version: null, toString: function () {
                return "null"
            }
        };
        f.parse = m;
        f.toString = function () {
            return this.description || ""
        };
        f.version && n.unshift(r);
        f.name && n.unshift(u);
        w && u && (w != String(w).split(" ")[0] || w != u.split(" ")[0] && !C) && n.push(C ? "(" + w + ")" : "on " +
            w);
        n.length && (f.description = n.join(" "));
        return f
    }

    var b = {"function": !0, object: !0}, q = b[typeof window] && window || this, h = b[typeof exports] && exports;
    b = b[typeof module] && module && !module.nodeType && module;
    var n = h && b && "object" == typeof global && global;
    !n || n.global !== n && n.window !== n && n.self !== n || (q = n);
    var t = Math.pow(2, 53) - 1, x = /\bOpera/;
    n = Object.prototype;
    var r = n.hasOwnProperty, v = n.toString, y = m();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (q.platform = y, define(function () {
        return y
    })) : h &&
    b ? c(y, function (b, a) {
        h[a] = b
    }) : q.platform = y
}).call(this);

function buildIOSMeta() {
    for (var a = [{
        name: "viewport",
        content: "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
    }, {name: "apple-mobile-web-app-capable", content: "yes"}, {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
    }], f = 0; f < a.length; f++) {
        var e = document.createElement("meta");
        e.name = a[f].name;
        e.content = a[f].content;
        var c = window.document.head.querySelector('meta[name="' + e.name + '"]');
        c && c.parentNode.removeChild(c);
        window.document.head.appendChild(e)
    }
}

function hideIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "none");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
    jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se")
}

function buildIOSFullscreenPanel() {
    jQuery("body").append('<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>')
}

function showIOSFullscreenPanel() {
    jQuery(".xxx-ios-fullscreen-message").css("display", "block");
    jQuery(".xxx-ios-fullscreen-scroll").css("display", "block")
}

function __iosResize() {
    window.scrollTo(0, 0);
    if ("iPhone" === platform.product) switch (window.devicePixelRatio) {
        case 2:
            switch (window.innerWidth) {
                case 568:
                    320 !== window.innerHeight && jQuery(".xxx-game-iframe-full").addClass("xxx-game-iframe-iphone-se");
                    break;
                case 667:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        case 3:
            switch (window.innerWidth) {
                case 736:
                    414 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                case 724:
                    375 === window.innerHeight ? hideIOSFullscreenPanel() : showIOSFullscreenPanel();
                    break;
                default:
                    hideIOSFullscreenPanel()
            }
            break;
        default:
            hideIOSFullscreenPanel()
    }
}

function iosResize() {
    __iosResize();
    setTimeout(function () {
        __iosResize()
    }, 500)
}

$(document).ready(function () {
    platform && "iPhone" === platform.product && (buildIOSFullscreenPanel(), buildIOSMeta())
});
jQuery(window).resize(function () {
    platform && "iPhone" === platform.product && iosResize()
});
var s_iScaleFactor = 1, s_iOffsetX, s_iOffsetY, s_bIsIphone = !1;
(function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function () {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function getSize(a) {
    var f = a.toLowerCase(), e = window.document, c = e.documentElement;
    if (void 0 === window["inner" + a]) a = c["client" + a]; else if (window["inner" + a] != c["client" + a]) {
        var g = e.createElement("body");
        g.id = "vpw-test-b";
        g.style.cssText = "overflow:scroll";
        var k = e.createElement("div");
        k.id = "vpw-test-d";
        k.style.cssText = "position:absolute;top:-1000px";
        k.innerHTML = "<style>@media(" + f + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + f + ":7px!important}}</style>";
        g.appendChild(k);
        c.insertBefore(g, e.head);
        a = 7 == k["offset" + a] ? c["client" + a] : window["inner" + a];
        c.removeChild(g)
    } else a = window["inner" + a];
    return a
}

window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isMobile() {
    return isIpad() ? !0 : jQuery.browser.mobile
}

function isIpad() {
    var a = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad");
    return !a && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints ? !0 : a
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    if (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone")) return s_bIsIphone = !0;
    for (; a.length;) if (navigator.platform === a.pop()) return s_bIsIphone = !0;
    return s_bIsIphone = !1
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = "safari" === platform.name.toLowerCase() ? getIOSWindowHeight() : getSize("Height");
        var f = getSize("Width");
        _checkOrientation(f, a);
        var e = Math.min(a / CANVAS_HEIGHT, f / CANVAS_WIDTH), c = Math.round(CANVAS_WIDTH * e);
        e = Math.round(CANVAS_HEIGHT * e);
        if (e < a) {
            var g = a - e;
            e += g;
            c += CANVAS_WIDTH / CANVAS_HEIGHT * g
        } else c < f && (g = f - c, c += g, e += CANVAS_HEIGHT / CANVAS_WIDTH * g);
        g = a / 2 - e / 2;
        var k = f / 2 - c / 2, d = CANVAS_WIDTH / c;
        if (k * d < -EDGEBOARD_X || g * d < -EDGEBOARD_Y) e = Math.min(a / (CANVAS_HEIGHT -
            2 * EDGEBOARD_Y), f / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = Math.round(CANVAS_WIDTH * e), e = Math.round(CANVAS_HEIGHT * e), g = (a - e) / 2, k = (f - c) / 2, d = CANVAS_WIDTH / c;
        s_iOffsetX = -1 * k * d;
        s_iOffsetY = -1 * g * d;
        0 <= g && (s_iOffsetY = 0);
        0 <= k && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * c, s_oStage.canvas.height = 2 * e, canvas.style.width = c + "px", canvas.style.height =
            e + "px", s_iScaleFactor = 2 * Math.min(c / CANVAS_WIDTH, e / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor) : s_bMobile || isChrome() ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", e + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = e, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, e / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > g || (g = (a - e) / 2);
        $("#canvas").css("top", g + "px");
        $("#canvas").css("left", k + "px");
        if (DEBUG_BOX2D) {
            if (s_bMobile || isChrome()) $("#debug").css("width",
                c + "px"), $("#debug").css("height", e + "px");
            0 > g ? $("#debug").css("top", g + "px") : (g = (a - e) / 2, $("#canvas").css("top", g + "px"));
            $("#debug").css("left", k + "px")
        }
        fullscreenHandler()
    }
}

function _checkOrientation(a, f) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > f ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function playSound(a, f, e) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(f), s_aSounds[a].loop(e), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, f) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(f)
}

function setMute(a, f) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(f)
}

function fadeSound(a, f, e, c) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].fade(f, e, c)
}

function soundPlaying(a) {
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) return s_aSounds[a].playing()
}

function createBitmap(a, f, e) {
    var c = new createjs.Bitmap(a), g = new createjs.Shape;
    f && e ? g.graphics.beginFill("#fff").drawRect(0, 0, f, e) : g.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    c.hitArea = g;
    return c
}

function createSprite(a, f, e, c, g, k) {
    a = null !== f ? new createjs.Sprite(a, f) : new createjs.Sprite(a);
    f = new createjs.Shape;
    f.graphics.beginFill("#000000").drawRect(-e, -c, g, k);
    a.hitArea = f;
    return a
}

function pad(a, f, e) {
    a += "";
    return a.length >= f ? a : Array(f - a.length + 1).join(e || "0") + a
}

function linearFunction(a, f, e, c, g) {
    return (a - f) * (g - c) / (e - f) + c
}

function randomFloatBetween(a, f, e) {
    "undefined" === typeof e && (e = 2);
    return parseFloat(Math.min(a + Math.random() * (f - a), f).toFixed(e))
}

function rotateVector2D(a, f) {
    var e = f.getX() * Math.cos(a) + f.getY() * Math.sin(a), c = f.getX() * -Math.sin(a) + f.getY() * Math.cos(a);
    f.set(e, c)
}

function tweenVectorsOnX(a, f, e) {
    return a + e * (f - a)
}

function shuffle(a) {
    for (var f = a.length, e, c; 0 !== f;) c = Math.floor(Math.random() * f), --f, e = a[f], a[f] = a[c], a[c] = e;
    return a
}

function bubbleSort(a) {
    do {
        var f = !1;
        for (var e = 0; e < a.length - 1; e++) a[e] > a[e + 1] && (f = a[e], a[e] = a[e + 1], a[e + 1] = f, f = !0)
    } while (f)
}

function compare(a, f) {
    return a.index > f.index ? -1 : a.index < f.index ? 1 : 0
}

function easeLinear(a, f, e, c) {
    return e * a / c + f
}

function easeInQuad(a, f, e, c) {
    return e * (a /= c) * a + f
}

function easeInSine(a, f, e, c) {
    return -e * Math.cos(a / c * (Math.PI / 2)) + e + f
}

function easeInCubic(a, f, e, c) {
    return e * (a /= c) * a * a + f
}

function getTrajectoryPoint(a, f) {
    var e = new createjs.Point, c = (1 - a) * (1 - a), g = a * a;
    e.x = c * f.start.x + 2 * (1 - a) * a * f.traj.x + g * f.end.x;
    e.y = c * f.start.y + 2 * (1 - a) * a * f.traj.y + g * f.end.y;
    return e
}

function formatTime(a) {
    a /= 1E3;
    var f = Math.floor(a / 60);
    a = parseFloat(a - 60 * f).toFixed(1);
    var e = "";
    e = 10 > f ? e + ("0" + f + ":") : e + (f + ":");
    return 10 > a ? e + ("0" + a) : e + a
}

function degreesToRadians(a) {
    return a * Math.PI / 180
}

function checkRectCollision(a, f) {
    var e = getBounds(a, .9);
    var c = getBounds(f, .98);
    return calculateIntersection(e, c)
}

function calculateIntersection(a, f) {
    var e, c, g, k;
    var d = a.x + (e = a.width / 2);
    var l = a.y + (c = a.height / 2);
    var m = f.x + (g = f.width / 2);
    var b = f.y + (k = f.height / 2);
    d = Math.abs(d - m) - (e + g);
    l = Math.abs(l - b) - (c + k);
    return 0 > d && 0 > l ? (d = Math.min(Math.min(a.width, f.width), -d), l = Math.min(Math.min(a.height, f.height), -l), {
        x: Math.max(a.x, f.x),
        y: Math.max(a.y, f.y),
        width: d,
        height: l,
        rect1: a,
        rect2: f
    }) : null
}

function getBounds(a, f) {
    var e = {x: Infinity, y: Infinity, width: 0, height: 0};
    if (a instanceof createjs.Container) {
        e.x2 = -Infinity;
        e.y2 = -Infinity;
        var c = a.children, g = c.length, k;
        for (k = 0; k < g; k++) {
            var d = getBounds(c[k], 1);
            d.x < e.x && (e.x = d.x);
            d.y < e.y && (e.y = d.y);
            d.x + d.width > e.x2 && (e.x2 = d.x + d.width);
            d.y + d.height > e.y2 && (e.y2 = d.y + d.height)
        }
        Infinity == e.x && (e.x = 0);
        Infinity == e.y && (e.y = 0);
        Infinity == e.x2 && (e.x2 = 0);
        Infinity == e.y2 && (e.y2 = 0);
        e.width = e.x2 - e.x;
        e.height = e.y2 - e.y;
        delete e.x2;
        delete e.y2
    } else {
        if (a instanceof createjs.Bitmap) {
            g =
                a.sourceRect || a.image;
            k = g.width * f;
            var l = g.height * f
        } else if (a instanceof createjs.Sprite) if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
            g = a.spriteSheet.getFrame(a.currentFrame);
            k = g.rect.width;
            l = g.rect.height;
            c = g.regX;
            var m = g.regY
        } else e.x = a.x || 0, e.y = a.y || 0; else e.x = a.x || 0, e.y = a.y || 0;
        c = c || 0;
        k = k || 0;
        m = m || 0;
        l = l || 0;
        e.regX = c;
        e.regY = m;
        g = a.localToGlobal(0 - c, 0 - m);
        d = a.localToGlobal(k - c, l - m);
        k = a.localToGlobal(k - c, 0 - m);
        c = a.localToGlobal(0 - c, l - m);
        e.x =
            Math.min(Math.min(Math.min(g.x, d.x), k.x), c.x);
        e.y = Math.min(Math.min(Math.min(g.y, d.y), k.y), c.y);
        e.width = Math.max(Math.max(Math.max(g.x, d.x), k.x), c.x) - e.x;
        e.height = Math.max(Math.max(Math.max(g.y, d.y), k.y), c.y) - e.y
    }
    return e
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
    for (var f = a.length, e, c; 0 < f;) c = Math.floor(Math.random() * f), f--, e = a[f], a[f] = a[c], a[c] = e;
    return a
}

NoClickDelay.prototype = {
    handleEvent: function (a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    }, onTouchStart: function (a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    }, onTouchMove: function (a) {
        this.moved = !0
    }, onTouchEnd: function (a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 == a.nodeType && (a = a.parentNode);
            var f = document.createEvent("MouseEvents");
            f.initEvent("click", !0, !0);
            a.dispatchEvent(f)
        }
    }
};
(function () {
    function a(a) {
        var c = {
            focus: "visible",
            focusin: "visible",
            pageshow: "visible",
            blur: "hidden",
            focusout: "hidden",
            pagehide: "hidden"
        };
        a = a || window.event;
        a.type in c ? document.body.className = c[a.type] : (document.body.className = this[f] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
    }

    var f = "hidden";
    f in document ? document.addEventListener("visibilitychange", a) : (f = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (f = "webkitHidden") in
    document ? document.addEventListener("webkitvisibilitychange", a) : (f = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var f = window.location.search.substring(1).split("&"), e = 0; e < f.length; e++) {
        var c = f[e].split("=");
        if (c[0] == a) return c[1]
    }
}

String.prototype.format = function () {
    for (var a = this, f = arguments.length; f--;) a = a.replace(new RegExp("\\{" + f + "\\}", "gm"), arguments[f]);
    return a
};

function fullscreenHandler() {
    ENABLE_FULLSCREEN && screenfull.isEnabled && (s_bFullscreen = screenfull.isFullscreen, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}

if (screenfull.isEnabled) screenfull.on("change", function () {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
    var a = {}, f, e, c, g, k, d;
    this.init = function (a, m, b) {
        f = {};
        c = e = 0;
        g = a;
        k = m;
        d = b
    };
    this.addSprite = function (c, d) {
        if (!a.hasOwnProperty(c)) {
            var b = new Image;
            a[c] = f[c] = {szPath: d, oSprite: b, bLoaded: !1};
            e++
        }
    };
    this.getSprite = function (c) {
        return a.hasOwnProperty(c) ? a[c].oSprite : null
    };
    this._onSpritesLoaded = function () {
        e = 0;
        k.call(d)
    };
    this._onSpriteLoaded = function () {
        g.call(d);
        ++c === e && this._onSpritesLoaded()
    };
    this.loadSprites = function () {
        for (var a in f) f[a].oSprite.oSpriteLibrary = this, f[a].oSprite.szKey =
            a, f[a].oSprite.onload = function () {
            this.oSpriteLibrary.setLoaded(this.szKey);
            this.oSpriteLibrary._onSpriteLoaded(this.szKey)
        }, f[a].oSprite.onerror = function (a) {
            var b = a.currentTarget;
            setTimeout(function () {
                f[b.szKey].oSprite.src = f[b.szKey].szPath
            }, 500)
        }, f[a].oSprite.src = f[a].szPath
    };
    this.setLoaded = function (c) {
        a[c].bLoaded = !0
    };
    this.isLoaded = function (c) {
        return a[c].bLoaded
    };
    this.getNumSprites = function () {
        return e
    }
}

var CANVAS_WIDTH = 768, CANVAS_HEIGHT = 1280, CANVAS_WIDTH_HALF = CANVAS_WIDTH / 2,
    CANVAS_HEIGHT_HALF = CANVAS_HEIGHT / 2, EDGEBOARD_X = 100, EDGEBOARD_Y = 140, GAME_NAME = "pinball",
    PRIMARY_FONT = "walibi0615bold", SECONDARY_FONT = "Digital", PRIMARY_FONT_COLOUR = "#fff600",
    SOUNDTRACK_VOLUME_IN_GAME = 1, FPS = 60, FPS_TIME = 1E3 / FPS, DISABLE_SOUND_MOBILE = !1, STATE_LOADING = 0,
    STATE_MENU = 1, STATE_HELP = 1, STATE_GAME = 3, ON_MOUSE_DOWN = 0, ON_MOUSE_UP = 1, ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3, ON_DRAG_START = 4, ON_DRAG_END = 5, ON_INCREASE_JACKPOT = 6, ON_INCREASE_SCORE =
        7, CONTACT_BEGIN = 0, CONTACT_END = 1, CONTACT_PRESOLVE = 2, CONTACT_POSTSOLVE = 3, SETTINGS_HEIGHT = 240,
    TODEGREE_PROPORTION = 180 / Math.PI, ZOOM_TABLE_SIZE = {w: 1, h: 1}, BALL_OUT_SAFE_LIMIT = 40, DEBUG_BOX2D = !1,
    DEBUG_BOX2D_ALPHA = .2, WORLD_SCALE = 100, GRAVITY = 13.6, GENERAL_RESTITUTION = .33, GENERAL_FRICTION = .7,
    ZOOM = 1, ZOOM_PER_WORLDSCALE = ZOOM * WORLD_SCALE, BALL_STARTPOS = {x: 1092, y: 1770}, BALL_RADIUS = 28,
    LERP_SLOW = {x: .01, y: .01}, LERP_FOLLOW_BALL = {x: .05, y: .15}, NUM_BALL = 3, SHIELD_ACTIVATION_THRESHOLD = 3,
    EXTRABALL_JACKPOT_SCORE_ACTIVATION =
        5E5, FLIPPER_STRENGTH = 18, SPRING_MAX_STRENGTH = 1, iY = 1300,
    LETTERS_POSITION = [{x: 300, y: iY}, {x: 360, y: iY}, {x: 440, y: iY}, {x: 530, y: iY}, {x: 630, y: iY}, {
        x: 720,
        y: iY
    }, {x: 810, y: iY}], MAX_MULTIPLIER = 7, TIME_ROUTER_SCORE_DECREASE = 2E4, SCORE_RATIO_TO_ADD_AT_JACKPOT = 2,
    TIME_LAST_ACTIVE_JACKPOT = 9E4, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION, TEXT_PRELOADER_CONTINUE = "START",
    TEXT_ARE_SURE = "ARE YOU SURE?", TEXT_PAUSE = "PAUSE",
    TEXT_HELP1 = "USE KEYS TO MOVE THE FLIPPERS AND LAUNCH THE BALL",
    TEXT_HELP2 = "TRY TO EARN AS MANY POINTS AS POSSIBLE!",
    TEXT_HELP1_MOBILE = "CLICK ON THE LEFT OR RIGHT SIDE OF THE SCREEN TO MOVE THE FLIPPERS ACCORDINGLY",
    TEXT_IOS_PRIVATE = 'Your web browser does not support storing settings locally. In Safari, the most common cause of this is using "Private Browsing Mode". Some info may not save or some features may not work properly',
    TEXT_DEVELOPED = "DEVELOPED BY", TEXT_MULTI = "MULTI", TEXT_SHIELD = "SHIELD", TEXT_EXTRABALL = "EXTRA BALL",
    TEXT_HOLE_VALUE = "1K 5K 10K 50K 100K 500K 1M".split(" "), TEXT_ROUTER_VALUE = "50 100 200 500 1k 2k 5k".split(" "),
    TEXT_SHARE_IMAGE = "200x200.jpg", TEXT_SHARE_TITLE = "Congratulations!", TEXT_SHARE_MSG1 = "You collected <strong>",
    TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
    TEXT_SHARE_SHARE1 = "My score is ", TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
    var a, f, e, c, g, k, d, l, m, b;
    this._init = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
        s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
        s_oSpriteLibrary.loadSprites();
        b = new createjs.Container;
        s_oStage.addChild(b)
    };
    this.unload = function () {
        b.removeAllChildren();
        m.unload()
    };
    this._onImagesLoaded = function () {
    };
    this._onAllImagesLoaded = function () {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function () {
        var q = new createjs.Shape;
        q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.addChild(q);
        q = s_oSpriteLibrary.getSprite("200x200");
        d = createBitmap(q);
        d.regX = .5 * q.width;
        d.regY = .5 * q.height;
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2 - 180;
        b.addChild(d);
        l = new createjs.Shape;
        l.graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(d.x - 100, d.y - 100, 200, 200, 10);
        b.addChild(l);
        d.mask = l;
        q = s_oSpriteLibrary.getSprite("progress_bar");
        c = createBitmap(q);
        c.x = CANVAS_WIDTH / 2 - q.width / 2;
        c.y = CANVAS_HEIGHT / 2 + 50;
        b.addChild(c);
        a = q.width;
        f = q.height;
        g = new createjs.Shape;
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, 1, f);
        b.addChild(g);
        c.mask = g;
        e = new createjs.Text("", "30px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2 + 100;
        e.textBaseline = "alphabetic";
        e.textAlign = "center";
        b.addChild(e);
        q = s_oSpriteLibrary.getSprite("but_start");
        m = new CTextButton(CANVAS_WIDTH /
            2, CANVAS_HEIGHT / 2, q, TEXT_PRELOADER_CONTINUE, "Arial", "#000", "bold 50", b);
        m.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
        m.setVisible(!1);
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        b.addChild(k);
        createjs.Tween.get(k).to({alpha: 0}, 500).call(function () {
            createjs.Tween.removeTweens(k);
            b.removeChild(k)
        })
    };
    this._onButStartRelease = function () {
        s_oMain._onRemovePreloader()
    };
    this.refreshLoader = function (b) {
        e.text = b + "%";
        100 === b && (s_oMain._onRemovePreloader(),
            e.visible = !1, c.visible = !1);
        g.graphics.clear();
        b = Math.floor(b * a / 100);
        g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(c.x, c.y, b, f)
    };
    this._init()
}

function CMain(a) {
    var f, e = 0, c = 0, g = STATE_LOADING, k, d;
    this.initContainer = function () {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = isMobile();
        !1 === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function (a) {
            return !1
        }));
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;
        navigator.userAgent.match(/Windows Phone/i) &&
        (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        k = new CPreloader;
        s_oLocalStorage = new CLocalStorage(GAME_NAME)
    };
    this.preloaderReady = function () {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || this._initSounds();
        this._loadImages();
        f = !0
    };
    this.soundLoaded = function () {
        e++;
        k.refreshLoader(Math.floor(e / c * 100))
    };
    this._initSounds = function () {
        Howler.mute(!s_bAudioActive);
        s_aSoundsInfo = [];
        s_aSoundsInfo.push({path: "./sounds/", filename: "soundtrack", loop: !0, volume: 1, ingamename: "soundtrack"});
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "press_button", loop: !1, volume: 1, ingamename: "click"
        });
        s_aSoundsInfo.push({path: "./sounds/", filename: "game_over", loop: !1, volume: 1, ingamename: "game_over"});
        s_aSoundsInfo.push({path: "./sounds/", filename: "start_game", loop: !1, volume: 1, ingamename: "start_game"});
        s_aSoundsInfo.push({path: "./sounds/", filename: "launch", loop: !1, volume: 1, ingamename: "launch"});
        s_aSoundsInfo.push({path: "./sounds/", filename: "toggle", loop: !1, volume: 1, ingamename: "toggle"});
        s_aSoundsInfo.push({
            path: "./sounds/", filename: "gate",
            loop: !1, volume: 1, ingamename: "gate"
        });
        s_aSoundsInfo.push({path: "./sounds/", filename: "bumper", loop: !1, volume: 1, ingamename: "bumper"});
        s_aSoundsInfo.push({path: "./sounds/", filename: "jumper", loop: !1, volume: 1, ingamename: "jumper"});
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "pinball_button_on",
            loop: !1,
            volume: 1,
            ingamename: "pinball_button_on"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "pinball_button_off",
            loop: !1,
            volume: 1,
            ingamename: "pinball_button_off"
        });
        s_aSoundsInfo.push({
            path: "./sounds/", filename: "in_hole",
            loop: !1, volume: 1, ingamename: "in_hole"
        });
        s_aSoundsInfo.push({path: "./sounds/", filename: "out_hole", loop: !1, volume: 1, ingamename: "out_hole"});
        s_aSoundsInfo.push({path: "./sounds/", filename: "flipper", loop: !1, volume: 1, ingamename: "flipper"});
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "all_letters_complete",
            loop: !1,
            volume: 1,
            ingamename: "all_letters_complete"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "all_lights_on_1",
            loop: !1,
            volume: 1,
            ingamename: "all_lights_on_1"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "all_lights_on_2", loop: !1, volume: 1, ingamename: "all_lights_on_2"
        });
        s_aSoundsInfo.push({path: "./sounds/", filename: "letter", loop: !1, volume: 1, ingamename: "letter"});
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "bonus_win_1",
            loop: !1,
            volume: 1,
            ingamename: "bonus_win_1"
        });
        s_aSoundsInfo.push({
            path: "./sounds/",
            filename: "bonus_win_2",
            loop: !1,
            volume: 1,
            ingamename: "bonus_win_2"
        });
        s_aSoundsInfo.push({path: "./sounds/", filename: "ball_out", loop: !1, volume: 1, ingamename: "ball_out"});
        c += s_aSoundsInfo.length;
        s_aSounds =
            [];
        for (var a = 0; a < s_aSoundsInfo.length; a++) this.tryToLoadSound(s_aSoundsInfo[a], !1)
    };
    this.tryToLoadSound = function (a, b) {
        setTimeout(function () {
            s_aSounds[a.ingamename] = new Howl({
                src: [a.path + a.filename + ".mp3"],
                autoplay: !1,
                preload: !0,
                loop: a.loop,
                volume: a.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function (b, a) {
                    for (var c = 0; c < s_aSoundsInfo.length; c++) if (b === s_aSounds[s_aSoundsInfo[c].ingamename]._sounds[0]._id) {
                        s_oMain.tryToLoadSound(s_aSoundsInfo[c], !0);
                        break
                    }
                },
                onplayerror: function (b) {
                    for (var a = 0; a < s_aSoundsInfo.length; a++) if (b ===
                        s_aSounds[s_aSoundsInfo[a].ingamename]._sounds[0]._id) {
                        s_aSounds[s_aSoundsInfo[a].ingamename].once("unlock", function () {
                            s_aSounds[s_aSoundsInfo[a].ingamename].play();
                            "soundtrack" === s_aSoundsInfo[a].ingamename && null !== s_oGame && setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME)
                        });
                        break
                    }
                }
            })
        }, b ? 200 : 0)
    };
    this._loadImages = function () {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("credits_panel", "./sprites/credits_panel.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
        s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
        s_oSpriteLibrary.addSprite("score_panel", "./sprites/score_panel.png");
        s_oSpriteLibrary.addSprite("keys", "./sprites/keys.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("hand_anim", "./sprites/hand_anim.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_settings", "./sprites/but_settings.png");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("bestscore",
            "./sprites/bestscore.png");
        s_oSpriteLibrary.addSprite("extra_ball", "./sprites/extra_ball.png");
        s_oSpriteLibrary.addSprite("star", "./sprites/star.png");
        s_oSpriteLibrary.addSprite("pinball_bg", "./sprites/pinball_elements/pinball_bg.jpg");
        s_oSpriteLibrary.addSprite("multiplier_light", "./sprites/pinball_elements/multiplier_light.png");
        s_oSpriteLibrary.addSprite("multiplier_toggle_light", "./sprites/pinball_elements/multiplier_toggle_light.png");
        s_oSpriteLibrary.addSprite("bumper", "./sprites/pinball_elements/bumper.png");
        s_oSpriteLibrary.addSprite("bumper_button", "./sprites/pinball_elements/bumper_button.png");
        s_oSpriteLibrary.addSprite("capsule_0", "./sprites/pinball_elements/capsule_0.png");
        s_oSpriteLibrary.addSprite("capsule_1", "./sprites/pinball_elements/capsule_1.png");
        s_oSpriteLibrary.addSprite("capsule_2", "./sprites/pinball_elements/capsule_2.png");
        s_oSpriteLibrary.addSprite("capsule_3", "./sprites/pinball_elements/capsule_3.png");
        for (var a = 0; 6 > a; a++) s_oSpriteLibrary.addSprite("button_light_" + a, "./sprites/pinball_elements/button_light_" +
            a + ".png");
        s_oSpriteLibrary.addSprite("curve_light_button", "./sprites/pinball_elements/curve_light_button.png");
        s_oSpriteLibrary.addSprite("light_indicator_0", "./sprites/pinball_elements/light_indicator_0.png");
        s_oSpriteLibrary.addSprite("light_indicator_1", "./sprites/pinball_elements/light_indicator_1.png");
        s_oSpriteLibrary.addSprite("light_indicator_2", "./sprites/pinball_elements/light_indicator_2.png");
        for (a = 0; 7 > a; a++) s_oSpriteLibrary.addSprite("router_light_" + a, "./sprites/pinball_elements/router_light_" +
            a + ".png");
        s_oSpriteLibrary.addSprite("curve_tunnel", "./sprites/pinball_elements/curve_tunnel.png");
        s_oSpriteLibrary.addSprite("eye", "./sprites/pinball_elements/eye.png");
        s_oSpriteLibrary.addSprite("arrow_light_0", "./sprites/pinball_elements/arrow_light_0.png");
        s_oSpriteLibrary.addSprite("arrow_light_1", "./sprites/pinball_elements/arrow_light_1.png");
        for (a = 0; 7 > a; a++) s_oSpriteLibrary.addSprite("letter_" + a, "./sprites/pinball_elements/letter_" + a + ".png");
        s_oSpriteLibrary.addSprite("logo", "./sprites/pinball_elements/logo.png");
        s_oSpriteLibrary.addSprite("jackpot", "./sprites/pinball_elements/jackpot.png");
        s_oSpriteLibrary.addSprite("tunnel_start", "./sprites/pinball_elements/tunnel_start.png");
        s_oSpriteLibrary.addSprite("arrow_start", "./sprites/pinball_elements/arrow_start.png");
        s_oSpriteLibrary.addSprite("start_platform", "./sprites/pinball_elements/start_platform.png");
        s_oSpriteLibrary.addSprite("spring", "./sprites/pinball_elements/spring.png");
        s_oSpriteLibrary.addSprite("flipper_bumper", "./sprites/pinball_elements/flipper_bumper.png");
        s_oSpriteLibrary.addSprite("hole", "./sprites/pinball_elements/hole.png");
        s_oSpriteLibrary.addSprite("shield", "./sprites/pinball_elements/shield.png");
        s_oSpriteLibrary.addSprite("jumper", "./sprites/pinball_elements/jumper.png");
        s_oSpriteLibrary.addSprite("safe_pin", "./sprites/pinball_elements/safe_pin.png");
        s_oSpriteLibrary.addSprite("gate", "./sprites/pinball_elements/gate.png");
        s_oSpriteLibrary.addSprite("ball", "./sprites/pinball_elements/ball.png");
        s_oSpriteLibrary.addSprite("flipper", "./sprites/pinball_elements/flipper.png");
        c += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function () {
        e++;
        k.refreshLoader(Math.floor(e / c * 100))
    };
    this._onAllImagesLoaded = function () {
    };
    this._onRemovePreloader = function () {
        k.unload();
        s_oSoundtrack = playSound("soundtrack", 1, !0);
        this.gotoMenu()
    };
    this.gotoMenu = function () {
        new CMenu;
        g = STATE_MENU
    };
    this.gotoGame = function () {
        d = new CGame(l);
        g = STATE_GAME
    };
    this.gotoHelp = function () {
        new CHelp;
        g = STATE_HELP
    };
    this.stopUpdate = function () {
        f = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display",
            "block");
        Howler.mute(!0)
    };
    this.startUpdate = function () {
        s_iPrevTime = (new Date).getTime();
        f = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        s_bAudioActive && Howler.mute(!1)
    };
    this._update = function (a) {
        if (!1 !== f) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            g === STATE_GAME && d.update();
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    var l = a;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION =
        a.check_orientation;
    s_bAudioActive = a.audio_enable_on_startup;
    this.initContainer()
}

var s_bMobile, s_bAudioActive = !1, s_iCntTime = 0, s_iTimeElaps = 0, s_iPrevTime = 0, s_iCntFps = 0, s_iCurFps = 0,
    s_bFullscreen = !1, s_aSounds = [], s_aSoundsInfo = [], s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary,
    s_oSoundtrack, s_oCanvas, s_oLocalStorage;

function CTextButton(a, f, e, c, g, k, d, l) {
    var m, b, q, h, n, t, x;
    this._init = function (a, c, d, e, f, k, g) {
        m = [];
        b = [];
        q = [];
        var l = createBitmap(d);
        n = new createjs.Text(e, g + "px " + f, k);
        n.textAlign = "center";
        n.textBaseline = "middle";
        n.getBounds();
        n.x = d.width / 2;
        n.y = Math.floor(d.height / 2);
        h = new createjs.Container;
        h.x = a;
        h.y = c;
        h.regX = d.width / 2;
        h.regY = d.height / 2;
        h.addChild(l, n);
        r.addChild(h);
        s_bMobile || (h.cursor = "pointer");
        this._initListener()
    };
    this.unload = function () {
        h.off("mousedown", t);
        h.off("pressup", x);
        r.removeChild(h)
    };
    this.setVisible =
        function (b) {
            h.visible = b
        };
    this._initListener = function () {
        oParent = this;
        t = h.on("mousedown", this.buttonDown);
        x = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, c, d) {
        b[a] = c;
        q[a] = d
    };
    this.buttonRelease = function () {
        h.scaleX = 1;
        h.scaleY = 1;
        playSound("click", 1, !1);
        b[ON_MOUSE_UP] && b[ON_MOUSE_UP].call(q[ON_MOUSE_UP], m[ON_MOUSE_UP])
    };
    this.buttonDown = function () {
        h.scaleX = .9;
        h.scaleY = .9;
        b[ON_MOUSE_DOWN] && b[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN], m[ON_MOUSE_DOWN])
    };
    this.addEventListenerWithParams = function (a,
                                                c, d, e) {
        b[a] = c;
        q[a] = d;
        m[a] = e
    };
    this.setTextPosition = function (b) {
        n.y = b
    };
    this.setPosition = function (b, a) {
        h.x = b;
        h.y = a
    };
    this.setX = function (b) {
        h.x = b
    };
    this.setY = function (b) {
        h.y = b
    };
    this.getButtonImage = function () {
        return h
    };
    this.getX = function () {
        return h.x
    };
    this.getY = function () {
        return h.y
    };
    var r = l;
    this._init(a, f, e, c, g, k, d);
    return this
}

function CToggle(a, f, e, c, g) {
    var k, d, l, m, b, q, h;
    this._init = function (a, c, d, e, f) {
        b = [];
        q = [];
        var g = new createjs.SpriteSheet({
            images: [d],
            frames: {width: d.width / 2, height: d.height, regX: d.width / 2 / 2, regY: d.height / 2},
            animations: {state_true: [0], state_false: [1]}
        });
        k = e;
        h = createSprite(g, "state_" + k, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        h.x = a;
        h.y = c;
        h.stop();
        f.addChild(h);
        this._initListener()
    };
    this.unload = function () {
        s_bMobile ? h.off("mousedown", d) : (h.off("mousedown", d), h.off("mouseover", m));
        h.off("pressup", l);
        g.removeChild(h)
    };
    this._initListener = function () {
        s_bMobile ? d = h.on("mousedown", this.buttonDown) : (d = h.on("mousedown", this.buttonDown), m = h.on("mouseover", this.buttonOver));
        l = h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, c, d) {
        b[a] = c;
        q[a] = d
    };
    this.addText = function () {
    };
    this.setActive = function (b) {
        k = b;
        h.gotoAndStop("state_" + k)
    };
    this.buttonRelease = function () {
        h.scaleX = 1;
        h.scaleY = 1;
        playSound("click", 1, !1);
        k = !k;
        h.gotoAndStop("state_" + k);
        b[ON_MOUSE_UP] && b[ON_MOUSE_UP].call(q[ON_MOUSE_UP], k)
    };
    this.buttonDown =
        function () {
            h.scaleX = .9;
            h.scaleY = .9;
            b[ON_MOUSE_DOWN] && b[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN])
        };
    this.buttonOver = function (b) {
        s_bMobile || (b.target.cursor = "pointer")
    };
    this.setPosition = function (b, a) {
        h.x = b;
        h.y = a
    };
    this.getButtonImage = function () {
        return h
    };
    this._init(a, f, e, c, g)
}

function CGfxButton(a, f, e, c) {
    var g, k, d, l, m, b, q, h = [], n;
    this._init = function (a, c, d, e) {
        g = !1;
        k = 1;
        b = [];
        q = [];
        n = createBitmap(d);
        n.x = a;
        n.y = c;
        n.scaleX = n.scaleY = k;
        n.regX = d.width / 2;
        n.regY = d.height / 2;
        e.addChild(n);
        this._initListener()
    };
    this.unload = function () {
        s_bMobile ? n.off("mousedown", d) : (n.off("mousedown", d), n.off("mouseover", m));
        n.off("pressup", l);
        c.removeChild(n)
    };
    this.setVisible = function (b) {
        n.visible = b
    };
    this.setClickable = function (b) {
        g = !b
    };
    this._initListener = function () {
        s_bMobile ? d = n.on("mousedown", this.buttonDown) :
            (d = n.on("mousedown", this.buttonDown), m = n.on("mouseover", this.buttonOver));
        l = n.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function (a, c, d) {
        b[a] = c;
        q[a] = d
    };
    this.addEventListenerWithParams = function (a, c, d, e) {
        b[a] = c;
        q[a] = d;
        h = e
    };
    this.buttonRelease = function () {
        g || (n.scaleX = k, n.scaleY = k, b[ON_MOUSE_UP] && b[ON_MOUSE_UP].call(q[ON_MOUSE_UP], h))
    };
    this.buttonDown = function () {
        g || (n.scaleX = .9 * k, n.scaleY = .9 * k, playSound("click", 1, !1), b[ON_MOUSE_DOWN] && b[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN], h))
    };
    this.buttonOver =
        function (b) {
            s_bMobile || g || (b.target.cursor = "pointer")
        };
    this.pulseAnimation = function () {
        createjs.Tween.get(n).to({scaleX: 1.1 * k, scaleY: 1.1 * k}, 850, createjs.Ease.quadOut).to({
            scaleX: k,
            scaleY: k
        }, 650, createjs.Ease.quadIn).call(function () {
            t.pulseAnimation()
        })
    };
    this.trembleAnimation = function () {
        createjs.Tween.get(n).to({rotation: 5}, 75, createjs.Ease.quadOut).to({rotation: -5}, 140, createjs.Ease.quadIn).to({rotation: 0}, 75, createjs.Ease.quadIn).wait(750).call(function () {
            t.trebleAnimation()
        })
    };
    this.setPosition = function (b,
                                 a) {
        n.x = b;
        n.y = a
    };
    this.setX = function (b) {
        n.x = b
    };
    this.setY = function (b) {
        n.y = b
    };
    this.getButtonImage = function () {
        return n
    };
    this.getX = function () {
        return n.x
    };
    this.getY = function () {
        return n.y
    };
    var t = this;
    this._init(a, f, e, c);
    return this
}

function CMenu() {
    var a, f, e, c, g, k, d, l, m, b, q, h, n, t, x = null, r = null;
    this._init = function () {
        d = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(d);
        var v = s_oSpriteLibrary.getSprite("but_play");
        l = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 300, v, s_oStage);
        l.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        v = s_oSpriteLibrary.getSprite("but_credits");
        g = v.width / 2 + 10;
        k = v.height / 2 + 10;
        q = new CGfxButton(g, k, v, s_oStage);
        q.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
        if (!1 === DISABLE_SOUND_MOBILE ||
            !1 === s_bMobile) v = s_oSpriteLibrary.getSprite("audio_icon"), e = CANVAS_WIDTH - v.width / 4 - 10, c = v.height / 2 + 10, b = new CToggle(e, c, v, s_bAudioActive, s_oStage), b.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        var y = window.document;
        v = y.documentElement;
        x = v.requestFullscreen || v.mozRequestFullScreen || v.webkitRequestFullScreen || v.msRequestFullscreen;
        r = y.exitFullscreen || y.mozCancelFullScreen || y.webkitExitFullscreen || y.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (x = !1);
        x && screenfull.isEnabled && (v = s_oSpriteLibrary.getSprite("but_fullscreen"),
            a = g + v.width / 2 + 10, f = v.height / 2 + 10, h = new CToggle(a, f, v, s_bFullscreen, s_oStage), h.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        v = s_oSpriteLibrary.getSprite("logo");
        n = new CLightIndicator(v, CANVAS_WIDTH_HALF, CANVAS_HEIGHT_HALF - 100, s_oStage);
        t = [];
        for (y = 0; 7 > y; y++) v = s_oSpriteLibrary.getSprite("letter_" + y), v = new CLightIndicator(v, LETTERS_POSITION[y].x + -170, LETTERS_POSITION[y].y + -600, s_oStage), t.push(v);
        this.animLogo();
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH,
            CANVAS_HEIGHT);
        s_oStage.addChild(m);
        createjs.Tween.get(m).to({alpha: 0}, 1E3).call(function () {
            m.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_oLocalStorage.isUsed() || new CMsgBox(TEXT_IOS_PRIVATE)
    };
    this.unload = function () {
        l.unload();
        l = null;
        m.visible = !1;
        q.unload();
        n.unload();
        for (var a = 0; a < t.length; a++) t[a].unload();
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b.unload(), b = null;
        x && screenfull.isEnabled && h.unload();
        s_oStage.removeAllChildren();
        s_oMenu = d = null
    };
    this.refreshButtonPos = function (d,
                                      l) {
        q.setPosition(g + d, l + k);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || b.setPosition(e - d, l + c);
        x && screenfull.isEnabled && h.setPosition(a + d, f + l)
    };
    this.animLogo = function () {
        n.slowHighlight(2E3, 0, function () {
        });
        for (var b = 0; b < t.length; b++) t[b].slowHighlight(2E3, 1500, s_oMenu.animLogo)
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onCreditsBut = function () {
        new CCreditsPanel
    };
    this.resetFullscreenBut = function () {
        x && screenfull.isEnabled && h.setActive(s_bFullscreen)
    };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? r.call(window.document) : x.call(window.document.documentElement);
        sizeHandler()
    };
    this._onButPlayRelease = function () {
        this.unload();
        $(s_oMain).trigger("start_session");
        s_oMain.gotoGame()
    };
    s_oMenu = this;
    this._init()
}

var s_oMenu = null;

function CGame(a) {
    function f(b) {
        b || (b = window.event);
        b.preventDefault();
        switch (b.keyCode) {
            case 37:
                g = !0;
                d || (d = !0, n.shiftElementsToLeft(), playSound("flipper", 1, !1));
                break;
            case 39:
                k = !0;
                d || (d = !0, n.shiftElementsToRight(), playSound("flipper", 1, !1));
                break;
            case 40:
                d || (d = !0, s_oTable.loadSpring())
        }
    }

    function e(b) {
        b || (b = window.event);
        b.preventDefault();
        d = !1;
        switch (b.keyCode) {
            case 37:
                g = !1;
                break;
            case 39:
                k = !1;
                break;
            case 40:
                s_oTable.releaseSpring()
        }
    }

    var c, g, k, d, l, m, b, q, h = null, n, t, x, r, v, y, D, E, I, A, z, G, Q, F, M;
    this._init =
        function () {
            m = l = d = k = g = c = !1;
            b = NUM_BALL;
            M = {x: LERP_SLOW.x, y: LERP_SLOW.y};
            new CPhysicsController;
            new CObjectBuilder;
            new CSCoreController;
            t = s_oObjectBuilder.addBall(BALL_RADIUS, BALL_STARTPOS.x, BALL_STARTPOS.y, .1, .7, 0);
            A = new createjs.Container;
            A.scaleX = A.scaleY = ZOOM;
            s_oStage.addChild(A);
            z = new createjs.Container;
            A.addChild(z);
            G = new createjs.Container;
            A.addChild(G);
            v = new createjs.Shape;
            v.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            s_oStage.addChild(v);
            n = new CTable(z, G);
            F = {x: BALL_STARTPOS.x * ZOOM + CANVAS_WIDTH / 2, y: BALL_STARTPOS.y * ZOOM + CANVAS_HEIGHT / 2};
            var a = s_oSpriteLibrary.getSprite("ball");
            x = createBitmap(a);
            x.regX = a.width / 2;
            x.regY = a.height / 2;
            z.addChild(x);
            Q = new CPausePanel(s_oStage);
            q = new CInterface;
            q.refreshScore(0);
            s_oScoreController.addEventListener(ON_INCREASE_JACKPOT, s_oTable.onJackpotIncreased);
            s_oScoreController.addEventListener(ON_INCREASE_SCORE, q.refreshScore);
            a = s_oSpriteLibrary.getSprite("flipper");
            E = createBitmap(a);
            E.x = 726;
            E.y = 1706;
            E.regX = a.width - 14;
            E.regY =
                28;
            z.addChild(E);
            a = s_oSpriteLibrary.getSprite("flipper");
            I = createBitmap(a);
            I.x = 326;
            I.y = 1706;
            I.regX = a.width - 14;
            I.regY = 28;
            I.scaleX = -1;
            z.addChild(I);
            n.activeShield();
            if (s_bMobile) {
                a = s_oSpriteLibrary.getSprite("hand_anim");
                var e = a.width / 5, h = a.height / 2;
                a = new createjs.SpriteSheet({
                    images: [a],
                    frames: {width: e, height: h, regX: e / 2, regY: h / 2},
                    animations: {start: [5, 9, "stop"], stop: [9, 9, "back", .02], back: [0, 4, "start"]}
                });
                r = createSprite(a, "start", e / 2, h / 2, e, h);
                r.x = CANVAS_WIDTH_HALF;
                r.y = CANVAS_HEIGHT_HALF - 200;
                r.visible =
                    !1;
                s_oStage.addChild(r)
            }
            new CHelpPanel;
            this.updateCamera()
        };
    this.moveBall = function (b) {
        b = {x: b.localX / WORLD_SCALE, y: b.localY / WORLD_SCALE};
        t.SetLinearVelocity({x: 0, y: 0});
        t.SetAngularVelocity(0);
        t.SetPosition(b);
        t.SetActive(!1)
    };
    this.releaseBall = function () {
        t.SetActive(!0)
    };
    this._onPressDown = function (b) {
        c && (b.localX > CANVAS_WIDTH_HALF ? m && (k = !0, n.shiftElementsToRight()) : m && (g = !0, n.shiftElementsToLeft()), playSound("flipper", 1, !1), b.localY > SETTINGS_HEIGHT && s_oTable.loadSpring())
    };
    this._onPressUp = function (b) {
        if (c) {
            r.visible =
                !1;
            if (!1 === k && !0 === g || !0 === k && !1 === g) g = k = !1;
            b.localX > CANVAS_WIDTH_HALF ? k = !1 : g = !1;
            s_oTable.releaseSpring()
        }
    };
    this.resetBallPos = function () {
        var b = {x: BALL_STARTPOS.x / WORLD_SCALE, y: BALL_STARTPOS.y / WORLD_SCALE};
        setTimeout(function () {
            t.SetLinearVelocity({x: 0, y: 0});
            t.SetAngularVelocity(0);
            t.SetPosition(b)
        }, 500)
    };
    this.ballInGame = function (b) {
        m = b
    };
    this.restartGame = function () {
        $(s_oMain).trigger("show_interlevel_ad");
        s_oScoreController.resetScore();
        s_oTable.reset();
        s_oTable.unblockLaunch();
        s_oTable.activeShield();
        c = !0;
        b = NUM_BALL;
        q.resetBallRemaining()
    };
    this.unload = function () {
        c = !1;
        q.unload();
        null !== h && h.unload();
        s_bMobile ? v.removeAllEventListeners() : (document.onkeydown = null, document.onkeyup = null);
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren();
        s_oPhysicsController.unload()
    };
    this.setFlippers = function (b, a) {
        D = b;
        y = a
    };
    this.setNewLaunch = function () {
        s_oGame.resetBallPos();
        n.activeShield();
        0 === b && (c = !1, s_oTable.blockLaunch(), s_oGame.gameOver())
    };
    this.setExtraBall = function () {
        l = !0;
        q.activeExtraBallAnim(b -
            1)
    };
    this.isExtraBall = function () {
        return l
    };
    this.launchBall = function (b) {
        t.SetActive(!0);
        t.ApplyImpulse({x: -.001 + .002 * Math.random(), y: -b}, t.GetPosition());
        M = LERP_FOLLOW_BALL
    };
    this.onBallLaunched = function () {
        l ? (q.disableExtraBallAnim(), l = !1) : b--
    };
    this.onBallOut = function () {
        l ? (q.disableExtraBallAnim(), l = !1, s_oTable.resetOnExtraBall()) : (b--, 0 < b && q.refreshBallRemaining(b - 1), s_oTable.reset());
        s_oGame.ballInGame(!1);
        M = LERP_SLOW;
        s_oTable.unblockLaunch();
        s_oGame.setNewLaunch();
        playSound("ball_out", 1, !1)
    };
    this.getBall =
        function () {
            return t
        };
    this.getBallSprite = function () {
        return x
    };
    this.onExit = function () {
        $(s_oMain).trigger("end_session");
        s_oGame.unload();
        s_oMain.gotoMenu()
    };
    this._onExitHelp = function () {
        c = !0;
        s_bMobile && (r.visible = !0);
        playSound("start_game", 1, !1);
        $(s_oMain).trigger("start_level", 1);
        s_bMobile ? (v.on("mousedown", this._onPressDown), v.on("pressup", this._onPressUp)) : (document.onkeydown = f, document.onkeyup = e)
    };
    this.gameOver = function () {
        h = CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
        h.show(s_oScoreController.getScore())
    };
    this.onPause = function () {
        c = !1;
        Q.show()
    };
    this.onResume = function () {
        c = !0;
        Q.hide()
    };
    this.updateCamera = function () {
        var b = -t.GetPosition().x * ZOOM_PER_WORLDSCALE + CANVAS_WIDTH_HALF;
        var a = (-t.GetPosition().y * ZOOM_PER_WORLDSCALE + CANVAS_HEIGHT_HALF - F.y) * M.y;
        F.x += (b - F.x) * M.x;
        F.y += a;
        b = -(ZOOM_TABLE_SIZE.w - CANVAS_WIDTH + s_iOffsetX);
        F.x < b && (F.x = b);
        F.x > s_iOffsetX && (F.x = s_iOffsetX);
        b = -(ZOOM_TABLE_SIZE.h - CANVAS_HEIGHT + s_iOffsetY);
        F.y < b && (F.y = b);
        F.y > s_iOffsetY && (F.y = s_iOffsetY);
        A.x = F.x;
        A.y = F.y
    };
    this.update = function () {
        c &&
        (g ? y.SetMotorSpeed(FLIPPER_STRENGTH) : y.SetMotorSpeed(-FLIPPER_STRENGTH), k ? D.SetMotorSpeed(-FLIPPER_STRENGTH) : D.SetMotorSpeed(FLIPPER_STRENGTH), this.updateCamera(), s_oPhysicsController.update(F), s_oTable.update(), x.x = t.GetPosition().x * WORLD_SCALE, x.y = t.GetPosition().y * WORLD_SCALE, E.rotation = D.GetBodyA().GetAngle() * TODEGREE_PROPORTION, I.rotation = y.GetBodyA().GetAngle() * TODEGREE_PROPORTION, t.GetPosition().y > BALL_OUT_SAFE_LIMIT && (t.SetPosition({
            x: t.GetPosition().x, y: t.GetPosition().y - BALL_OUT_SAFE_LIMIT /
                2
        }), s_oGame.onBallOut()))
    };
    s_oGame = this;
    this._init()
}

var s_oGame;

function CInterface() {
    var a, f, e, c, g, k, d, l, m, b, q, h, n, t, x, r, v, y, D, E = null, I = null;
    this._init = function () {
        var A, z = s_oSpriteLibrary.getSprite("but_exit");
        d = CANVAS_WIDTH - z.width / 2 - 10;
        l = z.height / 2 + 10;
        n = new CGfxButton(d, l, z, s_oStage);
        n.addEventListener(ON_MOUSE_UP, this._onExit, this);
        g = A = d - z.width - 10;
        k = z.height / 2 + 10;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) z = s_oSpriteLibrary.getSprite("audio_icon"), h = new CToggle(g, k, z, s_bAudioActive, s_oStage), h.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), A = g -
            z.width / 2 - 10;
        z = window.document;
        var G = z.documentElement;
        E = G.requestFullscreen || G.mozRequestFullScreen || G.webkitRequestFullScreen || G.msRequestFullscreen;
        I = z.exitFullscreen || z.mozCancelFullScreen || z.webkitExitFullscreen || z.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (E = !1);
        E && screenfull.isEnabled && (z = s_oSpriteLibrary.getSprite("but_fullscreen"), e = A - 10, c = z.height / 2 + 10, t = new CToggle(e, c, z, s_bFullscreen, s_oStage), t.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        z = s_oSpriteLibrary.getSprite("but_settings");
        D = new CGUIExpandible(d, l, z, s_oStage);
        D.addButton(n);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || D.addButton(h);
        E && screenfull.isEnabled && D.addButton(t);
        z = s_oSpriteLibrary.getSprite("score_panel");
        a = z.width / 2 + 10;
        f = z.height / 2 + 10;
        r = new createjs.Container;
        r.x = a;
        r.y = f;
        s_oStage.addChild(r);
        A = createBitmap(z);
        A.regX = z.width / 2;
        A.regY = z.height / 2;
        r.addChild(A);
        z = s_oSpriteLibrary.getSprite("star");
        A = createBitmap(z);
        A.x = -90;
        A.y = -16;
        A.regX = z.width / 2;
        A.regY = z.height / 2;
        A.scaleX = A.scaleY = .7;
        r.addChild(A);
        v = new createjs.Text(0,
            " 28px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        v.x = A.x + 28;
        v.y = A.y;
        v.textAlign = "left";
        v.textBaseline = "middle";
        v.lineWidth = 200;
        r.addChild(v);
        z = s_oSpriteLibrary.getSprite("ball");
        m = A.x;
        b = A.y + 38;
        q = z.width / 2 + 4;
        x = [];
        for (A = 0; A < NUM_BALL - 1; A++) G = createBitmap(z), G.x = m + q * A, G.y = b, G.regX = z.width / 2, G.regY = z.height / 2, G.scaleX = G.scaleY = .5, r.addChild(G), x.push(G);
        z = s_oSpriteLibrary.getSprite("extra_ball");
        y = createBitmap(z);
        y.regX = z.width / 2;
        y.regY = z.height / 2;
        y.alpha = 0;
        r.addChild(y);
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
    };
    this.unload = function () {
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) h.unload(), h = null;
        E && screenfull.isEnabled && t.unload();
        D.unload();
        s_oInterface = null
    };
    this.refreshButtonPos = function (b, d) {
        D.refreshPos(b, d);
        r.x = a + b;
        r.y = f + d
    };
    this.refreshScore = function (b) {
        v.text = b.toLocaleString()
    };
    this.refreshBallRemaining = function (b) {
        x[b].visible = !1
    };
    this.resetBallRemaining = function () {
        for (var b = 0; b < x.length; b++) x[b].visible = !0
    };
    this.activeExtraBallAnim = function (a) {
        y.x = m + a * q;
        y.y = b;
        y.alpha = 1;
        createjs.Tween.get(y, {loop: !0}).to({alpha: 0},
            500).to({alpha: 1}, 500).wait(1E3)
    };
    this.disableExtraBallAnim = function () {
        createjs.Tween.removeTweens(y);
        y.alpha = 0
    };
    this._onButHelpRelease = function () {
        _oHelpPanel = new CHelpPanel
    };
    this._onButRestartRelease = function () {
        s_oGame.restartGame();
        $(s_oMain).trigger("restart_level", 1)
    };
    this.onExitFromHelp = function () {
        _oHelpPanel.unload()
    };
    this._onAudioToggle = function () {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function () {
        new CAreYouSurePanel(s_oGame.onExit)
    };
    this.resetFullscreenBut =
        function () {
            E && screenfull.isEnabled && t.setActive(s_bFullscreen)
        };
    this._onFullscreenRelease = function () {
        s_bFullscreen ? I.call(window.document) : E.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this._init();
    return this
}

var s_oInterface = null;

function CHelpPanel() {
    var a, f, e, c;
    this._init = function () {
        e = new createjs.Shape;
        e.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        e.alpha = 1;
        e.on("mousedown", function () {
            g._onExitHelp()
        });
        s_oStage.addChild(e);
        (new createjs.Tween.get(e)).to({alpha: .7}, 500);
        c = new createjs.Container;
        c.on("mousedown", function () {
            g._onExitHelp()
        });
        s_oStage.addChild(c);
        var f = s_oSpriteLibrary.getSprite("msg_box"), d = createBitmap(f);
        d.regX = f.width / 2;
        d.regY = f.height / 2;
        c.addChild(d);
        c.x = CANVAS_WIDTH / 2;
        c.y = CANVAS_HEIGHT +
            f.height / 2;
        a = c.y;
        (new createjs.Tween.get(c)).to({y: CANVAS_HEIGHT / 2 - 40}, 500, createjs.Ease.cubicOut);
        if (s_bMobile) {
            f = s_oSpriteLibrary.getSprite("flipper");
            d = createBitmap(f);
            d.x = 250;
            d.y = -80;
            d.regX = f.width - 7;
            d.regY = 14;
            d.scaleX = .5;
            d.scaleY = .5;
            c.addChild(d);
            f = s_oSpriteLibrary.getSprite("flipper");
            var l = createBitmap(f);
            l.x = -250;
            l.y = -80;
            l.regX = f.width - 7;
            l.regY = 14;
            l.scaleX = -.5;
            l.scaleY = .5;
            c.addChild(l);
            createjs.Tween.get(l, {loop: !0}).to({rotation: -50}, 100, createjs.Ease.cubicIn).wait(500 * Math.random()).to({rotation: 0},
                500, createjs.Ease.cubicIn);
            createjs.Tween.get(d, {loop: !0}).to({rotation: 50}, 100, createjs.Ease.cubicIn).wait(500 * Math.random()).to({rotation: 0}, 500, createjs.Ease.cubicIn);
            f = 300;
            d = 70;
            new CTLText(c, -(f / 2), -110 - d / 2, f, d, 20, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.3, 2, 2, TEXT_HELP1_MOBILE, !0, !0, !0, !1)
        } else d = 80, new CTLText(c, -250, -110 - d / 2, 300, d, 20, "left", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.3, 2, 2, TEXT_HELP1, !0, !0, !0, !1), f = s_oSpriteLibrary.getSprite("keys"), d = createBitmap(f), d.x = 130, d.y = -100, d.regX = f.width /
            2, d.regY = f.height / 2, c.addChild(d);
        f = 400;
        d = 80;
        new CTLText(c, -(f / 2), 50 - d / 2, f, d, 20, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.3, 2, 2, TEXT_HELP2, !0, !0, !0, !1);
        f = s_oSpriteLibrary.getSprite("star");
        d = createBitmap(f);
        d.regX = f.width / 2;
        d.regY = f.height / 2;
        d.y = 120;
        c.addChild(d)
    };
    this.unload = function () {
        s_oStage.removeChild(e);
        s_oStage.removeChild(c);
        c.off("mousedown", function () {
            g._onExitHelp()
        });
        e.off("mousedown", function () {
            g._onExitHelp()
        })
    };
    this._onExitHelp = function () {
        f || (f = !0, (new createjs.Tween.get(e)).to({alpha: 0},
            500), (new createjs.Tween.get(c)).to({y: a}, 400, createjs.Ease.backIn).call(function () {
            g.unload();
            s_oGame._onExitHelp()
        }))
    };
    var g = this;
    this._init()
}

function CCreditsPanel() {
    var a, f, e, c, g, k, d;
    this._init = function () {
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        s_oStage.addChild(f);
        createjs.Tween.get(f).to({alpha: .7}, 500);
        k = new createjs.Shape;
        k.graphics.beginFill("#0f0f0f").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = .01;
        d = k.on("click", this._onLogoButRelease);
        s_oStage.addChild(k);
        e = new createjs.Container;
        s_oStage.addChild(e);
        var l = s_oSpriteLibrary.getSprite("msg_box"), m = createBitmap(l);
        m.regX = l.width / 2;
        m.regY = l.height / 2;
        e.addChild(m);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT + l.height / 2;
        a = e.y;
        createjs.Tween.get(e).to({y: CANVAS_HEIGHT / 2}, 500, createjs.Ease.quartIn);
        l = 400;
        m = 60;
        new CTLText(e, -(l / 2), -90 - m / 2, l, m, 40, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.3, 2, 2, TEXT_DEVELOPED, !0, !0, !0, !1);
        l = 400;
        m = 60;
        new CTLText(e, -(l / 2), 70 - m / 2, l, m, 40, "center", PRIMARY_FONT_COLOUR, PRIMARY_FONT, 1.3, 2, 2, "www.play2-earn.com", !0, !0, !0, !1);
        l = s_oSpriteLibrary.getSprite("ctl_logo");
        g = createBitmap(l);
        g.regX = l.width /
            2;
        g.regY = l.height / 2;
        e.addChild(g);
        l = s_oSpriteLibrary.getSprite("but_exit");
        c = new CGfxButton(270, -138, l, e);
        c.addEventListener(ON_MOUSE_UP, this.unload, this)
    };
    this.unload = function () {
        k.off("click", d);
        c.setClickable(!1);
        createjs.Tween.get(f).to({alpha: 0}, 500);
        createjs.Tween.get(e).to({y: a}, 400, createjs.Ease.backIn).call(function () {
            s_oStage.removeChild(f);
            s_oStage.removeChild(e);
            c.unload()
        })
    };
    this._onLogoButRelease = function () {
        window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._onMoreGamesReleased =
        function () {
            window.open("http://codecanyon.net/collections/5409142-games")
        };
    this._init()
}

function CAreYouSurePanel(a, f) {
    var e, c, g, k, d, l;
    this._init = function (b, a) {
        k = new createjs.Shape;
        k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        k.alpha = 0;
        l = k.on("mousedown", function () {
        });
        s_oStage.addChild(k);
        createjs.Tween.get(k).to({alpha: .7}, 500);
        d = new createjs.Container;
        s_oStage.addChild(d);
        var h = s_oSpriteLibrary.getSprite("credits_panel"), f = createBitmap(h);
        f.regX = h.width / 2;
        f.regY = h.height / 2;
        d.addChild(f);
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT + h.height / 2;
        e = d.y;
        createjs.Tween.get(d).to({
            y: CANVAS_HEIGHT /
                2
        }, 500, createjs.Ease.quartIn);
        f = new createjs.Text(TEXT_ARE_SURE, " 34px " + PRIMARY_FONT, "#000000");
        f.y = -h.height / 2 + 120;
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.lineWidth = 400;
        f.outline = 5;
        d.addChild(f);
        h = new createjs.Text(TEXT_ARE_SURE, " 34px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        h.y = f.y;
        h.textAlign = "center";
        h.textBaseline = "middle";
        h.lineWidth = 400;
        d.addChild(h);
        c = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_yes"), d);
        c.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        g = new CGfxButton(-110,
            80, s_oSpriteLibrary.getSprite("but_no"), d);
        g.addEventListener(ON_MOUSE_UP, this._onButNo, this);
        g.pulseAnimation()
    };
    this._onButYes = function () {
        g.setClickable(!1);
        c.setClickable(!1);
        createjs.Tween.get(k).to({alpha: 0}, 500);
        createjs.Tween.get(d).to({y: e}, 400, createjs.Ease.backIn).call(function () {
            m.unload();
            a && a()
        })
    };
    this._onButNo = function () {
        g.setClickable(!1);
        c.setClickable(!1);
        createjs.Tween.get(k).to({alpha: 0}, 500);
        createjs.Tween.get(d).to({y: e}, 400, createjs.Ease.backIn).call(function () {
            m.unload();
            f &&
            f()
        })
    };
    this.unload = function () {
        g.unload();
        c.unload();
        s_oStage.removeChild(k);
        s_oStage.removeChild(d);
        k.off("mousedown", l)
    };
    var m = this;
    this._init(a, f)
}

function CEndPanel(a) {
    var f, e, c, g, k, d, l, m, b, q;
    this._init = function (a) {
        l = new createjs.Shape;
        l.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.alpha = 0;
        q = l.on("mousedown", function () {
        });
        s_oStage.addChild(l);
        createjs.Tween.get(l).to({alpha: .7}, 500);
        d = new createjs.Container;
        s_oStage.addChild(d);
        a = s_oSpriteLibrary.getSprite("msg_box");
        var h = createBitmap(a);
        h.regX = a.width / 2;
        h.regY = a.height / 2;
        d.addChild(h);
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT + a.height / 2;
        f = d.y;
        e = new createjs.Container;
        e.y = -120;
        d.addChild(e);
        a = s_oSpriteLibrary.getSprite("bestscore");
        h = createBitmap(a);
        h.regY = a.height / 2;
        e.addChild(h);
        c = new createjs.Text("0", " 38px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        c.x = h.x + a.width + 4;
        c.y = h.y;
        c.textAlign = "left";
        c.textBaseline = "middle";
        c.lineWidth = 200;
        e.addChild(c);
        g = new createjs.Container;
        g.y = -50;
        d.addChild(g);
        a = s_oSpriteLibrary.getSprite("star");
        h = createBitmap(a);
        h.regY = a.height / 2;
        g.addChild(h);
        k = new createjs.Text("0", " 28px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        k.x = h.x + a.width + 4;
        k.y =
            h.y;
        k.textAlign = "left";
        k.textBaseline = "middle";
        k.lineWidth = 200;
        g.addChild(k);
        b = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite("but_restart"), d);
        b.addEventListener(ON_MOUSE_UP, this._onRestart, this);
        b.pulseAnimation();
        m = new CGfxButton(-110, 80, s_oSpriteLibrary.getSprite("but_home"), d);
        m.addEventListener(ON_MOUSE_UP, this._onExit, this)
    };
    this.unload = function () {
        l.off("mousedown", q);
        s_oStage.removeChild(d);
        s_oStage.removeChild(l)
    };
    this.show = function (b) {
        playSound("game_over", 1, !1);
        b > s_iTotalScore && (s_iTotalScore =
            b, s_oLocalStorage.saveData());
        c.text = s_iTotalScore.toLocaleString();
        e.regX = e.getBounds().width / 2;
        k.text = b.toLocaleString();
        g.regX = g.getBounds().width / 2;
        createjs.Tween.get(d).to({y: CANVAS_HEIGHT / 2}, 500, createjs.Ease.quartIn);
        $(s_oMain).trigger("save_score", b, "DON'T FORGET TO SET THE MODE");
        $(s_oMain).trigger("end_level", 1);
        var a = "You collected <strong>" + b + " points</strong>!<br><br>Share your score with your friends!",
            h = "My score is " + b + " points! Can you do better?";
        $(s_oMain).trigger("share_event",
            b, "200x200.jpg", "Congratulations!", a, h)
    };
    this._onRestart = function () {
        b.setClickable(!1);
        m.setClickable(!1);
        s_oGame.restartGame();
        createjs.Tween.get(l).to({alpha: 0}, 500);
        createjs.Tween.get(d).to({y: f}, 400, createjs.Ease.backIn).call(function () {
            s_oStage.removeChild(l);
            s_oStage.removeChild(d)
        })
    };
    this._onExit = function () {
        $(s_oMain).trigger("show_interlevel_ad");
        s_oGame.onExit()
    };
    this._init(a);
    return this
}

function CPhysicsController() {
    var a = Box2D.Common.Math.b2Vec2, f = Box2D.Dynamics.b2World, e = Box2D.Dynamics.b2DebugDraw, c, g, k = this, d, l,
        m;
    this.init = function () {
        c = new a(0, GRAVITY);
        g = new f(c, !0);
        d = [];
        l = [];
        if (DEBUG_BOX2D) {
            var b = document.createElement("canvas");
            b.id = "debug";
            b.width = s_oCanvas.width;
            b.height = s_oCanvas.height;
            b.style.position = "fixed";
            document.body.appendChild(b);
            $("#debug").css("pointer-events", "none");
            m = document.getElementById("debug").getContext("2d");
            b = new e;
            b.SetSprite(m);
            b.SetDrawScale(WORLD_SCALE *
                ZOOM);
            b.SetFillAlpha(DEBUG_BOX2D_ALPHA);
            b.SetLineThickness(1);
            b.SetFlags(e.e_shapeBit);
            g.SetDebugDraw(b);
            sizeHandler()
        }
        this.createAContactListener()
    };
    this.createAContactListener = function () {
        var b = new Box2D.Dynamics.b2ContactListener;
        b.BeginContact = function (b) {
            var a = b.GetFixtureA().GetUserData(), d = b.GetFixtureB().GetUserData();
            s_oPhysicsController.processContactEvent(CONTACT_BEGIN, a, b);
            s_oPhysicsController.processContactEvent(CONTACT_BEGIN, d, b)
        };
        b.EndContact = function (b) {
            var a = b.GetFixtureA().GetUserData(),
                d = b.GetFixtureB().GetUserData();
            s_oPhysicsController.processContactEvent(CONTACT_END, a, b);
            s_oPhysicsController.processContactEvent(CONTACT_END, d, b)
        };
        g.SetContactListener(b)
    };
    this.destroyBodyVector = function (b) {
        g.DestroyBody(b)
    };
    this.destroyAllBodies = function () {
        for (var b = g.GetBodyList(); b;) {
            var a = b;
            b = b.GetNext();
            g.DestroyBody(a)
        }
    };
    this.destroyAllJoints = function () {
        for (var b = g.GetJointList(); b;) {
            var a = b;
            b = b.GetNext();
            g.DestroyJoint(a)
        }
    };
    this.destroyAllContacts = function () {
        for (var b = g.GetContactList(); b;) {
            var a =
                b.GetNext();
            g.DestroyJoint(a)
        }
    };
    this.unload = function () {
        s_oPhysicsController.destroyAllJoints();
        s_oPhysicsController.destroyAllBodies();
        s_oPhysicsController.destroyAllContacts();
        DEBUG_BOX2D && document.getElementById("debug").remove();
        g = s_oPhysicsController = null
    };
    this.processContactEvent = function (b, a, d) {
        a && a.contacttype === b && a.callback(a.params, d)
    };
    this.startComputing = function (b) {
        b.GetBody().SetActive(!0)
    };
    this.movePlayer = function (b, a, d) {
        a = {x: a / WORLD_SCALE, y: d / WORLD_SCALE};
        b.GetBody().SetPosition(a)
    };
    this.applyImpulse = function (b) {
        b.GetBody().ApplyImpulse({x: .8, y: 1}, b.GetBody().GetWorldCenter())
    };
    this.decreaseSpeedRotation = function (b) {
        var a = .99 * b.GetBody().GetAngularVelocity();
        b.GetBody().SetAngularVelocity(a)
    };
    this.getSpeedRotation = function (b) {
        return b.GetBody().GetAngularVelocity()
    };
    this.moveObject = function (b, a, d) {
        a = {x: a / WORLD_SCALE, y: d / WORLD_SCALE};
        b.GetBody().SetPosition(a)
    };
    this.destroyBody = function (b) {
        g.DestroyBody(b.GetBody())
    };
    this.getInstance = function () {
        null === k && (k = new CPhysicsController);
        return k
    };
    this.update = function (b) {
        g.Step(1 / FPS, 8, 8);
        DEBUG_BOX2D && (m.save(), m.clearRect(0, 0, s_oCanvas.width, s_oCanvas.height), m.translate(b.x, b.y), g.DrawDebugData(), m.restore());
        g.ClearForces();
        this._deactiveAllBodyInList();
        this._activeAllBodyInList()
    };
    this.getWorld = function () {
        return g
    };
    this.getElementPosition = function (b) {
        var a = b.GetBody().GetPosition();
        return {x: a.x * WORLD_SCALE, y: a.y * WORLD_SCALE, angle: 180 * b.GetBody().GetAngle() / Math.PI}
    };
    this.getElementAngle = function (b) {
        return 180 * b.GetBody().GetAngle() /
            Math.PI
    };
    this.enableBody = function (b, a) {
        l.push({body: b, pos: a})
    };
    this.disableBody = function (b, a) {
        d.push({body: b, pos: a})
    };
    this._deactiveAllBodyInList = function () {
        for (var b = 0; b < d.length; b++) d[b].body.SetActive(!1), d[b].pos && d[b].body.SetPosition({
            x: d[b].pos.x / WORLD_SCALE,
            y: d[b].pos.y / WORLD_SCALE
        });
        d = []
    };
    this._activeAllBodyInList = function () {
        for (var b = 0; b < l.length; b++) l[b].body.SetActive(!0), l[b].pos && l[b].body.SetPosition({
            x: l[b].pos.x / WORLD_SCALE,
            y: l[b].pos.y / WORLD_SCALE
        });
        l = []
    };
    this.init();
    s_oPhysicsController =
        this
}

var s_oPhysicsController = null;

function CObjectBuilder() {
    var a = Box2D.Common.Math.b2Vec2, f = Box2D.Dynamics.b2BodyDef, e = Box2D.Dynamics.b2Body,
        c = Box2D.Dynamics.b2FixtureDef, g = Box2D.Collision.Shapes.b2PolygonShape,
        k = Box2D.Collision.Shapes.b2CircleShape, d = Box2D.Dynamics.Joints.b2RevoluteJointDef, l, m;
    this.init = function () {
        m = s_oPhysicsController.getInstance();
        l = m.getWorld()
    };
    this.addButton = function (b, a, d, k, m, x, r, v, y) {
        var h = new c;
        h.density = x;
        h.friction = r;
        h.restitution = v;
        h.color = 16777215;
        h.userData = y;
        x = new f;
        x.type = e.b2_staticBody;
        h.shape =
            new g;
        h.shape.SetAsBox(b / 2 / WORLD_SCALE, a / 2 / WORLD_SCALE);
        x.position.Set(d / WORLD_SCALE, k / WORLD_SCALE);
        x.angle = m * Math.PI / 180;
        b = l.CreateBody(x);
        b.CreateFixture(h);
        return b
    };
    this.addEdge = function (b, d, h, k, m, x) {
        var q = new c;
        q.density = k;
        q.friction = m;
        q.restitution = x;
        k = new f;
        k.type = e.b2_staticBody;
        q.shape = new g;
        b = new a(b.x / WORLD_SCALE, b.y / WORLD_SCALE);
        d = new a(d.x / WORLD_SCALE, d.y / WORLD_SCALE);
        q.shape.SetAsEdge(b, d);
        k.angle = h * Math.PI / 180;
        h = l.CreateBody(k);
        h.CreateFixture(q);
        return h
    };
    this.addPolygon = function (b,
                                d, h, k, m) {
        var q = new c;
        q.density = h;
        q.friction = k;
        q.restitution = m;
        h = new f;
        h.type = e.b2_staticBody;
        q.shape = new g;
        k = [];
        for (m = 0; m < b.length; m++) {
            var n = new a;
            n.Set(b[m].x / WORLD_SCALE, b[m].y / WORLD_SCALE);
            k.push(n)
        }
        q.shape.SetAsArray(k, k.length);
        h.angle = d * Math.PI / 180;
        l.CreateBody(h).CreateFixture(q)
    };
    this.addBall = function (b, a, d, g, m, x) {
        var h = new c;
        h.density = g;
        h.friction = m;
        h.restitution = x;
        h.userData = {id: "ball"};
        g = new f;
        g.type = e.b2_dynamicBody;
        h.shape = new k(b / WORLD_SCALE);
        g.allowSleep = !1;
        g.bullet = !0;
        g.position.x =
            a / WORLD_SCALE;
        g.position.y = d / WORLD_SCALE;
        b = l.CreateBody(g);
        b.CreateFixture(h);
        return b
    };
    this.addCircle = function (b, a, d, g, m, x) {
        var h = new c;
        h.density = g;
        h.friction = m;
        h.restitution = x;
        g = new f;
        g.type = e.b2_dynamicBody;
        h.shape = new k(b / WORLD_SCALE);
        g.position.x = a / WORLD_SCALE;
        g.position.y = d / WORLD_SCALE;
        return l.CreateBody(g).CreateFixture(h)
    };
    this.addStaticCircle = function (b, a, d, g, m, x, r) {
        var h = new c;
        h.density = g;
        h.friction = m;
        h.restitution = x;
        h.userData = r;
        g = new f;
        g.type = e.b2_staticBody;
        h.shape = new k(b / WORLD_SCALE);
        g.position.x = a / WORLD_SCALE;
        g.position.y = d / WORLD_SCALE;
        return l.CreateBody(g).CreateFixture(h)
    };
    this.addRevoluteRectangle = function (b, a, h, m, t, x, r, v) {
        var q = new c;
        q.density = t;
        q.friction = x;
        q.restitution = r;
        t = new f;
        t.type = e.b2_dynamicBody;
        v && (t.angularVelocity = 3);
        q.shape = new g;
        q.shape.SetAsBox(b / WORLD_SCALE, a / WORLD_SCALE);
        t.position.Set(h / WORLD_SCALE, m / WORLD_SCALE);
        b = l.CreateBody(t);
        q = b.CreateFixture(q);
        a = new c;
        a.density = 3;
        a.friction = 1;
        a.restitution = .1;
        v = new f;
        v.type = e.b2_staticBody;
        a.shape = new k(10 / WORLD_SCALE);
        v.position.Set(h / WORLD_SCALE, m / WORLD_SCALE);
        h = l.CreateBody(v);
        m = h.CreateFixture(a);
        a = new d;
        a.Initialize(b, h, b.GetWorldCenter());
        l.CreateJoint(a);
        return {fixture1: q, fixture2: m}
    };
    this.addLeftFlipper = function (b, q, h, m, t, x) {
        var n = new c;
        n.density = m;
        n.friction = t;
        n.restitution = x;
        var v = new f;
        v.type = e.b2_dynamicBody;
        n.shape = new g;
        for (var y = [], D = 0; D < b.length; D++) {
            var E = new a;
            E.Set(b[D].x / WORLD_SCALE * -1, b[D].y / WORLD_SCALE);
            y.push(E)
        }
        n.shape.SetAsArray(y, y.length);
        v.position.Set(q / WORLD_SCALE, (h + 28) / WORLD_SCALE);
        b = l.CreateBody(v);
        b.CreateFixture(n);
        n = new c;
        n.density = m;
        n.friction = t;
        n.restitution = x;
        m = new f;
        m.type = e.b2_staticBody;
        n.shape = new k(11 / WORLD_SCALE);
        m.position.Set(q / WORLD_SCALE, h / WORLD_SCALE);
        q = l.CreateBody(m);
        q.CreateFixture(n);
        h = new d;
        m = {x: q.GetWorldCenter().x, y: q.GetWorldCenter().y};
        h.Initialize(b, q, m);
        h.lowerAngle = 5 * Math.PI / 180;
        h.upperAngle = 50 * Math.PI / 180;
        h.enableLimit = !0;
        h.maxMotorTorque = 1E3;
        h.enableMotor = !0;
        q = l.CreateJoint(h);
        q.EnableMotor(!0);
        return q
    };
    this.addRightFlipper = function (b, q, h, m,
                                     t, x) {
        var n = new c;
        n.density = m;
        n.friction = t;
        n.restitution = x;
        var v = new f;
        v.type = e.b2_dynamicBody;
        n.shape = new g;
        for (var y = [], D = 0; D < b.length; D++) {
            var E = new a;
            E.Set(b[D].x / WORLD_SCALE, b[D].y / WORLD_SCALE);
            y.push(E)
        }
        n.shape.SetAsArray(y, y.length);
        v.position.Set(q / WORLD_SCALE, (h + 28) / WORLD_SCALE);
        b = l.CreateBody(v);
        b.CreateFixture(n);
        n = new c;
        n.density = m;
        n.friction = t;
        n.restitution = x;
        m = new f;
        m.type = e.b2_staticBody;
        n.shape = new k(11 / WORLD_SCALE);
        m.position.Set(q / WORLD_SCALE, h / WORLD_SCALE);
        q = l.CreateBody(m);
        q.CreateFixture(n);
        h = new d;
        m = {x: q.GetWorldCenter().x, y: q.GetWorldCenter().y};
        h.Initialize(b, q, m);
        h.lowerAngle = -50 * Math.PI / 180;
        h.upperAngle = -5 * Math.PI / 180;
        h.enableLimit = !0;
        h.maxMotorTorque = 1E3;
        h.enableMotor = !0;
        q = l.CreateJoint(h);
        q.EnableMotor(!0);
        return q
    };
    this.addRectangle = function (b, a, d, k, m, x, r, v) {
        var h = new c;
        h.density = x;
        h.friction = r;
        h.restitution = v;
        x = new f;
        x.type = e.b2_staticBody;
        h.shape = new g;
        h.shape.SetAsBox(b / WORLD_SCALE, a / WORLD_SCALE);
        x.position.Set(d / WORLD_SCALE, k / WORLD_SCALE);
        x.angle = m * Math.PI / 180;
        return l.CreateBody(x).CreateFixture(h)
    };
    this.init();
    s_oObjectBuilder = this
}

var s_oObjectBuilder = null, EDGE_FRAME = "edge_frame", TOP_CHANNELLERS = "top_channellers",
    LEFT_ROUTER = "left_router", BOT_CHANNELLERS = "bot_channellers", FLIPPER_BUMPER = "flipper_bumper",
    RIGHT_CHANNELLER = "right_channeller", CIRCLE_BUMPER = "circle_bumper", PLATFORM = "platforms",
    CENTERSAFE = "centersafe", FLIPPER = "flipper";

function CTable(a, f) {
    var e, c, g, k, d, l, m, b, q, h, n, t;
    this._init = function (a, f) {
        var v = s_oSpriteLibrary.getSprite("pinball_bg");
        e = v.width;
        c = v.height;
        g = createBitmap(v);
        g.alpha = 1;
        a.addChild(g);
        ZOOM_TABLE_SIZE = {w: e * ZOOM, h: c * ZOOM};
        t = new CModuleStart(a, f);
        k = new CModuleMultiplier(a, f);
        d = new CModuleBumper(a, f);
        l = new CModuleHole(a, f);
        m = new CModuleRouter(a, f);
        b = new CModuleLetters(a, f);
        q = new CModuleJumper(a, f);
        h = new CModuleJackpot(a, f);
        n = new CModuleShield(a, f);
        this._buildTable();
        this._addCheckPoints()
    };
    this._buildTable =
        function () {
            for (var b = TileMaps.levelsettings.layers, c = GENERAL_RESTITUTION, e = 0; e < b.length; e++) if ("objectgroup" === b[e].type) {
                var h = b[e].objects;
                switch (b[e].name) {
                    case EDGE_FRAME:
                        this._addShapes(h, 0);
                        break;
                    case CENTERSAFE:
                        var f = b[e].objects[0], g = this.getAdjustedPoints(0, 0, [{x: f.x, y: f.y}]);
                        s_oObjectBuilder.addStaticCircle(f.width / 2, g[0].x + f.width / 2, g[0].y + f.width / 2, 0, 0, .75);
                        g = createBitmap(s_oSpriteLibrary.getSprite("safe_pin"));
                        g.x = f.x;
                        g.y = f.y;
                        a.addChild(g);
                        break;
                    case TOP_CHANNELLERS:
                        for (f = 0; f < h.length; f++) this._addPolygons(h[f],
                            3 * c / 2);
                        break;
                    case LEFT_ROUTER:
                        this._addShapes(h, 0);
                        break;
                    case BOT_CHANNELLERS:
                        for (f = 0; f < h.length; f++) h[f].ellipse ? (g = this.getAdjustedPoints(0, 0, [{
                            x: h[f].x,
                            y: h[f].y
                        }]), s_oObjectBuilder.addStaticCircle(h[f].width / 2, g[0].x + h[f].width / 2, g[0].y + h[f].width / 2, 0, 0, 0)) : this._addPolygons(h[f], c / 2);
                        break;
                    case FLIPPER_BUMPER:
                        d.buildFlipperBumper(h);
                        break;
                    case CIRCLE_BUMPER:
                        d.buildCircularBumper(h);
                        break;
                    case RIGHT_CHANNELLER:
                        for (f = 0; f < h.length; f++) this._addPolygons(h[f], .7);
                        break;
                    case FLIPPER:
                        h = b[e].objects,
                            g = h[0], g = this.getAdjustedPoints(0, 0, g.polygon), f = s_oObjectBuilder.addRightFlipper(g, 726, 1706, 1, 0, c), h = b[e].objects, g = h[0], g = this.getAdjustedPoints(0, 0, g.polygon), g = s_oObjectBuilder.addLeftFlipper(g.reverse(), 326, 1706, 1, 0, c), s_oGame.setFlippers(f, g)
                }
            }
        };
    this._addPolygons = function (b, a) {
        var d = this.getAdjustedPoints(b.x, b.y, b.polygon);
        s_oObjectBuilder.addPolygon(d, 0, 1, GENERAL_FRICTION, a)
    };
    this._addShapes = function (b, a) {
        for (var d = 0; d < b.length; d++) for (var c = this.getAdjustedPoints(b[d].x, b[d].y, b[d].polyline),
                                                    h = 0; h < c.length - 1; h++) s_oObjectBuilder.addEdge({
            x: c[h].x,
            y: c[h].y
        }, {x: c[h + 1].x, y: c[h + 1].y}, 0, 1, GENERAL_FRICTION, a)
    };
    this._addCheckPoints = function () {
        var b = 140, d = 1460, c = s_oSpriteLibrary.getSprite("button_light_0");
        c = new CLightIndicator(c, b, d, a);
        c = {contacttype: CONTACT_END, callback: this._onCheckPoint, params: c};
        s_oObjectBuilder.addButton(8, 40, b, d, 0, 0, 0, 0, c).GetFixtureList().SetSensor(!0);
        b = 936;
        d = 1460;
        c = s_oSpriteLibrary.getSprite("button_light_0");
        c = new CLightIndicator(c, b, d, a);
        c = {
            contacttype: CONTACT_END,
            callback: this._onCheckPoint, params: c
        };
        s_oObjectBuilder.addButton(8, 40, b, d, 0, 0, 0, 0, c).GetFixtureList().SetSensor(!0);
        b = 56;
        d = 1460;
        c = s_oSpriteLibrary.getSprite("button_light_1");
        c = new CLightIndicator(c, b, d, a);
        c = {contacttype: CONTACT_END, callback: this._onCheckPoint, params: c};
        b = s_oObjectBuilder.addButton(8, 40, b, d, 0, 0, 0, 0, c);
        b.GetFixtureList().SetSensor(!0);
        b = 1016;
        d = 1460;
        c = s_oSpriteLibrary.getSprite("button_light_1");
        c = new CLightIndicator(c, b, d, a);
        c = {contacttype: CONTACT_END, callback: this._onCheckPoint, params: c};
        s_oObjectBuilder.addButton(8, 40, b, d, 0, 0, 0, 0, c).GetFixtureList().SetSensor(!0);
        c = {contacttype: CONTACT_END, callback: s_oGame.onBallOut, params: "checkpoint"};
        b = s_oObjectBuilder.addButton(320, 8, 520, 1900, 0, 0, 0, 0, c);
        b.GetFixtureList().SetSensor(!0)
    };
    this._onCheckPoint = function (b) {
        playSound("toggle", 1, !1);
        s_oScoreController.addButtonScore();
        b.flashing()
    };
    this.resetOnExtraBall = function () {
        h.reset()
    };
    this.reset = function () {
        s_oScoreController.resetJackpot();
        s_oScoreController.resetMultiplier();
        s_oScoreController.resetCircleBumperLevel();
        k.reset();
        d.reset();
        m.reset();
        l.reset();
        b.reset();
        q.reset();
        h.reset();
        n.reset()
    };
    this.stopLogoAnim = function () {
        b.stopAnimLogo()
    };
    this.blockLaunch = function () {
        t.block()
    };
    this.unblockLaunch = function () {
        t.unBlock();
        t.startLighting();
        b.animLogo()
    };
    this.loadSpring = function () {
        t.loadSpring()
    };
    this.releaseSpring = function () {
        t.releaseSpring()
    };
    this.shiftElementsToRight = function () {
        k.shiftElementsToRight();
        q.shiftElementsToRight()
    };
    this.shiftElementsToLeft = function () {
        k.shiftElementsToLeft();
        q.shiftElementsToLeft()
    };
    this.enableShieldBonus = function () {
        l.activeShieldLight()
    };
    this.activeShield = function () {
        n.enableShield()
    };
    this.enableExtraBallBonus = function () {
        l.activeExtraBallLight()
    };
    this.activeExtraBall = function () {
        s_oGame.setExtraBall()
    };
    this.enableJackpot = function () {
        h.enableJackpot()
    };
    this.onJackpotIncreased = function (b) {
        h.setJackpotAmount(b)
    };
    this.getTableSize = function () {
        return {w: e, h: c}
    };
    this.getAdjustedPoints = function (b, a, d) {
        for (var c = [], h = 0; h < d.length; h++) c[h] = {x: g.x + b + d[h].x, y: g.y + a + d[h].y};
        return c
    };
    this.update =
        function () {
            h.update();
            m.update();
            b.update()
        };
    s_oTable = this;
    this._init(a, f)
}

var s_oTable;
(function (a, f) {
    "undefined" === typeof onTileMapLoaded ? ("undefined" === typeof TileMaps && (TileMaps = {}), TileMaps[a] = f) : onTileMapLoaded(a, f);
    "object" === typeof module && module && module.exports && (module.exports = f)
})("levelsettings", {
    height: 1,
    infinite: !1,
    layers: [{
        data: [0],
        height: 1,
        name: "Livello tile 1",
        opacity: 1,
        type: "tilelayer",
        visible: !0,
        width: 1,
        x: 0,
        y: 0
    }, {
        image: "../sprites/pinball_reference(old).jpg",
        name: "Livello immagine 1",
        opacity: .5,
        type: "imagelayer",
        visible: !0,
        x: 0,
        y: 0
    }, {
        draworder: "topdown", name: "edge_frame",
        objects: [{
            height: 0,
            id: 32,
            name: "outer",
            polyline: [{x: 0, y: 0}, {x: -.333334, y: -1260.334}, {x: -4.33334, y: -1320.334}, {
                x: -10.33334,
                y: -1369.666
            }, {x: -20.3334, y: -1419.666}, {x: -33.6666, y: -1459}, {x: -50.3334, y: -1496.334}, {
                x: -77.6666,
                y: -1549
            }, {x: -115, y: -1594.334}, {x: -153.6666, y: -1633.666}, {x: -210.334, y: -1685}, {
                x: -241.666,
                y: -1709.666
            }, {x: -295, y: -1735}, {x: -345, y: -1755.666}, {x: -398.334, y: -1768.334}, {
                x: -451,
                y: -1776.334
            }, {x: -501, y: -1779}, {x: -549, y: -1781}, {x: -605, y: -1775}, {x: -661, y: -1767}, {
                x: -713,
                y: -1753
            }, {x: -757, y: -1735},
                {x: -811, y: -1711}, {x: -857, y: -1683}, {x: -899, y: -1651}, {x: -949, y: -1607}, {
                    x: -989,
                    y: -1563
                }, {x: -1027, y: -1517}, {x: -1055, y: -1465}, {x: -1075, y: -1411}, {x: -1089, y: -1349}, {
                    x: -1099,
                    y: -1281
                }, {x: -1098.334, y: -613}, {x: -1025.668, y: -541}, {x: -1025.666, y: -511.666}, {
                    x: -1102.334,
                    y: -434.334
                }, {x: -1103, y: -115}, {x: -1093, y: -96.3334}, {x: -1082.334, y: -87}, {
                    x: -786.334,
                    y: 51
                }, {x: -786.334, y: 96.3334}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 1127,
            y: 1805
        }, {
            height: 0,
            id: 33,
            name: "inner",
            polyline: [{x: 53.3334, y: 0}, {x: 0, y: 0}, {x: -1.333334, y: -1218.666},
                {x: -5.33334, y: -1308.666}, {x: -24, y: -1405.334}, {x: -58, y: -1486.666}, {
                    x: -84.6666,
                    y: -1529.334
                }, {x: -106.6666, y: -1552.666}, {x: -164, y: -1606}, {x: -188, y: -1602.666}, {
                    x: -200,
                    y: -1592
                }, {x: -198, y: -1515.334}, {x: -188, y: -1503.334}, {x: -124.6666, y: -1502.666}, {
                    x: -37,
                    y: -1127.666
                }, {x: -48.8334, y: -1090.334}, {x: -106.9166, y: -942.25}, {x: -110.8126, y: -931.48}, {
                    x: -113.7084,
                    y: -921.708
                }, {x: -116.5, y: -911.166}, {x: -118.9166, y: -900.834}, {x: -121.875, y: -889.916}, {
                    x: -123.8334,
                    y: -879
                }, {x: -126.2916, y: -867.25}, {x: -128.25, y: -856}, {
                    x: -129.6666,
                    y: -842.5
                }, {x: -128.6666, y: -584}, {x: -123.3334, y: -568.666}, {x: -11.33334, y: -452}, {
                    x: -11.33334,
                    y: -157.3334
                }, {x: -22, y: -121.3334}, {x: -36.6666, y: -103.3334}, {x: -360, y: 46}, {x: -359.334, y: 95.3334}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 1060,
            y: 1805.334
        }], opacity: 1, type: "objectgroup", visible: !0, x: 0, y: 0
    }, {
        draworder: "topdown",
        name: "left_router",
        objects: [{
            height: 0,
            id: 50,
            name: "router_head",
            polyline: [{x: 0, y: 0}, {x: 50, y: 14}, {x: 48, y: 88}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 290,
            y: 198
        }, {
            height: 0,
            id: 53,
            name: "router_tail",
            polyline: [{x: 181, y: 0}, {x: 131, y: 44}, {x: 91, y: 88}, {x: 53, y: 134}, {x: 25, y: 186}, {
                x: 5,
                y: 240
            }, {x: 0, y: 291}, {x: 9, y: 339}, {x: 34.6666, y: 403.666}, {x: 43.3334, y: 380.334}, {
                x: 51.3334,
                y: 359
            }, {x: 62.6666, y: 332.334}, {x: 78, y: 302.334}, {x: 94, y: 274.334}, {x: 116, y: 244.334}, {
                x: 148.6666,
                y: 201.666
            }, {x: 185.3334, y: 156}, {x: 229.334, y: 89.3334}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 108,
            y: 198
        }, {
            height: 0,
            id: 95,
            name: "fork_right",
            polyline: [{x: 33, y: -37}, {x: 32, y: -18}, {x: 31, y: 2}, {x: 31, y: 32}, {x: 31, y: 56}, {
                x: 31,
                y: 86
            }, {x: 31, y: 111}, {x: 30, y: 145},
                {x: 30, y: 181}, {x: 31, y: 211}, {x: 42, y: 244}, {x: 63, y: 274}, {x: 103, y: 313}, {
                    x: 123.6666,
                    y: 338.334
                }, {x: 144, y: 368.666}, {x: 160.6668, y: 394.666}, {x: 172.6668, y: 423.666}, {
                    x: 177.3334,
                    y: 449
                }, {x: 175.3334, y: 473.334}, {x: 167.6666, y: 506.666}, {x: 161.6668, y: 474.334}, {
                    x: 144.6666,
                    y: 437.334
                }, {x: 125, y: 408.334}, {x: 102.6666, y: 381.666}, {x: 84, y: 362}, {x: 60, y: 339}, {
                    x: 37,
                    y: 317
                }, {x: 15, y: 295}, {x: -8, y: 267}, {x: -16, y: 242}, {x: -20, y: 208}, {x: -19, y: 182}, {
                    x: -21,
                    y: 146
                }, {x: -20, y: 118}, {x: -20, y: 89}, {x: -20, y: 58}, {x: -16, y: -39}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 419,
            y: 337
        }, {
            height: 0,
            id: 96,
            name: "fork_left",
            polyline: [{x: 0, y: 0}, {x: -3, y: 18}, {x: -11, y: 30}, {x: -20, y: 40}, {x: -30, y: 61}, {
                x: -42,
                y: 80
            }, {x: -53, y: 99}, {x: -64, y: 113}, {x: -79, y: 130}, {x: -94, y: 150}, {x: -113, y: 176}, {
                x: -127,
                y: 197
            }, {x: -139, y: 219}, {x: -149, y: 236}, {x: -160, y: 256}, {x: -173, y: 280}, {
                x: -188,
                y: 308
            }, {x: -204.5, y: 338.5}, {x: -218, y: 370.334}, {x: -228.334, y: 406.666}, {x: -227.668, y: 435}, {
                x: -225,
                y: 456.666
            }, {x: -219.334, y: 474.5}, {x: -209.5, y: 494.668}, {x: -181, y: 529}, {x: -186, y: 503}, {
                x: -185,
                y: 463.332
            }, {x: -177, y: 434.332},
                {x: -167.3332, y: 408.334}, {x: -150.3334, y: 372}, {x: -129, y: 334.666}, {
                    x: -111.2552,
                    y: 305.252
                }, {x: -93, y: 279}, {x: -75, y: 251}, {x: -65, y: 231}, {x: -54, y: 201}, {x: -34, y: 173}, {
                    x: -23,
                    y: 149
                }, {x: -4, y: 126}, {x: 11, y: 110}, {x: 31, y: 84}, {x: 37, y: 71}, {x: 47, y: 44}, {
                    x: 48,
                    y: 20
                }, {x: 50, y: 4}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 401,
            y: 313
        }, {
            height: 0,
            id: 97,
            name: "curve_top",
            polyline: [{x: -8, y: -5}, {x: 10, y: -33}, {x: 23, y: -45}, {x: 35, y: -52}, {x: 45, y: -55}, {
                x: 60,
                y: -58
            }, {x: 74, y: -56}, {x: 86, y: -49}, {x: 97, y: -41}, {x: 106, y: -30}, {x: 115, y: -20}, {
                x: 125,
                y: -6
            }],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 298,
            y: 625
        }, {
            height: 0,
            id: 100,
            name: "curve_bot",
            polyline: [{x: 28, y: -60}, {x: 26, y: -83}, {x: 34, y: -108}, {x: 43, y: -130}, {x: 51, y: -148}, {
                x: 59,
                y: -165
            }, {x: 68, y: -177}, {x: 76, y: -183}, {x: 85, y: -186}, {x: 94, y: -188}, {x: 104.75, y: -186.25}, {
                x: 116,
                y: -181
            }, {x: 126, y: -173}, {x: 140, y: -158}, {x: 151, y: -146}, {x: 164, y: -134}, {x: 176, y: -119}, {
                x: 190,
                y: -102
            }, {x: 202, y: -87}, {x: 208.666, y: -78.3334}, {x: 212, y: -67}, {x: 208, y: -59}, {
                x: 191,
                y: -55
            }, {x: 38, y: -59}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 269,
            y: 856
        }],
        opacity: 1,
        type: "objectgroup",
        visible: !0,
        x: 0,
        y: 0
    }, {
        draworder: "topdown",
        name: "Livello di oggetti 10",
        objects: [{height: 1920, id: 120, name: "", rotation: 0, type: "", visible: !0, width: 1152, x: 0, y: 0}],
        opacity: 1,
        type: "objectgroup",
        visible: !0,
        x: 0,
        y: 0
    }, {
        draworder: "topdown",
        name: "centersafe",
        objects: [{
            ellipse: !0,
            height: 20,
            id: 115,
            name: "center",
            rotation: 0,
            type: "",
            visible: !0,
            width: 20,
            x: 520,
            y: 1862
        }],
        opacity: 1,
        type: "objectgroup",
        visible: !0,
        x: 0,
        y: 0
    }, {
        draworder: "topdown", name: "top_channellers", objects: [{
            height: 0,
            id: 56,
            name: "4",
            polygon: [{x: 0, y: 0}, {x: 10, y: -2}, {x: 20, y: 0}, {x: 30, y: 6}, {x: 36, y: 16}, {
                x: 36,
                y: 90
            }, {x: 32, y: 98}, {x: 22, y: 106}, {x: 2, y: 106}, {x: -6, y: 102}, {x: -14, y: 90}, {
                x: -14,
                y: 18
            }, {x: -8, y: 8}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 760,
            y: 228
        }, {
            height: 0,
            id: 57,
            name: "3",
            polygon: [{x: 0, y: 0}, {x: 10, y: -2}, {x: 20, y: 0}, {x: 30, y: 6}, {x: 36, y: 16}, {
                x: 36,
                y: 90
            }, {x: 32, y: 98}, {x: 22, y: 106}, {x: 2, y: 106}, {x: -6, y: 102}, {x: -14, y: 90}, {
                x: -14,
                y: 18
            }, {x: -8, y: 8}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 644,
            y: 252
        }, {
            height: 0,
            id: 58,
            name: "2",
            polygon: [{
                x: 0,
                y: 0
            }, {x: 10, y: -2}, {x: 20, y: 0}, {x: 30, y: 6}, {x: 36, y: 16}, {x: 36, y: 90}, {x: 32, y: 98}, {
                x: 22,
                y: 106
            }, {x: 2, y: 106}, {x: -6, y: 102}, {x: -14, y: 90}, {x: -14, y: 18}, {x: -8, y: 8}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 528,
            y: 252
        }, {
            height: 0,
            id: 59,
            name: "1",
            polygon: [{x: 0, y: 0}, {x: 10, y: -2}, {x: 20, y: 0}, {x: 25, y: 3}, {x: 30, y: 6}, {x: 36, y: 16}, {
                x: 36,
                y: 90
            }, {x: 32, y: 98}, {x: 22, y: 106}, {x: 2, y: 106}, {x: -6, y: 102}, {x: -14, y: 90}, {
                x: -14,
                y: 18
            }, {x: -8, y: 8}],
            rotation: 0,
            type: "",
            visible: !0,
            width: 0,
            x: 416,
            y: 228
        }], opacity: 1, type: "objectgroup", visible: !0, x: 0, y: 0
    },
        {
            draworder: "topdown",
            name: "bot_channellers",
            objects: [{
                height: 0,
                id: 79,
                name: "vertical_right",
                polygon: [{x: -2, y: 0}, {x: 8, y: 0}, {x: 10, y: 196}, {x: 6, y: 202}, {x: 0, y: 206}, {
                    x: -4,
                    y: 202
                }, {x: -6, y: 196}, {x: -6, y: 192}],
                rotation: 0,
                type: "",
                visible: !0,
                width: 0,
                x: 978,
                y: 1402
            }, {
                height: 0,
                id: 80,
                name: "horizontal_right",
                polygon: [{x: 0, y: 0}, {x: 8, y: 14}, {x: -224, y: 122}, {x: -236, y: 86}],
                rotation: 0,
                type: "",
                visible: !0,
                width: 0,
                x: 972,
                y: 1592
            }, {
                height: 0,
                id: 83,
                name: "vertical_left",
                polygon: [{x: -2, y: 0}, {x: 8, y: 0}, {x: 10, y: 196}, {x: 6, y: 202}, {x: 0, y: 206},
                    {x: -4, y: 202}, {x: -6, y: 196}, {x: -6, y: 192}],
                rotation: 0,
                type: "",
                visible: !0,
                width: 0,
                x: 92,
                y: 1406
            }, {
                height: 0,
                id: 84,
                name: "horizontal_left",
                polygon: [{x: 0, y: 0}, {x: 222, y: 84}, {x: 204, y: 120}, {x: -4, y: 20}],
                rotation: 0,
                type: "",
                visible: !0,
                width: 0,
                x: 96,
                y: 1592
            }, {
                ellipse: !0,
                height: 20,
                id: 85,
                name: "head_left",
                rotation: 0,
                type: "",
                visible: !0,
                width: 20,
                x: 86,
                y: 1392
            }, {
                ellipse: !0,
                height: 20,
                id: 87,
                name: "head_right",
                rotation: 0,
                type: "",
                visible: !0,
                width: 20,
                x: 972,
                y: 1386
            }],
            opacity: 1,
            type: "objectgroup",
            visible: !0,
            x: 0,
            y: 0
        }, {
            draworder: "topdown",
            name: "flipper_bumper",
            objects: [{
                height: 0,
                id: 88,
                name: "right",
                polygon: [{x: 2.41666, y: -9.91666}, {x: 0, y: 200}, {x: -96, y: 236}, {x: -126, y: 216}, {
                    x: -42.1212,
                    y: 12.18184
                }, {x: -36.6666, y: 2}, {x: -29.1818, y: -7.0227}, {x: -21.5152, y: -14.8636}, {
                    x: -11.72726,
                    y: -23.197
                }, {x: 2.14396, y: -29.7348}],
                rotation: 0,
                type: "",
                visible: !0,
                width: 0,
                x: 904,
                y: 1348
            }, {
                height: 0,
                id: 89,
                name: "left",
                polygon: [{x: 0, y: 0}, {x: 90, y: 210}, {x: 68, y: 232}, {x: -36, y: 192}, {
                    x: -33.3334,
                    y: -7.33334
                }, {x: -32.7272, y: -34.0606}, {x: -23.6666, y: -27.697}, {x: -16.33332, y: -20.6666},
                    {x: -7.66666, y: -10}],
                rotation: 0,
                type: "",
                visible: !0,
                width: 0,
                x: 210,
                y: 1354
            }],
            opacity: 1,
            type: "objectgroup",
            visible: !0,
            x: 0,
            y: 0
        }, {
            draworder: "topdown", name: "right_channeller", objects: [{
                height: 0,
                id: 90,
                name: "channeller",
                polygon: [{x: 69.909, y: -156.1666}, {x: 73.5758, y: -145.1666}, {
                    x: 76.7424,
                    y: -132.8334
                }, {x: 77.2424, y: -121.5}, {x: -38, y: 128.8334}, {x: -44.6666, y: 129.5}, {
                    x: -53.3334,
                    y: 128.8334
                }, {x: -62.6666, y: 124.1666}, {x: -68.1818, y: 115.1364}, {x: -68.6666, y: 105.5}, {
                    x: -67.2728,
                    y: 97.1364
                }, {x: 52.909, y: -155.1666}, {x: 62.409, y: -173.6666}],
                rotation: 0,
                type: "",
                visible: !0,
                width: 0,
                x: 924,
                y: 691.334
            }], opacity: 1, type: "objectgroup", visible: !0, x: 0, y: 0
        }, {
            draworder: "topdown",
            name: "circle_bumper",
            objects: [{
                ellipse: !0,
                height: 120,
                id: 94,
                name: "3",
                rotation: 0,
                type: "",
                visible: !0,
                width: 120,
                x: 739.334,
                y: 422.666
            }, {
                ellipse: !0,
                height: 120,
                id: 91,
                name: "2",
                rotation: 0,
                type: "",
                visible: !0,
                width: 120,
                x: 678,
                y: 608
            }, {
                ellipse: !0,
                height: 120,
                id: 93,
                name: "1",
                rotation: 0,
                type: "",
                visible: !0,
                width: 120,
                x: 517.334,
                y: 467.334
            }],
            opacity: 1,
            type: "objectgroup",
            visible: !0,
            x: 0,
            y: 0
        }, {
            draworder: "topdown",
            name: "flipper",
            objects: [{
                height: 0,
                id: 113,
                name: "right",
                polygon: [{x: 0, y: 0}, {x: -144, y: 55.3334}, {x: -150.6666, y: 53.3334}, {
                    x: -154.5,
                    y: 49.5834
                }, {x: -156.6666, y: 46}, {x: -158.6666, y: 41.3334}, {x: -159.25, y: 35.5}, {
                    x: -158.0834,
                    y: 30.6666
                }, {x: -153.5, y: 26.4166}, {x: -20.5834, y: -44.5834}, {x: -13.83334, y: -46.1666}, {
                    x: -8,
                    y: -45.3334
                }, {x: -2, y: -42.6666}, {x: 2, y: -39.3334}, {x: 5.33334, y: -32.6666}, {
                    x: 8.83334,
                    y: -24.5834
                }, {x: 9.33334, y: -14.66666}, {x: 6.66666, y: -6.66666}],
                rotation: 0,
                type: "",
                visible: !0,
                width: 0,
                x: 735.334,
                y: 1730
            }, {
                height: 0,
                id: 114,
                name: "left",
                polygon: [{x: 0, y: 9.1668}, {x: -144, y: -46.1666}, {x: -150.6666, y: -44.1666}, {
                    x: -154.5,
                    y: -40.4166
                }, {x: -156.6666, y: -36.8332}, {x: -158.6666, y: -32.1666}, {x: -159.25, y: -26.3332}, {
                    x: -158.0834,
                    y: -21.4998
                }, {x: -153.5, y: -17.2498}, {x: -20.5834, y: 53.7502}, {x: -13.83334, y: 55.3334}, {
                    x: -8,
                    y: 54.5002
                }, {x: -2, y: 51.8334}, {x: 2, y: 48.5002}, {x: 5.33334, y: 41.8334}, {
                    x: 8.83334,
                    y: 33.7502
                }, {x: 9.33334, y: 23.8334}, {x: 6.66666, y: 15.83346}],
                rotation: 180,
                type: "",
                visible: !0,
                width: 0,
                x: 315.584,
                y: 1735.666
            }],
            opacity: 1,
            type: "objectgroup",
            visible: !0,
            x: 0,
            y: 0
        }],
    nextobjectid: 122,
    orientation: "orthogonal",
    renderorder: "right-down",
    tiledversion: "2018.03.21",
    tileheight: 960,
    tilesets: [],
    tilewidth: 576,
    type: "map",
    version: 1.2,
    width: 1
});

function CButtonSystem() {
    var a, f, e, c, g, k, d, l;
    this._init = function () {
        a = !0;
        e = f = !1;
        g = [];
        c = [];
        k = []
    };
    this.setAutoReset = function (b) {
        a = b
    };
    this.setReturn = function (b) {
        f = b
    };
    this.restart = function () {
        e = !1;
        for (var b = 0; b < c.length; b++) c[b] = !1, g[b].SetActive(!0), k[b].flashing()
    };
    this.reset = function () {
        e = !1;
        for (var b = 0; b < c.length; b++) c[b] = !1, g[b].SetActive(!0), k[b].slowOff(500, 100 * (c.length - b - 1))
    };
    this.addButton = function (b, a, d, e, f, l, m, v, y) {
        g.push(s_oObjectBuilder.addButton(b, a, d, e, f, 0, 1, .8, {
            contacttype: CONTACT_BEGIN,
            callback: this._buttonHit, params: g.length
        }));
        c.push(!1);
        b = new CLightIndicator(l, d + m, e + v, y);
        b.rotate(f);
        k.push(b)
    };
    this.flipButtonX = function () {
        for (var b = 0; b < g.length; b++) k[b].flipX()
    };
    this.setResititution = function (b) {
        for (var a = 0; a < g.length; a++) g[a].GetFixtureList().SetRestitution(b)
    };
    this._buttonHit = function (b) {
        c[b] ? playSound("pinball_button_off", 1, !1) : playSound("pinball_button_on", 1, !1);
        c[b] = !0;
        var a = g[b];
        f && s_oPhysicsController.disableBody(a);
        k[b].lit(!0);
        l && l();
        m.checkTriggerEvent()
    };
    this.addSingleButtonListener =
        function (b) {
            l = b
        };
    this.addAllButtonHitListener = function (b) {
        d = b
    };
    this.checkTriggerEvent = function () {
        for (var b = 0; b < c.length; b++) if (!c[b] || e) return;
        e = !0;
        if (a) {
            e = !1;
            for (b = 0; b < c.length; b++) k[b].flashing(), c[b] = !1;
            setTimeout(function () {
                for (var b = 0; b < c.length; b++) g[b].SetActive(!0)
            }, 500)
        }
        playSound("all_lights_on_1", 1, !1);
        d && d()
    };
    var m = this;
    this._init()
}

function CToggleSystem() {
    var a, f, e, c, g;
    this._init = function () {
        f = [];
        a = [];
        e = []
    };
    this.restart = function () {
        for (var d = 0; d < a.length; d++) a[d] = !1, e[d].flashing()
    };
    this.reset = function () {
        for (var d = 0; d < a.length; d++) a[d] = !1, e[d].slowOff(500, 100 * (a.length - d - 1))
    };
    this.addButton = function (d, c, g, b, k, h, n, t, x, r) {
        f.push(s_oObjectBuilder.addButton(d, c, g, b, k, 0, 1, 1, {
            contacttype: CONTACT_BEGIN,
            callback: this._buttonHit,
            params: f.length
        }));
        f[f.length - 1].GetFixtureList().SetSensor(!0);
        a.push(!1);
        d = new CLightIndicator(h, g + n, b + t,
            x);
        d.addText(r, 0, 0, 40, "#000000");
        e.push(d)
    };
    this._buttonHit = function (d) {
        a[d] = !0;
        playSound("toggle", 1, !1);
        e[d].lit(a[d]);
        g && g(d);
        k.checkTriggerEvent()
    };
    this.addSingleButtonListener = function (a) {
        g = a
    };
    this.addAllButtonHitListener = function (a) {
        c = a
    };
    this.shiftRight = function () {
        var d = a.pop();
        a.unshift(d);
        for (d = 0; d < e.length; d++) e[d].lit(a[d])
    };
    this.shiftLeft = function () {
        var d = a.shift();
        a.push(d);
        for (d = 0; d < e.length; d++) e[d].lit(a[d])
    };
    this.checkTriggerEvent = function () {
        for (var d = 0; d < a.length; d++) if (!a[d]) return;
        k.restart();
        playSound("all_lights_on_2", 1, !1);
        c && c()
    };
    var k = this;
    this._init()
}

function CHoleSystem(a, f, e) {
    var c, g, k;
    this._init = function (a, d, b) {
        g = s_oObjectBuilder.addStaticCircle(1, a, d, 0, 0, 0, {
            contacttype: CONTACT_BEGIN,
            callback: this._holeHit,
            params: "hole_enabled"
        });
        g.GetBody().GetFixtureList().SetSensor(!0)
    };
    this.addHoleEventListener = function (a) {
        c = a
    };
    this.setLaunchImpulse = function (a, d) {
        k = {x: a, y: d}
    };
    this._disableHole = function () {
        g.SetUserData({contacttype: CONTACT_BEGIN, callback: d._wakeUpHole, params: "hole_disabled"})
    };
    this._wakeUpHole = function () {
        g.SetUserData({
            contacttype: CONTACT_END,
            callback: d._enableHole, params: "hole_wake"
        })
    };
    this._enableHole = function () {
        g.SetUserData({contacttype: CONTACT_BEGIN, callback: d._holeHit, params: "hole_enabled"})
    };
    this._releaseBall = function (a) {
        a.SetActive(!0);
        k && (d._enableHole(), a.ApplyImpulse(k, a.GetPosition()))
    };
    this._centerBallInHole = function (c) {
        d._disableHole();
        c.SetLinearVelocity({x: 0, y: 0});
        c.SetAngularVelocity(0);
        s_oPhysicsController.disableBody(c, {x: a, y: f});
        playSound("in_hole", 1, !1);
        setTimeout(function () {
                playSound("out_hole", 1, !1);
                d._releaseBall(c)
            },
            e)
    };
    this._getBall = function (a) {
        var d = a.GetFixtureA().GetUserData(), b = a.GetFixtureB().GetUserData(), c;
        d.id && "ball" === d.id && (c = a.GetFixtureA().GetBody());
        b.id && "ball" === b.id && (c = a.GetFixtureB().GetBody());
        return c
    };
    this._holeHit = function (a, e) {
        var b = d._getBall(e);
        d._centerBallInHole(b);
        c && c()
    };
    this.getHole = function () {
        return g.GetBody()
    };
    var d = this;
    this._init(a, f, e)
}

var GATE_LISTENER_STATE_CLOSED = 0, GATE_LISTENER_STATE_OPEN = 1;

function CGateSystem(a, f) {
    var e, c, g, k;
    this._init = function (a, d) {
        c = e = null
    };
    this.addGate = function (d, c, b) {
        k = s_oObjectBuilder.addButton(d, c, a, f, b, 0, 1, .4)
    };
    this.addSprite = function (d, c, b, e, h) {
        d = createBitmap(d);
        d.x = a;
        d.y = f;
        d.regX = h;
        d.regY = e;
        d.rotation = b;
        c.addChild(d)
    };
    this.addOpener = function (d, c, b, e, h) {
        s_oObjectBuilder.addStaticCircle(b, a + d, f + c, 0, 0, 0, {
            contacttype: CONTACT_BEGIN,
            callback: this._openGate,
            params: {openingid: e, gateid: h}
        }).GetBody().GetFixtureList().SetSensor(!0)
    };
    this.addCloser = function (d, c, b, e,
                               h) {
        s_oObjectBuilder.addStaticCircle(b, a + d, f + c, 0, 0, 0, {
            contacttype: CONTACT_BEGIN,
            callback: this._closeGate,
            params: {openingid: e, gateid: h}
        }).GetBody().GetFixtureList().SetSensor(!0)
    };
    this.addPassingGateListener = function (a) {
        g = a
    };
    this.setRestitution = function (a) {
        k.GetFixtureList().SetRestitution(a)
    };
    this._openGate = function (a) {
        e = a.openingid;
        null === c && (c = a.gateid);
        c !== a.gateid && d._gatePassedCorrectly();
        s_oPhysicsController.disableBody(k)
    };
    this._closeGate = function (a) {
        e === a.openingid && d._gatePassedCorrectly();
        c = e = null;
        k.SetActive(!0)
    };
    this._gatePassedCorrectly = function () {
        g && g(c);
        playSound("gate", 1, !1);
        c = e = null
    };
    var d = this;
    this._init(a, f)
}

var SINGLE_BUTTON_SCORE = 0.5,
    CIRCLE_BUMPER_SCORE = [0.1, 0.2, 0.5, 1, 2, 5, 10],
    GATE_SCORE = 1,
    ROUTER_GATE_SCORE = [0.5, 1, 2, 5, 10, 20, 50],
    MULTIPLIER_TOGGLE_SCORE = 1,
    HOLE_BONUS_SCORE = [10, 50, 100, 500, 1E3, 5E3, 1E4],
    HOLE_STANDARD_SCORE = 5,
    SINGLE_LETTERS_LIT_SCORE = 500,
    ALL_LETTERS_LIT_SCORE = 5E4,
    JUMPER_SCORE = 5,
    ALL_JUMPER_BUTTONS_SCORE = 50;

function CSCoreController() {
    var a, f, e, c, g, k, d, l;
    this._init = function () {
        a = [];
        f = [];
        e = 0;
        c = 1;
        d = k = g = 0;
        l = -1
    };
    this._increaseJackpot = function (d) {
        g += Math.floor(d * SCORE_RATIO_TO_ADD_AT_JACKPOT);
        a[ON_INCREASE_JACKPOT] && a[ON_INCREASE_JACKPOT].call(f[ON_INCREASE_JACKPOT], g)
    };
    this._addScore = function (d) {
        e += d;
        s_oScoreController._increaseJackpot(d);
        a[ON_INCREASE_SCORE] && a[ON_INCREASE_SCORE].call(f[ON_INCREASE_SCORE], e)
    };
    this.resetScore = function () {
        e = 0;
        s_oScoreController._addScore(0)
    };
    this.getScore = function () {
        return e
    };
    this.addEventListener = function (d, b, c) {
        a[d] = b;
        f[d] = c
    };
    this.resetCircleBumperLevel = function () {
        k = 0
    };
    this.resetJackpot = function () {
        g = 0;
        a[ON_INCREASE_JACKPOT] && a[ON_INCREASE_JACKPOT].call(f[ON_INCREASE_JACKPOT], g)
    };
    this.resetMultiplier = function () {
        c = 1
    };
    this.getJackpotAmount = function () {
        return g
    };
    this.addButtonScore = function () {
        s_oScoreController._addScore(SINGLE_BUTTON_SCORE * c)
    };
    this.increaseCircleBumperLevel = function () {
        k++;
        k === CIRCLE_BUMPER_SCORE.length && (k = CIRCLE_BUMPER_SCORE.length - 1)
    };
    this.getBumperValue =
        function () {
            return CIRCLE_BUMPER_SCORE[k]
        };
    this.addCircleBumperScore = function () {
        s_oScoreController._addScore(CIRCLE_BUMPER_SCORE[k] * c)
    };
    this.addGateScore = function () {
        s_oScoreController._addScore(GATE_SCORE * c)
    };
    this.addRouterScore = function () {
        s_oScoreController._addScore(ROUTER_GATE_SCORE[d] * c)
    };
    this.increaseRouterLevel = function () {
        d++;
        d === ROUTER_GATE_SCORE.length && (d = ROUTER_GATE_SCORE.length - 1)
    };
    this.decreaseRouterLevel = function () {
        d--;
        0 > d && (d = 0)
    };
    this.getCurRouterLevel = function () {
        return d
    };
    this.resetRouterLevel =
        function () {
            d = 0
        };
    this.addMultiplierToggleScore = function () {
        s_oScoreController._addScore(MULTIPLIER_TOGGLE_SCORE * c)
    };
    this.addTotalMultiplierToggleScore = function () {
        s_oScoreController._addScore(10 * MULTIPLIER_TOGGLE_SCORE * c)
    };
    this.increaseMultiplier = function () {
        c++;
        c >= MAX_MULTIPLIER && (c = MAX_MULTIPLIER)
    };
    this.getCurMultiplier = function () {
        return c
    };
    this.addTotalHoleButtonScore = function () {
        s_oScoreController._addScore(10 * SINGLE_BUTTON_SCORE * c)
    };
    this.addStandardHoleScore = function () {
        s_oScoreController._addScore(HOLE_STANDARD_SCORE *
            c)
    };
    this.addHoleScoreBonus = function () {
        s_oScoreController._addScore(HOLE_BONUS_SCORE[l] * c)
    };
    this.increaseHoleBonusLevel = function () {
        l++
    };
    this.decreaseHoleBonusLevel = function () {
        l--
    };
    this.resetHoleBonusLevel = function () {
        l = -1
    };
    this.getCurHoleBonusLevel = function () {
        return l
    };
    this.addSingleLettersScore = function () {
        s_oScoreController._addScore(SINGLE_LETTERS_LIT_SCORE * c)
    };
    this.addAllLettersScore = function () {
        s_oScoreController._addScore(ALL_LETTERS_LIT_SCORE * c)
    };
    this.addAllJumperButtonsScore = function () {
        s_oScoreController._addScore(ALL_JUMPER_BUTTONS_SCORE *
            c)
    };
    this.addJumperScore = function () {
        s_oScoreController._addScore(JUMPER_SCORE * c)
    };
    this.addJackpotScore = function () {
        s_oScoreController._addScore(g)
    };
    s_oScoreController = this;
    this._init()
}

var s_oScoreController;

function CLightIndicator(a, f, e, c) {
    var g, k, d, l;
    this._init = function (a, b, c, e) {
        g = new createjs.Container;
        g.x = b;
        g.y = c;
        e.addChild(g);
        b = new createjs.SpriteSheet({
            images: [a],
            frames: {width: a.width / 2, height: a.height, regX: a.width / 2 / 2, regY: a.height / 2},
            animations: {state_true: [0], state_false: [1]}
        });
        d = createSprite(b, "state_false", a.width / 2 / 2, a.height / 2, a.width / 2, a.height);
        g.addChild(d);
        k = createSprite(b, "state_true", a.width / 2 / 2, a.height / 2, a.width / 2, a.height);
        k.alpha = 0;
        g.addChild(k)
    };
    this.unload = function () {
        createjs.Tween.removeTweens(k);
        c.removeChild(k)
    };
    this.lit = function (a) {
        createjs.Tween.removeTweens(k);
        k.alpha = a ? 1 : 0
    };
    this.slowOn = function (a, b) {
        createjs.Tween.get(k, {override: !0}).wait(b).to({alpha: 1}, a)
    };
    this.highlight = function (a) {
        k.alpha = 0;
        createjs.Tween.get(k, {override: !0, loop: !0}).to({alpha: 1}, a / 3).wait(a / 3).to({alpha: 0}, a / 3)
    };
    this.slowHighlight = function (a, b, d) {
        k.alpha = 0;
        createjs.Tween.get(k, {override: !0}).wait(b).to({alpha: 1}, a / 3).wait(a / 3).to({alpha: 0}, a / 3).call(function () {
            d()
        })
    };
    this.slowOff = function (a, b) {
        createjs.Tween.get(k,
            {override: !0}).wait(b).to({alpha: 0}, a)
    };
    this.flashing = function () {
        createjs.Tween.get(k, {override: !0}).to({alpha: 0}, 100).to({alpha: 1}, 100).to({alpha: 0}, 100).to({alpha: 1}, 100).to({alpha: 0}, 100).to({alpha: 1}, 100).to({alpha: 0}, 100)
    };
    this.addPreciseText = function (a, b, d, c, e, f, k) {
        l = (new CTLText(g, b - f / 2, d - k / 2, f, k, c, "center", e, PRIMARY_FONT, 1.3, 2, 2, a, !0, !0, !0, !1)).getText()
    };
    this.addText = function (a, b, d, c, e) {
        l = new createjs.Text(a, c + "px " + PRIMARY_FONT, e);
        l.x = b;
        l.y = d;
        l.textAlign = "center";
        l.textBaseline = "middle";
        l.lineWidth = 200;
        g.addChild(l);
        l.cache(-g.getBounds().width / 2, -g.getBounds().height / 2, g.getBounds().width, g.getBounds().height)
    };
    this.setText = function (a) {
        l.text = a;
        l.updateCache()
    };
    this.textRotate = function (a) {
        l.rotation = a
    };
    this.rotate = function (a) {
        g.rotation = a
    };
    this.scale = function (a) {
        g.scaleX = g.scaleY = a
    };
    this.flipX = function () {
        g.scaleX = -1
    };
    this._init(a, f, e, c)
}

function CModuleMultiplier(a, f) {
    var e, c, g;
    this._init = function (a, c) {
        this._addCapsule();
        this._addToggle();
        this._addMultiplierIndicator()
    };
    this._addCapsule = function () {
        e = [];
        var a = s_oSpriteLibrary.getSprite("capsule_0");
        a = new CLightIndicator(a, 428, 286, f);
        e.push(a);
        a = s_oSpriteLibrary.getSprite("capsule_1");
        a = new CLightIndicator(a, 540, 312, f);
        e.push(a);
        a = s_oSpriteLibrary.getSprite("capsule_2");
        a = new CLightIndicator(a, 656, 312, f);
        e.push(a);
        a = s_oSpriteLibrary.getSprite("capsule_3");
        a = new CLightIndicator(a, 770,
            286, f);
        e.push(a)
    };
    this._addToggle = function () {
        var d = s_oSpriteLibrary.getSprite("multiplier_toggle_light");
        g = new CToggleSystem;
        g.addButton(4, 8, 380, 280, 0, d, 0, -80, a, TEXT_MULTI[0]);
        g.addButton(4, 8, 490, 304, 0, d, 0, -80, a, TEXT_MULTI[1]);
        g.addButton(4, 8, 600, 320, 0, d, 0, -80, a, TEXT_MULTI[2]);
        g.addButton(4, 8, 710, 304, 0, d, 0, -80, a, TEXT_MULTI[3]);
        g.addButton(4, 8, 820, 280, 0, d, 0, -80, a, TEXT_MULTI[4]);
        g.addAllButtonHitListener(this._onAllLightOn);
        g.addSingleButtonListener(this._onToggle)
    };
    this._onToggle = function (a) {
        s_oScoreController.addMultiplierToggleScore();
        k._radialAnim(a)
    };
    this._onAllLightOn = function () {
        s_oScoreController.increaseMultiplier();
        s_oScoreController.addTotalMultiplierToggleScore();
        for (var a = s_oScoreController.getCurMultiplier(), e = 2; e <= MAX_MULTIPLIER; e++) c[e].lit(!1);
        c[a].lit(!0)
    };
    this._addMultiplierIndicator = function () {
        c = [];
        var d = new createjs.Container;
        d.x = 526;
        d.y = 1680;
        a.addChild(d);
        var e = Math.floor((MAX_MULTIPLIER - 1) / 2), f = 2, b = new createjs.Container;
        b.x = -440;
        d.addChild(b);
        for (var g = 0; g < e; g++) {
            var h = s_oSpriteLibrary.getSprite("multiplier_light");
            h = new CLightIndicator(h, 112 * g, 54 * g, b);
            h.addText("x" + f, 0, 0, 50, "#8416ff");
            h.rotate(25);
            c[f] = h;
            f++
        }
        b = new createjs.Container;
        b.x = 430;
        d.addChild(b);
        for (g = 0; g < e; g++) h = s_oSpriteLibrary.getSprite("multiplier_light"), h = new CLightIndicator(h, 112 * -g, 54 * g, b), h.addText("x" + f, 0, 0, 50, "#8416ff"), h.rotate(-25), c[f] = h, f++;
        f === MAX_MULTIPLIER && (h = s_oSpriteLibrary.getSprite("multiplier_light"), h = new CLightIndicator(h, 0, 160, d), h.addText("x" + f, 0, 0, 50, "#8416ff"), c[f] = h)
    };
    this._radialAnim = function (a) {
        for (var d = 0, c = a; c < e.length; c++) e[c].slowHighlight(500,
            150 * d, function () {
            }), d++;
        if (0 < a) for (d = 0, c = a - 1; 0 <= c; c--) e[c].slowHighlight(500, 150 * d, function () {
        }), d++
    };
    this.reset = function () {
        g.reset();
        c.forEach(function (a) {
            a.lit(!1)
        })
    };
    this.shiftElementsToRight = function () {
        g.shiftRight()
    };
    this.shiftElementsToLeft = function () {
        g.shiftLeft()
    };
    var k = this;
    this._init(a, f)
}

function CModuleBumper(a, f) {
    var e, c, g, k, d, l;
    this._init = function (a, b) {
        this._addLinearBumper();
        this._addCircularBumperSystemButton()
    };
    this.buildFlipperBumper = function (c) {
        for (var b = 0; b < c.length; b++) {
            var e = c[b];
            e = s_oTable.getAdjustedPoints(e.x, e.y, e.polygon);
            s_oObjectBuilder.addPolygon(e, 0, 1, .7, .3)
        }
        b = s_oSpriteLibrary.getSprite("flipper_bumper");
        c = {
            images: [b],
            frames: {width: b.width / 2, height: b.height, regX: b.width / 2 / 2, regY: b.height / 2},
            animations: {state_true: [0], state_false: [1]}
        };
        c = new createjs.SpriteSheet(c);
        d = createSprite(c, "state_false", b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
        d.x = 840;
        d.y = 1460;
        a.addChild(d);
        l = createSprite(c, "state_false", b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
        l.x = 240;
        l.y = 1460;
        l.scaleX = -1;
        a.addChild(l)
    };
    this._addLinearBumper = function () {
        var a = {contacttype: CONTACT_BEGIN, callback: this._leftFlipperBumperCollision, params: "bumper"};
        a = s_oObjectBuilder.addButton(220, 12, 252, 1460, 66.7, 0, 0, 0, a);
        a.GetFixtureList().SetSensor(!0);
        a = {
            contacttype: CONTACT_BEGIN, callback: this._rightFlipperBumperCollision,
            params: "bumper"
        };
        a = s_oObjectBuilder.addButton(220, 12, 824, 1460, -69, 0, 0, 0, a);
        a.GetFixtureList().SetSensor(!0)
    };
    this._leftFlipperBumperCollision = function (a, b) {
        var c = new Box2D.Common.Math.b2Vec2(-.4, .5), d = b.GetFixtureA().GetUserData(),
            e = b.GetFixtureB().GetUserData(), f;
        d.id && "ball" === d.id && (f = b.GetFixtureA().GetBody());
        e.id && "ball" === e.id && (f = b.GetFixtureB().GetBody());
        f.SetLinearVelocity({x: 0, y: 0});
        f.SetAngularVelocity(0);
        c.Multiply(20 * -f.GetMass());
        f.ApplyImpulse(c, f.GetPosition());
        l.gotoAndStop("state_true");
        setTimeout(function () {
            l.gotoAndStop("state_false")
        }, 100);
        playSound("bumper", 1, !1);
        s_oScoreController.addButtonScore()
    };
    this._rightFlipperBumperCollision = function (a, b) {
        var c = new Box2D.Common.Math.b2Vec2(.4, .5), e = b.GetFixtureA().GetUserData(),
            f = b.GetFixtureB().GetUserData(), g;
        e.id && "ball" === e.id && (g = b.GetFixtureA().GetBody());
        f.id && "ball" === f.id && (g = b.GetFixtureB().GetBody());
        g.SetLinearVelocity({x: 0, y: 0});
        g.SetAngularVelocity(0);
        c.Multiply(20 * -g.GetMass());
        g.ApplyImpulse(c, g.GetPosition());
        d.gotoAndStop("state_true");
        setTimeout(function () {
            d.gotoAndStop("state_false")
        }, 100);
        playSound("bumper", 1, !1);
        s_oScoreController.addButtonScore()
    };
    this.buildCircularBumper = function (d) {
        g = new createjs.Text(s_oScoreController.getBumperValue(), "40px " + PRIMARY_FONT, "#c6c6c6");
        g.x = 694;
        g.y = 570;
        g.rotation = -25;
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.lineWidth = 200;
        g.outline = 3;
        a.addChild(g);
        c = new createjs.Text(s_oScoreController.getBumperValue(), "40px " + PRIMARY_FONT, "#88028b");
        c.x = 694;
        c.y = 570;
        c.rotation = -25;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 200;
        a.addChild(c);
        e = [];
        for (var b = 0; b < d.length; b++) {
            var f = d[b], h = s_oTable.getAdjustedPoints(0, 0, [{x: f.x, y: f.y}]);
            this._addCircularBumper(f.width / 2, h[0].x + f.width / 2, h[0].y + f.width / 2, b)
        }
    };
    this._addCircularBumper = function (a, b, c, d) {
        s_oObjectBuilder.addStaticCircle(a, b, c, 0, 0, 0, {
            contacttype: CONTACT_BEGIN,
            callback: this._circularBumperCollision,
            params: d
        });
        e[d] = new createjs.Container;
        e[d].x = b;
        e[d].y = c;
        f.addChild(e[d]);
        c = s_oSpriteLibrary.getSprite("bumper");
        a = c.width / 7;
        b =
            c.height / 2;
        c = new createjs.SpriteSheet({
            images: [c],
            frames: {width: a, height: b, regX: a / 2, regY: b / 2},
            animations: {idle: [0], hit: [0, 13, "idle"]}
        });
        a = createSprite(c, "hit", a / 2, b / 2, a, b);
        e[d].addChild(a)
    };
    this._circularBumperCollision = function (a, b) {
        e[a].scaleX = .9;
        e[a].scaleY = .9;
        e[a].children[0].gotoAndPlay("hit");
        createjs.Tween.get(e[a], {override: !0}).to({scaleX: 1, scaleY: 1}, .1);
        var c = new Box2D.Collision.b2WorldManifold;
        b.GetWorldManifold(c);
        c = c.m_normal;
        var d = b.GetFixtureA().GetUserData(), f = b.GetFixtureB().GetUserData(),
            g;
        d.id && "ball" === d.id && (g = b.GetFixtureA().GetBody());
        f.id && "ball" === f.id && (g = b.GetFixtureB().GetBody());
        g.SetLinearVelocity({x: 0, y: 0});
        g.SetAngularVelocity(0);
        c.Multiply(14 * -g.GetMass());
        g.ApplyImpulse(c, g.GetPosition());
        playSound("bumper", 1, !1);
        s_oScoreController.addCircleBumperScore()
    };
    this._addCircularBumperSystemButton = function () {
        k = new CButtonSystem;
        for (var c = s_oSpriteLibrary.getSprite("bumper_button"), b = 0; 3 > b; b++) k.addButton(8, 60, 930 + 18 * b, 340 + 70 * b, -13, c, 0, 0, a);
        k.setReturn(!0);
        k.addAllButtonHitListener(this._onBumperLevelUp);
        k.addSingleButtonListener(s_oScoreController.addButtonScore)
    };
    this._onBumperLevelUp = function () {
        s_oScoreController.increaseCircleBumperLevel();
        c.text = s_oScoreController.getBumperValue();
        g.text = s_oScoreController.getBumperValue();
        for (var a = c.getBounds().width, b = 40; 80 <= a;) b--, c.font = " " + b + "px " + PRIMARY_FONT, g.font = " " + b + "px " + PRIMARY_FONT, a = c.getBounds().width
    };
    this.reset = function () {
        k.reset();
        c.font = " 40px " + PRIMARY_FONT;
        c.text = s_oScoreController.getBumperValue();
        g.font = " 40px " + PRIMARY_FONT;
        g.text =
            s_oScoreController.getBumperValue()
    };
    this._init(a, f)
}

function CModuleHole(a, f) {
    var e, c, g, k, d, l, m;
    this._init = function (a, b) {
        g = c = e = !1;
        this._addHole();
        this._addRightSystemButton();
        this._addLabels()
    };
    this._addHole = function () {
        var a = new CHoleSystem(988, 680, 1E3);
        a.addHoleEventListener(this._onHole);
        a.setLaunchImpulse(0, .8);
        a = s_oSpriteLibrary.getSprite("hole");
        a = createBitmap(a);
        a.x = 932;
        a.y = 600;
        f.addChild(a)
    };
    this._addRightSystemButton = function () {
        m = new CButtonSystem;
        for (var b = 2, c = 0; 4 > c; c++) {
            var d = s_oSpriteLibrary.getSprite("button_light_" + b);
            m.addButton(8, 56,
                924, 980 + 68 * c, 0, d, -52, 0, a);
            d = s_oSpriteLibrary.getSprite("bumper_button");
            new CLightIndicator(d, 918, 980 + 68 * c, a);
            b++
        }
        m.addAllButtonHitListener(this._onAllButtonActive);
        m.addSingleButtonListener(s_oScoreController.addButtonScore)
    };
    this._onAllButtonActive = function () {
        s_oScoreController.addTotalHoleButtonScore();
        if (!e) {
            e = !0;
            s_oScoreController.increaseHoleBonusLevel();
            var a = s_oScoreController.getCurHoleBonusLevel();
            k[a].highlight(2E3)
        }
    };
    this._onHole = function () {
        m.reset();
        if (e) {
            e = !1;
            s_oScoreController.addHoleScoreBonus();
            var a = s_oScoreController.getCurHoleBonusLevel();
            k[a].lit(!0);
            a === HOLE_BONUS_SCORE.length - 1 && b.reset()
        } else s_oScoreController.addStandardHoleScore();
        g && (playSound("bonus_win_1", 1, !1), b._activeExtraBall());
        c && (playSound("bonus_win_1", 1, !1), b._activeShield())
    };
    this._activeShield = function () {
        b.disableShieldLight();
        s_oTable.activeShield()
    };
    this._activeExtraBall = function () {
        b.disableExtraBallLight();
        s_oTable.activeExtraBall()
    };
    this._addLabels = function () {
        k = [];
        var b = 0, c = s_oSpriteLibrary.getSprite("light_indicator_0");
        c = new CLightIndicator(c, 1008, 880, a);
        c.addText(TEXT_HOLE_VALUE[b], 0, 0, 46, "#f68eff");
        c.textRotate(-20);
        c.scale(.68);
        b++;
        k.push(c);
        c = s_oSpriteLibrary.getSprite("light_indicator_0");
        c = new CLightIndicator(c, 1008, 940, a);
        c.addText(TEXT_HOLE_VALUE[b], 0, 0, 46, "#f68eff");
        c.textRotate(-20);
        c.scale(.68);
        b++;
        k.push(c);
        c = s_oSpriteLibrary.getSprite("light_indicator_0");
        c = new CLightIndicator(c, 1008, 1E3, a);
        c.addText(TEXT_HOLE_VALUE[b], 0, 0, 36, "#f68eff");
        c.textRotate(-20);
        c.scale(.68);
        b++;
        k.push(c);
        c = s_oSpriteLibrary.getSprite("light_indicator_0");
        c = new CLightIndicator(c, 1008, 1060, a);
        c.addText(TEXT_HOLE_VALUE[b], 0, 0, 34, "#f68eff");
        c.textRotate(-20);
        c.scale(.68);
        b++;
        k.push(c);
        c = s_oSpriteLibrary.getSprite("light_indicator_0");
        c = new CLightIndicator(c, 1008, 1120, a);
        c.addText(TEXT_HOLE_VALUE[b], 0, 0, 26, "#f68eff");
        c.textRotate(-20);
        c.scale(.68);
        b++;
        k.push(c);
        c = s_oSpriteLibrary.getSprite("light_indicator_0");
        c = new CLightIndicator(c, 1008, 1180, a);
        c.addText(TEXT_HOLE_VALUE[b], 0, 0, 26, "#f68eff");
        c.textRotate(-20);
        c.scale(.68);
        b++;
        k.push(c);
        c = s_oSpriteLibrary.getSprite("light_indicator_2");
        c = new CLightIndicator(c, 1008, 1240, a);
        c.addText(TEXT_HOLE_VALUE[b], 0, 0, 50, "#ff4040");
        c.textRotate(-20);
        c.scale(.68);
        k.push(c);
        b = new createjs.Container;
        b.x = 928;
        b.y = 820;
        a.addChild(b);
        c = s_oSpriteLibrary.getSprite("light_indicator_1");
        d = new CLightIndicator(c, 0, 0, b);
        d.addPreciseText(TEXT_SHIELD, 0, 0, 20, "#000000", 90, 70);
        d.scale(.7);
        d.rotate(25);
        c = s_oSpriteLibrary.getSprite("light_indicator_2");
        l = new CLightIndicator(c, -28, 60, b);
        l.addPreciseText(TEXT_EXTRABALL, 0, -2, 20, "#000000", 90, 70);
        l.scale(.7);
        l.rotate(25)
    };
    this.reset = function () {
        e = !1;
        s_oScoreController.resetHoleBonusLevel();
        for (var a = 0; a < k.length; a++) k[a].slowOff(500, 100 * (k.length - a - 1));
        m.reset();
        this.disableShieldLight();
        this.disableExtraBallLight()
    };
    this.disableShieldLight = function () {
        c = !1;
        d.lit(!1)
    };
    this.disableExtraBallLight = function () {
        g = !1;
        l.lit(!1)
    };
    this.activeShieldLight = function () {
        c = !0;
        d.highlight(2E3)
    };
    this.activeExtraBallLight = function () {
        g = !0;
        l.highlight(2E3)
    };
    var b = this;
    this._init(a, f)
}

function CModuleRouter(a, f) {
    var e, c;
    this._init = function (a, d) {
        e = 0;
        this._addRouterGate();
        this._addLabels();
        var f = s_oScoreController.getCurRouterLevel();
        c[f].highlight(2E3);
        this._setIntervalTime()
    };
    this._setIntervalTime = function () {
        e = TIME_ROUTER_SCORE_DECREASE
    };
    this._addRouterGate = function () {
        var a = new CGateSystem(256, 176);
        a.addGate(60, 8, 45);
        var c = s_oSpriteLibrary.getSprite("gate");
        a.addSprite(c, f, 25, c.height / 8, c.width / 2 + 16);
        a.addOpener(-40, 40, 12, !0);
        a.addCloser(56, -32, 12, !0);
        a.addCloser(-148, 176, 12, !1);
        a.addPassingGateListener(this._routerPassed)
    };
    this._routerPassed = function () {
        var a = s_oScoreController.getCurRouterLevel();
        c[a].lit(!0);
        s_oScoreController.addRouterScore();
        s_oScoreController.increaseRouterLevel();
        a = s_oScoreController.getCurRouterLevel();
        c[a].highlight(2E3);
        g._setIntervalTime()
    };
    this._addLabels = function () {
        c = [];
        var e = 0, d = s_oSpriteLibrary.getSprite("router_light_0");
        d = new CLightIndicator(d, 72, 624, a);
        d.addText(TEXT_ROUTER_VALUE[e], 0, 0, 26, "#f947ce");
        e++;
        c.push(d);
        d = s_oSpriteLibrary.getSprite("router_light_1");
        d = new CLightIndicator(d, 72, 556, a);
        d.addText(TEXT_ROUTER_VALUE[e], 0, 0, 20, "#55bdf5");
        e++;
        c.push(d);
        d = s_oSpriteLibrary.getSprite("router_light_2");
        d = new CLightIndicator(d, 72, 488, a);
        d.addText(TEXT_ROUTER_VALUE[e], 0, 0, 18, "#73ec34");
        e++;
        c.push(d);
        d = s_oSpriteLibrary.getSprite("router_light_3");
        d = new CLightIndicator(d, 80, 420, a);
        d.addText(TEXT_ROUTER_VALUE[e], 0, 0, 18, "#f2a937");
        e++;
        c.push(d);
        d = s_oSpriteLibrary.getSprite("router_light_4");
        d = new CLightIndicator(d, 104, 360, a);
        d.addText(TEXT_ROUTER_VALUE[e], 0, 0,
            26, "#f22935");
        e++;
        c.push(d);
        d = s_oSpriteLibrary.getSprite("router_light_5");
        d = new CLightIndicator(d, 140, 300, a);
        d.addText(TEXT_ROUTER_VALUE[e], 0, 0, 26, "#f3dc47");
        e++;
        c.push(d);
        d = s_oSpriteLibrary.getSprite("router_light_6");
        d = new CLightIndicator(d, 188, 240, a);
        d.addText(TEXT_ROUTER_VALUE[e], 0, 0, 26, "#9e2bf2");
        c.push(d)
    };
    this._levelDecreased = function () {
        var a = s_oScoreController.getCurRouterLevel();
        0 < a && (c[a].lit(!1), s_oScoreController.decreaseRouterLevel(), a = s_oScoreController.getCurRouterLevel(), c[a].highlight(2E3))
    };
    this.reset = function () {
        s_oScoreController.resetRouterLevel();
        for (var a = 0; a < c.length; a++) c[a].slowOff(500, 100 * (c.length - a - 1));
        a = s_oScoreController.getCurRouterLevel();
        c[a].highlight(2E3)
    };
    this.update = function () {
        e -= s_iTimeElaps;
        0 > e && (g._setIntervalTime(), g._levelDecreased())
    };
    var g = this;
    this._init(a, f)
}

var CURVE_FROM_RIGHT = 0, CURVE_FROM_LEFT = 1;

function CModuleLetters(a, f) {
    var e, c, g, k, d = 0, l, m, b, q, h, n, t, x;
    this._init = function (a, b) {
        k = g = c = e = !1;
        this._addSprite();
        this._addCurveGate();
        this._addCurveSystemButton();
        this._addArrows();
        this._addLetters();
        this._addLogo()
    };
    this._addSprite = function () {
        var a = new createjs.Container;
        a.x = 382;
        a.y = 560;
        f.addChild(a);
        var b = s_oSpriteLibrary.getSprite("curve_tunnel"), c = createBitmap(b);
        c.regX = b.width / 2;
        c.regY = b.height / 2;
        a.addChild(c);
        c = new createjs.Container;
        c.x = -16;
        c.y = -52;
        a.addChild(c);
        b = s_oSpriteLibrary.getSprite("eye");
        q = createBitmap(b);
        q.regX = b.width / 2;
        q.regY = b.height / 2;
        c.addChild(q)
    };
    this._addCurveSystemButton = function () {
        t = new CButtonSystem;
        t.setAutoReset(!1);
        for (var b = s_oSpriteLibrary.getSprite("curve_light_button"), c = 0; 3 > c; c++) t.addButton(40, 8, 324 + 60 * c, 806, 0, b, 0, 20, a);
        t.addAllButtonHitListener(this._onAllButtonPress);
        t.addSingleButtonListener(s_oScoreController.addButtonScore);
        t.setResititution(.33)
    };
    this._onAllButtonPress = function () {
        e || g ? e && !g ? (g = !0, h.highlight(500)) : !e && g && (e = !0, n.highlight(500)) : .5 > Math.random() ?
            (e = !0, n.highlight(500)) : (g = !0, h.highlight(500))
    };
    this._allLettersAreLit = function () {
        for (var a = 0; a < m.length; a++) if (!m[a]) return !1;
        return !0
    };
    this._onAllLettersLit = function () {
        playSound("all_letters_complete", 1, !1);
        s_oScoreController.addAllLettersScore();
        r.hardReset();
        s_oTable.enableShieldBonus();
        s_oTable.enableExtraBallBonus()
    };
    this._addCurveGate = function () {
        var a = new CGateSystem(368, 620);
        a.addGate(60, 8, 90);
        a.addOpener(40, 32, 12, 0, CURVE_FROM_RIGHT);
        a.addOpener(-52, 32, 12, 0, CURVE_FROM_LEFT);
        a.addCloser(-116,
            176, 12, 1);
        a.addCloser(152, 176, 12, 1);
        a.addPassingGateListener(this._curvePassed)
    };
    this._curvePassed = function (a) {
        s_oScoreController.addGateScore();
        a === CURVE_FROM_RIGHT && e && !c ? (trace("CURVE FROM RIGHT"), c = !0, n.lit(!0), t.restart(), r._tryToFlashARandomLetter()) : a === CURVE_FROM_LEFT && g && !k && (trace("CURVE FROM LEFT"), k = !0, h.lit(!0), t.restart(), r._tryToFlashARandomLetter());
        c && k && (trace("LETTER LIT"), r.restart(), l[d].lit(!0), m[d] = !0, b[d] = !0, playSound("letter", 1, !1), s_oScoreController.addSingleLettersScore(),
        r._allLettersAreLit() && r._onAllLettersLit())
    };
    this._tryToFlashARandomLetter = function () {
        if (!c && k || c && !k) {
            trace("FLASHING A RANDOM LETTER");
            do d = Math.floor(Math.random() * l.length); while (m[d]);
            l[d].highlight(1E3);
            m[d] = !1
        }
    };
    this._addArrows = function () {
        var b = s_oSpriteLibrary.getSprite("arrow_light_0");
        h = new CLightIndicator(b, 272, 880, a);
        h.rotate(-20);
        b = s_oSpriteLibrary.getSprite("arrow_light_0");
        n = new CLightIndicator(b, 520, 860, a);
        n.rotate(0)
    };
    this._addLetters = function () {
        l = [];
        m = [];
        b = [];
        for (var c = 0; 7 > c; c++) {
            var d =
                s_oSpriteLibrary.getSprite("letter_" + c);
            d = new CLightIndicator(d, LETTERS_POSITION[c].x, LETTERS_POSITION[c].y, a);
            l.push(d);
            m[c] = !1;
            b[c] = !1
        }
        m = [];
        b = [];
        for (c = 0; c < l.length; c++) m[c] = !1, b[c] = !1
    };
    this._addLogo = function () {
        var b = s_oSpriteLibrary.getSprite("logo");
        x = new CLightIndicator(b, 540, 1140, a);
        this.animLogo()
    };
    this.animLogo = function () {
        x.slowHighlight(2E3, 1E3, r.animLogo)
    };
    this.stopAnimLogo = function () {
        x.slowOff(1E3, 0)
    };
    this.restart = function () {
        k = g = c = e = !1;
        n.flashing();
        h.flashing();
        t.restart()
    };
    this.reset = function () {
        r.restart();
        n.slowOff();
        h.slowOff();
        t.reset();
        for (var a = 0; a < l.length; a++) m[a] = !1, b[a] ? l[a].lit(!0) : l[a].lit(!1)
    };
    this.hardReset = function () {
        this.restart();
        for (var a = 0; a < l.length; a++) m[a] = !1, b[a] = !1, l[a].flashing(), x.flashing()
    };
    this.update = function () {
        q.x = s_oGame.getBallSprite().x - q.parent.parent.x;
        q.y = s_oGame.getBallSprite().y - q.parent.parent.y;
        var a = Math.atan2(q.y, q.x);
        Math.pow(q.x, 2) + Math.pow(q.y, 2) > Math.pow(14, 2) && (q.x = 14 * Math.cos(a), q.y = 14 * Math.sin(a))
    };
    var r = this;
    this._init(a, f)
}

var STATE_START = 0, STATE_JUMPER = 1, STATE_SHIELD = 2, STATE_EXTRABALL = 3, STATE_DIRECTIONAL_JUMPER = 4,
    DIRECTION_UP = 0, DIRECTION_MID = 1, DIRECTION_RIGHT = 2;

function CModuleJumper(a, f) {
    var e, c, g, k, d, l;
    this._init = function (a, d) {
        e = STATE_START;
        c = DIRECTION_UP;
        this._addJumper();
        this._addJumperButtons();
        this._addArrows()
    };
    this._addJumper = function () {
        var b = {contacttype: CONTACT_BEGIN, callback: this._onJumper, params: "bumper"};
        k = s_oObjectBuilder.addButton(100, 12, 68, 1220, 45, 0, 0, 0, b);
        k.GetFixtureList().SetSensor(!0);
        s_oPhysicsController.disableBody(k);
        b = s_oSpriteLibrary.getSprite("jumper");
        var c = new createjs.SpriteSheet({
            images: [b], frames: {
                width: b.width / 2, height: b.height,
                regX: b.width / 2 / 2, regY: b.height / 2
            }, animations: {state_true: [0], state_false: [1]}
        });
        d = createSprite(c, "state_false", b.width / 2 / 2, b.height / 2, b.width / 2, b.height);
        d.x = 68;
        d.y = 1220;
        d.rotation = 45;
        d.visible = !1;
        a.addChild(d);
        b = {
            contacttype: CONTACT_BEGIN, callback: function () {
            }, params: "bumper"
        };
        s_oObjectBuilder.addButton(60, 8, 188, 800, 60, 0, 0, 1, b).GetFixtureList().SetSensor(!0)
    };
    this._onJumper = function (a, c) {
        s_oScoreController.addJumperScore();
        var b = c.GetFixtureA().GetUserData(), f = c.GetFixtureB().GetUserData(), g;
        b.id &&
        "ball" === b.id && (g = c.GetFixtureA().GetBody());
        f.id && "ball" === f.id && (g = c.GetFixtureB().GetBody());
        e >= STATE_DIRECTIONAL_JUMPER ? m._jumperModeDirectional(g) : m._jumperModeWeak(g);
        d.gotoAndStop("state_true");
        setTimeout(function () {
            d.gotoAndStop("state_false")
        }, 100);
        playSound("jumper", 1, !1)
    };
    this._jumperModeWeak = function (a) {
        var b = new Box2D.Common.Math.b2Vec2(a.GetPosition().x * WORLD_SCALE, a.GetPosition().y * WORLD_SCALE),
            c = new Box2D.Common.Math.b2Vec2(960 * Math.random(), 960);
        b.Subtract(c);
        b.Normalize();
        b = new Box2D.Common.Math.b2Vec2(b.x,
            b.y);
        c = 6 + 2 * Math.random();
        a.SetLinearVelocity({x: 0, y: 0});
        a.SetAngularVelocity(0);
        b.Multiply(-a.GetMass() * c);
        a.ApplyImpulse(b, a.GetPosition())
    };
    this._jumperModeDirectional = function (a) {
        var b = new Box2D.Common.Math.b2Vec2(a.GetPosition().x * WORLD_SCALE, a.GetPosition().y * WORLD_SCALE),
            c = m._getDirection();
        b.Subtract(c);
        b.Normalize();
        b = new Box2D.Common.Math.b2Vec2(b.x, b.y);
        a.SetLinearVelocity({x: 0, y: 0});
        a.SetAngularVelocity(0);
        b.Multiply(32 * -a.GetMass());
        a.ApplyImpulse(b, a.GetPosition())
    };
    this._getDirection =
        function () {
            switch (c) {
                case DIRECTION_UP:
                    var a = new Box2D.Common.Math.b2Vec2(78, 640);
                    break;
                case DIRECTION_MID:
                    a = new Box2D.Common.Math.b2Vec2(740, 640);
                    break;
                case DIRECTION_RIGHT:
                    a = new Box2D.Common.Math.b2Vec2(1408, 600)
            }
            return a
        };
    this._addJumperButtons = function () {
        l = new CButtonSystem;
        for (var b = s_oSpriteLibrary.getSprite("bumper_button"), c = 0; 5 > c; c++) l.addButton(8, 56, 38, 860 + 68 * c, 0, b, 0, 0, a);
        l.addAllButtonHitListener(this._onAllButtonActive);
        l.addSingleButtonListener(s_oScoreController.addButtonScore);
        l.flipButtonX()
    };
    this._onAllButtonActive = function () {
        s_oScoreController.addAllJumperButtonsScore();
        m.changeState()
    };
    this._addArrows = function () {
        g = [];
        var b = s_oSpriteLibrary.getSprite("arrow_light_1");
        b = new CLightIndicator(b, 88, 1060, a);
        b.rotate(-5);
        g.push(b);
        b = s_oSpriteLibrary.getSprite("arrow_light_1");
        b = new CLightIndicator(b, 180, 1100, a);
        b.rotate(40);
        g.push(b);
        b = s_oSpriteLibrary.getSprite("arrow_light_1");
        b = new CLightIndicator(b, 240, 1160, a);
        b.rotate(55);
        g.push(b)
    };
    this.reset = function () {
        l.reset();
        e = STATE_START;
        c = DIRECTION_UP;
        for (var a = 0; a < g.length; a++) g[a].slowOff(1E3, 0);
        s_oPhysicsController.disableBody(k);
        d.visible = !1
    };
    this.shiftElementsToRight = function () {
        if (!(e < STATE_DIRECTIONAL_JUMPER)) {
            c++;
            c === g.length && (c = 0);
            for (var a = 0; a < g.length; a++) g[a].lit(!1);
            g[c].lit(!0)
        }
    };
    this.shiftElementsToLeft = function () {
        if (!(e < STATE_DIRECTIONAL_JUMPER)) {
            c--;
            0 > c && (c = g.length - 1);
            for (var a = 0; a < g.length; a++) g[a].lit(!1);
            g[c].lit(!0)
        }
    };
    this.changeState = function () {
        s_oTable.enableJackpot();
        e++;
        switch (e) {
            case STATE_START:
                break;
            case STATE_JUMPER:
                k.SetActive(!0);
                d.visible = !0;
                break;
            case STATE_SHIELD:
                s_oTable.enableShieldBonus();
                break;
            case STATE_EXTRABALL:
                s_oTable.enableExtraBallBonus();
                break;
            case STATE_DIRECTIONAL_JUMPER:
                g[c].lit(!0);
                break;
            default:
                0 === e % SHIELD_ACTIVATION_THRESHOLD && s_oTable.enableShieldBonus()
        }
    };
    var m = this;
    this._init(a, f)
}

function CModuleJackpot(a, f) {
    var e, c, g, k;
    this._init = function (a, d) {
        e = !1;
        c = 0;
        this._addGate();
        this._addActiveIndicator();
        this._addJackpotAmountIndicator()
    };
    this._addGate = function () {
        var a = new CGateSystem(172, 620);
        a.addGate(60, 8, 35);
        var c = s_oSpriteLibrary.getSprite("gate");
        a.addSprite(c, f, 5, 80, c.width / 2 - 6);
        a.setRestitution(0);
        a.addOpener(24, -60, 12, !0);
        a.addCloser(-40, 56, 12, !0);
        a.addPassingGateListener(this._onJackpot)
    };
    this._onJackpot = function () {
        s_oScoreController.addGateScore();
        e && (playSound("bonus_win_2",
            1, !1), s_oScoreController.addJackpotScore(), s_oScoreController.getJackpotAmount() >= EXTRABALL_JACKPOT_SCORE_ACTIVATION && s_oTable.enableExtraBallBonus(), s_oScoreController.resetJackpot(), e = !1, g.flashing())
    };
    this._addActiveIndicator = function () {
        var c = s_oSpriteLibrary.getSprite("jackpot");
        g = new CLightIndicator(c, 190, 360, a)
    };
    this._addJackpotAmountIndicator = function () {
        k = new createjs.Text((0).toLocaleString(), "28px " + SECONDARY_FONT, "#ff56b0");
        k.x = 220;
        k.y = 388;
        k.textAlign = "center";
        k.textBaseline = "middle";
        k.lineWidth =
            200;
        k.rotation = -55;
        a.addChild(k);
        k.cache(-110, -20, 220, 40)
    };
    this.reset = function () {
        d.disableJackpot()
    };
    this.enableJackpot = function () {
        e = !0;
        g.highlight(1E3);
        c = TIME_LAST_ACTIVE_JACKPOT
    };
    this.disableJackpot = function () {
        e = !1;
        g.slowOff(1E3, 0)
    };
    this.setJackpotAmount = function (a) {
        k.text = a.toLocaleString();
        k.updateCache()
    };
    this.update = function () {
        e && (c -= s_iTimeElaps, 0 > c && d.disableJackpot())
    };
    var d = this;
    this._init(a, f)
}

function CModuleShield(a, f) {
    var e, c, g, k;
    this._init = function (a, c) {
        this._addRightShield();
        this._addLeftShield()
    };
    this._addRightShield = function () {
        c = new CHoleSystem(1016, 1580, 1E3);
        c.addHoleEventListener(this._onRightShieldUsed);
        c.setLaunchImpulse(0, -(.3 + .2 * Math.random()));
        s_oPhysicsController.disableBody(c.getHole());
        var d = s_oSpriteLibrary.getSprite("shield");
        k = new CLightIndicator(d, 1016, 1580, a);
        k.lit(!0)
    };
    this._addLeftShield = function () {
        e = new CHoleSystem(54, 1580, 1E3);
        e.addHoleEventListener(this._onLeftShieldUsed);
        e.setLaunchImpulse(0, -(.3 + .2 * Math.random()));
        var c = s_oSpriteLibrary.getSprite("shield");
        g = new CLightIndicator(c, 54, 1580, a);
        g.lit(!0)
    };
    this._onRightShieldUsed = function () {
        s_oPhysicsController.disableBody(c.getHole());
        k.slowOff(1E3, 500)
    };
    this._onLeftShieldUsed = function () {
        s_oPhysicsController.disableBody(e.getHole());
        g.slowOff(1E3, 500)
    };
    this.reset = function () {
        s_oPhysicsController.disableBody(c.getHole());
        s_oPhysicsController.disableBody(e.getHole());
        k.lit(!1);
        g.lit(!1)
    };
    this.enableShield = function () {
        s_oPhysicsController.enableBody(c.getHole());
        s_oPhysicsController.enableBody(e.getHole());
        k.slowOn(500, 0);
        g.slowOn(500, 0)
    };
    this._init(a, f)
}

function CModuleStart(a, f) {
    var e, c, g, k, d, l, m, b;
    this._init = function (a, b) {
        g = !0;
        k = !1;
        e = 1976;
        c = 1876;
        d = 1E3;
        this._addTunnelSprites();
        this._addStartGate();
        this._addLaunchPlatform();
        this._addLauncher()
    };
    this._addTunnelSprites = function () {
        var b = s_oSpriteLibrary.getSprite("tunnel_start"), c = createBitmap(b);
        c.x = 880;
        c.y = 140;
        f.addChild(c);
        l = 0;
        m = [];
        b = s_oSpriteLibrary.getSprite("arrow_start");
        b = new CLightIndicator(b, 994, 252, a);
        b.rotate(-35);
        m.unshift(b);
        b = s_oSpriteLibrary.getSprite("arrow_start");
        b = new CLightIndicator(b,
            1044, 332, a);
        b.rotate(-25);
        m.unshift(b);
        b = s_oSpriteLibrary.getSprite("arrow_start");
        b = new CLightIndicator(b, 1074, 422, a);
        b.rotate(-10);
        m.unshift(b);
        b = s_oSpriteLibrary.getSprite("arrow_start");
        b = new CLightIndicator(b, 1088, 522, a);
        b.rotate(-5);
        m.unshift(b);
        for (c = 0; 11 > c; c++) b = s_oSpriteLibrary.getSprite("arrow_start"), b = new CLightIndicator(b, 1090, 632 + 100 * c, a), m.unshift(b);
        this.startLighting()
    };
    this.startLighting = function () {
        for (var a = l = 0; a < m.length; a++) m[a].slowHighlight(1E3, 100 * a, this.endLighting)
    };
    this.endLighting =
        function () {
            l++;
            l >= m.length && q.startLighting()
        };
    this.stopAnimLighting = function () {
        for (var a = 0; a < m.length; a++) m[a].slowOff(1E3, 0)
    };
    this._addStartGate = function () {
        var a = new CGateSystem(924, 176);
        a.addGate(60, 8, -45);
        var b = s_oSpriteLibrary.getSprite("gate");
        a.addSprite(b, f, -68, b.height / 3, b.width / 2 + 6);
        a.addOpener(60, 60, 12, 0);
        a.addCloser(-56, -32, 12, 0);
        a.addCloser(132, 176, 12, 1);
        a.addPassingGateListener(this._onStartGatePassed)
    };
    this._onStartGatePassed = function () {
        s_oGame.ballInGame(!0);
        s_oScoreController.addGateScore();
        k = !0;
        s_oTable.stopLogoAnim();
        q.stopAnimLighting()
    };
    this._addLaunchPlatform = function () {
        var a = {contacttype: CONTACT_BEGIN, callback: this._onPlatform, params: "platform"};
        s_oObjectBuilder.addButton(60, 4, 1092, 1800, 0, 0, .33, .33, a);
        a = {contacttype: CONTACT_BEGIN, callback: this._onAir, params: "platform"};
        s_oObjectBuilder.addButton(60, 4, 1092, 1732, 0, 0, .33, .33, a).GetFixtureList().SetSensor(!0)
    };
    this._onPlatform = function () {
        g = !0
    };
    this._onAir = function () {
        g = !1
    };
    this._addLauncher = function () {
        var a = s_oSpriteLibrary.getSprite("spring");
        b = createBitmap(a);
        b.regY = a.height;
        b.x = 1069;
        b.y = 1876;
        f.addChild(b);
        a = s_oSpriteLibrary.getSprite("start_platform");
        var c = createBitmap(a);
        c.regX = a.width;
        c.regY = a.height;
        c.x = s_oTable.getTableSize().w;
        c.y = s_oTable.getTableSize().h;
        f.addChild(c)
    };
    this.block = function () {
        k = !0
    };
    this.unBlock = function () {
        k = !1
    };
    this.loadSpring = function () {
        k || createjs.Tween.get(b, {override: !0}).to({y: e}, d)
    };
    this.releaseSpring = function () {
        if (!k) {
            createjs.Tween.get(b, {override: !0}).to({y: c}, 300, createjs.Ease.elasticOut);
            var a = linearFunction(b.y,
                c, e, 0, SPRING_MAX_STRENGTH);
            g && (playSound("launch", 1, !1), s_oGame.launchBall(a))
        }
    };
    var q = this;
    this._init(a, f)
}

function CGUIExpandible(a, f, e, c) {
    var g, k, d, l, m, b, q, h;
    this._init = function (a, c, e, f) {
        l = [];
        b = new createjs.Container;
        b.x = a;
        b.y = c;
        f.addChild(b);
        q = new createjs.Container;
        b.addChild(q);
        h = new createjs.Container;
        b.addChild(h);
        d = !1;
        m = new CGfxButton(0, 0, e, h);
        m.addEventListener(ON_MOUSE_UP, this._onMenu, this);
        k = g = 120
    };
    this.unload = function () {
        m.unload();
        c.removeChild(b)
    };
    this.refreshPos = function (c, d) {
        b.x = a - c;
        b.y = f + d
    };
    this.addButton = function (a) {
        a = a.getButtonImage();
        a.x = 0;
        a.y = 0;
        a.visible = 0;
        q.addChildAt(a, 0);
        l.push(a)
    };
    this._onMenu = function () {
        (d = !d) ? (n._expand(), s_oGame.onPause()) : (n._collapse(), s_oGame.onResume())
    };
    this._expand = function () {
        for (var a = 0; a < l.length; a++) l[a].visible = !0, createjs.Tween.get(l[a], {override: !0}).wait(300 * a / 2).to({y: g + a * k}, 300, createjs.Ease.cubicOut)
    };
    this._collapse = function () {
        for (var a = 0; a < l.length; a++) {
            var b = l[l.length - 1 - a];
            createjs.Tween.get(b, {override: !0}).wait(300 * a / 2).to({y: 0}, 300, createjs.Ease.cubicOut).call(function (a) {
                a.visible = !1
            }, [b])
        }
    };
    var n = this;
    this._init(a, f, e, c)
}

function CPausePanel(a) {
    var f, e;
    this._init = function (a) {
        f = new createjs.Shape;
        f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        f.alpha = 0;
        f.on("mousedown", function () {
        });
        a.addChild(f);
        e = new createjs.Container;
        a.addChild(e);
        e.x = CANVAS_WIDTH / 2;
        e.y = CANVAS_HEIGHT / 2;
        a = new createjs.Text(TEXT_PAUSE, " 54px " + PRIMARY_FONT, PRIMARY_FONT_COLOUR);
        a.y = 0;
        a.textAlign = "center";
        a.textBaseline = "middle";
        a.lineWidth = 400;
        e.addChild(a);
        f.alpha = 0;
        e.alpha = 0
    };
    this.show = function () {
        createjs.Tween.get(f).to({alpha: .7},
            500);
        createjs.Tween.get(e).to({alpha: 1}, 500)
    };
    this.hide = function () {
        createjs.Tween.get(f).to({alpha: 0}, 500);
        createjs.Tween.get(e).to({alpha: 0}, 500)
    };
    this._init(a)
}

var LOCALSTORAGE_TOTALSCORE = "totalscore", s_iTotalScore = 0;

function CLocalStorage(a) {
    var f = !0;
    this._init = function (a) {
        try {
            var c = window.localStorage.getItem(a);
            this.resetData();
            null !== c && void 0 !== c && this.loadData()
        } catch (g) {
            this.resetData()
        }
    };
    this.isDirty = function () {
        return 0 < s_iTotalScore ? !0 : !1
    };
    this.isUsed = function () {
        try {
            window.localStorage.setItem("ls_available", "ok")
        } catch (e) {
            f = !1
        }
        return f
    };
    this.resetData = function () {
        s_iTotalScore = 0
    };
    this.deleteData = function () {
        window.localStorage.removeItem(a)
    };
    this.saveData = function () {
        var e = {};
        e[LOCALSTORAGE_TOTALSCORE] =
            s_iTotalScore;
        window.localStorage.setItem(a, JSON.stringify(e))
    };
    this.loadData = function () {
        var e = JSON.parse(window.localStorage.getItem(a))[LOCALSTORAGE_TOTALSCORE];
        s_iTotalScore = parseInt(e)
    };
    this._init(a)
}

function CMsgBox(a, f) {
    var e, c, g, k, d, l, m;
    this._init = function (a, b) {
        d = new createjs.Shape;
        d.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        d.alpha = 0;
        m = d.on("mousedown", function () {
        });
        s_oStage.addChild(d);
        (new createjs.Tween.get(d)).to({alpha: .7}, 500);
        l = new createjs.Container;
        s_oStage.addChild(l);
        var f = s_oSpriteLibrary.getSprite("msg_box"), h = createBitmap(f);
        h.regX = f.width / 2;
        h.regY = f.height / 2;
        l.addChild(h);
        l.x = CANVAS_WIDTH / 2;
        l.y = CANVAS_HEIGHT + f.height / 2;
        e = l.y;
        (new createjs.Tween.get(l)).to({
            y: CANVAS_HEIGHT /
                2 - 40
        }, 500, createjs.Ease.quartIn);
        c = new createjs.Text(a, " 20px " + PRIMARY_FONT, "#000000");
        c.y = -f.height / 2 + 60;
        c.textAlign = "center";
        c.textBaseline = "middle";
        c.lineWidth = 550;
        c.outline = 5;
        l.addChild(c);
        g = new createjs.Text(a, " 20px " + PRIMARY_FONT, "#ffffff");
        g.y = c.y;
        g.textAlign = "center";
        g.textBaseline = "middle";
        g.lineWidth = 550;
        l.addChild(g);
        k = new CGfxButton(0, 80, s_oSpriteLibrary.getSprite("but_yes"), l);
        k.addEventListener(ON_MOUSE_UP, this._onButYes, this);
        k.pulseAnimation()
    };
    this._onButYes = function () {
        k.setClickable(!1);
        (new createjs.Tween.get(d)).to({alpha: 0}, 500);
        (new createjs.Tween.get(l)).to({y: e}, 400, createjs.Ease.backIn).call(function () {
            b.unload();
            f && f()
        })
    };
    this.changeMessage = function (a) {
        c.text = a;
        g.text = a
    };
    this.unload = function () {
        k.unload();
        s_oStage.removeChild(d);
        s_oStage.removeChild(l);
        d.off("mousedown", m)
    };
    var b = this;
    this._init(a, f)
}

CTLText.prototype = {
    constructor: CTLText, __autofit: function () {
        if (this._bFitText) {
            for (var a = this._iFontSize; (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV || this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) && !(a--, this._oText.font = a + "px " + this._szFont, this._oText.lineHeight = Math.round(a * this._fLineHeightFactor), this.__updateY(), this.__verticalAlign(), 8 > a);) ;
            this._iFontSize = a
        }
    }, __verticalAlign: function () {
        if (this._bVerticalAlign) {
            var a = this._oText.getBounds().height;
            this._oText.y -=
                (a - this._iHeight) / 2 + this._iPaddingV
        }
    }, __updateY: function () {
        this._oText.y = this._y + this._iPaddingV;
        switch (this._oText.textBaseline) {
            case "middle":
                this._oText.y += this._oText.lineHeight / 2 + (this._iFontSize * this._fLineHeightFactor - this._iFontSize)
        }
    }, __createText: function (a) {
        this._bDebug && (this._oDebugShape = new createjs.Shape, this._oDebugShape.graphics.beginFill("rgba(255,0,0,0.5)").drawRect(this._x, this._y, this._iWidth, this._iHeight), this._oContainer.addChild(this._oDebugShape));
        this._oText = new createjs.Text(a,
            this._iFontSize + "px " + this._szFont, this._szColor);
        this._oText.textBaseline = "middle";
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this._oText.textAlign = this._szAlign;
        this._oText.lineWidth = this._bMultiline ? this._iWidth - 2 * this._iPaddingH : null;
        switch (this._szAlign) {
            case "center":
                this._oText.x = this._x + this._iWidth / 2;
                break;
            case "left":
                this._oText.x = this._x + this._iPaddingH;
                break;
            case "right":
                this._oText.x = this._x + this._iWidth - this._iPaddingH
        }
        this._oContainer.addChild(this._oText);
        this.refreshText(a)
    }, setVerticalAlign: function (a) {
        this._bVerticalAlign = a
    }, setOutline: function (a) {
        null !== this._oText && (this._oText.outline = a)
    }, setShadow: function (a, f, e, c) {
        null !== this._oText && (this._oText.shadow = new createjs.Shadow(a, f, e, c))
    }, setColor: function (a) {
        this._oText.color = a
    }, setAlpha: function (a) {
        this._oText.alpha = a
    }, setY: function (a) {
        this._y = this._oText.y = a
    }, removeTweens: function () {
        createjs.Tween.removeTweens(this._oText)
    }, getText: function () {
        return this._oText
    }, getY: function () {
        return this._y
    },
    getFontSize: function () {
        return this._iFontSize
    }, refreshText: function (a) {
        "" === a && (a = " ");
        null === this._oText && this.__createText(a);
        this._oText.text = a;
        this._oText.font = this._iFontSize + "px " + this._szFont;
        this._oText.lineHeight = Math.round(this._iFontSize * this._fLineHeightFactor);
        this.__autofit();
        this.__updateY();
        this.__verticalAlign()
    }
};

function CTLText(a, f, e, c, g, k, d, l, m, b, q, h, n, t, x, r, v) {
    this._oContainer = a;
    this._x = f;
    this._y = e;
    this._iWidth = c;
    this._iHeight = g;
    this._bMultiline = r;
    this._iFontSize = k;
    this._szAlign = d;
    this._szColor = l;
    this._szFont = m;
    this._iPaddingH = q;
    this._iPaddingV = h;
    this._bVerticalAlign = x;
    this._bFitText = t;
    this._bDebug = v;
    this._oDebugShape = null;
    this._fLineHeightFactor = b;
    this._oText = null;
    n && this.__createText(n)
};
