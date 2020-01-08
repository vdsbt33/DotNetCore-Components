$(document).ready(function () {
    $(window).click(function (elem) {
        if (!$(elem.target).hasClass('calendarAction'))
            closeCalendarDetails();
    });

    $('.calendar').each(function (id, calendarElem) {
        //alert('The calendar ' + $(this).attr('id') + ' has ' + $(this).find('.content').find('.item').length + ' items.');
        $(this).find('.content .item').click(function () {
            //alert('Clicked day ' + $(this).text().trim(' '));
            var action = $(calendarElem).find('.calendarAction');
            $(action).css('top', $(this).prop('offsetTop') - 48);
            $(action).css('left', $(this).prop('offsetLeft') - 40);
            action.fadeIn(100);
        });
    });
});


function closeCalendarDetails() {
    $('.calendarAction').each(function () {
        $(this).fadeOut(200);
    });
}