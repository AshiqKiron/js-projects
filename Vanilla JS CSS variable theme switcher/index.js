document.body.onload = ()=>{
  
    const redBtn = document.querySelector('#toggle-red');
    const blueBtn = document.querySelector('#toggle-blue');
    const greenBtn = document.querySelector('#toggle-green');
    
    redBtn.addEventListener('click',(e)=>{
   
      console.log("red");
      document.documentElement.style.setProperty('--main-hue', 360);
   })
    
  blueBtn.addEventListener('click',(e)=>{
      document.documentElement.style.setProperty('--main-hue', 240);
    })
    
    greenBtn.addEventListener('click',(e)=>{
      document.documentElement.style.setProperty('--main-hue', 120);
    })  
  }