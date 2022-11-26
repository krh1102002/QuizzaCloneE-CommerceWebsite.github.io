
        const c = document.querySelector(".cart");
        const b = document.querySelector(".all-content");
        function show_cart(){
            c.classList.add("active");
            b.style.opacity = "0.7";
        }
        function hide_cart(){
            c.classList.remove("active");
            b.style.opacity = "1"      
        }
    
        function show(i) {
            const x = document.querySelectorAll(".abs");
            const y = document.querySelectorAll('.center-1 .figure img');
            x[i].classList.add("show");
            if (i != 0)
                y[i].src = `images/osh-${i + 1}.webp`
        }
        function hide(i) {
            const x = document.querySelectorAll(".abs");
            const y = document.querySelectorAll(".center-1 .figure img");
            x[i].classList.remove("show");
            if (i != 0)
                y[i].src = `images/os-${i + 1}.jpg`;
        }
        $(document).ready(function(){
            $('.os-slider').owlCarousel({
                items:1,
                dots:true
            })
        })
        $(document).ready(function(){
            $(".owl-comming-soon").owlCarousel({
                items:1,
                nav:true
            })
        })