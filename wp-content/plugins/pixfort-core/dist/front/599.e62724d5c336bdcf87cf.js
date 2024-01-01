"use strict";
(self.webpackChunkpixfort_core = self.webpackChunkpixfort_core || []).push([
    [599], {
        599: (s, e, a) => {
            function t() {
                var s, e;
                $(".pix-headline:not(.pix-ready).letters").find("span").each((function() {
                    var s = $(this),
                        e = s.text().split(""),
                        a = s.hasClass("is-visible");
                    for (i in e) s.parents(".rotate-2").length > 0 && (e[i] = "<em>" + e[i] + "</em>"), e[i] = a ? '<i class="in">' + e[i] + "</i>" : "<i>" + e[i] + "</i>";
                    var t = e.join("");
                    s.html(t).css("opacity", 1)
                })), s = $(".pix-headline:not(.pix-ready)"), e = a, s.each((function() {
                    var i = $(this);
                    if ($(i).addClass("pix-ready"), i.hasClass("loading-bar")) {
                        e = t;
                        var s = i.attr("data-color");
                        s && "" != s && i.find(".pix-bar").css("background", s), setTimeout((function() {
                            i.find(".pix-words-wrapper").addClass("is-loading")
                        }), 800)
                    } else if (i.hasClass("clip")) {
                        var a = i.find(".pix-words-wrapper"),
                            r = a.width() + 10;
                        a.css("width", r)
                    } else if (!i.hasClass("type")) {
                        var d = 0;
                        d = i.find(".pix-words-wrapper span").first().width(), i.find(".pix-words-wrapper").width(d)
                    }
                    setTimeout((function() {
                        n(i.find(".is-visible").eq(0))
                    }), e)
                }));
                var a = 2500,
                    t = 3800;

                function n(i) {
                    var s = o(i);
                    if (i.parents(".pix-headline").hasClass("type")) {
                        var e = i.parent(".pix-words-wrapper");
                        e.addClass("selected").removeClass("waiting"), setTimeout((function() {
                            e.removeClass("selected"), i.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
                        }), 500), setTimeout((function() {
                            r(s, 150)
                        }), 1300)
                    } else if (i.parents(".pix-headline").hasClass("letters")) {
                        var h = i.children("i").length >= s.children("i").length;
                        d(i.find("i").eq(0), i, h, 50), l(s.find("i").eq(0), s, h, 50)
                    } else i.parents(".pix-headline").hasClass("clip") ? i.parents(".pix-words-wrapper").animate({
                        width: "2px"
                    }, 600, (function() {
                        p(i, s), r(s)
                    })) : i.parents(".pix-headline").hasClass("loading-bar") ? (i.parents(".pix-words-wrapper").removeClass("is-loading"), p(i, s), setTimeout((function() {
                        n(s)
                    }), t), setTimeout((function() {
                        i.parents(".pix-words-wrapper").addClass("is-loading")
                    }), 800)) : (p(i, s), setTimeout((function() {
                        n(s)
                    }), a))
                }

                function r(i, s) {
                    i.parents(".pix-headline").hasClass("type") ? (l(i.find("i").eq(0), i, !1, s), i.addClass("is-visible").removeClass("is-hidden")) : i.parents(".pix-headline").hasClass("clip") && i.parents(".pix-words-wrapper").animate({
                        width: i.width() + 10
                    }, 600, (function() {
                        setTimeout((function() {
                            n(i)
                        }), 1500)
                    }))
                }

                function d(i, s, e, t) {
                    if (i.removeClass("in").addClass("out"), i.is(":last-child") ? e && setTimeout((function() {
                            n(o(s))
                        }), a) : setTimeout((function() {
                            d(i.next(), s, e, t)
                        }), t), i.is(":last-child") && $("html").hasClass("no-csstransitions")) {
                        var r = o(s);
                        p(s, r)
                    }
                }

                function l(i, s, e, t) {
                    i.addClass("in").removeClass("out"), i.is(":last-child") ? (s.parents(".pix-headline").hasClass("type") && setTimeout((function() {
                        s.parents(".pix-words-wrapper").addClass("waiting")
                    }), 200), e || setTimeout((function() {
                        n(s)
                    }), a)) : setTimeout((function() {
                        l(i.next(), s, e, t)
                    }), t)
                }

                function o(i) {
                    return i.is(":last-child") || i.next().hasClass("pix-bar") ? i.parent().children().eq(0) : i.next()
                }

                function p(i, s) {
                    i.removeClass("is-visible").addClass("is-hidden");
                    var e = s.width();
                    i.parents(".pix-headline").hasClass("rotate-1"), i.parents(".pix-words-wrapper").width(e), s.removeClass("is-hidden").addClass("is-visible")
                }
            }
            a.r(e), a.d(e, {
                default: () => t
            })
        }
    }
]);