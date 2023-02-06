import React, { useEffect, useState } from "react";

const useViewPort = () => {
  const [viewPort, setViewPort] = useState({ vw: 0, vh: 0 });
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
      setViewPort({ vw: vw, vh: vh });
    }
  }, []);
  return viewPort;
};

export default useViewPort;
