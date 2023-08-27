<template>
    <div class="container">
        <div class="content">
            <h1>404</h1>
            <p>{{ msg }}</p>
            <button @click="goBack">Go Back</button>
        </div>
    </div>
</template>

<script setup>
import errorCode from '@/utils/errorCode';
const goBack = () => window.history.back();
const msg = errorCode['404']
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    overflow: hidden;
}

.content {
    text-align: center;
}

h1 {
    font-size: 8rem;
    margin: 0;
}

p {
    font-size: 2rem;
    margin-top: 0;
}

button {
    margin-top: 3rem;
    padding: 1rem 2rem;
    border-radius: 4px;
    font-size: 2rem;
    color: #fff;
    background-color: #42b983;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #34a672;
}
</style>