import { API_BASE } from "@/lib/config";
import axios from "axios";
import { useRouter } from "next/navigation";



const useSignout = () => {
  const router = useRouter();

  const signout = async () => {
    try {
      await axios.post(
        `${API_BASE}/signout`,
        {},
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.error("Signout error:", err);
    } finally {
      // Redirect to signin page after logout
      router.push("/signin");
    }
  };

  return { signout };
};

export default useSignout;
