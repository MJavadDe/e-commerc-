import axios from "axios";
export default async function handler(req, res) {
  let courses = [];
console.log('req');
const query = req.url.slice(req.url.indexOf("?")+1)
  const { data } = await axios.get(
    `https://codecraft.ir/online-course/wp-json/wc/v3/products?consumer_key=ck_294b2788105f9c5336acf86b3e27f19eaeadb588&consumer_secret=cs_04576e92a5cba664e3051844dad21628f6ea0c35&${query}` // Node.js backend path
  );
  // const { teacherData } = await axios.get(
  //   'https://codecraft.ir/online-course/wp-json/wp/v2/teacher/1547', // Node.js backend path
  // )
  await Promise.all(
    data.map(async (course) => {
      let courseData = {
        id: null,
        name: null,
        price: null,
        categories: null,
        images: null,
        teacher: {
          name:null,
          image:null
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
            const { data:teacherImage } = await axios.get(
              `https://codecraft.ir/online-course/wp-json/wp/v2/media/${teacherData.featured_media}` // Node.js backend path
            );
            courseData.teacher.image = teacherImage.source_url
          }
        })
      );
      // for (const meta of course.meta_data) {
      //   if (meta.key === "_studiare_course_teacher") {
      //     courseData.teacher =  getTeacherById(meta.value)
      //   }
      // }
      courses.push(courseData);
    })
  );
  res.json(courses);
}

async function getTeacherById(teacherId) {
  const { data } = await axios.get(
    `https://codecraft.ir/online-course/wp-json/wp/v2/teacher/${teacherId}` // Node.js backend path
  );
  return data;
}
