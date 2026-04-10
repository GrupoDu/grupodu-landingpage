/**
 * Interface de informações de contato
 *
 * @see IUserInfos
 * @interface
 */
export interface IContactInfos extends IUserInfos {
  subject: string;
  message: string;
}

/**
 * Interface de informações de pedido de produto
 *
 * @see IUserInfos
 * @interface
 */
export interface IProductRequest extends IUserInfos {
  quantity: number;
  model: string;
}
