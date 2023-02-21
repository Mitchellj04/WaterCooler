import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/users/UserSlice";
import ProjectSlice from "../features/projects/ProjectSlice";
import PostSlice from "../features/posts/PostSlice";
import CategorySlice from "../features/category/CategorySlice";

const store =  configureStore({
    reducer: {
        user: UserSlice,
        project: ProjectSlice,
        post: PostSlice,
        category: CategorySlice
    }
})

export default store 