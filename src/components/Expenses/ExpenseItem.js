import Card from '../UI/Card';
import ExpenseDate from '../Expenses//ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2023, 2, 28); // it's a date object
    // const [title, setTitle] = useState(props.title)
    // const clickHandler = () => {
    //     setTitle('Updated!!!');
    // }
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                {/* <div>{props.date.toISOString}</div> */}
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    )
}
export default ExpenseItem;