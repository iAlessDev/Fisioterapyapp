import { Users, Award, Heart } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="text-center flex flex-col gap-10">
            <div className="
                bg-[url('/about-us/body-background.png')]
                bg-size-[150px_auto]
                bg-no-repeat
                bg-bottom-right
              "
              >
                <h2 className="text-2xl font-bold text-green-500">
                    SOBRE NOSOTROS
                </h2>

                <h1 className="text-6xl font-bold text-black">
                    Nos mueve{" "}
                    <span className="text-green-500">
                    tu bienestar
                    </span>
                </h1>

                <p className="text-xl font-semibold mt-4">
                    En Celtic, fisioterapia creemos en una atencion cercana y personalizada,
                <br/>
                    para que puedas recuperar tu movimiento y disfrutar de una vida sin dolor.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-10 text-left">
                <img
                    src="https://images.pexels.com/photos/20860622/pexels-photo-20860622.jpeg"
                    alt="Historia de la clínica"
                    className="rounded-lg shadow-lg"
                />

                <div>
                    <h1 className="text-4xl font-bold text-black">
                        Nuestra{" "}
                        <span className="text-orange-500">
                            Historia
                        </span>
                    </h1> 
                    <img
                        src="/about-us/line.png"
                        alt="Historia de la clínica"
                        className="w-30"
                    />

                    <p className="text-lg w-3/4">
                        En Celtic, fisioterapia, nos enorgullece ofrecer servicios de fisioterapia de alta calidad en un ambiente acogedor y profesional. 
                        Nuestro equipo de expertos está comprometido con tu bienestar y trabaja incansablemente para ayudarte a alcanzar tus objetivos de salud y movilidad.    
                    </p>

                    <div className="flex items-center gap-4 mt-10">
                        <img
                            src="/about-us/values.png"
                            alt="Valores de la clínica"
                            className="h-28"
                        />

                        <div>
                            <h1 className="text-2xl font-bold text-orange-500">
                                Valores
                            </h1>

                            <p className="">
                                Mejora la calidad de vida de las personas a través del movimiento 
                            </p>
                        </div>
                        
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                        <img
                            src="/about-us/mission.png"
                            alt="Misión de la clínica"
                            className="h-28"
                        />

                        <div>
                            <h1 className="text-2xl font-bold text-orange-500">
                                Misión
                            </h1>

                            <p className="">
                                Cercanía, profesionalismo y compromiso con tu bienestar
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="
                bg-[url('/about-us/body-background.png')]
                bg-size-[200px_auto]
                bg-no-repeat
                bg-bottom-left
              "
              >
                <h1 className="text-3xl font-bold text-black">
                    Nuestro{" "}
                    <span className="text-orange-500">
                    equipo
                    </span>
                </h1>
                <img
                    src="/about-us/line.png"
                    alt="Historia de la clínica"
                    className="w-30 mx-auto"
                />

                <div className="flex items-center justify-center gap-4 my-10">
                    <div className="flex items-center">
                        <img
                            src="/about-us/bryant.jpeg"
                            alt="bryant-fisioterapeuta"
                            className="w-50 h-50 rounded-full object-cover object-top"
                        />

                        <div className="mx-4 text-center">
                            <h2 className="text-xl font-bold text-black">
                                Lic. Bryant
                            </h2>

                            <h3 className="text-lg font-semibold text-orange-500">
                                Fisioterapeuta
                            </h3>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <img
                                src="/about-us/fabian.jpeg"
                                alt="fabian-fisioterapeuta"
                                className="w-50 h-50 rounded-full object-cover object-top"
                        />

                        <div className="mx-4 text-center">
                            <h2 className="text-xl font-bold text-black">
                                Lic. Fabian
                            </h2>

                            <h3 className="text-lg font-semibold text-orange-500">
                                Fisioterapeuta
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 mb-5">
                    {/* Pacientes */}
                    <div className="flex items-center justify-center gap-5 px-8">
                        <Users className="w-14 h-14 text-teal-700" strokeWidth={2} />

                        <div className="text-left">
                            <h3 className="text-xl font-bold text-slate-900">
                            +500
                            </h3>

                            <p className="text-xl text-slate-700">
                            pacientes atendidos
                            </p>
                        </div>
                    </div>
                    
                    {/* Experiencia */}
                    <div className="flex items-center justify-center gap-5 px-8 border-l border-gray-500">
                        <Award className="w-14 h-14 text-teal-700" strokeWidth={2} />
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-slate-900">
                            +10 años
                            </h3>

                            <p className="text-xl text-slate-700">
                            de experiencia
                            </p>
                        </div>
                    </div>

                    {/* Atención personalizada */}
                    <div className="flex items-center justify-center gap-5 px-8 border-l border-gray-500">
                        <Heart className="w-14 h-14 text-teal-700" strokeWidth={2} />

                        <div className="text-left">
                            <h3 className="text-xl font-bold text-slate-900">
                            Atención personalizada
                            </h3>

                            <p className="text-xl text-slate-700">
                            Porque cada persona es única
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}