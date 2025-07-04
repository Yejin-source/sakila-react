import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

export default function EditAddress() {
    const { addressId } = useParams();
    const [address, setAddress] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost/addressOne/${addressId}`)
        .then((res) => {return res.json()})
        .then((data) => {setAddress(data)});
    }, []);

    function edit() {
        fetch('http://localhost/address', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                addressId: address.addressId, 
                address: address.address,
                district: address.district,
                cityId: address.cityEntity?.cityId,
                postalCode: address.postalCode,
                phone: address.phone
            })
        })
        .then((res) => {
            if(res.ok) {
                alert('수정 성공')
                navigate(`/AddressOne/${address.addressId}`);
            } else {
                alert('수정 실패');
            }
        });
    }

    return (
        <div>
            <h1>Edit Address(addressId: {addressId})</h1>
            <div>
                address: <input type="text" value={address.address} onChange={(e) => (setAddress({...address, address: e.target.value}))} /><br />
                district: <input type="text" value={address.district} onChange={(e) => (setAddress({...address, district: e.target.value}))} /><br />
                postalCode: <input type="number" value={address.postalCode} onChange={(e) => (setAddress({...address, postalCode: Number(e.target.value)}))} /><br />
                phone: <input type="number" value={address.phone} onChange={(e) => (setAddress({...address, phone: Number(e.target.value)}))} /><br />
                <button onClick={edit}>수정</button>
            </div>
        </div>
    )
}
