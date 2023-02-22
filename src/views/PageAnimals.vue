<script lang="ts" setup>
import { Header, Item } from 'vue3-easy-data-table';
const headers: Header[] = [
  { text: 'ID', value: 'id' },
  { text: 'Код', value: 'categoryCode' },
  { text: 'Польз-ий код', value: 'userCode' },
  { text: 'Кличка', value: 'name' },
  { text: 'Пол', value: 'sex' },
  { text: 'Возраст', value: 'birthdate' },
  { text: 'Порода', value: 'breed' },
  { text: 'Шерсть', value: 'fur' },
  { text: 'Окрас', value: 'color' },
  { text: 'Статус', value: 'status' },
  { text: 'Имя куратора', value: '' },
  { text: 'Тел куратора', value: '' },
  { text: 'Управление', value: '' },
];

const items: Item[] = [
  { "text": "Curry", "height": 178, "weight": 77, "age": 20 },
  { "text": "James", "height": 180, "weight": 75, "age": 21 },
  { "text": "Jordan", "height": 181, "weight": 73, "age": 22 }
];

</script>

<template>
  <v-container>
    <easy-date-table
      class="table-animals"
      :headers="headers"
      :items="items" />
  </v-container>
</template>

<style lang="scss">
.table-animals .vue3-easy-data-table__main {
  overflow: hidden;
}
</style>
