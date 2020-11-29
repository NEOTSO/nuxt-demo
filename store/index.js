import EventService from "~/service/EventService";

export const actions = {
    async nuxtServerInit({ commit }) {
        const { data } = await EventService.getEvents();
        console.log("######");
        console.log(process.server);
        console.log(process.client);
        commit("events/SET_EVENTS", data);
    }
};
