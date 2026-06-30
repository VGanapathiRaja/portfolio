import React from 'react'
import styled from 'styled-components'
export default function Btn({ myBtnName }) {
    return (
        <Mybtnprimary>

            {myBtnName}

        </Mybtnprimary>
    )
};

const Mybtnprimary = styled.button`
padding:16px 40px;
border:none;
border-radius:1px;
background:linear-gradient(
135deg,
#7B2FF7,
#00C6FF
);
color:white;
font-size:17px;
font-weight:600;
cursor:pointer;
transition:.4s;
box-shadow: rgb(0 198 255) 9px 9px 4px 0px;
&:hover{
transform:translateY(-5px);
box-shadow:0 25px 45px rgba(0,198,255,.45);
}`;
