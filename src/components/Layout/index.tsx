import { PropsWithChildren } from "react";

import Box from "@mui/material/Box";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Box>
  );
};

export default Layout;
