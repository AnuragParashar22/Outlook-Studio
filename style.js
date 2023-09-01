// (function(){var mychar; console.log(mychar);
//    mychar='local value';
//     console.log(mychar)}
//     )();
function show(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      inertia: 0.8,
    smooth: true,
    getDirection: true,
    mobile: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
    },
    tablet: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
    },
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
show();


document.querySelector('#toppart1  ').addEventListener('mousemove',function(dets){
  document.querySelector('#toppart1left').style.width = `${dets.x}px`;
 
})



var text = document.querySelector('#rotatingtext>h4')
text.innerHTML = text.textContent.replace(/\S/g,'<span>$&</span>')

var elem = document.querySelectorAll('#rotatingtext>h4>span');
console.log(elem);
for(var i = 0; i<elem.length; i++){
    elem[i].style.transform = "rotate("+i*17+"deg)";
}

document.querySelector('#menubox>button').addEventListener('click',function(){
  document.querySelector('#menubox').style.transform = 'translateY(-100%)'
})

document.querySelector('#menu').addEventListener('click',function(){
  document.querySelector('#menubox').style.transform = 'translateY(0%)'
})

gsap.to('#rotatingtext>h4',{
    rotation:360,
    duration:4,
    repeat:-1,
    ease: Power0.easeNone
})




var tl = gsap.timeline();
tl
.from('.overlayimgbox>img',{
    y:350,
    duration:1,
    delay:0.5
})
.to('#imgbox1',{
    delay:0.5,
    x:-1500,
    duration:2
})
.to('#imgbox2',{
    x:-1500,
    duration:2,
    delay:-1.6
})
.to('#imgbox3',{
    x:-1500,
    duration:2,
    delay:-1.6
})
.to('#imgbox4',{
    x:-1500,
    duration:2,
    delay:-1.6
})
.to('#imgbox5',{
    x:-1500,
    duration:2,
    delay:-1.8
})
.to('#overlay',{
    display:'none'
})
.from('#nav ,#part1text',{
  y:-50,
  opacity:0,
  duration:1
})
.from('#imgbox',{
    opacity:0,
    duration:1
})
.from('#marquee,#rotatingtext',{
    opacity:0,
    duration:1
})


gsap.from(".part2text",{
  y:100,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:"#part2",
    scroller:"#main",
    // markers:true,
    scrub:1
  }
})
gsap.from(".part4rightbox",{
  y:200,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:"#part4",
    scroller:"#main",
    
    end:"40%",
    scrub:1
  }
})
gsap.from("#toppart1>h1",{
  y:100,
 
  stagger:1,
  scrollTrigger:{
    trigger:"#part5",
    scroller:"#main",
    
    end:"30%",
    scrub:1
  }
})




var list = document.querySelectorAll('#menulist');


document.querySelector('.menulist1').addEventListener('mouseenter',function(){
  document.querySelector('#menubox').style.backgroundColor = ' rgb(125, 145, 119)';
})
document.querySelector('.menulist1').addEventListener('mouseleave',function(){
  document.querySelector('#menubox').style.backgroundColor = 'rgb(212, 255, 199)';
})
document.querySelector('.menulist3').addEventListener('mouseenter',function(){
  document.querySelector('#menubox').style.backgroundColor = ' rgb(151, 190, 200)';
})
document.querySelector('.menulist3').addEventListener('mouseleave',function(){
  document.querySelector('#menubox').style.backgroundColor = 'rgb(212, 255, 199)';
})
document.querySelector('.menulist5').addEventListener('mouseenter',function(){
  document.querySelector('#menubox').style.backgroundColor = ' rgb(190, 164, 215)';
})
document.querySelector('.menulist5').addEventListener('mouseleave',function(){
  document.querySelector('#menubox').style.backgroundColor = 'rgb(212, 255, 199)';
})


