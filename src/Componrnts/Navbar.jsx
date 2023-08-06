import React, { useState } from 'react'

export const Navbar = (props) => {
 

  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode1} navbar-${props.mode1}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <div class={`form-check form-switch text-${props.mode1=='light'?'dark':'light'}`}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.convert}/>
  <label class="form-check-label " htmlFor="flexSwitchCheckDefault" >Enable {props.mode1=='light'?'dark':'light'} Mode</label>


   </div>

      </div>

    </div>
    <button  type="button"  className="btn btn-outline-primary mx-1" onClick={() => props.butcolor('primary')}>
  Blue
</button>
<button type="button" class="btn btn-outline-secondary mx-1" onClick={() =>props.butcolor("secondary")}>Gray</button>
<button type="button" class="btn btn-outline-success mx-1" onClick={() =>props.butcolor("success")}>Green</button>
<button type="button" class="btn btn-outline-danger mx-1" onClick={() =>props.butcolor("danger")}>Red</button>
<button type="button" class="btn btn-outline-warning mx-1" onClick={() =>props.butcolor("warning")}>Yellow</button>
<button type="button" className="btn bg-dark btn-outline-warning mx-1" onClick={() =>props.butcolor("dark")} style={{ color: 'white'}}>  Black</button>
  </nav>
  </div>
  )
}
