//get size of div

import React, { useEffect, useState } from "react";

const useSizeDiv = (ref: any) => {
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const { height: h, width: w } = ref.current.getBoundingClientRect();
    setSize({ h: h, w: w });
  }, [ref]);

  return size;
};

export default useSizeDiv;
