import style from "./NFTKort.module.css";

export function NFTKort() {
  return (
    <>
      <section className={style.nft_card_section}>
        <div className={style.card_container}>
          <div>
            <img
              className={style.main_image}
              src="./src/Components/NFTKort/assets/image-equilibrium.jpg"
              alt=""
            />
          </div>
          <div className={style.etherium_h_container}>
            <h1>Equilibrium #3429</h1>
            <h3 className={style.etherium_h_3}>Our Equilibrium collection promotes balance and calm.</h3>
          </div>
          <div className={style.etherium}>
            <div className={style.etherium_icon_container}>
              <img
                className={style.etherium_icon}
                src="./src/Components/NFTKort/assets/icon-ethereum.svg"
                alt=""
              />
              <span className={style.cyan}>0.041 ETH</span>
            </div>
            <div className={style.etherium_icon_container}>
              <img
                className={style.clock_icon}
                src="./src/Components/NFTKort/assets/icon-clock.svg"
                alt=""
              />
              <span  className={style.gray}>3 days left</span>
            </div>
          </div>
          <span className={style.devider}></span>
          <div className={style.bottom_container}>
            <img className={style.image_icon} src="./src/Components/NFTKort/assets/image-avatar.png" alt="" />
            <p><span>Creation of </span>Jules Wyvern</p>
          </div>
        </div>
      </section>
    </>
  );
}
