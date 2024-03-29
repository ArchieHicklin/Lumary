var bgImageArray = ["card.png", "cardblue.png", "cardorange.png", "cardred.png"],
base = "images/",
secs = 5;
bgImageArray.forEach(function(img){
    new Image().src = base + img;
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){
			document.getElementById("number").style.background = "url(" + base + bgImageArray[k] + ")";
			document.getElementById("number").style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }
		}, (secs * 1000) * i)
	}
}
backgroundSequence();
