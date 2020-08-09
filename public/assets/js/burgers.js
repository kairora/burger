$( document ).ready(function() {
    
    $(".change-devoured").on("click", function(event) {
      let id = $(this).data("id");
      let newDevoured = $(this).data("devoured");
      let devState = {
          devoured: newDevoured
      }
        
      
      
    //   console.log("devoured is " + typeof(newDevoured) )

        console.log(id)
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devState
      }).then(
        function() {
          location.reload();
        }
      );
    });

$("#newburgBtn").on("click", function(event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#bu").val().trim(),
    };

    console.log(newBurger)
    $.ajax("/api/burgers", {
        
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Created new burger");
        location.reload();
      }
    );
  });
});