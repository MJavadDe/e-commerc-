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
        const time = new Date().getTime()
        const expieringDate = new Date((time + 604800000))
        document.cookie = `token = ${res.data.data.token} ; expires = ${expieringDate}`
        document.cookie = `displayName = ${res.data.data.displayName} ; expires = ${expieringDate}`
    } ).catch(error => console.log(error))



}
export default validation;