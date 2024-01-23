// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the print button and add a click event listener to trigger the printView function
  let printButton = document.getElementById("printable");
  printButton.addEventListener("click", printView);

  // Get the add button and add a click event listener to trigger the addTheThing function
  let addButton = document.getElementById("addIt");
  addButton.addEventListener("click", addTheThing);

  // Initialize an empty array to store the wishlist items and get the wishlist area element
  let myList = [];
  let myListArea = document.getElementById("wishList");

  // Function to add an item to the wishlist
  function addTheThing() {
    // Get the input element for the new item
    let theThing = document.getElementById("iWant");
    // Add the item to the list and update the UI
    addToTheList(theThing);
    // Reset the input field after adding the item
    resetInput(theThing);
  }

  // Function to add an item to the wishlist array and update the UI
  function addToTheList(thingToAdd) {
    // Add the item to the wishlist array
    myList.push(thingToAdd.value);

    // Create a new list item element and set its content to the last added item
    let newListItem = document.createElement("li");
    newListItem.innerHTML = myList[myList.length - 1];

    // Append the new list item to the wishlist area
    myListArea.appendChild(newListItem);
  }

  // Function to reset the value of an input field
  function resetInput(inputToReset) {
    // Set the value of the input field to an empty string
    inputToReset.value = "";
  }

  // Function to prepare and display the print view
  function printView() {
    // Get the page and form area elements
    let listPage = document.getElementById("listPage");
    let formArea = document.getElementById("formArea");

    // Hide the form area and add a class to the list page for print styling
    formArea.style.display = "none";
    listPage.classList.add("print");

    // Clear the wishlist area before displaying the sorted items
    myListArea.innerHTML = "";
    // Sort the wishlist items alphabetically
    myList.sort();

    // Populate the wishlist area with the sorted items
    for (let i = 0; i < myList.length; i++) {
      myListArea.innerHTML += "<li>" + myList[i] + "</li>";
    }

    // Trigger the browser's print functionality
    //window.print();
  }
});
