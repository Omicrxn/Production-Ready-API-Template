import { prop, getModelForClass } from "@typegoose/typegoose";
class Article {
  @prop({ type: String, required: true })
  name: string;
  @prop({ type: String, required: true })
  brand: string;
  @prop({ type: String, required: true })
  model: string;
  @prop({type: String})
  description: string;
  @prop({type: Date})
  buyDate: Date;
  @prop({ type: Date,required: true })
  expirationDate: Date;
  @prop({type:String})
  imgUrl: string;
  @prop({type: String})
  ticketImgUrl: string;
  @prop({type: ()=>[String]})
  family: string[];
}

const ArticleModel = getModelForClass(Article);
export default ArticleModel;
