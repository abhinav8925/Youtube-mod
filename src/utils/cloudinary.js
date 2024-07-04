import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null; // Handle missing file path
    }

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("File uploaded successfully!");
    console.log(response.url);
    return response;

  } catch (error) {
    fs.unlinkSync(localFilePath); // Delete the file if upload fails
    return null;
  }
};

export { uploadToCloudinary };


// const filePath = "C:/Users/anand/Downloads/Abhinav much compressed.jpg";
// uploadToCloudinary(filePath)
//   .then(() => console.log("Upload completed"))
//   .catch((error) => console.error("Error:", error));
