import React, {useState, useEffect} from 'react';
import {Image} from 'cloudinary-react';

export default function Gallery(){
    const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };
    //ensure image is loaded once
    useEffect(() => {
        loadImages();
    }, []);
    return (
        <div>
            <h1 className='title'>Your Images</h1>
            <div className="gallery">
                {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName= 'soms'
                            publicId={imageId}
                            width="300"
                            crop="scale"
                        />
                    ))}
            </div>
        </div>
    );
}