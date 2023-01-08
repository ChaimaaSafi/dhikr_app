import React, { useEffect, useRef } from "react";

type TDropDown = {
  closeDropDown: () => void;
  text: string;
  open: boolean;
  className?: string;
  buttonRef?: any;
};
function DropDown({
  closeDropDown,
  open,
  className = "right-0 w-full top-full",
  text,
  buttonRef,
}: TDropDown) {
  const dropRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        dropRef?.current &&
        !dropRef?.current?.contains(event.target) &&
        !buttonRef?.current?.contains(event.target)
      ) {
        closeDropDown && closeDropDown();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [closeDropDown, buttonRef]);

  if (!open) {
    return null;
  }
  return (
    <div
      className={`flex px-3 z-50 animate-fade-in-right h-[50px] rounded-lg bg-white  border border-gray-1 py-3  shadow-md  ${className}`}
      ref={dropRef}
    >
      <div className="flex items-center space-x-2 w-full">
        <h1 className="text-lg font-medium">{text}</h1>
        <a
          className="px-2 text-brown-2  text-sm  underline underline-offset-4"
          href="mailto:heychaimaa@gmail.com"
        >
          Contact Me
        </a>
        <div
          className="flex items-center justify-end text-brown-1 cursor-pointer"
          onClick={() => closeDropDown()}
        >
          X
        </div>
      </div>
    </div>
  );
}

export default DropDown;
