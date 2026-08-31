import { useState } from 'react';
import '../css/ModalHorario.css';

function ModalHorario({ isOpen, onClose }) {
    const [fecha, setFecha] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFin, setHoraFin] = useState('');
    const [repetir, setRepetir] = useState(false);

    const guardarHorario = (e) => {
        e.preventDefault();

        if (
            fecha === '' ||
            horaInicio === '' ||
            horaFin === ''
        ) {
            return;
        }

        if (horaFin <= horaInicio) {
            return;
        }

        const horarios =
            JSON.parse(
                localStorage.getItem('horarios')
            ) || [];

        const nuevoHorario = {
            id: Date.now(),
            fecha: fecha,
            horaInicio: horaInicio,
            horaFin: horaFin,
            repetir: repetir
        };

        const horariosActualizados = [
            ...horarios,
            nuevoHorario
        ];

        localStorage.setItem(
            'horarios',
            JSON.stringify(horariosActualizados)
        );

        window.dispatchEvent(
            new Event('horariosActualizados')
        );

        setFecha('');
        setHoraInicio('');
        setHoraFin('');
        setRepetir(false);

        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >

            <div
                className="modal-horario"
                onClick={(e) =>
                    e.stopPropagation()
                }
            >

                <div className="modal-horario-header">

                    <h2>
                        Crear Horario
                    </h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ×
                    </button>

                </div>

                <p className="modal-horario-texto">
                    Crea un horario disponible para realizar visitas a las propiedades.
                </p>

                <form onSubmit={guardarHorario}>

                    <div className="campo-horario">

                        <label>
                            Fecha
                        </label>

                        <input
                            type="date"
                            value={fecha}
                            onChange={(e) =>
                                setFecha(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <div className="horas-horario">

                        <div className="campo-horario">

                            <label>
                                Hora de inicio
                            </label>

                            <input
                                type="time"
                                value={horaInicio}
                                onChange={(e) =>
                                    setHoraInicio(
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                        <div className="campo-horario">

                            <label>
                                Hora de finalización
                            </label>

                            <input
                                type="time"
                                value={horaFin}
                                onChange={(e) =>
                                    setHoraFin(
                                        e.target.value
                                    )
                                }
                            />

                        </div>

                    </div>

                    <div className="repetir-horario">

                        <input
                            type="checkbox"
                            checked={repetir}
                            onChange={(e) =>
                                setRepetir(
                                    e.target.checked
                                )
                            }
                        />

                        <label>
                            Repetir este horario
                        </label>

                    </div>

                    <div className="botones-horario">

                        <button
                            type="button"
                            className="cancelar-horario"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="guardar-horario"
                        >
                            Crear Horario
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default ModalHorario;