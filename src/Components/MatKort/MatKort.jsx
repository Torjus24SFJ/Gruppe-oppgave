import style from "./MatKort.module.css";

export function MatKort() {
  return (
    <>
      <div className={`${style.container}`}>
        <section className="recipe-page-section">
          <div className="recipe-page-content">
            <img src="./src/assets/images/MatKort/image-omelette.jpeg" alt="" />
          </div>
        </section>
      </div>
    </>
  );
}
