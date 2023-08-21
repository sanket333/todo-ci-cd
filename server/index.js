const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://user:user@cluster1.jfb6q.mongodb.net/course?retryWrites=true&w=majority', { dbName: "course" })

app.listen(3000, () => console.log('Server running on port 3000'));
