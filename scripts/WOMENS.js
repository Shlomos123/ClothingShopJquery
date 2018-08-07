

var WomensNewItems = null;
var WomensHotItems = null;

$(document).on("pagecreate", "#WOMENSPage", function () {
    wireEventsWOMENSPage();


});



function wireEventsWOMENSPage() {
    debugger;


   
   


    $.ajax({
        url: WebServiceURL + "/GetWomensNewItemsJSON",
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
                var stam = JSON.parse(data.d);
                WomensNewItems = JSON.parse(data.d); //or data["d"]

                for (var i = 0; i < WomensNewItems.length; i++) {

                    //          alert(WomensNewItems[i].Name);
                    //        $('#WNIS').append('<li id=item"' + WomensNewItems[i].Id + '"><a href="#ItemPage" style="background-color:lightyellow"><img src=http://proj.ruppin.ac.il/cegroup8/prod/WOMENS items/"' + WomensNewItems.ImagePath + '" /><span id="mit1">Flecked Double Breasted Smart Blazer</span><br /> Price:<span id="mit1p">40.00</span>$</a></li>');
                    $('#WNIS').append('<li itemType="WomensNewItems" itemTypeId=' + WomensNewItems[i].Id + '  id="' + i + '"><a href="#ItemPage" style="background-color:lightyellow"><img src="http://proj.ruppin.ac.il/cegroup8/prod/WOMENS/' + WomensNewItems[i].ImagePath + '" /><span>' + WomensNewItems[i].Name + '</span><br /> Price:<span>' + WomensNewItems[i].Price + '</span>$</a></li>');
                    //    $('#WNIS').append('<li itemType="WomensNewItems" itemTypeId="0"  id="s"><a href="#ItemPage" style="background-color:lightyellow"><img src="MENS items/Flecked Double Breasted Smart Blazer.jpg" /><span id="mit1">' + WomensNewItems[i].Name + '</span><br /> Price:<span id="mit1p">40.00</span>$</a></li>');
                }
                //   $('#WNIS').append('<li itemType="WomensNewItems" itemTypeId="0"  id="s"><a href="#ItemPage" style="background-color:lightyellow"><img src="MENS items/Flecked Double Breasted Smart Blazer.jpg" /><span id="mit1">Flecked Double Breasted Smart Blazer</span><br /> Price:<span id="mit1p">40.00</span>$</a></li>');
                $('#WNIS').listview('refresh');

                debugger;

                $('[itemType="WomensNewItems"]').click(function () {
                    // alert($('[itemType="WomensNewItems"]').attr('itemTypeId'));
                    // alert(WomensNewItems[$('[itemType="WomensNewItems"]').attr('itemTypeId')].Name);
                    // alert(WomensNewItems[$('[itemType="WomensNewItems"]').attr('itemTypeId')].ImagePath);
                    $('#TotalPrice').text('0');
                    $('#Amount').text('0');
                    Price = 0;
                    Amount = 0;
                    if (WomensNewItems[$(this).attr('id')].Discount == "" || WomensNewItems[$(this).attr('id')].Discount == 0)
                    {
                        $('#itn').text('' + WomensNewItems[$(this).attr('id')].Name + '');
                        $('#pic').html('');                    
                        $('#pic').prepend('<p class="item"><span class="notify-badge">NEW</span><a href="#photo" data-rel="dialog"><img src="http://proj.ruppin.ac.il/cegroup8/prod/WOMENS/' + WomensNewItems[$(this).attr('id')].ImagePath + '" /></a></p>');
                        $('#photoPlaceHolder').attr('src', 'http://proj.ruppin.ac.il/cegroup8/prod/WOMENS/' + WomensNewItems[$(this).attr('id')].ImagePath + '');
                        $('#pri').text('' + WomensNewItems[$(this).attr('id')].Price + '$');
                    }
                    else {
                        var BDPrice;
                        BDPrice = parseInt((parseFloat(WomensNewItems[$(this).attr('id')].Price) * 100) / (100 - (parseInt(WomensNewItems[$(this).attr('id')].Discount))));
                        $('#itn').text('' + WomensNewItems[$(this).attr('id')].Name + '');
                        $('#pic').html('');
                        $('#pic').prepend('<p class="item"><span class="notify-badge">' + WomensNewItems[$(this).attr('id')].Discount + '%' + " " + 'OFF</span><a href="#photo" data-rel="dialog"><img src="http://proj.ruppin.ac.il/cegroup8/prod/WOMENS/' + WomensNewItems[$(this).attr('id')].ImagePath + '"/></a></p>');
                        $('#photoPlaceHolder').attr('src', 'http://proj.ruppin.ac.il/cegroup8/prod/WOMENS/' + WomensNewItems[$(this).attr('id')].ImagePath + '');
                        $('#pri').html('<span>' + WomensNewItems[$(this).attr('id')].Price + '<span>$' + "," + '<span style="text-decoration:line-through">' + BDPrice + '$</span>');

                    }
                });

            }
            else {
                alert('Load Failed!');
            }



        }


    });

    $.ajax({
        url: WebServiceURL + "/GetWomensHotItemsJSON",
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
                var stam = JSON.parse(data.d);
                WomensHotItems = JSON.parse(data.d); //or data["d"]

                for (var i = 0; i < WomensHotItems.length; i++) {


                    $('#WHIS').append('<li itemType="WomensHotItems" itemTypeId=' + WomensHotItems[i].Id + '  id="' + i + '"><a href="#ItemPage" style="background-color:lightyellow"><img src="http://proj.ruppin.ac.il/cegroup8/prod/WOMENS/' + WomensHotItems[i].ImagePath + '" /><span>' + WomensHotItems[i].Name + '</span><br /> Price:<span>' + WomensHotItems[i].Price + '</span>$</a></li>');

                }

                $('#WHIS').listview('refresh');

                debugger;

                $('[itemType="WomensHotItems"]').click(function () {
                    $('#TotalPrice').text('0');
                    $('#Amount').text('0');
                    Price = 0;
                    Amount = 0;
                    if (WomensHotItems[$(this).attr('id')].Discount == "" || WomensHotItems[$(this).attr('id')].Discount == 0)
                    {
                        $('#itn').text('' + WomensHotItems[$(this).attr('id')].Name + '');
                        $('#pic').html('');        
                        $('#pic').prepend('<p class="item"><span class="notify-badge">SALE</span><a href="#photo" data-rel="dialog"><img src="http://proj.ruppin.ac.il/cegroup8/prod/WOMENS/' + WomensHotItems[$(this).attr('id')].ImagePath + '" /></a></p>');
                        $('#photoPlaceHolder').attr('src', 'http://proj.ruppin.ac.il/cegroup8/prod/WOMENS/' + WomensHotItems[$(this).attr('id')].ImagePath + '');
                        $('#pri').text('' + WomensHotItems[$(this).attr('id')].Price + '$');
                    }
                    else
                    {
                        var BDPrice;
                        BDPrice = parseInt((parseFloat(WomensHotItems[$(this).attr('id')].Price) * 100) / (100 - (parseInt(WomensHotItems[$(this).attr('id')].Discount))));
                        $('#itn').text('' + WomensHotItems[$(this).attr('id')].Name + '');
                        $('#pic').html(''); 
                        $('#pic').prepend('<p class="item"><span class="notify-badge">' + WomensHotItems[$(this).attr('id')].Discount + '%' + " " + 'OFF</span><a href="#photo" data-rel="dialog"><img src="http://proj.ruppin.ac.il/cegroup8/prod/WOMENS/' + WomensHotItems[$(this).attr('id')].ImagePath + '"/></a></p>');
                        $('#photoPlaceHolder').attr('src', 'http://proj.ruppin.ac.il/cegroup8/prod/WOMENS/' + WomensHotItems[$(this).attr('id')].ImagePath + '');
                        $('#pri').html('<span>' + WomensHotItems[$(this).attr('id')].Price + '<span>$' + "," + '<span style="text-decoration:line-through">' + BDPrice + '$</span>');

                    }
                });

            }
            else {
                alert('Load Failed!');
            }



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
   
   
}


