const input_date = document.getElementById("ageDate");
const calculateBtn = document.getElementById("Calculate");

const displayBox = document.querySelector(".display");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const today_date = document.getElementById("todaysDate");

function calculateAge(){

    if(input_date.value != ''){

        let inputDate = new Date(input_date.value);
        let todayDate = new Date();

        let d1 = inputDate.getDate();
        let m1 = inputDate.getMonth()+1;
        let y1 = inputDate.getFullYear();
        
        let d2 = todayDate.getDate();
        let m2 = todayDate.getMonth()+1;
        let y2 = todayDate.getFullYear();

        let d3, m3, y3 ;

        y3 = y2- y1 ;

        if(m2 >= m1){
            m3 = m2-m1;
        }
        else{
            y3--;
            m3 = 12+m2-m1;
        }

        if(d2>=d1){
            d3 = d2-d1;
            // console.log(d2,d1);
        }
        else{
            m3--;
            d3 = (new Date(y1,m1,0).getDate()) + d2 - d1;
        }

        if(m3 <0){
            m3=11;
            y3--;
        }
        
        //set dates
        displayBox.innerHTML = "<h2>You are</h2>"+
        "<h3><label id='years'>20</label> Years</h3>"+
        "<h3><label id='months'>09</label> Months</h3>"+
        "<h3><label id='days'>04</label> Days</h3>"+
        "<h4>old, as of <label id='todaysDate'></label></h4>" ;

        const years = document.getElementById("years");
        const months = document.getElementById("months");
        const days = document.getElementById("days");
        const today_date = document.getElementById("todaysDate");

        if(y3 < 10){
            years.innerHTML ="0"+y3;
        }
        else{
            years.innerHTML = y3;
        }

        if(m3 < 10){
            months.innerHTML = "0"+m3;
        }
        else{
            months.innerHTML = m3 ;
        }

        if(d3 < 10){
            days.innerHTML = "0"+d3;
        }
        else{
            days.innerHTML = d3 ;
        }

        today_date.innerHTML = todayDate.toDateString();
    }
}

calculateBtn.addEventListener('click',(e)=>{
    calculateAge();
});