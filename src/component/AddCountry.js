import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCountry() {
    const [country, setCountry] = useState({});  // 객체 형태로 선언 (백엔드 설계와 통일)
    const navigate = useNavigate();

    function addCountry() {
        fetch('http://localhost/country', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(country)  // country 객체 전체를 JSON 형태로 전송
        })
        .then((res) => {
            if(res.ok) { // http 상태 코드: 200
                alert('입력 성공');
                // /Country 컴포넌트를 렌더링
                navigate('/Country');  // <List to='/Country' />

            } else {  // 300, 400, 500
                alert('입력 실패');
            }   
        });
    }

    return (
        <div>
            <h1>AddCountry</h1>
            <div>
                country: 
                <input type="text" 
                    onChange={(e) => 
                        // 기존 country 객체 복사 후 country 속성만 새 값으로 업데이트
                        // 스프레드 연산자(...)는 기존 객체를 펼쳐 복사할 때 사용
                        (setCountry({...country, country: e.target.value}))}
                />
                <br />
                <button onClick={addCountry}>입력</button>
            </div>
        </div>
    )
}
