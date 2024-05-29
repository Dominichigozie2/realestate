const dropDownBtn = document.querySelectorAll(".dropdown-btn");

dropDownBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const dropdowns = document.querySelectorAll(".dropdown");
        const currentDropdown = btn.nextElementSibling;
        
        dropdowns.forEach((drop) => {
            // Close all dropdowns except the one that corresponds to the clicked button
            if (drop !== currentDropdown && drop.classList.contains("active")) {
                drop.classList.remove("active");
            }
        });

        // Toggle the active class on the clicked button's dropdown
        currentDropdown.classList.toggle("active");
    });
});
