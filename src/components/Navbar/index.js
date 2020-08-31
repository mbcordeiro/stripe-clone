import React from "react";

import { Products, Developers, Company } from "../Content";

import { Container, DropdownStyles } from "./styles";

import { DropdownOption, DropdownProvider } from "../Dropdown";

function Navbar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOption name="Produtos" content={Products} />
            </li>
          </ul>
          <ul>
            <li>
              <DropdownOption name="Desenvolvedores" content={Developers} />
            </li>
          </ul>
          <ul>
            <li>
              <DropdownOption name="Empresa" content={Company} />
            </li>
          </ul>
        </Container>
      </DropdownStyles>
    </DropdownProvider>
  );
}

export default Navbar;
