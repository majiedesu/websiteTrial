function validate()
{
	var username=document.getElementById("username").value;
	var pass=document.getElementById("pass").value;

	
		if(username=="admin" && pass=="a")
		{
			alert("Log In Successfully");
			//toHomepage();
			return false;
				}
		else
		{
			alert("Incorrect Credentials");
		}
		
}

function toHomepage()
{
	var myWindow = window.open ("","_self");

	myWindow.open("my-site-main/index1.html");

	
}

// function closeWin()
// {
// 	location.replace("index.html");
// }