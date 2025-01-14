import React from 'react'
import Button from 'react-bootstrap/Button';
import dog1pic from '../assets/dog1pic.jpg';
import dog2pic from '../assets/dog2pic.jpg'; // Assuming dog2pic.jpg exists
import dog3pic from '../assets/dog3pic.jpg'; // Assuming dog3pic.jpg exists
import dog4pic from '../assets/dog4pic.jpg'; // Assuming dog4pic.jpg exists

const Body = () => {
  return (
    <div>
         <>
      <div classname="buttons">
        <Button variant="primary" size="lg">
          ADOPT
        </Button>
        <Button variant="secondary" size="lg">
          DONATE
        </Button>
        <Button variant="secondary" size="lg">
          SPONSOR
        </Button>
      </div>
      <div className='infosec'>
      <p className="info-text">Adopting a dog is one of the most rewarding experiences you can have. Not only does it provide a loving home for a dog in need, but it also brings joy, companionship, and unconditional love into your life. Shelters are filled with dogs of all breeds, sizes, and personalities, many of whom have had difficult pasts but are eager to find a family that will care for them. By adopting, you not only give a dog a second chance at happiness but also help reduce the number of homeless animals. Whether you’re looking for an active companion, a cuddly friend, or a loyal protector, there’s a dog waiting for you to give them a forever home. Adopting a dog is truly a life-changing experience for both you and the dog, creating a bond that lasts a lifetime.
        </p>
        <div className="images-container">
          <img src={dog1pic} alt="dog 1" className="image1" />
          <img src={dog2pic} alt="dog 2" className="image2" />
          <img src={dog3pic} alt="dog 3" className="image3" />
          <img src={dog4pic} alt="dog 4" className="image4" />
        </div>
      </div>
      
      
    </>
    </div>
    
  )
}

export default Body