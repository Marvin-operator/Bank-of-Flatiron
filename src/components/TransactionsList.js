import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions, setOnDelete}) 
{

  


 
  
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"></h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {
          transactions && transactions.map((trans)=>(
           <Transaction key={trans && trans.id}  setOnDelete={ setOnDelete} trans={trans} />

          ))
        }
      </tbody>
    </table>
  );
}

export default TransactionsList;