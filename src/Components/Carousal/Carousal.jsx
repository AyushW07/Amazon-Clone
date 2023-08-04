import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousal.module.css";

function Carousal() {
  const images = [
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/prime/AugART/Acq/updated_date_ho_2._CB599282273_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/SVD/Aug/Hero/PC_Hero_REC_3000x1200._CB599416221_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/Launches23/OnePlus/BulletsZ2ANC/Teaser/Aug/D89396927_GW_DesktopTallHero_3000x1200._CB599109953_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Jewellery/2023/Gateway/Aug/ATF/1st_Aug/RAKHI_PCV._CB599101972_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Hero_3000x12001._CB592142345_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/HipHopIndia/GW_Hero_PC/Season3_4/3000x1200_new._CB598815751_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/July/Bestselling_Tallhero_3000x1200._CB599101347_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M14/GW_July/19thJuly/D77911710_IN_WLME_SamsungM_M145G_Launch_tallhero_3000x1200._CB600059344_.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/71cmQ4-ezGL._SX3000_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/July/Apay/AF-PC-Rec-3000-Apay._CB600628836_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2023/GW/Gateway-Hero-PC._CB599126246_.jpg",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Flagship/GW/10R/D43000892_WLD_OnePlus_Pickle_NewLaunch_Tall_hero_3000x1200._CB599102327_.jpg",
    },
  ];

  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        className={styles.carousel}
      >
        {images.map((item, index) => (
          <div key={index}>
            <img src={item.image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carousal;
