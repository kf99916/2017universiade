$(document).ready(function () {
    var nowDate = new Date().getDate();

    $('#accordion #' + nowDate).addClass('active');
    $('#accordion #collapse' + nowDate).addClass('show');
});