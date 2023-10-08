function locoIntialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

     // Update cursor position on scroll
     scroll.on('scroll', (args) => {
        const scrollY = args.scroll.y;
        updateCursorPosition(scrollY);
    });
}


function updateCursorPosition(scrollY) {
    const cursor = document.querySelector('#cursor');
    // Update the cursor position based on scrollY
    cursor.style.transform = `translateY(${scrollY}px)`;
}


function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function (elem) {
        // create two spans
        var parent = document.createElement("span");
        var child = document.createElement("span");


        // parent and child both sets their respective classes

        parent.classList.add("parent");
        child.classList.add("child");

        // span parents gets child and child gets elem details
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);


        // elem replaces its value with parents span

        elem.innerHTML = "";
        elem.appendChild(parent);


    })
}



function valuesSetters(){
    // homepage value set for parent child h1 tag of reveal span of (animateHomepage) function
    gsap.set("#nav a", {y : "-100%", opacity: 0});
    gsap.set("#home span .child", {y : "100%"});
    gsap.set("#home .row img", {opacity : 0});


    // svg animation value set of (animatesvg) function

    document.querySelectorAll("#Visual>g").forEach(function(e){
        var character = e.childNodes[1].childNodes[1];
        
        character.style.strokeDasharray = character.getTotalLength() + "px";
        character.style.strokeDashoffset = character.getTotalLength() + "px";
        
    })


}



function loaderAnimation(){
    var tl = gsap.timeline();

tl.
from("#loader .child span",{
    x:100,
    duration:2,
    stagger:.1,
    // delay:1,
    opacity:0.4,
    ease:Circ.easeOut
})
.to("#loader .parent .child",{
    y:"-100%",
    duration:1,
    delay:1,
    ease:Circ.easeOut
})
.to("#loader",{
    height:0,
    duration:2,
    ease:Expo.easeInOut
})
.to("#loader-green",{
    height:"99%",
    top:0,
    duration:2,
    delay:-2,
    ease:Expo.easeInOut
})
.to("#loader-green",{
    height:"0%",
    top:"-100%",
    duration:.4,
    delay:-.4,
    ease:Expo.easeIn,
    onComplete: function(){

        animateHomepage();
    }
    
})
}





function animateSvg(){
    
   
    
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset:0,
        // strokeDasharray:0.000001,
        duration:1,
        ease: Expo.easeInOut,
        
    })
    
}


function animateHomepage(){

    var tl = gsap.timeline();

    tl.to("#nav a",{
        y:0,
        opacity: 1,
        stagger : .05,
        ease:Expo.easeInOut
    })
    .to("#home  .parent .child ",{
        y:0,
        // opacity: 1,
        stagger : .1,
        duration: 2,
        ease:Expo.easeInOut
    })
    .to("#home  .row img ",{
        opacity: 1,
        ease:Expo.easeInOut,
        onComplete:function(){
            animateSvg();
        }


    })

}



function cardHover(){
    document.querySelectorAll(".cnt").forEach(function(cnt){
        var showinImage;
        cnt.addEventListener("mousemove", function(dets){
            console.log(dets.target.dataset.index); 
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
            document.querySelector(".dpkCursor").style.opacity = 0;
            showinImage = dets.target;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.x}px, ${dets.y}px)`
            showinImage.style.filter = "grayscale(1)"
            document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color

        })

        cnt.addEventListener("mouseleave", function(dets){
            document.querySelector("#cursor").children[showinImage.dataset.index].style.opacity = 0;
            document.querySelector(".dpkCursor").style.opacity = 1;
            showinImage.style.filter = "grayscale(0)"
            document.querySelector("#work").style.backgroundColor = "#F2F2F2" 

        })
    })

}

revealToSpan();
valuesSetters();
loaderAnimation(); 
cardHover();
locoIntialize();






// gsap.from("g path",{
//     strokeDasharray:64.68521881103516,
//     strokeDashoffset:64.68521881103516,
//     duration:1,
//     ease:Expo.easeInOut
// })

