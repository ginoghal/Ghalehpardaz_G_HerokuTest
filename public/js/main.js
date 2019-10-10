(() => {
    // test fired
    console.log('fired!');

    function hamburgerMenu() {
  		mainNav.classList.toggle("slideToggle");
  		button.classList.toggle("expanded");
  	}

  	button.addEventListener("click", menu, false);

  })();


})()
