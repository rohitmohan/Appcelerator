Titanium.UI.setBackgroundColor('#000');
 
var tabTwoObject = {};
 
tabTwoObject.init = function() {
 
    // create base UI tab and root window
    var win2 = Titanium.UI.createWindow({  
        title:'Tab 2',
        backgroundColor:'#fff'
    });
 	
 	var label2 = Titanium.UI.createLabel({
    text:'I am Window 2',
    textAlign:'center',
    width:'auto'
	});
 	
 	win2.add(label2);
 	
    Ti.API.info('in create tabTwoObject');
    return win2; 
};