import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "./theme";


//podemos estilar CUALQUIER componente que acepte className
export const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 1.3em;

  &:hover {
    border-bottom: 1px solid #071952;
  }
`;

export const DetailsContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
`;