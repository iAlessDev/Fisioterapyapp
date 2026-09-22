import { ScanLine, Dumbbell, HeartHandshake } from "lucide-react";

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
                        Nacimos con el propósito de brindar atención fisioterapéutica profesional, humana y personalizada, entendiendo que cada persona tiene necesidades, objetivos y procesos de recuperación diferentes.
                        <br/>
                        <br/>
                        A través de nuestra formación y experiencia práctica, hemos desarrollado un enfoque centrado en la valoración individual, el tratamiento del dolor, la recuperación del movimiento y la prevención de futuras lesiones.
                        <br/>
                        <br/>
                        Nuestro objetivo es acompañar a cada paciente durante su proceso de recuperación, proporcionando herramientas y estrategias que le permitan volver a sus actividades cotidianas, deportivas y laborales con mayor confianza y funcionalidad.
                        <br/>
                        <br/>
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

                            <p className="w-2/3">
                                <strong>Empatía: </strong>
                                Escuchamos y comprendemos las necesidades de cada paciente, respetando su proceso y sus objetivos.
                                <br />
                                <br />
                                <strong>Compromiso: </strong>
                                Nos involucramos en cada tratamiento con responsabilidad y dedicación.
                                <br />
                                <br />
                                <strong>Profesionalismo: </strong>
                                Trabajamos con responsabilidad, ética y respeto, buscando ofrecer una atención de calidad
                                <br />
                                <br />
                                <strong>Actualización: </strong>
                                Mantenemos una actitud de aprendizaje continuo para mejorar nuestras herramientas y conocimientos.
                                <br />
                                <br />
                                <strong>Trato humano: </strong>
                                Creemos que una buena recuperación también requiere confianza, comunicación y un ambiente cómodo para el paciente.
                                <br />
                                <br />
                                <strong>Funcionalidad: </strong>
                                Nuestro objetivo no es solamente disminuir el dolor, sino ayudar a cada persona a recuperar y mantener su capacidad para realizar las actividades que son importantes para ella.
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

                            <p className="w-2/3">
                                Brindar atención fisioterapéutica integral y personalizada, enfocada en disminuir el dolor, mejorar la movilidad y recuperar la funcionalidad de cada paciente.
                                <br />
                                <br />
                                Buscamos que cada tratamiento se adapte a las necesidades y objetivos individuales, combinando valoración, ejercicio terapéutico, técnicas manuales y agentes físicos cuando estén indicados, siempre con un trato profesional, humano y cercano.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="
                bg-[url('/about-us/body-background.png')]
                bg-size-[200px_auto]
                bg-no-repeat
                bg-left
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
                <div className="grid grid-cols-3 bg-white rounded-2xl shadow-lg py-5">
                    {/* Pacientes */}
                    <div className="flex items-center justify-center gap-5 px-8">
                        <ScanLine className="w-14 h-14 text-teal-700" strokeWidth={2} />

                        <div className="text-left">
                            <h3 className="text-xl font-bold text-slate-900">
                            Evaluación especializada
                            </h3>

                            <p className="text-xl text-slate-700">
                            Enfoque postural y biomecánico para una atención más precisa
                            </p>
                        </div>
                    </div>
                    
                    {/* Experiencia */}
                    <div className="flex items-center justify-center gap-5 px-8 border-l border-gray-500">
                        <Dumbbell className="w-14 h-14 text-teal-700" strokeWidth={2} />
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-slate-900">
                            Rehabilitación integral
                            </h3>

                            <p className="text-xl text-slate-700">
                            Experiencia en lesiones deportivas y dolor musculoesquelético
                            </p>
                        </div>
                    </div>

                    {/* Atención personalizada */}
                    <div className="flex items-center justify-center gap-5 px-8 border-l border-gray-500">
                        <HeartHandshake className="w-14 h-14 text-teal-700" strokeWidth={2} />

                        <div className="text-left">
                            <h3 className="text-xl font-bold text-slate-900">
                            Atención personalizada
                            </h3>

                            <p className="text-xl text-slate-700">
                            Programas terapéuticos enfocados en recuperar movilidad y funcionalidad
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}