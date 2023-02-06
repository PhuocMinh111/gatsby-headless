import React, { useEffect, useState } from "react";

const useViewPort = () => {
  const [viewPort, setViewPort] = useState({ w: 0, h: 0 });
  useEffect(() => {
    if (typeof window !== undefined) {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      );
      setViewPort({ w: vw, h: vh });
    }
  }, []);
  return viewPort;
};

export default useViewPort;
