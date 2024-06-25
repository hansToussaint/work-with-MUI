import { useTheme } from "@emotion/react";
import Lottie from "react-lottie";
import { Button, Grid, Typography, styled, useMediaQuery } from "@mui/material";

import ButtonArrow from "../components/ui/ButtonArrow";
import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const ButtonEstimate = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  backgroundColor: theme.palette.common.orange,
  borderRadius: 50,
  height: 45,
  width: 145,
  marginRight: 40,

  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const ButtonLearn = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.9rem",
  height: 45,
  width: 145,
}));

const ButtonLearn2 = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.7rem",
  height: 35,
  padding: "5px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "2em",
  },
}));

function LandingPage() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      container
      direction="column"
      sx={{
        marginTop: "5em",
        [theme.breakpoints.down("md")]: { marginTop: "3em" },
        [theme.breakpoints.down("xs")]: { marginTop: "2em" },
      }}
    >
      {/* Hero Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid
            item
            sm
            sx={{
              minWidth: "21.5em",
              marginLeft: "1em",
              [theme.breakpoints.down("xs")]: { marginLeft: 0 },
            }}
          >
            <Typography align="center" variant="h2">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid container justifyContent="center" sx={{ marginTop: "1em" }}>
              <Grid item>
                <ButtonEstimate variant="contained">
                  Free estimate
                </ButtonEstimate>
              </Grid>
              <Grid item>
                <ButtonLearn variant="outlined">
                  <span style={{ marginRight: 10 }}>Learn more</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </ButtonLearn>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm
            sx={{
              maxWidth: "50em",
              minWidth: "21em",
              marginTop: "2em",
              marginLeft: "10%",
              [theme.breakpoints.down("sm")]: { maxWidth: "30em" },
            }}
          >
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid item>
        <Grid
          container
          direction="row"
          sx={{
            marginTop: "12em",
            [theme.breakpoints.down("sm")]: { padding: 25 },
          }}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            sx={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: "1rem" }}>
              Save Energy. Save Time Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solution, from ivestigation to{" "}
              <span
                style={{
                  fontFamily: "Pacifico",
                  color: theme.palette.common.orange,
                }}
              >
                celebration
              </span>
            </Typography>
            <ButtonLearn2 variant="outlined">
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </ButtonLearn2>
          </Grid>

          <Grid item>
            <img
              alt="custom software icon"
              src={customSoftwareIcon}
              style={{
                marginLeft: "2em",
                [theme.breakpoints.down("xs")]: { marginLeft: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* IOs/Android Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          sx={{
            marginTop: "12em",
            [theme.breakpoints.down("sm")]: { padding: 25 },
          }}
          justifyContent={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            sx={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">IOs/Android App Development</Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: "1rem" }}>
              Extend fonctionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standlone app
              {matchesSM ? null : <br />}with either mobile platform
            </Typography>
            <ButtonLearn2 variant="outlined">
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </ButtonLearn2>
          </Grid>

          <Grid item sx={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              alt="mobile phone icon"
              src={mobileAppsIcon}
              style={{
                marginLeft: "2em",
                [theme.breakpoints.down("xs")]: { marginLeft: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Website Block */}
      <Grid item>
        <Grid
          container
          direction="row"
          sx={{
            marginTop: "12em",
            [theme.breakpoints.down("sm")]: { padding: 25 },
          }}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            sx={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: "1rem" }}>
              Reach More. discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standlone app
              {matchesSM ? null : <br />}with either mobile platform
            </Typography>
            <ButtonLearn2 variant="outlined">
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </ButtonLearn2>
          </Grid>

          <Grid item sx={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              alt="websites  icon"
              src={websitesIcon}
              style={{
                marginLeft: "2em",
                [theme.breakpoints.down("xs")]: { marginLeft: 0 },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
