import { portableTextToHtml } from "astro-sanity";
import sanityImageBuilder from "./sanityImageBuilder";

const customComponents = {
    types: {
        image: ({ value }: any) => {
            return `
            <picture>
                <source
                    srcset="${sanityImageBuilder(value.asset).format('webp').url()}"
                    type="image/webp"
                />
                <img
                    class="responsive__img"
                    src="${sanityImageBuilder(value.asset).url()}"
                    alt="${value.alt}"
                />
            </picture>
            `
        }
    }
}

export default function sanityPortableText(portableText: any) {
    return portableTextToHtml(portableText)
}