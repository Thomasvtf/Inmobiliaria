import { useEffect, useState } from 'react';
import '../css/ModalDates.css';

function ModalDates({
    isOpen,
    onClose,
    apartamento
}) {
    const [fecha, setFecha] = useState(
        new Date()
    );

    const [horaSeleccionada, setHoraSeleccionada] =
        useState('');

    const [nombre, setNombre] =
        useState('');

    const [comentario, setComentario] =
        useState('');

    const [horarios, setHorarios] =
        useState([]);

    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    const diasSemana = [
        'D',
        'L',
        'M',
        'X',
        'J',
        'V',
        'S'
    ];

    const cargarHorarios = () => {
        const horariosGuardados =
            JSON.parse(
                localStorage.getItem('horarios')
            ) || [];

        setHorarios(horariosGuardados);
    };

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        cargarHorarios();

        window.addEventListener(
            'horariosActualizados',
            cargarHorarios
        );

        window.addEventListener(
            'storage',
            cargarHorarios
        );

        return () => {
            window.removeEventListener(
                'horariosActualizados',
                cargarHorarios
            );

            window.removeEventListener(
                'storage',
                cargarHorarios
            );
        };
    }, [isOpen]);

    useEffect(() => {
        setHoraSeleccionada('');
    }, [fecha]);

    const crearFechaTexto = (date) => {
        const año =
            date.getFullYear();

        const mes =
            String(
                date.getMonth() + 1
            ).padStart(2, '0');

        const dia =
            String(
                date.getDate()
            ).padStart(2, '0');

        return `${año}-${mes}-${dia}`;
    };

    const cambiarMes = (cantidad) => {
        setFecha(
            new Date(
                fecha.getFullYear(),
                fecha.getMonth() + cantidad,
                1
            )
        );
    };

    const obtenerDias = () => {
        const año =
            fecha.getFullYear();

        const mes =
            fecha.getMonth();

        const primerDia =
            new Date(
                año,
                mes,
                1
            ).getDay();

        const cantidadDias =
            new Date(
                año,
                mes + 1,
                0
            ).getDate();

        const cantidadDiasAnterior =
            new Date(
                año,
                mes,
                0
            ).getDate();

        const dias = [];

        for (
            let i = primerDia - 1;
            i >= 0;
            i--
        ) {
            dias.push({
                numero:
                    cantidadDiasAnterior - i,
                tipo: 'anterior'
            });
        }

        for (
            let i = 1;
            i <= cantidadDias;
            i++
        ) {
            dias.push({
                numero: i,
                tipo: 'actual'
            });
        }

        let siguiente = 1;

        while (dias.length < 42) {
            dias.push({
                numero: siguiente,
                tipo: 'siguiente'
            });

            siguiente++;
        }

        return dias;
    };

    const seleccionarDia = (dia) => {
        if (dia.tipo !== 'actual') {
            return;
        }

        setFecha(
            new Date(
                fecha.getFullYear(),
                fecha.getMonth(),
                dia.numero
            )
        );
    };

    const horariosDisponibles =
        horarios.filter(
            (horario) =>
                horario.fecha ===
                crearFechaTexto(fecha)
        );

    const formatearHora = (hora) => {
        if (!hora) {
            return '';
        }

        const partes =
            hora.split(':');

        let horas =
            Number(partes[0]);

        const minutos =
            partes[1];

        const periodo =
            horas >= 12
                ? 'PM'
                : 'AM';

        horas =
            horas % 12;

        if (horas === 0) {
            horas = 12;
        }

        return `${horas}:${minutos} ${periodo}`;
    };

    const confirmarCita = () => {
        if (
            nombre.trim() === '' ||
            horaSeleccionada === ''
        ) {
            return;
        }

        const horario =
            horariosDisponibles.find(
                (item) =>
                    item.horaInicio ===
                    horaSeleccionada
            );

        if (!horario) {
            return;
        }

        const citas =
            JSON.parse(
                localStorage.getItem('citas')
            ) || [];

        const nuevaCita = {
            id: Date.now(),

            nombre:
                nombre.trim(),

            lugar:
                apartamento.nombre,

            ubicacion:
                apartamento.ubicacion,

            fecha:
                crearFechaTexto(fecha),

            hora:
                horario.horaInicio,

            horaFin:
                horario.horaFin,

            comentario:
                comentario.trim(),

            estado:
                'Pendiente'
        };

        const citasActualizadas = [
            ...citas,
            nuevaCita
        ];

        localStorage.setItem(
            'citas',
            JSON.stringify(
                citasActualizadas
            )
        );

        window.dispatchEvent(
            new Event('citasActualizadas')
        );

        setNombre('');
        setComentario('');
        setHoraSeleccionada('');

        onClose();
    };

    if (!isOpen || !apartamento) {
        return null;
    }

    const dias =
        obtenerDias();

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >

            <div
                className="modal-container"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >

                <div className="modal-left">

                    <div
                        className="property-image-placeholder"
                        style={{
                            backgroundImage:
                                `url(${apartamento.imagen})`
                        }}
                    >

                        <div className="property-info-overlay">

                            <h2>
                                {apartamento.nombre}
                            </h2>

                            <p>
                                {apartamento.ubicacion}
                            </p>

                        </div>

                    </div>

                </div>

                <div className="modal-right">

                    <div className="modal-header-top">

                        <h2>
                            Solicitar Cita
                        </h2>

                        <button
                            className="close-btn"
                            onClick={onClose}
                        >
                            ×
                        </button>

                    </div>

                    <div className="datos-cita">

                        <div className="campo-cita">

                            <label>
                                Nombre
                            </label>

                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) =>
                                    setNombre(
                                        e.target.value
                                    )
                                }
                                placeholder="Ingrese su nombre"
                            />

                        </div>

                        <div className="campo-cita">

                            <label>
                                Lugar de la visita
                            </label>

                            <input
                                type="text"
                                value={
                                    apartamento.nombre
                                }
                                readOnly
                            />

                        </div>

                    </div>

                    <div className="calendar-section">

                        <div className="calendar-month">

                            <span>
                                {
                                    meses[
                                        fecha.getMonth()
                                    ]
                                }{' '}
                                {
                                    fecha.getFullYear()
                                }
                            </span>

                            <div className="calendar-arrows">

                                <button
                                    onClick={() =>
                                        cambiarMes(-1)
                                    }
                                >
                                    ‹
                                </button>

                                <button
                                    onClick={() =>
                                        cambiarMes(1)
                                    }
                                >
                                    ›
                                </button>

                            </div>

                        </div>

                        <div className="calendar-grid-days">

                            {diasSemana.map(
                                (dia) => (
                                    <span
                                        className="calendar-week"
                                        key={dia}
                                    >
                                        {dia}
                                    </span>
                                )
                            )}

                            {dias.map(
                                (
                                    dia,
                                    index
                                ) => {

                                    const seleccionado =
                                        dia.tipo ===
                                            'actual' &&
                                        dia.numero ===
                                            fecha.getDate();

                                    return (
                                        <button
                                            key={index}
                                            className={`
                                                calendar-day
                                                ${
                                                    dia.tipo !==
                                                    'actual'
                                                        ? 'other-month'
                                                        : ''
                                                }
                                                ${
                                                    seleccionado
                                                        ? 'selected-day'
                                                        : ''
                                                }
                                            `}
                                            onClick={() =>
                                                seleccionarDia(
                                                    dia
                                                )
                                            }
                                            disabled={
                                                dia.tipo !==
                                                'actual'
                                            }
                                        >
                                            {
                                                dia.numero
                                            }
                                        </button>
                                    );
                                }
                            )}

                        </div>

                    </div>

                    <div className="hours-section">

                        <h3>
                            Horarios Disponibles
                        </h3>

                        <div className="hours-grid">

                            {horariosDisponibles.length === 0 ? (

                                <p className="sin-horarios">
                                    No hay horarios disponibles.
                                </p>

                            ) : (

                                horariosDisponibles.map(
                                    (
                                        horario
                                    ) => (

                                        <button
                                            key={
                                                horario.id
                                            }
                                            className={`
                                                hour-btn
                                                ${
                                                    horario.horaInicio ===
                                                    horaSeleccionada
                                                        ? 'active-hour'
                                                        : ''
                                                }
                                            `}
                                            onClick={() =>
                                                setHoraSeleccionada(
                                                    horario.horaInicio
                                                )
                                            }
                                        >
                                            {
                                                formatearHora(
                                                    horario.horaInicio
                                                )
                                            }
                                        </button>

                                    )
                                )

                            )}

                        </div>

                    </div>

                    <div className="comments-section">

                        <h3>
                            Solicitudes Especiales (Opcional)
                        </h3>

                        <textarea
                            value={comentario}
                            onChange={(e) =>
                                setComentario(
                                    e.target.value
                                )
                            }
                            placeholder="¿Le gustaría centrarse en características específicas durante el recorrido?"
                        ></textarea>

                    </div>

                    <button
                        className="submit-btn"
                        onClick={
                            confirmarCita
                        }
                    >
                        Confirmar Solicitud
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ModalDates;