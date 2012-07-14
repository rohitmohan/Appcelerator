// ----- app.js
//include all the files u wana use below
Ti.include('/views/part_one/main.js','/views/part_two/main.js');
 
// create tab group
var tabGroup = Titanium.UI.createTabGroup();
 
// create base UI tab and root window
//this is fetched from our views part_one
var win1 = tabOneObject.init();
var tab1 = Titanium.UI.createTab({  
    title:'Tab 1',
    icon: 'glasses.png',
    window:win1
});

//this object comes from views part_two
var win2 = tabTwoObject.init();
var tab2 = Titanium.UI.createTab({  
    title:'Tab 2',
    icon: 'edit.png',
    window:win2
});
 
//  add tabs
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
 
// open tab group
tabGroup.open();