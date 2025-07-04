import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export default function CustomerOne() {
    const {customerId} = useParams();
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/customerOne/${customerId}`)
        .then((res) => {return res.json()})
        .then((data) => {setCustomer(data)});
    }, []);

    function remove() {
        if(window.confirm('삭제하시겠습니까?')) {
            fetch(`http://localhost/customer/${customerId}`, {method: 'DELETE'})
            .then((res) => {
                if(res.ok) {  // ex) http code 200
                    navigate('/Customer');
                    window.alert('삭제 성공');
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
            <h1>CustomerOne(customerId: {customerId})</h1>
            <table border="1">
                <tr>
                    <th>customerId</th>
                    <td>{customer.customerId}</td>
                </tr>
                <tr>
                    <th>firstName</th>
                    <td>{customer.firstName}</td>
                </tr>
                <tr>
                    <th>lastName</th>
                    <td>{customer.lastName}</td>
                </tr>
                <tr>
                    <th>storeId</th>
                    <td>{customer.storeEntity?.storeId}</td>
                </tr>
                <tr>
                    <th>email</th>
                    <td>{customer.email}</td>
                </tr>
                <tr>
                    <th>address</th>
                    <td>({customer.addressEntity?.addressId}) {customer.addressEntity?.address}</td>
                </tr>
                <tr>
                    <th>active</th>
                    <td>{customer.active}</td>
                </tr>
                <tr>
                    <th>createDate</th>
                    <td>{customer.createDate}</td>
                </tr>
                <tr>
                    <th>lastUpdate</th>
                    <td>{customer.lastUpdate}</td>
                </tr>
            </table>
            <button onClick={() => {navigate(`/EditCustomer/${customerId}`)}}>수정</button>
            <button onClick={remove}>삭제</button>
        </div>
    )
}
