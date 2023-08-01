import PostsLists from "@/app/components/PostsLists";
import PostsPagination from "@/app/components/PostsPagination";

import { allPosts, Post } from "contentlayer/generated";
import { getPagination } from "@/app/utils/Pagination";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

export const metadata = {
  title: "Lista de todos los posts",
  description: "Descripcion posts",
};

const Posts = () => {
  const { currentPosts, totalPages } = getPagination(posts);
  return (
    <div>
      <div className="grid gap-4">
        <PostsLists posts={currentPosts} />
        {totalPages > 1 && <PostsPagination totalPages={totalPages} />}
      </div>
    </div>
  );
};

export default Posts;
