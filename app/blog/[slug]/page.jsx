import Heading from "@/components/heading";
import Link from "next/link";
import { getAllPost, getPost } from "@/lib/post";
import ShareLink from "@/components/shareLink";

export async function generateStaticParams() {
  const posts = await getAllPost();
  return posts.map((post) => ({ slug: post.title }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.describe,
  };
}
export default async function Detail({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <>
      <Heading>Detai Post</Heading>
      <ShareLink />
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/images/foto1.jpg"
          className="w-full h-48
          object-cover"
        />
        <div className="p-4">
          <article
            dangerouslySetInnerHTML={{ __html: post.body }}
            className="prose prose-lg"
          ></article>
          <div className="mt-4">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Back to Blog List
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
