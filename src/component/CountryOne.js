import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export default function CountryOne() {
    const { countryId } = useParams();
    const [country, setCountry] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost/countryOne/${countryId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCountry(data)});
    }, []);

    function remove() {
        if(window.confirm('삭제하시겠습니까?')) {
            // window.alert('삭제 API 통신');
            fetch(`http://localhost/country/${countryId}`, {method: 'DELETE'})
            .then((res) => {
                if(res.ok) {  // ex) http code 200
                    navigate('/Country');
                    window.alert('삭제 성공');  // window 생략 가능
                } else {  // ex) http code 500
                    window.alert('삭제 실패');
                }
            })
        } else {
            window.alert('삭제를 취소했습니다.');
        }
    }

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
            <button onClick={() => {navigate(`/addCity/${countryId}`)}}>add city</button>
            {/* <Link to="/EditCountry">수정</Link> */}
            <button onClick={() => {navigate(`/EditCountry/${countryId}`)}}>수정</button>
            <button onClick={remove}>삭제</button>
        </div>
    )
 }

