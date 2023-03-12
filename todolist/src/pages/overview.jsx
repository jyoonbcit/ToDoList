import React from 'react';

const Overview = () => {

    return (
        <>
            {document.getElementById('storageItems').innerHTML = JSON.stringify(localStorage)}
        </>
    )
}
export default Overview