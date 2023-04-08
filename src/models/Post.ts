export default interface Post {
    title: string
    body: object
    mainImage: object
    publishedAt: string
    slug: {
        current: string
    }
    categories: Array<{
        title: string
    }>
    author: {
        name: string
        image: object
    }
}