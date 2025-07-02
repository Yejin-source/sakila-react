import { useEffect, useState } from "react"

export default function Country() {
    // const countryList = [];
    const [countryList, setCountryList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    // API 통신 "[GET] http://localhost/country"
    useEffect(function(){
        fetch("http://localhost/countryList/"+pageNumber)
        .then(function(res){return res.json();})
        .then(function(data) {setCountryList(data.content)})  // data: Page 객체, data.content: 실제 데이터 배열
    }, [pageNumber]);  // 두 번째 인자가 빈 배열[]이면 화면이 처음 렌더링될 때 한 번만 useEffect() 실행 

    return (
        <div>
            <h1>Country</h1>
            <table border="1">
                <tr>
                    <th>country id</th>
                    <th>country</th>
                </tr>
                {
                    countryList.map((c) => (
                        <tr key={c.countryId}>
                            <td>{c.countryId}</td>
                            <td>{c.country}</td>
                        </tr>
                    ))
                }
            </table>    
            <button>이전</button>
            <button>다음</button>
        </div>
        
    )
}
