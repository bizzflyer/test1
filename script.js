var texts = ["HOUSEHOLD STORAGE", "BUSINESS STORAGE"];
var index = 0;
var container = document.getElementById("textContainer");

function flipText() {
    container.innerHTML = "<span>" + texts[index] + "</span>";

    index = (index + 1) % texts.length;
    setTimeout(flipText, 2000);
}

flipText();
$(function () {

    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day;



    $('#shiftingdate').attr('min', maxDate);
});

