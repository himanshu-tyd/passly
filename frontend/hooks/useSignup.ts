import { useState } from "react"
import axios from "axios"


const useSignup = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [data, setData] = useState<{ name: string; username: string; email: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const singup = async (payload: { name: string; username: string; email: string; password: string }) => {
        try {
            setLoading(true);
            setSuccess(false);
            setErrors({});

            const response = await axios.post("http://localhost:8000/api/signup", payload);
            const res = response.data;

            if (!res.success) {
                setErrors({ error: res.message ?? "Signup failed" });
                return;
            }
            setErrors({});
            setData(res.data);
            setSuccess(true);
        } catch (err) {
            setErrors({ error: "Something went wrong" });
        } finally {
            setLoading(false);
        }
    };

    return { singup, errors, data, loading, success };

}

export default useSignup