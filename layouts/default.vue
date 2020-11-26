<template>
    <div>
        <Nuxt />
        <NavBar />
    </div>
</template>

<script>
import NavBar from "~/components/NavBar";
export default {
    components: {
        NavBar
    }
    // head() {
    //     return {
    //         titleTemplate: "Page - %s",
    //         meta: [
    //             {
    //                 vid: "description",
    //                 name: "description",
    //                 content: "this is test content"
    //             }
    //         ]
    //     };
    // }
};
</script>
