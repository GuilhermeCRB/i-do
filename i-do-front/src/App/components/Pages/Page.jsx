import { Outlet } from "react-router-dom";

import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import PageLayout from "../../../layouts/Page";

export default function Page() {
  return (
    <PageLayout>
      <Header />
      <Nav />
      <SideMenu />
      <Outlet />
    </PageLayout>
  );
}