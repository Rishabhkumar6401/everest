"use strict";
(self.webpackChunkpixfort_core = self.webpackChunkpixfort_core || []).push([
    [793], {
        793: (a, t, e) => {
            e.r(t), e.d(t, {
                default: () => r
            });
            var i = e(14);

            function r() {
                $("[data-jarallax-video], [data-video-src], .jarallax-video").length && ((0, i.ij)(), $("[data-jarallax-video], [data-video-src], .jarallax-video").each((function() {
                    let a = !1;
                    if ($(this).attr("data-pix-bg-video")) a = $(this).attr("data-pix-bg-video");
                    else {
                        if (!$(this).attr("data-video-src")) return !1;
                        a = $(this).attr("data-video-src")
                    }(0, i.a0)(this, {
                        speed: .2,
                        videoSrc: a
                    })
                }))), $(".jarallax").each((function() {
                    let a = !1;
                    if (!$(this).attr("data-speed")) return !1;
                    a = $(this).attr("data-speed"), (0, i.a0)(this, {
                        speed: a
                    })
                })), (0, i.a0)(document.querySelectorAll(".intro-jarallax"), {
                    speed: .4,
                    imgSize: "object-fit",
                    imgPosition: "object-position"
                })
            }
        }
    }
]);