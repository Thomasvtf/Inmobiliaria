export const propiedadesDisponibles = [
  {
    id: 1,
    titulo: "Penthouse de Lujo en el Centro", // [1]
    ubicacion: "1200 Skyview Terrace, Distrito Financiero", // [1]
    precio: 3500000, // [1]
    hipotecaEstimada: 18450, // [1]
    dormitorios: 4, // [1]
    banos: 3.5, // [1]
    area: 395, // [1]
    estacionamientos: 2, // [1]
    vision: "Experimente un lujo inigualable en esta obra maestra arquitectónica...", // [2]
    amenidades: ["Piscina Infinita", "Gimnasio Privado", "Conserjería 24/7", "Bodega de Vinos", "Terraza en el Cielo", "Sistema de Casa Inteligente"], // [2, 3]
    agente: {
      nombre: "Sarah Jenkins", // [3]
      puesto: "Directora de Portafolio Senior", // [3]
      telefono: "+1 (555) 012-3456", // [3]
      correo: "s.jenkins@vestahome.com" // [3]
    }
  },
  {
    id: 2,
    titulo: "Steiner St Luxury House",
    precio: 1850000, // [4]
    direccion: "2148 Steiner St, San Francisco, CA 94115", // [4]
    dormitorios: 3,
    banos: 2,
    areaSqft: 1820 // [4]
  }
];

export const inventarioPropiedades = [
  { id: 'i1', titulo: "Modern Loft", direccion: "884 Industrial Ave, New York", estado: "Activo", precio: 850000, vistas: 1240 }, // [5]
  { id: 'i2', titulo: "Sunset Villa", direccion: "22 Ocean Drive, Malibu", estado: "Pendiente", precio: 2450000, vistas: 892 }, // [5]
  { id: 'i3', titulo: "The Obsidian Suite", direccion: "412 Heritage Row, Boston", estado: "Archivado", precio: 1120000, vistas: 4521 }, // [6]
  { id: 'i4', titulo: "Skyline Penthouse", direccion: "Tower 1, Chicago", estado: "Activo", precio: 3100000, vistas: 2105 } // [6]
];

export const citasAgendadas = [
  {
    id: 'c1',
    cliente: "Mark Thompson", // [6]
    tipo: "Comprador Potencial", // [6]
    propiedad: "Modern Glass House", // [6]
    fecha: "OCT 24", // [6]
    hora: "2:00 PM", // [6]
    duracion: "60 MINUTOS", // [6]
    estado: "Próxima" // [6]
  },
  {
    id: 'c2',
    cliente: "Elena Rodriguez", // [6]
    tipo: "Inversor", // [6]
    propiedad: "Penthouse Suite B7", // [7]
    fecha: "OCT 26", // [6]
    hora: "10:30 AM", // [7]
    duracion: "45 MINUTOS", // [7]
    estado: "Próxima" // [6]
  }
];
