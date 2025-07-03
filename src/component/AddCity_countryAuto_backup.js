// [백업용 파일]
// 나라 자동완성 기능을 구현한 AddCity 컴포넌트
// 전체 country 리스트를 조회하는 API를 구현하지 않아서 보류..


import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddCity() {
    const [city, setCity] = useState("");
    const [countryKeyword, setCountryKeyword] = useState("");
    const [countryId, setCountryId] = useState(0);
    const [countryList, setCountryList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const navigate = useNavigate();


    // countryList 가져오기
    useEffect(() => {
        fetch("http://localhost/countryList/1")  // 또는 전체 조회 API
        .then(res => res.json())
        .then(data => {
            setCountryList(data.content);  // data.content: 나라 배열
        });
    }, []);

    // 자동완성용 필터링
    useEffect(() => {
        if (countryKeyword.length > 0) {
            const result = countryList.filter(c => 
                c.country.toLowerCase().includes(countryKeyword.toLowerCase())
            );
            setFilteredList(result);
        } else {
            setFilteredList([]);
        }
    }, [countryKeyword, countryList]);

    function addCity() {
        if (!city || !countryId) {
            alert("도시 이름과 나라를 모두 입력해주세요.");
            return;
        }

        fetch("http://localhost/city", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                city: city,
                countryId: Number(countryId)
            })
        })
        .then((res) => {
            if(res.ok) {
                alert("입력 성공");
                // /City 컴포넌트를 렌더링
                navigate("/City");
            } else {
                alert("입력 실패");
            }
        });
    }

    return (
        <div>
            <h1>AddCity</h1>
            <div>
                city: <input type="text" onChange={(e) => {
                    // city = e.target.value;
                    setCity(e.target.value);
                }} />
                <br />
                country: 
                <input
                    type="text"
                    value={countryKeyword}
                    placeholder="나라 이름 입력"
                    onChange={(e) => setCountryKeyword(e.target.value)}
                />
                {filteredList.length > 0 && (
                    <ul>
                        {filteredList.map((c) => (
                            <li
                                key={c.countryId}
                                onClick={() => {
                                    setCountryId(c.countryId);
                                    setCountryKeyword(c.country);  // 선택된 country 표시
                                    setFilteredList([]);  // 리스트 닫기
                                }}
                            >
                                {c.country}
                            </li>
                        ))}
                    </ul>
                )}
                <br />
                <button onClick={addCity}>입력</button>
            </div>
        </div>
    )
}
