"use strict";
(self.webpackChunkpixfort_core = self.webpackChunkpixfort_core || []).push([
    [14], {
        14: (e, t, o) => {
            o.d(t, {
                a0: () => j,
                ij: () => D
            });
            /*!
             * Jarallax v2.1.3 (https://github.com/nk-o/jarallax)
             * Copyright 2022 nK <https://nkdev.info>
             * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
             */
            var i = {
                type: "scroll",
                speed: .5,
                containerClass: "jarallax-container",
                imgSrc: null,
                imgElement: ".jarallax-img",
                imgSize: "cover",
                imgPosition: "50% 50%",
                imgRepeat: "no-repeat",
                keepImg: !1,
                elementInViewport: null,
                zIndex: -100,
                disableParallax: !1,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null,
                videoClass: "jarallax-video",
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoLoop: !0,
                videoPlayOnlyVisible: !0,
                videoLazyLoading: !0,
                disableVideo: !1,
                onVideoInsert: null,
                onVideoWorkerInit: null
            };
            let n;
            n = "undefined" != typeof window ? window : void 0 !== o.g ? o.g : "undefined" != typeof self ? self : {};
            var a = n;
            const {
                navigator: s
            } = a, l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(s.userAgent);
            let r, p, d;

            function m() {
                r = a.innerWidth || document.documentElement.clientWidth, l ? (!d && document.body && (d = document.createElement("div"), d.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(d)), p = (d ? d.clientHeight : 0) || a.innerHeight || document.documentElement.clientHeight) : p = a.innerHeight || document.documentElement.clientHeight
            }
            var c;

            function u() {
                return {
                    width: r,
                    height: p
                }
            }
            m(), a.addEventListener("resize", m), a.addEventListener("orientationchange", m), a.addEventListener("load", m), c = () => {
                m()
            }, "complete" === document.readyState || "interactive" === document.readyState ? c() : document.addEventListener("DOMContentLoaded", c, {
                capture: !0,
                once: !0,
                passive: !0
            });
            const y = [];

            function g() {
                if (!y.length) return;
                const {
                    width: e,
                    height: t
                } = u();
                y.forEach(((o, i) => {
                    const {
                        instance: n,
                        oldData: a
                    } = o;
                    if (!n.isVisible()) return;
                    const s = n.$item.getBoundingClientRect(),
                        l = {
                            width: s.width,
                            height: s.height,
                            top: s.top,
                            bottom: s.bottom,
                            wndW: e,
                            wndH: t
                        },
                        r = !a || a.wndW !== l.wndW || a.wndH !== l.wndH || a.width !== l.width || a.height !== l.height,
                        p = r || !a || a.top !== l.top || a.bottom !== l.bottom;
                    y[i].oldData = l, r && n.onResize(), p && n.onScroll()
                })), a.requestAnimationFrame(g)
            }
            const h = new a.IntersectionObserver((e => {
                e.forEach((e => {
                    e.target.jarallax.isElementInViewport = e.isIntersecting
                }))
            }), {
                rootMargin: "50px"
            });
            const {
                navigator: v
            } = a;
            let f = 0;
            class b {
                constructor(e, t) {
                    const o = this;
                    o.instanceID = f, f += 1, o.$item = e, o.defaults = { ...i
                    };
                    const n = o.$item.dataset || {},
                        a = {};
                    if (Object.keys(n).forEach((e => {
                            const t = e.substr(0, 1).toLowerCase() + e.substr(1);
                            t && void 0 !== o.defaults[t] && (a[t] = n[e])
                        })), o.options = o.extend({}, o.defaults, a, t), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach((e => {
                            "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1)
                        })), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)), o.options.disableParallax instanceof RegExp) {
                        const e = o.options.disableParallax;
                        o.options.disableParallax = () => e.test(v.userAgent)
                    }
                    if ("function" != typeof o.options.disableParallax && (o.options.disableParallax = () => !1), "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)), o.options.disableVideo instanceof RegExp) {
                        const e = o.options.disableVideo;
                        o.options.disableVideo = () => e.test(v.userAgent)
                    }
                    "function" != typeof o.options.disableVideo && (o.options.disableVideo = () => !1);
                    let s = o.options.elementInViewport;
                    s && "object" == typeof s && void 0 !== s.length && ([s] = s), s instanceof Element || (s = null), o.options.elementInViewport = s, o.image = {
                        src: o.options.imgSrc || null,
                        $container: null,
                        useImgTag: !1,
                        position: "fixed"
                    }, o.initImg() && o.canInitParallax() && o.init()
                }
                css(e, t) {
                    return function(e, t) {
                        return "string" == typeof t ? a.getComputedStyle(e).getPropertyValue(t) : (Object.keys(t).forEach((o => {
                            e.style[o] = t[o]
                        })), e)
                    }(e, t)
                }
                extend(e, ...t) {
                    return function(e, ...t) {
                        return e = e || {}, Object.keys(t).forEach((o => {
                            t[o] && Object.keys(t[o]).forEach((i => {
                                e[i] = t[o][i]
                            }))
                        })), e
                    }(e, ...t)
                }
                getWindowData() {
                    const {
                        width: e,
                        height: t
                    } = u();
                    return {
                        width: e,
                        height: t,
                        y: document.documentElement.scrollTop
                    }
                }
                initImg() {
                    const e = this;
                    let t = e.options.imgElement;
                    return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image, t.src = e.options.imgSrc) : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage))
                }
                canInitParallax() {
                    return !this.options.disableParallax()
                }
                init() {
                    const e = this,
                        t = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        };
                    let o = {
                        pointerEvents: "none",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden"
                    };
                    if (!e.options.keepImg) {
                        const t = e.$item.getAttribute("style");
                        if (t && e.$item.setAttribute("data-jarallax-original-styles", t), e.image.useImgTag) {
                            const t = e.image.$item.getAttribute("style");
                            t && e.image.$item.setAttribute("data-jarallax-original-styles", t)
                        }
                    }
                    if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                            position: "relative"
                        }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                            zIndex: 0
                        }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                            "z-index": e.options.zIndex
                        }), "fixed" === this.image.position && e.css(e.image.$container, {
                            "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                        }), e.image.$container.setAttribute("id", `jarallax-container-${e.instanceID}`), e.options.containerClass && e.image.$container.setAttribute("class", e.options.containerClass), e.$item.appendChild(e.image.$container), e.image.useImgTag ? o = e.extend({
                            "object-fit": e.options.imgSize,
                            "object-position": e.options.imgPosition,
                            "max-width": "none"
                        }, t, o) : (e.image.$item = document.createElement("div"), e.image.src && (o = e.extend({
                            "background-position": e.options.imgPosition,
                            "background-size": e.options.imgSize,
                            "background-repeat": e.options.imgRepeat,
                            "background-image": e.image.bgImage || `url("${e.image.src}")`
                        }, t, o))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) {
                        const t = function(e) {
                            const t = [];
                            for (; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
                            return t
                        }(e.$item).filter((e => {
                            const t = a.getComputedStyle(e),
                                o = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                            return o && "none" !== o || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                        }));
                        e.image.position = t.length ? "absolute" : "fixed"
                    }
                    var i;
                    o.position = e.image.position, e.css(e.image.$item, o), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                        "background-image": "none"
                    }), i = e, y.push({
                        instance: i
                    }), 1 === y.length && a.requestAnimationFrame(g), h.observe(i.options.elementInViewport || i.$item)
                }
                destroy() {
                    const e = this;
                    var t;
                    t = e, y.forEach(((e, o) => {
                        e.instance.instanceID === t.instanceID && y.splice(o, 1)
                    })), h.unobserve(t.options.elementInViewport || t.$item);
                    const o = e.$item.getAttribute("data-jarallax-original-styles");
                    if (e.$item.removeAttribute("data-jarallax-original-styles"), o ? e.$item.setAttribute("style", o) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                        const t = e.image.$item.getAttribute("data-jarallax-original-styles");
                        e.image.$item.removeAttribute("data-jarallax-original-styles"), t ? e.image.$item.setAttribute("style", o) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                    }
                    e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                }
                coverImage() {
                    const e = this,
                        {
                            height: t
                        } = u(),
                        o = e.image.$container.getBoundingClientRect(),
                        i = o.height,
                        {
                            speed: n
                        } = e.options,
                        a = "scroll" === e.options.type || "scroll-opacity" === e.options.type;
                    let s = 0,
                        l = i,
                        r = 0;
                    return a && (n < 0 ? (s = n * Math.max(i, t), t < i && (s -= n * (i - t))) : s = n * (i + t), n > 1 ? l = Math.abs(s - t) : n < 0 ? l = s / n + Math.abs(s) : l += (t - i) * (1 - n), s /= 2), e.parallaxScrollDistance = s, r = a ? (t - l) / 2 : (i - l) / 2, e.css(e.image.$item, {
                        height: `${l}px`,
                        marginTop: `${r}px`,
                        left: "fixed" === e.image.position ? `${o.left}px` : "0",
                        width: `${o.width}px`
                    }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                        image: {
                            height: l,
                            marginTop: r
                        },
                        container: o
                    }
                }
                isVisible() {
                    return this.isElementInViewport || !1
                }
                onScroll(e) {
                    const t = this;
                    if (!e && !t.isVisible()) return;
                    const {
                        height: o
                    } = u(), i = t.$item.getBoundingClientRect(), n = i.top, a = i.height, s = {}, l = Math.max(0, n), r = Math.max(0, a + n), p = Math.max(0, -n), d = Math.max(0, n + a - o), m = Math.max(0, a - (n + a - o)), c = Math.max(0, -n + o - a), y = 1 - (o - n) / (o + a) * 2;
                    let g = 1;
                    if (a < o ? g = 1 - (p || d) / a : r <= o ? g = r / o : m <= o && (g = m / o), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (s.transform = "translate3d(0,0,0)", s.opacity = g), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                        let e = 1;
                        t.options.speed < 0 ? e -= t.options.speed * g : e += t.options.speed * (1 - g), s.transform = `scale(${e}) translate3d(0,0,0)`
                    }
                    if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                        let e = t.parallaxScrollDistance * y;
                        "absolute" === t.image.position && (e -= n), s.transform = `translate3d(0,${e}px,0)`
                    }
                    t.css(t.image.$item, s), t.options.onScroll && t.options.onScroll.call(t, {
                        section: i,
                        beforeTop: l,
                        beforeTopEnd: r,
                        afterTop: p,
                        beforeBottom: d,
                        beforeBottomEnd: m,
                        afterBottom: c,
                        visiblePercent: g,
                        fromViewportCenter: y
                    })
                }
                onResize() {
                    this.coverImage()
                }
            }
            const $ = function(e, t, ...o) {
                ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
                const i = e.length;
                let n, a = 0;
                for (; a < i; a += 1)
                    if ("object" == typeof t || void 0 === t ? e[a].jarallax || (e[a].jarallax = new b(e[a], t)) : e[a].jarallax && (n = e[a].jarallax[t].apply(e[a].jarallax, o)), void 0 !== n) return n;
                return e
            };
            /*!
             * Video Worker v2.1.5 (https://github.com/nk-o/video-worker)
             * Copyright 2022 nK <https://nkdev.info>
             * Licensed under MIT (https://github.com/nk-o/video-worker/blob/master/LICENSE)
             */
            let I;
            $.constructor = b, I = "undefined" != typeof window ? window : void 0 !== o.g ? o.g : "undefined" != typeof self ? self : {};
            var A = I;

            function x() {
                this.doneCallbacks = [], this.failCallbacks = []
            }
            x.prototype = {
                execute(e, t) {
                    let o = e.length;
                    for (t = Array.prototype.slice.call(t); o;) o -= 1, e[o].apply(null, t)
                },
                resolve(...e) {
                    this.execute(this.doneCallbacks, e)
                },
                reject(...e) {
                    this.execute(this.failCallbacks, e)
                },
                done(e) {
                    this.doneCallbacks.push(e)
                },
                fail(e) {
                    this.failCallbacks.push(e)
                }
            };
            var w = {
                autoplay: !1,
                loop: !1,
                mute: !1,
                volume: 100,
                showControls: !0,
                accessibilityHidden: !1,
                startTime: 0,
                endTime: 0
            };
            let E = 0,
                V = 0,
                T = 0,
                P = 0,
                C = 0;
            const L = new x,
                S = new x;
            class k {
                constructor(e, t) {
                    const o = this;
                    o.url = e, o.options_default = { ...w
                    }, o.options = function(e, ...t) {
                        return e = e || {}, Object.keys(t).forEach((o => {
                            t[o] && Object.keys(t[o]).forEach((i => {
                                e[i] = t[o][i]
                            }))
                        })), e
                    }({}, o.options_default, t), o.videoID = o.parseURL(e), o.videoID && (o.ID = E, E += 1, o.loadAPI(), o.init())
                }
                parseURL(e) {
                    const t = function(e) {
                            const t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=)([^#\&\?]*).*/);
                            return !(!t || 11 !== t[1].length) && t[1]
                        }(e),
                        o = function(e) {
                            const t = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
                            return !(!t || !t[3]) && t[3]
                        }(e),
                        i = function(e) {
                            const t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),
                                o = {};
                            let i = 0;
                            return t.forEach((e => {
                                const t = e.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                                t && t[1] && t[2] && (o["ogv" === t[1] ? "ogg" : t[1]] = t[2], i = 1)
                            })), !!i && o
                        }(e);
                    return t ? (this.type = "youtube", t) : o ? (this.type = "vimeo", o) : !!i && (this.type = "local", i)
                }
                isValid() {
                    return !!this.videoID
                }
                on(e, t) {
                    this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
                }
                off(e, t) {
                    this.userEventsList && this.userEventsList[e] && (t ? this.userEventsList[e].forEach(((o, i) => {
                        o === t && (this.userEventsList[e][i] = !1)
                    })) : delete this.userEventsList[e])
                }
                fire(e, ...t) {
                    this.userEventsList && void 0 !== this.userEventsList[e] && this.userEventsList[e].forEach((e => {
                        e && e.apply(this, t)
                    }))
                }
                play(e) {
                    const t = this;
                    t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), A.YT.PlayerState.PLAYING !== t.player.getPlayerState() && t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then((e => {
                        e && t.player.play()
                    }))), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.paused && t.player.play()))
                }
                pause() {
                    const e = this;
                    e.player && ("youtube" === e.type && e.player.pauseVideo && A.YT.PlayerState.PLAYING === e.player.getPlayerState() && e.player.pauseVideo(), "vimeo" === e.type && e.player.getPaused().then((t => {
                        t || e.player.pause()
                    })), "local" === e.type && (e.player.paused || e.player.pause()))
                }
                mute() {
                    const e = this;
                    e.player && ("youtube" === e.type && e.player.mute && e.player.mute(), "vimeo" === e.type && e.player.setVolume && e.setVolume(0), "local" === e.type && (e.$video.muted = !0))
                }
                unmute() {
                    const e = this;
                    e.player && ("youtube" === e.type && e.player.mute && e.player.unMute(), "vimeo" === e.type && e.player.setVolume && e.setVolume(e.options.volume || 100), "local" === e.type && (e.$video.muted = !1))
                }
                setVolume(e = !1) {
                    const t = this;
                    t.player && "number" == typeof e && ("youtube" === t.type && t.player.setVolume && t.player.setVolume(e), "vimeo" === t.type && t.player.setVolume && t.player.setVolume(e / 100), "local" === t.type && (t.$video.volume = e / 100))
                }
                getVolume(e) {
                    const t = this;
                    t.player ? ("youtube" === t.type && t.player.getVolume && e(t.player.getVolume()), "vimeo" === t.type && t.player.getVolume && t.player.getVolume().then((t => {
                        e(100 * t)
                    })), "local" === t.type && e(100 * t.$video.volume)) : e(!1)
                }
                getMuted(e) {
                    const t = this;
                    t.player ? ("youtube" === t.type && t.player.isMuted && e(t.player.isMuted()), "vimeo" === t.type && t.player.getVolume && t.player.getVolume().then((t => {
                        e(!!t)
                    })), "local" === t.type && e(t.$video.muted)) : e(null)
                }
                getImageURL(e) {
                    const t = this;
                    if (t.videoImage) e(t.videoImage);
                    else {
                        if ("youtube" === t.type) {
                            const o = ["maxresdefault", "sddefault", "hqdefault", "0"];
                            let i = 0;
                            const n = new Image;
                            n.onload = function() {
                                120 !== (this.naturalWidth || this.width) || i === o.length - 1 ? (t.videoImage = `https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`, e(t.videoImage)) : (i += 1, this.src = `https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`)
                            }, n.src = `https://img.youtube.com/vi/${t.videoID}/${o[i]}.jpg`
                        }
                        if ("vimeo" === t.type) {
                            let o = A.innerWidth || 1920;
                            A.devicePixelRatio && (o *= A.devicePixelRatio), o = Math.min(o, 1920);
                            let i = new XMLHttpRequest;
                            i.open("GET", `https://vimeo.com/api/oembed.json?url=${t.url}&width=${o}`, !0), i.onreadystatechange = function() {
                                if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                                    const o = JSON.parse(this.responseText);
                                    o.thumbnail_url && (t.videoImage = o.thumbnail_url, e(t.videoImage))
                                }
                            }, i.send(), i = null
                        }
                    }
                }
                getIframe(e) {
                    this.getVideo(e)
                }
                getVideo(e) {
                    const t = this;
                    t.$video ? e(t.$video) : t.onAPIready((() => {
                        let o;
                        if (t.$video || (o = document.createElement("div"), o.style.display = "none"), "youtube" === t.type) {
                            let e, i;
                            t.playerOptions = {
                                host: "https://www.youtube-nocookie.com",
                                videoId: t.videoID,
                                playerVars: {
                                    autohide: 1,
                                    rel: 0,
                                    autoplay: 0,
                                    playsinline: 1
                                }
                            }, t.options.showControls || (t.playerOptions.playerVars.iv_load_policy = 3, t.playerOptions.playerVars.modestbranding = 1, t.playerOptions.playerVars.controls = 0, t.playerOptions.playerVars.showinfo = 0, t.playerOptions.playerVars.disablekb = 1), t.playerOptions.events = {
                                onReady(e) {
                                    if (t.options.mute ? e.target.mute() : "number" == typeof t.options.volume && e.target.setVolume(t.options.volume), t.options.autoplay && t.play(t.options.startTime), t.fire("ready", e), t.options.loop && !t.options.endTime) {
                                        const e = .1;
                                        t.options.endTime = t.player.getDuration() - e
                                    }
                                    setInterval((() => {
                                        t.getVolume((o => {
                                            t.options.volume !== o && (t.options.volume = o, t.fire("volumechange", e))
                                        }))
                                    }), 150)
                                },
                                onStateChange(o) {
                                    t.options.loop && o.data === A.YT.PlayerState.ENDED && t.play(t.options.startTime), e || o.data !== A.YT.PlayerState.PLAYING || (e = 1, t.fire("started", o)), o.data === A.YT.PlayerState.PLAYING && t.fire("play", o), o.data === A.YT.PlayerState.PAUSED && t.fire("pause", o), o.data === A.YT.PlayerState.ENDED && t.fire("ended", o), o.data === A.YT.PlayerState.PLAYING ? i = setInterval((() => {
                                        t.fire("timeupdate", o), t.options.endTime && t.player.getCurrentTime() >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                                    }), 150) : clearInterval(i)
                                },
                                onError(e) {
                                    t.fire("error", e)
                                }
                            };
                            const n = !t.$video;
                            if (n) {
                                const e = document.createElement("div");
                                e.setAttribute("id", t.playerID), o.appendChild(e), document.body.appendChild(o)
                            }
                            t.player = t.player || new A.YT.Player(t.playerID, t.playerOptions), n && (t.$video = document.getElementById(t.playerID), t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"), t.$video.setAttribute("aria-hidden", "true")), t.videoWidth = parseInt(t.$video.getAttribute("width"), 10) || 1280, t.videoHeight = parseInt(t.$video.getAttribute("height"), 10) || 720)
                        }
                        if ("vimeo" === t.type) {
                            if (t.playerOptions = {
                                    dnt: 1,
                                    id: t.videoID,
                                    autopause: 0,
                                    transparent: 0,
                                    autoplay: t.options.autoplay ? 1 : 0,
                                    loop: t.options.loop ? 1 : 0,
                                    muted: t.options.mute || 0 === t.options.volume ? 1 : 0
                                }, t.options.showControls || (t.playerOptions.controls = 0), !t.options.showControls && t.options.loop && t.options.autoplay && (t.playerOptions.background = 1), !t.$video) {
                                let e = "";
                                Object.keys(t.playerOptions).forEach((o => {
                                    "" !== e && (e += "&"), e += `${o}=${encodeURIComponent(t.playerOptions[o])}`
                                })), t.$video = document.createElement("iframe"), t.$video.setAttribute("id", t.playerID), t.$video.setAttribute("src", `https://player.vimeo.com/video/${t.videoID}?${e}`), t.$video.setAttribute("frameborder", "0"), t.$video.setAttribute("mozallowfullscreen", ""), t.$video.setAttribute("allowfullscreen", ""), t.$video.setAttribute("title", "Vimeo video player"), t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"), t.$video.setAttribute("aria-hidden", "true")), o.appendChild(t.$video), document.body.appendChild(o)
                            }
                            let e;
                            t.player = t.player || new A.Vimeo.Player(t.$video, t.playerOptions), t.options.mute || "number" != typeof t.options.volume || t.setVolume(t.options.volume), t.options.startTime && t.options.autoplay && t.player.setCurrentTime(t.options.startTime), t.player.getVideoWidth().then((e => {
                                t.videoWidth = e || 1280
                            })), t.player.getVideoHeight().then((e => {
                                t.videoHeight = e || 720
                            })), t.player.on("timeupdate", (o => {
                                e || (t.fire("started", o), e = 1), t.fire("timeupdate", o), t.options.endTime && t.options.endTime && o.seconds >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                            })), t.player.on("play", (e => {
                                t.fire("play", e), t.options.startTime && 0 === e.seconds && t.play(t.options.startTime)
                            })), t.player.on("pause", (e => {
                                t.fire("pause", e)
                            })), t.player.on("ended", (e => {
                                t.fire("ended", e)
                            })), t.player.on("loaded", (e => {
                                t.fire("ready", e)
                            })), t.player.on("volumechange", (e => {
                                t.getVolume((e => {
                                    t.options.volume = e
                                })), t.fire("volumechange", e)
                            })), t.player.on("error", (e => {
                                t.fire("error", e)
                            }))
                        }
                        if ("local" === t.type) {
                            let e;
                            t.$video || (t.$video = document.createElement("video"), t.player = t.$video, t.options.showControls && (t.$video.controls = !0), "number" == typeof t.options.volume && t.setVolume(t.options.volume), t.options.mute && t.mute(), t.options.loop && (t.$video.loop = !0), t.$video.setAttribute("playsinline", ""), t.$video.setAttribute("webkit-playsinline", ""), t.options.accessibilityHidden && (t.$video.setAttribute("tabindex", "-1"), t.$video.setAttribute("aria-hidden", "true")), t.$video.setAttribute("id", t.playerID), o.appendChild(t.$video), document.body.appendChild(o), Object.keys(t.videoID).forEach((e => {
                                ! function(e, t, o) {
                                    const i = document.createElement("source");
                                    i.src = t, i.type = o, e.appendChild(i)
                                }(t.$video, t.videoID[e], `video/${e}`)
                            }))), t.player.addEventListener("playing", (o => {
                                e || t.fire("started", o), e = 1
                            })), t.player.addEventListener("timeupdate", (function(e) {
                                t.fire("timeupdate", e), t.options.endTime && t.options.endTime && this.currentTime >= t.options.endTime && (t.options.loop ? t.play(t.options.startTime) : t.pause())
                            })), t.player.addEventListener("play", (e => {
                                t.fire("play", e)
                            })), t.player.addEventListener("pause", (e => {
                                t.fire("pause", e)
                            })), t.player.addEventListener("ended", (e => {
                                t.fire("ended", e)
                            })), t.player.addEventListener("loadedmetadata", (function() {
                                t.videoWidth = this.videoWidth || 1280, t.videoHeight = this.videoHeight || 720, t.fire("ready"), t.options.autoplay && t.play(t.options.startTime)
                            })), t.player.addEventListener("volumechange", (e => {
                                t.getVolume((e => {
                                    t.options.volume = e
                                })), t.fire("volumechange", e)
                            })), t.player.addEventListener("error", (e => {
                                t.fire("error", e)
                            }))
                        }
                        e(t.$video)
                    }))
                }
                init() {
                    this.playerID = `VideoWorker-${this.ID}`
                }
                loadAPI() {
                    if (V && T) return;
                    let e = "";
                    if ("youtube" !== this.type || V || (V = 1, e = "https://www.youtube.com/iframe_api"), "vimeo" === this.type && !T) {
                        if (T = 1, void 0 !== A.Vimeo) return;
                        e = "https://player.vimeo.com/api/player.js"
                    }
                    if (!e) return;
                    let t = document.createElement("script"),
                        o = document.getElementsByTagName("head")[0];
                    t.src = e, o.appendChild(t), o = null, t = null
                }
                onAPIready(e) {
                    const t = this;
                    if ("youtube" === t.type && (void 0 !== A.YT && 0 !== A.YT.loaded || P ? "object" == typeof A.YT && 1 === A.YT.loaded ? e() : L.done((() => {
                            e()
                        })) : (P = 1, A.onYouTubeIframeAPIReady = function() {
                            A.onYouTubeIframeAPIReady = null, L.resolve("done"), e()
                        })), "vimeo" === t.type)
                        if (void 0 !== A.Vimeo || C) void 0 !== A.Vimeo ? e() : S.done((() => {
                            e()
                        }));
                        else {
                            C = 1;
                            const t = setInterval((() => {
                                void 0 !== A.Vimeo && (clearInterval(t), S.resolve("done"), e())
                            }), 20)
                        }
                    "local" === t.type && e()
                }
            }
            const j = $,
                D = function() {
                    return function(e = a.jarallax) {
                        if (void 0 === e) return;
                        const t = e.constructor,
                            o = t.prototype.onScroll;
                        t.prototype.onScroll = function() {
                            const e = this;
                            o.apply(e), !e.isVideoInserted && e.video && (!e.options.videoLazyLoading || e.isElementInViewport) && !e.options.disableVideo() && (e.isVideoInserted = !0, e.video.getVideo((t => {
                                const o = t.parentNode;
                                e.css(t, {
                                    position: e.image.position,
                                    top: "0px",
                                    left: "0px",
                                    right: "0px",
                                    bottom: "0px",
                                    width: "100%",
                                    height: "100%",
                                    maxWidth: "none",
                                    maxHeight: "none",
                                    pointerEvents: "none",
                                    transformStyle: "preserve-3d",
                                    backfaceVisibility: "hidden",
                                    margin: 0,
                                    zIndex: -1
                                }), e.$video = t, "local" === e.video.type && (e.image.src ? e.$video.setAttribute("poster", e.image.src) : e.image.$item && "IMG" === e.image.$item.tagName && e.image.$item.src && e.$video.setAttribute("poster", e.image.$item.src)), e.options.videoClass && e.$video.setAttribute("class", `${e.options.videoClass} ${e.options.videoClass}-${e.video.type}`), e.image.$container.appendChild(t), o.parentNode.removeChild(o), e.options.onVideoInsert && e.options.onVideoInsert.call(e)
                            })))
                        };
                        const i = t.prototype.coverImage;
                        t.prototype.coverImage = function() {
                            const e = this,
                                t = i.apply(e),
                                o = !!e.image.$item && e.image.$item.nodeName;
                            if (t && e.video && o && ("IFRAME" === o || "VIDEO" === o)) {
                                let i = t.image.height,
                                    n = i * e.image.width / e.image.height,
                                    a = (t.container.width - n) / 2,
                                    s = t.image.marginTop;
                                t.container.width > n && (n = t.container.width, i = n * e.image.height / e.image.width, a = 0, s += (t.image.height - i) / 2), "IFRAME" === o && (i += 400, s -= 200), e.css(e.$video, {
                                    width: `${n}px`,
                                    marginLeft: `${a}px`,
                                    height: `${i}px`,
                                    marginTop: `${s}px`
                                })
                            }
                            return t
                        };
                        const n = t.prototype.initImg;
                        t.prototype.initImg = function() {
                            const e = this,
                                t = n.apply(e);
                            return e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || null), e.options.videoSrc ? (e.defaultInitImgResult = t, !0) : t
                        };
                        const s = t.prototype.canInitParallax;
                        t.prototype.canInitParallax = function() {
                            const e = this;
                            let t = s.apply(e);
                            if (!e.options.videoSrc) return t;
                            const o = new k(e.options.videoSrc, {
                                autoplay: !0,
                                loop: e.options.videoLoop,
                                showControls: !1,
                                accessibilityHidden: !0,
                                startTime: e.options.videoStartTime || 0,
                                endTime: e.options.videoEndTime || 0,
                                mute: !e.options.videoVolume,
                                volume: e.options.videoVolume || 0
                            });

                            function i() {
                                e.image.$default_item && (e.image.$item = e.image.$default_item, e.image.$item.style.display = "block", e.coverImage(), e.onScroll())
                            }
                            if (e.options.onVideoWorkerInit && e.options.onVideoWorkerInit.call(e, o), o.isValid())
                                if (this.options.disableParallax() && (t = !0, e.image.position = "absolute", e.options.type = "scroll", e.options.speed = 1), t) {
                                    if (o.on("ready", (() => {
                                            if (e.options.videoPlayOnlyVisible) {
                                                const t = e.onScroll;
                                                e.onScroll = function() {
                                                    t.apply(e), e.videoError || !e.options.videoLoop && (e.options.videoLoop || e.videoEnded) || (e.isVisible() ? o.play() : o.pause())
                                                }
                                            } else o.play()
                                        })), o.on("started", (() => {
                                            e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.video.videoWidth || 1280, e.image.height = e.video.videoHeight || 720, e.coverImage(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                                        })), o.on("ended", (() => {
                                            e.videoEnded = !0, e.options.videoLoop || i()
                                        })), o.on("error", (() => {
                                            e.videoError = !0, i()
                                        })), e.video = o, !e.defaultInitImgResult && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "local" !== o.type)) return o.getImageURL((t => {
                                        e.image.bgImage = `url("${t}")`, e.init()
                                    })), !1
                                } else e.defaultInitImgResult || o.getImageURL((t => {
                                    const o = e.$item.getAttribute("style");
                                    o && e.$item.setAttribute("data-jarallax-original-styles", o), e.css(e.$item, {
                                        "background-image": `url("${t}")`,
                                        "background-position": "center",
                                        "background-size": "cover"
                                    })
                                }));
                            return t
                        };
                        const l = t.prototype.destroy;
                        t.prototype.destroy = function() {
                            const e = this;
                            e.image.$default_item && (e.image.$item = e.image.$default_item, delete e.image.$default_item), l.apply(e)
                        }
                    }(j)
                }
        }
    }
]);