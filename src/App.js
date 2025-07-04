import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import Home from './component/Home';
import Country from './component/Country';
import City from './component/City';
import Customer from './component/Customer';
import Address from './component/Address';
import CountryOne from './component/CountryOne';
import AddCountry from './component/AddCountry';
import CityOne from './component/CityOne';
import AddCity from './component/AddCity';
import AddressOne from './component/AddressOne';
import AddAddress from './component/AddAddress';
import CustomerOne from './component/CustomerOne';
import AddCustomer from './component/AddCustomer';
import EditCountry from './component/EditCountry';
import EditCity from './component/EditCity';
import EditAddress from './component/EditAddress';
import EditCustomer from './component/EditCustomer';

export default function App() {

    return (
        <BrowserRouter>
            <div>
                {/* header */}
                <h1 className="text-yellow-500">Sakila Project</h1>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/Country">country</Link></li>
                    <li><Link to="/City">city</Link></li>
                    <li><Link to="/Address">address</Link></li>
                    <li><Link to="/Customer">customer</Link></li>
                </ul>
                <hr />

                {/* content ---------------------------------- */}
                
                <Routes>
                    <Route path='/' element={<Home />} /> {/* 라우터 -> 컴포넌트 */}

                    {/* Country CURD */}
                    <Route path='/Country' element={<Country />} />
                    <Route path='/CountryOne/:countryId' element={<CountryOne />} />
                    <Route path='/AddCountry' element={<AddCountry />} />
                    <Route path='/EditCountry/:countryId' element={<EditCountry />} />

                    {/* City CURD */}
                    <Route path='/City' element={<City />} />
                    <Route path='/CityOne/:cityId' element={<CityOne />} />
                    <Route path='/AddCity/:countryId' element={<AddCity />} />
                    <Route path='/EditCity/:cityId' element={<EditCity />} />

                    {/* Address CURD */}
                    <Route path='/Address' element={<Address />} />
                    <Route path='/AddressOne/:addressId' element={<AddressOne />} />
                    <Route path='/AddAddress' element={<AddAddress />} />
                    <Route path='/EditAddress/:addressId' element={<EditAddress />} />

                    {/* Customer CURD */}
                    <Route path='/Customer' element={<Customer />} />
                    <Route path='/CustomerOne/:customerId' element={<CustomerOne />} />
                    <Route path='/AddCustomer' element={<AddCustomer />} />
                    <Route path='/EditCustomer/:customerId' element={<EditCustomer />} />
                </Routes>

                {/* ------------------------------------------ */}

                {/* footer */}
                <hr />
                <div>
                    Copyright@ GDJ91.
                </div>
            </div>
        </BrowserRouter>
    );
}
