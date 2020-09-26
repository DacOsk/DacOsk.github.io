/* jquery-Fireworks v0.5 | dario@dario-web.tech | based on snowfall => h4wldev@gmail.com | http://github.com/h4wldev */

(function($) {
	$.snowfall = {
        intervals: [],
        $wrapper: null,
        start: function(options, $wrapper) {
            var options = $.extend({}, {
                size: {
                    min: 10,
                    max: 20
                },
                interval: 500,
                color: "#" + (Math.random().toString(16) + "000000").slice(2, 8), /*random color*/
                content: '&#10052;',
                disappear: 'linear'
            }, options);

            if ($wrapper == undefined) {
                $('body').append('<div id="snowfall-wrapper" />');
                $wrapper = $('#snowfall-wrapper');

                $wrapper.css({
                    'overflow': 'hidden',
                    'height': '100vh',
                    'width': '100vw',
                    'position': 'absolute',
                    'top': '0',
                    'left': '0'
                });
            }

            var $snowfall = $('<div class="flake" />').css({'position': 'absolute', 'top': '1000px'}).html(options.content);

            $.snowfall.$wrapper = $wrapper;
            $.snowfall.$wrapper.show();

            $.snowfall.intervals.push(setInterval(function() {
                var wrapperWidth = $wrapper.width(),
                    wrapperHeight = $wrapper.height(),
                    flakeSize = options.size.min + (Math.random() * options.size.max),
                    duration = Math.floor((wrapperHeight * 2) + (Math.random() * 500)),
                    startPosition = Math.abs(Math.floor(Math.random() * wrapperWidth) - 200);

                $snowfall.clone().appendTo($wrapper).css({
                    'left': startPosition,
                    'opacity': 0.9 + Math.random(),
                    'font-size': flakeSize,
                    'color': "#" + (Math.random().toString(16) + "000000").slice(2, 8)
                }).animate({
                    top: (Math.random() * 400),
                    left: (startPosition - 200) + (Math.random() * 500),
                    opacity: 0.95
                }, duration, options.disappear, function() {
                    $(this).css({
                      fontSize: flakeSize + 150
                    }).delay(100).fadeOut(300);
                });
            }, options.interval));
        },
        stop: function() {
            $.snowfall.intervals.forEach(function(interval) {
                $.snowfall.$wrapper.hide();
                $.snowfall.$wrapper.children('div').each(function() {
                    $(this).remove();
                });
                clearInterval(interval);
            });
        }
    };
})(jQuery);
