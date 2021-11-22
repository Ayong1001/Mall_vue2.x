import axios from 'axios'

export function request(config){
  const instance=axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    //baseURL:'https://www.baidu.com',
    timeout:5000

  })

  //请求拦截
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
      //console.log(err)
  })

  //响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    //console.log(err)
  })
  return instance(config)
}
