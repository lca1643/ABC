import { useState } from 'react'
import './App.css'
import { unidadAcentuacion } from './regla_acentuacion'
import { unidadBV } from './regla_bv'
import { unidadH } from './regla_h'
import { unidadCSZ } from './regla_csz'
import { unidadGJ } from './regla_gj'
import { unidadIYLL } from './regla_iyll'
import { unidadComa } from './regla_coma'
import { unidadPuntoComa } from './regla_puntocoma'
import { unidadDosPuntos } from './regla_dospuntos'

function App() {
  const [temaSeleccionado, setTemaSeleccionado] = useState(null)
  const [ejemploActivo, setEjemploActivo] = useState(0)
  const [modoVista, setModoVista] = useState('ejemplos') // 'ejemplos' | 'ejercicios'
  const [ejercicioActivo, setEjercicioActivo] = useState(0)
  const [puntuacion, setPuntuacion] = useState(0)
  const [respondido, setRespondido] = useState(false)
  const [esCorrecto, setEsCorrecto] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mapeo de datos según el tema
  const datosTema = {
    'Acentuación': unidadAcentuacion,
    'Uso de B y V': unidadBV,
    'Uso de la H': unidadH,
    'Uso de C, S, Z': unidadCSZ,
    'Uso de G y J': unidadGJ,
    'Uso de I, Y, LL': unidadIYLL,
    'Uso de la Coma': unidadComa,
    'Uso del Punto y Coma': unidadPuntoComa,
    'Uso de los Dos Puntos': unidadDosPuntos
  };

  const unidadActual = temaSeleccionado ? datosTema[temaSeleccionado] : null;

  // Helper to highlight the keyword in the cita
  const renderCitaConResaltado = (cita, palabra) => {
    if (!cita || !palabra) return cita;
    const partes = cita.split(new RegExp(`(${palabra})`, 'gi'));
    return partes.map((parte, i) =>
      parte.toLowerCase() === palabra.toLowerCase() ?
        <span key={i} className="highlight-rae">{parte}</span> :
        parte
    );
  };

  const manejarRespuesta = (opcion) => {
    if (respondido) return;
    const correcto = opcion === unidadActual.ejercicios[ejercicioActivo].correcta;
    setEsCorrecto(correcto);
    setRespondido(true);
    if (correcto) {
      setPuntuacion(prev => prev + 1);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const reintentar = () => {
    setRespondido(false);
    setEsCorrecto(null);
  };

  const siguienteEjercicio = () => {
    if (ejercicioActivo < unidadActual.ejercicios.length - 1) {
      setEjercicioActivo(prev => prev + 1);
      setRespondido(false);
      setEsCorrecto(null);
    }
  };

  const cambiarTema = (nuevoTema) => {
    setTemaSeleccionado(nuevoTema);
    setModoVista('ejemplos');
    setEjemploActivo(0);
    setPuntuacion(0);
    setEjercicioActivo(0);
    setRespondido(false);
    setEsCorrecto(null);
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          ☰
        </button>
        <h1 className="header-title">ABC Ortografía</h1>
        <p className="header-subtitle">Cervantes, Bécquer, Unamuno...</p>
        <p className="header-author">Luis Corona</p>
      </header>

      <div className="content-body">
        <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <button
            className="menu-btn btn-home"
            title="Inicio"
            onClick={() => cambiarTema(null)}
          >
            🏠
          </button>

          <button
            className={`menu-btn btn-accent ${temaSeleccionado === 'Acentuación' ? 'active' : ''}`}
            onClick={() => cambiarTema('Acentuación')}
          >
            Acentuación
          </button>

          <button
            className={`menu-btn btn-bv ${temaSeleccionado === 'Uso de B y V' ? 'active' : ''}`}
            onClick={() => cambiarTema('Uso de B y V')}
          >
            Uso de B y V
          </button>

          <button
            className={`menu-btn btn-h ${temaSeleccionado === 'Uso de la H' ? 'active' : ''}`}
            onClick={() => cambiarTema('Uso de la H')}
          >
            Uso de la H
          </button>

          <button
            className={`menu-btn btn-csz ${temaSeleccionado === 'Uso de C, S, Z' ? 'active' : ''}`}
            onClick={() => cambiarTema('Uso de C, S, Z')}
          >
            Uso de C, S, Z
          </button>

          <button
            className={`menu-btn btn-gj ${temaSeleccionado === 'Uso de G y J' ? 'active' : ''}`}
            onClick={() => cambiarTema('Uso de G y J')}
          >
            Uso de G y J
          </button>

          <button
            className={`menu-btn btn-iyll ${temaSeleccionado === 'Uso de I, Y, LL' ? 'active' : ''}`}
            onClick={() => cambiarTema('Uso de I, Y, LL')}
          >
            Uso de I, Y, LL
          </button>

          <button
            className={`menu-btn btn-coma ${temaSeleccionado === 'Uso de la Coma' ? 'active' : ''}`}
            onClick={() => cambiarTema('Uso de la Coma')}
          >
            Uso de la Coma
          </button>

          <button
            className={`menu-btn btn-puntocoma ${temaSeleccionado === 'Uso del Punto y Coma' ? 'active' : ''}`}
            onClick={() => cambiarTema('Uso del Punto y Coma')}
          >
            Uso del Punto y Coma
          </button>

          <button
            className={`menu-btn btn-dospuntos ${temaSeleccionado === 'Uso de los Dos Puntos' ? 'active' : ''}`}
            onClick={() => cambiarTema('Uso de los Dos Puntos')}
          >
            Uso de los Dos Puntos
          </button>
        </aside>

        <main
          className="workspace-container"
          onClick={() => isMenuOpen && setIsMenuOpen(false)}
        >
          <div className="workspace-card">
            {unidadActual ? (
              <div className="study-view">
                <h2 className="workspace-title">{temaSeleccionado}</h2>

                {/* SECCIÓN SUPERIOR: Teoría */}
                <section className="theory-section">
                  {unidadActual.teoria.map((item, index) => (
                    <div
                      key={index}
                      className="theory-card"
                    >
                      <h3>{item.tipo}</h3>
                      <p>{item.definicion}</p>
                    </div>
                  ))}
                </section>

                {/* SECCIÓN INFERIOR: Exploración / Ejercicios */}
                <section className="exploration-section">
                  <div className="example-selector">
                    {/* Botones de Navegación de Modo */}
                    {unidadActual.ejemplos.map((_, index) => (
                      <button
                        key={`ex-${index}`}
                        className={`example-btn ${modoVista === 'ejemplos' && ejemploActivo === index ? 'active' : ''}`}
                        onClick={() => {
                          setModoVista('ejemplos');
                          setEjemploActivo(index);
                        }}
                      >
                        Ejemplo {index + 1}
                      </button>
                    ))}
                    <button
                      className={`example-btn ${modoVista === 'ejercicios' ? 'active' : ''}`}
                      onClick={() => {
                        setModoVista('ejercicios');
                        setPuntuacion(0);
                        setEjercicioActivo(0);
                        setRespondido(false);
                        setEsCorrecto(null);
                      }}
                    >
                      Ejercicios
                    </button>
                  </div>

                  {/* Sub-selector de ejercicios específicos */}
                  {modoVista === 'ejercicios' && (
                    <div className="example-selector" style={{ marginTop: '1rem', borderTop: '1px dashed #DDD', paddingTop: '1rem' }}>
                      {unidadActual.ejercicios.map((_, index) => (
                        <button
                          key={`ej-${index}`}
                          className={`example-btn ${ejercicioActivo === index ? 'active' : ''}`}
                          onClick={() => {
                            setEjercicioActivo(index);
                            setRespondido(false);
                            setEsCorrecto(null);
                          }}
                        >
                          Ejer. {index + 1}
                        </button>
                      ))}
                    </div>
                  )}

                  {modoVista === 'ejemplos' ? (
                    <div className="pergamino-card">
                      <h3 className="exploration-title">Aprendiendo con los Clásicos</h3>
                      <p className="cita-literaria">
                        "{renderCitaConResaltado(
                          unidadActual.ejemplos[ejemploActivo].cita,
                          unidadActual.ejemplos[ejemploActivo].palabraClave
                        )}"
                      </p>
                      <span className="referencia-literaria">
                        — {unidadActual.ejemplos[ejemploActivo].autor}, <i>{unidadActual.ejemplos[ejemploActivo].libro}</i>.
                      </span>
                      <div className="justificacion-box">
                        <strong>Explicación:</strong> {unidadActual.ejemplos[ejemploActivo].justificacion}
                      </div>
                    </div>
                  ) : (
                    <div className="exercise-module">
                      <div className="score-container">
                        Puntuación: {puntuacion} / {unidadActual.ejercicios.length}
                      </div>

                      <div className="exercise-card">
                        <p className="exercise-pregunta">
                          {ejercicioActivo + 1}. {unidadActual.ejercicios[ejercicioActivo].pregunta}
                        </p>

                        <div className="options-grid">
                          {unidadActual.ejercicios[ejercicioActivo].opciones.map((opcion, index) => (
                            <button
                              key={index}
                              disabled={respondido}
                              className={`option-btn ${respondido && opcion === unidadActual.ejercicios[ejercicioActivo].correcta ? 'correct' :
                                respondido && !esCorrecto && opcion !== unidadActual.ejercicios[ejercicioActivo].correcta ? 'disabled' : ''
                                }`}
                              onClick={() => manejarRespuesta(opcion)}
                            >
                              {opcion}
                            </button>
                          ))}
                        </div>

                        {respondido && (
                          <div className={`feedback-area ${esCorrecto ? 'feedback-success' : 'feedback-error'}`}>
                            <p className="feedback-message">
                              {esCorrecto ? '¡Correcto! Excelente trabajo.' : 'Ups, esa no es la respuesta correcta.'}
                            </p>
                            <p>{unidadActual.ejercicios[ejercicioActivo].justificacion}</p>

                            {!esCorrecto && (
                              <button className="retry-btn" onClick={reintentar}>
                                Volver a intentar
                              </button>
                            )}

                            {esCorrecto && ejercicioActivo < unidadActual.ejercicios.length - 1 && (
                              <button className="next-exercise-btn" onClick={siguienteEjercicio}>
                                Siguiente Ejercicio
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </section>
              </div>
            ) : (
              <p className="placeholder-text">
                Selecciona un tema en el menú lateral para comenzar
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
