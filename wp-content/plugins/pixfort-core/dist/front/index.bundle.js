(() => {
    var e, n, t = {},
        i = {};

    function o(e) {
        var n = i[e];
        if (void 0 !== n) return n.exports;
        var r = i[e] = {
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, o), r.exports
    }
    o.m = t, o.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return o.d(n, {
            a: n
        }), n
    }, o.d = (e, n) => {
        for (var t in n) o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        })
    }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce(((n, t) => (o.f[t](e, n), n)), [])), o.u = e => 788 === e ? "788.59abbcb633b7b8ba1c0f.js" : 678 === e ? "678.e733f25828c3874f9bc9.js" : 517 === e ? "517.5316198b74ea72a203e5.js" : 299 === e ? "299.3444b3bf653897a95156.js" : 771 === e ? "771.30f1390e2b2c27ce1b4a.js" : 744 === e ? "744.12e8697536e53a1a72b8.js" : 538 === e ? "538.4ac357c9606183a2a1a7.js" : 476 === e ? "476.20ff94b642850957de46.js" : 14 === e ? "14.86a68f1bb47ddc3becf7.js" : 793 === e ? "793.d942673b241cd716929e.js" : 459 === e ? "459.40347221e1e297ad7e4a.js" : 599 === e ? "599.e62724d5c336bdcf87cf.js" : 398 === e ? "398.01edc105f758acd277a3.js" : 21 === e ? "21.c4103c02d95f18acd2bc.js" : 954 === e ? "954.e02e0d6ccab1a5d3e3f5.js" : 634 === e ? "634.8b3597c33bed654a6697.js" : 677 === e ? "677.1c5c97a05e0681468c21.js" : 656 === e ? "656.b99eabdfa626e99b9a97.js" : 575 === e ? "575.8cbfda1a08ca970f7bad.js" : 755 === e ? "755.97bfb2b35edd8bfb4f61.js" : 502 === e ? "502.27417c990277113a455c.js" : 799 === e ? "799.4db6ddc0daa8bd7c0fb2.js" : 587 === e ? "587.db4c0a2c4be61474ca3c.js" : 484 === e ? "484.6228d20de6a351a84978.js" : 555 === e ? "555.6d6d7b319f53b98619a1.js" : 833 === e ? "833.1d0742bf4fb778d5a93d.js" : void 0, o.miniCssF = e => e + "." + {
        484: "ab0f4ab882c1274b1c48",
        502: "bda04058e8d9398f0a08",
        538: "880fc981c149c8a847e3",
        555: "3ac26d76e9d177c0029c",
        678: "e949450fb85265b3f64f",
        788: "da936b956df5da6b2d7d",
        833: "3897eb5c307b2f211ec5"
    }[e] + ".css", o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), e = {}, n = "pixfort-core:", o.l = (t, i, r, a) => {
        if (e[t]) e[t].push(i);
        else {
            var d, c;
            if (void 0 !== r)
                for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
                    var u = s[l];
                    if (u.getAttribute("src") == t || u.getAttribute("data-webpack") == n + r) {
                        d = u;
                        break
                    }
                }
            d || (c = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, o.nc && d.setAttribute("nonce", o.nc), d.setAttribute("data-webpack", n + r), d.src = t), e[t] = [i];
            var f = (n, i) => {
                    d.onerror = d.onload = null, clearTimeout(p);
                    var o = e[t];
                    if (delete e[t], d.parentNode && d.parentNode.removeChild(d), o && o.forEach((e => e(i))), n) return n(i)
                },
                p = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: d
                }), 12e4);
            d.onerror = f.bind(null, d.onerror), d.onload = f.bind(null, d.onload), c && document.head.appendChild(d)
        }
    }, o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        o.g.importScripts && (e = o.g.location + "");
        var n = o.g.document;
        if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
            var t = n.getElementsByTagName("script");
            t.length && (e = t[t.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e
    })(), (() => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(((n, t) => {
                    var i = o.miniCssF(e),
                        r = o.p + i;
                    if (((e, n) => {
                            for (var t = document.getElementsByTagName("link"), i = 0; i < t.length; i++) {
                                var o = (a = t[i]).getAttribute("data-href") || a.getAttribute("href");
                                if ("stylesheet" === a.rel && (o === e || o === n)) return a
                            }
                            var r = document.getElementsByTagName("style");
                            for (i = 0; i < r.length; i++) {
                                var a;
                                if ((o = (a = r[i]).getAttribute("data-href")) === e || o === n) return a
                            }
                        })(i, r)) return n();
                    ((e, n, t, i, o) => {
                        var r = document.createElement("link");
                        r.rel = "stylesheet", r.type = "text/css", r.onerror = r.onload = t => {
                            if (r.onerror = r.onload = null, "load" === t.type) i();
                            else {
                                var a = t && ("load" === t.type ? "missing" : t.type),
                                    d = t && t.target && t.target.href || n,
                                    c = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                                c.code = "CSS_CHUNK_LOAD_FAILED", c.type = a, c.request = d, r.parentNode.removeChild(r), o(c)
                            }
                        }, r.href = n, t ? t.parentNode.insertBefore(r, t.nextSibling) : document.head.appendChild(r)
                    })(e, r, null, n, t)
                })),
                n = {
                    826: 0
                };
            o.f.miniCss = (t, i) => {
                n[t] ? i.push(n[t]) : 0 !== n[t] && {
                    484: 1,
                    502: 1,
                    538: 1,
                    555: 1,
                    678: 1,
                    788: 1,
                    833: 1
                }[t] && i.push(n[t] = e(t).then((() => {
                    n[t] = 0
                }), (e => {
                    throw delete n[t], e
                })))
            }
        }
    })(), (() => {
        var e = {
            826: 0
        };
        o.f.j = (n, t) => {
            var i = o.o(e, n) ? e[n] : void 0;
            if (0 !== i)
                if (i) t.push(i[2]);
                else {
                    var r = new Promise(((t, o) => i = e[n] = [t, o]));
                    t.push(i[2] = r);
                    var a = o.p + o.u(n),
                        d = new Error;
                    o.l(a, (t => {
                        if (o.o(e, n) && (0 !== (i = e[n]) && (e[n] = void 0), i)) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            d.message = "Loading chunk " + n + " failed.\n(" + r + ": " + a + ")", d.name = "ChunkLoadError", d.type = r, d.request = a, i[1](d)
                        }
                    }), "chunk-" + n, n)
                }
        };
        var n = (n, t) => {
                var i, r, [a, d, c] = t,
                    s = 0;
                if (a.some((n => 0 !== e[n]))) {
                    for (i in d) o.o(d, i) && (o.m[i] = d[i]);
                    if (c) c(o)
                }
                for (n && n(t); s < a.length; s++) r = a[s], o.o(e, r) && e[r] && e[r][0](), e[r] = 0
            },
            t = self.webpackChunkpixfort_core = self.webpackChunkpixfort_core || [];
        t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
    })(), "undefined" == typeof $ && "undefined" != jQuery && ($ = jQuery), window.pixfort = {}, jQuery(document).ready((function(e) {
        const n = "ontouchstart" in window || navigator.msMaxTouchPoints;
        "undefined" == typeof PIX_JS_OPTIONS && (window.PIX_JS_OPTIONS = {}), !n && function(e) {
            if (PIX_JS_OPTIONS.hasOwnProperty(e) && PIX_JS_OPTIONS[e]) return PIX_JS_OPTIONS[e];
            return !1
        }("ENABLE_CURSOR") && o.e(788).then(o.bind(o, 788));
        let t = 992;
        if ("undefined" == typeof pixfort_main_object && (window.pixfort_main_object = {}), pixfort_main_object.hasOwnProperty("dataBreakpoint") && (t = pixfort_main_object.dataBreakpoint), window.innerWidth > t ? (document.querySelectorAll(".pix-sections-stack").length && !window.vc_iframe && o.e(678).then(o.bind(o, 678)).then((e => {
                e.default()
            })), document.querySelectorAll(".pix-sticky-footer").length && (e(".pix-sticky-footer").outerHeight() > window.innerHeight ? e(".pix-sticky-footer").removeClass("pix-sticky-footer") : o.e(517).then(o.bind(o, 517)).then((e => {
                e.default()
            })))) : (document.querySelector("body").classList.remove("pix-sections-stack"), document.querySelector(".pix-sticky-footer") && document.querySelector(".pix-sticky-footer").classList.remove("pix-sticky-footer")), window.pix_marquee = async function(e) {
                document.querySelectorAll(".pix-marquee").length && o.e(299).then(o.bind(o, 299)).then((n => {
                    n.default(e)
                }))
            }, window.pix_marquee(), window.init_chart = async function(e) {
                document.querySelectorAll(".chart").length && o.e(771).then(o.bind(o, 771)).then((n => {
                    n.default(e)
                }))
            }, window.init_chart(), window.pix_countdown = async function(e) {
                document.querySelectorAll(".pix-countdown").length && o.e(744).then(o.bind(o, 744)).then((n => {
                    n.default(e)
                }))
            }, window.pix_countdown(), window.pix_section_stack = async function(e) {
                document.querySelectorAll(".pix-scale-in, .pix-scale-in-xs, .pix-scale-in-sm, .pix-scale-in-lg").length && o.e(538).then(o.bind(o, 538)).then((n => {
                    n.default(e)
                }))
            }, window.pix_section_stack(), window.init_tilts = async function(e) {
                if (!n && document.querySelectorAll(".tilt, .tilt_small, .tilt_big").length) {
                    window.addEventListener("mousemove", (function n() {
                        window.removeEventListener("mousemove", n), o.e(476).then(o.bind(o, 476)).then((n => {
                            n.default(e)
                        }))
                    }), {
                        passive: !0
                    })
                }
            }, window.init_tilts(), window.init_jarallax = async function() {
                Promise.all([o.e(14), o.e(793)]).then(o.bind(o, 793)).then((e => {
                    e.default()
                })), e("[data-jarallax-element]").length && o.e(459).then(o.bind(o, 459)).then((e => {
                    e.default()
                }))
            }, window.init_jarallax(), window.init_animated_heading = async function() {
                document.querySelectorAll(".pix-headline").length && o.e(599).then(o.bind(o, 599)).then((e => {
                    e.default()
                }))
            }, window.init_animated_heading(), window.pix_main_slider = async function(n) {
                e(".pix-main-slider").length && o.e(398).then(o.bind(o, 398)).then((e => {
                    e.default(n)
                }))
            }, window.pix_main_slider(), window.pix_sliders = async function(n) {
                e(".pix-slider").length && o.e(21).then(o.bind(o, 21)).then((e => {
                    e.default(n)
                }))
            }, window.pix_sliders(), window.init_Parallax = async function(e) {
                if (!n && document.querySelectorAll(".scene, .pix-scene").length) {
                    window.addEventListener("mousemove", (function n() {
                        window.removeEventListener("mousemove", n), o.e(954).then(o.bind(o, 954)).then((n => {
                            n.default(e)
                        }))
                    }), {
                        passive: !0
                    })
                }
            }, window.init_Parallax(), window.init_dividerShapes = async function(n) {
                n || (n = e("body")), n.find(".pix-shape-dividers:not(.loaded)").each((function(e, n) {
                    new IntersectionObserver((function(e, t) {
                        e.forEach((e => {
                            e.isIntersecting && (o.e(634).then(o.bind(o, 634)).then((e => {
                                e.default(n)
                            })), t.unobserve(e.target))
                        }))
                    }), {
                        threshold: [0]
                    }).observe(n)
                }))
            }, window.init_dividerShapes(), window.update_numbers = async function(n) {
                n || (n = e("body")), n.find(".animate-math .number").each((function(e, n) {
                    new IntersectionObserver((function(e, t) {
                        e.forEach((e => {
                            e.isIntersecting && (o.e(677).then(o.bind(o, 677)).then((e => {
                                e.default(n)
                            })), t.unobserve(e.target))
                        }))
                    }), {
                        threshold: [0]
                    }).observe(n)
                }))
            }, window.update_numbers(), window.init_bars = async function(n) {
                n || (n = e("body")), n.find(".pix-progress:not(.pix_ready)").each((function(e, n) {
                    new IntersectionObserver((function(e, t) {
                        e.forEach((e => {
                            e.isIntersecting && (o.e(656).then(o.bind(o, 656)).then((e => {
                                e.default(n)
                            })), t.unobserve(e.target))
                        }))
                    }), {
                        threshold: [0]
                    }).observe(n)
                }))
            }, window.init_bars(), window.video_element = async function(e) {}, window.video_element(), window.pix_intro_bg = async function() {
                const n = e(".pix-intro-1 .pix-intro-img img");
                n.length && n.each((function(n, t) {
                    let i = new IntersectionObserver((n => {
                        const o = n[0];
                        o.isIntersecting && (setTimeout((function() {
                            e(t).addClass("animated")
                        }), 10), setTimeout((function() {
                            e(t).addClass("animation-done")
                        }), 4600), i.unobserve(o.target))
                    }), {
                        threshold: [0]
                    });
                    i.observe(t)
                }))
            }, window.pix_intro_bg(), PIX_JS_OPTIONS.hasOwnProperty("ENABLE_NEW_POPUPS")) o.e(575).then(o.bind(o, 575)).then((e => {
            e.dialogLoader(PIX_JS_OPTIONS.dataPopupBase), "undefined" != typeof PIX_POPUPS_OPTIONS && e.loadPopupOptions(PIX_POPUPS_OPTIONS)
        })), window.loadPopup = async function(e) {
            e && o.e(575).then(o.bind(o, 575)).then((n => {
                n.default(e)
            }))
        };
        else {
            window.loadPopup = async function(e) {
                e && Promise.all([o.e(755), o.e(502)]).then(o.bind(o, 502)).then((n => {
                    n.default(e)
                }))
            };
            const n = e(".pix-popup-link, .pix-audio-popup, .pix-story-popup, .pix-video-popup");
            if (n && n.length) {
                let e = !1;
                n.one("mouseenter", (function() {
                    e || (e = !0, Promise.all([o.e(755), o.e(502)]).then(o.bind(o, 502)).then((e => {
                        e.default()
                    })))
                }))
            }
            o.e(799).then(o.bind(o, 799)).then((e => {
                e.default()
            }))
        }
        PIX_JS_OPTIONS.hasOwnProperty("WOO") && o.e(587).then(o.bind(o, 587)).then((e => {
            e.default()
        })), window.searchOverlay = async function() {
            document.querySelector(".pix-search-btn") && o.e(484).then(o.bind(o, 484)).then((e => {
                e.default()
            }))
        }, window.searchOverlay(), e("body").on("mouseover", ".pix-ajax-search", (function(n) {
            let t = e(this);
            t.hasClass("ajax-loaded") || o.e(555).then(o.bind(o, 555)).then((e => {
                e.default(t)
            }))
        })), e("body").on("mouseover", ".pix-circles-elem", (function(n) {
            e(".pix-circles").addClass("circles-transition")
        }))
    }))
})();