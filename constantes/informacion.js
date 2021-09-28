const SECTIONS = {
  info: 'infoGeneral',
  natacion: 'natacion',
  carrera: 'carrera',
  entrenadores: 'entrenadores',
  foro: 'foro',
  requisitos: 'requisitos',
  precios: 'precios',
  ventajas: 'ventajas',
  federados: 'federarse',
}

const MENU_OPT = [
  {
    title: 'El Club',
    sect: [
      { label: 'Información', section: SECTIONS.info },
      { label: '¿Dónde nadáis?', section: SECTIONS.natacion },
      { label: '¿Dónde corréis?', section: SECTIONS.carrera },
      { label: 'Entrenadores', section: SECTIONS.entrenadores },
      { label: 'El foro', section: SECTIONS.foro },
    ],
  },
  {
    title: 'Hazte Socio',
    sect: [
      { label: 'Requisitos', section: SECTIONS.requisitos },
      { label: 'Precios', section: SECTIONS.precios },
      { label: 'Ventajas', section: SECTIONS.ventajas },
      { label: '¿Me federo?', section: SECTIONS.federados },
    ],
  },
]

export { SECTIONS, MENU_OPT }
