import { PropsWithChildren } from "react";

import Box from "@mui/material/Box";
import useStyles from "./styles";

const Content = ({ children }: PropsWithChildren) => {
  const styles = useStyles();
  return <Box sx={styles.contentBackground}>{children}</Box>;
};

export default Content;
