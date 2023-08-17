import React, { useState } from 'react';

const InterestSelectionScreen = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const imageList = [
    { id: 'image1', src: 'https://m.xcite.com/media/catalog/product/cache/1/small_image/350x/9df78eab33525d08d6e5fb8d27136e95/d/e/dell_g15_5515_amd_rayzen_7_16gb_ram_512gb_ssd_15.6-inch_gaming_laptop_1.jpg' ,alt: 'Image 1' ,name:'Gaming Laptop'},
    { id: 'image2', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVnwkMhUAz4esl6-BLQEubLXUSyTHIlAk2w&usqp=CAU', alt: 'Image 2' ,name:'Home Appliances'},
    { id: 'image3', src: 'https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg', alt: 'Image 3', name:'Movies' },
    { id: 'image4', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFou3Bb-ZBrKdn7wZUzXO_QsOhNUZFi_S5vQ&usqp=CAU', alt: 'Image 4',name:'Fitness Products' },
    { id: 'image5', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJGizvjIW604T9KRRPSLNyJRDkU8h9epPhQ&usqp=CAU', alt: 'Image 5',name:'Cloths' },
    { id: 'image6', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXD99xIZ3AYmznTNYdvE5_WG52qN67Dk2v7Q&usqp=CAU', alt: 'Image 5',name:'Beauty Products' },
    { id: 'image7', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVaW3PcQg_MCaytQGhENpOiTkEtRW46hX3ow&usqp=CAU', alt: 'Image 5',name:'Fruits & Vegetables' },
    { id: 'image8', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGynAX1eGcLtCnhVpglm1WWFHLNgw_D6X5eQ&usqp=CAU', alt: 'Image 5',name:'Mobile Phones' },
    { id: 'image9', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC1TMmIF1O4cckKFYKxTSdyzVu96Lkums2gA&usqp=CAU', alt: 'Image 5',name:'Travel' },
    { id: 'image10', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXS_OWQrJcDnxrCVCxABR-UjLEXBYew3bVSw&usqp=CAU', alt: 'Image 5',name:'Crafts' },
    
   
  ];

  const handleImageClick = (imageId) => {
    if (selectedImages.includes(imageId)) {
      
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
     
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  return (
    <div className='Interest'>
      <h1> Choose Your Interests</h1>
      <div className="image-container">
     
        {imageList.map((image) => (
          <div
            key={image.id}
            
            className={`image-wrapper ${selectedImages.includes(image.id) ? 'selected' : ''}`}
            onClick={() => handleImageClick(image.id)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="image-name">{image.name}</div>
            {selectedImages.includes(image.id) && (
              <div className="tick-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00f">
                  <path d="M0 11l2-2 5 5L20 3l2 2L7 22z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className='Nextbtn'>Next </button>
    </div>
  );
};

export default InterestSelectionScreen;





