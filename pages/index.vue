<template>
    <div>
        <h1>Events</h1>
        <div class="list">
            <EventCard v-for="event in events" :key="event.id" :event="event" />
        </div>
    </div>
</template>

<script>
import EventCard from "~/components/EventCard";
export default {
    data() {
        return {
            events: []
        };
    },
    head() {
        return {
            title: "Home"
        };
    },
    async asyncData({ $axios, error }) {
        try {
            const { data } = await $axios.get("http://localhost:3000/events");
            console.log(data);
            return { events: data };
        } catch (e) {
            error({ statusCode: 503, message: "server fetch api failed" });
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
