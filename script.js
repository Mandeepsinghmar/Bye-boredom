fetch('https://www.boredapi.com/api/activity/')
  .then(response => response.json())
  .then(data => {
 
     document.getElementById("activity").innerHTML = data.activity
     document.getElementById("type").innerHTML = data.type
     document.getElementById("participants").innerHTML = data.participants
  
    } );
