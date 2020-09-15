import React, {useEffect, useState} from 'react';
import Card from "../card";

const App = () => {
    const [data, fetchData] = useState([]);
    const getData = async () => {
        const req = await fetch('entities.json');
        const res = await req.json();
        fetchData(res.response);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className="card-list">
            {data.map(el => <Card key={el.id} {...el}/>)}
        </div>
    );
}

export default App;
