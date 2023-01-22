window.onscroll = function() {myFunction()};
     
    function myFunction() {
        var x = document.body.scrollTop || document.documentElement.scrollTop;
            if (x > 150) {
                document.getElementById("myP").className = "test1";
            } else if (x > 100) {
                document.getElementById("myP").className = "test2";
            } else if (x > 50) {
                document.getElementById("myP").className = "test3"; 
            } else {
            document.getElementById("myP").className = "";
            }
        var y = document.body.scrollLeft || document.documentElement.scrollLeft;
        document.getElementById("mesures").innerHTML = "scrollLeft = " + y + "px scrollTop = " +  x + "px" ;
            
    }