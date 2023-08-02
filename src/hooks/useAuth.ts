import jwt_decode from "jwt-decode";

const useAuth = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return {
      isAuthenticated: false,
      user: null
    }
  }

  try {
    const decode_data: any = jwt_decode(token);
    return {
      isAuthenticated: true,
      user: decode_data
    }
  } catch (error) {
    return {
      isAuthenticated: false,
      user: null
    }
  }
};

export default useAuth;
