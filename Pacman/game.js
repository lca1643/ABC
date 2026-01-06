// 1. Configuración inicial del lienzo (Canvas)
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Definimos el tamaño del lienzo
// Para Pacman, usaremos una cuadrícula. Digamos 20x20 píxeles por celda.
const TILE_SIZE = 32;
const ROWS = 15;
const COLS = 15;

canvas.width = COLS * TILE_SIZE;
canvas.height = ROWS * TILE_SIZE;

// 1.1 Definición del Laberinto (Matriz / 2D Array)
// 1 = Pared, 0 = Camino vacío, 2 = Moneda/Punto
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let score = 0;
const scoreDisplay = document.getElementById('score');

// === NUEVO: Sistema de Sonido ===
let audioCtx = null;
function initAudio() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playSound(freq, duration, type = 'square') {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

const sounds = {
    waka: () => playSound(400, 0.1, 'sine'),
    death: () => {
        playSound(300, 0.2, 'sawtooth');
        setTimeout(() => playSound(200, 0.3, 'sawtooth'), 200);
        setTimeout(() => playSound(100, 0.5, 'sawtooth'), 500);
    },
    win: () => {
        playSound(523.25, 0.1);
        setTimeout(() => playSound(659.25, 0.1), 150);
        setTimeout(() => playSound(783.99, 0.1), 300);
        setTimeout(() => playSound(1046.50, 0.3), 450);
    }
};

// === ESTADO DEL JUEGO ===
let gamePaused = true;
let player = {
    x: TILE_SIZE,
    y: TILE_SIZE,
    size: TILE_SIZE,
    color: 'yellow',
    speed: 2,
    dir: { x: 0, y: 0 }
};

// === NUEVO: Fantasmas ===
const ghosts = [
    { x: 7 * TILE_SIZE, y: 7 * TILE_SIZE, color: '#FF0000', dir: { x: 1, y: 0 }, speed: 1.5, size: TILE_SIZE },
    { x: 7 * TILE_SIZE, y: 7 * TILE_SIZE, color: '#FFB8FF', dir: { x: -1, y: 0 }, speed: 1.5, size: TILE_SIZE },
    { x: 7 * TILE_SIZE, y: 7 * TILE_SIZE, color: '#00FFFF', dir: { x: 0, y: 1 }, speed: 1.5, size: TILE_SIZE },
    { x: 7 * TILE_SIZE, y: 7 * TILE_SIZE, color: '#FFB852', dir: { x: 0, y: -1 }, speed: 1.5, size: TILE_SIZE }
];

// Escuchar cuando se presiona una tecla
window.addEventListener('keydown', (e) => {
    if (gamePaused) return;
    if (e.key === 'ArrowUp') player.dir = { x: 0, y: -1 };
    if (e.key === 'ArrowDown') player.dir = { x: 0, y: 1 };
    if (e.key === 'ArrowLeft') player.dir = { x: -1, y: 0 };
    if (e.key === 'ArrowRight') player.dir = { x: 1, y: 0 };
});

// Listener para el botón de Inicio
document.getElementById('start-button').addEventListener('click', () => {
    initAudio();
    gamePaused = false;
    document.getElementById('start-screen').style.display = 'none';
});

// 3. El Bucle de Juego (Game Loop)
function gameLoop() {
    if (!gamePaused) {
        update();
        draw();
    }
    requestAnimationFrame(gameLoop);
}

// 4. Lógica de actualización
function update() {
    // 4.1 Guardar posición anterior
    const prevX = player.x;
    const prevY = player.y;

    // 4.2 Mover al jugador
    player.x += player.dir.x * player.speed;
    player.y += player.dir.y * player.speed;

    // 4.3 Detección de Colisiones con Paredes
    if (hayColision(player.x, player.y)) {
        player.x = prevX;
        player.y = prevY;
    }

    // 4.4 Recoger Monedas
    verificarMonedas(player.x, player.y);

    // 4.5 Mover Fantasmas
    moverFantasmas();

    // 4.6 Verificar Muerte
    verificarMuerte();

    // Limites básicos para no salir del lienzo
    if (player.x < 0) player.x = 0;
    if (player.x + player.size > canvas.width) player.x = canvas.width - player.size;
    if (player.y < 0) player.y = 0;
    if (player.y + player.size > canvas.height) player.y = canvas.height - player.size;
}

// Función auxiliar para detectar si una posición choca con una pared
function hayColision(x, y) {
    const padding = 6; // Margen para facilitar el giro en esquinas
    const puntos = [
        { x: x + padding, y: y + padding },
        { x: x + player.size - padding, y: y + padding },
        { x: x + padding, y: y + player.size - padding },
        { x: x + player.size - padding, y: y + player.size - padding }
    ];

    for (let p of puntos) {
        const row = Math.floor(p.y / TILE_SIZE);
        const col = Math.floor(p.x / TILE_SIZE);

        if (maze[row] && maze[row][col] === 1) {
            return true;
        }
    }
    return false;
}

function verificarMonedas(x, y) {
    // Revisamos el centro de Pacman para recolectar
    const row = Math.floor((y + player.size / 2) / TILE_SIZE);
    const col = Math.floor((x + player.size / 2) / TILE_SIZE);

    if (maze[row] && maze[row][col] === 2) {
        maze[row][col] = 0; // Quitar punto de la matriz
        score += 10;
        scoreDisplay.innerText = `Puntos: ${score}`;
        sounds.waka();

        // Verificar si ganó (si no hay más puntos)
        if (haGanado()) {
            gamePaused = true;
            sounds.win();
            setTimeout(() => {
                alert("¡FELICIDADES! Has recolectado todos los puntos.");
                location.reload();
            }, 1000);
        }
    }
}

function haGanado() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (maze[r][c] === 2) return false;
        }
    }
    return true;
}

