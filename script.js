var tl=gsap.timeline();
tl


.from("#nav h2",{
    y:0,
    opacity:0,
    delay:0.3,
    stagger:0.3
})
.from("#main img:nth-child(5)",{
    x:300,
    opacity:0,
    delay:0.6,
    rotate:300
})
.from("#main img:nth-child(6)",{
    x:300,
    opacity:0,
    delay:1,
    rotate:300
})
.from("#main h1",{
    x:-300,
    opacity:0,
    delay:1.7,
    stagger:0.4
})

