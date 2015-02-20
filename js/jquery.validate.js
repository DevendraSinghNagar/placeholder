
function validateForm(){
    var flag = false;
    var nameReg = /^[A-Za-z]+$/;
    var numberReg =  /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var empty = /\s/;

    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    var file = $('#file').val();
    var select = $('#select').val();
    var gender = $('input[name=gender]').val();
    var checkbox = $('input[name=check]').val();

    var inputVal = new Array(name, email, message, file, select, checkbox);

    var inputMessage = new Array("name", "email address", "message", "file", "select", "gender", "checkbox");

        /*$('#name').keyup(function(){
            str = $(this).val(),
            str = str.replace(/\s/g,''),
            $(this).val(str),
            $('#name').after('<span class="error"> textbox not be null</span>');
        });*/

     //$('.error').hide();

        // Validation for name
        if(inputVal[0] == ""){
            $('#name').after('<span class="error"> Please enter your full ' + inputMessage[0] + '</span>');
            flag = true;
        } 
        else if(numberReg.test(name)){
            $('#name').after('<span class="error"> Use letters only</span>');
            flag = true;
        }
        else if(empty.test(name)){
            $('#name').after('<span class="error"> textbox not be null</span>');
            flag = true;
        } else {
            $('.error').hide();
            flag = false;
        }

        // Validation for email
        if(inputVal[1] == ""){
            $('#email').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
            flag = true;
        } 
        else if(!emailReg.test(email)){
            $('#email').after('<span class="error"> Please enter a valid email address</span>');
            flag = true;
        } else {
            $('.error').hide();
            flag = false;
        }

        // Validation for messageBox
        if(inputVal[2] == "") {
            flag = true;
            $('#message').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
        }
        else if(empty.test(message)){
            $('#message').after('<span class="error"> textbox not be null</span>');
            flag = true;
        } else {
            $('.error').hide();
            flag = false;
        }

        // Validation for uploadFile
        if(inputVal[3] == "") {
            $('#file').after('<span class="error"> Please select a ' + inputMessage[3] + '</span>')
        
            flag = true;
        } else {
            $('.error').hide();
            flag = false;
        }

        // Validation for selectBox
        if(inputVal[4] == "0") {
            $('.select-button').after('<span class="error"> Please ' + inputMessage[4] + '</span>')
       
            flag = true; } else {
            $('.error').hide();
            flag = false;
        }
            
        // Validation for radioButton
        if($('input[name=gender]:checked').length<=0) {
            $('.radio-button').after('<span class="error"> Please select a ' + inputMessage[5] + '</span>')
            flag = true;
        } else {
            $('.error').hide();
            flag = false;
        }

        // Validation for checkbox
        if($('input[name=check]:checked').length<=0) {
            $('.label-form').after('<span class="error"> Please select ' + inputMessage[6] + '</span>')
        
            flag = true;
        } else {
            $('.error').hide();
            flag = false;
        }

        /*$('input:text ').each(function(){
        if($(this).val() == '' || (!nameReg.test(name))){
            $(this).css('border','1px solid red');
            isValid = 0;
            }
        else{
            $(this).css('border','1px solid green');
            }
        });
         if(isValid == 0){
            
            flag = true;
        }*/
};
