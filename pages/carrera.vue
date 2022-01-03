<template>
  <div>
    <Nav />
    <Informacion :section="SECTIONS.carrera" />
  </div>
</template>

<script>
import { SECTIONS } from '../constantes/informacion'
export default {
  data() {
    return {
      SECTIONS,
    }
  },
}
</script>
