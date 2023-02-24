import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/users/UserSlice";
import ProjectSlice from "../features/projects/ProjectSlice";
import PostSlice from "../features/posts/PostSlice";
import CategorySlice from "../features/category/CategorySlice";
import CommentSlice from "../features/comment/CommentSlice";

const store =  configureStore({
    reducer: {
        user: UserSlice,
        project: ProjectSlice,
        post: PostSlice,
        category: CategorySlice,
        comment: CommentSlice
    }
})

export default store 