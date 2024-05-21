const express = require("express")
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./dbconn");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 4000


connectDB(process.env.DB);

app.use(cros());

app.use(express.json());
app.use(cookieParser());

app.use("/api/users",userRoutes);


// Server Setup;
app.listen(port, () => {
    console.log(`Server running on ${port}`)
});





