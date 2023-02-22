import express from "express";
import fileUpload from "express-fileupload";
import { router } from "./src/books/router.js";

const app = express();
export const port = 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(fileUpload());
app.use('', router);

app.listen(port, console.log(`app listening on port : ${port}`));
