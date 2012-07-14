Titanium.UI.setBackgroundColor('#000');
 
var tabOneObject = {};
 
tabOneObject.init = function() {
 
    // create base UI tab and root window
    var win1 = Titanium.UI.createWindow({  
        title:'Tab 1',
        backgroundColor:'#fff'
    });
 	
 	//just a label to show this file is called in
 	var label1 = Titanium.UI.createLabel({
    text:'I am Window 1',
    textAlign:'center',
    width:'auto'
	});
    //add this button
    win1.add(label1);
 	
    Ti.API.info('in create tabOneObject');
    return win1; 
};