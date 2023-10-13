import React, {useEffect, useState} from 'react';

interface dragndropInterface {
    setFile:(arg:any)=>any,
}
const DragNDrop = ({setFile}:dragndropInterface) => {
    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef(null);

    const [tempFile,setTempFile]=useState()

    // handle drag events
    const handleDrag = function(e:any) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function(e:any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]&&setFile!=undefined) {
            console.log(e.dataTransfer.files);
            setFile(e.dataTransfer.files)
            setTempFile(e.dataTransfer.files[0])
        }
    };

    // triggers when file is selected with click
    const handleChange = function(e:any) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]&&setFile!=undefined) {
            console.log(e.target.files);
            setFile(e.target.files)
            setTempFile(e.target.files[0])
        }

    };

// triggers the input when the button is clicked

    return (
        <form id="form-file-upload" className={'border-0'} onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <input className={'hidden'} ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                {tempFile!=undefined?<div className={'flex border-green border-2 w-full justify-center bg-green p-3 rounded-lg items-center gap-2'}>
                    <img className={'w-12 aspect-square'} src={'/upload_file_white.svg'}/>
                    <p className={'text-white'}>Загружено!</p>
                </div>:<div className={'flex border-green border-2 bg-white p-3 w-full justify-center rounded-lg items-center gap-2'}>
                    <img className={'w-12 aspect-square'} src={'/upload_file.svg'}/>
                    <p>Загрузите файл</p>
                </div>}
            </label>
            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        </form>
    );
};

export default DragNDrop;