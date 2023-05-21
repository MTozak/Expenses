import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id : 'e1',
      title : 'Toilet Paper',
      amount : '48.2',
      date : new Date(2022,6,14)
    },
    {
      id : 'e2',
      title : 'Car Insurance',
      amount : '260.2',
      date : new Date(2022,7,15)
    },
    {
      id : 'e3',
      title : 'New Phone',
      amount : '195.2',
      date : new Date(2022,0,16)
    },
    {
      id : 'e4',
      title : 'New Desk',
      amount : '94.2',
      date : new Date(2022,5,19)
    },
  ]

  return <div>
    <h1>Expenses</h1>
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
    <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    
   
 </div>;
   
 
  
}

export default App;
