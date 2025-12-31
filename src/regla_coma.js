export const unidadComa = {
    teoria: [
        {
            tipo: 'Coma Enumerativa',
            definicion: 'Se usa para separar los elementos de una enumeración, salvo los que vengan precedidos por las conjunciones y, e, o, u.',
            color: '#FCE4EC'
        },
        {
            tipo: 'Coma Vocativa',
            definicion: 'Se usa para aislar el vocativo (la palabra que se usa para llamar o dirigirse a alguien) del resto de la oración.',
            color: '#F3E5F5'
        },
        {
            tipo: 'Coma Incidental',
            definicion: 'Se usa para encerrar incisos o aclaraciones que interrumpen el flujo de la oración principal.',
            color: '#E1F5FE'
        }
    ],
    ejemplos: [
        {
            palabraClave: ' Sancho,',
            cita: '—Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.',
            autor: 'Miguel de Cervantes',
            libro: 'Don Quijote de la Mancha',
            justificacion: 'El nombre "Sancho" actúa como vocativo y debe ir encerrado entre comas.'
        },
        {
            palabraClave: ' rincón,',
            cita: 'En un rincón, oscuro y silencioso, se alzaba el viejo arpa cubierto de polvo.',
            autor: 'Gustavo Adolfo Bécquer',
            libro: 'Rimas',
            justificacion: 'La coma separa elementos adjetivos que actúan como una breve aclaración o inciso.'
        },
        {
            palabraClave: ' madre,',
            cita: 'Es tan corto el amor, y es tan largo el olvido, madre, que ya no sé si el sol sale por el oriente o por el poniente.',
            autor: 'Pablo Neruda',
            libro: 'Veinte poemas de amor',
            justificacion: 'Uso de coma para aislar el vocativo "madre" en mitad de la frase.'
        },
        {
            palabraClave: ' moscas,',
            cita: 'Las moscas, esas pequeñas e impertinentes criaturas, revoloteaban sobre la mesa del banquete.',
            autor: 'Antonio Machado',
            libro: 'Soledades',
            justificacion: 'Comas incidentales que encierran una aposición explicativa sobre las moscas.'
        },
        {
            palabraClave: ' embargo,',
            cita: 'Sin embargo, el destino tenía preparados otros planes para el joven caballero.',
            autor: 'Lope de Vega',
            libro: 'El perro del hortelano',
            justificacion: 'Se escribe coma tras conectores como "sin embargo", "por consiguiente", "es decir", etc.'
        },
        {
            palabraClave: ' oro,',
            cita: 'Todo lo que brilla no es oro, ni todo lo que reluce es plata.',
            autor: 'Miguel de Cervantes',
            libro: 'Don Quijote de la Mancha',
            justificacion: 'Coma que separa proposiciones coordinadas, a menudo usada antes de conjunciones adversativas o distributivas.'
        },
        {
            palabraClave: ' mar,',
            cita: 'El mar, siempre el mar, con su murmullo eterno de olas y secretos.',
            autor: 'Rafael Alberti',
            libro: 'Marinero en tierra',
            justificacion: 'Uso de comas para dar énfasis y pausa a una repetición incidental.'
        },
        {
            palabraClave: ' flores,',
            cita: 'Trajo flores, incienso, mirra y tesoros de tierras lejanas.',
            autor: 'Rubén Darío',
            libro: 'Cantos de vida y esperanza',
            justificacion: 'Coma enumerativa que separa los distintos elementos de la lista.'
        },
        {
            palabraClave: ' verdad,',
            cita: 'Dime la verdad, aunque duela, pues la mentira es el refugio de los cobardes.',
            autor: 'Francisco de Quevedo',
            libro: 'Obras completas',
            justificacion: 'Coma antes de una conjunción subordinada concesiva ("aunque").'
        },
        {
            palabraClave: ' Dios,',
            cita: '¡Ay, Dios, que me muero de amor en esta playa desierta!',
            autor: 'Federico García Lorca',
            libro: 'Bodas de sangre',
            justificacion: 'Coma vocativa tras una interjección.'
        }
    ],
    ejercicios: [
        {
            pregunta: '¿Cuál es el uso de la coma en: "Juan, ven aquí"?',
            opciones: ['Coma vocativa', 'Coma enumerativa', 'Coma incidental', 'Coma elíptica'],
            correcta: 'Coma vocativa',
            justificacion: 'Se usa para separar el nombre de la persona a la que nos dirigimos.'
        },
        {
            pregunta: '¿Dónde falta una coma en: "Compré pan leche huevos y fruta"?',
            opciones: ['Después de leche', 'Después de fruta', 'Después de pan y leche', 'No falta ninguna'],
            correcta: 'Después de pan y leche',
            justificacion: 'En una enumeración, los elementos se separan por comas excepto el último si lleva conjunción.'
        },
        {
            pregunta: '¿Es correcta la frase: "Sin embargo, nadie vino"?',
            opciones: ['Sí, tras conectores va coma', 'No, sobra la coma', 'Depende de la frase', 'Solo si es al final'],
            correcta: 'Sí, tras conectores va coma',
            justificacion: 'Locuciones como "sin embargo" o "es decir" deben ir seguidas de coma si encabezan la frase.'
        },
        {
            pregunta: '¿Qué tipo de coma encierra "un gran autor" en: "Cervantes, un gran autor, escribió el Quijote"?',
            opciones: ['Apositiva (aclarativa)', 'Vocativa', 'Enumerativa', 'De conjunción'],
            correcta: 'Apositiva (aclarativa)',
            justificacion: 'Las aclaraciones o aposiciones explicativas van entre comas.'
        },
        {
            pregunta: '¿Se pone coma antes de "y" en una enumeración normal?',
            opciones: ['No, por regla general', 'Sí, siempre', 'Solo si la frase es larga', 'Solo en poesía'],
            correcta: 'No, por regla general',
            justificacion: 'La conjunción "y" suele sustituir a la coma en el último elemento.'
        },
        {
            pregunta: '¿Cuál está bien puntuada?',
            opciones: ['Hola, Luis.', 'Hola Luis.', 'Hola Luis,', '¡Hola!, Luis'],
            correcta: 'Hola, Luis.',
            justificacion: 'El vocativo siempre debe estar separado por coma, incluso en saludos.'
        },
        {
            pregunta: '¿Qué indica la coma en: "Pedro estudia medicina; Juan, derecho"?',
            opciones: ['Omisión de un verbo', 'Una enumeración', 'Una aclaración', 'Un vocativo'],
            correcta: 'Omisión de un verbo',
            justificacion: 'Es una coma elíptica, sustituye al verbo "estudia" para evitar repetición.'
        },
        {
            pregunta: 'Antes de conjunciones adversativas como "pero", "mas", "sino":',
            opciones: ['Se suele poner coma', 'Nunca se pone coma', 'Se pone punto y coma', 'Se ponen dos puntos'],
            correcta: 'Se suele poner coma',
            justificacion: 'Las oraciones coordinadas adversativas llevan coma antes de la conjunción.'
        },
        {
            pregunta: '¿Cuál es la forma correcta de dirigirse a alguien?',
            opciones: ['Adiós, amigo.', 'Adiós amigo.', 'Adiós amigo,', 'Adiós,amigo'],
            correcta: 'Adiós, amigo.',
            justificacion: 'Uso de coma vocativa obligatoria.'
        },
        {
            pregunta: 'En "El perro, que estaba cansado, se durmió", las comas son:',
            opciones: ['Para una aclaración', 'Para separar nombres', 'Para una lista', 'Innecesarias'],
            correcta: 'Para una aclaración',
            justificacion: 'Encierran una proposición de relativo explicativa.'
        }
    ]
};
