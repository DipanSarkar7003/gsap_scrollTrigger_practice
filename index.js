console.log("helo world")


gsap.to("#hero_h1",{
    transform:"translate(-140%)",
 
    delay:1,
    fontWeight:50,
 
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        scrub:2,
        markers:true,
        start:"top 0",
        // end:"top -100",
        pin:"#page1"
    }
    
})


gsap.to("#page2 " , {
    backgroundColor:"black",
    color:"white",
    fontSize:30,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        scrub:2,
        pin:"#page2",
        markers:true,
        // start:"top 50%"
        pin:"#page2"

    }
})

gsap.to("#page2 h1", {
    transform:"translate3d (0 0 50)",
delay:2,
duration :2 


}) 

gsap.to("#page3_h1 " , {
    backgroundColor:"black",
    color:"white",
    transform:"rotate(20deg)",
    transform:"translateX(-150%)",
    transform:"translateY(-100%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body" ,
        scrub:2,
        markers:true,
        // start:"top 20%",
        pin:"#page3"

    }

})