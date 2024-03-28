import app from "./app"
import mongoose from "mongoose";
import config from "./config";



async function server() {
 try {
    await mongoose.connect(config.database_url_local);

    app.listen(process.env.PORT, () => {
        console.log(`Computer Management App Is Ready ${config.port}`)
    })
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
 } catch (error) {
    console.log(error);
 }
}

server().catch(err => console.log(err));