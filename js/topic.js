
function injectScript(){
    var elem = document.createElement("script");
    elem.type = "text/javascript";
    elem.innerHTML = cbSaveBox;
    return document.head.appendChild(elem);
};

function addCBButtons(){
    
    var boxes=$(".codebox");
    addCBSaveButtons(boxes);
    makeCBBoxesEditable(boxes);
    
}

function addCBSaveButtons(boxes){
    
    boxes.append($('<div class="cbsave" onclick="cbSaveBox(this)"></div>'));

}

function makeCBBoxesEditable(boxes){

    $(boxes).children('pre').attr('contenteditable','true');
}

function cbSaveBox(what){
    
    var content = what.parentNode.firstChild.firstChild.innerHTML;
    
    uriContent = "data:application/octet-stream," + encodeURIComponent(content);
    newWindow=window.open(uriContent, 'view');

}

$(document).ready(function() {
  injectScript();
  addCBButtons();
});
