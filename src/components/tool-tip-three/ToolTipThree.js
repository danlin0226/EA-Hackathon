import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import closeButton from "../../assets/icons/exit.png";
import { Link } from "react-router-dom";
import InviteFriend from "../../assets/Invite Friends (4 of 6).png";

import "./ToolTipThree.scss";

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

export default function ToolTipThree() {
  const [open, setOpen] = React.useState(true);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div className="tooltip-three">
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
                placement="left"
                title={
                  <>
                    <div className="prompt">
                      <div className="prompt__top">
                        <img src={InviteFriend} />
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
                            Invite friends to play
                          </h1>
                          <p className="prompt__text">
                            Connect to your favourite platforms to import
                            friends lists and rally the squad for multiplayer
                            gaming.
                          </p>
                        </div>
                        <div className="prompt__nav-cont">
                          <p className="prompt__page-number">4 of 6</p>
                          <p className="prompt__previous">
                            <Link className="prompt__prev-link" to="/3">
                              PREVIOUS
                            </Link>
                          </p>
                          <p className="prompt__next">
                            <Link className="prompt__prev-link" to="/5">
                              NEXT
                            </Link>
                          </p>
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
    </div>
  );
}
