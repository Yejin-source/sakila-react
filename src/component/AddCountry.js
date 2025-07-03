import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCountry() {
    // let country = "";
    const [country, setCountry] = useState("");
    const navigate = useNavigate();

    function addCountry() {
        // alert(`addCountry`);
        fetch("http://localhost/country", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({country: country})
        })
        .then((res) => {
            if(res.ok) { // http 상태 코드: 200
                alert("입력 성공");
                // /Country 컴포넌트를 렌더링
                navigate("/Country");  // <List to="/Country" />

            } else {  // 300, 400, 500
                alert("입력 실패");
            }   
        });
    }

    return (
        <div>
            <h1>AddCountry</h1>
            <div>
                country: <input type="text" onChange={(e) => {
                    // country = e.target.value;
                    setCountry(e.target.value);
                }} />
                <br />
                <button onClick={addCountry}>입력</button>
            </div>
        </div>
    )
}
