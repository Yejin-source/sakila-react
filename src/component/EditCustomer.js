import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCustomer() {
    const { customerId } = useParams();
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/customerOne/${customerId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCustomer(data)});
    }, []);

    function edit() {
        fetch('http://localhost/customer', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                customerId: customer.customerId, 
                firstName: customer.firstName,
                lastName: customer.lastName,
                storeId: customer.storeEntity?.storeId,
                email: customer.email,
                addressId: customer.addressEntity?.addressId,
                active: customer.active
            })
        })
        .then((res) => {
            if(res.ok) {
                alert('수정 성공')
                navigate(`/CustomerOne/${customer.customerId}`);
            } else {
                alert('수정 실패');
            }
        });
    }

    return (
        <div>
            <h1>Edit Customer(customerId: {customerId})</h1>
            <div>
                firstName: <input type="text" value={customer.firstName} onChange={(e) => (setCustomer({...customer, firstName: e.target.value}))} /><br />
                lastName: <input type="text" value={customer.lastName} onChange={(e) => (setCustomer({...customer, lastName: e.target.value}))} /><br />
                email: <input type="text" value={customer.email} onChange={(e) => (setCustomer({...customer, email: e.target.value}))} /><br />
                <button onClick={edit}>수정</button>
            </div>
        </div>
    )
}
