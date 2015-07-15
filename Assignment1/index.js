$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
	$("#submit").click(function(){
		if ($("#applicationForm").valid()){
			alert("Form Submitted");
		}
	});
	$("#applicationForm33").validate({
    
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10
            },
			zipcode: {
				required: false,
				number:true,
				minlength: 5
			},
        },
        
        messages: {
            firstname: "Please enter your first name",
            lastname: "Please enter your last name",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 10 characters long"
            },
            email: "Please enter a valid email address",
			zipcode: "Please enter a valid Zip Code",
        },
        
        submitHandler: function(form) {
            form.submit();
        }
    });
	
});


function UserData(){
	var firstName = "";
	var lastName = "";
	var email = "";
	var phoneNumber = "";
	var city = "";
	var zipCode = "";

}
   