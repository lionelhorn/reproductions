import { defineConfig } from "vite";
import Inspect from 'vite-plugin-inspect'
import {resolve} from "node:path";
import {deepkitType} from "@deepkit/vite";

const __dirname = import.meta.dirname;

console.log("vite.config.ts");
const pathToTsConfig = resolve(__dirname, "../tsconfig.json");
console.log("tsconfig", pathToTsConfig)

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    minify: false
  },
  plugins: [
    Inspect(),
    deepkitType({
      tsConfig: pathToTsConfig,
      compilerOptions: {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "module": "ES2020",
        "target": "ES2020",
        "moduleResolution": "node",
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        // Needed for proper line mapping.
        // https://discordapp.com/channels/759513055117180999/1161961227413622864/1162425695650201680
        "sourceMap": true,
        "esModuleInterop": true,
        "declaration": true,
        "composite": true
      }
    }),
  ]
});
