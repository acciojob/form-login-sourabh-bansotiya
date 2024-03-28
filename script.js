 function getFormvalue() {
    //Write your code here
	var form = document.getElementById("form1");
    // Get the values of first name and last name from the form
    var firstName = form.fname.value;
    var lastName = form.lname.value;
    // Construct the full name
    var fullName = firstName + " " + lastName;
    // Display the full name using an alert
    alert(fullName);
}
	
    
