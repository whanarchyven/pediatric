import axios from "axios";
import deepmerge from "deepmerge";

export interface DashamailServiceOptions {
  api_key: string;
  from_email: string;
}

export class PreConfiguredService<T> {
  config: T;
  constructor(optionsFromConst: T, override?: Partial<T>) {
    this.config = deepmerge<T>(optionsFromConst, override ?? {});
  }
}

export class DashamailService extends PreConfiguredService<any> {
  async dashamailSendMail({ email, subject, text, html,file }: Record<string, any>) {
    const { api_key, from_email } = this.config;
    // console.log(`dashamailSendMail ${text} to ${email} from ${from_email}`);
    try {
      const res = axios
        .post("http://api.dashamail.com", {
          method: "transactional.send",
          api_key,
          from_email,
          to: email,
          subject,
          message: html,
          plain_text: text,
            attachments:file
        })
        .then((d) => {
          // console.log(`send ok`, d.data);
          return d.data;
        });
      return res;
    } catch (e) {
      console.error(
        `dasha send error ${JSON.stringify((e as any).response.data)}`,
      );
      return e;
    }
  }
}
