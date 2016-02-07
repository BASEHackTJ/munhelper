function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;
    console.log("check1");
    console.log("elementName = " + elementName);
    element = document.getElementById( elementName );
    console.log("element = " + element);
    console.log("check2");
    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "countdown's over!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
             element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}
