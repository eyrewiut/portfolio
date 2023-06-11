import { 
    defineConfig, 
    presetUno, 
    presetWebFonts, 
    presetTypography, 
    presetIcons,
    transformerDirectives,
    transformerVariantGroup,
} from "unocss";

import ms from "modularscale-js";

const modularScale = scale(-6, 13, { base: 1, ratio: 1.2});

let typescale = modularScale("rem");
Object.keys(typescale).forEach(key => {
    typescale[key] = [typescale[key], 1.3]
})
typescale.base = typescale[0];
typescale[0] = [0]

export default defineConfig({
    presets: [ 
        presetUno({
            dark: "media",
        }), 
        presetTypography({
            cssExtend: {
                "h1, h2, h3, h4, h5, h6": {
                    "font-family": ["JostVariable", "Jost", "Zen Kaku Gothic New", "sans-serif"],
                    "font-weight": 500,
                    "line-height": 1.3,
                    margin: "3rem 0 1.38rem",
                },
                h1: {
                    "font-size": "2.488rem"
                },
                h2: {
                    "font-size": "2.074rem"
                },
                h3: {
                    "font-size": "1.728rem"
                },
                h4: {
                    "font-size": "1.44rem"
                },
                h5: {
                    "font-size": "1.2rem"
                },
                img: {
                    "border-radius": "3px",
                    "border": "2px solid #B6B6B6",
                }
            }
        }),
        presetWebFonts({
            provider: "none",
            fonts: {
                zen: [
                    { name: "Zen Kaku Gothic New", weights: [400, 500] }, 
                    { name: "Lato", weights: [300] }, 
                    { provider: "none", name: "sans-serif" }
                ],
                jost: [
                    { name: "JostVariable" }, 
                    { name: "Jost" }, 
                    { name: "Zen Kaku Gothic New", weights: [400, 500] }, 
                    { provider: "none", name: "sans-serif" }
                ],
                mono: [
                    { name: "M PLUS 1 Code", provider: "google" }, 
                    { provider: "none", name: "monospace" }
                ],
            },
        }),
        presetIcons({
            warn: true
        })
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ],
    shortcuts: {
        "h1": "font-jost font-500 mt-6 mb-1.38rem text-5",
        "h2": "font-jost font-500 mt-6 mb-1.38rem text-4",
        "h3": "font-jost font-500 mt-6 mb-1.38rem text-3",
        "h4": "font-jost font-500 mt-6 mb-1.38rem text-2",
        "link": "text-aoi-dark dark:text-aoi-light font-jost font-medium underline",
        "button": "bg-aoi-dark text-white dark:bg-aoi-light dark:text-black font-jost font-medium rounded-full px--2 py--5 inline-block w-max"
    },
    preflights: [
        {
            getCSS: ({theme}) => `[x-cloak] { display: none !important; }`
        }
    ],
    theme: {
        colors: {
            aoi: {
                dark: "#227F94",
                light: "#4ECDF4"
            },
            greyscale: {
                0: "#111212",
                1: "#202221",
                2: "#2E302F",
                3: "#3E4241",
                4: "#535957",
                5: "#69706E",
                6: "#88918E",
                7: "#9DA7A5",
                8: "#B4BDBA",
                9: "#D4DCDA",
                10: "#EBF0EF",
                11: "#FCFDFD",
                // background: "#3F4342",
                // border: "#B6B6B6"
            }
        },
        fontSize: typescale,
        spacing: {...modularScale("rem"), 0: 0, base: "1rem"},
        width: { ...modularScale("rem"), 0: 0, base: "1rem" },
        height: { ...modularScale("rem"), 0: 0, base: "1rem" },
        maxWidth: { ...modularScale("rem"), 0: 0, base: "1rem" },
        maxHeight: { ...modularScale("rem"), 0: 0, base: "1rem" },
    },
});

function scale(lower, upper, config) {
    function Scale () {
        this.lower = lower;
        this.upper = upper;
        this.config = config;
        return (unit) => {
            let scale = {};
            for (let i = this.lower; i < this.upper; i++) {
                scale[i] = ms(i, this.config);
                if (unit && typeof unit === "string") {
                    scale[i] += unit;
                }
            }
            return scale;
        }
    }
    return new Scale();
}
