import {LoginRequest, LoginResponse, RegisterRequest} from "./types";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const res = await fetch(`${API}/auth/generateToken`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      throw new Error(errorText || "Invalid credentials");
    }

    // Backend returns token as plain string, not JSON
    const token = await res.text();
    return {access_token: token};
  },
  register: async (data: RegisterRequest): Promise<void> => {
    const res = await fetch(`${API}/auth/addNewUser`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    });
    console.log("Registration response status:", res.status); 
    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      throw new Error(errorText || "Registration failed");
    }
  },
};
