import Card from '../ui/card';
import classes from './newtaskform.module.css';
import { Link } from 'react-router-dom';
import Overview from '../../pages/overview';


function NewTaskForm() {

    function populate(title, description, dueDate) {
        const task = {
            title: title,
            description: description,
            dueDate: dueDate
        };
        localStorage.setItem(title, JSON.stringify(task));
        console.log(JSON.stringify(localStorage));
        <Overview />;
    }

    function submitBtn() {
        var title = document.getElementById('title').value;
        var description = document.getElementById('description').value;
        var dueDate = document.getElementById('due-date').value;
        populate(title, description, dueDate);
    }

    // get current date in Day Month Date Year format
    const currentDate = new Date().toDateString();

    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Task Title</label>
                    <input type='text' required id='title' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5'></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor='current-date'>Current Date</label>
                    <input type='text' id='current-date' defaultValue={currentDate} disabled />
                </div>
                <div className={classes.control}>
                    <label htmlFor='due-date'>Due Date</label>
                    <input type='datetime-local' id='due-date' required />
                </div>
                <Link to='../overview' className='btn'>
                    <div className={classes.actions}>
                        <button onClick={submitBtn}>Add Task</button>
                    </div>
                </Link>
            </form>
        </Card>
    );
}
export default NewTaskForm;