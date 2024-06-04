import { DashamailService } from "../services/dashamail/dashamail.service";
import { pre_ext_email_dashamail_$pderm } from "../services/dashamail/pre.config";
import * as fs from "fs";

const send = async () => {
  function log(...args) {
    fs.appendFileSync("log.txt", args.join(" ") + "\n");
    console.log(...args);
  }
  async function getUsers(isOnline: boolean) {
    let users = await fetch(
      `http://localhost:3201/tmp/participants/0?${isOnline ? "online=1" : ""}`,
    ).then((d) => d.json());
    users = users.filter((u) => u.uuid && u.email === "mgogolev1991@gmail.com");
    return users.map((user) => ({ ...user, isOnline }));
  }
  // evid a4fca4a0-fe5a-4de6-8480-246100de912c
  // uid max 0f08d20e-5cf0-4ca2-a68a-ffc20b7680ab
  // https://www.pediatric-dermatology.ru/api2/redirect-to-ticket/0f08d20e-5cf0-4ca2-a68a-ffc20b7680ab/a4fca4a0-fe5a-4de6-8480-246100de912c/
  //
  function withSubst(template, user) {
    return template
      .replace("{name}", user.fio_io)
      .replace(
        "{offlineTicketLink}",
        `https://pediatric-dermatology.ru/api2/redirect-to-ticket/${user.uuid}/20daf2b7-2af4-4c9b-96f3-b104163f211c`,
      )
      .replace(
        "{qrCodeLink}",
        `https://api.qrserver.com/v1/create-qr-code/?size=800x800&data=https://pediatric-dermatology.ru/account/${user.uuid}/events/20daf2b7-2af4-4c9b-96f3-b104163f211c`,
      );
  }
  const service = new DashamailService(pre_ext_email_dashamail_$pderm);
  const emailOffline = await Bun.file("src/cli/mail11_offline.html").text();
  const emailOnline = await Bun.file("src/cli/mail11_online.html").text();

  const users = await getUsers(true);
  console.log(users);

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
      subject: "👉️Ваше онлайн-участие 08.06",
      html: withSubst(user.isOnline ? emailOnline : emailOffline, user),
    });
    log("✅", user.email, status?.response?.data?.transaction_id);
  }

  // console.log(status);
};
