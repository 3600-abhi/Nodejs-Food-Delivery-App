import express from "express";
import { ServerConfig } from "./config/index.js";
import { DatabaseConfig } from "./config/index.js";
import apiRoutes from "./routes/index.js";


const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));


app.use("/api", apiRoutes);


app.listen(ServerConfig.PORT, async () => {
    console.log("Server started @ PORT :", ServerConfig.PORT);
    await DatabaseConfig.connectToMongoDB();
});

