function moveProgressBar() {
    console.log("moveProgressBar");
    var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 100;

    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}
(function() {

    var support = { animations : Modernizr.cssanimations },
        container = document.getElementById( 'ip-container' ),
        incont = document.getElementById( 'ip-incont' ),
        progr = document.getElementById( 'ip-progr' ),
        loco = document.getElementById( 'loco' ),
        header = container.querySelector( 'header.ip-header' ),
        loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
        animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
        // animation end event name
        animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

    function init() {
        var onEndInitialAnimation = function() {
            if( support.animations ) {
                this.removeEventListener( animEndEventName, onEndInitialAnimation );
            }

            startLoading();
        };

        // disable scrolling
        window.addEventListener( 'scroll', noscroll );

        // initial animation
        classie.add( container, 'loading' );

        if( support.animations ) {
            container.addEventListener( animEndEventName, onEndInitialAnimation );
        }
        else {
            onEndInitialAnimation();
        }
    }

    function startLoading() {
        // simulate loading something..
        var simulationFn = function(instance) {
            var progress = 0,
                interval = setInterval( function() {
                    progress = Math.min( progress + Math.random() * 0.03, 1 );
                    var percen = Math.ceil(progress*100);
                    $('#ip-progr').data('progress-percent', percen);
                    moveProgressBar();

                    instance.setProgress( progress );

                    // reached the end
                    if( progress === 1 ) {
                        classie.remove( container, 'loading' );
                        classie.add( container, 'loaded' );
                        classie.add( incont, 'fadeOut' );
                        classie.add( progr, 'fadeOut' );
                        $('#textlogo').fadeOut();
                        setTimeout(function() {
                            $('#logotext2').addClass('fadeIn');
                            $('#logotext2').css('display','block');
                        }, 400);
                        clearInterval( interval );

                        var onEndHeaderAnimation = function(ev) {
                            if( support.animations ) {
                                if( ev.target !== header ) return;
                                this.removeEventListener( animEndEventName, onEndHeaderAnimation );
                            }

                            classie.add( document.body, 'layout-switch' );
                            window.removeEventListener( 'scroll', noscroll );
                        };

                        if( support.animations ) {
                            header.addEventListener( animEndEventName, onEndHeaderAnimation );
                        }
                        else {
                            onEndHeaderAnimation();
                        }
                    }
                }, 80 );
        };

        loader.setProgressFn( simulationFn );
    }



    function noscroll() {
        window.scrollTo( 0, 0 );
    }

    init();

})();
