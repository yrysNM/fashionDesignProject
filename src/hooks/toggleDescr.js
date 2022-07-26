import { useState } from "react";

export const useToggleDescr = () => {
  const [toggleDescr, setToggleDescr] = useState(false);

  const onMouseOverDescFucn = () => {
    setToggleDescr(true);
  }


  const onMouseOutDescFucn = () => {
    setToggleDescr(false);
  }

  return { toggleDescr, onMouseOutDescFucn, onMouseOverDescFucn };
}