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
    
//load typekit
(function (d) {
    var config = {
      kitId: 'hsd0uya',
      scriptTimeout: 3000,
      async: true
    },
      h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
  })(document);