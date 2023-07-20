import Card from '../UI/Card';
import ExpenseDate from '../Expenses//ExpenseDate';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {
    // const expenseDate = new Date(2023, 2, 28); // it's a date object
    const [title, setTitle] = useState(props.title)
    const clickHandler = () => {
        setTitle('Updated!!');
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            {/* <div>{props.date.toISOString}</div> */}
            <div className='expense-item__description'>
                <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}
export default ExpenseItem;