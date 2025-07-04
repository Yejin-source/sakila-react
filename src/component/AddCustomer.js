import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddCustomer() {
    const [customer, setCustomer] = useState({
        storeId: 1,
        firstName: '',
        lastName: '',
        email: '',
        addressId: 0
    });
    const navigate = useNavigate();

    function addCustomer() {
        fetch('http://localhost/customer', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customer)
        })
        .then(res => {
            if (res.ok) {
                alert('입력 성공');
                navigate('/Customer');
            } else {
                alert('입력 실패');
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
                        name="storeId"
                        value="1"
                        checked={customer.storeId == "1"}
                        onChange={(e) => (setCustomer({...customer, storeId:e.target.value}))}
                    />
                    1번 매장
                </label>
                <label>
                    <input
                        type="radio"
                        name="storeId"
                        value="2"
                        checked={customer.storeId == "2"}
                        onChange={(e) => (setCustomer({...customer, storeId:e.target.value}))}
                    />
                    2번 매장
                </label>
                <br />
                firstName: <input type="text" onChange={(e) => (setCustomer({...customer, firstName: e.target.value}))} /><br />
                lastName: <input type="text" onChange={(e) => (setCustomer({...customer, lastName: e.target.value}))} /><br />
                email: <input type="text" onChange={(e) => (setCustomer({...customer, email: e.target.value}))} /><br />
                addressId: <input type="number" onChange={(e) => (setCustomer({...customer, addressId: Number(e.target.value)}))} /><br />
                <button onClick={addCustomer}>입력</button>
            </div>
        </div>
    );
}
