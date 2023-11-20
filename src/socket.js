import { reactive } from "vue";
import { io } from "socket.io-client";
import { useAppStore } from '@/store/app';

export const state = reactive({
  connected: false,
  votos: [],
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? "http://alvaro.dam.inspedralbes.cat:3999" : "http://alvaro.dam.inspedralbes.cat:3999";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("actualizacionVotos", (newVotos) => {
  state.votos=newVotos;
  const store = useAppStore();
  store.setVotos(newVotos);
});
