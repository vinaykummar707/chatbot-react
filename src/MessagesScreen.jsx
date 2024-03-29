import { FaChevronCircleUp, FaLocationArrow } from "react-icons/fa";
import {
  RiHistoryLine,
  RiLogoutBoxFill,
  RiLogoutCircleLine,
  RiRobot2Line,
} from "react-icons/ri";
import { HiChevronDown, HiDotsHorizontal, HiLogout } from "react-icons/hi";
import { TbWorldCheck } from "react-icons/tb";
import { useState } from "react";
import { ClipLoader, SyncLoader } from "react-spinners";
import {
  HiBookOpen,
  HiChatBubbleBottomCenterText,
  HiChatBubbleOvalLeftEllipsis,
  HiChevronUp,
  HiCog,
  HiCog6Tooth,
  HiCog8Tooth,
  HiOutlinePlus,
  HiPlus,
  HiStar,
  HiSun, HiTrash,
} from "react-icons/hi2";

export const MessagesScreen = () => {
  let [loading, setLoading] = useState(true);

  return (
    <>
      <div className="flex h-screen w-full">
        <div className=" flex flex-col gap-2 w-[6%] border-r dark:border-neutral-700 items-center justify-between px-4 py-6 dark:bg-neutral-800 ">
          <img
            className="inline-block size-[32px] rounded-full"
            src="https://avatar.iran.liara.run/public/28"
            alt="Image Description"
          />

          <div className="flex flex-col gap-8">
            <HiChatBubbleBottomCenterText
              className={"dark:text-white "}
              size={32}
            />

            <HiBookOpen
              className={"dark:text-neutral-600 text-gray-300"}
              size={32}
            />

            <HiStar
              className={"dark:text-neutral-600 text-gray-300"}
              size={32}
            />

            <HiSun
              className={"dark:text-neutral-600 text-gray-300"}
              size={32}
            />

            <HiCog6Tooth
              className={"dark:text-neutral-600 text-gray-300"}
              size={32}
            />
          </div>

          <img
            className="inline-block size-[36px] outline-offset-2 outline outline-green-500  rounded-full"
            src="https://avatar.iran.liara.run/public/28"
            alt="Image Description"
          />
        </div>
        <div className=" flex flex-col w-[25%] bg-gray-100 items-center gap-0 border-r justify-between dark:border-neutral-700   dark:bg-neutral-800 ">
          <div className="flex flex-col p-4 w-full gap-3">
            <h1 className="dark:text-white  text-lg font-bold">Messages</h1>
            <input
              type="text"
              className="w-full px-4 py-2 bg-white border-neutral-300 dark:bg-neutral-200 border   dark:border-neutral-700 rounded-xl"
              placeholder="Search here"
            />
          </div>

          <div className="flex flex-1  flex-col px-4 ">
            <div className="flex border-l-2 border-purple-600 bg-white dark:bg-neutral-700 items-center justify-start  gap-3  p-4  dark:border-neutral-600 ">
              {/*<div*/}
              {/*  className={*/}
              {/*    "p-2 rounded-full  bg-neutral-200 flex items-center justify-center"*/}
              {/*  }*/}
              {/*>*/}
              {/*  <h1 className={"text-xs "}>WS</h1>*/}
              {/*</div>*/}
              <div className={"space-y-3"}>
                <p className="dark:text-white text-sm text-black ">
                  What is the maximum number of weeks of FML can I request to
                  take off in a year? What does CASM stand for ?
                </p>
                <div className={'w-full inline-flex justify-between items-center'}>
                  <p className="dark:text-neutral-400  text-xs text-neutral-500  line-clamp-1">
                    17 July 2023 at 12:00 PM
                  </p>
                  <HiTrash className={'text-gray-400'} size={'20'}/>
                </div>

              </div>
            </div>

            <div className="flex border-b-2  items-center justify-start  gap-3  p-4  dark:border-neutral-700 ">
              {/*<div*/}
              {/*  className={*/}
              {/*    "p-2 rounded-full  bg-neutral-200 flex items-center justify-center"*/}
              {/*  }*/}
              {/*>*/}
              {/*  <h1 className={"text-xs "}>WS</h1>*/}
              {/*</div>*/}
              <div className={"space-y-3 w-full"}>
                <p className="dark:text-white text-sm text-black ">
                  What is Jetblue's PTO Policy ?
                </p>
                <div className={'w-full inline-flex justify-between items-center'}>
                  <p className="dark:text-neutral-400  text-xs text-neutral-500  line-clamp-1">
                    17 July 2023 at 12:00 PM
                  </p>
                  <HiTrash className={'text-gray-400'} size={'20'}/>
                </div>
              </div>
            </div>
          </div>

          <div className={"w-full flex flex-col gap-4 p-4 "}>
            <button
                type="button"
                className="py-3  px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-purple-800 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              New Conversation
              <HiOutlinePlus size={22} />
            </button>

            {/*<div className="flex  border border-neutral-300  p-2 dark:border-neutral-700  justify-between  rounded-xl items-center  ">*/}
            {/*  <div className="flex items-center gap-4">*/}
            {/*    <img*/}
            {/*      className="inline-block size-[32px] rounded-full"*/}
            {/*      src="https://avatar.iran.liara.run/public/28"*/}
            {/*      alt="Image Description"*/}
            {/*    />*/}
            {/*    <div>*/}
            {/*      <h1 className="dark:text-white  text-sm font-bold">*/}
            {/*        Albert Suzeme*/}
            {/*      </h1>*/}
            {/*      <p className="text-xs  text-neutral-500">Senior Manager </p>*/}
            {/*    </div>*/}
            {/*  </div>*/}

            {/*  <HiChevronUp className={"text-black dark:text-white"} size={18} />*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="flex-1 px-16 py-6 flex flex-col  dark:bg-neutral-900">
          {/*<div*/}
          {/*  className={*/}
          {/*    "h-20 border-b dark:border-neutral-700 bg-white dark:bg-neutral-800"*/}
          {/*  }*/}
          {/*></div>*/}
          <div className="flex-1 gap-8 flex flex-col ">
            <div className="flex w-[70%] self-end flex-row-reverse  gap-2">
              <img
                className="inline-block size-[44px] rounded-full"
                src="https://avatar.iran.liara.run/public/32"
                alt="Image Description"
              />
              <div className="bg-purple-800 dark:bg-white  p-4 mt-3 rounded-tl-3xl  rounded-br-3xl rounded-bl-3xl">
                <p className="text-sm dark:text-black font-medium text-white leading-relaxed">
                  What is Jetblue's PTO Policy ?
                </p>
              </div>
            </div>

            <div className="flex items-start w-[70%]  gap-2">
              <div className="dark:bg-white bg-[#00205b] p-3 rounded-full">
                <RiRobot2Line className=" dark:text-[#00205b] text-white size-[24px]" />
              </div>
              <div className="bg-neutral-100  dark:bg-neutral-800 dark:border-neutral-700  flex-col gap-4 flex p-4 border  mt-3  rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">
                <p className="text-sm dark:text-white leading-relaxed">
                  JetBlue's Paid Time Off (PTO) policy allows for flexibility
                  combining vacation, illness, personal time, family time,
                  holidays, and department requirements. All PTO must be
                  approved by the Crewmember's Crewleader. Taking unapproved
                  time off may result in disciplinary action. PTO for illness or
                  emergencies may require documentation. Seasonal, JET Intern,
                  and Flex Crew are not eligible for Leave of Absences unless
                  required by law.
                </p>

                <div className=" inline-flex items-center gap-2 p-4 dark:bg-neutral-700 dark:border-neutral-600 bg-white border border-gray-200 rounded-xl">
                  <TbWorldCheck size={24} className="dark:text-white" />
                  <p className="text-sm dark:text-white">
                    Source: JetBlue Crewmember Blue Book.pdf, page number
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-[70%] self-end flex-row-reverse  gap-2">
              <img
                className="inline-block size-[44px] rounded-full"
                src="https://avatar.iran.liara.run/public/32"
                alt="Image Description"
              />
              <div className="bg-purple-800 dark:bg-white  p-4 mt-3 rounded-tl-3xl  rounded-br-3xl rounded-bl-3xl">
                <p className="text-sm dark:text-black  font-medium text-white leading-relaxed">
                  What is the maximum number of weeks of FML can I request to
                  take off in a year? What does CASM stand for ?
                </p>
              </div>
            </div>

            <div className="flex items-start w-[70%]  gap-2">
              <div className="dark:bg-white bg-[#00205b] p-3 rounded-full">
                <RiRobot2Line className=" dark:text-[#00205b] text-white size-[24px]" />
              </div>
              <div className="bg-white  dark:bg-neutral-800 dark:border-neutral-700  flex-col gap-4 flex p-4 border  mt-3  rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">
                <p className="text-sm dark:text-white leading-relaxed">
                  <SyncLoader
                    color={"white"}
                    loading={loading}
                    size={4}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </p>
              </div>
            </div>

            {/*<div className="flex  self-end flex-row-reverse w-1/2 gap-2">*/}
            {/*  <img*/}
            {/*    className="inline-block size-[44px] rounded-full"*/}
            {/*    src="https://avatar.iran.liara.run/public/32"*/}
            {/*    alt="Image Description"*/}
            {/*  />*/}
            {/*  <div className="bg-neutral-900 p-4 mt-4 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-3xl">*/}
            {/*    <p className="text-sm text-white font-medium">*/}
            {/*      Do I have to return my uniform after employment ends ?*/}
            {/*    </p>*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className="flex w-1/2 gap-2">*/}
            {/*  <img*/}
            {/*    className="inline-block size-[44px] rounded-full"*/}
            {/*    src="https://avatar.iran.liara.run/public/28"*/}
            {/*    alt="Image Description"*/}
            {/*  />*/}
            {/*  <div className="bg-white flex-col gap-4 flex p-4 border  mt-4 rounded-tl-md rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">*/}
            {/*    <p className="text-sm  leading-relaxed">*/}
            {/*      Yes, you have to return your uniform once service is ended.*/}
            {/*    </p>*/}

            {/*    /!*<div className=" p-4 border-dotted bg-gray-100 border border-gray-300 rounded-xl">*!/*/}
            {/*    /!*  <p className="text-sm">*!/*/}
            {/*    /!*    Source: JetBlue Crewmember Blue Book.pdf, page number*!/*/}
            {/*    /!*  </p>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="flex gap-4  justify-between items-center">
            <input
              className="flex-1 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 dark:border focus:outline-0  rounded-2xl py-3 px-4"
              placeholder="Type a message or type '/' to select a prompt"
            />
            <button
              type="button"
              className="py-4 px-4 dark:bg-indigo-600 flex justify-center items-center size-[48px] text-sm font-semibold rounded-2xl border border-transparent bg-blue-500 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <FaLocationArrow size={35} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
