"use client"

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {headers} from "next/headers";
import {redirect, useRouter} from "next/navigation";
import {eden, useEden} from "@/helpers/sdk";
import {generatePassword} from "@/helpers/generatePassword";
import {classList} from "@/helpers/classList";

interface confirmPopInterface {
    closeFunc: () => any,
    price: number,
    event_id: string,
    event_name: string,
    participationType: 'online' | 'offline' | 'online-free',
}

const ConfirmForm = ({closeFunc, price, event_id, event_name, participationType}: confirmPopInterface) => {


    const router = useRouter();
    const [email, setEmail] = useState('')
    const [delivery, setDelivery] = useState<'sdek' | 'mail'>('sdek')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')

    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    const [isPayed, setIsPayed] = useState(false);

    const [index, setIndex] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [flat, setFlat] = useState('')

    useEffect(() => {
        const data = eden.user.my.profile.get().then((res) => {
            // console.log(res.data.profile)
            if (res?.data?.profile) {
                setFirstName(res.data.profile.firstName);
                setLastName(res.data.profile.lastName)
                setMiddleName(res.data.profile.middleName)
                setEmail(res.data.profile.email)
                setPhone(res.data.profile.phoneNumber)
            }
            if (res?.data?.isAdmin) {
                setIsPayed(true)
                console.log('true');
            } else {
                console.log('not logged in')
            }
        })
    }, [])


    // email,name,event_id,price
    const handleSubmit = async () => {
        await axios.post('/api/lead/', {
                email: String(email),
                customer: String(`${lastName} ${firstName} ${middleName}`),
                event: 'book',
                transactions: {
                    initial: {
                        amountRub: 3950,
                    }
                },
                meta: {
                    participationType: participationType,
                    phone: phone,
                    is_paid: true,
                    index:index,
                    city:city,
                    street:street,
                    house:house,
                    flat:flat,
                    delivery:delivery,
                },
                is_paid: true,
                after_reg_email_subject: "Благодарим за покупку",
                after_reg_email_body: '',
                after_reg_email_placeholders: {
                    event_name: String(event_name),
                    name: String(`${lastName} ${firstName} ${middleName}`),
                    event_id: String(event_id),
                },
                after_pay_email_subject: "Благодарим за покупку!",
                after_pay_email_body: String(`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>Оплата</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <style type="text/css">
#outlook a {
\tpadding:0;
}
.es-button {
\tmso-style-priority:100!important;
\ttext-decoration:none!important;
}
a[x-apple-data-detectors] {
\tcolor:inherit!important;
\ttext-decoration:none!important;
\tfont-size:inherit!important;
\tfont-family:inherit!important;
\tfont-weight:inherit!important;
\tline-height:inherit!important;
}
.es-desk-hidden {
\tdisplay:none;
\tfloat:left;
\toverflow:hidden;
\twidth:0;
\tmax-height:0;
\tline-height:0;
\tmso-hide:all;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
</style>
 </head>
 <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div class="es-wrapper-color" style="background-color:#F6F6F6"><!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#f6f6f6"></v:fill>
\t\t\t</v:background>
\t\t<![endif]-->
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0"
                            cellspacing="0"><tr><td style="width:180px" valign="top"><![endif]-->
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:180px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://vywmnt.stripocdn.email/content/guids/CABINET_a06bbd8005b6cecd3d8e47eed2332b605a54a72a99d528bdd2499589e4653c16/images/logo.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="180"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:360px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="right" style="padding:0;Margin:0;padding-top:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:36px;color:#333333;font-size:24px"><strong>Спасибо за оплату!</strong></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px"><em><span style="font-size:24px"><strong>Уважаемый (-ая) {name}, </strong></span></em></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
               <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Спасибо за ваш выбор!<br>Ваша поддержка - наше главное вдохновение. Мы уже отправляем книгу по указанному вами адресу. Доставка книги оплачивается при получении самостоятельно</p></td>
                     </tr>
                     <tr>
                     <td style="aspect-ratio: 16 / 9;display:flex;align-items: center;position:relative;">
             
                <td>
</tr>
                     <tr>
                      <td align="center" style="padding:20px;Margin:0;font-size:0">
                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:unset;height:1px;width:100%;margin:0px"></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0"
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Благодарим за ваш интерес к нашему мероприятию. В случае возникновения каких-либо вопросов, не стесняйтесь связаться с нами</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="right" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:33px;color:#333333;font-size:22px"><strong><span style="color:#58bbb4">+ 7(926) 249-86-58</span><br>техническая поддержка</strong></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>`),
                after_pay_email_placeholders: {
                    participationType: participationType == 'offline' ? 'очное участие' : 'онлайн',
                    event_name: String(event_name),
                    name: String(`${lastName} ${firstName} ${middleName}`),
                    event_id: String(event_id),
                    event_link: 'https://www.pediatric-dermatology.ru/events/' + event_id,
                }
            },
        ).then((response) => {
            console.log(response)
            router.push(response.data)
        })

    }


    return (
        <div className={'flex gap-4 h-full py-7 overflow-y-scroll flex-col'}>
            <p className={'text-[#0F5F5A] text-2xl sm:text-4xl font-light'}>ЗАПОЛНИТЕ<br/> <span
                className={'font-extrabold'}>АНКЕТУ</span></p>

            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Фамилия<sup className={'text-red '}>*</sup></p>
                <input value={lastName} onChange={(event) => {
                    setLastName(event.target.value)
                }} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green'}
                       name={'surname'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Имя<sup className={'text-red '}>*</sup></p>
                <input value={firstName} onChange={(event) => {
                    setFirstName(event.target.value)
                }} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green'}
                       name={'surname'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Отчество<sup className={'text-red '}>*</sup></p>
                <input value={middleName} onChange={(event) => {
                    setMiddleName(event.target.value)
                }} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green'}
                       name={'surname'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>E-mail<sup className={'text-red '}>*</sup></p>
                <input value={email} onChange={(event) => {
                    setEmail(event.target.value)
                }} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green'}
                       name={'surname'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Телефон<sup className={'text-red '}>*</sup></p>
                <input value={phone} onChange={(event) => {
                    setPhone(event.target.value)
                }} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green'}
                       name={'phone'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Вариант доставки<sup className={'text-red '}>*</sup></p>
                <p className={'text-sm sm:text-sm text-red font-bold'}>Доставка книги оплачивается при получении самостоятельно</p>
                <div className={'flex items-center gap-12'}>
                    <div onClick={() => {
                        setDelivery('sdek')
                    }} className={'flex cursor-pointer items-center gap-2'}>
                        <div
                            className={classList('w-7 aspect-square border-2 border-green rounded-full', delivery == 'sdek' ? 'bg-green' : '')}></div>
                        <p>СДЭК</p>
                    </div>
                    <div onClick={() => {
                        setDelivery('mail')
                    }} className={'flex cursor-pointer items-center gap-2'}>
                        <div
                            className={classList('w-7 aspect-square border-2 border-green rounded-full', delivery == 'mail' ? 'bg-green' : '')}></div>
                        <p>Почта России</p>
                    </div>
                </div>

            </div>

            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Индекс<sup className={'text-red '}>*</sup></p>
                <input value={index} onChange={(event) => {
                    setIndex(event.target.value)
                }} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green'}
                       name={'phone'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Город<sup className={'text-red '}>*</sup></p>
                <input value={city} onChange={(event) => {
                    setCity(event.target.value)
                }} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green'}
                       name={'phone'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Улица<sup className={'text-red '}>*</sup></p>
                <input value={street} onChange={(event) => {
                    setStreet(event.target.value)
                }} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green'}
                       name={'phone'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Дом<sup className={'text-red '}>*</sup></p>
                <input value={house} onChange={(event) => {
                    setHouse(event.target.value)
                }} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green'}
                       name={'phone'}/>
            </div>
            <div className={'flex flex-col gap-2 w-full'}>
                <p className={'text-sm sm:text-xl font-light'}>Квартира<sup className={'text-red '}>*</sup></p>
                <input value={flat} onChange={(event) => {
                    setFlat(event.target.value)
                }} className={'w-full p-2 sm:p-3 rounded-md text-sm sm:text-xl border-2 border-green'}
                       name={'phone'}/>
            </div>


            <div className={'w-full grid grid-cols-1 gap-3'}>
                <div onClick={() => {
                    if (email != '' && lastName != '' && firstName != '' && middleName != ''&&index!=''&&street!=''&&house!=''&&flat!='') {
                        setLoading(true);
                        handleSubmit();
                    }
                    else {
                        alert('Заполните все поля!')
                    }
                }}
                     className={'p-4 cursor-pointer h-12 bg-green text-white text-sm font-light rounded-xl flex items-center justify-center'}>
                    {loading ? <img className={'animate-spin h-8 aspect-square'}
                                    src={'/loading.svg'}/> : 'Купить книгу'}
                </div>
            </div>
        </div>
    );
};

export default ConfirmForm;