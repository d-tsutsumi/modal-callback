<script setup lang="ts">
import Button from "@/components/Button.vue";
import { DialogState } from '../composables/Dialog';
import ConfirmDialog from "~~/src/components/ConfirmDialog.vue"
import { ComfirmDialogState } from '../composables/ConfirmDialog/type';
import { conFirmDialogObjFactory } from "../composables/ConfirmDialog";

const comfirmModalRef = ref<ComfirmDialogState>(conFirmDialogObjFactory("first"))
const isOpenConfirmDialog = ref<boolean>(false)
function firstButtonClick () {
  comfirmModalRef.value = conFirmDialogObjFactory("first")
  isOpenConfirmDialog.value = true
}
function secondButtonClick () {
  comfirmModalRef.value = conFirmDialogObjFactory("second")
  isOpenConfirmDialog.value = true

}
function thitdButtonClick () {
  comfirmModalRef.value = conFirmDialogObjFactory("third")
  isOpenConfirmDialog.value = true

}

function  close (value:boolean) {
  isOpenConfirmDialog.value = value
}
</script>
<template>
  <div class="flex p-2 w-full h-fll justify-center gap-2">
    <Button label="Flow1" type="button" :click="firstButtonClick" />
    <Button label="Flow2" type="button" :click="secondButtonClick" />
    <Button label="Flow3" type="button" :click="thitdButtonClick" />
    <ConfirmDialog v-if="isOpenConfirmDialog" :DialogObj="comfirmModalRef" :onClose="close" />
  </div>
</template>
