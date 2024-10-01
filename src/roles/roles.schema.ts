import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop({ required: true })
  role: string; // Por ejemplo: 'admin', 'user', etc.

  @Prop({ required: true })
  access_control: {
    action: string;
    subject: string;
    inverted?: boolean;
    conditions?: object;
  }[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
