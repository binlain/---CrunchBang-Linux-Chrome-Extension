
function init(){
    
    var first_run = false;
    if (!localStorage['ran_before']) {
        first_run = true;
        localStorage['ran_before'] = '1';
    }

    if (first_run){
        window.open(chrome.extension.getURL("welcome.html"));
    }

    var ico=getPref('ico','dark.ico');
    chrome.browserAction.setIcon({path:'images/'+ico});
    showUnread();
    
}

function showUnread(){

    var t='';

    if(getPref('showUnread','yes')=='yes'){
        var unread=getPref('unread','0');
        t=unread+'';
        
        if(unread==0){
            t='';
        }
        
        if(unread>10){
            t='>10';
        }
    }
    
    chrome.browserAction.setBadgeText({text : t});
}


function getPref(key, def){
    if (typeof localStorage[key] == "undefined") {
        if(typeof def != "undefined"){
            localStorage[key] = def;
        }    
    }
    return localStorage[key];
}

function setPref(key, val){
   localStorage[key]=val;
}

function validateFNumber(field,def) {
    var regExpr = new RegExp("^\\d*\\.?\\d*$");
    if (!regExpr.test(field.value)) {
    
      field.value = def;
    }
}

