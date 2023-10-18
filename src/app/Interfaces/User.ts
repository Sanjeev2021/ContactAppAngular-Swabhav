export interface CreateUser {
    FullName: string,   
    username: string,
    password: string,
    isAdmin: boolean,
}

export interface Login {
    username: string,
    password: string,
}

export interface loginResponse {
    ID: number
}

export interface ResponseToken {
    token: string
  }