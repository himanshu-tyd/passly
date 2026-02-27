import { useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8000/api";

const useSignin = () => {
  const [data, setData] = useState<{} >({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);


  const signin = async (payload: { email: string; password: string }) => {
    try {
      setLoading(true);

      setErrors({});

      const response = await axios.post(`${API_BASE}/signin`, payload, {
        withCredentials: true,
      });

      if (response.status === 200) {
        setData(response.data);
        return
      } else {
        setErrors({ error: "Login failed" });
      }
    } catch (err: unknown) {
      let message = "Something went wrong";
      if (axios.isAxiosError(err) && err.response?.data) {
        const data = err.response.data as any;
        if (typeof data === "string") {
          message = data;
        } else {
          message = data.message || data.error || "Login failed";
        }
      }
      setErrors({ error: message });
    } finally {
      setLoading(false);
    }
  };

  return { signin, errors, data, loading };
};

export default useSignin;
