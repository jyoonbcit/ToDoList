import React from 'react';

const Overview = () => {

    return (
        <>
            <p id='storageItems'>
                {JSON.stringify(localStorage)}
            </p>
        </>
    )
}
export default Overview