import React from "react";
import screenshot from "../../assets/EA.png";
import "./Home.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import closeButton from "../../assets/exit.png";
import { Link } from "react-router-dom";
import WelcomeModal from "../../assets/Welcome Modal Content (Cropped).png";

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
    backgroundColor: "#52565E",
    padding: "0px",
    fontFamily: "inter",
  },
});

const Home = () => {
  const [open, setOpen] = React.useState(true);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div className="home">
      <img className="screenshot" src={screenshot} alt="" />

      <div className="tooltips">
        <Grid container justifyContent="center">
          <Grid item>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <NoMaxWidthTooltip
                  arrow
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="right-start"
                  title={
                    <>
                      <div className="prompt">
                        <div className="prompt__top">
                          <img src={WelcomeModal} />
                          <img
                            className="prompt__close"
                            src={closeButton}
                            onClick={handleTooltipClose}
                            alt=""
                          />
                        </div>
                        <div className="prompt__bottom">
                          <div>
                            <h1 className="prompt__header">
                              Welcome to the all-new EA App
                            </h1>
                            <p className="prompt__text">
                              Powering the next generation of desktop gaming.
                              Take a quick tour to see what’s new.
                            </p>
                          </div>
                          <div className="prompt__nav-cont">
                            <p className="prompt__page-number">1 of 6</p>
                            <p className="prompt__previous">SKIP</p>
                            {/* <Link to="/2"> */}
                              <p className="prompt__next">NEXT</p>
                            {/* </Link> */}
                          </div>
                        </div>
                      </div>
                    </>
                  }
                >
                  <Button
                    className="tooltip__button-main"
                    onClick={handleTooltipOpen}
                  >
                    Browse
                  </Button>
                </NoMaxWidthTooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
