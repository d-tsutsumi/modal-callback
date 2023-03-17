<script setup lang="ts">
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import Button from './Button.vue';
import { ComfirmDialogState } from '../composables/ConfirmDialog/type';
const focusRef = ref()

type Props = {
  DialogObj: ComfirmDialogState
}

const { DialogObj } = defineProps<Props>()

const emit = defineEmits<{(event: "close",value : boolean ) : void}>()
</script>

<template>
  <TransitionRoot as="template" :show="true">
    <Dialog as="div" class="fixed z-50 inset-0 overflow-y-auto" :initial-focus="focusRef">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-center">
                <i
                  class="fa-solid fa-circle-question sm:items-center"
                  style="color: #4799f5; font-size: 2.5em"
                  aria-hidden="true"
                />
                <div class="mt-3 text-center items-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="p"
                    class="text-lg leading-6 font-medium text-gray-900"
                    >{{DialogObj.title}}</DialogTitle
                  >
                  <div>
                    <p class="text-sm">
                      {{ DialogObj.message }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center">
              <Button label="いいえ" width="100px" add-class="ml-4" :click="() => DialogObj.cancel(emit)" />
              <Button label="はい" width="100px" add-class="ml-4" :click="() => DialogObj.progression(emit)" />
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
