//loading view
$(() => {
    $(window).on('load', () => {
        $('.loader').delay(600).fadeout(600);
        $('.loaderBg').delay(900).fadeOut(800);
    })
    setTimeout(() => {
        $('.loaderBg').fadeOut(600);
    }, 5000);
})

//jump to anchor
$(() => {
    $('a[href^="#"]').on('click', () => {
        var adjust = $('main').height() * -0.3;
        var speed = 250;
        var href = $(event.currentTarget).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('main').animate({ scrollTop: position }, speed, 'swing');
        return false;
    })
})

//first view transition
$(() => {
    $('#introduction').on('scroll', () => {
        let baseH = $('#firstView').height();
        let scrollH = $('#introduction').scrollTop();
        $('#fvTitle h1').css("color", "rgba(33,33,33," + ((4 / 3) - (4 / 3) * scrollH / baseH) + ")");
        $('#fvTitle h1').css("text-stroke", "0.5px rgba(33,33,33," + (2 * scrollH / baseH - 1) + ")");
        if (scrollH >= baseH) {
            $('#firstView').css("pointer-events", "none")
        }
    })
}
)

//header transition
$(() => {
    let cawTop = $('#codeAreaContainer').offset().top;
    $('main').on('scroll', () => {
        let scroll = $('main').scrollTop();
        if (scroll >= cawTop) {
            $('header').addClass('whileCode');
            $('main').addClass('whileCode');
            cawTop = $('#codeAreaContainer').position().top;
        }
        else {
            $('header').removeClass('whileCode');
            $('main').removeClass('whileCode');
            cawTop = $('#codeAreaContainer').position().top;
        }
    })
})