import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";
export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // get slug and frontmatter posts
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    // { data: frontmatter }とするのはmatterで得られるオブジェクトの中身がdata:AAAAなどの形だから
    //{data:frontmatter}とすることでfrontmatterに代入した形にできるから

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
