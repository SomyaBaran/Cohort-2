function dateMethods(){
    const currentDate = new Date();
    console.log("currentDate:", currentDate);

    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1);
    console.log("Year:", currentDate.getFullYear());
    console.log("Hour:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Second:", currentDate.getSeconds());
}

dateMethods();


//epoch Timestamp
function calculateSum(){
    let a = 0;
    for(let i = 0; i < 10000; i++){
        a = a + i
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);



