import axios from "axios"
export default async function handler(req, res) {
    const { data } = await axios.get(
        'https://codecraft.ir/online-course/wp-json/wc/v3/products?consumer_key=ck_294b2788105f9c5336acf86b3e27f19eaeadb588&consumer_secret=cs_04576e92a5cba664e3051844dad21628f6ea0c35', // Node.js backend path
      )
      res.json(data)
  }
//   ck_294b2788105f9c5336acf86b3e27f19eaeadb588 client/key
// cs_04576e92a5cba664e3051844dad21628f6ea0c35 client/secret