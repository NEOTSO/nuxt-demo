<template>
    <div>
        <h1>{{ statusCode }}</h1>
        <h3>{{ message }}</h3>
        <nuxt-link v-if="statusCode === 404" to="/">Back to home</nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    head() {
        return {
            title: this.message
        };
    },
    computed: {
        statusCode() {
            return (this.error && this.error.statusCode) || 500;
        },
        message() {
            return this.error.message;
        }
    }
};
</script>
