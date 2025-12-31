export const unidadAcentuacion = {
    teoria: [
        {
            tipo: 'Agudas',
            definicion: 'La sílaba tónica es la última. Llevan tilde si terminan en n, s o vocal.',
            color: '#E3F2FD'
        },
        {
            tipo: 'Llanas (graves)',
            definicion: 'La sílaba tónica es la penúltima. Llevan tilde si NO terminan en n, s o vocal.',
            color: '#E8F5E9'
        },
        {
            tipo: 'Esdrújulas',
            definicion: 'La sílaba tónica es la antepenúltima. Siempre llevan tilde.',
            color: '#FAF3E0'
        }
    ],
    ejemplos: [
        {
            palabraClave: 'corazón',
            cita: 'Digo, pues, que por estos respetos y otros muchos, el corazón me dice que no puede ser sino de caballeros.',
            autor: 'Miguel de Cervantes',
            libro: 'Don Quijote de la Mancha',
            justificacion: "Lleva tilde por ser aguda terminada en 'n'."
        },
        {
            palabraClave: 'felicidad',
            cita: '¡Ah! ¡Qué felicidad si de este modo se pudiera morir!',
            autor: 'Gustavo Adolfo Bécquer',
            libro: 'Rimas y Leyendas',
            justificacion: "Es aguda terminada en 'd' (distinta de n o s), por eso NO lleva tilde."
        },
        {
            palabraClave: 'rostro',
            cita: 'Yo le vine a dar un gran golpe en el rostro con el jarro de vino.',
            autor: 'Anónimo',
            libro: 'Lazarillo de Tormes',
            justificacion: 'Es llana terminada en vocal, por eso NO lleva tilde.'
        },
        {
            palabraClave: 'carácter',
            cita: 'El carácter de Fortunata era una mezcla de ángel y de fiera.',
            autor: 'Benito Pérez Galdós',
            libro: 'Fortunata y Jacinta',
            justificacion: "Lleva tilde por ser llana terminada en 'r' (consonante distinta de n o s)."
        },
        {
            palabraClave: 'atmósfera',
            cita: 'Vetusta, la muy noble y leal ciudad, dormía la siesta de los siglos bajo una atmósfera de plomo.',
            autor: 'Leopoldo Alas "Clarín"',
            libro: 'La Regenta',
            justificacion: 'Es esdrújula. Según la RAE, todas las esdrújulas se acentúan siempre.'
        },
        {
            palabraClave: 'método',
            cita: 'La ciencia es el esfuerzo por convertir la vida en un método.',
            autor: 'Miguel de Unamuno',
            libro: 'Niebla',
            justificacion: 'Es esdrújula, por lo que su acentuación es obligatoria.'
        },
        {
            palabraClave: 'canción',
            cita: '¡Qué bien suena la canción cuando el honor la acompaña!',
            autor: 'Lope de Vega',
            libro: 'Fuenteovejuna',
            justificacion: "Aguda terminada en 'n'."
        },
        {
            palabraClave: 'camino',
            cita: 'Caminante, no hay camino, se hace camino al andar.',
            autor: 'Antonio Machado',
            libro: 'Campos de Castilla',
            justificacion: 'Llana terminada en vocal; no requiere tilde.'
        },
        {
            palabraClave: 'padece',
            cita: 'Sueña el rico en su riqueza, que más cuidados le ofrece; sueña el pobre que padece su miseria y su pobreza.',
            autor: 'Calderón de la Barca',
            libro: 'La vida es sueño',
            justificacion: 'Es llana terminada en vocal, por tanto, sin tilde.'
        },
        {
            palabraClave: 'pasión',
            cita: '¡Oh, qué dolor sentiría si supiera de mi pasión!',
            autor: 'Fernando de Rojas',
            libro: 'La Celestina',
            justificacion: "Aguda terminada en 'n'."
        }
    ],
    ejercicios: [
        {
            pregunta: '¿Por qué "corazón" lleva tilde?',
            opciones: ["Es aguda terminada en 'n'", "Es llana terminada en vocal", "Es esdrújula", "Es un hiato"],
            correcta: "Es aguda terminada en 'n'",
            justificacion: "Lleva tilde por ser aguda terminada en 'n'."
        },
        {
            pregunta: '¿Por qué "felicidad" NO lleva tilde?',
            opciones: ["Es llana", "Es aguda terminada en consonante distinta de n/s", "Es esdrújula", "Termina en vocal"],
            correcta: "Es aguda terminada en consonante distinta de n/s",
            justificacion: "Es aguda terminada en 'd' (distinta de n o s)."
        },
        {
            pregunta: '¿Por qué "rostro" no se acentúa gráficamente?',
            opciones: ["Es esdrújula", "Es aguda", "Es llana terminada en vocal", "Termina en 's'"],
            correcta: "Es llana terminada en vocal",
            justificacion: "Es llana terminada en vocal."
        },
        {
            pregunta: "La palabra 'carácter' lleva tilde porque:",
            opciones: ["Es aguda", "Es llana terminada en 'r'", "Es un monosílabo", "Es una excepción"],
            correcta: "Es llana terminada en 'r'",
            justificacion: "Lleva tilde por ser llana terminada en 'r'."
        },
        {
            pregunta: "¿Cuál es la regla para la palabra 'atmósfera'?",
            opciones: ["Tilde por ser aguda", "Siempre lleva tilde por ser esdrújula", "Tilde por ser llana en vocal", "No lleva tilde"],
            correcta: "Siempre lleva tilde por ser esdrújula",
            justificacion: "Es esdrújula."
        },
        {
            pregunta: "Justifica la tilde en 'método':",
            opciones: ["Es aguda", "Es llana", "Es esdrújula", "Es sobresdrújula"],
            correcta: "Es esdrújula",
            justificacion: "Es esdrújula."
        },
        {
            pregunta: '¿Por qué "canción" lleva tilde?',
            opciones: ["Es aguda terminada en 'n'", "Termina en vocal", "Es llana", "No es una palabra aguda"],
            correcta: "Es aguda terminada en 'n'",
            justificacion: "Aguda terminada en 'n'."
        },
        {
            pregunta: "¿Por qué 'camino' no lleva tilde?",
            opciones: ["Es aguda", "Es llana terminada en vocal", "Es esdrújula", "Es un diptongo"],
            correcta: "Es llana terminada en vocal",
            justificacion: "Llana terminada en vocal."
        },
        {
            pregunta: "Analiza 'padece':",
            opciones: ["Es llana sin tilde", "Debería llevar tilde", "Es aguda", "Es esdrújula"],
            correcta: "Es llana sin tilde",
            justificacion: "Es llana terminada en vocal."
        },
        {
            pregunta: '¿Por qué la palabra "atrás" lleva tilde?',
            opciones: ["Es llana terminada en 's'", "Es aguda terminada en 's'", "Es esdrújula", "Es un monosílabo"],
            correcta: "Es aguda terminada en 's'",
            justificacion: "Es aguda y termina en 's', por lo que debe llevar tilde según las reglas generales."
        }
    ]
};