function moverFantasmas() {
    ghosts.forEach(ghost => {
        const prevX = ghost.x;
        const prevY = ghost.y;
        ghost.x += ghost.dir.x * ghost.speed;
        ghost.y += ghost.dir.y * ghost.speed;

        if (hayColision(ghost.x, ghost.y)) {
            ghost.x = prevX;
            ghost.y = prevY;
            const direcciones = [
                { x: 1, y: 0 }, { x: -1, y: 0 },
                { x: 0, y: 1 }, { x: 0, y: -1 }
            ];
            ghost.dir = direcciones[Math.floor(Math.random() * direcciones.length)];
        }
    });
}

function verificarMuerte() {
    ghosts.forEach(ghost => {
        const dx = (player.x + player.size / 2) - (ghost.x + ghost.size / 2);
        const dy = (player.y + player.size / 2) - (ghost.y + ghost.size / 2);
        const distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < player.size * 0.7) {
            gamePaused = true;
            sounds.death();
            setTimeout(() => {
                alert("👻 ¡UN FANTASMA TE ATRAPÓ! Fin del juego.");
                location.reload();
            }, 1000);
        }
    });
}

// 5. Lógica de dibujo
function draw() {
    // 5.1 Limpiar fondo
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 5.2 Dibujar Maze
    drawMaze();

    // 5.3 Dibujar a Pacman
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(
        player.x + player.size / 2,
        player.y + player.size / 2,
        player.size / 2 - 2,
        0,
        Math.PI * 2
    );
    ctx.fill();
    ctx.closePath();

    // 5.4 Dibujar Fantasmas
    ghosts.forEach(ghost => {
        ctx.fillStyle = ghost.color;
        ctx.beginPath();
        ctx.arc(ghost.x + ghost.size / 2, ghost.y + ghost.size / 2, ghost.size / 2 - 2, Math.PI, 0);
        ctx.lineTo(ghost.x + ghost.size - 2, ghost.y + ghost.size - 2);
        ctx.lineTo(ghost.x + 2, ghost.y + ghost.size - 2);
        ctx.fill();
        ctx.closePath();
    });

    ctx.fillStyle = 'white';
    ctx.font = '14px Arial';
    ctx.fillText('¡Come todos los puntos!', 10, canvas.height - 10);
}

function drawMaze() {
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (maze[r][c] === 1) {
                // Pared (Azul)
                ctx.fillStyle = '#191970';
                ctx.fillRect(c * TILE_SIZE, r * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                ctx.strokeStyle = '#2b2bff';
                ctx.lineWidth = 1;
                ctx.strokeRect(c * TILE_SIZE, r * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            } else if (maze[r][c] === 2) {
                // Moneda (Punto pequeño amarillo)
                ctx.fillStyle = '#FFD700';
                ctx.beginPath();
                ctx.arc(
                    c * TILE_SIZE + TILE_SIZE / 2,
                    r * TILE_SIZE + TILE_SIZE / 2,
                    3,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

// 6. Arrancar el juego
gameLoop();
