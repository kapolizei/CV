import React, {useState} from 'react';

import axios from 'axios';


export default function AirAlertApi() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const testURL = 'https://ubilling.net.ua/aerialalerts/'
    const myInit = {
        method: 'GET',
        mode: 'no-cors',
    };

    const myRequest = new Request(testURL, myInit);

    const handleClick = async () => {
        fetch(myRequest).then(function(response) {
            return response;
        }).then(function(response) {
            console.log(response);
        }).catch(function(e){
            console.log(e);
        });
    };


    return (
        <>
            <div className='flex justify-center items-center h-screen flex-col'>
                <p>AirAlert Api Integration</p>
                <button onClick={handleClick}  className='bg-amber-300 m-4 p-4 '>Request</button>
                {error && <p>Ошибка: {error.message}</p>}
                {data && <pre>{JSON.stringify(data, null, 2)}</pre>} {/* Отображение данных */}
            </div>

        </>
    )
}