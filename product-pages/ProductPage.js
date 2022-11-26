const rp = document.querySelectorAll(".owl-one .item img");
        function show(i){
            if (i != 0)
                rp[i].src = `../images/osh-${i + 1}.webp`
        }
        function hide(i){
            if(i !=0)
              rp[i].src = `../images/os-${i+1}.jpg`
        }
        const pinfo = document.querySelector(".head button");
        const pinfoContent = document.querySelector(".pinfo-content");
        pinfo.addEventListener("click",phide);
        function phide(){
            var inner = pinfo.innerHTML;
            if(inner == "-"){
                pinfoContent.style.display = "none"
                pinfo.innerHTML ="+"
            }
            else{
                pinfoContent.style.display = "block";
                pinfo.innerHTML ="-";
            }
        }
        $(document).ready(function(){
            $('.owl-two').owlCarousel({
                items:1,
                loop:false,
                // dots:true,
                margin:10
            })
        })
        $(document).ready(function () {
            $('.owl-one').owlCarousel({
                items: 3,
                margin: 5,
                loop: true,
                nav: true,
                
                responsive: {
                    0:{
                        items:1,
                        nav:false,
                        autoplay:true,
                        loop:true
                    },
                    766: {
                        items: 2,
                        nav: true,
                    },
                    991: {
                        items: 3,
                    }
                }

            })
        })