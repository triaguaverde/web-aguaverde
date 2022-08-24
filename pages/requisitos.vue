<template>
  <div>
    <Nav hideImage />
    <Informacion :section="SECTIONS.requisitos" />
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
