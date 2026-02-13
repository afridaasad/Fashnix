const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "Fashnix API running" });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// MongoDB Connection + Start Server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
