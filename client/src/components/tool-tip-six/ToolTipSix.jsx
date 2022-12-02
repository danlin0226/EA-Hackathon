import * as React from "react";
import closeButton from "../../assets/exit.png";
import { Link } from "react-router-dom";

import "./ToolTipSix.scss";

export default function ToolTipSix() {
  const [open, setOpen] = React.useState(true);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="prompt">
        <div className="prompt-top">
          <img
            src={closeButton}
            onClick={handleTooltipClose}
            alt="Button to close the tool tip."
          />
        </div>

        <h2 className="prompt-title">Join EA to get more games</h2>
        <p className="prompt-text">
          EA Play is the ultimate game membership. More rewards, more exclusive
          content, and unlimited access to more top titles for just $4.99 a
          month.
        </p>

        <div className="prompt__nav-cont">
          <p className="prompt__page-number">6 of 6</p>

          <button className="prompt__previous">PREVIOUS</button>
          <button onClick={handleTooltipClose} className="prompt__done">
            DONE
          </button>
        </div>
      </section>
    </>
  );
}
