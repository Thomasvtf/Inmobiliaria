import { useState } from 'react';
import '../css/ModalDates.css';

function ModalDates({ isOpen, onClose, apartamento, horarios }) {
    const [fecha, setFecha] = useState(new Date(2024, 10, 6));
    const [horaSeleccionada, setHoraSeleccionada] = useState('');
    const [comentario, setComentario] = useState('');

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

    const diasSemana = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

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
        const año = fecha.getFullYear();
        const mes = fecha.getMonth();

        const primerDia = new Date(año, mes, 1).getDay();
        const cantidadDias = new Date(año, mes + 1, 0).getDate();
        const cantidadDiasAnterior = new Date(año, mes, 0).getDate();

        const dias = [];

        for (let i = primerDia - 1; i >= 0; i--) {
            dias.push({
                numero: cantidadDiasAnterior - i,
                tipo: 'anterior'
            });
        }

        for (let i = 1; i <= cantidadDias; i++) {
            dias.push({
                numero: i,
                tipo: 'actual'
            });
        }

        let siguiente = 1;

        while (dias.length < 35) {
            dias.push({
                numero: siguiente,
                tipo: 'siguiente'
            });

            siguiente++;
        }

        return dias;
    };

    const seleccionarDia = (dia) => {
        if (dia.tipo === 'actual') {
            setFecha(
                new Date(
                    fecha.getFullYear(),
                    fecha.getMonth(),
                    dia.numero
                )
            );
        }
    };

    const confirmarCita = () => {
        if (horaSeleccionada === '') {
            return;
        }

        onClose();
    };

    if (!isOpen) {
        return null;
    }

    const dias = obtenerDias();

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="modal-left">

                    <div
                        className="property-image-placeholder"
                        style={{
                            backgroundImage: `url(${apartamento.imagen})`
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

                    <div className="calendar-section">

                        <div className="calendar-month">

                            <span>
                                {meses[fecha.getMonth()]} {fecha.getFullYear()}
                            </span>

                            <div className="calendar-arrows">

                                <button
                                    onClick={() => cambiarMes(-1)}
                                >
                                    ‹
                                </button>

                                <button
                                    onClick={() => cambiarMes(1)}
                                >
                                    ›
                                </button>

                            </div>

                        </div>

                        <div className="calendar-grid-days">

                            {diasSemana.map((dia) => (
                                <span
                                    className="calendar-week"
                                    key={dia}
                                >
                                    {dia}
                                </span>
                            ))}

                            {dias.map((dia, index) => {

                                const seleccionado =
                                    dia.tipo === 'actual' &&
                                    dia.numero === fecha.getDate();

                                return (
                                    <button
                                        key={index}
                                        className={`
                                            calendar-day
                                            ${dia.tipo !== 'actual' ? 'other-month' : ''}
                                            ${seleccionado ? 'selected-day' : ''}
                                        `}
                                        onClick={() => seleccionarDia(dia)}
                                        disabled={dia.tipo !== 'actual'}
                                    >
                                        {dia.numero}
                                    </button>
                                );
                            })}

                        </div>

                    </div>

                    <div className="hours-section">

                        <h3>
                            Horarios Disponibles
                        </h3>

                        <div className="hours-grid">

                            {horarios.map((hora, index) => (

                                <button
                                    key={index}
                                    className={`
                                        hour-btn
                                        ${hora === horaSeleccionada ? 'active-hour' : ''}
                                    `}
                                    onClick={() =>
                                        setHoraSeleccionada(hora)
                                    }
                                >
                                    {hora}
                                </button>

                            ))}

                        </div>

                    </div>

                    <div className="comments-section">

                        <h3>
                            Solicitudes Especiales (Opcional)
                        </h3>

                        <textarea
                            value={comentario}
                            onChange={(e) =>
                                setComentario(e.target.value)
                            }
                            placeholder="¿Le gustaría centrarse en características específicas durante el recorrido?"
                        ></textarea>

                    </div>

                    <button
                        className="submit-btn"
                        onClick={confirmarCita}
                    >
                        Confirmar Solicitud
                    </button>

                </div>

            </div>
        </div>
    );
}

export default ModalDates;