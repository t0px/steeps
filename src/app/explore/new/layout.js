import Backdrop from "@/components/public/Backdrop";
import UploadsPage from "../page";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {

  return (
    <>
      <UploadsPage />
      <Backdrop>
        {children}
      </Backdrop>
    </>
  );
};

export default Layout;
