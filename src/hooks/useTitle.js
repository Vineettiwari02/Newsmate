import React, { useEffect } from 'react'

export const useTitle = (title,apipath) => {
    useEffect(()=>{
        document.title = `${title} - Newsmate`
    },[apipath])
  return null;
}
