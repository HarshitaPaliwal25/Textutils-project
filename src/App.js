import './App.css';
// import Layout from './components/layout';
// import ClassComponent from './components/ClassComponent';
import Header from './components/header';
import Footer from './components/footer';
import TextForm from './components/TextForm';
import { useEffect,useState } from 'react';
// import Form from './components/Form';
// import Alert from './components/Alert';
import About from './components/About';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';;
function App() {
  // const [alert,setAlert] = useState(null);

  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
      
  // }

  const [mode,setMode] = useState('light');
  const toggle=()=>{
    if(mode==='light'){
     setMode('dark')
     document.body.style.backgroundColor='#002244';
    // showAlert("Dark mode has been enabled","Success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
     // showAlert("Light mode has been enabled","Success");
    }
  }

  const[test,setTest] = useState(true)

  const incrementCounter=()=>{
    setTimeout(()=>{
      setTest(false)
    },10000);
  }

  useEffect(()=>{
      incrementCounter()
  },[test])
  return (
    <>
    <Router>
    <Header title="TextUtils" abouttext="AboutUs" home="Home" mode={mode} toggle={toggle}/>
     <div className="main">
      <div className="container">
      {/* <Layout myAttribute="test"/>
      {test && <ClassComponent/>} */}
      {/* <Alert alert={alert}/> */}

        
      <Routes>
        
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm  heading="Enter Text to Analyze" mode={mode}></TextForm>} />
      </Routes>
  
     
      </div>
      
     </div>
     
 <Footer/>
 </Router>
    </>
   
   
  );
}

export default App;
