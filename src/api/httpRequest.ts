import { AxiosInstance } from "axios";


export class HttpRequest<T> {
  constructor(private readonly service:AxiosInstance){
    this.service = service;
  }

  async get(url:string,callback:any){
    await this.service.get(url).then((response:any) => {
      if(callback) callback(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
  }
  post(url:string,data:any){
    return this.service.post(url,data);
  }
}