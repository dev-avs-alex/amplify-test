import Blog from "./blog.interfaces"

export default interface Post{
    id: number
  title: string
  blog: Blog 
  comments: [Comment]
}