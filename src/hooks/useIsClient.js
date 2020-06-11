import { useState, useEffect } from 'react'

/**
 * References:
 * - https://blog.logrocket.com/fixing-gatsbys-rehydration-issue/
 * - https://github.com/gatsbyjs/gatsby/issues/14601#issuecomment-499922794
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false)
  const key = isClient ? 'client' : 'server'

  useEffect(() => {
    setIsClient(true)
  }, [])

  return { isClient, key }
}
