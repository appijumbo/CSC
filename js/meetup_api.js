
(function(){    // put JS in an IIFE to keep date variables localy scoped


    
    var meetupApi =$("#meetupApi").attr("data-meetupapi"); 
    console.log("\nmeetupApi = " + meetupApi);
    
    var theMonth = document.getElementById("theMonth");
    var theDate = document.getElementById("theDate");
    var theDateIndices = document.getElementById("theDateIndices");
    var timeOfMeetup = 0;   // 1st Jan 1970 just as a blank
    
    /***********  Get time from secure meetup API   *****/
    $.ajax({
        url: meetupApi,
        method:'GET',
        dataType: 'jsonp',
        /*dataType: 'jsonp': If this line is removed this ajax always fails 'XMLHttpRequest cannot load https://api.meetup.com/Chester-Speaking-Club..... Origin http://localhost:4000 is not allowed by Access-Control-Allow-Origin' error.
        So use the JSONP (JSON Padding) interface. It allows you to make external domain requests without proxy servers or fancy header stuff. http://usejquery.com/blog/jquery-cross-domain-ajax-guide */
        success: function(meetupData){
            console.log("** -> SUCCESS in ajax meetup_api.js   meetupData = " + meetupData);
            console.log(JSON.stringify(meetupData));
            console.log("--> " + Object.keys(meetupData));
            
            var mArray = [];
            $.each(meetupData, function(i, meetTime){
                mArray.push(meetTime);
            }
                  );
            
            timeOfMeetup = mArray[1][0].time;  
            console.log("timeOfMeetup = " + timeOfMeetup);
            
            var meetupDate = new Date(timeOfMeetup);  // convert timeOfMeetup to real date
            
            
            var dayofmonth = meetupDate.getDate();
            var month = meetupDate.getMonth();
            console.log("meetupDate = " + meetupDate);
            console.log("day of month = " + dayofmonth);
            console.log("month -> = " + month);
            
            
            theDate.innerHTML = dayofmonth;
            
            var date_indices=""; 
            
   
            if(dayofmonth<=3){
                switch (dayofmonth) {
                        
                    case 1:
                        date_indices = "st";
                        break;
                        
                    case 2:
                        date_indices = "nd";
                        break;
                        
                    case 3:
                        date_indices = "rd";
                        break;        
                }
            }
            else{ date_indices = "th";}
             
            
            theDateIndices.innerHTML = date_indices;   
            
            var monthString="";
            
            var monthEnglish = [
                    {"monthName":"January"},
                    {"monthName":"February"},
                    {"monthName":"March"},
                    {"monthName":"April"},
                    {"monthName":"May"},
                    {"monthName":"June"},
                    {"monthName":"July"},
                    {"monthName":"August"},
                    {"monthName":"September"},
                    {"monthName":"October"},
                    {"monthName":"November"},
                    {"monthName":"December"}
                ];
            
            
            
            monthString = monthEnglish[month].monthName;
         
            console.log("monthString = " + monthString);
            
            theMonth.innerHTML = monthString;
            
        },
        
        error: function(){
            console.log("** -> ERROR in ajax meetup_api.js\n");
        }
    });

}());
