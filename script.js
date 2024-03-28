
       function getFormvalue(formId) {
    // Get the values from the form
    let firstName = document.getElementById('fname').value;
    let middleName = document.getElementById('mname').value;
    let lastName = document.getElementById('lname').value;

    // Construct the full name
    let fullName = firstName;
    
    if (middleName) {
        fullName += ` ${middleName}`;
    }
    
    fullName += ` ${lastName}`;

    // Display the full name using alert
    alert(fullName);
}

        
	
    
