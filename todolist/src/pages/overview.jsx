import React from 'react';
import './overview.css';

const Overview = () => {
    const items = Object.entries(localStorage);

    function removeItem() {
        var item = document.getElementById('removeItem').value;
        localStorage.removeItem(item);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                {items.map(([key, value]) => {
                    const { title, description, dueDate } = JSON.parse(value);
                    return (
                        <>
                            <tr key={key}>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td>{dueDate}</td>
                            </tr>
                        </>
                    );
                })}

                <label for='removeItem'> Enter name of item to remove: </label>
                <input type='text' name='removeItem' id='removeItem'></input>
                <button id='submitRemove' onClick={removeItem}> Remove </button>
            </tbody>
        </table>
    );
};

export default Overview;
