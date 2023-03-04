import hr from "../assets/curve-hr.svg";

export default function Footer() {
  return (
    <div className="mt-4 bg-dark-200 rounded-md text-white px-8 py-4">
      <img
        src={hr}
        className="mb-4 mt-4 w-full md:h-1 text-white bottom-0"
        alt="hr"
      />
      <p className="text-sm font-light text-center">
        Handcrafted with 🤍 in Chicago . Powered by StudioPress
      </p>
      <p className="text-sm font-light text-center">
        Facebook Instagram Twitter
      </p>
    </div>
  );
}
