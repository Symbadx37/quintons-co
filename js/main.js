// Data object
let sessionData;

// Active document deferred loader
$(document).ready(function() {
    updateSession("refresh");
    // Initialize and/or refresh session
    if (typeof localStorage.sessionData === "undefined") {
        let obj = new Session();
        Session.setData(obj);
        updateSession("refresh");
    }
    // Detect modal state
    if (sessionData.modalState == 0) {
        $("#modal-container").show();
        disableScroll(); 
    } 
    else if (sessionData.modalState == 2) {
        window.location.replace("https://quintons.co/pgs/err/403.html");
    }
});

// Disable/enable page scrolling
function disableScroll() {
    scrollTop = 
        window.pageYOffset ||
        document.documentElement.scrollTop;
    scrollLeft = 
        window.pageXOffset || 
        document.documentElement.scrollLeft,
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}
function enableScroll() {
    window.onscroll = function () {};
}

// Automades session refreshing and saving
function updateSession(functionID) {
    const setData = function() {
        Session.setData(sessionData);
    }
    const getData = function() {
        sessionData = Session.getData(localStorage.getItem("sessionData"));
    }
    switch (functionID) {
        case "refresh":
            getData(); break;
        case "save":
            setData(); getData(); break;
    }
}

// Disable console access
window.addEventListener('keydown', function(event) {
    if (event.code === 'F12') {
        event.preventDefault();
        console.log('Blocked F12');
    }
    if (event.shiftKey && event.ctrlKey && event.code === 'KeyI') {
        event.preventDefault();
        console.log('Blocked Ctrl + Shift + i');
    }
});
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log('Blocked RightClick');
}); 

// Modal event handler
$("#modal-buttons input").on({
    click: function(){
        if (this.id == "modal-accept") {
            sessionData.modalState = 1;
            updateSession("save");
            enableScroll();
            $("#modal-container").hide();
        } else {
            sessionData.modalState = 2;
            updateSession("save");
            window.location.replace("pgs/err/403.html");
            window.location.replace("https://quintons.co/pgs/err/403.html");
        }
    }
});