import { groq, useSanityClient } from "astro-sanity";
import type Post from "src/models/Post";

export async function getPosts(): Promise<Post[]> {
    const query = groq`
    *[_type == "post"]{
        title,
        body,
        mainImage,
        publishedAt,
        slug,
        categories[]->{
            title
        },
        author->{
            name,
            image
        }
    }
    `
    return useSanityClient().fetch(query)
}