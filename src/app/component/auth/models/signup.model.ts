export interface ISignup {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

export interface ISignupLD {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
}

export const defaultSignupModel = {
  FirstName: '',
  LastName: '',
  Email: '',
  Password: ''
};

export class TokenClass{
  Refresh_Token: string;
  Token: string;
}

export class SignupModel {
  constructor(public model: ISignup = defaultSignupModel) {
  }

  private serialize(signupModel: ISignup = this.model): ISignupLD {
    return {
      FirstName: signupModel.FirstName,
      LastName: signupModel.LastName,
      Email: signupModel.Email,
      Password: signupModel.Password
    };
  }
}
