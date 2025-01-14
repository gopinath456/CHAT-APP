import {v2 as cloudinary} from 'cloudinary'
import "dotenv/config"

// Configure Cloudinary with your cloud name, API key, and API secret

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_PUBLIC,
    api_secret:process.env.CLOUDINARY_PRIVATE_KEY
})

export default cloudinary