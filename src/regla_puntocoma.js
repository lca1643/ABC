export const unidadPuntoComa = {
    teoria: [
        {
            tipo: 'Enumeraciones complejas',
            definicion: 'Se usa para separar los elementos de una enumeración cuando estos ya incluyen comas internas.',
            color: '#FFF8E1'
        },
        {
            tipo: 'Proposiciones relacionadas',
            definicion: 'Se usa para unir oraciones que, aunque son independientes, tienen una relación semántica estrecha.',
            color: '#EFEBE9'
        },
        {
            tipo: 'Antes de conectores',
            definicion: 'Se suele colocar antes de conectores adversativos como "pero", "mas", "aunque" o "sin embargo" en oraciones de cierta extensión.',
            color: '#E8EAF6'
        }
    ],
    ejemplos: [
        {
            palabraClave: 'día;',
            cita: 'La tarde caía lenta sobre los tejados del pueblo; era el fin de un largo día; un día lleno de afanes y de esperanzas.',
            autor: 'Azorín',
            libro: 'La voluntad',
            justificacion: 'Se usa punto y coma para separar oraciones sintácticamente independientes entre las que existe una estrecha relación de sentido.'
        },
        {
            palabraClave: 'campo;',
            cita: 'Cada grupo irá por un lado: unos, por el bosque; otros, por el campo; los demás, por el río.',
            autor: 'Pío Baroja',
            libro: 'Zalacaín el aventurero',
            justificacion: 'Uso de punto y coma para separar elementos de una enumeración compleja que ya contienen comas.'
        },
        {
            palabraClave: 'ahínco;',
            cita: 'Había estudiado durante toda la noche con gran ahínco; sin embargo, los nervios le traicionaron en el último momento.',
            autor: 'Miguel de Unamuno',
            libro: 'Niebla',
            justificacion: 'Se escribe punto y coma antes de conectores adversativos cuando la oración precedente es larga.'
        },
        {
            palabraClave: 'triste;',
            cita: 'El cielo estaba gris, oscuro, casi negro; el ambiente se sentía pesado, triste; la lluvia no tardaría en llegar.',
            autor: 'Valle-Inclán',
            libro: 'Sonatas',
            justificacion: 'Separa oraciones que guardan una estrecha relación, a menudo con paralelismos estructurales.'
        },
        {
            palabraClave: 'paciencia;',
            cita: 'Todo lo que se busca se encuentra; pero hay que tener paciencia; la vida no nos da nada sin esfuerzo.',
            autor: 'Lope de Vega',
            libro: 'La Dorotea',
            justificacion: 'Uso para separar pensamientos que fluyen uno tras otro con una pausa mayor que la coma.'
        },
        {
            palabraClave: 'inexpresivo;',
            cita: 'Su semblante era severo, casi inexpresivo; sus ojos, fríos, distantes; su corazón, irrevocablemente solo.',
            autor: 'Gustavo Adolfo Bécquer',
            libro: 'Leyendas',
            justificacion: 'Uso en enumeraciones descriptivas con comas elípticas internas.'
        },
        {
            palabraClave: 'primavera;',
            cita: 'Vendrán las nieves del invierno; después, las flores de la primavera; más tarde, el sol del verano; finalmente, la alegría.',
            autor: 'Rubén Darío',
            libro: 'Prosas profanas',
            justificacion: 'Separa los miembros de una serie enumerativa con puntuación interna.'
        },
        {
            palabraClave: 'locura;',
            cita: 'Unos dicen que es genio; otros, que es pura locura; yo prefiero pensar que es libertad.',
            autor: 'Miguel de Cervantes',
            libro: 'Don Quijote de la Mancha',
            justificacion: 'Une cláusulas independientes pero relacionadas por el tema.'
        },
        {
            palabraClave: 'mentira;',
            cita: 'La verdad es un cristal difícil de pulir; la mentira; un pozo oscuro sin fondo.',
            autor: 'Francisco de Quevedo',
            libro: 'El Buscón',
            justificacion: 'Establece una pausa clara entre dos contrastes u oposiciones.'
        },
        {
            palabraClave: 'silencio;',
            cita: 'La orquesta dejó de tocar; el público guardó un respetuoso silencio; el maestro bajó su batuta.',
            autor: 'Federico García Lorca',
            libro: 'La zapatera prodigiosa',
            justificacion: 'Secuencia de acciones rápidas y relacionadas que requieren una pausa mayor que la coma.'
        }
    ],
    ejercicios: [
        {
            pregunta: '¿Cuál es el uso del punto y coma en: "Unos fueron al cine; otros, al teatro"?',
            opciones: ['Separar proposiciones relacionadas', 'Enumeración simple', 'Vocativo', 'Después de un punto'],
            correcta: 'Separar proposiciones relacionadas',
            justificacion: 'Se usa para unir oraciones independientes con un fuerte vínculo semántico.'
        },
        {
            pregunta: '¿Dónde iría el punto y coma en: "Trajo manzanas rojas verdes y amarillas peras dulces y jugosas"?',
            opciones: ['Después de "amarillas"', 'Después de "dulces"', 'Después de "verdes"', 'No hace falta'],
            correcta: 'Después de "amarillas"',
            justificacion: 'En enumeraciones complejas donde los elementos llevan comas, se usa punto y coma para separar los grupos principales.'
        },
        {
            pregunta: 'Ante conectores como "sin embargo" en frases largas, se pone:',
            opciones: ['Punto y coma', 'Dos puntos', 'Nada', 'Tres puntos'],
            correcta: 'Punto y coma',
            justificacion: 'Facilita la lectura de periodos largos antes de una conjunción adversativa o conclusiva.'
        },
        {
            pregunta: '¿Cuál está bien puntuada?',
            opciones: ['Él ama el mar; ella, la montaña.', 'Él ama el mar ella la montaña', 'Él ama el mar,; ella la montaña', 'Él ama el mar. ella la montaña'],
            correcta: 'Él ama el mar; ella, la montaña.',
            justificacion: 'Uso correcto del punto y coma para separar oraciones con coma elíptica.'
        },
        {
            pregunta: 'El punto y coma indica una pausa:',
            opciones: ['Mayor que la coma y menor que el punto', 'Menor que la coma', 'Igua que el punto', 'Infinita'],
            correcta: 'Mayor que la coma y menor que el punto',
            justificacion: 'Es un signo de puntuación intermedio.'
        },
        {
            pregunta: '¿Se escribe punto y coma al final de cada elemento de una lista vertical con viñetas?',
            opciones: ['Sí, a menudo', 'Nunca', 'Solo si son nombres propios', 'Solo si son verbos'],
            correcta: 'Sí, a menudo',
            justificacion: 'Es común el uso de punto y coma para cerrar elementos de una lista descriptiva vertical.'
        },
        {
            pregunta: '¿Qué signo falta aquí: "El examen fue difícil todos salieron preocupados"?',
            opciones: ['Punto y coma', 'Coma simple', 'Guion', 'Paréntesis'],
            correcta: 'Punto y coma',
            justificacion: 'Para unir oraciones independientes pero muy ligadas en su significado.'
        },
        {
            pregunta: '¿Cuál oración usa correctamente el punto y coma?',
            opciones: ['Estaba lloviendo; decidimos quedarnos.', 'Hola; Alberto.', 'Me gustan; las flores.', 'Perro; gato; pájaro.'],
            correcta: 'Estaba lloviendo; decidimos quedarnos.',
            justificacion: 'Une dos oraciones con relación de causa-consecuencia sin usar nexo.'
        },
        {
            pregunta: 'En enumeraciones complejas con comas, el punto y coma sirve para:',
            opciones: ['Jerarquizar la información', 'Confundir al lector', 'No sirve para nada', 'Sustituir a los verbos'],
            correcta: 'Jerarquizar la información',
            justificacion: 'Permite distinguir claramente los niveles de los grupos enumerados.'
        },
        {
            pregunta: 'Si la oración es muy corta antes de "pero", se prefiere:',
            opciones: ['La coma', 'El punto y coma', 'Los dos puntos', 'Nada'],
            correcta: 'La coma',
            justificacion: 'En periodos cortos la coma es suficiente; el punto y coma es para periodos más extensos.'
        }
    ]
};
