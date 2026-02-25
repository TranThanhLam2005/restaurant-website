import {UserProfile, UpdateUserRequest} from "./types";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export const profileApi = {
  getByEmail: async (email: string): Promise<UserProfile> => {
    const res = await fetch(`${API}/users/email/${encodeURIComponent(email)}`);

    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      throw new Error(errorText || "Failed to fetch user profile");
    }

    return res.json();
  },

  updateByEmail: async (
    email: string,
    data: UpdateUserRequest,
  ): Promise<UserProfile> => {
    const res = await fetch(`${API}/users/${encodeURIComponent(email)}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => "");
      throw new Error(errorText || "Failed to update user profile");
    }

    return res.json();
  },
};
