import React from "react";
import Image from "next/image";

const DdesktopAddLinks = () => {
  return (
    <>
      <div className="flex flex-col gap-9 p-[24px]">
        <nav className="flex justify-between items-center px-[20px] bg-[#FFFFFF] rounded-xl text-[16px] font-[600] leading-[24px] h-[78px] sticky top-0 z-10">
          <Image
            src="/assests/icons/logo.svg"
            alt="brandLogo"
            width={185.5}
            height={40}
          />
          <div className="flex items-center">
            <button className="bg-[#EFEBFF] rounded-lg h-[46px] w-[122px] flex gap-2 items-center justify-center text-[#633CFF]">
              <Image
                src="/assests/icons/link.svg"
                alt="link-icon"
                width={20}
                height={20}
              />
              Links
            </button>
            <button className="flex gap-2 items-center justify-center text-[#737373] rounded-lg h-[46px] w-[187px] hover:text-[#633CFF]">
              <Image
                src="/assests/icons/user-circle.svg"
                alt="user-circle"
                width={20}
                height={20}
              />{" "}
              Profile Details
            </button>
          </div>
          <button className="items-center text-[#633CFF] hover:bg-[#EFEBFF] rounded-lg h-[46px] w-[114px] border border-[#633CFF]">
            Preview
          </button>
        </nav>

        <div className="flex items-center gap-10 w-[100%]">
          <div className="flex justify-center items-center w-[40%] bg-[#FFFFFF] h-[834px] rounded-xl">
            <div className="flex justify-center h-[631px]">
              <Image
                src="/assests/icons/frame1.svg"
                alt="frame1"
                width={307}
                height={631}
              />
              <Image
                src="/assests/icons/frame2.svg"
                alt="frame2"
                className="absolute mt-2"
                width={285}
                height={611}
              />
              <div className="absolute mt-14 flex flex-col gap-12 items-center justify-center w-[20%] p-[5px]">
                <div className="bg-[#EEEEEE] h-[96px] w-[96px] rounded-[50%]"></div>

                <div className="flex flex-col gap-4 items-center">
                  <div className="w-[160px] h-[16px] bg-[#EEEEEE] rounded-[104px]"></div>
                  <div className="w-[78px] h-[8px] bg-[#EEEEEE] rounded-[104px]"></div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="bg-[#EEEEEE] rounded-lg h-[44px] w-[237px]"></div>
                  <div className="bg-[#EEEEEE] rounded-lg h-[44px] w-[237px]"></div>
                  <div className="bg-[#EEEEEE] rounded-lg h-[44px] w-[237px]"></div>
                  <div className="bg-[#EEEEEE] rounded-lg h-[44px] w-[237px]"></div>
                  <div className="bg-[#EEEEEE] rounded-lg h-[44px] w-[237px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%] flex flex-col justify-between bg-[#FFFFFF] h-[834px] rounded-xl">
            <div className="h-[739px] p-[40px] flex flex-col gap-8">
              <div className="flex flex-col">
                <h1 className="text-[#333333] leading-[48px] text-[32px] font-[700]">
                  Customize your links
                </h1>
                <p className="text-[#737373] text-[16px] leading-[24px] font-[400]">
                  Add/edit/remove links below and then share all your profiles
                  with the world!
                </p>
              </div>
              <button className="flex justify-center items-center border border-[#633CFF] rounded-lg h-[46px] text-[#633CFF] font-[600] text-[16px] leading-[24px] hover:bg-[#EFEBFF]">
                + Add new link
              </button>

              <div className="bg-[#FAFAFA] h-[469px] flex justify-center items-center">
                <div className="flex flex-col gap-8 items-center text-center w-[488px]">
                  <Image
                    src="/assests/icons/started.svg"
                    alt="started-Imageage"
                    width={249.53}
                    height={160}
                  />
                  <h1 className="text-[#333333] font-[700] text-[32px] leading-[48px]">
                    Let’s get you started
                  </h1>
                  <p className="text-[#737373] leading-[24px] font-[400] text-[16px]">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </p>
                </div>
              </div>
            </div>

            <div className="h-[95px] flex justify-end items-center font-[600] text-[16px] leading-[24px] text-[#FFFFFF] px-[40px] border-t-[2px] border-t-[#ececec]">
              <button className="bg-[#633CFF] rounded-lg h-[46px] w-[91px] opacity-15 btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DdesktopAddLinks;
