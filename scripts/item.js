$(document).on("pagecreate", "#ItemPage", function (event) {
    wireEventsItemPage();
});


var Amount = 0;
var Price = 0;
var str = "";
var TotalPrice = 0;
function wireEventsItemPage() {
    $('#Add').on('click', function () {
        Amount++;
        $('#Amount').text(Amount);
        calculatePrice();
    });
    $('#Remove').on('click', function () {
        if (Amount > 0) {
            Amount--;
        }
        $('#Amount').text(Amount);
        calculatePrice();
    });
    $('#backBtn').on('tap', function () {
        $('#TotalPrice').text('0');
        $('#Amount').text('0');
        Price = 0;
        Amount = 0;
    });
    $('#addBtn').on('tap', function () {
        if (Amount > 0) {
            str += $('#Amount').text() + " " + $('#itn').text() + ",";
            TotalPrice += parseInt($('#TotalPrice').text());
            alert('Successfully added to cart!, redirected to previous page');
            $("#addBtn").attr("data-rel", "back");
        }
        else
        {
            alert('No Items Selected');
            $("#addBtn").attr("data-rel", "");
        }
        $('#TotalPrice').text('0');
        $('#Amount').text('0');
        Price = 0;
        Amount = 0;
        $('#Itl').text(str);
        $('#tp').text(TotalPrice);
    });
    $('#payBtn').on('tap', function () {
        if (Amount > 0) {
            str += $('#Amount').text() + " " + $('#itn').text() + ",";
            TotalPrice += parseInt($('#TotalPrice').text());
        }
        $('#TotalPrice').text('0');
        $('#Amount').text('0');
        Price = 0;
        Amount = 0;
        $('#Itl').text(str);
        $('#tp').text(TotalPrice);


    });
   

}

function calculatePrice() {
    var p = parseInt($('#pri').text());
    Price = p * Amount;
    $('#TotalPrice').text(Price);
}