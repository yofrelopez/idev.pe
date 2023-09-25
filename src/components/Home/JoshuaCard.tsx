import Image from 'next/image';

const JoshuaCard = () => {
  return (
    <div className="bg-black p-4">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Imagen */}
        <div className="relative w-[19rem] h-[24rem] md:w-[27rem] md:h-[39rem] mb-4 md:mb-0 rounded-lg border-2 border-gray-700 shadow-neon">
          <Image
            src="/joshua_web.png" // Cambia esto por la ruta de tu imagen
            alt="Descripción de la imagen"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg shadow-blue-500/50"
          />
        </div>
        {/* Contenido */}
        <div className="flex flex-col justify-center ml-0 md:ml-4 w-[19rem] ">
          <h1 className="text-2xl font-bold text-white md:ms-4">
            Akío López Hirata
          </h1>
          <h2 className="text-xl text-gray-400 md:ms-4">Dev Manager</h2>
          <p className="text-base text-gray-500 mt-2 text-justify md:ms-4">
            Meet Akío López Hirata, our esteemed Development Manager at Idev.pe.
            With a passion for web application development and a vision aligned
            with our company's mission, Akío stands at the forefront of our
            endeavors. Under his leadership, we've consistently delivered
            top-tier web solutions that cater to our clients' unique needs. A
            young and dynamic leader, Akío embodies the spirit of innovation and
            excellence that Idev.pe is renowned for. We're proud to have him
            spearheading our development initiatives, ensuring that our clients
            receive nothing but the best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoshuaCard;
