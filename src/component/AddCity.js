import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function AddCity() {
    const { countryId } = useParams();
    const [country, setCountry] = useState({});
    const [city, setCity] = useState({
        city: '',
        countryId: Number(countryId) 
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/countryOne/${countryId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCountry(data)});
    }, []);

    function addCity() {
        fetch('http://localhost/city', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(city)
        })
        .then((res) => {
            if(res.ok) {
                alert('입력 성공');
                // /City 컴포넌트를 렌더링
                navigate('/City');
            } else {
                alert('입력 실패');
            }
        });
    }

    return (
        <div>
            <h1>AddCity</h1>
            <div>
                <p>country: <strong>{country.country}</strong> (countryId: {countryId})</p>
                city: 
                <input type="text" onChange={(e) => (setCity({...city, city: e.target.value}))} />
                <br /><br />
                <button onClick={addCity}>입력</button>
            </div>
        </div>
    )
}
