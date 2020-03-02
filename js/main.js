//Web app to make a decision
$(document).ready(function(){


    

//User inputs the number of options they have to choose from 
//and will be given that number of input fields

    $("#input-option-count").click(function(){
        //gets the number of desired options
     let optionCount= $("#option-count").val();
        //Loop the number of options and create that number of input fields
        for (let i=0; i<optionCount;i++){
            $("#choices-input").append("<input id='option-"+i+"' class='input fields form-control' type='text' placeholder='Enter choice' val=''>"); 
    }
        $("#content-wrapper-intro").hide();
        $("#content-wrapper-input").show();
      return false;     
    });
    
    //Array to store input choices
        let choiceArr=[];

    //Randomly choose from input options
    $("#make-choice").click(function(){
        //number of choices
        let optionCount=($("#option-count").val());
        //iterate and push to choiceArr

    });
  



//}


//call number of choices

});