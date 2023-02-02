import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Button from "./button";
import { theme } from "../theme/theme";
import { GatsbyImage } from "gatsby-plugin-image";

function Hero() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allContentfulHero {
        nodes {
          desc
          images {
            id
            url
            size
          }
          name
          tittle
        }
      }
    }
  `);
  console.log(data);
  const { desc, images, name, tittle } = data.allContentfulHero.nodes[0];

  return (
    <div className="w-full bg-dark py-5 sm:pt-5 sm:pb-0 bg-black flex flex-col mt-0 sm:flex-row-reverse ">
      {/* banner */}
      <div className="relative h-[400px] sm:mt-0 overflow-hidden sm:h-[580px]  w-full sm:w-1/2 ">
        {images &&
          images.map(({ url }: any, index: number) => {
            return (
              <img
                src={url}
                className={`absolute object-contain top-0 left-0 w-full h-full
            ${index === 0 ? "top-[150px] left-[50px]" : ""}`}
                key={index}
                alt="banner-img"
              />
            );
          })}
      </div>
      {/* prompt */}
      <div className="flex sm:px-10 mt-5 sm:max-w-half w-full sm:mt-20  px-5 bg-dark flex-col">
        <div className="div sm:max-w-[80%] text-[50px] font-[800] leading-[70px] text-light">
          {tittle}
        </div>
        <div className="text-light sm:max-w-[80%] font-light text-[18px] leading-[180%] mt-2">
          {desc}
        </div>
        <Button
          style={{
            fontWeight: "bold",
            marginTop: "8px",
            fontSize: "18px",
            backgroundColor: theme.colors.orange,
            width: "191px",
            height: "62px"
          }}
          content="learn more"
        />
      </div>
    </div>
  );
}
export default Hero;

// export const pageQuery = graphql`
//   query HeroQuery {
//     allContentfulHero {
//       nodes {
//         desc
//         images {
//           id
//           url
//           size
//         }
//         name
//         tittle
//       }
//     }
//   }
// `;
