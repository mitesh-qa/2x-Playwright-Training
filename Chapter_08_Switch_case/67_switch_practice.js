let day = "Tuesday";

switch(day.toLowerCase()){
case "monday" :
case "tuesday" :
case "wednesday" :
case "thursday" :
case "friday" :
    console.log("Working day");
    break;
case "saturday" :
case "sunday" :
    console.log("Holiday!");
    break;
default :
    console.log("Invalid Day");    
}
