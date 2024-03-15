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
})