import styles from "./styles.module.scss";
import { LuImage } from "react-icons/lu";

const ImageTemplate = () => {
  return (
    <div className={styles.imageTemplate}>
      <LuImage opacity={0.4} />
    </div>
  );
};

export default ImageTemplate;
