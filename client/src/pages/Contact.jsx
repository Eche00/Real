import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="my-10 flex flex-col gap-1">
      {landlord && (
        <div>
          <p className=" text-2xl text-gray-600 text-[20px]">
            <span className="  font-semibold text-black">Contact -</span>{" "}
            <span className="  font-bold">{landlord.username}</span> -{" "}
            <span className=" text-xl">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            className=" rounded-md border border-blue-500 border-solid p-2 w-[100%] shadow-md shadow-gray-400 outline-none mx-auto"
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Message"></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            type="button"
            className=" w-full  text-2xl  py-2 px-5 rounded-md  shadow-md shadow-gray-600  text-white bg-blue-500 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center  text-center">
            send message
          </Link>
        </div>
      )}
    </div>
  );
}

export default Contact;
