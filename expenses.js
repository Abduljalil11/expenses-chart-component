window.onload = function() {
   
    let monChart = document.getElementById("mon-chart");
    let tueChart = document.getElementById("tue-chart");
    let wedChart = document.getElementById("wed-chart");
    let thuChart = document.getElementById("thu-chart");
    let friChart = document.getElementById("fri-chart");
    let satChart = document.getElementById("sat-chart");
    let sunChart = document.getElementById("sun-chart");
    
    let monDisplay = document.getElementById("mon-display");
    let tueDisplay = document.getElementById("tue-display");
    let wedDisplay = document.getElementById("wed-display");
    let thuDisplay = document.getElementById("thu-display");
    let friDisplay = document.getElementById("fri-display");
    let satDisplay = document.getElementById("sat-display");
    let sunDisplay = document.getElementById("sun-display");
    
    monChart.addEventListener("mouseover",(e)=>{
        monDisplay.style.display ="inline-block"; 
    })
    monChart.addEventListener("mouseout",(e)=>{
        monDisplay.style.display = "none";  
    })
    
    tueChart.addEventListener("mouseover",(e)=>{
        tueDisplay.style.display ="inline-block"; 
    })
    tueChart.addEventListener("mouseout",(e)=>{
        tueDisplay.style.display = "none";  
    })
    
    wedChart.addEventListener("mouseover",(e)=>{
        wedDisplay.style.display ="inline-block"; 
    })
    wedChart.addEventListener("mouseout",(e)=>{
        wedDisplay.style.display = "none";  
    })
    
    thuChart.addEventListener("mouseover",(e)=>{
        thuDisplay.style.display ="inline-block"; 
    })
    thuChart.addEventListener("mouseout",(e)=>{
        thuDisplay.style.display = "none";  
    }) 
    
    friChart.addEventListener("mouseover",(e)=>{
        friDisplay.style.display ="inline-block"; 
    })
    friChart.addEventListener("mouseout",(e)=>{
        friDisplay.style.display = "none";  
    })
    
    satChart.addEventListener("mouseover",(e)=>{
        satDisplay.style.display ="inline-block"; 
    })
    satChart.addEventListener("mouseout",(e)=>{
        satDisplay.style.display = "none";  
    })
    
    sunChart.addEventListener("mouseover",(e)=>{
        sunDisplay.style.display ="inline-block"; 
    })
    sunChart.addEventListener("mouseout",(e)=>{
        sunDisplay.style.display = "none";  
    })                    
       
    }