import logo from './logo.svg';
import './App.css';
import RMGHeader from './components/RMGHeader.tsx';
import RMGButton from './components/RMGButtonProps.tsx';
import RMGImage from './components/RMGImage.tsx';
import RMGInput from './components/RMGInput.tsx';

function App() {
  return (
    <div className="App">
      <RMGHeader>RMGHeader</RMGHeader>
      <RMGButton>RMGButton</RMGButton>
      <RMGImage>RMGImage</RMGImage>
      <RMGInput>RMGInput</RMGInput>

    
    </div>
  );
}

export default App;
