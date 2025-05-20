<script setup lang="ts">
import type { IOrder } from '@/types';

const props = defineProps<{
  data: IOrder[];
}>();
</script>

<template>
  <h2>歷史訂單</h2>
  <div v-for="order in props.data" :key="order.id" class="col-md-6 col-lg-4">
    <div class="card p-3">
      <h4 class="fs-5 fw-semibold">訂單編號 {{ order.id.toString().slice(-5) }}</h4>
      <span class="order-date mb-2"> {{ order.timestamp.toLocaleString() }}</span>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">品項</th>
            <th scope="col" class="text-nowrap">數量</th>
            <th scope="col" class="text-nowrap">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in order.items" :key="item.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>${{ item.subTotal }}</td>
          </tr>
        </tbody>
      </table>
      <p class="order-comment">備註：{{ order.comment }}</p>
      <h5 class="text-end">總計: ${{ order.totalPrice }}</h5>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-date {
  font-size: 12px;
}
.order-comment {
  font-size: 14px;
}
</style>
