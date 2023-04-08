import { loadEnv } from "vite"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const MODE = process.env.NODE_ENV || "development"
const env = loadEnv(MODE, resolve(__dirname), '')

export const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID || env.SANITY_PROJECT_ID
export const SANITY_DATASET = process.env.SANITY_DATASET || env.SANITY_DATASET
export const SANITY_API_VERSION = process.env.SANITY_API_VERSION || env.SANITY_API_VERSION
export const SANITY_USE_CDN = (process.env.SANITY_USE_CDN || env.SANITY_USE_CDN) == "true"