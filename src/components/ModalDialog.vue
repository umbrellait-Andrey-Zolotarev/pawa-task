<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask" @mousedown="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" @mousedown.stop="">
          <div v-if="$slots.header" class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div v-if="$slots.default" class="modal-body">
            <slot name="default">default body</slot>
          </div>

          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineEmits } from 'vue'

defineEmits(['close'])
defineProps({
  show: Boolean,
})
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: var(--color-background-mute);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: var(--color-text);
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
