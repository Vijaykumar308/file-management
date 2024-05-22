const express = require("express")
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./dbconn");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000


connectDB(process.env.DB);

// Set up CORS to allow requests from the React frontend
const corsOptions = {
    origin: 'http://localhost:5173', // React app address
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/users",userRoutes);


// Server Setup;
app.listen(port, () => {
    console.log(`Server running on ${port}`)
});





