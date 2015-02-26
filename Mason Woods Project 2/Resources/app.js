var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#848498'
});
var tabGroup = Titanium.UI.createTabGroup();
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#848498',
	text:'Meaning of Life',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var view1 = Titanium.UI.createView({
	top: 10,
	bottom: 10,
	left: 10,
	right: 10,
	backgroundColor: '#eaba2a',
});

var button1 = Titanium.UI.createButton({
	title: 'My Favorite',
	bottom: 0,
	left: 50
});

view1.add(button1);
view1.add(label1);
win1.add(view1);

var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#eaba2a'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#848498',
	text:'The Answer',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var view2 = Ti.UI.createView({
	top:20,
	bottom:'50%',
	left:20,
	right:'50%',
	backgroundColor:'#eaba2a'
});

var button2 =Titanium.UI.createButton({
	title:'Button in View',
	top:20,
	left:20
});
 var switchOrientation=Ti.UI.createButton({title:'Make Landscape'});
 switchOrientation.addeventListener('click',rotateLayout);
 
 var layout=Ti.UI.createView({layout:'vertical'});
 layout.add(switchOrientation);
 
 function rotateLayout(){
 	win1.orientationModes=[Ti.UI.lANDSCAPE_LEFT];
 	switchOrientation,hude();
 }
button1.addEventListener('click',function(e){
	var newWin = Titanium.UI.createWindow({
		 title: 'The answer',
		url: 'newwin.js',
		backgroundColor: '#AA8439'
	});
	newWin.open ({animation:true});
	win1.orientationModes = [Ti.UI.LANDSCAPE_LEFT];	
} );

view2.add(button2);
win2.add(view2);
win2.add(label2);

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();
win1.open();
win2.open();