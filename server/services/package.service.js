/* internal import */
const fs = require("fs");
const Package = require("../models/Package");
const Transaction = require("../models/Transaction");

/* remove package thumbnail */
function removePackageThumbnail(thumbnail) {
  fs.unlinkSync(`${__dirname}/../public/${thumbnail}`);
}

/* update package thumbnail */
exports.updatePackageThumbnail = async (id) => {
  const package = await Package.findById(id);
  removePackageThumbnail(package.thumbnail);
};

/* display all packages */
exports.displayAllPackages = async ({ page }) => {
  const result = await Package.find()
    .skip(page && (Number(page) - 1) * 10)
    .limit(page && 10)
    .sort("-createdAt")
    .populate("users");
  const count = await Package.estimatedDocumentCount();
  return { count, result };
};

/* insert new package */
exports.insertNewPackage = async (data) => {
  const result = await Package.create(data);
  return result;
};

/* display specific package */
exports.displaySpecificPackage = async (id) => {
  const result = await Package.findById(id).populate("users");
  return result;
};

/* update specific package */
exports.updateSpecificPackage = async (id, data) => {
  const result = await Package.findByIdAndUpdate(id, data, {
    runValidators: true,
  });
  return result;
};

/* remove specific package */
exports.removeSpecificPackage = async (id) => {
  await Transaction.updateOne(
    {
      transactionInfo: { $elemMatch: { package: id } },
    },
    {
      $pull: {
        transactionInfo: { package: id },
      },
    }
  );

  const result = await Package.findByIdAndDelete(id);
  removePackageThumbnail(result.thumbnail);

  return result;
};

/**
 * Mongoose remove from array
 * https://www.grepper.com/tpc/mongoose+remove+from+array
 */
