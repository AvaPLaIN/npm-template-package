import { useState } from "react";

const useOnResize = () => {
  const [isFullSize, setIsFullSize] = useState(false);

  const handleToggleOnChangeSize = () => {
    setIsFullSize((prev) => !prev);
  };

  return { isFullSize, toggleOnChangeSize: handleToggleOnChangeSize };
};

export default useOnResize;
