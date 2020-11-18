import React, { useRef } from "react";
import { useScrollPosition } from "../commons/scroll-position.jsx";

const AutoScrollAnimation = (props) => {
  const ref = useRef();
  const { actionPlusTop, scrollPlusTo } = props;
  useScrollPosition(
    ({ currPos, prevPos }) => {
      let [height, bottom, width] = [
        ref.current.getBoundingClientRect().height,
        ref.current.getBoundingClientRect().bottom,
        ref.current.getBoundingClientRect().width,
      ];

      if (width > 700) {
        let isActionZone =
          bottom + actionPlusTop >= height / 2 &&
          bottom + actionPlusTop <= height;

        prevPos.y < currPos.y && isActionZone
          ? window.scrollTo({
              top: height + scrollPlusTo,
              left: 0,
              behavior: "smooth",
            })
          : "";
        prevPos.y > currPos.y && isActionZone
          ? ref.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
              top: "start",
            })
          : "";
      }
    },
    [],
    null,
    true,
    500
  );

  return <div ref={ref}>{props.children}</div>;
};

export default AutoScrollAnimation;
