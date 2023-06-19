import React from 'react';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded';
import '../Assets/Css/Sidebar.css'
import '../Assets/Css/App.css'
import Image from '../Assets/Images/men.jpg'
const Sidebar=()=>{
    return(
        <div className="Sidebar">
            <div className="Eternal-header">
                <div className="icons"><AllInclusiveIcon/> </div>
  <h5>Eternal Robotics</h5>
  </div>
  <div className="images-profile">
    <img src={Image} alt="Image"/>
    <h5>John state</h5>
    <span>superadmin</span>
    </div> 
    <div className="home-bar">
      <div className="home-icon"><HomeIcon/></div>
    <h6>Home</h6>
    </div>
    <div className="admin-bar">
      <div className="admin-icon">< SupervisorAccountRoundedIcon /></div>
    <h6>Admin</h6>
    </div>
    <div className="features-bar">
      <div className="features-icon"><FeaturedPlayListRoundedIcon/></div>
    <h6>Features</h6>
    </div>
    <div className="projects-bar">
      <div className="projects-icon">< InsertChartRoundedIcon/></div>
      <h6>Projects</h6>
    </div>
    <div className="companies-bar">
      <div className="companies-icon">< HomeRepairServiceRoundedIcon/></div>
      <h6>Companies</h6>
    </div>
    <div className="finances-bar">
      <div className="finances-icon">< CreditCardRoundedIcon/></div>
      <h6>Finances</h6>
    </div>
    <div className="support-bar">
      <div className="support-icon">< Person2RoundedIcon /></div>
      <h6>Support</h6>
    </div>
    <div className="sign-out"> <h6>Sign out</h6> 
    <div className="sign-icon"><FastForwardRoundedIcon/></div>
    </div>
  </div>
    )
}
export default Sidebar;