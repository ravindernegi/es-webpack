import msg from "./Message.js";
window.onload = function(){

	document.querySelector('#ShowBtn').addEventListener('click',function(){
			const o = new msg();
			o.show();
	});

}
