//Fun little way to make a nested window, part of the eventlistner in app.js
var win = Titanium.UI.currentWindow;

var Welcome = Titanium.UI.createLabel({
	color: '#999',
	text: 'You did it!',
	font:{fontSize:30,fontFamily:'Arial'},
	textAlign: 'center',
	width: 'auto'
});
win.orientationModes =[Ti.UI.LANDSCAPE_LEFT];