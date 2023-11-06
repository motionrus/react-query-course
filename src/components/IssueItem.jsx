import { GoComment, GoInfo, GoIssueClosed } from "react-icons/go";
import { Link } from "react-router-dom";
import { relativeDate } from "../helpers/relativeDate";
import { useUserData } from "../helpers/useUserData";

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
  const assigneeUser = useUserData(assignee);
  const createdByUser = useUserData(createdBy);
  console.log(createdByUser);
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
          #{number} opened {relativeDate(createdDate)} by {createdByUser.name}
        </small>
      </div>
      {Boolean(assignee) && (
        <img src={assigneeUser.profilePictureUrl} className={"assigned-to"} />
      )}

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
