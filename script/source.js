function showMonth(div) { //console.log(div.innerHTML);
    console.log(div.children[0].innerText);
    this.monthName = div.children[0].innerText;
    sessionStorage['counter'] = div.children[0].innerText;
    window.location = "./monthView.html";
}


function getMonthSize(year, month) {
    console.log("---------year month" + year + " :" + month);
    var days = 32 - new Date(year, month, 32).getDate();
    console.log("days--------------" + days);
    var firstDay = new Date(year, month, 1).toString().substring(0, 3);
    return [days, firstDay];
}

function buildCalender(currentMonth) {
    console.log("current month---------" + currentMonth);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthIndex = months.indexOf(currentMonth);
    console.log("month index--------" + monthIndex + "  " + currentMonth);
    var info = getMonthSize(2015, monthIndex);
    console.log(info);
    var i = 0;
    var body = document.getElementsByTagName('body')[0];
    var days = info[0];
    var firstDay = info[1];
    console.log("first day is " + firstDay);
    var dayIndex = daysList.indexOf(firstDay);


    for (i; i < days; i++) {
        var squareBlock = document.createElement('div');
        squareBlock.className = "date-block";
        var dateBlock = document.createElement('div');
        dateBlock.className = "month-name";
        var dateContent = document.createTextNode(i + 1);
        var dayNum = dayIndex % 7;
        var dayName = document.createTextNode(daysList[dayNum]);
        dayIndex++;
        dateBlock.appendChild(dateContent);
        squareBlock.appendChild(dateBlock);
        squareBlock.appendChild(dayName);
        body.appendChild(squareBlock);

    }
    selectWallpaper(/*currentMonth*/'Jan', body);

}


function selectWallpaper(month, body) {

    switch (month) {

        case 'Jan':
            body.style.backgroundImage = "url(./resources/images/jan.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        /*case 'Feb':
            body.style.backgroundImage = "url(./resources/images/feb.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        case 'Mar':
            body.style.backgroundImage = "url(./resources/images/mar.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        case 'Apr':
            body.style.backgroundImage = "url(./resources/images/apr.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        case 'May':
            body.style.backgroundImage = "url(./resources/images/may.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        case 'Jun':
            body.style.backgroundImage = "url(./resources/images/jun.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        case 'Jul':
            body.style.backgroundImage = "url(./resources/images/jul.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        case 'Aug':
            body.style.backgroundImage = "url(./resources/images/aug.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        case 'Sep':
            body.style.backgroundImage = "url(./resources/images/sep.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        case 'Oct':
            body.style.backgroundImage = "url(./resources/images/oct.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        case 'Nov':
            body.style.backgroundImage = "url(./resources/images/nov.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
        case 'Dec':
            body.style.backgroundImage = "url(./resources/images/dec.jpg)";
            body.style.backgroundRepeat = "no-repeat";
            break;
*/

    }
}
