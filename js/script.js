(function($) {

    $('#burger-menu').on('click', function() {
        $('#menu').toggleClass('active-menu');
    });
    $('.go-to').on('click', function(){
        $("#menu").removeClass("active-menu");
    });


    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.tabs').find('div.tabs__content')
            .removeClass('active').eq($(this).index()).addClass('active');
        $('.arrow').removeClass('active-arrow');
        $(this.firstElementChild).addClass('active-arrow');
    });


    $('.show-image').on('click', function() {
        event.preventDefault();
        var mainImage = $(this).index();
        $('.largeImg img').removeClass('active-img');
        $('.largeImg img').eq(mainImage).addClass('active-img');
    });

    var d = new Date();
    var month = ["ЯНВ", "ФЕВ", "МАР", "АПР", "МАЯ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"];
    $('#day')[0].innerText = d.getDate();
    $('#month')[0].innerText = month[d.getMonth()];

})(jQuery);