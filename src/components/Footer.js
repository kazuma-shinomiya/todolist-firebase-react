import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const CustomBox = styled(Box)({
    width: "100%",
    height: 56,
    display: "flex",
    justifyContent: "center",
    color: "#FFF",
    backgroundColor: "blue",
    position: "fixed",
    bottom: 0,
});

const Footer = () => {
  return (
    <CustomBox>copyright</CustomBox>
  )
}
export default Footer;