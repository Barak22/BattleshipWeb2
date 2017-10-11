setInterval(roomLoader, 2000);

//-------------------------------------------------//
// Draw boards
//-------------------------------------------------//
function roomLoader() {
    var room = getParameterByName('room');
    var username = getParameterByName('username');
    var params = {
        room: room,
        username: username
    };

    $.ajax({
        type: "GET",
        url: "/getBoards",
        data: params,
        success: function (result) {
            document.getElementById("gameBoards").innerHTML = result;
        },
        error: function (error) {
            alert(error.getText());
        }
    });
}

//-------------------------------------------------//
// Extracts the room name parameter
//-------------------------------------------------//
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

roomLoader();

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    playMove(ev);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function playMove(ev) {
    var row = ev.target.getAttribute('row');
    var col = ev.target.getAttribute('col');
    var type = ev.target.getAttribute('type');
    var roomName = getParameterByName('room');
    var params = {
        row: row,
        col: col,
        roomName: roomName,
        type: type
    };

    $.ajax({
        type: "POST",
        url: "/playMove",
        data: params,
        statusCode: {
            200: function (response) {
                alert(response);
            },
            201: function (response) {
                alert(response);
            }
        }
    })
}