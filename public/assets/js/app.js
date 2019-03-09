$("#scrape").on("click", function () {
    $.ajax({
      method: "GET",
      url: "/scrape",
    }).done(function (data){})
});

//Delete Note button workswith onclick function
$(".deleteNote").on("click", function () {
    var thisId = $(this).attr("data-note-id");