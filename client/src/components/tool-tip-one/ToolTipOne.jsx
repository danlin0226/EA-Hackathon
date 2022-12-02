import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import closeButton from "../../assets/icons/exit.png";
import { Link } from "react-router-dom";

import "./ToolTipOne.scss";

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

export default function ToolTipOne() {
  const [open, setOpen] = React.useState(true);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div className="tooltip">
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
                            All your content in one place
                          </h1>
                          <p className="prompt__text">
                            Manage owned games and add-ons from your collection,
                            then easily update or launch them with just 1 click.
                          </p>
                        </div>
                        <div className="prompt__nav-cont">
                          <p className="prompt__page-number">2 of 6</p>
                          <p className="prompt__previous">PREVIOUS</p>
                          <p className="prompt__next">NEXT</p>
                        </div>
                      </div>
                    </div>
                  </>
                }
              >
                <Button onClick={handleTooltipOpen}>Click</Button>
              </NoMaxWidthTooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
}
