export interface IChangePassword {
    Password: string;
    OldPassword:string;
}
  
  export interface IChangePasswordLD {
   Password: string;
   OldPassword:string;
  }
  
  export const defaultChangePasswordModel = {
     Password: '',
     OldPassword:''
  }
  
  export class ResetPasswordModel {
    constructor(public model: IChangePassword = defaultChangePasswordModel) {
    }
  
    private serialize(changepasswordModel: IChangePassword = this.model): IChangePasswordLD {
      return {
        OldPassword: changepasswordModel.OldPassword,
        Password: changepasswordModel.Password      
      };
    }
  }
  