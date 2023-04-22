import axios from "axios";
import { useQuery } from "react-query";

const fetchProducts = async (Params = null) => {
  const {data} = await axios
    .get(
      `https://codecraft.ir/online-course/wp-json/wc/v3/products?consumer_key=ck_294b2788105f9c5336acf86b3e27f19eaeadb588&consumer_secret=cs_04576e92a5cba664e3051844dad21628f6ea0c35`
    );
  //   const result = parsed.filter(x => x.id <= Params)
  let courses = [];
  await Promise.all(
    data.map(async (course) => {
      let courseData = {
        id: null,
        name: null,
        price: null,
        categories: null,
        images: null,
        teacher: {
          name: null,
          image: null,
        },
      };
      courseData.id = course.id;
      courseData.name = course.name;
      courseData.price = course.price;
      courseData.images = course.images;
      await Promise.all(
        course.meta_data.map(async (meta) => {
          if (meta.key === "_studiare_course_teacher") {
            const teacherData = await getTeacherById(meta.value);
            courseData.teacher.name = teacherData.title.rendered;
            const { data: teacherImage } = await axios.get(
              `https://codecraft.ir/online-course/wp-json/wp/v2/media/${teacherData.featured_media}` // Node.js backend path
            );
            courseData.teacher.image = teacherImage.source_url;
          }
        })
      );

      courses.push(courseData);
    })
  );
//   console.log(parsed);
  return courses;
};


async function getTeacherById(teacherId) {
    const { data } = await axios.get(
      `https://codecraft.ir/online-course/wp-json/wp/v2/teacher/${teacherId}` // Node.js backend path
    );
    return data;
  }

  
const useProducts = (Params) => {
  return useQuery(["Products", Params], () => fetchProducts(Params));
};

export { useProducts, fetchProducts };
