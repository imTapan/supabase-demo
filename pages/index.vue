<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-lg font-semibold">Card Title 1</h2>
        <p class="text-gray-600">Some information about this card.</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-lg font-semibold">Card Title 2</h2>
        <p class="text-gray-600">Some information about this card.</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-lg font-semibold">Card Title 3</h2>
        <p class="text-gray-600">Some information about this card.</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-lg font-semibold">Card Title 4</h2>
        <p class="text-gray-600">Some information about this card.</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const { $supabase } = useNuxtApp();
console.log("$supabase Client : ", $supabase);
</script>
