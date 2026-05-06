
// Configuración de los equipos para los anuncios al azar
const equipmentData = [
    {
        img: 'konica_pro950.png',
        title: 'Calidad Industrial',
        desc: 'Contamos con equipos Konica de nivel industrial para tus trabajos de alto volumen.'
    },
    {
        img: 'konica_c654.png',
        title: 'Color Vibrante',
        desc: 'Nuestras multifuncionales de alta gama garantizan colores fieles en cada impresión.'
    },
    {
        img: 'hp_m605.png',
        title: 'Velocidad Láser',
        desc: 'Equipados con tecnología láser ultrarrápida para que no tengas que esperar.'
    },
    {
        img: 'plotter_hp.png',
        title: 'Gran Formato',
        desc: 'Nuestro plotter de ingeniería ofrece precisión milimétrica en planos y pósters.'
    },
    {
        img: 'https://cdn-icons-png.flaticon.com/512/3552/3552824.png',
        title: 'Sector Legal',
        desc: 'Somos expertos en el copiado de carpetas de investigación y demandas. Confidencialidad total a solo $1.00 por lado.'
    },
    {
        img: 'https://cdn-icons-png.flaticon.com/512/2910/2910793.png',
        title: '¡Súper Promo Escaneo!',
        desc: 'Digitaliza tus carpetas o documentos por solo $0.25 la página (a partir de 300 pzs). ¡Libera espacio hoy!'
    }
];

function initSharedFeatures() {
    // 1. Manejo del Modal (solo si existe el botón en la página)
    const modal = document.getElementById("promoModal");
    const openBtn = document.getElementById("openPromo");
    const closeBtn = document.querySelector(".close-modal");

    if (openBtn && modal) {
        openBtn.onclick = function(e) {
            e.preventDefault();
            modal.style.display = "flex";
        }
        
        if (closeBtn) {
            closeBtn.onclick = function() {
                modal.style.display = "none";
            }
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // 2. Lógica de Toasts "Sabías que..." al azar
    createToastContainer();
    
    // Mostrar el primer toast después de 10 segundos
    setTimeout(showRandomToast, 10000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
}

function showRandomToast() {
    const container = document.getElementById('toast-container');
    if (!container) return;

    // Limpiar toast anterior si existe
    container.innerHTML = '';

    // Elegir equipo al azar
    const item = equipmentData[Math.floor(Math.random() * equipmentData.length)];

    const toast = document.createElement('div');
    toast.className = 'equipment-toast';
    toast.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div>
            <strong>¿Sabías que...?</strong>
            <p>${item.desc}</p>
        </div>
        <span class="close-toast">&times;</span>
    `;

    container.appendChild(toast);

    // Mostrar
    setTimeout(() => toast.classList.add('show'), 100);

    // Cerrar al hacer clic en X
    toast.querySelector('.close-toast').onclick = () => {
        toast.classList.remove('show');
    };

    // Auto-ocultar tras 8 segundos
    setTimeout(() => {
        toast.classList.remove('show');
    }, 8000);

    // Programar el siguiente toast (entre 20 y 40 segundos después)
    const nextTime = Math.random() * (40000 - 20000) + 20000;
    setTimeout(showRandomToast, nextTime);
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initSharedFeatures);
