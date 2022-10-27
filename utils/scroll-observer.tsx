import React, { useCallback, useEffect, useState } from 'react';

interface ScrollObserver {
    scrollY: number

}

export const ScrollContext = React.createContext<ScrollObserver>({ 
    scrollY: 0 
})
const ScrollObserver: React.FC<{children: React.ReactNode}> = ({ children }) => {
        const [ scrollY, setScrollY] = useState(0)
        const handleScroll = useCallback(() => {
            
            setScrollY(window.scrollY)
        } , [])

    useEffect(() => {
            document.addEventListener('scroll', handleScroll, { passive: true })
            return () =>  {
                document.removeEventListener('scroll', handleScroll)
            }
     }, [handleScroll])

        return(
        
            <ScrollContext.Provider value={{ scrollY }}>
                {children}
            </ScrollContext.Provider>
            
        )
}

export default ScrollObserver;