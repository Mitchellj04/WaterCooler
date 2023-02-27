import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/users/UserSlice";
import ProjectSlice from "../features/projects/ProjectSlice";
import PostSlice from "../features/posts/PostSlice";
import CategorySlice from "../features/category/CategorySlice";
import CommentSlice from "../features/comment/CommentSlice";
import AllUserSlice from "../features/users/AllUserSlice";

const store =  configureStore({
    reducer: {
        user: UserSlice,
        allUser: AllUserSlice,
        project: ProjectSlice,
        post: PostSlice,
        category: CategorySlice,
        comment: CommentSlice
    }
})

export default store 