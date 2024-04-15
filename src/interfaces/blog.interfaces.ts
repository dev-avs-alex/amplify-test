import Post from "./post.interfaces"
export default interface Blog {
    id: number
    name: string
    posts: [Post]
}