$(document).on("pageinit", "#ConfirmPage", function (event) {
    wireEventsConfirmPage();
});


function wireEventsConfirmPage() {
    $(document).on("pagehide", "#ConfirmPage", function () {
        location.reload(true);
        window.location.href = "#WelcomePage";

    });
}