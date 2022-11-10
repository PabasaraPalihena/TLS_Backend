const https = require("https"),
  fs = require("fs");

const options = {
  key: fs.readFileSync("server-ket.pem"),
  cert: fs.readFileSync("server-cert.pem"),
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

app.listen(8000);

https.createServer(options, app).listen(8080);
