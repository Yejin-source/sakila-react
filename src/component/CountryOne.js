import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function CountryOne() {
    const {countryId} = useParams();
    const [country, setCountry] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("http://localhost/countryOne/"+countryId)
        .then((res) => {return res.json()})
        .then((data) => {setCountry(data)});
    }, []);

    return (
        <div>
            <h1>CountryOne(countryId: {countryId})</h1>
            {/* 백틱 사용: {`CountryOne (countryId: ${countryId})`} 
                -> 변수 앞뒤에 문자열을 자유롭게 붙일 수 있음 */}
            <table border="1">
                <tr>
                    <th>countryId</th>
                    <td>{country.countryId}</td>
                </tr>
                <tr>
                    <th>country</th>
                    <td>{country.country}</td>
                </tr>
                <tr>
                    <th>lastUpdate</th>
                    <td>{country.lastUpdate}</td>
                </tr>
            </table>
            <button onClick={() => navigate(`/addCity/${countryId}`)}>add city</button>
            <button>수정</button>
            <button>삭제</button>
        </div>
    )
 }

