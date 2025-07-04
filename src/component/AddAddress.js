import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddAddress() {
    const [address, setAddress] = useState({});
    const navigate = useNavigate();

    function addAddress() {
        fetch('http://localhost/address', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(address)
        })
        .then(res => {
            if (res.ok) {
                alert('입력 성공');
                navigate('/Address');
            } else {
                alert('입력 실패');
            }
        });
    }

    return (
        <div>
            <h1>Add Address</h1>
            address: <input type="text" onChange={(e) => (setAddress({...address, address: e.target.value}))} /><br />
            district: <input type="text" onChange={(e) => (setAddress({...address, district: e.target.value}))} /><br />
            cityId: <input type="number" onChange={(e) => (setAddress({...address, cityId: Number(e.target.value)}))} /><br />
            postalCode: <input type="number" onChange={(e) => (setAddress({...address, postalCode: Number(e.target.value)}))} /><br />
            phone: <input type="number" onChange={(e) => (setAddress({...address, phone:Number(e.target.value)}))} /><br />
            <button onClick={addAddress}>입력</button>
        </div>
    );
}
