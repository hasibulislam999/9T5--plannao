/* internal import */
const packageService = require("../services/package.service");

/* upload package thumbnail */
exports.uploadPackageThumbnail = async (req, res, next) => {
  try {
    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully uploaded package thumbnail",
      data: req.file,
    });
  } catch (error) {
    next(error);
  }
};

/* update package thumbnail */
exports.updatePackageThumbnail = async (req, res, next) => {
  try {
    await packageService.updatePackageThumbnail(req.query.id);

    res.status(201).json({
      acknowledgement: true,
      message: "Updated",
      description: "Successfully updated package thumbnail",
      data: req.file,
    });
  } catch (error) {
    next(error);
  }
};

/* display all packages */
exports.displayAllPackages = async (req, res, next) => {
  try {
    const result = await packageService.displayAllPackages(req.query);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching all packages",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* insert new package */
exports.insertNewPackage = async (req, res, next) => {
  try {
    const result = await packageService.insertNewPackage(req.body);

    res.status(201).json({
      acknowledgement: true,
      message: "Created",
      description: "Successfully insert new package",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* display specific package */
exports.displaySpecificPackage = async (req, res, next) => {
  try {
    const result = await packageService.displaySpecificPackage(req.params.id);

    res.status(200).json({
      acknowledgement: true,
      message: "OK",
      description: "Successfully fetching specific package",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* update specific package */
exports.updateSpecificPackage = async (req, res, next) => {
  try {
    const result = await packageService.updateSpecificPackage(
      req.params.id,
      req.body
    );

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully modify specific package",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* remove specific package */
exports.removeSpecificPackage = async (req, res, next) => {
  try {
    const result = await packageService.removeSpecificPackage(req.params.id);

    res.status(202).json({
      acknowledgement: true,
      message: "Accepted",
      description: "Successfully remove specific package",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
