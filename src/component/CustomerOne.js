import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CustomerOne() {
    const {customerId} = useParams();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        fetch("http://localhost/customerOne/"+customerId)
        .then((res) => {return res.json()})
        .then((data) => {setCustomer(data)});
    }, []);

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
            <button>수정</button>
            <button>삭제</button>
        </div>
    )
}
