import { RiRobot2Line } from "react-icons/ri";
import {
  IoChatbubbleEllipsesSharp,
  IoChatbubbles,
  IoCheckmarkDoneOutline,
  IoShieldCheckmark,
} from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { HiChevronDown } from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi2";

export const ChatEntryPage = () => {
  const guidelines = [
    {
      headline: "Use for Authorized Purposes Only",
      content:
        "Engage with ChatGPT for legitimate business-related tasks. Personal use is not permitted.",
    },
    {
      headline: "Protect Confidential Information",
      content:
        "Do not input or discuss any sensitive, confidential, or proprietary information of JetBlue or its customers.",
    },
    {
      headline: "Compliance with Laws",
      content:
        "Ensure your interactions comply with all relevant laws, regulations, and corporate policies.",
    },
  ];

  const questions = [
    "Do I have to return my uniform after employment ends ?",
    "What is the maximum number of weeks of FML can I request to take off in a year ?",
    "What does CASM stand for ?",
    "What kinds of time off programs does jetblue have ?",
    "How many days of unpaid time off can crewmembers request ?",
    "What is jetblue's PTO policy for Personal Leave ?",
  ];

  const pquestions = [
    "What kinds of time off programs does jetblue have ?",
    "How many days of unpaid time off can crewmembers request ?",
    "What is jetblue's PTO policy for Personal Leave ?",
  ];

  return (
    <>
      <div className="flex flex-col  h-screen dark:bg-neutral-950 bg-[#00205b]">
        <div className="flex border-b  dark:bg-neutral-950 dark:border-neutral-800 w-full justify-between px-12 py-5 bg-white items-center gap-4">
          {/*<img*/}
          {/*  width={80}*/}
          {/*  height={100}*/}
          {/*  className={"object-cover"}*/}
          {/*  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/JetBlue_Airways_Logo.svg"*/}
          {/*  alt=""*/}
          {/*/>*/}
          <div className="flex justify-center items-center gap-3">
            <div className="w-10 h-10 dark:bg-white bg-[#00205b]  rounded-full flex justify-center items-center">
              <RiRobot2Line
                className=" dark:text-[#00205b] text-white"
                size={"22"}
              />
            </div>
            <div>
              <h1 className="dark:text-white text-[#00205b]  text-2xl font-bold">
                Bluebot
              </h1>
              {/*<p className="dark:text-neutral-400 text-neutral-500 text-sm">*/}
              {/*  Jetblue's internal FAQ chatbot*/}
              {/*</p>*/}
            </div>
          </div>
          <div className="inline-flex gap-2 border-neutral-300 bg-neutral-100 dark:bg-neutral-800 items-center border dark:border-neutral-700 px-4 py-2 rounded-xl">
            <img
              className="inline-block size-[28px] rounded-full"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <h1 className="dark:text-white text-md font-semibold">Albert</h1>
            <HiChevronDown className={"dark:text-white"} />
          </div>
        </div>

        <div className="flex-col  h-screen flex-1 gap-8 flex py-6 px-12 ">
          <div>
            <h1 className="dark:text-white text-white text-2xl font-bold">
              JetBlue’s Internal FAQ chatbot
            </h1>
            <p className=" text-neutral-400  text-sm">
              Before you begin please read below guidelines and responsible
              usage guidelines
            </p>
          </div>

          <div className="flex gap-6 flex-1 justify-between">
            <div className="rounded-xl dark:bg-neutral-900 bg-white   border-neutral-300 p-4 flex-1 flex flex-col gap-4 dark:border-neutral-800 border ">
              <h1 className="dark:text-white text-md font-semibold">
                Things To Remember :
              </h1>
              {guidelines.map((guideline) => (
                <div
                  key={guideline.headline}
                  className="dark:bg-neutral-800  flex flex-row gap-4 border-neutral-500 items-center p-4 rounded-xl border dark:border-neutral-700"
                >
                  <GoShieldCheck size={40} className="dark:text-white " />
                  <div>
                    <h1 className="dark:text-white font-semibold text-sm">
                      {" "}
                      {guideline.headline}{" "}
                    </h1>
                    <p className="text-xs dark:text-neutral-500 text-neutral-700 mt-1">
                      {" "}
                      {guideline.content}{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className=" rounded-xl dark:bg-neutral-900 bg-white border border-neutral-300  flex flex-col gap-4 justify-start items-start p-4 flex-1 dark:border-neutral-800 ">
              <h1 className="dark:text-white text-md font-semibold ">
                Sample Questions :{" "}
              </h1>
              {questions.map((question) => (
                <div
                  key={question}
                  className="flex items-center gap-2  dark:bg-neutral-800 px-4 py-2 rounded-xl border-neutral-500 border dark:border-neutral-700"
                >
                  <IoCheckmarkDoneOutline
                    size={20}
                    className="dark:text-white"
                  />
                  <h1 className="dark:text-white font-medium text-black text-xs">
                    {" "}
                    {question}{" "}
                  </h1>{" "}
                </div>
              ))}
            </div>

            <div className=" rounded-xl dark:bg-neutral-900 bg-white border border-neutral-300  flex flex-col gap-4 justify-start items-start p-4 flex-1 dark:border-neutral-800 ">
              <h1 className="dark:text-white text-md font-semibold ">
                Previous Conversations :{" "}
              </h1>
              {pquestions.map((question) => (
                <div
                  key={question}
                  className="flex items-center gap-2  dark:bg-neutral-800 px-4 py-2 rounded-xl border-neutral-500 border dark:border-neutral-700"
                >
                  <IoCheckmarkDoneOutline
                    size={20}
                    className="dark:text-white"
                  />
                  <h1 className="dark:text-white font-medium  text-xs">
                    {" "}
                    {question}{" "}
                  </h1>{" "}
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-neutral-950 dark:border-neutral-700  flex justify-between items-center border border-neutral-600  rounded-xl ">
            <div className="inline-flex items-center gap-4">
              <HiCheckCircle color={"green"} size={40} />
              <p className="w-80 font-medium text-sm">
                By Continuing you agree to the privacy policy and terms and
                conditions
              </p>
            </div>

            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent dark:text-black bg-orange-500 text-white dark:bg-blue-100 hover:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600"
            >
              <IoChatbubbleEllipsesSharp size={"22"} />
              Start New Conversation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
