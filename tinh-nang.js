$(document).ready(function () {
    console.log("tinh-nang.js")

    function show(id) {
        $("#main-content > *").removeClass("show");
        $(`#${id}`).addClass("show");
        
    }

    $("#side-nav > *").click(function () {
        $("#side-nav > *").removeClass("active");
        $(this).addClass("active");
        $(this).attr("id") == "san-pham-list" ? $("#sp-list").show() : $("#sp-list").hide()
        $(this).attr("id") == "sp-list" ? $("#sp-list").show() : undefiled;
    })

    $(".san-pham-article").click(function() {
        $(".san-pham-article").removeClass("active")
        $(this).addClass("active")
        console.log($(this).attr("data-bind"))
        show($(this).attr("data-bind"))
    })



})