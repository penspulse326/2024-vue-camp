<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

const props = defineProps<{
  isOpen: boolean;
  message: string;
}>();

const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}
</script>

<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog
      as="div"
      tabindex="-1"
      autofocus
      class="relative z-10"
      @close="closeModal"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all"
            >
              <div class="mt-2">
                <p class="font-bold">
                  {{ props.message }}
                </p>
              </div>
              <div class="mt-4">
                <button
                  type="button"
                  class="btn hover:bg-primary/90"
                  @click="closeModal"
                >
                  關閉
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
