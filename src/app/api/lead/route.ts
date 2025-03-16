import {NextResponse} from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log(JSON.stringify(data),"INitial data");
      
        const result=await axios.post('https://ars.ptq.pw/mg/pderm/crm/getLink', {...data,after_reg_email_subject:"Благодарим за регистрацию"},{headers:{
            Authorization:'Bearer dBNSFaf9hwHEx7ZLRS9mFaUM7MvD4U2ZVfdHZJ8qgKELpQ8MJL'
            }})
            console.log(result.data,"RESULT AUE");
       
        return new NextResponse(JSON.stringify(result.data));
    } catch (error: any) {
        console.log(error,"ERROR AUE");
        
        return new NextResponse(JSON.stringify(error));
    }
}

