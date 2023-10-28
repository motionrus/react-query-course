import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { IssueItem } from "./IssueItem";

export default function IssuesList() {
  const issuesQuery = useQuery(["issues"], () =>
    fetch("/api/issues").then((res) => res.json()),
  );
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
                key={issue.key}
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
      <ul>
        <li>
          <Link to="/issue/1">Issue 1</Link>
        </li>
      </ul>
    </div>
  );
}
