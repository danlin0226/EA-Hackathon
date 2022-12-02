import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import closeButton from "../../assets/icons/exit.png";
import { Link } from "react-router-dom";
import six from "../../assets/six.png";

import "./ToolTipSix.scss";
import "../../main.scss";

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

export default function ToolTipSix() {
  const [open, setOpen] = React.useState(true);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <section className="tooltip-six">
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
                placement="right"
                title={
                  <>
                    <div className="prompt">
                      <div className="prompt__top">
                        <img className="screenshot-card" src={six} alt="" />
                        <img
                          className="prompt__close"
                          src={closeButton}
                          onClick={handleTooltipClose}
                          alt="Button to close the tool tip."
                        />
                      </div>

                      <div className="prompt__bottom">
                        <h2 className="prompt__header">
                          Join EA to get more game
                        </h2>
                        <p className="prompt__text">
                          EA Play is the ultimate game membership. More rewards,
                          more exclusive content, and unlimited access to more
                          top titles for just $4.99 a month.
                        </p>
                        <div className="prompt__nav-cont">
                          <p className="prompt__page-number">6 of 6</p>

                          <p className="prompt__previous" type="submit">
                            <Link className="prompt__prev-link" to="/5">
                              PREVIOUS
                            </Link>
                          </p>
                          <button
                            onClick={handleTooltipClose}
                            className="prompt__done"
                            type="submit"
                          >
                            DONE
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                }
              >
                <Button
                  style={{ color: "transparent" }}
                  onClick={handleTooltipOpen}
                >
                  Click
                </Button>
              </NoMaxWidthTooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </section>
  );
}
