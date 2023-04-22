import axios from 'axios'

const validation = async (username = "admin",password = "100Coders@") => {
   await axios.post('https://codecraft.ir/online-course/wp-json/jwt-auth/v1/token',
    {  
        "username": username,
        "password": password
    },
    {
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res =>{
        document.cookie = JSON.stringify({token : res.data.data.token , displayName : res.data.data.displayName })
        console.log(JSON.parse(document.cookie));
    } )
    .catch(error => console.log(error))



}
export default validation;