import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function CardFlip() {
  // Maintaining state for each card flip status
  const [flipped, setFlipped] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  // Function to toggle flip state for each card
  const flipCard = (card) => {
    setFlipped((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  // Array with dog details (including the correct image URLs)
  const dogData = [
    {
      name: "Buddy",
      image: 'https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg', // Replace with actual image URL
      age: "2 years",
      breed: "Golden Retriever",
      location: "New York",
      description: "Buddy is a friendly and playful dog looking for a loving home.",
    },
    {
      name: "Bella",
      image: "https://plus.unsplash.com/premium_photo-1683134036144-82b0a3d50f11?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      age: "3 years",
      breed: "Labrador",
      location: "California",
      description: "Bella is calm, loving, and enjoys being with people.",
    },
    {
      name: "Max",
      image: "https://plus.unsplash.com/premium_photo-1722859221349-26353eae4744?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
      age: "1 year",
      breed: "Bulldog",
      location: "Texas",
      description: "Max is energetic and loves to play with other dogs.",
    },
    {
      name: "Lucy",
      image: "https://preview.redd.it/our-goldendoodle-is-100-poodle-v0-8fae1guu0afd1.jpg?width=640&crop=smart&auto=webp&s=09970294af60fa4a156987b9b10deeff11246403", // Replace with actual image URL
      age: "4 years",
      breed: "Poodle",
      location: "Florida",
      description: "Lucy is a sweet and intelligent dog who loves to cuddle.",
    },
  ];

  return (
    <div className="cards-container">
      {dogData.map((dog, index) => {
        // Generate unique keys for each card (card1, card2, etc.)
        const cardKey = `card${index + 1}`;

        return (
          <div key={cardKey} className="card-wrapper">
            <ReactCardFlip flipDirection="horizontal" isFlipped={flipped[cardKey]}>
              {/* Front of the card */}
              <div className="card" onClick={() => flipCard(cardKey)}>
                <img src={dog.image} alt={dog.name} />
                <div className="details">
                  <h3>{dog.name}</h3>
                  <p>Age: {dog.age}</p>
                  <p>Breed: {dog.breed}</p>
                  <p>Location: {dog.location}</p>
                  
                </div>
              </div>

              {/* Back of the card */}
              <div className="card-back" onClick={() => flipCard(cardKey)}>
                <h1>Description</h1>
                <p>{dog.description}</p>
                <button onClick={() => alert(`Adopt ${dog.name}`)}>Adopt Me</button>
              </div>
            </ReactCardFlip>
          </div>
        );
      })}
    </div>
  );
}

export default CardFlip;
