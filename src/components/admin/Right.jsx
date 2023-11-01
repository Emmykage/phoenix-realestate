import React from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlinePlus } from 'react-icons/ai';
import { BsFillMoonFill } from 'react-icons/bs';
import { TfiShine } from 'react-icons/tfi';

import { NavLink } from 'react-router-dom';
import img from '../../assets/user/no-profile-picture-icon-14.jpg';

const Right = () => (
  <div className="right">
    <div className="top">
      <button id="menu-btn">
        <span><AiOutlineMenu /></span>

      </button>
      <div className="theme-toggler">
        <span className="active"><TfiShine /></span>
        <span><BsFillMoonFill /></span>
      </div>
      <div className="profile">
        <div className="info">
          <p>
            Hey,
            <b>Yankee</b>
          </p>
          <small className="text-muted">Admin</small>
        </div>
        <div className="profile-photo">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
    <div className="recent-updates">
      <h2>Recent update</h2>
      <div className="updates">
        <div className="update">
          <div className="profile-photo">
            <img src={img} alt="" />
          </div>
          <div className="message">
            <p>
              <b>Mike Jayson</b>
              {' '}
              received his order of night lion dron
            </p>
            <small className="text-muted">2 minutes ago</small>
          </div>
        </div>
        <div className="update">
          <div className="profile-photo">
            <img src={img} alt="" />
          </div>
          <div className="message">
            <p>
              <b>John Doe</b>
              {' '}
              received his order of night lion dron
            </p>
            <small className="text-muted">7 minutes ago</small>
          </div>
        </div>

      </div>
    </div>
    <div className="sales-analytics">
      <h2>Sales Analytics</h2>
      <div className="item online">
        <div className="icon">
          <span><AiOutlineShoppingCart /></span>
        </div>
        <div className="right">
          <div className="info">
            <h3>Online Orders</h3>
            <small className="text-muted">
              last 24 hours
            </small>
          </div>
          <h5 className="success">+39</h5>
          <h3>345</h3>
        </div>
      </div>
      <div className="item offline">
        <div className="icon">
          <span><AiOutlineShoppingCart /></span>
        </div>
        <div className="right">
          <div className="info">
            <h3>OFFLINE ORDERS</h3>
            <small className="text-muted">
              last 24 hours
            </small>
          </div>
          <h5 className="success">+39</h5>
          <h3>345</h3>
        </div>
      </div>
      <div className="item customers">
        <div className="icon">
          <span><AiOutlineShoppingCart /></span>
        </div>
        <div className="right">
          <div className="info">
            <h3>NEW CUSTOMERS</h3>
            <small className="text-muted">
              last 24 hours
            </small>
          </div>
          <h5 className="success">+39</h5>
          <h3>849</h3>
        </div>
      </div>
      <div className="item add-product">
        <div>
          <span className="">
            <AiOutlinePlus />

          </span>
          <NavLink to="/admin/add_asset"><h3>Add Product</h3></NavLink>
        </div>
      </div>
    </div>

  </div>
);

export default Right;
