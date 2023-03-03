/* external import */
const express = require("express");

/* internal import */
const userController = require("../controllers/user.controller");
const authorizedRoleMiddleware = require("../middlewares/authorizedRole.middleware");
const verifyTokenMiddleware = require("../middlewares/verifyToken.middleware");

/* router level connection */
const router = express.Router();

router.get(
  "/all",
  verifyTokenMiddleware,
  authorizedRoleMiddleware("admin"),
  userController.displayAllUsers
);

router
  .route("/signup")
  .get(userController.confirmSignedUpUser)
  .post(userController.signUpNewUser);

router.post("/signin", userController.signInExistingUser);
router.get("/me", verifyTokenMiddleware, userController.getMe);

router
  .route("/:id")
  .get(
    verifyTokenMiddleware,
    authorizedRoleMiddleware("admin", "user"),
    userController.displaySpecificUser
  )
  .patch(
    verifyTokenMiddleware,
    authorizedRoleMiddleware("admin"),
    userController.updateSpecificUser
  )
  .delete(
    verifyTokenMiddleware,
    authorizedRoleMiddleware("admin"),
    userController.removeSpecificUser
  );

module.exports = router;
