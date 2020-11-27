<template>
    <div>
        <h1>{{ event.title }}</h1>
        <p>{{ event.description }}</p>
        <span>{{ event.date }}</span>
    </div>
</template>

<script>
export default {
    async asyncData({ $axios, params, error }) {
        try {
            const { data } = await $axios.get(
                `http://localhost:3000/events/${params.id}`
            );
            console.log(data);
            return { event: data };
        } catch (e) {
            error({
                statusCode: 503,
                message: "event page server fetch api failed"
            });
        }
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
