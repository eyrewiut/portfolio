import { defineConfig } from 'astro/config';
import uno from "astro-uno";
import alpine from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    integrations: [
        uno({presets: []}),
        alpine()
    ]
});
