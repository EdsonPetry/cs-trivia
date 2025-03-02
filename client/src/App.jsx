import { useState } from 'react'
import FlashCard from './components/FlashCard'
import './App.css'

const App = ({ questions }) => {
  const [currentCard, setCurrentCard] = useState(questions[0])
  
  const handleNext = () => {
    if (currentCard.id !== questions.length-1){
      setCurrentCard(questions[currentCard.id + 1])
    }
  }

  const handlePrev = () => {
    if (currentCard.id !== 0){
      setCurrentCard(questions[currentCard.id - 1])
    }
  }

  return (
    <>
      <h1>CS Trivia!</h1>
      <h2>Test your CS and SWE knowledge</h2>
      <h3>{questions.length} cards loaded</h3>
      <FlashCard question={currentCard.question} answer={currentCard.answer}/>

      <div>
        <button className="prevButton" onClick={handlePrev}>Prev</button>
        <button className="nextButton" onClick={handleNext}>Next</button>
      </div>
    </>
  )
}

export default App
