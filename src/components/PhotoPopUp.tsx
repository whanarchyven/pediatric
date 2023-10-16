"use client"
import React, {createRef, useState} from 'react';
import DragNDrop from "@/components/DragNDrop";
import {eden} from "@/helpers/sdk";
import FormData from "form-data";
import axios from "axios";
import {uploadFile} from "@/helpers/uploadFile";
import {isArray} from "util";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import {blobToFile} from "@/helpers/blobToFile";
import {uploadFileBlob} from "@/helpers/uploadFileBlob";
import Loading from "@/components/Loading";

interface educationPopInterface {
    closeFunc:()=>any
    user_uuid:string,
    email:string,
    imageOld:string
}

const EducationPop = ({closeFunc,user_uuid,email,imageOld}:educationPopInterface) => {
    const [image, setImage] = useState(imageOld);
    const [cropData, setCropData] = useState("#");
    const cropperRef = createRef<ReactCropperElement>();
    const [loading,setLoading]=useState(false);
    const updateProfile = async (photoUrl: string) => {
        eden.user[user_uuid].profile.post({
            uuid: user_uuid, photoUrl,
            email: email
        }).then((res) => {
            console.log(res)
            closeFunc();
            setLoading(false)
            window.location.reload();
        })
    
    }
    const onChange = (e: any) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result as any);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropperRef.current?.cropper !== "undefined") {
            cropperRef.current?.cropper.getCroppedCanvas().toBlob((blob)=>{
                if(blob){
                    const file=blobToFile(blob,"cropped.png");
                    uploadFileBlob(file).then((res)=>{
                        updateProfile(res);
                    })
                }
            })
            setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
        }
    };

    return (
        <div className={'fixed z-[999] w-full h-full left-0 top-0 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center'}>
            <div className={'lg:w-3/5 w-full bg-white p-6 rounded-lg border-green-two border-2 flex gap-8 flex-col'}>
                <div className={'flex flex-col items-center'}>
                    <div className={'flex w-full justify-between'}>
                        <p className={'text-3xl font-bold'}>Обновить фотографию</p>
                        <img onClick={()=>{closeFunc()}} className={'cursor-pointer'} src={'/close_black.svg'}/>
                    </div>
                    <div className={'mt-6 '}>
                        <input className={'w-3/4'} type="file" onChange={onChange} />
                        <Cropper
                            ref={cropperRef}
                            style={{ height: 400, width: "100%" }}
                            zoomTo={0.5}
                            initialAspectRatio={1}
                            preview=".img-preview"
                            src={image}
                            viewMode={1}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={false}
                            aspectRatio={1}
                            autoCropArea={1}
                            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                            guides={true}
                        />
                    </div>
                    <div className={'bg-green mt-6 rounded-lg text-white font-bold w-full flex items-center justify-center lg:w-96 h-12'} onClick={()=>{
                        setLoading(true)
                        getCropData()
                    }}>
                        {loading?<Loading></Loading>:'Обновить'}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EducationPop;