(() => {
    // test fired
    console.log('fired!');

    function myFunction() {
      var x = document.getElementById("mainNav");
      if (x.className === "mainNav") {
        x.className += " responsive";
      } else {
        x.className = "mainNav";
      }
    }



})()
