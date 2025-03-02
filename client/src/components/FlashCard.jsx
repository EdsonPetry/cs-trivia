
const FlashCard = ({ question, answer }) => {

    return (

        <div className="flashcard">
            <div className="question">
                {question}
            </div>
            <div className="answer">
                {answer}
            </div>
        </div>
    )
}

export default FlashCard