import *  as React from 'react';
import './App.css';
import Header  from './Header';
import Footer  from './Footer';
import Employees  from './Employees';
import GroupedTeamMembers  from './GroupedTeamMembers';
import Nav  from './Nav';
import NotFound  from './NotFound';


import { useState } from "react";
import {useEffect} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  
  const [selectedTeam,setTeam]=useState( JSON.parse(localStorage.getItem('selectedItem'))||"Team B");
  const [employees,setEmployees] =useState(JSON.parse(localStorage.getItem("employeeList")) || [{
    id:1,
    fullName:"Johny01",
    designation:"Js Developer",
    gender:"male",
    teamName:"TeamA"
  },
  {
    id:2,
    fullName:"Johny02",
    designation:"Js Developer",
    gender:"female",
    teamName:"TeamA"
  },
  {
    id:3,
    fullName:"Johny03",
    designation:"Js Developer",
    gender:"male",
    teamName:"TeamA"
  },
  {
    id:4,
    fullName:"Johny04",
    designation:"Js Developer",
    gender:"female",
    teamName:"TeamB"
  },
  {                                  
    id:5,
    fullName:"Johny05",
    designation:"Js Developer",
    gender:"female",
    teamName:"TeamB"
  },  
  {
    id:6,
    fullName:"Johny06",
    designation:"Js Developer",
    gender:"male",
    teamName:"TeamB"
  },  
  {
    id:7,
    fullName:"Johny07",
    designation:"Js Developer",
    gender:"male",
    teamName:"TeamC"
  },  
  {
    id:8,
    fullName:"Johny08",
    designation:"Js Developer",
    gender:"female",
    teamName:"TeamC"
  },  
  {
    id:9,
    fullName:"Johny09",
    designation:"Js Developer",
    gender:"female",
    teamName:"TeamC"
  },                                   
  {
    id:10,
    fullName:"Johny10",
    designation:"Js Developer",
    gender:"female",
    teamName:"TeamD"
  },
  {
    id:11,
    fullName:"Johny11",
    designation:"Js Developer",
    gender:"male",
    teamName:"TeamD"
  },  
  {
    id:12,
    fullName:"Johny12",
    designation:"Js Developer",
    gender:"male",
    teamName:"TeamD"
  }]); 
  useEffect(() => {
    localStorage.setItem('employeeList' ,JSON.stringify(employees));
  },[employees]);
  
  useEffect(() => {
    localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))
  },[selectedTeam]);




  
  
  
  
  
  function handleEmployeeCardClick(event){
    const transformedEmployees= employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
 ?(employee.TeamName === selectedTeam)?{...employee,teamName:''}:{...employee,teamName:selectedTeam}
      :employee);
        setEmployees(transformedEmployees);                                    
  }
    
  
  
  
  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }
  return (
    <Router>
      <Nav/>
     <Header 
       selectedTeam={selectedTeam} 
       teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}/>
      <Routes>
          <Route path='/' 
            element={<Employees 
              employees={employees} 
              selectedTeam={selectedTeam} 
              handleEmployeeCardClick={handleEmployeeCardClick}
              handleTeamSelectionChange={handleTeamSelectionChange}/>} >
          </Route>
        <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers  employees ={employees}  selectedTeam = {selectedTeam} setTeam = {setTeam} />}>
        </Route>
        <Route path='*' element={<NotFound/>}>
        </Route>
      </Routes>
      <Footer/>
    </Router>
    
  );
}
export default App;