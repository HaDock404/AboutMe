var offsetStart = 0;
var offsetEnd = 0;

const elypse1 = document.getElementById("elypse1")
elypse1.style.left = ""+(screen.width / 2)+"px"



window.addEventListener('scroll', () => {

    var x = document.body.scrollTop || document.documentElement.scrollTop
    console.log(x / screen.height)

    if (x > 500) {
        //elypse1.classList.add("animate")
    }

  document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
}, false);