/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=304f412012dd03e1ad934e675bceacfd&units=metric';

document.getElementById('generate').addEventListener('click', function(){
    let feelings = document.getElementById('feelings').value;
    let newZipCode = document.getElementById('zip').value;
    let wholeURL = baseURL+newZipCode+apiKey;
    getTemp(wholeURL)
    .then(function(data){

        console.log(data)
        postData('/newTemp', {date:newDate,temp:data.main.temp, feelings:feelings})

        updateUI('/all')
    })
})

const postData = async(url='', data = {})=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error){
        console.log("error",error);
    }

}

const getTemp = async (url) =>{
    const res = await fetch(url)
    try {
        const data  = await res.json();
        console.log(data)
        return data;
    } catch(error){
        console.log("Error", error);
    }
}

const updateUI = async(url)=>{
    const res = await fetch(url)
    try{
        const allData = await res.json()
        console.log(allData)
        document.getElementById('date').innerHTML=allData.date
        document.getElementById('temp').innerHTML= allData.temp
        document.getElementById('content').innerHTML=allData.feelings
    } catch(error){
        console.log("error",error);
    }
}