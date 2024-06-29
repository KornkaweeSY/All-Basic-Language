$("h1").addClass("big-title");

// $("button").html("<em>Hey</em>"); // $ จะเลือกทั้งหมดไม่สนว่าจะเปน All หรือ ไม่ All

// $("a").attr("href", "https://www.yahoo.com");


// $("h1").click(function() {

//     $("h1").css("color", "purple");

// });



// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// This is same result but use jQuery

// $("button").click(function() {
//     $("h1").css("color", "purple");
// });


// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// })

// $("button").on("click",function() {
//     $("h1").fadeToggle();
// });

// $("button").on("click",function() {
//     $("h1").slideToggle();
// });

// $("button").on("click",function() {
//     $("h1").animate({opacity: 0.5});
// });

$("button").on("click",function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});