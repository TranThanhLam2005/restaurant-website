"use client";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import {UserProfile, UpdateUserRequest} from "../types";
import {profileApi} from "../services";

export function useProfile(email: string | null | undefined) {
  const {
    data: profile,
    isLoading,
    error,
    refetch,
  } = useQuery<UserProfile, Error>({
    queryKey: ["profile", email],
    queryFn: () => profileApi.getByEmail(email!),
    enabled: !!email, // Only run query if email exists
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (previously cacheTime)
    retry: 1, // Retry once on failure
  });

  return {profile, isLoading, error, refetch};
}

export function useUpdateProfile(email: string | null | undefined) {
  const queryClient = useQueryClient();

  return useMutation<UserProfile, Error, UpdateUserRequest>({
    mutationFn: (data: UpdateUserRequest) =>
      profileApi.updateByEmail(email!, data),
    onSuccess: (data) => {
      // Update the cached profile data immediately
      queryClient.setQueryData(["profile", email], data);

      // Optionally invalidate to refetch from server
      // queryClient.invalidateQueries({ queryKey: ["profile", email] });
    },
    onError: (error) => {
      console.error("Profile update failed:", error);
    },
  });
}
