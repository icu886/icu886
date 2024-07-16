<script setup lang="ts">
import Home from './components/Home.vue'
import Internation from './components/Internation.vue';
import { ref } from 'vue'

interface TabCompoentMap {
  [tab: string]: Object;
}

const currentTab = ref('国内')

const tabs: TabCompoentMap = {
  '国内': Home,
  '国外': Internation
}
</script>
<template>
  <div class="tabWrapper">
    <button v-for="(_, tab) in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab as string">
      {{ tab }}
    </button>
    <component :is="tabs[currentTab]" class="tab"></component>
  </div>
</template>

<style scoped>
.tabWrapper {
  font-family: sans-serif;
  border: 0px none #eee;
  border-radius: 2px;
  padding: 0;
  margin-top: 1em;
  margin-bottom: 10px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #efe;
  margin-right: 10px;
}

.tab-button:hover {
  background: #aea;
}

.tab-button.active {
  background: #aea;
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
