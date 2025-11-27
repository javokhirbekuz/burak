import { ObjectId } from "mongoose";
import { ProductStatus } from "../libs/enum/product.enum";
import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { Product, ProductInput, ProductInquery } from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { T } from "../libs/types/common";

class ProductService {
  private readonly productModel;
  constructor() {
    this.productModel = ProductModel;
  }

  /**   SPA   **/
  public async getProducts(inquery: ProductInquery): Promise<Product[]> {
    const match: T = { productStatus: ProductStatus.PROCESS };
    if (inquery.productCollection)
      match.productCollection = inquery.productCollection;
    if (inquery.search) {
      match.productName = { $regex: new RegExp(inquery.search, "i") };
    } //inquery.search;
    const sort: T =
      inquery.order === "productPrice"
        ? { [inquery.order]: 1 }
        : { [inquery.order]: -1 };
    const result = await this.productModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        { $skip: (inquery.page * 1 - 1) * inquery.limit },
        { $limit: inquery.limit * 1 },
      ])
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  public async getProduct(
    memberId: ObjectId | null,
    id: string
  ): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);
    let result = await this.productModel
      .findOne({
        _id: productId,
        productStatus: ProductStatus.PROCESS,
      })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    // TODO: if authenticated users => first => view log creation

    return result;
  }
  /**   BSSR   **/

  public async getAllProducts(): Promise<Product[]> {
    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.error("Error, model:createNewProduct", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProductInput
  ): Promise<Product> {
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel.findOneAndUpdate(
      { _id: id },
      input,
      { new: true }
    );
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
    return result;
  }
}

export default ProductService;
