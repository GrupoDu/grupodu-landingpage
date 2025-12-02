export interface IContactInfos extends IUserInfos {
    subject: string;
    message: string;
}

export interface IProductRequest extends IUserInfos {
   quantity: number;
   model: string; 
}