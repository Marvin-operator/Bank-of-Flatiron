import React from "react";

function Transaction({trans,  setOnDelete}) {

  console.log(trans)
    // delete
    const handleDelete = (id) =>{
      fetch(`http://localhost:3000/transactions`, {
        method: 'DELETE',
       
      })
        .then((response) => response.json())
        .then((res) => {
          // alert("Transaction deleted successfully")
          setOnDelete(id)
        });
    }


  return (
<tr >
          <td>
            <p >{trans && trans.date}</p>
          </td>
          <td>
            <p >{trans && trans.description}n</p>
          </td>
          <td>
            <p >{trans && trans.category}</p>
          </td>
          <td>
            <p >{trans && trans.amount}</p>
          </td>
          <td>
           <button onClick={()=>handleDelete(trans && trans.id)}>Delete</button>
          </td>
        </tr>
  );
}

export default Transaction;