import style from "./BlogPreview.module.css"

export function BlogPreview() {

    const cardInfo = {
        "published": "21 Dec 2023",
        "title": "HTML & CSS foundations",
        "content": "These languanges are the backbone of every website, defining structure, content, and presentation.",
        "author": "Greg Hooper"
    }

    return (
        <>
        <div className={style.page}>
            <div className={style.card_content}>
                <div className={style.head}><img className={style.head_img} src="./src/Components/BlogPreview/assets/illustration-article.svg" alt="" /></div> 
                <div className={style.placeholder}>
                    <h3 className={style.category}>Learning</h3>
                    <p className={style.published}>Published {cardInfo.published}</p>
                    <h3 className={style.title_text}>{cardInfo.title}</h3>
                    <p className={style.card_paragraph}>{cardInfo.content}</p>
                    <div className={style.content_person}><img className={style.person} src="./src/Components/BlogPreview/assets/image-avatar.webp" alt="" />
                    <p className={style.author}>{cardInfo.author}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}