export interface UserProfile {
  id: number;
  fullname: string | null;
  email: string;
  phoneNumber: string | null;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateUserRequest {
  fullname?: string;
  phoneNumber?: string;
  isActive?: boolean;
}
