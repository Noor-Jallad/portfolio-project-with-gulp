let navbar=document.getElementById("navbar"),links=(window.addEventListener("scroll",function(){50<window.scrollY?navbar.classList.add("newBg-color"):navbar.classList.remove("newBg-color"),navbar.style.transition="0.7s"}),document.querySelectorAll("nav a"));links.forEach(function(e){e.addEventListener("click",function(e){e=e.target.attributes.href.value,e=document.querySelector(e).offsetTop;window.scroll({top:e,behavior:smooth})})});var body=document.body,topBtn=(body.style.overflow="hidden",document.querySelector(".loading").style.opacity="1",document.querySelector(".loading").style.visibility="visible",document.querySelector(".loading").style.transition="0.7s",window.addEventListener("load",function(){setTimeout(function(){document.querySelector(".loading").style.opacity="0",document.querySelector(".loading").style.visibility="hidden",body.style.overflow="auto"},2e3)}),document.querySelector(".top").style.opacity="0",document.querySelector(".top").style.visibility="hidden",window.addEventListener("scroll",function(){var e=document.getElementById("about").offsetTop;console.log(e),window.scrollY>e?(document.querySelector(".top").style.opacity="1",document.querySelector(".top").style.visibility="visible"):(document.querySelector(".top").style.opacity="0",document.querySelector(".top").style.visibility="hidden"),document.querySelector(".top").style.transition="0.7s"}),document.querySelector(".top button"));topBtn.addEventListener("click",function(){window.scroll({top:0,behavior:"smooth"})});