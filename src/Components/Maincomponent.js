import React  from 'react';
import '../Assets/Css/Maincomponent.css';
// import Person2Icon from '@mui/icons-material/Person2';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// import Block from "./Block.png";
// import Accept from "./Accept.png";
// import ThreeBlock from './threesquare.png';
// import SupportData from "./supportTickets.json"
// import TaskBlockData from "./taskblock.json";
// import CompaniesData from "./companies.json";
import Support from '../Components/Support.js';
import Companies from '../Components/Companies.js';
import Task from '../Components/Task.js';
const Maincomponent=()=>{

    // const { supportTickets } = SupportData;
    // const { companies, totalCompanies } = CompaniesData;
    // const { tasks } = TaskBlockData;

    
  return(
    <div>
        <div className="maincomponent">
            <h5 className="home-title">Home</h5>
            {/* <div className="maincomponent-first"> */}
            {/* <div className='High-priority-tickets-block'>
                <h5>Support</h5>
                <div className="support">
            {supportTickets.map((ticket, index) => (
              <div className="team-member" key={index}>
                <div className="team-member-block">
                  <h6>{ticket.title}</h6>
                  <div className="inner-support">
                    <Person2Icon />
                    <span>{ticket.teamMembers[0].name}</span>
                    <WhatsAppIcon />
                  </div>
                </div>
                <div className="team-member-content">
                  <button>Access settings</button>
                  <span>{ticket.date}</span>
                </div>
              </div>
            ))}
     <p><a href="#">view all</a></p>
</div>
            </div> */}
            <div className="Support-block">
              <Support/>
                    {/* <div className="task-block">
  <span className="title-span">Tasks for review</span>
  {tasks.map((task) => (
    <div key={task.date}>
      <p className="title-date">{task.date}</p>
      <ul>
        {task.items.map((item, index) => (
          <li key={index}>
            <span className="john-name">{item.name}</span>
            <a href="#">Feature: {item.feature}</a>
            <div className="image-content">
              {item.images.map((image, imgIndex) => (
                <div key={imgIndex} className="image-container">
                  {image.isCorrect ? (
                    <img src={Accept} alt="Accept" className="side-by-side-image"  />
                  ) : (
                    <img src={Block} alt="Block" className="side-by-side-image" />
                  )}
                  <img src={image.src} alt={image.alt} className="side-by-side-image"  id="side-by-side-image-content"/>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  ))}
                    </div> */}
                <Task/>
                </div>
                <Companies/>
        </div>
          {/* <div className="compaines">
      <div className="companies-heading">
        <h5>Companies</h5>
        <p>{totalCompanies}</p>
      </div>
      <div className="client-block">
        {companies.map((company) => (
          <div key={company.id} className="clients">
            <div className="square-block">
              <img src={ThreeBlock} alt="block" />
            </div>
            <div>
              <h6 className="client">{company.name}</h6>
              <div className="companies-content">
                <h6>Industry</h6>
                <span>{company.industry}</span>
              </div>
              <div className="companies-content">
                <h6>Country</h6>
                <span>{company.country}</span>
              </div>
            </div>
          </div>
        ))}
        <a href="View all" className="viewlink">
          View All
        </a>
      </div>
          </div> */}
  
          
    </div>
  )
}
export default Maincomponent