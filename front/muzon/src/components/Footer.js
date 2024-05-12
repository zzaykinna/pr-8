import React from 'react';
import logo from '../img/logo-muzon-white.png';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter bgColor='#6E4A4A' className='text-center text-lg-left' style={{ backgroundColor: "#102804" }}>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol className='d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                        <img
                            src={logo}
                            width="150"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        <h5 style={{ color: '#fff', fontWeight: '200', marginTop: '1rem' }}>Мы всегда с вами на связи:</h5>
                        <p style={{ marginTop: '1rem' }}>
                            8 (915) 537-78-23 &nbsp; &nbsp;
                            8 (930) 657-45-34
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
}