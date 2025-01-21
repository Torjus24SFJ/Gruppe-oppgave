import style from "./MatKort.module.css";

export function MatKort() {
  return (
    <>
      <section className={style["recipe_page_section"]}>
        <div className={style.container}>
          <div className={style.recipe_page_content}>
            <img src="./src/assets/images/MatKort/image-omelette.jpeg" alt="" />
            <h1 className={style.recipe_page_content_h1}>
              Simple Omelette Recipe
            </h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className={style.prep_container}>
              <h3>Preparation time</h3>
              <ul>
                <li>
                  <span className={style.boldText}>Total:</span> Approximately
                  10 minutes
                </li>
                <li>
                  <span className={style.boldText}>Preparation:</span> 5 minutes
                </li>
                <li>
                  <span className={style.boldText}>Cooking:</span> 5 minutes
                </li>
              </ul>
            </div>
            <div className={style.ingredients_container}>
              <h2>Ingredients</h2>
              <ul>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </li>
              </ul>
            </div>
            <hr className={style.separator} />
            <div className={style.instructions_container}>
              <h2>Instructions</h2>
              <ul>
                <li>
                  <span>Beat the eggs:</span>
                </li>
                <li>
                  <span>Heat the pan:</span>
                </li>
                <li>
                  <span>Cook the omelette:</span>
                </li>
                <li>
                  <span>Add fillings(optional)</span>
                </li>
                <li>
                  <span>Fold and serve:</span>
                </li>
                <li>
                  <span>Enjoy:</span>
                </li>
              </ul>
            </div>
            <hr className={style.separator} />
            <div className="nutrition_container">
              <h2>Nutrition</h2>
              <div className={style.table}>
                <p>Calories</p>
                <hr className={style.separator} />
                <p>Carbs</p>
                <hr className={style.separator} />
                <p>Protein</p>
                <hr className={style.separator} />
                <p>Fat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
