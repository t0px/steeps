import Backdrop from "@/components/public/Backdrop";
import UploadsPage from "../page";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {

  return (
    <div className="overflow-y-scroll">
      <UploadsPage />
      <Backdrop>
        {children}
      </Backdrop>
    </div>
  );
};

export default Layout;
