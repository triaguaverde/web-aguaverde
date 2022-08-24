<template>
  <div>
    <Nav hideImage />
    <Informacion :section="SECTIONS.natacion" />
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
