
function fun()
{
    let timeZone=new Date()

    let day=timeZone.getDay()
    switch(day)
    {
        case 0:day='SUNDAY'
            break
        case 1:day='MONDAY'
        break
        case 2:day='TUESDAY'
        break
        case 3:day='WEDNESDAY'
        break
        case 4:day='THURSDAY'
        break
        case 5:day='FRIDAY'
        break
        case 6:day='SATURDAY'
        break
    }

    document.getElementById("b1").innerHTML=day


    let date=timeZone.getDate()
    let month=timeZone.getMonth()
    let year=timeZone.getFullYear()

    switch(month)
    {
        case 0:month='Jan'
        break
        case 1:month='Feb'
        break
        case 2:month='Mar'
        break
        case 3:month='Apr'
        break
        case 4:month='May'
        break
        case 5:month='June'
        break
        case 6:month='July'
        break
        case 7:month='Aug'
        break
        case 8:month='Sep'
        break
        case 9:month='Oct'
        break
        case 10:month='Nov'
        break
        case 11:month='Dec'
        break

    }
    let x=date+"-"+month+"-"+year
    document.getElementById("b2").innerHTML=x


    let hours=timeZone.getHours()
    let mins=timeZone.getMinutes()
    let secs=timeZone.getSeconds()
    let ampm=""
    if(hours>=12)
    {
        ampm="PM"
    }
    else
    {
        ampm="AM"
    }
    let z=hours+":"+mins+":"+secs+" "+ampm 
    document.getElementById("b3").innerHTML=z

    setTimeout(function(){fun(),1000})

    if(day=='TUESDAY')
    {
        document.getElementById("a").style.backgroundColor="yellow"
        document.getElementById("bd").style.backgroundImage="url('a1.png')"
       
    }
    

 
}
    
