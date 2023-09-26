gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

var cursor = document.querySelector(".cursor")
var main = document.querySelector(".main")
var video1 = document.querySelector(".video1")
var cursorh5 = document.querySelector(".cursor h5")
main.addEventListener("mousemove", function (dets) { 
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
 })

video1.addEventListener("mouseenter", function () { 
    cursor.style.width = 60+"px"
    cursorh5.style.visibility = "visible"
})

video1.addEventListener("mouseleave", function () { 
    cursor.style.width = 15+"px"
    cursorh5.style.visibility = "hidden"
})


gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 30",
        end: "top 0",
        scrub: 4
    }
})
tl.to(".page1 h1", {
    x: -80,
}, "anim")
tl.to(".page1 h2", {
    x: 130
}, "anim")
tl.to(".page1 video", {
    width: "95%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -110%",
        end: "top -130%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -200%",
        end: "top -250%",
        scrub: 3
    }
})

tl3.to(".division", {
    left: 0,
    width: 1500,
    duration: 1
})

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -350%",
        end: "top -400%",
        scrub: 3
    }
})

tl4.to(".division2", {
    left: 0,
    width: 1500,
    duration: 1
})

// gsap.from(".division",{
//     width: 0,
//     delay: 2,
//     duration: 0.7
// })


var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -400%",
        end: "top -420%",
        scrub: 3
    }
})
tl5.to(".main",{
    backgroundColor: "#000000"
})

var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -380%",
        end: "top -420%",
        scrub: 3
    }
})

tl6.to(".division2",{
    backgroundColor: "#ffffff"
})