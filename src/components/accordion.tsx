import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";
import Button from "./button";
import { theme } from "../theme/theme";

function Icon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

//props
interface IAccodion {
  title: string;
  content: string[];
}

function AccordionComp({ title, content }: IAccodion) {
  const [open, setOpen] = useState<boolean>(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <Accordion open={open} icon={<Icon open={open} />}>
      <AccordionHeader
        className="py-3 px-3 text-sm"
        onClick={() => handleOpen()}
      >
        {title}
      </AccordionHeader>
      <AccordionBody className="list-none px-3">
        {content.map((ele, index) => {
          return (
            <Button
              style={{ background: "white", color: "black" }}
              key={index}
              content={ele}
            ></Button>
          );
        })}
      </AccordionBody>
    </Accordion>
  );
}

export default AccordionComp;
