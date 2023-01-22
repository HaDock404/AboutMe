window.onscroll = function() {myFunction()};
     
    function myFunction() {
        var x = document.body.scrollTop || document.documentElement.scrollTop;

        document.getElementById("part2").style.transform = "rotate(-"+x+"deg)"

            if (x > 150) {
                document.getElementById("myP").className = "test1";
            } else if (x > 100) {
                document.getElementById("myP").className = "test2";
            } else if (x > 50) {
                document.getElementById("myP").className = "test3"; 
            } else {
            document.getElementById("myP").className = "";
            }
            
    }