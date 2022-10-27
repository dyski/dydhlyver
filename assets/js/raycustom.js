//-----------------------------------------------------------------------
// Mobilekit Settings
//-----------------------------------------------------------------------


// play one audio

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
            audios[i].currentTime = 0;
        }
    }
}, true);



var locationBut = document.querySelectorAll('.get-location');
if(locationBut.length){
    var locationSupport = document.getElementsByClassName('location-support')[0]
    if (typeof(locationSupport) != 'undefined' && locationSupport != null){
        //Geo Location
        if ("geolocation" in navigator){
            locationSupport.innerHTML = 'Your browser and device <strong class="color-green2-dark">support</strong> Geolocation.';
        }else{
            locationSupport.innerHTML = 'Your browser and device <strong class="color-red2-dark">support</strong> Geolocation.';
        }
    }
    function geoLocate() {
        const locationCoordinates = document.querySelector('.location-coordinates');
        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            locationCoordinates.innerHTML = '<strong>Longitude:</strong> ' + longitude + '<br><strong>Latitude:</strong> '+ latitude;
            var mapL1 = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyAM3nxDVrkjyKwdIZp8QOplmBKLRVI5S_Y&center=';
            var mapL2 = latitude+',';
            var mapL3 = longitude;
            var mapL4 = '&zoom=16&maptype=satellite'
            var mapL5 = ''
            var mapLinkEmbed = mapL1 + mapL2 + mapL3 + mapL4;
            var mapLinkAddress = mapL1 + mapL2 + mapL3 + mapL5;
            var mapLinkNewAPI = 'https://www.google.com/maps/@' + latitude + ','+ longitude + ',15z'
            document.getElementsByClassName('location-map')[0].setAttribute('src',mapLinkEmbed);
            document.getElementsByClassName('location-button')[0].setAttribute('href',mapLinkNewAPI);
            document.getElementsByClassName('location-button')[0].classList.remove('disabled');
        }
        function error() {locationCoordinates.textContent = 'Unable to retrieve your location';}
        if (!navigator.geolocation) {locationCoordinates.textContent = 'Geolocation is not supported by your browser';}
        else {locationCoordinates.textContent = 'Locating';navigator.geolocation.getCurrentPosition(success, error);}
    }
    var getLocation = document.getElementsByClassName('get-location')[0]
    if (typeof(getLocation) != 'undefined' && getLocation != null){
        getLocation.addEventListener('click',function(){this.classList.add('disabled'); geoLocate();})
    }
}

        //Vibrate API
        var vibrateButton = document.querySelectorAll('[data-vibrate]');
        if(vibrateButton.length){
            var startVibrating = document.getElementsByClassName('start-vibrating')[0];
            var stopVibrating = document.getElementsByClassName('stop-vibrating')[0];

            startVibrating.addEventListener('click',function(){
                var vibrateTime = document.getElementsByClassName('vibrate-demo')[0].value;
                window.navigator.vibrate(vibrateTime);
            })
            stopVibrating.addEventListener('click',function(){
                window.navigator.vibrate(0);
            })
            vibrateButton.forEach(el => el.addEventListener('click',e =>{
                var vibrateTime = el.getAttribute('data-vibrate');
                window.navigator.vibrate(vibrateTime);
            }));
        }


    //Adding Local Storage for Visited Links
        var checkVisited = document.querySelectorAll('.check-visited');
            if(checkVisited.length){
            function check_visited_links(){
                var visited_links = JSON.parse(localStorage.getItem('_Visited_Links')) || [];
                var links = document.querySelectorAll('.check-visited a');
                for (let i = 0; i < links.length; i++) {
                    var that = links[i];
                    that.addEventListener('click',function(e){
                        var clicked_url = this.href;
                        if (visited_links.indexOf(clicked_url)==-1) {
                            visited_links.push(clicked_url);
                            localStorage.setItem('_Visited_Links', JSON.stringify(visited_links));
                        }
                    })
                    if (visited_links.indexOf(that.href)!== -1) {
                        that.className += ' btn';
                    }
                }
            }
            check_visited_links();
        }