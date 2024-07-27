<template>
    <div class="container">
        <h1 class="title">nuxt-class-inject-example</h1>
        <ClientOnly>
            <h2 class="subtitle">
                {{ `
                <html class="${$classInject.classList.value}">
                    ...
                </html>
                ` }}
            </h2>
        </ClientOnly>
        <div class="button-container">
            <button
                v-for="theme in themes"
                @click="setTheme(theme)"
                class="theme-button"
            >
                {{ theme }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const { $classInject } = useNuxtApp();

useHead({ title: "nuxt-class-inject" });

const themes: string[] = ["light", "dark", "paper"];
const setTheme = (theme: string) => {
    const current: string[] = $classInject.classList.value;

    const classList = current.filter((cls) => !cls.startsWith("theme-"));
    classList.push(`theme-${theme}`);

    $classInject.classList.value = classList;
};
</script>

<style lang="css">
.theme-light {
    --foreground: #1e1e1e;
    --background: #fefefe;
}

.theme-dark {
    --foreground: #fefefe;
    --background: #1e1e1e;
}

.theme-paper {
    --foreground: #cfa476;
    --background: #332a2c;
}
</style>
