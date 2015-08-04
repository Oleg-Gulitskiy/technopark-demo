$(document).ready(function() {
        $('.header__buttonMenu').on('click', function(e) {
            e.preventDefault();

            var $this = $(this),
                menu = $('.header__menu'),
                duration =200;
            if (!$this.hasClass('active')) {
                $this.addClass('active');
                menu.slideDown(duration);
            } else {
                $this.removeClass('active');
                menu.slideUp(duration)
            }
        })

        $('.header__searchButton').on('click', function(e) {
            e.preventDefault();

            var $this = $(this),
                logo = $('.header__logo'),
                search = $('.header__searchInput');

            if (!$this.hasClass('active')) {
                $this.addClass('active');
                logo.hide();
                //$this.css('width', '65%');
                //search.css('border-bottom', '1px solid #fff');
                $this.css('right', '70%');
                search.css('width', '65%');
                search.css('padding-left', '6%');
            } else {
                $this.removeClass('active');
                logo.show(300);
                //$this.css('width', '50px');
                //search.css('border-bottom', 'none');
                $this.css('right', '50px');
                search.css('width', '0');
                search.css('padding-left', '0');
            }
        })
    }
);

$(document).ready(function() {

    $('.filter__buttonMenu').on('click', function(e){
        $('.filter__menu').toggle('fast')
    })

});

$(document).ready(function () {
    $('.filter__rangeInputFrom').priceFormat();
});

$(document).ready(function () {
    $('.filter__rangeInputTo').priceFormat();
});

/*
$(document).ready(function() {
    $(".filter__brandList").select2();
});
*/
