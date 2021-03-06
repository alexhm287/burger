// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger_name").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/burger", {
      type: "PUT",
      data: {id: id}
    }).then(
      function() {
        console.log("changed burger to devoured", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
