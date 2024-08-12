import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() 
{
  const [transactions, setTransactions] = useState([])
  const [onDelete, setOnDelete] = useState(false)
  const [onAddTrans, setOnAddTrans] = useState(false)

  useEffect(()=>{

    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => {

       setTransactions(data)

      } );

  }, [onDelete, onAddTrans])


  return (
    <div>
      <Search />
      <AddTransactionForm setOnAddTrans={setOnAddTrans} onAddTrans={onAddTrans}/>
      <TransactionsList transactions={transactions} setOnDelete={setOnDelete} />
    </div>
  );
}

export default AccountContainer;
