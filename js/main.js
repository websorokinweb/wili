$(function(){

    $('.text__content-showlist').on('click', function(){
        $(this).toggleClass('text__content-showlist--opened')
        if ($(this).hasClass('text__content-showlist--opened')){
            $(this).text('Show less')
            $(this).css('marginBottom', '20px')
        } else {
            $(this).text('Show more')
            $(this).css('marginBottom', '0')
        }
        $(this).next().toggleClass('text__content-list--closed')
    })

    $('.text__content-showblock').on('click', function(){
        $(this).toggleClass('text__content-showblock--opened')
        if ($(this).hasClass('text__content-showblock--opened')){
            $(this).text('Show less')
            $(this).css('marginBottom', '20px')
        } else {
            $(this).text('Show more')
        }
        $(this).next().toggleClass('text__content-block--closed')
    })
    
});
