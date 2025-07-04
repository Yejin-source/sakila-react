import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCity() {
    const { cityId } = useParams();
    const [city, setCity] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/cityOne/${cityId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCity(data)});
    }, []);

    function edit() {
        fetch('http://localhost/city', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                cityId: city.cityId, 
                city: city.city,
                country: city.countryEntity?.countryId
            })
        })
        .then((res) => {
            if(res.ok) {
                alert('수정 성공')
                navigate(`/CityOne/${city.cityId}`);
            } else {
                alert('수정 실패');
            }
        });
    }

    return (
        <div>
            <h1>Edit City(cityId: {cityId})</h1>
            <div>
                city: 
                <input type="text" value={city.city} 
                    onChange={(e) => (setCity({...city, city: e.target.value}))} /><br />
                <button onClick={edit}>수정</button>
            </div>
        </div>
    )
}
