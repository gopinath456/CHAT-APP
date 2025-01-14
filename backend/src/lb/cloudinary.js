import {v2 as cloudinary} from 'cloudinary'
import "domain/config"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_PUBLIC,
    api_secret:process.env.CLOUDINARY_PRIVATE_KEY
})

export default cloudinary