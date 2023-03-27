/** 所有 api 接口的响应数据都应该准守该格式 */
// interface IApiResponseData<T> {
//   code: number
//   data: T
//   message: string
// }
interface IApiResponseData<T> {
  status: number
  data: T,
  token:string,
  message: string
}
