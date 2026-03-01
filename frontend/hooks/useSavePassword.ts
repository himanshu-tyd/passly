'use client'

import { useState } from 'react'
import axios  from 'axios'
import { API_BASE } from '@/lib/config'

interface SavePasswordData {
  username: string
  website: string
  password: string
  email: string
  notes?: string
}

interface SavePasswordResponse {
  success: boolean
  message: string
  data?: any
}

const useSavePassword = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data,setData]=useState({})

  const savePassword = async (passwordData: SavePasswordData) => {
    setLoading(true)
    setError(null)

    
    const payload={
        username:passwordData.username,
        email:passwordData.email,
        notes:passwordData.notes,
        platform_name:passwordData.website,
        password:passwordData.password
    }
    console.log('Saving password:', payload)


    try {
      const response = await axios.post(`${API_BASE}/password`,payload,
       {withCredentials:true}
      )

      const result=response.data

      if(!result.ok){
        setError(result.message)
        return
      }
    
      setData(result.data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setError(null)
  }

  return {
    savePassword,
    loading,
    error,
    reset,
  }
}

export default useSavePassword