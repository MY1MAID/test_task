import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../../store/features/auth/authSlice";
import { fetchUserById, fetchUsers } from "../../../shared/api/userApi/userApi";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const pagination = useAppSelector((state) => state.user.pagination);
  const loading = useAppSelector((state) => state.user.loading);
  const error = useAppSelector((state) => state.user.error);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  const handleFetchUserById = (userId: number) => {
    dispatch(fetchUserById(userId));
    navigate(`${location.pathname}/${userId}`);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const handleNextPage = () => {
    if (pagination && currentPage < pagination.total_pages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section>
        <section>
          <h1>Наша команда</h1>
          <h2>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </h2>
        </section>
        <button onClick={handleLogout}>Выход</button>
      </section>
      <section>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <p>
                {user.first_name} {user.last_name}
              </p>
              <p>{user.email}</p>
              <button onClick={() => handleFetchUserById(user.id)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={pagination ? currentPage === pagination.total_pages : false}
        >
          Next
        </button>
      </section>
    </>
  );
};
export default Home;
