import React, {Component} from 'react';
import data from "../data/data.json";
import {Link} from 'react-router-dom';

export default class All extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
            <h2>Users</h2>
            <table className="table">
              <tbody>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Details</th>
                </tr>
                {data.users.map((user, i) => {
                  var URL = "/details/" + i;
                 return (
                 <tr key={user.dob}>
                    <td>
                    <img src={user.picture.thumbnail} alt=""></img>
                    </td>
                    <td>{(user.first + " " + user.last).toString()}</td>
                    <td>
                    <Link to={URL}>Details</Link>
                    </td>
                    </tr>
                    )
                })
                }
              </tbody>
            </table>
            <Link to="/">Main</Link>
          </div>
        )
    }
};