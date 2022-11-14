import { useMediaQuery } from "react-responsive"

export const useMedia = () => {
  const isTablet = useMediaQuery({ minWidth: 751, maxWidth: 1224 })
  const isMobile = useMediaQuery({ maxWidth: 750 })

  return {
    isTablet,
    isMobile,
  }
}
