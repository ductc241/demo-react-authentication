import { useEffect } from "react";
import userServices from "../../axios/user";

const Profile = () => {
  // const [userInfor, setUserInfor] = useState<any>();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const { data } = await userServices.profile();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserProfile();
  }, []);

  return <div>Profile</div>;
};

export default Profile;
