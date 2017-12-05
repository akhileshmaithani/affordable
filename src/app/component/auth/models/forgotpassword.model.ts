export interface IForgotPassword {
    Email: string;
    }
  
  export interface IForgotPasswordLD {
   Email: string;
  }
  
  export const defaultForgotPasswordModel = {
     Email: ''
  }
  
  export class ForgotPasswordModel {
    constructor(public model: IForgotPassword = defaultForgotPasswordModel) {
    }
  
    private serialize(forgotpasswordModel: IForgotPassword = this.model): IForgotPasswordLD {
      return {
        Email: forgotpasswordModel.Email      
      };
    }
  }
  