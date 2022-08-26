import { App } from "vue";
import { sendMonitorMessage } from "@/axios/apis";

export default {
  install: (app: App<Element>) => {
    app.provide('$monitor', sendMonitorMessage);
    app.config.globalProperties['$monitor'] = sendMonitorMessage;
  },
}