
/*
	Debug Javascript applications	
*/

var Debug = function(){


	var __write = function(msg,type){
		console.log( msg, type);
	}

	

	//public functions
	return {
		write: __write
	};

}({});