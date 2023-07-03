import React, {useState} from 'react';

interface dragnDropInterface {
    setFile?:(arg:FileList)=>any
}

const DragNDrop = ({setFile}:dragnDropInterface) => {
    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef<HTMLInputElement>(null);

    const [tempFile,setTempFile]=useState<File>()

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
    const onButtonClick = () => {
        if(inputRef.current){
            inputRef.current.click();
        }
    };

    return (
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                {tempFile!=undefined?<div className={'flex items-center'}>
                    <img src={'/images/icons/done.svg'}/>
                    <p className={'ml-3 font-normal max-w-xl opacity-100 text-red whitespace-pre-wrap text-left'}>{tempFile.name} <br/>
                        <strong className={'font-bold'}>Успешно загружено!</strong> </p>
                    {/*<button className="upload-button" onClick={onButtonClick}>Upload a file</button>*/}
                </div>:<div className={'flex items-center'}>
                    <img src={'/smile.svg'}/>
                    <p className={'ml-3 font-normal opacity-100 text-red text-left'}>Нажмите или перетащите изображение</p>
                    {/*<button className="upload-button" onClick={onButtonClick}>Upload a file</button>*/}
                </div>}
            </label>
            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        </form>
    );
};

export default DragNDrop;