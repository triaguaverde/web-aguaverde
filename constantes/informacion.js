const SECTIONS = {
  info: 'InfoGeneral',
  natación: 'InfoNatacion',
  running: 'InfoRunning',
  entrenadores: 'InfoEntrenadores',
  foro: 'InfoForo',
  requisitos: 'InfoRequisitos',
  precios: 'InfoPrecios',
  ventajas: 'InfoVentajas',
  federados: 'InfoFederados',
}

const MENU_OPT = [
  {
    title: 'El Club',
    sect: [
      { label: 'Información', section: SECTIONS.info },
      { label: '¿Dónde nadáis?', section: SECTIONS.natación },
      { label: '¿Dónde corréis?', section: SECTIONS.running },
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
