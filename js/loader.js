window.onload = function() {
    // Get the loader element
    var loader = document.querySelector('.loader');
    // Delay the hiding of the loader by 5 seconds (5000 milliseconds)
    setTimeout(function() {
        // Add a class to hide the loader
        loader.classList.add('hidden');
    }, 5000);
};
