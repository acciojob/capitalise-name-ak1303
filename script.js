//your JS code here. If required.
let inp = document.getElementById('fname');
document.addEventListener('click',(e)=>{
	let original = inp.value;
	inp.value=original.toUpperCase();
});