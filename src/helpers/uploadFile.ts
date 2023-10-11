import FormData from "form-data";
import axios from "axios";

export const uploadFile=async (file:FileList)=>{
    if(file!=null){
        const formData=new FormData();
        formData.append('file',file[0],file[0]?.name)
        const diplom=await axios.post('/api2/upload',formData);
        return diplom.data.url
    }
}