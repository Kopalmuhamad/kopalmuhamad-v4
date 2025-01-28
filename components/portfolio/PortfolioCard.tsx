import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkIcon } from "lucide-react";

interface IPortfolioCardProps {
  portfolio: {
    id?: number;
    title: string;
    description: string;
    image: string;
    sourceCode: string;
    link: string;
  };
}

const PortfolioCard = ({ portfolio }: IPortfolioCardProps) => {
  return (
    <CardContainer className="w-full h-full">
      <CardBody className="w-full bg-secondary text-secondary-foreground relative group/card h-full rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-extrabold">
          {portfolio.title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-sm mt-2">
          {portfolio.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={portfolio.image}
            height="1000"
            width="1000"
            className="w-[80%] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={portfolio.sourceCode}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal flex items-center justify-start gap-2"
          >
            <span>Source Code</span>
            <GithubIcon size={14} />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={portfolio.link}
            target="__blank"
            className={
              "px-4 py-2 rounded-xl text-xs font-normal flex items-center justify-start gap-2"
            }
          >
            <span>Live Demo</span>
            <LinkIcon size={14} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default PortfolioCard;
