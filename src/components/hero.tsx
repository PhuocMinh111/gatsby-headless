import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Button from "./button";

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
    <div className="w-full bg-dark py-5  bg-black flex flex-col mt-0 sm:flex-row-reverse">
      <div className=""></div>
      <div className="flex px-5 bg-dark flex-col">
        <div className="div text-[50px] font-[800] leading-[70px] text-light">
          {tittle}
        </div>
        <div className="text-light mt-2">{desc}</div>
        <Button style="mt-3 inline-block bg-orange" content="learn more" />
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
