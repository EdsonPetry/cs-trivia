import { useState, useEffect } from 'react';
import FlashCard from './components/FlashCard';
import './App.css';

const App = ({ questions }) => {
  const [cards, setCards] = useState(questions);
  const [currentCard, setCurrentCard] = useState(cards[0]);
  const [userGuess, setUserGuess] = useState("");

  useEffect(() => {
    shuffleCards(cards);
  }, []);

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    // reassign ids
    for (let i = array.length -1; i > 0; i--){
      array[i].id = i;
    }

    setCards([...array]);
    setCurrentCard(cards[0])
  }

  const handleShuffle = () => {
    shuffleCards(cards);
  }

  const handleNext = () => {
    if (currentCard.id !== cards.length - 1) {
      setCurrentCard(cards[currentCard.id + 1]);
    }
  }

  const handlePrev = () => {
    if (currentCard.id !== 0) {
      setCurrentCard(cards[currentCard.id - 1]);
    }
  }


  const checkGuess = (event) => {
    event.preventDefault();
    if (currentCard.answer.includes(userGuess)){
      alert("Correct!");
    } else {
      alert("Wrong!");
    }

    setUserGuess("");
  }

  const handleUserGuess = (event) => {
    setUserGuess(event.target.value);
  }

  return (
    <>
      <h1>CS Trivia!</h1>
      <h2>Test your CS and SWE knowledge</h2>
      <h3>{cards.length} cards loaded</h3>
      <FlashCard question={currentCard.question} answer={currentCard.answer} />
      <form onSubmit={checkGuess}>
        <input 
          value={userGuess} 
          onChange={handleUserGuess}
        />
        <button type="submit">Check Guess</button>
      </form>
      <div>
        <button className="shuffleButton" onClick={handleShuffle}>Shuffle</button>
        <button className="prevButton" onClick={handlePrev}>Prev</button>
        <button className="nextButton" onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default App;
