
import About from './components/About';
import Quick from './components/Quick';
import Ig from './components/Ig';
const styles={

  height: 500,
  width: 800,
  bacgroundColor: 'red',
  display: 'inline'
}
const heigt={
  fontSize: 20,
  
  paddingTop : 10,
  position: 'left',
  display:'inline'

}



function App() {
  return (
   
      <div style={styles}  className="App">
        <button style={styles}>
        
        <p style={heigt}></p>
        <About /> <Quick /> <Ig />
        

        


        </button>
     
    
     
     

    </div>

   
    
  );
}

export default App;
