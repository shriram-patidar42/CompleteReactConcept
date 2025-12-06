import styles from './Netflix.module.css';

const SeriesCard = (props) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    props.data;

const ratingClass = rating >=8.5 ? styles.super_hit :styles.average;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: "var(--btn-hover-bg-color)",
    color: "var(--bg-color)",
  };
  return (
    <li className={styles.card}>
      <div>
        <div>
          <img src={img_url} alt={name} height="40%" width="40%" />
        </div>

        <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
          <h2>Name : {name}</h2>
          <p>Rating : <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></p>
          <p className="text-3xl font-bold underline text-cyan-300"> Summary : {description}</p>
          <p> Genre : {genre}</p>
          <p> Cast : {cast}</p>

          <a href={watch_url} target="_blank">
            <button style={btn_style}>Watch Now</button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default SeriesCard;
