
var arr = []

// Adding Event Listner to the Color me button
document.getElementById("submit").addEventListener("click", function(){
	var i = document.getElementById("input").value;
	console.log(i);
	if (i > 9 || i < 1){
		window.alert("Please Input a number Between 1 - 9");
		console.log("Please Input a number Between 1-9");
		return;
	}
	else{
		if (arr.length != 0){
			var j = arr.pop().toString()
			document.getElementById(`d${j}`).style.background = "white";
			
		}
		arr.push(i)
		var tmp = i.toString()
		var Div = document.getElementById(`d${tmp}`);
		Div.style.background = "green";
		
	}
})
