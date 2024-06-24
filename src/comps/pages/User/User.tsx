import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../../shared/api/userApi/userApi";

const User: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const loading = useAppSelector((state) => state.user.loading);
  const error = useAppSelector((state) => state.user.error);
  const { userId } = useParams();

  useEffect(() => {
    if (!user && userId) {
      const numericUserId = parseInt(userId, 10);
      if (!isNaN(numericUserId)) {
        dispatch(fetchUserById(numericUserId));
      }
    }
  }, [dispatch, user, userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      {user && (
        <div>
          <h2>User Details</h2>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
          <p>
            Name: {user.first_name} {user.last_name}
          </p>
          <p>Email: {user.email}</p>
          <p>{user.description}</p>
        </div>
      )}
    </>
  );
};
export default User;
