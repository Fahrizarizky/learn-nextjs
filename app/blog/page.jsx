import Heading from "@/components/heading";
import Post from "@/components/postitems";
import { getAllPost } from "@/lib/post";

export const metadata = {
  title: "Blog",
  descrptions: "Halaman Blog",
};

export default async function Blog() {
  const allposts = await getAllPost();
  return (
    <>
      <Heading>Blog</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allposts.map((post, index) => {
          return (
            <Post
              key={index}
              describe={post.describe}
              date={post.date}
              body={post.body}
              title={post.title}
            />
          );
        })}
      </div>
    </>
  );
}
