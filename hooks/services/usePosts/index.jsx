import axios from "axios";
import { useQuery } from "react-query";

const fetchPosts = async (Params = null) => {
  let query = Params ? `${Params}` : "";
  const { data } = await axios.get(
    `https://codecraft.ir/online-course/wp-json/wp/v2/posts${query}`
  );
  let posts = [];
    if(!Array.isArray(data)){
      let id = data.id;
      let title = data.title.rendered;
      let author = data.author;
      let modified = data.modified;
      let content = data.content.rendered;
      let images = await getImageById(data.featured_media);
      posts.push({ id, title, author,  modified, content, images});
    }
    else{
      await Promise.all(data.map(async (post) => {
              let postData = {
                id: null,
                name: null,
                author: null,
                images: null,
                modified: null,
                content: null,
              };
              postData.id = post.id;
              postData.name = post.title.rendered;
              postData.author = post.author;
              postData.modified = post.modified;
              postData.content = post.content.rendered;
              postData.images = await getImageById(post.featured_media);
              posts.push(postData);
            })
      );

    }

  return posts;
};

async function getImageById(imageId) {
  const imageObj = await axios.get(
    `https://codecraft.ir/online-course/wp-json/wp/v2/media/${imageId}`
  );
  const image = await imageObj.data.guid.rendered;
  return image;
}

const usePosts = (Params) => {
  return useQuery(["Posts", Params], () => fetchPosts(Params));
};

export { usePosts, fetchPosts };
