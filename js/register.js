/*! Register| Sergiy Melchakov 2018 | WEB design NOVI School */


function updateForm() {
        var firstname = document.getElementById("firstname").value;
		var lastname = document.getElementById("lastname").value;
        var age = document.getElementById("age").value;
        var mail = document.getElementById("mail").value; 
		if (firstname.match(/[^a-z]/i)){
			return false;
		}
		if (lastname.match(/[^a-z]/i)) {
    		return false;
    	}
		if (age.match(/[^0-9]+/)) {
    		return false;
    	}
		if (mail.match(/[^\-\_\.\@\a-zA-Z0-9]+/)) {
    		return false;
		} else if (mail.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)) {
	   
        var table=document.getElementById("results");
        var row=table.insertRow(-1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
		var cell4=row.insertCell(3);
        cell1.innerHTML=firstname;
        cell2.innerHTML=lastname;        
        cell3.innerHTML=age;
		cell4.innerHTML=mail;           
    }
}