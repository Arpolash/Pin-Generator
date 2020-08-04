        //generate random number
        document.getElementById('generate-btn').addEventListener('click',function(){
            function generateRandomNumber(min,max){
                return Math.floor(Math.random() * (max-min) + min);
              
            };
            document.getElementById('generate-number').value = generateRandomNumber(1000,9999);  
            document.getElementById('input').value = ''; 
            colorAndFont("30px","white");
            notify();
          })
  
          //submit button js-section start
          document.getElementById('submit-btn').addEventListener('click',function(){
              const confirmationPin = document.getElementById('generate-number').value;
              const confirmInput = document.getElementById('input').value;
              
                  if(confirmationPin.length == 4){
                      if(confirmationPin == confirmInput){
                          document.getElementById('positive-notify').style.display = 'block';
                      }
                      else{
                          document.getElementById('negative-notify').style.display = 'block';
                          document.getElementById('input').value = 'Enter correct number';
                          colorAndFont("20px","red");
                          
                      }
                  }
                  if(confirmationPin == ""){
                      document.getElementById('input').value = 'Click generate pin button';
                      document.getElementById('negative-notify').style.display = 'none';
                      colorAndFont("20px","red");
                  } 
        })
     //submit button js-section end
  
     //back-button
          function back(){
              var value = document.getElementById('input').value;
              document.getElementById('input').value = value.substr(0,value.length -1);
              colorAndFont("30px","white");
              notify();   
          }
  
      //clear button
          document.getElementById('clear').addEventListener('click',function(){
            colorAndFont("30px","white");
              notify();
          })
  
  
          //notify js-section
          function notify(){
              document.getElementById('positive-notify').style.display = 'none';
                  document.getElementById('negative-notify').style.display = 'none';
          }
          //font
          function colorAndFont (size,color) {
            document.getElementById('input').style.fontSize = size;
            document.getElementById('input').style.color = color;
          }
