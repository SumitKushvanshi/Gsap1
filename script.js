// gsap.to('#page2 h1',{
//  transform: "translateX(-60%)",

//     scrollTrigger:{
//         trigger:'#page2',
//         scroller:'body',
//         markers:true,
//         start:'top 0%',
//         end:'top -100%',
//         scrub:2,
//         pin:true

//     }

// })

// To create a SVG Hover in our website
// var path = `M 10 80 Q 500 100 900 80`;
// var finalPath = `M 10 80 Q 500 100 900 80`
// var string = document.querySelector('#srting');
// string.addEventListener("mousemove", function (dts) {
//     path = `M 10 80 Q ${dts.x} ${dts.y} 900 80`
//     gsap.to("svg path", {
//         attr: {
//             d: path

//         },
//         duration: 0.5,
//         easing: 'power3.out'
//     })
// })

// string.addEventListener("mouseleave", function () {
//     gsap.to('svg path', {
//         attr: {
//             d: finalPath

//         },
//         duration:0.5,
//         ease: "elastic.out(1,0.1)",
      
//     })

// })


//create Custome Curser
var main=document.querySelector('#main')
var curser=document.querySelector('#cursur')
var image=document.querySelector('#image')

main.addEventListener("mousemove",function(dts){
    gsap.to(curser,{
        x:dts.x,
        y:dts.y,
        duration:0.5
    })
})

image.addEventListener("mouseenter", function(){
    curser.innerHTML="View More"
    gsap.to(curser,{
        scale:4
    })
})

image.addEventListener("mouseleave", function(){
    curser.innerHTML=""
    gsap.to(curser,{
        scale:1
    })
})