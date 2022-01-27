import {useState} from 'react'
import RenderHeader from './components/Header/index'
import RenderFooter from './components/Footer/index';
import RenderAbout from './components/About/index';
import RenderPortfolio from './components/Portfolio/index';
import RenderContact from './components/Contact/index';
import './App.css'

function App() {
  const [page, setPage] = useState('About');

  const renderPageLogic = () =>{
    if(page === 'About'){
      return (
        <>
          <RenderAbout />
          <RenderFooter/>
        </>
    )
    } else if(page === 'Portfolio'){
      return (
        <>
          <RenderPortfolio />
          <RenderFooter/>
        </>
    )
    } else{
      return <RenderContact/>
    }
  }

  return (
    <>
      <RenderHeader setPage={setPage}/>
      {renderPageLogic()}
    </>
  );
}

export default App;
