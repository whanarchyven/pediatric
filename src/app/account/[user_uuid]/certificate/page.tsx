"use client"
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {eden, useEden} from "@/helpers/sdk";

export default function CertificatePage(params: { params: { user_uuid: string } }) {
    const [userData, setUserData] = useState({ firstName: 'Иван', lastName: 'Иванов' });
    const user_uuid = params.params.user_uuid
    const {data} = useEden(() => eden.user[user_uuid].card.get())

    const {
        lastName,
        firstName,
        middleName,uuid
    } = data?.profile ?? {} as any;

    console.log(data)
    // Функция для захвата содержимого блока и создания PDF
    const downloadCertificate = () => {
        const input = document.getElementById('certificate');

        // Создание изображения из блока
        if(input){
            html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');

                // Создание PDF в альбомной ориентации
                const pdf = new jsPDF({
                    orientation: 'landscape', // Альбомная ориентация
                    unit: 'mm',
                    format: 'a4'
                });

                // Вычисляем размеры изображения и настраиваем его
                const imgWidth = 297; // Ширина страницы A4 в мм в альбомной ориентации
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                // Добавление изображения в PDF
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('certificate.pdf');  // Сохранение PDF файла
            });
        }
    };

    return (
        <div className={'p-10'}>
            <div
                id="certificate" className={'relative flex items-center justify-center'}
                style={{
                    width: '297mm',
                    height: '210mm',
                    // padding: '20px',
                    textAlign: 'center',
                    border: '1px solid #000'
                }}>
                <img className={'w-full h-full'} src={'/cert_template.jpg'}/>
                <h3 className={'absolute bottom-[90mm] text-3xl z-10 left-auto right-auto'}>{lastName} {firstName} {middleName}</h3>
            </div>

            <button className={'mt-4 bg-green flex items-center justify-center p-2 rounded-xl text-white'} onClick={downloadCertificate}>Скачать сертификат</button>
        </div>
    );}
