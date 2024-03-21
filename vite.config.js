import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                shop: resolve(__dirname, "shopPage.html"),
                cart: resolve(__dirname, "cart.html"),
                detail: resolve(__dirname, "detailPage.html"),
                checkout: resolve(__dirname, "checkout.html"),
                signup: resolve(__dirname, "singupPage.html")
            }

        },
    },
})