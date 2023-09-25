// components/Portfolio.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

type PortfolioItem = {
  title: string;
  description: string;
  imageUrl: string;
  externalLink: string;
};

const portfolioItems: PortfolioItem[] = [
  // Aquí puedes agregar tus elementos del portafolio. Este es solo un ejemplo.
  {
    title: "Fleet Tracking App",
    description: "A GPS-based solution for real-time fleet monitoring, enhancing efficiency and safety in logistics.",
    imageUrl: "/portfolio/abastecimiento_web.png",
    externalLink: "https://#",
  },
  {
    title: "Delivery Food App",
    description: "An app connecting foodies to restaurants, simplifying ordering and delivering meals to the doorstep.",
    imageUrl: "/portfolio/delivery_web.png",
    externalLink: "https://simple-delivery-system.netlify.app/",
  },
  {
    title: "Transport Company Website",
    description: " A transport company website offering international/domestic shipping, warehousing, and customs clearance.",
    imageUrl: "/portfolio/inversiones-moy_web.png",
    externalLink: "https://inversionesmoy.com.pe/",
  },
  {
    title: "Real Estate Website",
    description: "A real estate website offering global transportation, warehousing, and customs services.",
    imageUrl: "/portfolio/bienes-raices_web.png",
    externalLink: "https://web-bienes-raices-01.netlify.app/",
  },
  {
    title: "Local News Website",
    description: "A local news website offering global transportation, warehousing, and customs services ",
    imageUrl: "/portfolio/bca_pe_web.PNG",
    externalLink: "https://barranca.pe/",
  },
  {
    title: "Hotel Website",
    description: "A Hotel Company website offering global transportation, warehousing, and customs services.",
    imageUrl: "/portfolio/gatsby_web.PNG",
    externalLink: "https://youthful-varahamihira-df4b60.netlify.app/",
  },
  // ... Agrega más elementos según lo necesites
];

const Portfolio: React.FC = () => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-md mt-10 mx-4 md:mx-0 pb-[76px]">
      <h2 className="text-white text-3xl mb-2 flex items-center">
        🎨 Check out my portfolio
      </h2>
      <p className="text-gray-300 mb-6">
        Here are some of the projects I've worked on.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group relative">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={300}
              className="transition-transform transform group-hover:scale-105"
            />
            <div className="mt-2 pe-2 md:pe-[62px]">
              <h3 className="text-white text-xl">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
              <Link href={item.externalLink} target="_blank">
                <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                  View Project
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
