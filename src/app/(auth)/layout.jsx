export default function AuthLayout({ children }) {
  return (
    <>
      <div className=" fixed top-0 left-0 w-full h-full z-50  bg-white"></div>
      <div className={"relative z-[60] w-full h-full min-h-screen"}>
        {children}
      </div>
    </>
  );
}
