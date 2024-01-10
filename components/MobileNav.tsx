"use client";
type Props = {
  setToggle: any;
  toggle: any;
};
const MobileNav = ({ setToggle, toggle }: Props) => {
  return (
    <>
      <div className="fixed right-0 top-0 z-10 flex h-screen w-[300px] flex-col items-center justify-center bg-red-800">
        {/* ... content of MobileNav ... */}
        <button onClick={() => setToggle(!toggle)}>close </button>
      </div>
    </>
  );
};

export default MobileNav;
