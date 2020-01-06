$(document).ready(function () {
    $('.calendar').each(function (calendar) {
        alert('The calendar ' + $(calendar).attr('id') + ' has ' + $(calendar).find('.content').find('.item').length + ' items.');
        //$(calendar).find('.content .item').click(function (day) {
        //    alert('Clicked calendar day');
        //    $(calendar).find('.calendarAction').prop('display', 'block');
        //});
    });
});