import { useRouter } from "next/navigation";
import axios from "axios";
import { clearVerified } from "./usePinVerification";

const API_BASE = "http://localhost:8000/api";

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.post(
        `${API_BASE}/logout`,
        {},
        { withCredentials: true }
      );
    } catch {
      // Even if backend fails, clear client and redirect
    }
    clearVerified();
    router.push("/signin");
  };

  return { logout };
}
