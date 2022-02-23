import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
// import { BiEdit } from 'react-icons/bi';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { FcViewDetails } from 'react-icons/fc';
import MaterialTable from "material-table";
const TablePromo = () => {
    return (
        <>
        <div style={{padding:'30px'}}>

            <MaterialTable
                title="Promotion"
                columns={[
                    { title: 'PromotionID',field:'promoid', type: 'numeric' },
                    { title: 'PromotionCode',field:'promocode', type: 'numeric' },
                    { title: 'PromotionDescription', field: 'description' ,type:'text'},
                    { title: 'Validity', field: 'validity', type: 'numeric' },
                   
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

export default TablePromo

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