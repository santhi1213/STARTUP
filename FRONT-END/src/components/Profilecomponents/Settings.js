import React from "react";
import styles from "./settings.module.css";
import Profile from "../Profile";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
function Details() {

  const Options=[
    {
      header:{
        name:"Account Security",
      },
      values:[
        {
        name:"Password",
        description:"Allow users to change their password.",
        tags:[]
        },
        {
          name:"Two-Factor Authentication",
          description:"allow users to enable or disable two-factor authentication for added security.",
          tags:[],

        },
      ],
    },
    {
      header:{
        name:"Privacy Settings",
      },
      values:[
        {
          name:"Visibility",
          description:"Allow users to control the visibility of their profile",
          tags:[],
        },
        {
          name:"Data Sharing",
          description:"Provide options for users to choose what information they want to share with others.",
          tags:[],
        },
      ],
    },
    {
      header:{
      name:"Linked Accounts",
    },
    values:[
      {
        name:"Social Media",
        description:" Provide options to link or unlink social media accounts for easy sharing and authentication.",
        tags:[],
      },
    ],
  },
  {
    header:{
      name:"Language and Localization",
    },
    values:[
      {
        name:"Language Preference",
        description:"Allow users to choose their preferred language for the interface",
        tags:[],
      },
      {
        name:"Time Zone",
        description:"users can set their time zone for accurate time-related features.",
        tags:[],
      },
    ],
  },
  {
    header:{
      name:"Data and Privacy",
    },
    values:[
      {
      name:"Data Download",
      description:"Allow users to request a download of their data or account information",
      tags:[],
      },
      {
        name:"Data Deletion",
        description:" users can delete their account and associated data",
        tags:[],
      },
    ],
  },

  ];

  const [visibleOptions,setVisibleOptions]=useState(Options);


  const onChange=(e)=>{
    e.preventDefault();
    const value= e.target.value;
    console.log('value',value);

    if(value.trim().length ===0){

      setVisibleOptions(Options);
      return;
    }


    const returnedItems=[];


    visibleOptions.forEach((Option,index)=>{

      const foundOptions = Option.values.filter(item => {
        return (
          item.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1 ||
          item.description.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1
        );
      });
      
      returnedItems[index]={
        header:{
          name:Option.header.name,
        },
        values:foundOptions,
      };
      
      if (Option.header.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1) {
        returnedItems[index] = {
          header: {
            name: Option.header.name,
          },
          values: Options[index].values,
        };
      }
      
    });


    setVisibleOptions(returnedItems);
  };
  return (
    <>
   
      <Profile />
      <div className={styles.set}>
       <div>
        <h2>Settings</h2>
        <input type="text" className="form-control mt-5"
        onChange={onChange}
        placeholder="Search...."/>
        <div>
        
        </div>
       {visibleOptions.map(Option =>
       <div key={Option.header.name } className="mt-5 mt-2">
        
        <h5><b>{Option.header.name}</b></h5>
        
        <div>
        
        {Option.values.map((value) =>(
          <div key={value.name}> 

          <ul className="list-group">
            <li className="list-group-item mb-2">
              <h6><b>{value.name}</b></h6>
              <p>{value.description}</p>
            </li>
          </ul>
          </div>))}

        </div>


       </div>)}
       </div>
      </div>

    </>
  );
}

export default Details;
