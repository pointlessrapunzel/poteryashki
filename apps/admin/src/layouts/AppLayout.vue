<template>
  <v-app id="inspire">
    <component :is="$route.meta.layout">
      <slot />
    </component>
  </v-app>
</template>
