$(document).ready(() => {


    $(".hover").hover(
        function () { // Mouse enter
            $(this).addClass('hovered');
        },
        function () { // Mouse leave
            $(this).removeClass('hovered');
        }
    )

    let banner_next = $(".slideshow-container .slideshow-controller>a.next")
    let banner_prev= $(".slideshow-container .slideshow-controller>a.prev")
    
    $(".slide").each(function () {
        if ($(".slide").index(this) == 0) {
            html = '<span class="dot active"></span>'
        } else {
            html = '<span class="dot"></span>'
        }

        $(".slideshow-controller-dot").append(html)
    })

    function slideNext() {
        //add class
        current = $(".slide.current")
        index = $(".slide").index(current)
        index < $(".slide").length - 1 ? index++ : index = 0
        current.removeClass("current")
        $($(".slide")[index]).addClass("current")
        $(".dot.active").removeClass("active")
        $($(".dot")[index]).addClass("active")
    }

    function slidePrev() {
        //add class
        current = $(".slide.current")
        index = $(".slide").index(current)
        index > 0 ? index-- : index=$(".slide").length - 1
        current.removeClass("current")
        $($(".slide")[index]).addClass("current")
        $(".dot.active").removeClass("active")
        $($(".dot")[index]).addClass("active")
    }

    banner_next.click(function () {
        clearInterval(interval)
        slideNext()
        interval = setInterval(slideNext, 3000)
    })

    banner_prev.click(function () {
        clearInterval(interval)
        slidePrev()
        interval = setInterval(slideNext, 3000)
    })
    interval = setInterval(slideNext, 3000)


    //floating video
    $(".abs.zz").click(function () {
        $("#thuong-hieu-video").show()
        $("#thuong-hieu-video video")[0].play()
        $('html').keyup(function (e) {
            if (e.key === "Escape") {
                console.log("keypress Yeah")
                $("#thuong-hieu-video").hide()
                $(this).unbind("keyup")
                $("#thuong-hieu-video video")[0].video.pause()
            }
        })
        $('html, body').css({
            overflow: 'hidden',
        });

        //close button
        $(".my-modal .cancel").click(function () {
            $("#thuong-hieu-video").hide()
            $('html, body').css({
                overflow: 'auto',
            });
            $("#thuong-hieu-video video")[0].pause()
        })
    })
})