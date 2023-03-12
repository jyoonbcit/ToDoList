import React from 'react';
import './overview.css';

const Overview = () => {
    const items = Object.entries(localStorage);

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
                        <tr key={key}>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td>{dueDate}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Overview;
