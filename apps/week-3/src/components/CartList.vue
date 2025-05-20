<script setup lang="ts">
import { computed } from 'vue';
import type { ICartItem } from '@/types';

const MAX_QUANTITY = 10;

const props = defineProps<{
  cart: ICartItem[];
  comment: string;
}>();

const emit = defineEmits<{
  (e: 'remove-item', id: number): void;
  (e: 'update-quantity', id: number, quantity: number): void;
  (e: 'input-comment', comment: string): void;
  (e: 'create-order'): void;
}>();

const totalPrice = computed(() => {
  const total = props.cart.reduce((total, item) => total + item.subTotal, 0);
  return total;
});

const emitRemoveItem = (id: number) => {
  emit('remove-item', id);
};

const emitUpdateQuantity = ($event: Event, id: number) => {
  const $select = $event.target as HTMLSelectElement;
  const quantity = parseInt($select.value);

  emit('update-quantity', id, quantity);
};

const emitInputComment = ($event: Event) => {
  const $textarea = $event.target as HTMLTextAreaElement;
  const value = $textarea.value;

  emit('input-comment', value);
};

const emitCreateOrder = () => {
  emit('create-order');
};
</script>

<template>
  <div class="col-md-9">
    <table class="table">
      <thead class="table-primary">
        <tr>
          <th scope="col">#</th>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col" width="80">數量</th>
          <th scope="col">單價</th>
          <th scope="col">小計</th>
          <th scope="col">刪除</th>
        </tr>
      </thead>
      <tbody v-if="props.cart.length">
        <tr v-for="(item, index) in props.cart" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <select
              :value="item.quantity"
              @change="emitUpdateQuantity($event, item.id)"
              class="form-select form-select-sm"
            >
              <option v-for="i in MAX_QUANTITY" :key="i" :value="i">{{ i }}</option>
            </select>
          </td>
          <td>${{ item.price }}</td>
          <td>${{ item.subTotal }}</td>
          <td>
            <button type="button" @click="emitRemoveItem(item.id)" class="btn btn-link">X</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="7" class="text-center">
            <span class="fs-4">購物車是空的QAQ</span>
          </td>
        </tr>
      </tbody>
    </table>
    <h4 class="text-end">總計: ${{ totalPrice }}</h4>
    <div class="form-floating mt-4">
      <textarea
        :value="props.comment"
        @input="emitInputComment($event)"
        class="form-control"
        placeholder="Leave a comment here"
        id="order-comment"
        style="height: 100px"
      ></textarea>
      <label for="order-comment">備註</label>
    </div>
    <div class="text-end">
      <button type="button" @click="emitCreateOrder" class="btn btn-primary mt-2">送出訂單</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
th,
td {
  vertical-align: middle;
}
</style>
