import Link from "next/link";
import Image from "next/image";
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({ subsets: ['latin'] })

const Servicios = () => {
  return (
    <>
      <div className= "bg-black text-white p-8">
        {/* Título, ícono y descripción de la sección */}
        <div className="mb-2 text-center">
          <div className="flex justify-center">
            <div className={`${roboto} text-3xl opacity-80 pt-2`}>🛠</div>
            <h1 className="ps-4 text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </h1>
          </div>

          <h2 className="text-3xl mt-4 text-blue-500">What we offer</h2>
          <p className="mt-2 max-w-2xl mx-auto text-slate-300">
          At Idev, we provide a range of specialized services to help take your
           business to the next level. Discover more about what we can do for you.
          </p>
        </div>

        {/* ... (resto del código para Desarrollo de Aplicaciones Web, Diseño Gráfico y Edición de Video) ... */}
      </div>
      <div className="bg-black text-white p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Desarrollo de Aplicaciones Web */}
        <div className="mb-8">
          <Image
            src="/servicios_web.png"
            alt="Desarrollo de Aplicaciones Web"
            width={500}
            height={300}
            className="rounded-lg shadow-lg shadow-blue-500/50 border-solid border-2 border-blue-600"
          />
          <h2 className="text-2xl font-bold mt-4">
          Web Application Development
          </h2>
          <p className="mt-2">
          Designing and building dynamic web applications tailored to meet specific business needs
          </p>
          <Link
            href="/#"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            More info
          </Link>
        </div>

        {/* Diseño Gráfico */}
        <div className="mb-8">
          <Image
            src="/servicios_web.png"
            alt="Diseño Gráfico"
            width={500}
            height={300}
            className="rounded-lg shadow-lg shadow-blue-500/50 border-solid border-2 border-blue-600"
          />
          <h2 className="text-2xl font-bold mt-4">Graphic Design</h2>
          <p className="mt-2">
          Creating visually compelling designs that capture and convey your brand's message effectively.
          </p>
          <Link
            href="/#"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            More info
          </Link>
        </div>

        {/* Edición de Video */}
        <div className="mb-8">
          <Image
            src="/servicios_web.png"
            alt="Edición de Video"
            width={500}
            height={300}
            className="rounded-lg shadow-lg shadow-blue-500/50 border-solid border-2 border-blue-600"
          />
          <h2 className="text-2xl font-bold mt-4">Video Editing</h2>
          <p className="mt-2">
          Transforming raw footage into polished videos that resonate with audiences and tell a compelling story.
          </p>
          <Link
            href="/#"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            More info
          </Link>
        </div>
      </div>
    </>
  );
};

export default Servicios;
