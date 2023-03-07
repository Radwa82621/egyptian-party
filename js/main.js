$("#nav-icon").click(function () {
    let navContainerWidth = $("#nav-container").innerWidth();

    $("#nav").animate({ left: `${navContainerWidth}` }, 1000)
})
$(".closebtn").click(function () {
    let navContainerWidth = $("#nav-container").innerWidth();
    $("#nav").animate({ left: "0px" }, 1000)
})
$(function () {
    $("#accordion").accordion({
        heightStyle: "content"
    });
});
let singersTop = $("#singers").offset().top
$(window).scroll(function () {
    let windowTop = $(window).scrollTop()
    if (windowTop > singersTop) {
        $("#nav").fadeOut(100);
    } else {
        $("#nav").fadeIn(100);
    }
})
$('#countdown').countdown('2023/5/25', function (event) {
    $(".day").html(event.strftime('%D d'));
    $(".hr").html(event.strftime('%H h'));
    $(".min").html(event.strftime('%M m'));
    $(".sec").html(event.strftime('%S s'));

});
$(function () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(`${character} Character Reamining `);
        }
    });
});

