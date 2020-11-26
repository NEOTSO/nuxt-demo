<template>
    <div class="nav">
        <nuxt-link to="/">Home</nuxt-link>
        <nav>
            <nuxt-link to="/create">create</nuxt-link>
            <nuxt-link to="/test">test</nuxt-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar"
};
</script>
