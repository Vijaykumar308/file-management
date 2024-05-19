const express = require("express")
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./dbconn");

const app = express();
const port = process.env.PORT || 4000


connectDB(process.env.DB);

app.use(express.json());

app.use("/api/users",userRoutes);


// Server Setup;
app.listen(port, () => {
    console.log(`Server running on ${port}`)
});





