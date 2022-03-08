const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/file_operation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
