import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { Done, Share } from "@mui/icons-material";

function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const params = useParams();
  useEffect(() => {
    const fetchingListing = async () => {
      try {
        setLoading(true);

        const listingId = params.listingId;
        const res = await fetch(`/api/listing/get/${listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);

          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchingListing();
  }, [params.listingId]);
  return (
    <main>
      {loading && (
        <h1 className=" w-fit  text-2xl  py-2 px-5 rounded-full mx-auto my-7 shadow-md shadow-gray-600  text-white bg-blue-500 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center ">
          Loading...
        </h1>
      )}
      {error && (
        <p className=" w-fit  text-2xl  py-2 px-5 rounded-full mx-auto my-7 shadow-md shadow-gray-600  text-white bg-red-600 hover:opacity-90 active:opacity-[50%] uppercase self-center object-center ">
          Something went wrong
        </p>
      )}

      {listing && !loading && !error && (
        <>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className=" h-[550px] "
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}></div>{" "}
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className=" fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}>
            {copied ? <Done /> : <Share />}
          </div>
        </>
      )}
    </main>
  );
}

export default Listing;
