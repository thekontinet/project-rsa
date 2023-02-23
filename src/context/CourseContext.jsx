import React, { createContext, useState } from 'react'

export const orderedCourseContext = createContext(null);
export function CourseContextProvider({children}) {
    const [orderedCourse, setOrderedCourse] = useState({
      name: '',
      price: ''
    })
  return (
    <orderedCourseContext.Provider value={{orderedCourse, setOrderedCourse}}>{children}</orderedCourseContext.Provider>
  )
}

export default CourseContextProvider;

