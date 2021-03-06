//User inputs the number of options they have to choose from and will be 
//given that number of input fields.

    $("#input-option-count").click(function(){
    //gets the number of desired options
     let optionCount= $("#option-count").val();
        //Loop the number of options and create that number of input fields
        for (let i=0; i<optionCount;i++){
            $("#choices-input").append("<input id='option-"+i+"' class='input-fields form-control' type='text' placeholder='Enter choice' val=''>"); 
        }
        //Hide opening screen
        $("#content-wrapper-intro").hide();
        //Show choice entry screen
        $("#content-wrapper-input").fadeIn(1750);
      return false;     
    });
   
    //Randomly choose from input options
    $("#make-choice").click(function(){
        //store choices in an array
        let choiceArr=[];
        //number of choices
        let optionCount=($("#option-count").val());
        //iterate choices and add to array
        for (let i=0; i<optionCount;i++){
            let id1="#option-";
            let idNum=i;
            let id=id1.concat(idNum);
            let choice=$(id).val();
            choiceArr.push(choice);
        }

        //select random number
        let resultNum = Math.floor(Math.random()*optionCount);
        //use random number to make choice from the option array
        let result = choiceArr[resultNum];
        //Display the result
        $("#result").text(result);
        $("#result").hide("fast");
        $("#reload").hide("fast");
        $("#content-wrapper-input").hide();
        $("#result-content-wrapper").show();
        $("#result").fadeIn(2000);
        $("#reload").fadeIn(3000);
        return false;
    });
    //Clear and start over
    $("#reload").click(function(){
        location.reload();
    })

