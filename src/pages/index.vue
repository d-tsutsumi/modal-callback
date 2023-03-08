<script setup lang="ts">
import Button from "@/components/Button.vue";
const count = ref<number>(0)

</script>
<template>
  <div class="flex p-2 w-full h-fll justify-center">
    <div>
      <Button label="Click" type="button"/>
    </div>
    <div>
      {{ count }}
    </div>
  </div>
</template>
