window.onscroll = function() {myFunction()};

const elypse1 = document.getElementById("elypse1")

elypse1.style.left = ""+(screen.width / 2)+"px"
//elypse1.style.height = ""+screen.height+"px"


addEventListener("resize", (event) => {});
onresize = (event) => {
    console.log(elypse1.style.backgroundColor)

};

    //elypse1.style.transform = "translate(-50%, -10%)"
    //elypse1.style.height = ""+screen.height*2+"px"



    function myFunction() {
        var x = document.body.scrollTop || document.documentElement.scrollTop;


        document.getElementById("part2").style.transform = "rotate(-"+x * 0.1+"deg)"

        //const sentence1 = document.getElementById("sentence1")

            if (x < 10000) {
                elypse1.classList.add('active')
            } else if (15000 > x > 25000) {

            }

            /*if (x > 150) {
                document.getElementById("myP").className = "test1";
            } else if (x > 100) {
                document.getElementById("myP").className = "test2";
            } else if (x > 50) {
                document.getElementById("myP").className = "test3"; 
            } else {
            document.getElementById("myP").className = "";
            }*/
            
    }

    ///////////////////////////////////////////////////////////////////////////////////////
    var offsetStart = 0;
    var offsetEnd = 0;

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
}, false);