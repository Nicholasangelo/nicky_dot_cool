import { Card } from "../elements"
import styles from "./CardListStyles.module.css"

const CardList = ({ imageList }) => {
  return (
    <div className={styles.wrapper}>
      {imageList.map((item) => (
        <Card
          key={item.id || item.title}
          title={item.title}
          description={item.description}
          image={item.image}
          comicImages={item.comicImages || []}
        />
      ))}
    </div>
  )
}

export default CardList
