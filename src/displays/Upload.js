import React, { useState } from 'react';
import Alert from '../Alert';

export default function Upload() {
    const [InputState, setInputState] = useState('');
    const [ImageSource,setImageSource] = useState('');
    const [selectedImg, setSelectedImg] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const ChangeInputImage = (e) => {
        const file = e.target.files[0]; 
        previewImage(file);
        setSelectedImg(file);
        setInputState(e.target.value);
    };

    const previewImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageSource(reader.result);
        };
    };

    const ImageSubmit = (e) =>{
        e.preventDefault();
        if(selectedImg ){
            const reader = new FileReader();
            reader.readAsDataURL(selectedImg);
            reader.onloadend = () => {
                ImageUpload(reader.result);
            };
            reader.onerror = () => {
                console.error('file read error');
                setErrorMessage('FILE READ ERROR');
            };
        }
        else return;
    };

    const ImageUpload = async(EncodedImage) => {
        try{
            //make an API request to Cloudinary
            await fetch('/api/upload',
            {
                method: 'POST',
                body: JSON.stringify({ data: EncodedImage}),
                headers: { 'Content-Type' : 'application/json'}
            });
            setInputState('');
            setImageSource('');
            setSuccessMessage('View image in the gallery');
        } catch (error){
            console.error(error);
            setErrorMessage('Upload issues');
        }
    };

    return ( 
        <div>
            <h1 className="title">Upload an Image</h1>
            <Alert msg={errorMessage} type='danger'/>
            <Alert msg={successMessage} type='success'/>
            <form className='form' onSubmit = {ImageSubmit}>
                <input 
                    type="file" 
                    placeholder="Select an image"
                    value = {InputState}
                    onChange={ChangeInputImage}/>
                <button className="btn" type="submit" >
                    Submit
                </button>
            </form>
            
            {ImageSource && (
                <img
                    src={ImageSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    );   
}