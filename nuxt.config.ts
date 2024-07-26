// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["../my-module/src/module"],
    classInject: {
        storageKey: "nuxt-class-inject",
        globalName: "__NUXT_CLASS_INJECT__",
        fallback: ["theme-light"],
    },
    css: ["~/assets/css/main.css"],
    compatibilityDate: "2024-07-26",
});
