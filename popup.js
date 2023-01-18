var callUtilities = document.getElementById('callUtilities');

callUtilities.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let extensionId = chrome.runtime.id;

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: LoadJVFUtilities,
        args: [extensionId]
    });
});

function LoadJVFUtilities(extensionId){
    function _0x2a27(_0x410297,_0x4721af){const _0xda8f11=_0xda8f();return _0x2a27=function(_0x2a27fa,_0xf8a6c0){_0x2a27fa=_0x2a27fa-0xa0;let _0x4e9432=_0xda8f11[_0x2a27fa];return _0x4e9432;},_0x2a27(_0x410297,_0x4721af);}const _0xb2dcf6=_0x2a27;(function(_0x53295d,_0x86c10e){const _0x1d7aec=_0x2a27,_0x47c8f7=_0x53295d();while(!![]){try{const _0x3dca51=parseInt(_0x1d7aec(0xb4))/0x1+parseInt(_0x1d7aec(0xae))/0x2+-parseInt(_0x1d7aec(0xa3))/0x3+-parseInt(_0x1d7aec(0xa1))/0x4+parseInt(_0x1d7aec(0xab))/0x5+-parseInt(_0x1d7aec(0xad))/0x6*(-parseInt(_0x1d7aec(0xa8))/0x7)+parseInt(_0x1d7aec(0xb3))/0x8*(-parseInt(_0x1d7aec(0xa9))/0x9);if(_0x3dca51===_0x86c10e)break;else _0x47c8f7['push'](_0x47c8f7['shift']());}catch(_0x47fb7c){_0x47c8f7['push'](_0x47c8f7['shift']());}}}(_0xda8f,0x321b8));let existSrc=document[_0xb2dcf6(0xaa)](_0xb2dcf6(0xb5));if(existSrc==null){console[_0xb2dcf6(0xa4)](_0xb2dcf6(0xb6)),sessionStorage['jvfIoId']=extensionId,console[_0xb2dcf6(0xa4)](_0xb2dcf6(0xb0)+extensionId);let scriptLink=document[_0xb2dcf6(0xa2)](_0xb2dcf6(0xac));scriptLink[_0xb2dcf6(0xb1)]=chrome[_0xb2dcf6(0xaf)][_0xb2dcf6(0xa6)]('/src/custom/jvf-obs.js'),scriptLink['id']=_0xb2dcf6(0xb5),document[_0xb2dcf6(0xa0)](_0xb2dcf6(0xa7))[0x0][_0xb2dcf6(0xa5)](scriptLink),console['log'](_0xb2dcf6(0xb2));}function _0xda8f(){const _0x2627da=['1260592vFyGAn','createElement','147117uZJSTe','log','appendChild','getURL','head','70kRHpDe','19359wCcJmE','getElementById','829950eChjrK','script','108996KSLkqE','648552reGtqI','runtime','Id:','src','jvf.io()\x20Loaded.','440ceFRka','15806ZrqFNE','jvf_io_src','jvf.io()\x20Loading...','getElementsByTagName'];_0xda8f=function(){return _0x2627da;};return _0xda8f();}
}