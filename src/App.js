import './App.css';
import Navbar from './components/Navbar';
import Buttons from './components/buttons/Buttons';
import Displayarea from './components/Displayarea';
import Button2 from './components/buttons/Button2';
import Button3 from './components/buttons/button3';


function App() {
  return (
    <div className="bgimage">
      <Navbar/>
    <Displayarea />
    <Buttons/>
    <Button2/>
    <Button3/>
 
    </div>
  );
}

export default App;
