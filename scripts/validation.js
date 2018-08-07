///  <p >                 
//<span class="notify-badge">NEW</span>
//<img src="pics/home.jpg" style="height:365px;width:328px;margin-top:1px;" />           
//</p>

$(document).ready(function () {
    jQuery("#fname").validate({
        errorElement: 'div',
        rules: {
            // RULES //
        },
        messages: {
            // MESSAGES //
        }
    });
});

$(document).ready(function () {
    //jQuery code goes here

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

    $("#orderBtn").click(function (event) {
        var form_data = $("#details").serializeArray();
        var error_free = false;
        for (var input in form_data) {
            var element = $("#details_" + form_data[input]['name']);
            var valid = element.hasClass("valid");
            var error_element = $("span", element.parent());
            if (!valid) { error_element.removeClass("error").addClass("error_show"); error_free = false; }
            else { error_element.removeClass("error_show").addClass("error"); }
        }
        if (!error_free) {
            event.preventDefault();
        }
        else {
            alert('No errors: Form will be submitted');
            $.mobile.changePage("#ConfirmPage", { role: "dialog" });
        }
    });
});


