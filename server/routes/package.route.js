/* external import */
const express = require("express");

/* internal import */
const packageController = require("../controllers/package.controller");
const upload = require("../middlewares/packageThumbnail.middleware");

/* router level connection */
const router = express.Router();

router
  .route("/thumbnail")
  .post(upload.single("thumbnail"), packageController.uploadPackageThumbnail)
  .patch(upload.single("thumbnail"), packageController.updatePackageThumbnail);

router
  .route("/")
  .get(packageController.displayAllPackages)
  .post(packageController.insertNewPackage);
router
  .route("/:id")
  .get(packageController.displaySpecificPackage)
  .patch(packageController.updateSpecificPackage)
  .delete(packageController.removeSpecificPackage);

module.exports = router;
