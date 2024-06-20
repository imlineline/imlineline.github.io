$(function() {
    $('.img:nth-child(3) .text').css('opacity', '1');

    $('.box').on('mouseover', '.img', function() {
        if (!$(this).is(':nth-child(3)')) {
            $('.img:nth-child(3) .text').css('opacity', '0');
        }
        $(this).find('.text').css('opacity', '1');
    });

    $('.box').on('mouseout', '.img', function() {
        if (!$(this).is(':nth-child(3)')) {
            $('.img:nth-child(3) .text').css('opacity', '1');
        }
        $(this).find('.text').css('opacity', '0');
    });

    $('.box').on('mouseleave', function() {
        $('.img:nth-child(3) .text').css('opacity', '1');
    });

    $('#scroll-to-top').on('click', function(event) {
        event.preventDefault(); 
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    $('[data-bs-toggle="popover"]').popover();

    $('img').click(function() {
        var soundId = $(this).data('sound');
        var sound = $('#' + soundId)[0];
        if (sound) {
            sound.play();
        }
    });
});
