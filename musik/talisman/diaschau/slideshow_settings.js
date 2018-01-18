

registerPloneFunction( function() {

var data = { 
              'http://kleineskunsthaus.net/musik/talisman/diaschau/SSascha%206.jpg/image_large': { caption: 'Oleksandr Klimas' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/band_115.jpg/image_large': { caption: 'Talisman' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/ALS_2801.JPG/image_large': { caption: 'Oleg Nehls' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/104.JPG/image_large': { caption: 'Oleksandr ' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/band_103.jpg/image_large': { caption: 'So sind wir...' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/band_113.jpg/image_large': { caption: 'Katastroffe...' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/41843743e43144043043643543d438435%20021.jpg/image_large': { caption: 'Rabota...' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/41843743e43144043043643543d438435%20033.jpg/image_large': { caption: 'Rabota...' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/41843743e43144043043643543d438435%20039.jpg/image_large': { caption: 'Oj ti poruschka, paranja...' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/41843743e43144043043643543d438435%20037.jpg/image_large': { caption: 'Oj ti poruschka, paranja...' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/051.JPG/image_large': { caption: 'Donaufest' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/portugal%20471.jpg/image_large': { caption: '' },
              'http://kleineskunsthaus.net/musik/talisman/diaschau/portugal%20507.jpg/image_large': { caption: '' }
 };

new Slideshow('myShow', data, 
                {hu: '', classes: ['slideshowfolder'], loader: {'animate': ['loader-#.png', 12]}, 
                paused: false,
                thumbnails: true,
                random: false,
                fast: false,
                replace: [/image_large/, 'image_tile'],
                delay: 5000,
                width: 500,
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


