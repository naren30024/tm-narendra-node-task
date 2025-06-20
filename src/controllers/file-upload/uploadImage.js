


// API route to upload image
const uploadImage = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    res.status(200).json({
      message: 'Profile image uploaded successfully',
      filePath: `/uploads/${req.file.filename}`,
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



module.exports = { uploadImage };