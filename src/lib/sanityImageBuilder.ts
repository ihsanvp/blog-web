import { createImageBuilder, useSanityClient } from "astro-sanity";

const imageBuilder = createImageBuilder(useSanityClient())

export default function sanityImageBuilder(source: any) {
    return imageBuilder.image(source)
}