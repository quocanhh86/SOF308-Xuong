<script setup>
import { BIconCart, BIconEye } from 'bootstrap-icons-vue';
const props = defineProps(['id', 'productName']);

const productId = props.id;
const productName = props.productName;
const urlDetail = "/product/" + productId;
// nhận cả ảnh trong detail
function addToCart(id, name) {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);
    if (cart === null || cart === undefined) {
        cart = {}; // tạo giỏ hàng dạng dictionary(Key - Value ~ ProductId - Quantiy)
        
    }
    if (id in cart) { // nếu có sẵn trong giỏ hàng r
        cart[id].quantity = cart[id].quantity + 1; // thì +1
    } else  {//nếu chưa
       cart[id] = {
            name: name,
            quantity: 1,
        };
       
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Thêm thành công sản phẩm vào giỏ hàng')
}

</script>
<template>
    <div class="card">
        <img src="data:image/jpeg;base64,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" alt="No Image" class="card-image-top">
        <div class="card-body">
            <h4 class="card-title">
                <slot name="productName"></slot>
            </h4>
            <p class="card-text">
                <slot name="productPrice"></slot>
            </p>
            <button class="btn btn-warning me-2" @click="addToCart(productId, productName)">
            <BIconCart/>
            </button>
            
            <router-link v-bind:to="urlDetail" class="btn btn-success">
            <BIconEye/>
            </router-link>
            
        </div>
    </div>
</template>