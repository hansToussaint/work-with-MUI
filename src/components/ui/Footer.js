import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import footerAdorment from "../../assets/Footer Adornment.svg";

import Grid from "@mui/material/Grid";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const FooterStyled = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  width: "100%",
  zIndex: 1302,
  position: "relative",
}));

const Img = styled("img")(({ theme }) => ({
  width: "25em",
  verticalAlign: "bottom",
  [theme.breakpoints.down("md")]: {
    width: "21em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "15em",
  },
}));

const ImgMedia = styled("img")(({ theme }) => ({
  height: "4em",
  width: "4em",
  [theme.breakpoints.down("md")]: {
    height: "2.5em",
    width: "2.5em",
  },
}));

const GridItemStyled = styled(Grid)(() => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textDecoration: "none",
}));

const GridSpaceStyled = styled(Grid)(() => ({
  margin: "3em",
}));

function Footer({ value, setValue, selectedIndex, setSelectedIndex }) {
  return (
    <FooterStyled>
      <Grid
        container
        justifyContent="center"
        sx={{ position: "absolute", display: { xs: "none", md: "flex" } }}
      >
        <GridSpaceStyled item>
          <Grid container direction="column" spacing={2}>
            <GridItemStyled
              item
              component={Link}
              to="/"
              onClick={() => setValue(0)}
            >
              Home
            </GridItemStyled>
          </Grid>
        </GridSpaceStyled>

        <GridSpaceStyled item>
          <Grid container direction="column" spacing={2}>
            <GridItemStyled
              item
              component={Link}
              to="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
            >
              Services
            </GridItemStyled>
            <GridItemStyled
              item
              component={Link}
              to="/customsoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              Custom Software Development
            </GridItemStyled>
            <GridItemStyled
              item
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              Mobile App Development
            </GridItemStyled>
            <GridItemStyled
              item
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              Websites Development
            </GridItemStyled>
          </Grid>
        </GridSpaceStyled>

        <GridSpaceStyled item>
          <Grid container direction="column" spacing={2}>
            <GridItemStyled
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              The Revolution
            </GridItemStyled>
            <GridItemStyled
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              Vision
            </GridItemStyled>
            <GridItemStyled
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              Technology
            </GridItemStyled>
            <GridItemStyled
              item
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              Process
            </GridItemStyled>
          </Grid>
        </GridSpaceStyled>

        <GridSpaceStyled item>
          <Grid container direction="column" spacing={2}>
            <GridItemStyled
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              About us
            </GridItemStyled>
            <GridItemStyled
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              History
            </GridItemStyled>
            <GridItemStyled
              item
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              Team
            </GridItemStyled>
          </Grid>
        </GridSpaceStyled>

        <GridSpaceStyled item>
          <Grid container direction="column" spacing={2}>
            <GridItemStyled
              item
              component={Link}
              to="/contact"
              onClick={() => setValue(4)}
            >
              Contact Us
            </GridItemStyled>
          </Grid>
        </GridSpaceStyled>
      </Grid>

      <Img alt="black decorative" src={footerAdorment} />

      <Grid
        container
        justifyContent="flex-end"
        spacing={2}
        sx={{ positon: "absolute", marginTop: "-5.2em", right: "1.6em" }}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferer"
          target="_blank"
        >
          <ImgMedia alt="facebook logo" src={facebook} />
        </Grid>

        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferer"
          target="_blank"
        >
          <ImgMedia alt="twitter logo" src={twitter} />
        </Grid>

        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferer"
          target="_blank"
        >
          <ImgMedia alt="instagram logo" src={instagram} />
        </Grid>
      </Grid>
    </FooterStyled>
  );
}

export default Footer;
