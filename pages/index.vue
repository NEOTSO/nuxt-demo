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
import { mapState } from "vuex";

export default {
    head() {
        return {
            title: "Home"
        };
    },
    // async fetch({ store, error }) {
    //     try {
    //         await store.dispatch("events/fetchEvents");
    //     } catch (e) {
    //         error({ statusCode: 503, message: "server fetch api failed" });
    //     }
    // },
    computed: {
        ...mapState({
            events: state => state.events.events
        })
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
