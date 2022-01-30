$(document).ready(function(){
  let groceriesInput = [];
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const item = $("input#groceriesInput").val();
    if(item) {
      groceriesInput.push(item.trim());
    }
  });
  $("#done").click(function(event) {
    $("#formOne").hide();
    $("#done").hide();
    groceriesInput.sort();
    let upperGroceries = [];
    groceriesInput.forEach(function(item) {
      upperGroceries.push(item.toUpperCase());
    });
    upperGroceries.forEach(function(item) {
      $("#groceries").append("<li>" + item + "</li>");
    });
    $("#output").show();
  });
});

//   const suits = ["hearts", "clubs", "spades", "diamonds"]
//   const numbers = ["Ace", "2", "3", "4", "5","6","7","8","9","10","Jack","Queen","King"]
//   let deck = [];
//   suits.forEach(function(suit) {
//     numbers.forEach(function(number) {
//       deck.push(number + " of " + suit);
//     });
//   });
//     deck.forEach(function(iceCream) {
//     $("#cards").append("<li>" + iceCream + "</li>");
//   });
  