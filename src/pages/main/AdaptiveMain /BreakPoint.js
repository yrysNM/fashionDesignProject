import React from "react";
import useBreakpoint from "use-breakpoint";
import MainApp from "../app/MainApp";
import AdaptiveMainApp from "../app/AdaptiveMainApp";
const UIBreakPoints = {
    mobile: 0,
    phablet: 575,
    tablet: 767,
    desktop: 991
};

const BreakPoint = () => {
    const { breakpoint, maxWidth, minWidth } = useBreakpoint(UIBreakPoints, "")
    return (
        <>
            {breakpoint === "tablet" ? <AdaptiveMainApp /> : null}

            {(breakpoint === "desktop" || breakpoint === "tablet") ? <MainApp /> : null}
        </>
    );

}

export default BreakPoint;