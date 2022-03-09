function validate()
{
	var username=document.getElementByid("username").value;
	var password=document.getElementByid("password").value;
	if(username=="admin"&&password=="user")
	{
		Alert ("login successifully");
	}
	else{
		Alert("wrong username or password");
	}
}