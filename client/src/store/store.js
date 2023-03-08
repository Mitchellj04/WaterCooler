import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Redux/users/UserSlice";
import ProjectSlice from "../Redux/projects/ProjectSlice";
import PostSlice from "../Redux/posts/PostSlice";
import CategorySlice from "../Redux/category/CategorySlice";
import CommentSlice from "../Redux/comment/CommentSlice";
import AllUserSlice from "../Redux/users/AllUserSlice";

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