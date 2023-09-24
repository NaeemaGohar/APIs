const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({

    username: {
        type: String,
        required: [true, "Username is required"]
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    ConfirmPassword: {
        type: String,
        required: [true, "Please confirm password"]
    },

    email: {
        type: String,
        required: [true, "Email is required"]
    },

},
{timestamps: true}
);

//check if password and ConfirmPassword match
UserSchema.pre("validate", function (next) {
    if (this.password !== this.ConfirmPassword) {
      this.invalidate("ConfirmPassword", "Passwords do not match");
    }
    next();
  });


module.exports = mongoose.model("User",UserSchema);