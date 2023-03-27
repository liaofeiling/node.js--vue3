export interface ILoginRequestData {
  /** admin 或 editor */
  // username: "admin" | "editor"
  username: "admin" | "editor" | string
  /** 密码 */
  password: string
  /** 验证码 */
  // code: string
  // status: number
}

export type LoginCodeResponseData = IApiResponseData<string>

export type LoginResponseData = IApiResponseData<{ token: string }>

export type UserInfoResponseData = IApiResponseData<{ username: string; roles: string[] }>
