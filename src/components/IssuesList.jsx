import { IssueItem } from "./IssueItem";
import { useIssueQuery } from "../api/hooks";

export default function IssuesList({ selected }) {
  const issuesQuery = useIssueQuery({ labels: selected });
  return (
    <div>
      <h1>Issues List</h1>
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={"issues-list"}>
          {issuesQuery.data.map((issue) => {
            return (
              <IssueItem
                key={issue.id}
                assignee={issue.assignee}
                title={issue.title}
                number={issue.number}
                commentCount={issue.comments.length}
                createdBy={issue.createdBy}
                createdDate={issue.createdDate}
                labels={issue.labels}
                status={issue.status}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
