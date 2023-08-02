import UploadsPage from "../page";

const Layout = ({ children }) => {
  return (
    <>
      <UploadsPage />
      <div className="backdrop-brightness-50 fixed inset-0 flex overflow-y-scroll justify-center items-center">
        <div className="bg-white">{children}</div>
      </div>
    </>
  );
};

export default Layout;
