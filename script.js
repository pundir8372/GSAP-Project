var tl=gsap.timeline();
tl.from("#nav h3",{
  y:-50,
  delay:0.4,
  duration:0.8,
  opacity:0,
  stagger:0.3,
})
tl.from("#main h1",{
  x:-500,
  duration:0.8,
  opacity:0,
  stagger:0.4,
})
tl.from("img",{
  x:100,
  rotate:45,
  opacity:0,
  duration:0.5,
  stagger:0.3,
})
tl.from("#footer h2",{
  x:-500,
  duration:0.8,
  opacity:0,
  stagger:0.4,
})
tl.from("#text",{
  x:-500,
  duration:0.8,
  opacity:0,
  stagger:0.5,
})
