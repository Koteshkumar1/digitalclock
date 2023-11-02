
function digiclk(){
    var date=new Date();
var hh=date.getHours();
var mm=date.getMinutes();
var ss=date.getSeconds();
var dt=date.getDate();
var mo=date.getMonth();
var yy=date.getFullYear();
var day=date.getDay();
            var am_pm="AM";
            if(mm>=0&&mm<=9){
                mm=`0${mm}`
            }
            if(ss>=0&&ss<=9){
                ss=`0${ss}`
            }
            if(hh>=12){
                am_pm="PM"
                if(hh>12){
                    hh-=12;
                }
            }
            if(hh==0){
                hh=12;
            }
            if(mo==0){
                mo="JAN"
            }
            else if(mo==1){
                mo="FEB"
            }
            else if(mo==2){
                mo="MAR"
            }
            else if(mo==3){
                mo="APL"
            }
            else if(mo==4){
                mo="MAY"
            }
            else if(mo==5){
                mo="JUN"
            }
            else if(mo==6){
                mo="JUL"
            }
            else if(mo==7){
                mo="AUG"
            }
            else if(mo==8){
                mo="SEP"
            }
            else if(mo==9){
                mo="OCT"
            }
            else if(mo==10){
                mo="NOV"
            }
            else{
                mo="DEC"
            }
            switch(day){
                case 0: day="Sunday"
                document.body.style.backgroundImage="url(./Photos/sun.jpeg)"
                break;
                case 1: day="Monday"
                document.body.style.backgroundImage="url(./Photos/mon.jpeg)"
                break;
                case 2: day="Tuesday"
                document.body.style.backgroundImage="url(./Photos/tue.jpeg)"
                break;
                case 3: day="Wednesday"
                document.body.style.backgroundImage="url(./Photos/wed.jpeg)"
                break;
                case 4: day="Thursday"
                document.body.style.backgroundImage="url(./Photos/thu.jpeg)"
                break;
                case 5: day="Friday"
                document.body.style.backgroundImage="url(./Photos/fri.jpeg)"
                break;
                case 6: day="Satarday"
                document.body.style.backgroundImage="url(./Photos/sat.jpeg)"
                break;
            }
            document.getElementById("Time").innerHTML=`${hh}:${mm} ${am_pm}`
            document.getElementById("Date").innerHTML=`${dt}/${mo}/${yy}`
            document.getElementById("Day").innerHTML=day
            document.getElementById("Sec").innerHTML=ss
            setTimeout(digiclk,1000);
}
digiclk()
