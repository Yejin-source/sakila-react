import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCustomer() {
    const [storeId, setStoreId] = useState("1");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [addressId, setAddressId] = useState("");
    const navigate = useNavigate();

    function addCustomer() {
        fetch("http://localhost/customer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                storeId: Number(storeId),
                firstName,
                lastName,
                email,
                addressId: Number(addressId)
            })
        })
        .then(res => {
            if (res.ok) {
                alert("입력 성공");
                navigate("/Customer");
            } else {
                alert("입력 실패");
            }
        });
    }

    return (
        <div>
            <h1>Add Customer</h1>
            <div>
                storeId: 
                <label>
                    <input
                        type="radio"
                        name="store"
                        value="1"
                        checked={storeId == "1"}
                        onChange={(e) => setStoreId(e.target.value)}
                    />
                    1번 매장
                </label>
                <label>
                    <input
                        type="radio"
                        name="store"
                        value="2"
                        checked={storeId == "2"}
                        onChange={(e) => setStoreId(e.target.value)}
                    />
                    2번 매장
                </label>
                <br />
                firstName: <input type="text" onChange={(e) => setFirstName(e.target.value)} /><br />
                lastName: <input type="text" onChange={(e) => setLastName(e.target.value)} /><br />
                email: <input type="text" onChange={(e) => setEmail(e.target.value)} /><br />
                addressId: <input type="number" onChange={(e) => setAddressId(e.target.value)} /><br />
                <button onClick={addCustomer}>입력</button>
            </div>
        </div>
    );
}
