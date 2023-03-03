/* external import */
const bcrypt = require("bcryptjs");

/* internal import */
const User = require("../models/User");
const { getToken } = require("../utils/token.util");
const emailUtil = require("../utils/confirm.util");
const Transaction = require("../models/Transaction");
const Package = require("../models/Package");

/* confirmation email utility */
function confirmByEmail(email, token, protocol, host, slug) {
  emailUtil(email, token, protocol, host, slug);
}

/* check expire utility */
function isExpire(date) {
  const expired = new Date() > new Date(date);
  return expired;
}

/* display all users */
/**
 * Nested populate
 * https://www.reddit.com/r/node/comments/9hhd11/mongoose_how_to_populate_nested_schemas_with/
 */
exports.displayAllUsers = async ({ page }) => {
  const result = await User.find()
    .skip(page && (Number(page) - 1) * 10)
    .limit(page && 10)
    .sort("-updatedAt")
    .populate({
      path: "transaction",
      select: "",
      populate: {
        path: "transactionInfo.package",
        select: "",
      },
    });
  const count = await User.estimatedDocumentCount();
  return { count, result };
};

exports.displaySpecificUser = async ({ id }) => {
  const result = await User.findById(id).populate({
    path: "transaction",
    select: "",
    populate: {
      path: "transactionInfo.package",
      select: "",
    },
  });
  return result;
};

/* sign up an user */
exports.signUpNewUser = async (data, protocol, host) => {
  const user = new User(data);
  const token = user.generateCredentialToken();

  await user.save({ validateBeforeSave: false });
  confirmByEmail(user.email, token, protocol, host);

  const result = await user.save();
  return result;
};

/* confirm signed up user */
exports.confirmSignedUpUser = async (token) => {
  const user = await User.findOne({ confirmationToken: token });
  const expired = isExpire(user.confirmationTokenExpires);

  if (expired) {
    return { acknowledgement: false };
  }

  user.status = "active";
  user.confirmationToken = undefined;
  user.confirmationTokenExpires = undefined;
  user.save({ validateBeforeSave: false });

  return user;
};

/* sign in an user */
exports.signInExistingUser = async (data) => {
  const user = await User.findOne({ email: data.email });

  if (user) {
    const isValidPassword = bcrypt.compareSync(data.password, user.password);
    if (isValidPassword) {
      if (user.status === "active") {
        const token = getToken(user);
        return { user, token };
      } else {
        console.log("User is not active!");
      }
    } else {
      console.log("Password is wrong!");
    }
  } else {
    console.log("User not exist!");
  }
};

/* retain a user after login based token expiry */
exports.getMe = async (data) => {
  const result = await User.findOne({ email: data }).populate("transaction");
  return result;
};

/* update specific user info */
exports.updateSpecificUser = async (id, data) => {
  const result = await User.findByIdAndUpdate(id, data, {
    runValidators: true,
  });
  return result;
};

/* remove specific user */
exports.removeSpecificUser = async (id) => {
  const result = await User.findByIdAndDelete(id);
  await Transaction.findByIdAndDelete(result.transaction);
  await Package.update(
    { users: { $all: [id] } },
    {
      $pull: {
        users: id,
      },
    }
  );
  return result;
};
