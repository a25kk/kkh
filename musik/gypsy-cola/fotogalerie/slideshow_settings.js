

registerPloneFunction( function() {

var data = { 
 };

new Slideshow('myShow', data, 
                {hu: '', classes: ['slideshowfolder'], loader: {'animate': ['loader-#.png', 12]}, 
                paused: false,
                thumbnails: true,
                random: false,
                fast: false,
                replace: [/image_large/, 'image_tile'],
                delay: 5000,
                width: 400,
                controller: true,
                duration: 500,
                captions: true,
                height: 350,
                linked: false,
                loop: true
                });


cssQuery('.slideshowfolder-controller li.pause a')[0].title = 'Play / Pause [P]';


cssQuery('.slideshowfolder-controller li.prev a')[0].title = 'Previous [Left arrow]';


cssQuery('.slideshowfolder-controller li.next a')[0].title = 'Next [Right arrow]';


cssQuery('.slideshowfolder-controller li.last a')[0].title = 'Last [Shift + Right arrow]';


cssQuery('.slideshowfolder-controller li.first a')[0].title = 'First [Shift + Left arrow]';


});


