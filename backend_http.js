const http = require("http");
const port = 5000;
const server = http.createServer(async (req, res) => {
    if (req.url === "/getServerDate" && req.method === "GET") {
        var date = returnDate();
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(date);
    } else if (req.url === "/getSampleText4Tests" && req.method === "GET") {
        var sampleText = makeSampleText(between(5, 20));
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(sampleText);
    } else {
        res.writeHead(404, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify({
            ServerDate: "Ups coś nie poszło wg planu"
        }));
    }
});

function returnDate() {
    let date_ob = new Date();
    var miliseconds = date_ob.getMilliseconds()
    if (miliseconds <= 9) {
        miliseconds = '00' + miliseconds
    };
    if (miliseconds <= 99 && miliseconds >= 10) {
        miliseconds = '0' + miliseconds
    };
    var seconds = date_ob.getSeconds();
    if (seconds <= 9) {
        seconds = '0' + seconds;
    };
    var minutes = date_ob.getMinutes();
    if (minutes <= 9) {
        minutes = '0' + minutes;
    };
    var hour = date_ob.getHours();
    if (hour <= 9) {
        hour = '0' + hour;
    };
    var year = date_ob.getFullYear();
    var month = date_ob.getMonth() + 1;
    if (month <= 9) {
        month = '0' + month;
    };
    var day = date_ob.getDate();
    if (day <= 9) {
        day = '0' + day;
    };
    return day + '.' + month + '.' + year + ' ' + hour + ':' + minutes + ":" + seconds + ":" + miliseconds;
}

function makeSampleText(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function between(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}
server.listen(port, () => {
    console.log('Backend started on port: ' + port);
});
