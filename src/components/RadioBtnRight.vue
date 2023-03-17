<script setup lang="ts">
type Props = {
  name: string,
  id: string,
  value: string,
  label: string,
  checked?: boolean
}

const { name, id, value, label, checked } = defineProps<Props>()
const emit = defineEmits<{(event: "select-user",selectStaff : {name: string, id: string} ) : void}>()

const selectStaff = () => {
  emit("select-user", {id, name})
}
</script>
<template>
  <input :id="id" :checked="checked" type="radio" :name="name" class="radio-btn" :value="value" @click="selectStaff" />
  <label
    :for="id"
    class="radio-btn-label inline-block m-0 py-0 pl-0 font-normal cursor-pointer w-full"
    >{{ label }}</label
  >
</template>

<style scoped>
.radio-btn-label {
  height: 24px;
  line-height: 24px;
}
</style>
