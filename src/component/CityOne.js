import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CityOne() {
    const {cityId} = useParams();
    const [city, setCity] = useState({});

    useEffect(() => {
        fetch("http://localhost/cityOne/"+cityId)
        .then((res) => {return res.json()})
        .then((data) => {setCity(data)});
    }, []);

    return (
        <div>
            <h1>CityOne(cityId: {cityId})</h1>
            <table border="1">
                <tr>
                    <th>cityId</th>
                    <td>{city.cityId}</td>
                </tr>
                <tr>
                    <th>city</th>
                    <td>{city.city}</td>
                </tr>
                <tr>
                    <th>country</th>
                    <td>({city.countryEntity?.countryId}) {city.countryEntity?.country}</td>  
                    {/* ?.(옵셔널 체이닝): countryEntity가 존재하면 country 값 출력 */}
                </tr>
                <tr>
                    <th>lastUpdate</th>
                    <td>{city.lastUpdate}</td>
                </tr>
            </table>
            <button>수정</button>
            <button>삭제</button>
        </div>
    )
}
