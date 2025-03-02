import { useState } from 'react'
import FlashCard from './components/FlashCard'
import './App.css'

const App = () => {
  const questions = [
    {
      question: "What programming language was originally called \"Oak\" before being renamed?",
      answer: "Java was originally named \"Oak\" by its creator James Gosling, inspired by a tree outside his office window."
    },
    {
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheets"
    },
    {
      question: "The first computer bug was an actual insect. What kind was it?",
      answer: "A moth. In 1947, Grace Hopper found a moth trapped in a Harvard Mark II computer relay, coining the term \"debugging.\""
    },
    {
      question: "What year was the first version of HTML released?",
      answer: "1993"
    },
    {
      question: "Which company created React.js?",
      answer: "Facebook (now Meta)"
    },
    {
      question: "What does the acronym \"API\" stand for?",
      answer: "Application Programming Interface"
    },
    {
      question: "What does \"DOM\" stand for in web development?",
      answer: "Document Object Model"
    },
    {
      question: "What symbol is used to start a CSS ID selector?",
      answer: "# (hash/pound symbol)"
    },
    {
      question: "What's the mascot of GitHub?",
      answer: "Octocat"
    },
    {
      question: "What was the first popular JavaScript framework?",
      answer: "jQuery"
    },
  ]

  const [currentCard, setCurrentCard] = useState(questions[0])

  return (
    <>
      <h1>CS Trivia!</h1>
      <h2>Test your CS and SWE knowledge</h2>
      <FlashCard question={currentCard.question} answer={currentCard.answer}/>

      <div>
        <button>Prev</button>
        <button>Next</button>
      </div>
    </>
  )
}

export default App
