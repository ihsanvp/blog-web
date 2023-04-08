import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getPosts } from "../lib/posts"
import sanityPortableText from "../lib/sanityPortableText"

export async function get(context) {
	const posts = await getPosts()
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.title,
			pubDate: post.publishedAt,
			description: post.title,
			customData: sanityPortableText(post.body),
			link: `/blog/${post.slug.current}/`,
		})),
	});
}
