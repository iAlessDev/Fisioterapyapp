import Link from "next/link";
import Image from "next/image";
import {
  UserCircle,
  Calendar,
  ChevronDown
} from "lucide-react";

export default function Header() {
  return (
    <header className="p-4 pl-15 bg-white flex justify-between items-center relative z-40 border-b border-gray-100">

      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo Fisioterapia"
          width={300}
          height={160}
          className="h-40 w-auto"
        />
      </Link>

      {/* Navegación Principal */}
      <nav className="flex items-center space-x-10 text-black text-xl font-semibold">

        <Link
          href="/"
          className="hover:text-orange-500 transition-colors"
        >
          Inicio
        </Link>

        {/* Tratamientos */}
        <div className="relative group py-4">

          <button
            type="button"
            className="flex items-center gap-1 hover:text-orange-500 cursor-pointer select-none"
          >
            Tratamientos

            <ChevronDown
              className="
                w-5 h-5
                transition-transform
                duration-200
                group-hover:rotate-180
              "
            />
          </button>

          {/* Menú desplegable */}
          <div
            className="
              absolute
              top-full
              left-0
              hidden
              group-hover:flex
              flex-col
              w-64
              bg-white
              shadow-xl
              border
              border-gray-100
              rounded-xl
              p-2
              text-base
              font-normal
              z-50
            "
          >

            <Link
              href="/tratamientos/deportiva"
              className="hover:bg-orange-50 hover:text-orange-600 p-2.5 rounded-lg transition-colors"
            >
              Fisioterapia Deportiva
            </Link>

            <Link
              href="/tratamientos/rehabilitacion"
              className="hover:bg-orange-50 hover:text-orange-600 p-2.5 rounded-lg transition-colors"
            >
              Rehabilitación Post-Operatoria
            </Link>

            <Link
              href="/tratamientos/terapia-manual"
              className="hover:bg-orange-50 hover:text-orange-600 p-2.5 rounded-lg transition-colors"
            >
              Terapia Manual
            </Link>

            <Link
              href="/tratamientos/puncion-seca"
              className="hover:bg-orange-50 hover:text-orange-600 p-2.5 rounded-lg transition-colors"
            >
              Punción Seca
            </Link>

          </div>

        </div>

        <Link
          href="/about-us"
          className="hover:text-orange-500 transition-colors"
        >
          Nosotros
        </Link>

        <Link
          href="/paquetes"
          className="hover:text-orange-500 transition-colors"
        >
          Paquetes
        </Link>

        <Link
          href="/contact"
          className="hover:text-orange-500 transition-colors"
        >
          Contacto
        </Link>

        {/* Acceso pacientes */}
        <div className="flex items-center">

          <Link
            href="/perfil"
            className="flex items-center gap-1 hover:opacity-80 pr-5"
          >
            <UserCircle className="w-7 h-7 text-black" />

            <span>
              Acceso Pacientes
            </span>
          </Link>

          {/* Separador */}
          <div className="h-10 w-3px bg-orange-500 mx-2" />

          {/* Agenda */}
          <div className="m-5">

            <Link
              href="/agenda"
              className="
                flex
                items-center
                gap-2
                bg-orange-400
                hover:bg-orange-500
                p-4
                rounded-lg
                text-white
                font-medium
                transition-colors
              "
            >
              <Calendar className="w-7 h-7 text-white" />

              <span>
                Agenda tu cita
              </span>
            </Link>

          </div>

        </div>

      </nav>

    </header>
  );
}