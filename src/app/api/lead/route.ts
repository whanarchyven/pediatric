import {NextResponse} from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const result=await axios.post('https://ars.ptq.pw/mg/pderm/crm/getLink', data,{headers:{
            Authorization:'Bearer dBNSFaf9hwHEx7ZLRS9mFaUM7MvD4U2ZVfdHZJ8qgKELpQ8MJL'
            }})

        return new NextResponse(JSON.stringify(result.data));
    } catch (error: any) {
        return new NextResponse(JSON.stringify(error));
    }
}

