import React, { useState } from 'react'
import './Questions.scss'
import Accordion from './Accordion';

const Questions = () => {
  const[active, setActive] = useState("How do I choose the right travel destination for me?");
  return (
   <div className="questions section container">

    <div className="secHeading">
      <h3>Frequently Asked Questions</h3>
    </div>

    <div className="secContainer grid">
      <div className="accordion grid">

        <Accordion title="How do I choose the right travel destination for me?" desc="Consider your interests, budget, desired experiences, 
        and the type of environment you enjoy.Research destinations that align with your preferences and offer attractions or activities 
        you find appealing." active={active} setActive={setActive} />

        <Accordion title="What are the best time to visit specific destinatons?" desc="Reasearch the climate, weather patterns, and peak tourist
        seasons of the destination you are interested in. Opt for the shoulder seasons when the weather is pleasant, and crowds are, if possible." 
        active={active} setActive={setActive} />

        <Accordion title="How can I find budjet-friendly travel options and deals?" desc="Look for travel apps, disconts on flights and accommodations,
        and flexible with your travel apps or websites that offer competitive prices. Being flexible with your travel dates can also help you find 
        better deals." 
        active={active} setActive={setActive} />

        <Accordion title="What essential items should i pack for any adventure?" desc="Pack appropriate clothing, toiletries, travel documents 
        (passport, visa, etc.), essential medications, and any specific gear needed for your adventure(e.g., hiking boots, snorikeling gear)." 
        active={active} setActive={setActive} />      

      </div>

      <div className="form">
        <div className="secHeading">
          <h4>Do you any specific question?</h4>
          <p>Please fill the form below and our dedicated team will get intouch with
             you as soon as possible</p>
        </div>

        <div className="formContent grid">
          <input type="email" placeholder="Eneter email address" />
          <textarea placeholder="Enetr your question here"></textarea>
          <button className='btn'>Submit Inquiry</button>
        </div>

      </div>
    </div>
   </div>
  )
}

export default Questions