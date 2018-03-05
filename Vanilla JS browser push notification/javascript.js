var requestButton = document.querySelector(".request-btn");
var showButton = document.querySelector(".show-btn");

function onGranted() {
    requestButton.style.background = "green";
}

function onDenied() {
    requestButton.style.background = "red";
}

requestButton.onclick = function () {
    Push.Permission.request(onGranted, onDenied);
}

showButton.onclick = function () {
    Push.create("Hello from Sabe.io!", {
        body: "This is a web notification!",
        icon: "/icon.png",
        timeout: 5000,
        onClick: function() {
            console.log(this);
        }
    });
};