/* external import */
const mongoose = require("mongoose");

const packageSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please, provide a package title"],
      unique: [true, "Title already exists"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Please, provide a package category"],
      enum: {
        values: ["academic", "professional", "job-related"],
        message:
          "{VALUE} is not a valid category, try academic/professional/job-related",
      },
      trim: true,
    },
    about: {
      type: String,
      required: [true, "Please, provide a short description for your package"],
      trim: true,
    },
    thumbnail: {
      type: String,
      default:
        "https://www.open.edu/openlearn/pluginfile.php/3277384/tool_ocwmanage/articletext/0/become_a_student_inline.jpg",
    },
    description: {
      structure: {
        type: String,
        required: [true, "Please, provide package structure"],
        trim: true,
      },
      purpose: {
        type: String,
        required: [true, "Please, provide package purpose"],
        trim: true,
      },
    },
    price: {
      type: Number,
      required: [true, "Please, provide the package price"],
    },
    status: {
      type: String,
      enum: {
        values: ["active", "inactive"],
        message: "{VALUE} is not a valid status, try active/inactive",
      },
      default: "active",
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Package = new mongoose.model("Package", packageSchema);
module.exports = Package;
