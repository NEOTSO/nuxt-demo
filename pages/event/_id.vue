<template>
    <div>
        <h1>{{ event.title }}</h1>
        <p>{{ event.description }}</p>
        <span>{{ event.date }}</span>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    async fetch({ store, params, error }) {
        try {
            await store.dispatch("events/fetchEvent", params.id);
        } catch (err) {
            error({
                statusCode: 503,
                message: "event page server fetch api failed"
            });
        }
    },
    computed: {
        ...mapState({
            event: state => state.events.event
        })
    },
    head() {
        return {
            title: this.event.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.event.description
                }
            ]
        };
    }
};
</script>
