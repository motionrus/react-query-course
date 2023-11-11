import { useQuery } from "react-query";

export function useUserData(userId) {
  const usersData = useQuery(
    ["users", userId],
    () => userId && fetch(`/api/users/${userId}`).then((res) => res.json()),
  );
  return usersData.data;
}
