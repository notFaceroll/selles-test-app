import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import { LayoutContainer } from "./styles";

export default function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
