import styles from "./styles.module.scss";
import { FaPlay } from "react-icons/fa";

const VideoTemplate = () => {
  return (
    <div className={styles.videoTemplate}>
      <div className={styles.playButton}>
        <FaPlay color="#696969" />
      </div>
      <span>vídeo ainda não disponível</span>
    </div>
  );
};

export default VideoTemplate;