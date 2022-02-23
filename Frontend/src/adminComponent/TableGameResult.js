import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
// import { BiEdit } from 'react-icons/bi';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { FcViewDetails } from 'react-icons/fc';
import MaterialTable from "material-table";
const TableGameResult = () => {
    return (
        <>
        <div style={{padding:'30px'}}>

            <MaterialTable
                title="Promotion"
                columns={[
                    { title: 'ResultID',field:'resultid', type: 'numeric' },
                   
                    { title: 'Time',field:'time', type: 'numeric' },
                    { title: 'Result', field: 'result' ,type:'text'},
                  
                   
                ]}
                data={[
                    { resultid: 9, userid: 12345, time: 99, result: "b",
                    amount:77},
                    { resultid: 7, userid: 12345, time: 55, result: "a",
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

export default TableGameResult

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