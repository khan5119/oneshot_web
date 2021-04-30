$(function () {
    $('.gray_wrap').hide();
    var clickNum = 0;
    $('.ask_btn').click(function () {
        $('.gray_wrap').show();
    });
    $('p.close').click(function () {
        $('.gray_wrap').hide();
        $('.slidedown_btn').css({
            transform: 'rotate(0deg)',
            transition: 'all 0.8s'
        });
        $('span', '.slidedown_btn').css({
             background: '#f4f5f6'
        });
        $('.slidedown_btn').next('.ask_check_text').slideUp();
    });
    $('.slidedown_btn').click(function () {
        clickNum++;
        if (clickNum % 2 != 0) {
            $(this).css({
                transform: 'rotate(180deg)',
                transition: 'all 0.8s',
            });
            $('span', this).css({
                background: '#49bbff'
            });
            $(this).next('.ask_check_text').slideDown();
        } else if (clickNum % 2 == 0) {
            $(this).css({
                transform: 'rotate(0deg)',
                transition: 'all 0.8s'
            });
            $('span', this).css({
                background: '#f4f5f6'
            });
            $(this).next('.ask_check_text').slideUp();
        }
    });
});
