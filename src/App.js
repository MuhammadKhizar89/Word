import logo from './logo.svg';
import './App.css';
import { Navbar } from './Componrnts/Navbar';
import { Textbox } from './Componrnts/Textbox';
import { useState } from 'react';
import { Alert } from './Componrnts/Alert';

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color1, setcolor] = useState('primary');

const showcolor=(xy)=>
{
  setcolor(xy);
  console.log(xy);
}
  const showalert = (x, y) => {
   
    setAlert({
      condi: x,
      message: y,
    });
  
    // Set the alert to disappear after 1.5 seconds
    setTimeout(() => {

      setAlert(null);

    }, 2000);

  };

  function convert() {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Success', 'Light Mode Enabled');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showalert('Success', 'Dark Mode Enabled');
    }
  }

  return (
<>
<Navbar mode1={mode} convert={convert} aler={alert} butcolor={showcolor}/>
<Alert aler={alert}/>

<Textbox mode1={mode} aler={showalert} butcolor={color1}/>


</>
  );
}

export default App;
