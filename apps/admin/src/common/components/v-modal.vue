<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <v-dialog>
    <v-card>
      <v-card-title v-if="props.title" class="pl-7 pt-7">
        {{ props.title }}
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
