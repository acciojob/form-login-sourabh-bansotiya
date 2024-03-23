
        function getFormvalue(formId) {
            const form = document.getElementById(formId);
            const formData = new FormData(form);
            const values = {};

            for (const [key, value] of formData.entries()){
                values[key] = value;
            }
            
            const message = `First Name: ${values.fname}\nLast Name: ${values.lname}`;
            alert(message);
        }
	
    
