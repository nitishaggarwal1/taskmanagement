import app from "./app.js";
import dotenv from 'dotenv';
import { ConnectDB } from "./config/db.config.js";

dotenv.config();

ConnectDB();

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`the server is listening at port http://localhost:${port}`);
})