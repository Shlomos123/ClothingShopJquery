var CRSShops = null;
var MYmarker = [];


$(document).on("pageinit", "#MapPage", function (event) {
    wireEventsMapPage();
});


function wireEventsMapPage() {

    var geocoder;
    var map;
    var marker;
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var watchGeoMarkerProcess;
/** var CRSAzrieliMall = { lat: 32.074573, lng: 34.79181 };
    var CRSBigPoleg = { lat: 32.276466, lng: 34.861647 };
    var CRSGrandCanyon = { lat: 32.789711, lng: 35.007822 };
    var CRSMallHayam = { lat: 29.549788, lng: 34.953916 };
    var CRSBigPH = { lat: 32.488597, lng: 34.970715 };
    var CRSBigBS = { lat: 31.242577, lng: 34.81061 };
    var CRSBigKS = { lat: 33.192848, lng: 35.571685 };
    var CRSMalhaMall = { lat: 31.751601, lng: 35.187316 };
    var CRSHazahavMall = { lat: 31.990302, lng: 34.774205 };
    var CRSBigFashionTiberias = { lat: 32.790528, lng: 35.53368 };**/
    window.onload = start();
    function start()
    {
        document.getElementById("getPosition").addEventListener("click", getLocation);
        document.getElementById("watchPosition").addEventListener("click", watchPosition);
        document.getElementById("watchPositionStop").addEventListener("click", watchPositionStop);
        setTimeout(function ()
        { showMap(); }, 300);
    }
   

    function watchPositionStop() {
        if (navigator.geolocation) {
            navigator.geolocation.clearWatch(watchGeoMarkerProcess);
        }
        else { alert("Geolocation is not supported by this browser."); }
    }

    function watchPosition() { 
        var myOptions = {
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
        };
        //to create only once! and not inside the changePostion() function!
        map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
        
        for (var i = 0; i < CRSShops.length; i++) {

            MYmarker[i] = new google.maps.Marker({
                position: { lat: parseFloat(CRSShops[i].lat), lng: parseFloat(CRSShops[i].lon) },
                map: map,
                title: CRSShops[i].title
            });
        }

        var contentStr1 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[0].title + '</div>'

        var infowindow1 = new google.maps.InfoWindow({
            content: contentStr1
        });
        google.maps.event.addListener(MYmarker[0], 'click', function () {
            infowindow1.open(map, MYmarker[0]);
        });

        var contentStr2 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[1].title + '</div>'


        var infowindow2 = new google.maps.InfoWindow({
            content: contentStr2
        });
        google.maps.event.addListener(MYmarker[1], 'click', function () {
            infowindow2.open(map, MYmarker[1]);
        });

        var contentStr3 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[2].title + '</div>'


        var infowindow3 = new google.maps.InfoWindow({
            content: contentStr3
        });
        google.maps.event.addListener(MYmarker[2], 'click', function () {
            infowindow3.open(map, MYmarker[2]);
        });

        var contentStr4 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[3].title + '</div>'


        var infowindow4 = new google.maps.InfoWindow({
            content: contentStr4
        });
        google.maps.event.addListener(MYmarker[3], 'click', function () {
            infowindow4.open(map, MYmarker[3]);
        });

        var contentStr5 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[4].title + '</div>'


        var infowindow5 = new google.maps.InfoWindow({
            content: contentStr5
        });
        google.maps.event.addListener(MYmarker[4], 'click', function () {
            infowindow5.open(map, MYmarker[4]);
        });

        var contentStr6 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[5].title + '</div>'


        var infowindow6 = new google.maps.InfoWindow({
            content: contentStr6
        });
        google.maps.event.addListener(MYmarker[5], 'click', function () {
            infowindow6.open(map, MYmarker[5]);
        });

        var contentStr7 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[6].title + '</div>'


        var infowindow7 = new google.maps.InfoWindow({
            content: contentStr7
        });
        google.maps.event.addListener(MYmarker[6], 'click', function () {
            infowindow7.open(map, MYmarker[6]);
        });

        var contentStr8 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[7].title + '</div>'


        var infowindow8 = new google.maps.InfoWindow({
            content: contentStr8
        });
        google.maps.event.addListener(MYmarker[7], 'click', function () {
            infowindow8.open(map, MYmarker[7]);
        });

        var contentStr9 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[8].title + '</div>'


        var infowindow9 = new google.maps.InfoWindow({
            content: contentStr9
        });
        google.maps.event.addListener(MYmarker[8], 'click', function () {
            infowindow9.open(map, MYmarker[8]);
        });
        var contentStr10 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[9].title + '</div>'


        var infowindow10 = new google.maps.InfoWindow({
            content: contentStr10
        });

        google.maps.event.addListener(MYmarker[9], 'click', function () {
            infowindow10.open(map, MYmarker[9]);
        });
        //SetInfoWindows(); 
        
        if (navigator.geolocation) {
            watchGeoMarkerProcess = navigator.geolocation.watchPosition(changePostion, showError);
        }
        else { alert("Geolocation is not supported by this browser."); }
    }


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        }
        else { alert("Geolocation is not supported by this browser."); }
    }

    //use in the ripple. need the var map definition inside the function!
    function showPosition(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        latlon = new google.maps.LatLng(lat, lon)
        var myOptions = {
            center: latlon,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
        };
        var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);

        var marker = new google.maps.Marker({ position: latlon, map: map, title: "You are here!" });

        for (var i = 0; i < CRSShops.length; i++) {

            MYmarker[i] = new google.maps.Marker({
                position: { lat: parseFloat(CRSShops[i].lat), lng: parseFloat(CRSShops[i].lon) },
                map: map,
                title: CRSShops[i].title
            });


        }

        var contentStr = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">You are here!</div>'

        var infowindow = new google.maps.InfoWindow({
            content: contentStr
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

        
        var contentStr1 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[0].title + '</div>'


        var infowindow1 = new google.maps.InfoWindow({
            content: contentStr1
        });
        google.maps.event.addListener(MYmarker[0], 'click', function () {
            infowindow1.open(map, MYmarker[0]);
        });

        var contentStr2 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[1].title + '</div>'


        var infowindow2 = new google.maps.InfoWindow({
            content: contentStr2
        });
        google.maps.event.addListener(MYmarker[1], 'click', function () {
            infowindow2.open(map, MYmarker[1]);
        });

        var contentStr3 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[2].title + '</div>'


        var infowindow3 = new google.maps.InfoWindow({
            content: contentStr3
        });
        google.maps.event.addListener(MYmarker[2], 'click', function () {
            infowindow3.open(map, MYmarker[2]);
        });

        var contentStr4 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[3].title + '</div>'


        var infowindow4 = new google.maps.InfoWindow({
            content: contentStr4
        });
        google.maps.event.addListener(MYmarker[3], 'click', function () {
            infowindow4.open(map, MYmarker[3]);
        });

        var contentStr5 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[4].title + '</div>'


        var infowindow5 = new google.maps.InfoWindow({
            content: contentStr5
        });
        google.maps.event.addListener(MYmarker[4], 'click', function () {
            infowindow5.open(map, MYmarker[4]);
        });

        var contentStr6 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[5].title + '</div>'


        var infowindow6 = new google.maps.InfoWindow({
            content: contentStr6
        });
        google.maps.event.addListener(MYmarker[5], 'click', function () {
            infowindow6.open(map, MYmarker[5]);
        });

        var contentStr7 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[6].title + '</div>'


        var infowindow7 = new google.maps.InfoWindow({
            content: contentStr7
        });
        google.maps.event.addListener(MYmarker[6], 'click', function () {
            infowindow7.open(map, MYmarker[6]);
        });

        var contentStr8 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[7].title + '</div>'


        var infowindow8 = new google.maps.InfoWindow({
            content: contentStr8
        });
        google.maps.event.addListener(MYmarker[7], 'click', function () {
            infowindow8.open(map, MYmarker[7]);
        });

        var contentStr9 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[8].title + '</div>'


        var infowindow9 = new google.maps.InfoWindow({
            content: contentStr9
        });
        google.maps.event.addListener(MYmarker[8], 'click', function () {
            infowindow9.open(map, MYmarker[8]);
        });
        var contentStr10 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[9].title + '</div>'


        var infowindow10 = new google.maps.InfoWindow({
            content: contentStr10
        });

        google.maps.event.addListener(MYmarker[9], 'click', function () {
            infowindow10.open(map, MYmarker[9]);
        });
        //SetInfoWindows();
       
    }

    //only to set the center and marker not to create the map obejct again and again!
    function changePostion(position) {
        if (marker != null) {
            marker.setMap(null);
        }
        var pos = new google.maps.LatLng(position.coords.latitude,
                                            position.coords.longitude);
        map.setCenter(pos);
        marker = new google.maps.Marker({ position: pos, map: map, title: "You are here!" });
        var contentStr = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">You are here!</div>'


        var infowindow = new google.maps.InfoWindow({
            content: contentStr
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
            default:
                alert("An unknown error occurred.(default)");
                break;
        }
    }

    function showLat() {
        var lat = document.getElementById("latRange").value;
        var long = document.getElementById("longRange").value;
        LatValue.innerText = lat;
        ShowPositionLatLong(lat, long);
    }

    function showLong() {
        var lat = document.getElementById("latRange").value;
        var long = document.getElementById("longRange").value;
        LongValue.innerText = long;
        ShowPositionLatLong(lat, long);
    }

   
    function showMap() { 
        directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true
        });
        latlon = new google.maps.LatLng(32.10896916880329, 34.784860610961914);
        var myOptions = {
            center: latlon, zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
        };
        map = new google.maps.Map(document.getElementById("mapholder"), myOptions);

        $.ajax({
            url: WebServiceURL + "/GetShopsJSON",
            dataType: "json",
            type: "POST", //use only POST!
            data: {},
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, exception) {
                //alert("errornir: " + JSON.stringify(jqXHR)); //all the erro…
                alert(formatErrorMessage(jqXHR, exception));
            },
            success: function (data) {
                debugger;

                if (data.d != null) {
                    var result = "";
                    CRSShops = JSON.parse(data.d); //or data["d"]
                   // alert('' + CRSShops[0].Id + '');
                    for (var i = 0; i < CRSShops.length; i++) {

                        MYmarker[i] = new google.maps.Marker({
                            position: { lat: parseFloat(CRSShops[i].lat), lng: parseFloat(CRSShops[i].lon) },
                            map: map,
                            title: CRSShops[i].title
                        });

                   
                    }

                    var contentStr1 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[0].title + '</div>'


                    var infowindow1 = new google.maps.InfoWindow({
                        content: contentStr1
                    });
                    google.maps.event.addListener(MYmarker[0], 'click', function () {
                        infowindow1.open(map, MYmarker[0]);
                    });

                    var contentStr2 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[1].title + '</div>'


                    var infowindow2 = new google.maps.InfoWindow({
                        content: contentStr2
                    });
                    google.maps.event.addListener(MYmarker[1], 'click', function () {
                        infowindow2.open(map, MYmarker[1]);
                    });

                    var contentStr3 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[2].title + '</div>'


                    var infowindow3 = new google.maps.InfoWindow({
                        content: contentStr3
                    });
                    google.maps.event.addListener(MYmarker[2], 'click', function () {
                        infowindow3.open(map, MYmarker[2]);
                    });

                    var contentStr4 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[3].title + '</div>'


                    var infowindow4 = new google.maps.InfoWindow({
                        content: contentStr4
                    });
                    google.maps.event.addListener(MYmarker[3], 'click', function () {
                        infowindow4.open(map, MYmarker[3]);
                    });

                    var contentStr5 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[4].title + '</div>'


                    var infowindow5 = new google.maps.InfoWindow({
                        content: contentStr5
                    });
                    google.maps.event.addListener(MYmarker[4], 'click', function () {
                        infowindow5.open(map, MYmarker[4]);
                    });

                    var contentStr6 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[5].title + '</div>'


                    var infowindow6 = new google.maps.InfoWindow({
                        content: contentStr6
                    });
                    google.maps.event.addListener(MYmarker[5], 'click', function () {
                        infowindow6.open(map, MYmarker[5]);
                    });

                    var contentStr7 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[6].title + '</div>'


                    var infowindow7 = new google.maps.InfoWindow({
                        content: contentStr7
                    });
                    google.maps.event.addListener(MYmarker[6], 'click', function () {
                        infowindow7.open(map, MYmarker[6]);
                    });

                    var contentStr8 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[7].title + '</div>'


                    var infowindow8 = new google.maps.InfoWindow({
                        content: contentStr8
                    });
                    google.maps.event.addListener(MYmarker[7], 'click', function () {
                        infowindow8.open(map, MYmarker[7]);
                    });

                    var contentStr9 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[8].title + '</div>'


                    var infowindow9 = new google.maps.InfoWindow({
                        content: contentStr9
                    });
                    google.maps.event.addListener(MYmarker[8], 'click', function () {
                        infowindow9.open(map, MYmarker[8]);
                    });
                    var contentStr10 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[9].title + '</div>'


                    var infowindow10 = new google.maps.InfoWindow({
                        content: contentStr10
                    });

                    google.maps.event.addListener(MYmarker[9], 'click', function () {
                        infowindow10.open(map, MYmarker[9]);
                    });
                    //SetInfoWindows();

                    geocoder = new google.maps.Geocoder();
                    directionsDisplay.setMap(map);

                    debugger;

                }
                else {
                    alert('Load Failed!');
                }
            }

        });

    }

  
    function ShowPositionLatLong(lat, lon) {
        latlon = new google.maps.LatLng(lat, lon);
        map.setCenter(latlon);
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }

    $('#shopl').change(function () {
        if ($(this).find('option:selected').attr("value") == "Shops")
            showMap();
        else
        {
            latlon = new google.maps.LatLng(parseFloat(CRSShops[$(this).find('option:selected').attr("value")].lat), parseFloat(CRSShops[$(this).find('option:selected').attr("value")].lon))
            var myOptions = {
                center: latlon,
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
            };
            var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
            var marker = new google.maps.Marker({
                position: latlon,
                map: map,
                title: CRSShops[$(this).find('option:selected').attr("value")].title
            });
            var contentStr = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[$(this).find('option:selected').attr("value")].title + '</div>'

            var infowindow = new google.maps.InfoWindow({
                content: contentStr
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
   
        }

    });
    

    function formatErrorMessage(jqXHR, exception) {
        if (jqXHR.status === 0) {
            return ('Not connected.\nPleaseverify your network connection.');
        } else if (jqXHR.status == 404) {
            return ('The requested page not found. [404]');
        } else if (jqXHR.status == 500) {
            return ('Internal Server Error [500].');
        } else if (exception === 'parsererror') {
            return ('Requested JSON parse failed.');
        } else if (exception === 'timeout') {
            return ('Time out error.');
        } else if (exception === 'abort') {
            return ('Ajax request aborted.');
        } else {
            return ('Uncaught Error.\n' + jqXHR.responseText);
        }
    }


    function SetInfoWindows() {

        var contentStr1 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[0].title + '</div>'


        var infowindow1 = new google.maps.InfoWindow({
            content: contentStr1
        });
        google.maps.event.addListener(MYmarker[0], 'click', function () {
            infowindow1.open(map, MYmarker[0]);
        });

        var contentStr2 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[1].title + '</div>'


        var infowindow2 = new google.maps.InfoWindow({
            content: contentStr2
        });
        google.maps.event.addListener(MYmarker[1], 'click', function () {
            infowindow2.open(map, MYmarker[1]);
        });

        var contentStr3 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[2].title + '</div>'


        var infowindow3 = new google.maps.InfoWindow({
            content: contentStr3
        });
        google.maps.event.addListener(MYmarker[2], 'click', function () {
            infowindow3.open(map, MYmarker[2]);
        });

        var contentStr4 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[3].title + '</div>'


        var infowindow4 = new google.maps.InfoWindow({
            content: contentStr4
        });
        google.maps.event.addListener(MYmarker[3], 'click', function () {
            infowindow4.open(map, MYmarker[3]);
        });

        var contentStr5 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[4].title + '</div>'


        var infowindow5 = new google.maps.InfoWindow({
            content: contentStr5
        });
        google.maps.event.addListener(MYmarker[4], 'click', function () {
            infowindow5.open(map, MYmarker[4]);
        });

        var contentStr6 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[5].title + '</div>'


        var infowindow6 = new google.maps.InfoWindow({
            content: contentStr6
        });
        google.maps.event.addListener(MYmarker[5], 'click', function () {
            infowindow6.open(map, MYmarker[5]);
        });

        var contentStr7 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[6].title + '</div>'


        var infowindow7 = new google.maps.InfoWindow({
            content: contentStr7
        });
        google.maps.event.addListener(MYmarker[6], 'click', function () {
            infowindow7.open(map, MYmarker[6]);
        });

        var contentStr8 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[7].title + '</div>'


        var infowindow8 = new google.maps.InfoWindow({
            content: contentStr8
        });
        google.maps.event.addListener(MYmarker[7], 'click', function () {
            infowindow8.open(map, MYmarker[7]);
        });

        var contentStr9 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[8].title + '</div>'


        var infowindow9 = new google.maps.InfoWindow({
            content: contentStr9
        });
        google.maps.event.addListener(MYmarker[8], 'click', function () {
            infowindow9.open(map, MYmarker[8]);
        });
        var contentStr10 = '<div id="MarkerDiv" style="color:deeppink;font-family:david;font-weight:bold;width:120px;">' + CRSShops[9].title + '</div>'


        var infowindow10 = new google.maps.InfoWindow({
            content: contentStr10
        });

        google.maps.event.addListener(MYmarker[9], 'click', function () {
            infowindow10.open(map, MYmarker[9]);
        });
    }
}