import { useRef, SyntheticEvent } from "react";
import emailjs from "@emailjs/browser";
import { SiMinutemailer } from "react-icons/si";

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_l9397b6",
          "template_njg5ikd",
          form.current,
          "5AFXd7btz1LeSj7cP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div id="contact" className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl text-gray-300 font-semibold mb-5  text-center">
        Contact Us
      </h2>
      <form
        className="flex flex-col w-full max-w-[450px] text-gray-300 p-2"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-1 justify-between mb-2">
          <label>Name</label>
          <input
            className="bg-white/10 px-4 py-2 rounded-md"
            type="text"
            name="user_name"
          />
        </div>
        <div className="flex flex-col gap-1 justify-between mb-2">
          <label>Email</label>
          <input
            className="bg-white/10 px-4 py-2 rounded-md"
            type="email"
            name="user_email"
          />
        </div>
        <div className="flex flex-col gap-1 justify-between mb-2">
          <label>Message</label>
          <textarea
            className="bg-white/10 px-4 py-2 rounded-md"
            name="message"
          />
        </div>
        <button
          className="w-full mt-4 flex justify-center items-center gap-1 border border-gray-400 px-4 py-3 rounded-md text-sm hover:bg-white/5 hover:gap-2.5 ease-in-out duration-300"
          type="submit"
          value="Send"
        >
          <p>Send</p>
          <SiMinutemailer />
        </button>
      </form>
    </div>
  );
};
