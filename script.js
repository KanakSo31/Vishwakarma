document.addEventListener("DOMContentLoaded", function () {
  // Grab all the offers and the hidden size and color selection sections
  const offers = document.querySelectorAll('input[name="offer"]');
  const selectionSections = document.querySelectorAll(".A");
  const totalPrice = document.getElementById("total");

  // Function to show the corresponding size and color selection section
  function hideShow() {
    // Hide all sections first
    selectionSections.forEach((section) => {
      section.style.display = "none";
    });

    // Find the checked radio button (offer) and show the corresponding section
    offers.forEach((offer, index) => {
      if (offer.checked) {
        selectionSections[index].style.display = "flex";
        // Update the total price based on the selected offer
        totalPrice.textContent = offer.value;
      }
    });
  }

  // Attach the event listener to each offer
  offers.forEach((offer) => {
    offer.addEventListener("change", hideShow);
  });

  // Initialize by showing the correct section on page load
  hideShow();
});
