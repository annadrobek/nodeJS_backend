const http = require("http");
const port = 5000;
const server = http.createServer(async (req, res) => {
    if (req.url === "/getServerDate" && req.method === "GET") {
        let date_ob = new Date();
        var miliseconds = date_ob.getMilliseconds()
        var seconds = date_ob.getSeconds();
        if (seconds <= 9) {
           seconds = '0'+seconds;
        }
        var minutes = date_ob.getMinutes();
        if (minutes <= 9) {
           minutes = '0'+minutes;
        }
        var hour = date_ob.getHours();
        if (hour <= 9) {
           hour = '0'+hour;
        }
        var year = date_ob.getFullYear();
        var month = date_ob.getMonth()+1;
        if (month <= 9) {
           month = '0'+month;
        }
        var day = date_ob.getDate();
        if (day <= 9) {
           day = '0'+day;
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(day+'.'+month+'.'+year+' '+hour+':'+minutes+":"+seconds+":"+miliseconds);
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ServerDate: "Ups coś nie poszło wg planu" }));
    }
});
server.listen(port, () => {
    console.log('Backend started on port: '+port);
});
