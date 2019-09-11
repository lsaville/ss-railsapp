var fancyButton = document.querySelector('#addstyle');
var imageButton = document.querySelector('#addimage');

fancyButton.addEventListener('click', function(){
	document.querySelector('#welcome-message').classList.toggle('fancy')
})

imageButton.addEventListener('click', function(){
	// fetch('INSERT THE LINK TO YOUR S3 IMAGE HERE')
	// .then((data) => {
	// 	var newImage = new Image(150, 150);
	// 	newImage.src = data.url;
	// 	document.querySelector('#img-container').appendChild(newImage);
	// })
	// .catch((err) => {
	// 	console.log(err);
	// })
})
