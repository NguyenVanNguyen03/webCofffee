import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./db/database.js";
import router from "./routes/controller.js";

const app = express();

app.use(cors());

// Sử dụng bodyParser để xử lý dữ liệu từ phần thân yêu cầu HTTP
app.use(bodyParser.urlencoded({ extended: true }));

// Kết nối tới cơ sở dữ liệu MongoDB
connectDB();

// Cài đặt view engine là EJS và thư mục views
app.set("view engine", "ejs");
app.set("views", "./views");

// Sử dụng router từ file controller.js
app.use("/", router);

// Lắng nghe cổng 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
