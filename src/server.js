const express = require("express");
const cors = require("cors");
const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Hello, Topper!");
});

app.get("/certificate", (req, res) => {
    return res.sendFile(__dirname + "/static/certificate/edutalks-certificate.pdf");
});

app.get("/font", (req, res) => {
    return res.sendFile(__dirname + "/static/font/Poppins-SemiBold.ttf");
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})