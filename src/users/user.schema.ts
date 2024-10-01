import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  role: string; // Por ejemplo: 'admin', 'user', etc.
}

export const UserSchema = SchemaFactory.createForClass(User);
