const multer = require("multer");

const fileStorageProducts = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "image/product");
    },
    filename: (req, file, cb) => {
      cb(null, new Date().getTime() + "-" + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
};

let saveImage = multer({
    storage: fileStorageProducts,
    fileFilter: fileFilter,
});

module.exports = { saveImage }