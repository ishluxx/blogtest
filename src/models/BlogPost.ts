export interface BlogPost {
  id: string;
  date: string;
  author: string;
  authorImage:string;
  imageUrl:string;
  title: string;
  description: string;
  content: any;
  categories:string
}
export interface BlogPostsResponse {
  map(arg0: (post: BlogPost) => import("react").JSX.Element): import("react").ReactNode;
  posts: BlogPost[];
}
