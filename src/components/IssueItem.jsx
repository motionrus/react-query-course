import { GoComment, GoInfo, GoIssueClosed } from "react-icons/go";
import { Link } from "react-router-dom";
import { relativeDate } from "../helpers/relativeDate";

export function IssueItem({
  assignee,
  title,
  number,
  commentCount,
  createdBy,
  createdDate,
  labels,
  status,
}) {
  return (
    <li>
      <div>
        {status === "done" || status === "cancelled" ? (
          <GoIssueClosed style={{ color: "red" }} />
        ) : (
          <GoInfo style={{ color: "green" }} />
        )}
      </div>
      <div className={"issue-content"}>
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels.map((label, index) => (
            <span key={index} className={"label red"}>
              {label}
            </span>
          ))}
        </span>
        <small>
          #{number} opened {relativeDate(createdDate)} by {assignee}
        </small>
      </div>
      {Boolean(assignee) && <div>{assignee}</div>}

      <span className={"comment-count"}>
        {Boolean(commentCount) && (
          <>
            <GoComment />
            {commentCount}
          </>
        )}
      </span>
    </li>
  );
}
