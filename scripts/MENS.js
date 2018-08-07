
var MensNewItems = null;
var MensHotItems = null;


$(document).on("pagecreate", "#MENSPage", function () {
    wireEventsMENSPage();




});



function wireEventsMENSPage() {
    debugger;

   
   

    $.ajax({
        url: WebServiceURL + "/GetMensNewItemsJSON",
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
                MensNewItems = JSON.parse(data.d); //or data["d"]

                for (var i = 0; i < MensNewItems.length; i++) {


                    $('#MNIS').append('<li itemType="MensNewItems" itemTypeId=' + MensNewItems[i].Id + '  id="' + i + '"><a href="#ItemPage" style="background-color:lightyellow"><img src="http://proj.ruppin.ac.il/cegroup8/prod/MENS/' + MensNewItems[i].ImagePath + '" /><span>' + MensNewItems[i].Name + '</span><br /> Price:<span>' + MensNewItems[i].Price + '</span>$</a></li>');

                }

                $('#MNIS').listview('refresh');

                debugger;

                $('[itemType="MensNewItems"]').click(function () {
                    $('#TotalPrice').text('0');
                    $('#Amount').text('0');
                    Price = 0;
                    Amount = 0;    
                    if (MensNewItems[$(this).attr('id')].Discount == "" ||  MensNewItems[$(this).attr('id')].Discount == 0)
                    {
                        $('#itn').text('' + MensNewItems[$(this).attr('id')].Name + '');
                        $('#pic').html('');
                        $('#pic').prepend('<p class="item"><span class="notify-badge">NEW</span><a href="#photo" data-rel="dialog"><img src="http://proj.ruppin.ac.il/cegroup8/prod/MENS/' + MensNewItems[$(this).attr('id')].ImagePath + '"/></a></p>');
                        $('#photoPlaceHolder').attr('src', 'http://proj.ruppin.ac.il/cegroup8/prod/MENS/' + MensNewItems[$(this).attr('id')].ImagePath + '');
                        $('#pri').text('' + MensNewItems[$(this).attr('id')].Price + '$');
                    }
                    else {
                        var BDPrice;
                        BDPrice = parseInt((parseFloat(MensNewItems[$(this).attr('id')].Price) * 100) / (100 - (parseInt(MensNewItems[$(this).attr('id')].Discount))));
                        $('#itn').text('' + MensNewItems[$(this).attr('id')].Name + '');
                        $('#pic').html('');
                        $('#pic').prepend('<p class="item"><span class="notify-badge">' + MensNewItems[$(this).attr('id')].Discount + '%' + " " + 'OFF</span><a href="#photo" data-rel="dialog"><img src="http://proj.ruppin.ac.il/cegroup8/prod/MENS/' + MensNewItems[$(this).attr('id')].ImagePath + '"/></a></p>');
                        $('#photoPlaceHolder').attr('src', 'http://proj.ruppin.ac.il/cegroup8/prod/MENS/' + MensNewItems[$(this).attr('id')].ImagePath + '');
                        $('#pri').html('<span>' + MensNewItems[$(this).attr('id')].Price + '<span>$' + "," + '<span style="text-decoration:line-through">' + BDPrice + '$</span>');
                       
                    }

                });

            }
            else {
                alert('Load Failed!');
            }



        }


    });

    $.ajax({
        url: WebServiceURL + "/GetMensHotItemsJSON",
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
                MensHotItems = JSON.parse(data.d); //or data["d"]

                for (var i = 0; i < MensHotItems.length; i++) {


                    $('#MHIS').append('<li itemType="MensHotItems" itemTypeId=' + MensHotItems[i].Id + '  id="' + i + '"><a href="#ItemPage" style="background-color:lightyellow"><img src="http://proj.ruppin.ac.il/cegroup8/prod/MENS/' + MensHotItems[i].ImagePath + '" /><span>' + MensHotItems[i].Name + '</span><br /> Price:<span>' + MensHotItems[i].Price + '</span>$</a></li>');

                }

                $('#MHIS').listview('refresh');

                debugger;

                $('[itemType="MensHotItems"]').click(function () {
                    $('#TotalPrice').text('0');
                    $('#Amount').text('0');
                    Price = 0;
                    Amount = 0;
                    if (MensHotItems[$(this).attr('id')].Discount == "" || MensHotItems[$(this).attr('id')].Discount == 0)
                    {
                        $('#itn').text('' + MensHotItems[$(this).attr('id')].Name + '');
                        $('#pic').html(''); 
                        $('#pic').prepend('<p class="item"><span class="notify-badge">SALE</span><a href="#photo" data-rel="dialog"><img src="http://proj.ruppin.ac.il/cegroup8/prod/MENS/' + MensHotItems[$(this).attr('id')].ImagePath + '"/></a></p>');
                        $('#photoPlaceHolder').attr('src', 'http://proj.ruppin.ac.il/cegroup8/prod/MENS/' + MensHotItems[$(this).attr('id')].ImagePath + '');
                        $('#pri').text('' + MensHotItems[$(this).attr('id')].Price + '$');
                    }
                    else {
                        var BDPrice;
                        BDPrice = parseInt((parseFloat(MensHotItems[$(this).attr('id')].Price) * 100) / (100 - (parseInt(MensHotItems[$(this).attr('id')].Discount))));
                        $('#itn').text('' + MensHotItems[$(this).attr('id')].Name + '');
                        $('#pic').html('');
                        $('#pic').prepend('<p class="item"><span class="notify-badge">' + MensHotItems[$(this).attr('id')].Discount + '%' + " " + 'OFF</span><a href="#photo" data-rel="dialog"><img src="http://proj.ruppin.ac.il/cegroup8/prod/MENS/' + MensHotItems[$(this).attr('id')].ImagePath + '"/></a></p>');
                        $('#photoPlaceHolder').attr('src', 'http://proj.ruppin.ac.il/cegroup8/prod/MENS/' + MensHotItems[$(this).attr('id')].ImagePath + '');
                        $('#pri').html('<span>' + MensHotItems[$(this).attr('id')].Price + '<span>$' + "," + '<span style="text-decoration:line-through">' + BDPrice + '$</span>');

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
