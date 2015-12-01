$(document).ready(function(){
    console.log("here's your mock data to start with:");
    console.log(GLOBAL_MOCK_DATA_OBJECT);

$("#userInput").on("keypress", function(event){
	var userUrl;
	var userString;
	var kc = event.keyCode;
	if(kc === 13){ //enter
		userString= $("#userInput").val();
	 	userUrl="http://api.giphy.com/v1/gifs/search?q=" + userString + "&api_key=dc6zaTOxFJmzC";
	}

	for(var i=0; i < userString.length; i++){
		if(userUrl[i] === " "){
			userUrl[i] = "+";
			//searches for spaces in a string and replaces them with +
		}
	}

	$.ajax({
  	method: "GET",
  	url: userUrl,
  	success: function (response){
//   		console.log(response);
//   		console.log(response.data);
//   		console.log(response.data[0]);
//   		console.log(response.data[0].url);
//   		console.log(response.data.forEach(function(element){
			//Travis showed us how to get to this data path


//		 	var oneGif = response.data[0].images.fixed_height.url;
//			console.log (oneGif);
//			$("body").append("<img src=" + oneGif + ">");
			
			//grabs one Gif and prints it to screen

		for (var i=0; i < response.data.length; i++){
			console.log(response.data[i].images.fixed_height.url);
			$("body").append("<img src=" + response.data[i].images.fixed_height.url + ">");
		}
			//grabs top 25 gifs and prints it to screen

		}
	});
});

});


/*
Notes:
Appending might not be the best method to use here since it doesn't refresh the background
on each search. 


*/