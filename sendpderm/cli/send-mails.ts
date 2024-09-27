import { DashamailService } from "../services/dashamail/dashamail.service";
import { pre_ext_email_dashamail_$pderm } from "../services/dashamail/pre.config";
import * as fs from "fs";
import {eden} from "@/helpers/sdk";
import path from "node:path";
// 7669

const send = async () => {
  function log(...args) {
    fs.appendFileSync("log.txt", args.join(" ") + "\n");
    console.log(...args);
  }
  async function getUsers() {
    // let users = await fetch(
    //   `http://localhost:3201/tmp/participants/0?${isOnline ? "online=1" : ""}`,
    // ).then((d) => d.json());
    // users = users.filter((u) => u.uuid && u.email === "mgogolev1991@gmail.com");
    // return users.map((user) => ({ ...user, isOnline }));

    const readJson=async ()=>{
      // let users:any=[]
      // await fs.readFile(path.join(__dirname,'users.json'), 'utf-8', async function (err, data) {
      //   if (err) throw err;
      //
      //   let obj = JSON.parse(data);
      //
      //   // console.log(obj["users"])
      //   users=[...obj["users"]]
      //   return obj
      // });

      const usersTemp =require(path.join(__dirname,'users.json'))


      const users=usersTemp["users"].filter(item=>item["joinCommunity"]==true);

      return users;
    }

    const users=await readJson()
    return users

  }
  // evid a4fca4a0-fe5a-4de6-8480-246100de912c
  // uid max 0f08d20e-5cf0-4ca2-a68a-ffc20b7680ab
  // https://www.pediatric-dermatology.ru/api2/redirect-to-ticket/0f08d20e-5cf0-4ca2-a68a-ffc20b7680ab/a4fca4a0-fe5a-4de6-8480-246100de912c/
  //
  const service = new DashamailService(pre_ext_email_dashamail_$pderm);


  const users = await getUsers();
  console.log(users,users.length);

  for (let user of users) {
    const { uuid, fio_io } = user;
    log(
      "Высылаю письмо... ",
      user.isOnline ? "on-line" : "off-line",
      uuid,
      fio_io,
    );

    const status = await service.dashamailSendMail({
      email: user.email, //"nickerlan0@gmail.com", //mgogolev1991@gmail.com
      subject: "👉️Ваш сертификат о членстве в Обществе детских дерматологов!",
      file:{name:'Сертификат.pdf',filebody:'тут содержится base64encoded_content_1'}

    });
    log("✅", user.email, status?.response?.data?.transaction_id);
  }

  console.log('AAAA');
};
send()