import { Link } from "react-router-dom";

const Code = () => {

    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Código 30 (Buque con Impedimento de salida)</h1>
            <p className="text-lg text-center">
                El Código 30 es un código que se utiliza para indicar que un buque tiene deficiencias o problemas que requieren atención. Este código se asigna a los buques que no cumplen con los estándares de seguridad, mantenimiento o funcionamiento establecidos por las autoridades marítimas.
            </p>
            <p className="text-lg text-center mt-4">
                Cuando un buque recibe el Código 30, significa que se han identificado deficiencias que pueden afectar la seguridad de la tripulación, la carga o el medio ambiente. Estas deficiencias pueden incluir problemas estructurales, fallas en los sistemas de navegación, equipos de seguridad inoperativos o cualquier otra condición que comprometa la seguridad del buque.
            </p>
            <p className="text-lg text-center mt-4">
                Es importante que los buques con Código 30 tomen medidas correctivas para abordar las deficiencias identificadas y cumplir con los requisitos de seguridad. Esto puede implicar reparaciones, mantenimiento adicional, capacitación de la tripulación o cualquier otra acción necesaria para garantizar la seguridad y el cumplimiento de las regulaciones marítimas.
            </p>
            <Link to="/vessels-code-30" className="btn btn-primary mt-6">Ver buques con Código 30</Link>
        </div>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Código 17 (Previo al zarpe)</h1>
            <p className="text-lg text-center">
                El Código 17 es un código que se utiliza para indicar que un buque tiene deficiencias o problemas que requieren atención antes de zarpar. Este código se asigna a los buques que no cumplen con los estándares de seguridad, mantenimiento o funcionamiento establecidos por las autoridades marítimas.
            </p>
            <p className="text-lg text-center mt-4">
                Cuando un buque recibe el Código 17, significa que se han identificado deficiencias que pueden afectar la seguridad de la tripulación, la carga o el medio ambiente. Estas deficiencias pueden incluir problemas estructurales, fallas en los sistemas de navegación, equipos de seguridad inoperativos o cualquier otra condición que comprometa la seguridad del buque.
            </p>
            <p className="text-lg text-center mt-4">
                Es importante que los buques con Código 17 tomen medidas correctivas para abordar las deficiencias identificadas y cumplir con los requisitos de seguridad antes de zarpar. Esto puede implicar reparaciones, mantenimiento adicional, capacitación de la tripulación o cualquier otra acción necesaria para garantizar la seguridad y el cumplimiento de las regulaciones marítimas.
            </p>
            <Link to="/vessels-code-17" className="btn btn-primary bg-green-500 mt-6">Ver buques con Código 17</Link>
        </div>
        </>
    );
}

export default Code;