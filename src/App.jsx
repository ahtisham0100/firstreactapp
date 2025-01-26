import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Heading  from './assets/components/Heading'
import Navbar from './assets/components/Navbar' 
import Button from './assets/components/Button'
function App(props) {
var name="Muhammad Ahtisham"
  return (
    <>    

    <h1 className="text-secondary"> {props.title} </h1> 
    <Button/>
 <img style='width:100px ' src={solidLogo} /> 
 <img style='width:100px' src={viteLogo} />
<h3 > {<Heading name={name} />} </h3>
</>
  )
}
 


function Logo(){ 
  let img= "assets/solid.svg"; 
  return ( 
    <img src={img}/>
  )
}
export default App
