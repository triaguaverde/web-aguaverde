const SECTIONS = {
  info: 'infoGeneral',
  natacion: 'natacion',
  carrera: 'carrera',
  entrenadores: 'entrenadores',
  foro: 'foro',
  requisitos: 'requisitos',
  precios: 'precios',
  ventajas: 'ventajas',
  federarse: 'federarse',
}

const MENU_OPT = [
  {
    title: 'El Club',
    sect: [
      { label: 'Información', section: 'info' },
      { label: '¿Dónde nadáis?', section: 'natacion' },
      { label: '¿Dónde corréis?', section: 'carrera' },
      { label: 'Entrenadores', section: 'entrenadores' },
      { label: 'El foro', section: 'foro' },
    ],
  },
  {
    title: 'Hazte Socio',
    sect: [
      { label: 'Requisitos', section: 'requisitos' },
      { label: 'Precios', section: 'precios' },
      { label: 'Ventajas', section: 'ventajas' },
      { label: '¿Me federo?', section: 'federarse' },
    ],
  },
]

export { SECTIONS, MENU_OPT }
