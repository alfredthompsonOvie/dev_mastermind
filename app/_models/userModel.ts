import { model, models, Schema } from "mongoose";

// export interface IProduct {
//     name: string;
//     description: string;
//     price: number;
// }
// const ProductSchema = new Schema<IProduct>(
//     {
//         name: String,
//         description: String,
//         price: Number,
//     },
//     {
//         timestamps: true,
//         toJSON: {
//             versionKey: false,
//             virtuals: true,
//             transform: (_, ret) => {
//                 delete ret._id;
//             },
//         },
//     },
// );
// const Product = models.Product || model('Product', ProductSchema);
// export default Product;

type UserType = {
	username: string;
	fullName: string;
	password: string;
	email: string;
  avatar: string;
  avatarUrl: string;
  dateJoined: Date;

	drafts: [];
	bookmarks: [];
  publishedPosts: [];
  comments: [];
};

const userSchema = new Schema<UserType>({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
    default: 'https://via.placeholder.com/150x150',
  },
  comments: [
    {
      blogPost: {
        type: Schema.Types.ObjectId,
        ref: 'BlogPost',
      },
      content: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'BlogPost', 
    },
  ],
  drafts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'BlogPost',
    },
  ],
  publishedPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'BlogPost',
    },
  ],
  dateJoined: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model("User", userSchema);

export default User;

