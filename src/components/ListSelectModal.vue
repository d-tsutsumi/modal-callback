<script setup lang="ts">
import { Dialog, DialogOverlay } from '@headlessui/vue'
import  Button  from '@/components/Button.vue';
import { ModalFlow } from '../composables/useModalFrow';

type Props = {
  ModaFlowObject: ModalFlow
  List: {name: string, id: string}[]
}

const {ModaFlowObject} = defineProps<Props>()
function no() {
  ModaFlowObject.next(false)
}
function yes () {
  ModaFlowObject.next(true)
}
</script>

<template>
  <div>
    <Dialog
      as="div"
      class="fixed z-50 inset-0 overflow-y-auto w-full h-full flex justify-center items-center"
      :open="true"
    >
      <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div id="contents" class="relative py-2 bg-white">
        <p class="p-6 text-base font-bold text-center">担当者を選択してください</p>
        <div class="overflow-y-scroll h-[450px]">
          <ul class="w-full">
            <template v-for="column in List" :key="column.id">
              <li class="p-6 border-t border-b cursor-pointer">
                <RadioButtonRight
                  :id="column.name"
                  name="staffName"
                  :label="column.name"
                  :value="column.name"
                  @select-staff="ModaFlowObject.addStaff"
                />
              </li>
            </template>
          </ul>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-2 text-center">
          <Button label="キャンセル" width="200px" add-class="mr-1" :click="no" />
          <Button label="登録" width="200px" :click="yes" />
        </div>
      </div>
    </Dialog>
  </div>
</template>
