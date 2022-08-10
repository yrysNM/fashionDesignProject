import React from "react";
import useBreakpoint from "use-breakpoint";
import MainApp from "../app/MainApp";

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
            {
                breakpoint === "tablet" ?
                    <div>
                        <div>Hello response {breakpoint} {minWidth}</div>
                    </div>
                    : null
            }

            {(breakpoint === "desktop") ? <MainApp /> : null}
        </>
    );

}

export default BreakPoint;