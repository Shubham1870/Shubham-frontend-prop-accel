import React, { useState } from 'react';
import "./plan.css"

const Plan=()=>{
    const [isHighlightedMonth, setIsHighlightedMonth] = useState(false);
  const [isHighlightedYear, setIsHighlightedYear] = useState(false);

  const toggleHighlightMonth = () => {
    setIsHighlightedMonth(true);
    setIsHighlightedYear(false);
  };

  const toggleHighlightYear = () => {
    setIsHighlightedMonth(false);
    setIsHighlightedYear(true);
  };
    return(
        <>
        <h1 id="background-header">Podcast</h1>
<div id="third-section">
    <section id="plan-section-1"><h1>
        Choose Your Plan
    </h1>
    <h5 id="plan-head-1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta erat et malesuada tempus. Fusce nec nunc ut enim tincidunt finibus. natis blandit nisl in suscipit. Aenean laoreet consequat ultrices.</h5>
    
    <div style={{ border: '1px solid blueviolet', width: '10%',marginLeft:"47rem" }}><button
        className={`toggle-button ${isHighlightedMonth ? 'highlighted' : ''}`}
        onClick={toggleHighlightMonth}
      >
        Month|
      </button>
      <button
        className={`toggle-button ${isHighlightedYear ? 'highlighted' : ''}`}
        onClick={toggleHighlightYear}
      >
        |Year
      </button>
      </div>
     </section>
    <section class="section1">
  <div class="card">
    <h3>Basic Plan</h3>
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta erat et malesuada tempus.</h6>
    <div className="price">
      <span>$54</span>
      <span>/  month</span>
    </div>
    
        <li>free access to video class</li>
        <li>free access to video class</li>
        <li>free access to video class</li>
      
    <div className="plan-button">
        <button>Start free trial</button>
    </div>
  </div>
  <div class="card"><h3>Premium Plan</h3>
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta erat et malesuada tempus.</h6>
    <div className="price">
      <span>$54</span>
      <span>/  month</span>
    </div>
        <li>free access to video class</li>
        <li>free access to video class</li>
        <li>free access to video class</li>
    <div className="plan-button">
        <button>Start free trial</button>
    </div></div>
  <div class="card"><h3>Basic Plan</h3>
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta erat et malesuada tempus.</h6>
    <div className="price">
      <span>$54</span>
      <span>/  month</span>
    </div>
    
        <li>free access to video class</li>
        <li>free access to video class</li>
        <li>free access to video class</li>
      
    <div className="plan-button">
        <button>Start free trial</button>
    </div></div>
    </section>
</div>

        </>
    )
}
export default Plan