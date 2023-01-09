<script setup>
import {useDark , useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
<div>
<!-- <p> isDark: {{ isDark }}</p> -->
<button @click="toggleDark()"
class="px-4 py-2 text-white bg-green-500 rounded dark:bg-purple-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
Theme
</button>&ensp;&ensp;&ensp;&ensp;
</div>
</template>

<style>
html.dark{
    color-scheme: dark;
}
body{
  @apply bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-50;
}

</style>