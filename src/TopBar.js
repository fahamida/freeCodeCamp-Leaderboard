import React, { Component } from 'react';
import './TopBar.css'


class TopBar extends Component{

    render(){
        return(
            <div>
            <header>
            <span>
           <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank"> A React Project</a><a className='fab fa-react'></a><br />
           <p className="name1"><a href="http://www.fahamida.com" rel="noopener noreferrer" target="_blank" >By:Fahamida</a></p>
            </span>   
           </header>
            </div>
        );
    }
}

export default TopBar;