function getFormvalue(formId) {
    //Write your code here
	const form = document.getElementById(formId);
	const formData = new FormData(form);
	const values = {};

	for (const [key, value] of formData.entries()){
		values[key] = value;
	}
return values;
}
document.getElementById('form1').addEventListener('submit', function(event){
	event.preventDefault();

	const formValues = getFormvalue('form1');
	const message = `Name: ${formValues.fname}\nEmail: ${formValues.lname}`;

	alert(message);
});