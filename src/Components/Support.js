import React from 'react';
import SupportData from "../Assets/Json/supportTickets.json"
import '../Assets/Css/Maincomponent.css';
import Person2Icon from '@mui/icons-material/Person2';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Support=()=>{
    const { supportTickets } = SupportData;
    return(
        <div className='High-priority-tickets-block'>
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
</div>
    )
}
export default Support;