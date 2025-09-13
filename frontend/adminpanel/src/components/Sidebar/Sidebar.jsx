import React from 'react';
import { Link } from 'react-router-dom';
import {assets} from '../../assets/assets';

const Sidebar = ({sidebarVisible}) => {
  return (
    <div className={`border-end bg-white ${sidebarVisible ? '': 'd-none'}`} id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/add">Add Food</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/list">List Food</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders">Overview</Link>
            </div>
    </div>
  )
}

export default Sidebar