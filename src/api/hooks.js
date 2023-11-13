import { useQuery } from "react-query";

export const useLabelQuery = () => {
  const labels = useQuery(["label"], () =>
    fetch("/api/labels").then((res) => res.json()),
  );
  return labels;
};

export const useIssueQuery = ({ labels = [] }) => {
  const labelsFilter = labels.map((label) => `labels[]=${label}&`).join("");
  const issuesQuery = useQuery(["issues", labels], () =>
    fetch(`/api/issues?${labelsFilter}`).then((res) => res.json()),
  );
  return issuesQuery;
};

export const useUserData = (userId) => {
  const usersData = useQuery(
    ["users", userId],
    () => fetch(`/api/users/${userId}`).then((res) => res.json()),
    {
      enabled: !!userId,
    },
  );
  return usersData.data;
};
