import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <p className="mb-3 text-2xl font-semibold">React Auth Example</p>
      <p className="text-lg">
        This is an example site to implement react authentication.
      </p>

      {isAuthenticated && (
        <p className="mt-10 text-rose-500 italic text-2xl font-semibold">
          You see this text because you have logged in successfully
        </p>
      )}
    </div>
  );
};

export default Home;
