import { Swiper, SwiperSlide } from "swiper/react";
import Featured from "../featured/Featured";
import axios from "axios";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=dfb83a503ccee16b00464b65bc3ac410&language=en-US&page=1"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const results = data.results;
  const dataWithNewIDs = results.map((item, index) => {
    return {
      id: index + 1,
      ...item,
    };
  });
  const first10 = dataWithNewIDs.slice(0, 10);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {first10.map((item) => (
          <SwiperSlide key={item.id}>
            <Featured item={item} backdrop={item.backdrop_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
