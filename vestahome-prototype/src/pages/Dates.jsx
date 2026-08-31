import { useEffect, useState } from 'react';
import '../css/Dates.css';
import ModalHorario from './ModalHorario.jsx';

function Dates() {
    const [tabActiva, setTabActiva] = useState('proximas');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [citas, setCitas] = useState([]);

    const cargarCitas = () => {
        const citasGuardadas =
            JSON.parse(localStorage.getItem('citas')) || [];

        setCitas(citasGuardadas);
    };

    useEffect(() => {
        cargarCitas();

        window.addEventListener(
            'citasActualizadas',
            cargarCitas
        );

        window.addEventListener(
            'storage',
            cargarCitas
        );

        return () => {
            window.removeEventListener(
                'citasActualizadas',
                cargarCitas
            );

            window.removeEventListener(
                'storage',
                cargarCitas
            );
        };
    }, []);

    const formatearHora = (hora) => {
        if (!hora) {
            return '';
        }

        const partes = hora.split(':');

        let horas = Number(partes[0]);
        const minutos = partes[1];

        const periodo = horas >= 12 ? 'PM' : 'AM';

        horas = horas % 12;

        if (horas === 0) {
            horas = 12;
        }

        return `${horas}:${minutos} ${periodo}`;
    };

    const obtenerFecha = (fecha) => {
        if (!fecha) {
            return {
                dia: '',
                mes: ''
            };
        }

        const partes = fecha.split('-');

        if (partes.length !== 3) {
            return {
                dia: '',
                mes: ''
            };
        }

        const dia = Number(partes[2]);
        const mesNumero = Number(partes[1]);

        const meses = [
            'ENE',
            'FEB',
            'MAR',
            'ABR',
            'MAY',
            'JUN',
            'JUL',
            'AGO',
            'SEP',
            'OCT',
            'NOV',
            'DIC'
        ];

        return {
            dia,
            mes: meses[mesNumero - 1]
        };
    };

    const calcularDuracion = (horaInicio, horaFin) => {
        if (!horaInicio || !horaFin) {
            return '';
        }

        const inicio = horaInicio.split(':');
        const fin = horaFin.split(':');

        const minutosInicio =
            Number(inicio[0]) * 60 +
            Number(inicio[1]);

        const minutosFin =
            Number(fin[0]) * 60 +
            Number(fin[1]);

        const diferencia =
            minutosFin - minutosInicio;

        if (diferencia <= 0) {
            return '';
        }

        return `${diferencia} MINUTOS`;
    };

    const aprobarCita = (id) => {
        const citasActualizadas = citas.map((cita) => {
            if (cita.id === id) {
                return {
                    ...cita,
                    estado: 'Aprobada'
                };
            }

            return cita;
        });

        setCitas(citasActualizadas);

        localStorage.setItem(
            'citas',
            JSON.stringify(citasActualizadas)
        );
    };

    const cancelarCita = (id) => {
        const citasActualizadas = citas.map((cita) => {
            if (cita.id === id) {
                return {
                    ...cita,
                    estado: 'Cancelada'
                };
            }

            return cita;
        });

        setCitas(citasActualizadas);

        localStorage.setItem(
            'citas',
            JSON.stringify(citasActualizadas)
        );
    };

    const reprogramarCita = (cita) => {
        const nuevaFecha = window.prompt(
            'Ingrese la nueva fecha (AAAA-MM-DD):',
            cita.fecha
        );

        if (!nuevaFecha) {
            return;
        }

        const nuevaHora = window.prompt(
            'Ingrese la nueva hora (HH:MM):',
            cita.hora
        );

        if (!nuevaHora) {
            return;
        }

        const citasActualizadas = citas.map(
            (citaActual) => {
                if (citaActual.id === cita.id) {
                    return {
                        ...citaActual,
                        fecha: nuevaFecha,
                        hora: nuevaHora,
                        estado: 'Pendiente'
                    };
                }

                return citaActual;
            }
        );

        setCitas(citasActualizadas);

        localStorage.setItem(
            'citas',
            JSON.stringify(citasActualizadas)
        );
    };

    const citasProximas = citas.filter(
        (cita) => cita.estado !== 'Cancelada'
    );

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
                            setIsModalOpen(true);
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

            <div className="citas-container">

                {citasProximas.length === 0 ? (

                    <p className="sin-citas">
                        No hay citas pendientes.
                    </p>

                ) : (

                    citasProximas.map((cita) => {

                        const fecha =
                            obtenerFecha(cita.fecha);

                        return (
                            <div
                                className="cita-card"
                                key={cita.id}
                            >

                                <div className="cita-fecha">

                                    <strong>
                                        {fecha.mes}
                                    </strong>

                                    <span>
                                        {fecha.dia}
                                    </span>

                                    <small>
                                        {formatearHora(
                                            cita.hora
                                        )}
                                    </small>

                                    <small>
                                        {calcularDuracion(
                                            cita.hora,
                                            cita.horaFin
                                        )}
                                    </small>

                                </div>

                                <div className="cita-informacion">

                                    <div className="cita-informacion-header">

                                        <h3>
                                            {cita.nombre}
                                        </h3>

                                        <span className="cita-estado">
                                            PRÓXIMA
                                        </span>

                                    </div>

                                    <p className="cita-lugar">
                                        <span>
                                            ◉
                                        </span>

                                        {cita.lugar}
                                    </p>

                                    <div className="cita-linea"></div>

                                    <div className="cita-acciones">

                                        <button
                                            className="btn-aprobar"
                                            onClick={() =>
                                                aprobarCita(
                                                    cita.id
                                                )
                                            }
                                        >
                                            Aprobar
                                        </button>

                                        <button
                                            className="btn-reprogramar"
                                            onClick={() =>
                                                reprogramarCita(
                                                    cita
                                                )
                                            }
                                        >
                                            Reprogramar
                                        </button>

                                        <button
                                            className="btn-cancelar"
                                            onClick={() =>
                                                cancelarCita(
                                                    cita.id
                                                )
                                            }
                                        >
                                            Cancelar
                                        </button>

                                    </div>

                                </div>

                            </div>
                        );
                    })
                )}

            </div>

            <ModalHorario
                isOpen={isModalOpen}
                onClose={() =>
                    setIsModalOpen(false)
                }
            />

        </div>
    );
}

export default Dates;