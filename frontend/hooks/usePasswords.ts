'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_BASE } from '@/lib/config'

export interface PasswordEntry {
  id: string
  title: string
  username: string
  password: string
  logoUrl?: string
  bgColor?: string
  passKey:Buffer
}

const usePasswords = () => {
  const [items, setItems] = useState<PasswordEntry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPasswords = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get(`${API_BASE}/passwords`, {
        withCredentials: true,
      })
      if (response.status === 200) {
        // map backend data to frontend entry shape
        const data = response.data.data as any[]
        const mapped = data.map((d) => ({
          id: d._id || d.id,
          title: d.platform_name || d.title || '',
          username: d.username,
          password: d.password,
          logoUrl: "" ,
          bgColor: "",
          passKey:d.key
        }))
        setItems(mapped)


        console.log('LIST', mapped)



      } else {
        setError('Failed to load passwords')
      }
    } catch (err: unknown) {
      let msg = 'Error fetching passwords'
      if (axios.isAxiosError(err) && err.response?.data) {
        const d = err.response.data as any
        msg = d.message || JSON.stringify(d)
      }
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPasswords()
  }, [])

  return { items, loading, error, refresh: fetchPasswords }
}

export default usePasswords