import { Phone, MessageCircle, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="text-center">

      {/* ENCABEZADO */}
      <div
        className="
          p-10
          bg-[url('/contact/title-background.png')]
          bg-no-repeat
          bg-size-[1800px_auto]
          bg-center
        "
      >
        <h2 className="text-2xl font-bold text-green-500">
          CONTACTO
        </h2>

        <h1 className="text-6xl font-bold text-black">
          Hablemos de <br />
          <span className="text-green-500">
            tu bienestar
          </span>
        </h1>

        <p className="text-2xl text-black mt-5">
          Estamos aquí para resolver tus dudas, orientarte y ayudarte
          <br />
          a dar el siguiente paso hacia una vida sin dolor.
        </p>
      </div>


      {/* TARJETAS DE CONTACTO */}
      <div className="grid grid-cols-3 gap-6 px-12 py-16">

        {/* TELÉFONO */}
        <div className="bg-cyan-50 rounded-3xl p-8">

          <div className="flex items-center gap-6 text-left">

            <div
              className="
                w-24
                h-24
                rounded-full
                bg-cyan-100
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Phone className="w-12 h-12 text-cyan-700" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-800">
                Llámanos
              </h3>

              <p className="text-lg text-gray-600 mt-2">
                Con gusto te atenderemos
                <br />
                para resolver tus dudas.
              </p>
            </div>

          </div>

          <div className="border-t border-gray-300 mt-7 pt-6">
            <a
              href="tel:+525534853326"
              className="text-2xl font-bold text-cyan-700"
            >
              55 3485 3326
            </a>
          </div>

        </div>


        {/* WHATSAPP */}
        <div className="bg-green-50 rounded-3xl p-8">

          <div className="flex items-center gap-2 text-left">

            <div
              className="
                w-24
                h-24
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <MessageCircle className="w-12 h-12 text-green-600" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-600 leading-tight">
                Escríbenos por
                <br />
                WhatsApp
              </h3>

              <p className="text-lg text-gray-600 mt-2">
                Respuesta rápida y
                <br />
                atención personalizada.
              </p>
            </div>

          </div>

          <div className="border-t border-gray-300 mt-7 pt-6">
            <a
              href="https://wa.me/525534853326"
              target="_blank"
              className="text-2xl font-bold text-green-600"
            >
              55 3485 3326
            </a>
          </div>

        </div>


        {/* CORREO */}
        <div className="bg-orange-50 rounded-3xl p-8">

          <div className="flex items-center gap-6 text-left">

            <div
              className="
                w-24
                h-24
                rounded-full
                bg-orange-100
                flex
                items-center
                justify-center
                shrink-0
              "
            >
              <Mail className="w-12 h-12 text-orange-500" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-cyan-800">
                Envíanos un correo
              </h3>

              <p className="text-lg text-gray-600 mt-2">
                Cuéntanos en qué podemos
                <br />
                ayudarte.
              </p>
            </div>

          </div>

          <div className="border-t border-gray-300 mt-7 pt-6">
            <a
              href="mailto:hola@celticfisioterapia.com"
              className="text-xl font-bold text-orange-500"
            >
              hola@celticfisioterapia.com
            </a>
          </div>

        </div>

      </div>

        <div className="text-center w-1/3 mx-auto">
            <h1 className="text-4xl font-bold text-green-800">
                Estamos para ti
            </h1>

            <p className="text-xl text-black my-5">
                Tu bienestar es nuestra prioridad. 
                Contáctanos y permítenos acompañarte en cada paso de tu recuperación.
            </p>
        </div>

    </div>
  );
}