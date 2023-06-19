import React from 'react';
import '../Assets/Css/Maincomponent.css';
import ThreeBlock from '../Assets/Images/threesquare.png';
import CompaniesData from "../Assets/Json/companies.json";
const Companies=()=>{
  const { companies, totalCompanies } = CompaniesData;
    return(
        <div>
            <div className="compaines">
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
    </div>
        </div>
    )
}
export default Companies;