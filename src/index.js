import React from "react";
import ReactDOM from 'react-dom';
import Header from './component/header';
import Bodytag from './component/body';
import Footer from './component/footer';
function Call(){
  return (
    <div>
      <Header/>
      <Bodytag/>
      <Footer/>
    </div>
  )
}
ReactDOM.render(<Call/>,document.getElementById('root'));