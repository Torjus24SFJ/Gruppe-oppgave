import style from "./NFTKort.module.css";

export function NFTKort() {
  return (
    <>
      <section className={style.nft_card_section}>
        <div className={style.card_container}>
          <div>
            <img className={style.main_image} src="/src/assets/images/NFTKort/image-equilibrium.jpg" alt="" />
          </div>
          <div>
            <h1>Equilibrium</h1>
            <h3>Our Equilibrium collection promotes balance and calm</h3>
          </div>
          <div className={style.etherium}>
            <img src="/src/assets/images/NFTKort/icon-ethereum.svg" alt="" /><span>0.041 ETH</span><img src="/src/assets/images/NFTKort/icon-clock.svg" alt="" /><span>3 days left</span>
          </div>
        </div>
      </section>
    </>
  );
}
