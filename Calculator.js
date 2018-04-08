<html>
<head>
<script>
	fuction additonal ()
	{
		var value1=parseInt(document.getElementById("value1").value);
		var value2=parseInt(document.getElementById("value2").value);
		var ans=document.getElementById("answer");
		ans.value=value1+value2;
	}
</script>

<script>
	fuction Multi ()
	{
		var value1=parseInt(document.getElementById("value1").value);
		var value2=parseInt(document.getElementById("value2").value);
		var ans=document.getElementById("answer");
		ans.value=value*value2;
	}
</script>


<script>
	fuction sub ()
	{
		var value1=parseInt(document.getElementById("value1").value);
		var value2=parseInt(document.getElementById("value2").value);
		var ans=document.getElementById("answer");
		ans.value=value1-value2;
	}
</script>

<script>
	fuction div ()
	{
		var value1=parseInt(document.getElementById("value1").value);
		var value2=parseInt(document.getElementById("value2").value);
		var ans=document.getElementById("answer");
		ans.value=value1/value2;
	}
</script>
</head>
<body>
<input type="text" id="value1" value="">
<input type="text" id="value2" value="">
<input type="button" value="add" onclick="addition()">
<input type="button" value="sub" onclick="sub()">
<input type="button" value="multi" onclick="multi()">
<input type="button" value="div" onclick="div()">
<input type="text" id="answer">
</body>
</html>