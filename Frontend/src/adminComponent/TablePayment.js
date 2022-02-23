



import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
// import { BiEdit } from 'react-icons/bi';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { FcViewDetails } from 'react-icons/fc';
import MaterialTable from "material-table";
const TablePayment = () => {
    return (
        <>
        <div style={{padding:'30px'}}>

            <MaterialTable
                title="Promotion"
                columns={[
                    { title: 'PaymentID',field:'paymentid' },
                    { title: 'Payment',field:'payment' },
                    { title: 'PaymentHeading', field: 'heading' },
                    { title: 'PaymentContent', field: 'content' },
                    { title: 'PaymentImg', field: 'img' }
                   
                ]}
                data={[
                    { promoid: 9, promocode: 12345, description: 'ahbhuih', validity: 63 },
                    { promoid: 55, promocode: 475, description: 'lorem', validity: 20 },
                ]}
                actions={[
                    {
                        icon: 'save',
                        tooltip: 'Save User',
                        onClick: (event, rowData) => alert("You saved " + rowData.name)
                    }
                ]}
            />
        </div>
               
        </>
    )
}

export default TablePayment

const Action = styled.div`
    display:flex;
    font-size: 20px;
`;

const Button = styled.div`
    margin-Left: 1.5rem;
    cursor: pointer;
    

    @media screen and (min-width: 768px) {
        margin-Left: 5rem;
      }
`;