import { configureStore } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'

// import postsReducer from './'
// export const store = configureStore({
//   reducer: {
//     posts: postsReducer,
//     comments: commentsReducer,
//     users: usersReducer,
//   },
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch



type TDebouncedProps ={
  searchQuery :string,
  delay:number
}

export const useDebounced=({searchQuery, delay}:TDebouncedProps)=>{

  const [debounceValue, setDebounceValue]= useState<String>(searchQuery)

   useEffect(()=>{
    const handler=setTimeout(() => {
      setDebounceValue(searchQuery)
    }, delay);

    return ()=>{
      clearTimeout(handler)
    }

   },[searchQuery,delay])
  return debounceValue;

}