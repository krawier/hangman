import { useState } from "react"
import words from "./listOfWords.json"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { KeyBoard } from "./KeyBoard"

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => words[Math.floor(Math.random() * words.length)])

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return ( 
    <div style = {{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center",
    }}>
      <div style={{

        fontSize:"2rem",
        textAlign:"center",

      }}>

          Lose/Win

      </div>

      <HangmanDrawing></HangmanDrawing>
      <HangmanWord guessedLetters={guessedLetters} word={wordToGuess}></HangmanWord>
      
      <div style={{alignSelf: "stretch"}}>

      <KeyBoard></KeyBoard>


      </div>
      


    </div>
  )

  console.log(wordToGuess)
  
  return <h1>Hello there!</h1>
}


export default App