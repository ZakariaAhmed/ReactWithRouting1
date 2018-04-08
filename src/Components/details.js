import React, {Component} from 'react';
import data from "../data/data.json";
import {Link} from 'react-router-dom';

const Details = ({match}) => (
    <div>
      <h2>{data.users[match.params.index].first + " " + data.users[match.params.index].last}</h2>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <p>Gender:</p>
              <p>Title:</p>
              <p>Firstname:</p>
              <p>Lastname:</p>
              <p>Street:</p>
              <p>City:</p>
              <p>State:</p>
              <p>Zip:</p>
              <p>Phone:</p>
              <p>Cell:</p>
              <p>Email:</p>
            </td>
            <td>
              <p>{data.users[match.params.index].gender}</p>
              <p>{data.users[match.params.index].title}</p>
              <p>{data.users[match.params.index].first}</p>
              <p>{data.users[match.params.index].last}</p>
              <p>{data.users[match.params.index].street}</p>
              <p>{data.users[match.params.index].city}</p>
              <p>{data.users[match.params.index].state}</p>
              <p>{data.users[match.params.index].zip}</p>
              <p>{data.users[match.params.index].phone}</p>
              <p>{data.users[match.params.index].cell}</p>
              <p>{data.users[match.params.index].email}</p>
            </td>
            <td>
              <img src={data.users[match.params.index].picture.large} alt={"Picture of "+data.users[match.params.index].first+" "+data.users[match.params.index].last}></img>
            </td>
          </tr>
        </tbody>
      </table>
      <p><Link to="/all">Back</Link></p>
    </div>
  )

  export default Details;