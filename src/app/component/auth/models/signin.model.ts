export interface ISignin {
  UserName: string;
  Password: string;
}

export interface ISigninLD {
  UserName: string;
  Password: string;
}

export const defaultSigninModel = {
  UserName: '',
  Password: ''
};

export class SigninModel {
  constructor(public model: ISigninLD) {}

  private serialize(signinModel: ISignin = this.model): ISigninLD {
    return {
      UserName: signinModel.UserName,
      Password: signinModel.Password
    };
  }
}
