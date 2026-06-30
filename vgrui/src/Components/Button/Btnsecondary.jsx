import React from 'react'
import styled from 'styled-components'
export default function Btnsecondary({ myBtnname }) {
    return (
        <Mybtnsecondary>
            {myBtnname}
        </Mybtnsecondary>
    )
};

const Mybtnsecondary = styled.button`
padding:16px 40px;
border-radius:1px;
background:transparent;
border:2px solid #00C6FF;
color:white;
font-size:17px;
font-weight:600;
cursor:pointer;
transition:.4s;
box-shadow: rgb(0 198 255) 9px 9px 4px 0px;
&:hover{
background:#00C6FF;
color:#08111E;
transform:translateY(-5px);
box-shadow:0 25px 45px rgba(0,198,255,.45);
}`;
