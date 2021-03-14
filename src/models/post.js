import mongoose, { Schema } from 'mongoose';

// 스키마 생성
const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
});

// 모델 생성
const Post = mongoose.model('Post', PostSchema); // 파라미터로 스키마이름, 스키마객체

export default Post;
