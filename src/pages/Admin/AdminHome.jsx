import React from 'react';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';

const AHome = () => (
  <>
    <div>
      <h1>Dashboard</h1>
      <div className="date">
        <input type="date" />
      </div>
      <div className="insights">
        <div className="sales">
          <span><AutoGraphOutlinedIcon /></span>
          <div className="middle">
            <div className="left">
              <h3>Total Sale</h3>
              <h1>$25,000</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy={38} r={36} />
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">
            last 24 hours
          </small>

        </div>
        <div className="expenses">
          <span><AutoGraphOutlinedIcon /></span>
          <div className="middle">
            <div className="left">
              <h3>Total Expense</h3>
              <h1>$25,000</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy={38} r={36} />
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">
            last 24 hours
          </small>

        </div>
        <div className="income">
          <span><AutoGraphOutlinedIcon /></span>
          <div className="middle">
            <div className="left">
              <h3>Total Sale</h3>
              <h1>$25,000</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx="38" cy={38} r={36} />
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">
            last 24 hours
          </small>

        </div>

      </div>

      {/* -----------end of insights ------------- */}
      <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th />
            </tr>

          </thead>
          <tbody>
            <tr>

              <td>New York Boulevad</td>
              <td>85631</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">Details</td>
            </tr>
            <tr>

              <td>New York Boulevad</td>
              <td>85631</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">Details</td>
            </tr>
            <tr>

              <td>New York Boulevad</td>
              <td>85631</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">Details</td>
            </tr>
            <tr>

              <td>New York Boulevad</td>
              <td>85631</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">Details</td>
            </tr>
          </tbody>

        </table>
        <a href="">Show All</a>
      </div>
    </div>

  </>
);

export default AHome;
