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

document.addEventListener("mousemove", function (dets) { 
    cursor.style.left = dets.x+ -7.5 +"px"
    cursor.style.top = dets.y+ -7.5 +"px"
 })

// document.onmousemove = function(e){
//     cursor.style.left = e.pageX+ -7.5 +"px"
//     cursor.style.top = e.pageY+ -7.5 +"px"
// }

video1.addEventListener("mouseenter", function (dets) { 
    cursor.style.width = 60+"px"
    cursor.style.transform = "translateX(-20px)"
    cursorh5.style.visibility = "visible"
})

video1.addEventListener("mouseleave", function () { 
    cursor.style.width = 15+"px"
    cursor.style.transform = "translateX(0px)"
    cursorh5.style.visibility = "hidden"
})

var text = document.querySelectorAll(".page4 h1")
text.forEach(function(elem) {
        elem.addEventListener("mouseenter", function () { 
        cursor.style.height = 30 + "px"
        cursor.style.width = 30 + "px"
        cursor.style.borderRadius = 15 + "px"
    })
    
        elem.addEventListener("mouseleave", function () { 
        cursor.style.height = 15 + "px"
        cursor.style.width = 15 + "px"
        cursor.style.borderRadius = 7.5 + "px"
    })
});
    

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
        start: "top -210%",
        end: "top -270%",
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
        start: "top -360%",
        end: "top -420%",
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

var tl7 = gsap.timeline({
    scrollTrigger: {
        scroller: ".main",
        // markers:true,
        start: "top -520%",
        end: "top -700%",
        scrub: 3
    }
})

var tl8 = gsap.timeline({
    scrollTrigger: {
        scroller: ".main",
        // markers:true,
        start: "top -520%",
        end: "top -700%",
        scrub: 3
    }
})

tl7.from("footer h1", {
    y: 0,
    opacity: 0.1,
})

tl7.to("footer h1", {
    y: 200,
    opacity: 1,
})

tl8.from("footer button", {
    y: 0,
    opacity: 0,
})

tl8.to("footer button", {
    y: 185,
    opacity: 1,
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        cursor.style.width = "400px"
        cursor.style.height = "400px"
        cursor.style.transform = "translate(-235px,-185px)"
        // cursor.style.transform = "translateY(-185px)"
        cursor.style.borderRadius = "0"
        cursor.style.mixBlendMode = "normal"
        cursor.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        cursor.style.width = "15px"
        cursor.style.height = "15px"
        cursor.style.transform = "translateX(0px)"
        cursor.style.borderRadius = "7.5px"
        cursor.style.backgroundImage = `none`
        cursor.style.mixBlendMode = "difference"
    })
})

var h4 = document.querySelectorAll("#nav h4")
var home = document.querySelector(".home")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        home.style.display = "block"
        main.style.filter = "blur(1.5rem)"
    })
    elem.addEventListener("mouseleave",function(){
        home.style.display = "none"
        main.style.filter = "blur(0)"
    })
})