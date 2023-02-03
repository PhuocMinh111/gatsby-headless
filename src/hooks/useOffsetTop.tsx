import React, { useEffect, useState } from "react";

function useOffsetTop(id: string) {
  const [offset, setOffset] = useState<number | undefined>(0);
  useEffect(() => {
    const offset = document.getElementById(id)?.offsetTop;
    setOffset(offset);
  }, []);

  return offset;
}

export default useOffsetTop;
