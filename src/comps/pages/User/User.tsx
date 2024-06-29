import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import LogoutButton from "../../ui/LogoutButton/LogoutButton";
import style from "../../ui/userStyles/index.module.scss";
import BackButton from "../../ui/BackButton/BackButton";
import UserInfo from "../../ui/UserInfo/UserInfo";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchUserById } from "../../../store/features/user/userSlice";

const User: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const loading = useAppSelector((state) => state.user.loading);
  const error = useAppSelector((state) => state.user.error);
  const { userId } = useParams<{ userId: string }>();

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
        <>
          <header>
            <LogoutButton />
            <BackButton />
            <div className={style.profile_header}>
              <img
                className={style.user_icon}
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <div>
                <h1>
                  {user.first_name} {user.last_name}
                </h1>
                <p>Партнер</p>
              </div>
            </div>
          </header>
          <UserInfo />
        </>
      )}
    </>
  );
};
export default User;
