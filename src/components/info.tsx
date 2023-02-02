import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// cards component
function Card({
  title,
  content,
  img
}: {
  title: string | undefined;
  content: string | undefined;
  img: string | undefined;
}) {
  return (
    <div className="flex py-5 mt-5 sm:mt-3 bg-light px-5 rounded-sm  flex-col gap-5 items-center">
      <div className="w-[87px] flex items-center justify-center h-[87px] bg-orange rounded-full">
        <img src={img} alt="icon" className="w-[40px] f h-[40px]"></img>
      </div>
      <div className="text-[25px] leading-[150%] font-[700]">{title}</div>
      <div className="text-center">{content}</div>
    </div>
  );
}

// info component

function Info() {
  const data = useStaticQuery(graphql`
    query infoQuery {
      allContentfulInfo {
        nodes {
          cards {
            data {
              title
              content
            }
          }
          image {
            url
          }
          tittle
        }
      }
    }
  `);
  const { cards, tittle, image } = data.allContentfulInfo.nodes[0];
  return (
    <div className="w-full mt-0 py-5 pb-20 bg-grey text-center">
      {/* title */}
      <h2 className="text-[50px] mx-auto max-w-[500px] px-3 leading-[70px] font-bold text-dark">
        {tittle}
      </h2>
      {/* cards */}
      <div className="cards max-w-[1000px] mx-auto mt-5 px-10 flex flex-col gap-5 sm:flex-row">
        {cards.data.map(({ title, content }: any, index: number) => {
          return (
            <Card
              img={image.url}
              title={title}
              content={content}
              key={index}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default Info;
