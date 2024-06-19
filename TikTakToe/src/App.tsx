import './App.css'
import Xs from "./Xs.tsx"
import Os from "./Os.tsx"
import Grid from "./grid.tsx"
import Buttons from './button.tsx'

function App() {

  return (
    <>
      <Grid/>
      <Buttons Top="50%" Left="50%"/>
      <Buttons Top="50%" Left="38.75%"/>
      <Buttons Top ="50%" Left="61.25%"/>
      <Buttons Top ="26.75%" Left="50%"/>
      <Buttons Top ="73.25%" Left="50%"/>
      <Buttons Top ="26.75%" Left = "38.75%" />
      <Buttons Top ="26.75%" Left = "61.25%" />
      <Buttons Top ="73.25%" Left= "38.75%" />
      <Buttons Top = "73.25%" Left= "61.25%" />
    </>
  )
}

export default App
