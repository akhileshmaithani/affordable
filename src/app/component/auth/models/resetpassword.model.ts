export interface IResetPassword {
    Password: string;
    //ConfirmPassword:string;
}
  
  export interface IResetPasswordLD {
   Password: string;
   //ConfirmPassword:string;
  }
  
  export const defaultResetPasswordModel = {
     Password: ''
     //ConfirmPassword:''
  }
  
  export class ResetPasswordModel {
    constructor(public model: IResetPassword = defaultResetPasswordModel) {
    }
  
    private serialize(resetpasswordModel: IResetPassword = this.model): IResetPasswordLD {
      return {
        Password: resetpasswordModel.Password,
        //ConfirmPassword: resetpasswordModel.ConfirmPassword      
      };
    }
  }
  