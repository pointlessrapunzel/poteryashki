<script setup lang="ts">

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <label class="customCheckbox">
    <input
      id="test"
      class="customCheckbox__input"
      type="checkbox"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span class="customCheckbox__checkbox"></span>

    <div>
      <img src="" alt="">

      texf
      <p>zxc</p>
    </div>
  </label>
</template>


<style scoped lang="scss">
.customCheckbox {
  display: flex;

  &__checkbox {
    position: relative;
    display: block;
    width: 10px;
    height: 10px;
    border: 1px solid #211a18;
  }

  &__input {
    position: absolute;
    appearance: none;
  }

  &__input:checked + .customCheckbox__checkbox {
    background-color: orange;
  }
}
</style>
