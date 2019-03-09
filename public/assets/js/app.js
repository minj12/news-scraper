$("#scrape").on("click", function () {
    $.ajax({
      method: "GET",
      url: "/scrape",
    })
});

//Delete Note button workswith onclick function
$(".deleteNote").on("click", function () {
    var thisId = $(this).attr("data-note-id");