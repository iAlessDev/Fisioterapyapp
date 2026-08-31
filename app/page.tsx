import Link from "next/link";
import { Calendar, ChevronRight} from "lucide-react";

export default function Home() {
  return (
    <div className="
              grid grid-cols-2 
              gap-4  
              bg-[url('/PageBackground.png')]
              bg-no-repeat
              bg-bottom-left
              bg-contain">
      <div className="
              w-fit 
              mx-auto 
              text-left
              ">

        <h2 className="text-2xl font-bold text-green-500">
          RECUPERA TU MOVIMIENTO
        </h2>

        <h1 className="text-6xl font-bold">
          Vuelve a moverte
          <br />
          <div className="text-green-700">
            sin dolor
          </div>
        </h1>

        <p className="text-9xl2xl font-semibold mt-4">
          Fisioterapia personalizada para aliviar el dolor,
          <br/>
          recuperar tu movilidad y volver a disfrutar tu vida
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 font-bold">
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
                Agenda tu valoración 
              </span>

               <ChevronRight className="w-5 h-5 text-white" />
            </Link>

          <Link 
            href="/paquetes" 
            className="
              flex
              items-center
              ml-4
              p-4
              border-3
              rounded-xl
              border-black-100
              hover:border-black-200

            ">
            Conoce los tratamientos 
            <ChevronRight className="w-5 h-5 text-black" />
          </Link>
        </div>

      </div>
      
      <div className="bg-green-500">
        Second div
      </div>

      <div className="col-span-2 bg-yellow-500">
        third <div></div>
      </div>
    
    </div>
    


  );
}
