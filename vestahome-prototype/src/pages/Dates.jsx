import { useState } from 'react';
import '../css/Dates.css';
import ModalDates from './ModalDates.jsx';
import ModalHorario from './ModalHorario.jsx';

function Dates() {
    const [tabActiva, setTabActiva] = useState('proximas');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isHorarioOpen, setIsHorarioOpen] = useState(false);

    const [horarios, setHorarios] = useState([
        '10:00 AM',
        '11:30 AM',
        '01:00 PM'
    ]);

    const apartamento = {
        nombre: 'Ático de Lujo',
        ubicacion: 'Upper East Side, NY',
        imagen: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00'
    };

    const agregarHorario = (nuevoHorario) => {
        setHorarios([
            ...horarios,
            nuevoHorario
        ]);
    };

    return (
        <div className="cont-dates">

            <div className="header">

                <div className="textos-vis">

                    <h1 className="h1-vis">
                        Gestión de Citas
                    </h1>

                    <p className="p-vis">
                        Organiza y realiza el seguimiento de las visitas a las propiedades en tu cartera.
                    </p>

                </div>

                <div className="btn-horario">

                    <a
                        className="btn-horario-style"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsHorarioOpen(true);
                        }}
                    >
                        + Crear Horario
                    </a>

                </div>

            </div>

            <div className="tabs-citas">

                <a
                    className={`btn-tab-citas ${
                        tabActiva === 'proximas'
                            ? 'active'
                            : ''
                    }`}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        setTabActiva('proximas');
                    }}
                >
                    Próximas
                </a>

            </div>

            <ModalDates
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                apartamento={apartamento}
                horarios={horarios}
            />

            <ModalHorario
                isOpen={isHorarioOpen}
                onClose={() => setIsHorarioOpen(false)}
                agregarHorario={agregarHorario}
            />

        </div>
    );
}

export default Dates;