import {request} from "@/network/request";

export function getHome(){
  return request({
    url:'/home/multidata'
  })
}
