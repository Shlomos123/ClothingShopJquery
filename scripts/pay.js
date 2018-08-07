

function SendOrder() {



    var Fname = $('#fname').val();
    var Lname = $('#lname').val();
    var Pnum = $('#phone').val();
    var Snum = $('#street').val();
    var Cit = $('#city').val();
    var Zi = $('#zip').val();
    var Eml = $('#email').val();
    var cct = $("#cct").val();
    var ccn = $("#ccn").val();
    var io = $("#Itl").html();
    var ptp = $("#tp").html();


    var Parameter =
        {
            FirstName: Fname,
            LastName: Lname,
            Phone: Pnum,
            Street: Snum,
            City: Cit,
            Zip: Zi,
            Email: Eml,
            CreditCardType: cct,
            CreditCardNumber: ccn,
            ItemsOrdered: io,
            PriceToPay: ptp
        };



    $.ajax({
        url: WebServiceURL + "/InsertOrder",
        dataType: "json",
        type: "POST", //use only POST!
        //data: "{'userID':"+ uId+ " }", //parameter to send
        data: JSON.stringify(Parameter),
        contentType: "application/json; charset=utf-8",
        error: function (jqXHR, exception) {
            //alert("errornir: " + JSON.stringify(jqXHR)); //all the erro…
            alert(formatErrorMessage(jqXHR, exception));
        },
        success: function (data) {
            u = JSON.parse(data.d); //or data["d"]
            if (u)
                $.mobile.changePage("#ConfirmPage", { role: "dialog" });
            else
                alert('Validation Failed');
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

$.validator.setDefaults({
    submitHandler: function () {
        if (TotalPrice != 0 && str != "")
            SendOrder();
        else
            alert('No Items Selected');
    }
});

$().ready(function () {

    // validate signup form on keyup and submit
    $("#signupForm").validate({
        rules: {
            fname: "required",
            lname: "required",
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10,

            },
            street: "required",

            city: "required",
            zip: "required",
            email: {
                required: true,
                email: true
            },
            ccn: {
                required: true,
                number: true,
                minlength: 16,
                maxlength: 16
            },
        },
        messages: {
            fname: "Please enter your firstname",
            lname: "Please enter your lastname",
            phone: {
                required: "Please enter a  valid phone number",
                number: "Please enter numbers Only",
                minlength: "Your phone must consist 10 digits"
            },
            street: "Please provide a street",


            city: "Please provide a city",
            zip: "Please enter your zipcode",

            email: "Please enter a valid email address",
            ccn: {
                required: "Please enter a valid credit card number",
                number:"Please enter numbers Only",
                minlength: "Your credit card number must consist 16 digits"
            },
        }
    });
});


$(document).on('pagecreate', '#PayPage', function () {
    wireEventsPayPage();
});


function wireEventsPayPage() {

    $('#fname').on('input', function () {
        var input = $(this);
        var is_name = input.val();
        if (is_name) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

    $('#lname').on('input', function () {
        var input = $(this);
        var is_name = input.val();
        if (is_name) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });


    $('#phone').on('input', function () {
        var input = $(this);
        var re = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
        var is_phone = re.test(input.val());
        if (is_phone) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

    $('#street').on('input', function () {
        var input = $(this);
        var is_name = input.val();
        if (is_name) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

    $('#city').on('input', function () {
        var input = $(this);
        var is_name = input.val();
        if (is_name) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

    $('#zip').on('input', function () {
        var input = $(this);
        var is_name = input.val();
        if (is_name) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

    $('#email').on('input', function () {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });

    $('#ccn').on('input', function () {
        var input = $(this);
        var re = /^\d{16}$/;
        var is_ccn = re.test(input.val());
        if (is_ccn) { input.removeClass("invalid").addClass("valid"); }
        else { input.removeClass("valid").addClass("invalid"); }
    });




}