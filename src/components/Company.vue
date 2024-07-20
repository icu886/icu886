<script setup lang="ts">
import { CompanyType } from '../types/CompanyType';
defineProps<{ company: CompanyType }>();
</script>
<template>
    <p class="companyName">{{ company.name }}</p>
    <p class="companyProvience">{{ company.provience }}</p>
    <p class="companyCity">{{ company.city }}</p>
    <p class="companyAddress">{{ company.address }}</p>
    <p class="companyBigThing">{{ company.bigThing }}</p>
</template>
<style scoped>
.companyName {
    font-size: 24px;
    font-weight: 700;
}

.companyProvience {
    font-size: 18px;
    font-weight: 600;
}

.companyCity {
    font-size: 18px;
    font-weight: 600;
}

.companyAddress {
    font-size: 16px;
    font-style: italic;
}

.companyBigThing {
    text-decoration: underline;
}
</style>