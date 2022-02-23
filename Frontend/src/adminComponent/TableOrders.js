import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
// import { BiEdit } from 'react-icons/bi';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { FcViewDetails } from 'react-icons/fc';
import MaterialTable from "material-table";
const TableOrders = () => {
    return (
        <>
        <div style={{padding:'30px'}}>

            <MaterialTable
                title="Promotion"
                columns={[
                    { title: 'OrderID',field:'orderid', type: 'numeric' },
                    { title: 'UserID',field:'userid', type: 'numeric' },
                    { title: 'Time',field:'time', type: 'numeric' },
                    { title: 'CardType', field: 'cardtype' ,type:'text'},
                    { title: 'Amount', field: 'amount', type: 'numeric' },
                   
                ]}
                data={[
                    { orderid: 9, userid: 12345, time: 99, cardtype: "b",
                    amount:77},
                    { orderid: 77, userid: 1234577, time: 44, cardtype: "a",
                    amount:77},
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

export default TableOrders

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