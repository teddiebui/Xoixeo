$(document).ready(()=>{
    console.log("hello")

    $(".hover").hover(
        function() { // Mouse enter
            $(this).addClass('hovered');
        }, 
        function() { // Mouse leave
            $(this).removeClass('hovered');
        }
    )
    
    //trang khuyen mai controller click add class
    z = $("#khuyen-mai .button.controller")
    z.click(function() {
        z.removeClass("active");
        $(this).addClass("active");

        $("#khuyen-mai .promo-list > *").addClass("display-none")
        _this = $(this)[0]
        index = z.index(_this)
        $($("#khuyen-mai .promo-list > *")[index]).removeClass("display-none")
    })
    $("#khuyen-mai .button.controller")[0].click()
})