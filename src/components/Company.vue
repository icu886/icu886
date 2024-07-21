<script setup lang="ts">
import { CompanyType } from '../types/CompanyType';
defineProps<{ company: CompanyType }>();
</script>
<template>
    <div class="line">
        <label>公司名称：</label>
        <span class="companyName">{{ company.name }}</span>
    </div>
    <div class="line">
        <label>省份：</label>
        <span class="companyProvience">{{ company.province }}</span>
    </div>
    <div class="line">
        <label>城市：</label>
        <span class="companyCity">{{ company.city }}</span>
    </div>
    <div class="line">
        <label>地址：</label>
        <span class="companyAddress">{{ company.address }}</span>
    </div>
    <div class="line">
        <label>大事件：</label>
        <span class="companyBigThing">{{ company.bigThing }}</span>
    </div>
</template>
<style scoped>
.line {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    line-height: 32px;
    border-bottom: 1px solid #ccc;
}

.companyName {
    font-size: 20px;
    font-weight: 700;
}

.companyProvience {
    font-size: 18px;
    font-weight: 500;
}

.companyCity {
    font-size: 18px;
    font-weight: 500;
}

.companyAddress {
    font-size: 16px;
    font-style: italic;
}

.companyBigThing {
    text-decoration: underline;
}
</style>