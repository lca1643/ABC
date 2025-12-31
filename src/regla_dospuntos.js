export const unidadDosPuntos = {
    teoria: [
        {
            tipo: 'Enumeraciones',
            definicion: 'Se usan antes de una enumeración que ha sido anunciada previamente.',
            color: '#E0F2F1'
        },
        {
            tipo: 'Citas textuales',
            definicion: 'Se usan tras verbos de lengua (decir, exclamar, escribir) para introducir una cita directa.',
            color: '#FFF3E0'
        },
        {
            tipo: 'Saludos y cartas',
            definicion: 'Se usan tras las fórmulas de saludo en el encabezamiento de cartas, correos o documentos.',
            color: '#F3E5F5'
        }
    ],
    ejemplos: [
        {
            palabraClave: 'mío:',
            cita: 'Querido amigo mío: Te escribo estas líneas desde la soledad de mi alcoba, donde los recuerdos me asaltan.',
            autor: 'Gustavo Adolfo Bécquer',
            libro: 'Cartas desde mi celda',
            justificacion: 'Uso obligatorio de dos puntos tras el saludo en una carta o documento.'
        },
        {
            palabraClave: 'dijo:',
            cita: 'Y el hidalgo se volvió a su escudero y le dijo: "Sancho, los perros ladran, señal de que cabalgamos".',
            autor: 'Miguel de Cervantes',
            libro: 'Don Quijote de la Mancha',
            justificacion: 'Se usan dos puntos para introducir una cita textual tras un verbo de habla.'
        },
        {
            palabraClave: 'cosas:',
            cita: 'Tres cosas hay en la vida que no tienen retorno: el tiempo, las palabras y las oportunidades.',
            autor: 'Lope de Vega',
            libro: 'Aforismos',
            justificacion: 'Uso de dos puntos antes de una enumeración anunciada por un elemento general ("Tres cosas").'
        },
        {
            palabraClave: 'conclusión:',
            cita: 'El destino es caprichoso; una sola conclusión: estamos solos en este inmenso universo.',
            autor: 'Pío Baroja',
            libro: 'El árbol de la ciencia',
            justificacion: 'Se usan para introducir una explicación, resumen o conclusión de la proposición anterior.'
        },
        {
            palabraClave: 'señores:',
            cita: 'Estimados señores: Siento comunicarles que mi decisión es irrevocable y que parto hoy mismo.',
            autor: 'Benito Pérez Galdós',
            libro: 'Episodios Nacionales',
            justificacion: 'Fórmula de saludo formal en correspondencia.'
        },
        {
            palabraClave: 'exclamó:',
            cita: 'Entonces, el poeta levantó la vista al cielo y exclamó: "¡Oh, libertad, cuántos crímenes se cometen en tu nombre!".',
            autor: 'Federico García Lorca',
            libro: 'Mariana Pineda',
            justificacion: 'Introducción de una exclamación directa tras un verbo de acción comunicativa.'
        },
        {
            palabraClave: 'ingredientes:',
            cita: 'Para alcanzar la gloria se necesitan tres ingredientes: valor, constancia y una pizca de suerte.',
            autor: 'Francisco de Quevedo',
            libro: 'Prosa diversa',
            justificacion: 'Anuncio de una lista o enumeración descriptiva.'
        },
        {
            palabraClave: 'escribe:',
            cita: 'Como bien escribe el filósofo: la paciencia es la madre de todas las ciencias de este mundo.',
            autor: 'Azorín',
            libro: 'Ensayos',
            justificacion: 'Se usan para introducir frases célebres o citas de autoridad.'
        },
        {
            palabraClave: 'razón:',
            cita: 'No hables más, que ya tienes razón: el silencio es a veces la respuesta más sabia.',
            autor: 'Antonio Machado',
            libro: 'Juan de Mairena',
            justificacion: 'Relación de causa-efecto o explicación entre dos oraciones sin usar nexo.'
        },
        {
            palabraClave: 'advertencia:',
            cita: 'Hacedme caso, que esta es mi advertencia: no piséis el umbral de aquella casa maldita.',
            autor: 'Valle-Inclán',
            libro: 'Tirano Banderas',
            justificacion: 'Uso de dos puntos para llamar la atención sobre lo que se va a decir a continuación.'
        }
    ],
    ejercicios: [
        {
            pregunta: '¿Cuál es el uso correcto tras un saludo en una carta?',
            opciones: ['Dos puntos', 'Coma', 'Punto y seguido', 'Nada'],
            correcta: 'Dos puntos',
            justificacion: 'En español, tras el saludo inicial de una carta siempre se ponen dos puntos.'
        },
        {
            pregunta: '¿Qué signo falta tras "dijo" en: Mi madre dijo "Tened cuidado"?',
            opciones: ['Dos puntos', 'Punto y coma', 'Punto central', 'Guion largo'],
            correcta: 'Dos puntos',
            justificacion: 'Se usan dos puntos para introducir citas textuales.'
        },
        {
            pregunta: '¿Es correcta la frase: "Compré: leche y pan"?',
            opciones: ['No, no se separan de la frase', 'Sí, para marcar la lista', 'Solo si son muchos objetos', 'Solo en poesía'],
            correcta: 'No, no se separan de la frase',
            justificacion: 'No deben ponerse dos puntos entre el verbo y sus complementos si no hay un elemento anticipador.'
        },
        {
            pregunta: 'Se usan dos puntos antes de:',
            opciones: ['Enumeraciones anunciadas', 'Cualquier nombre propio', 'El final de un párrafo', 'Una coma'],
            correcta: 'Enumeraciones anunciadas',
            justificacion: 'Debe haber palabras como "siguiente", "estos", "tres", etc., que anuncien la lista.'
        },
        {
            pregunta: '¿Qué signo une "Tiene hambre; no ha comido" con relación de causa?',
            opciones: ['Dos puntos', 'Coma', 'Guion', 'Paréntesis'],
            correcta: 'Dos puntos',
            justificacion: 'Los dos puntos pueden sustituir a conectores como "porque" o "pues".'
        },
        {
            pregunta: '¿Cuál está bien puntuada?',
            opciones: ['Estimado cliente:', 'Estimado cliente,', 'Estimado cliente.', 'Estimado cliente;'],
            correcta: 'Estimado cliente:',
            justificacion: 'Uso obligatorio de dos puntos en el encabezado de correos y cartas.'
        },
        {
            pregunta: 'Tras dos puntos en una carta, la siguiente palabra empieza:',
            opciones: ['Con mayúscula y en renglón aparte', 'Con minúscula siempre', 'Con mayúscula en el mismo renglón', 'Con un dibujo'],
            correcta: 'Con mayúscula y en renglón aparte',
            justificacion: 'Es la norma estándar para el cuerpo de una carta tras el saludo.'
        },
        {
            pregunta: '¿Se pueden usar dos puntos para cerrar un resumen o conclusión?',
            opciones: ['Sí', 'No, solo el punto final', 'Solo si hay comillas', 'Solo en matemáticas'],
            correcta: 'Sí',
            justificacion: 'Sirven para resumir lo expuesto en la proposición anterior.'
        },
        {
            pregunta: '¿Qué falta aquí: "El guía gritó "¡Corran!"?',
            opciones: ['Dos puntos', 'Coma vocal', 'Nada', 'Signo de interrogación'],
            correcta: 'Dos puntos',
            justificacion: 'Antes de abrir comillas para una cita directa.'
        },
        {
            pregunta: 'En "Varias ciudades Sevilla, Cadiz y Huelva", faltan:',
            opciones: ['Dos puntos tras ciudades', 'Comas tras todas', 'Puntos suspensivos', 'Nada'],
            correcta: 'Dos puntos tras ciudades',
            justificacion: 'Se anuncian las ciudades y luego se enumeran.'
        }
    ]
};
