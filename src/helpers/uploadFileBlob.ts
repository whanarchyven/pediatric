import FormData from "form-data";
import axios from "axios";

export const uploadFileBlob=async (file:File)=>{
    if(file!=null){
        const formData=new FormData();
        formData.append('file',file,file?.name)
        const diplom=await axios.post('/api2/upload',formData);
        console.log('URLLLLL',diplom.data.url)
        return diplom.data.url
    }
}