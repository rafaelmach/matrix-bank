import styled from "styled-components"
import { Link } from "react-scroll"


export const Button = styled(Link)`
   border-radius: 50px;
   background: ${({primaryColor}) => (primaryColor ? "#01BF71" : "#010606")};
   white-space: nowrap;
   padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
   color: ${({darkText}) => (darkText ? "#010606" : "#fff")};
   font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
   font-weight: 600;
   outline: none;
   border: none;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primaryColor}) => (primaryColor ? "#fff" : "#01BF71")}; 
    }

`