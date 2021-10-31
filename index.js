const express = require("express");
require("dotenv").config();
//Crear el sv de Express
const app = express();
const fileUpload = require("express-fileupload");
const { dbConnection } = require("./db/config");
const cors = require('cors')
//rutas
//Directorio publico
//cors
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);
app.use(express.static("public"));
//bd
dbConnection()
app.use("/api/auth", require("./Routes/auth"));
app.use('/api/events',require('./Routes/events'));
//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log("wake up sv");
});
