import React, { useState } from 'react';
import axios from 'axios';

export default function AirAlertApi() {
    const [state, setState] = useState({
        data: null,
        filteredData: [],
        loading: false,
        error: null
    });

    const handleClick = async () => {
        setState(prevState => ({ ...prevState, loading: true, error: null }));

        try {
            const response = await axios.get('https://corsproxy.io/?https://api.alerts.in.ua/v1/alerts/active.json?token=1add404ab96111b703903690fcacee69c165cb9cab2203');
            console.log(response.data);  // Для отладки


            if (Array.isArray(response.data.alerts)) {
                const alerts = response.data.alerts;


                const filteredAlerts = alerts
                    .filter(item => item.location_title)
                    .map(item => ({
                        location_title: item.location_title,
                        alert_type: item.alert_type
                    }));

                setState(prevState => ({
                    ...prevState,
                    data: alerts,
                    filteredData: filteredAlerts,
                    loading: false
                }));
            } else {
                console.error('Response data.alerts is not an array:', response.data.alerts);
                setState(prevState => ({ ...prevState, error: new Error('Received alerts data is not an array.'), loading: false }));
            }
        } catch (error) {
            console.error(error, 'error');
            setState(prevState => ({ ...prevState, error: error, loading: false }));
        }
    };

    return (
        <>
            <div className='flex justify-center items-center h-screen flex-col'>
                <p>AirAlert Api Integration</p>
                <a href='http://ivan.lucent.services'>
                    <button className='bg-amber-300 m-2 p-2'>Home</button>
                </a>
                <button onClick={handleClick} className='bg-amber-300 m-4 p-4'>Request</button>

                {state.loading && <p>Загрузка...</p>}
                {state.error && <p>Ошибка: {state.error.message}</p>}

                {state.filteredData.length > 0 ? (
                    <ul>
                        {state.filteredData.map((alert, index) => (
                            <li key={index}>
                                {alert.location_title} - {alert.alert_type}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Нет данных для отображения.</p>
                )}

            </div>
        </>
    );
}
