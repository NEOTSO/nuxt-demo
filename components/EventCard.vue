<template>
    <nuxt-link :to="`/event/${event.id}`" class="event-card">
        <h1>{{ event.title }}</h1>
        <p>{{ event.description }}</p>
        <span>{{ event.date }}</span>
    </nuxt-link>
</template>

<script>
export default {
    name: "EventCard",
    props: {
        event: {
            type: Object
        }
    }
};
</script>

<style lang="scss" scoped>
.event-card {
    border: 1px solid lightseagreen;
    padding: 40px;
}
</style>
