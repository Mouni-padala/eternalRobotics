import React from 'react';
import '../Assets/Css/App.css'
import '../Assets/Css/Sidebar.css'
import Sidebar from '../Components/sidebar.js';
import Maincomponent from '../Components/Maincomponent'
const App=()=>{
  return(
    <div>
      <Sidebar/>
       <Maincomponent/>
    </div>
  )
}
export default App;