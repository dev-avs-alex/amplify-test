import Post from "./post.interfaces"
export default interface Comment {
    id: number
    post: Post 
    content: string
}