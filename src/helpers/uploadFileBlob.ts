import FormData from "form-data";
import axios from "axios";
import { readAndCompressImage } from 'browser-image-resizer';

const config = {
    quality: 0.5,
    maxWidth: 200,
    maxHeight: 200,
    debug: true
};
export const uploadFileBlob=async (file:File)=>{

    try {
        let resizedImage = await readAndCompressImage(file, config);
        const formData=new FormData();
        formData.append('file',resizedImage,file?.name)

        console.log('AAAAAAAAABBBBBBBBBBBBBBBBBBBBS')
        const diplom=await axios.post('/api2/upload',formData);
        console.log('URLLLLL',diplom.data.url)
        return diplom.data.url

    } catch (error) {
        console.error(error);
        throw(error);
    }
}