import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const questions = [
  {
    question: "What programming language was originally called \"Oak\" before being renamed?",
    answer: "Java was originally named \"Oak\" by its creator James Gosling, inspired by a tree outside his office window.",
    id: 0
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets",
    id: 1
  },
  {
    question: "The first computer bug was an actual insect. What kind was it?",
    answer: "A moth. In 1947, Grace Hopper found a moth trapped in a Harvard Mark II computer relay, coining the term \"debugging.\"",
    id: 2
  },
  {
    question: "What year was the first version of HTML released?",
    answer: "1993",
    id: 3
  },
  {
    question: "Which company created React.js?",
    answer: "Facebook (now Meta)",
    id: 4
  },
  {
    question: "What does the acronym \"API\" stand for?",
    answer: "Application Programming Interface",
    id: 5
  },
  {
    question: "What does \"DOM\" stand for in web development?",
    answer: "Document Object Model",
    id: 6
  },
  {
    question: "What symbol is used to start a CSS ID selector?",
    answer: "# (hash/pound symbol)",
    id: 7
  },
  {
    question: "What's the mascot of GitHub?",
    answer: "Octocat",
    id: 8
  },
  {
    question: "What was the first popular JavaScript framework?",
    answer: "jQuery",
    id: 9
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App questions={questions} />
  </StrictMode>,
)
