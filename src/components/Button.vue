<script setup lang="ts">

type Props = {
  label: string,
  type?: 'button' | 'submit' | 'reset',
  click?: () => void
}

const { label, type,  click } = withDefaults(defineProps<Props>(), {
  type: 'button'
})
</script>
<template>
  <button
    :type="type"
    :class="(`
      h-[40px] text-amber-600 border-solid border 
      border-amber-600 bg-white  leading-[40px] w-[150px] 
      rounded-[6px] outline-none  general-btn box-border py-0 px-2 
      hover:text-white hover:bg-amber-600 hover:border-solid hover:border hover:border-amber-600
      text-center shadow-none`)"
    @click="click"
    :label="label"
  >
    {{ label }}
  </button>
</template>
