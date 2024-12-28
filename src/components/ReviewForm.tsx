import {
  BsFillEmojiHeartEyesFill,
  BsEmojiSmileFill,
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
} from "react-icons/bs";

type ReviewProps = {
  data: {
      review: string,
      comment: string,
  };
  updateFieldHandle: (key: string, value: string) => void;
};

import './ReviewForm.css';

const ReviewForm = ({data, updateFieldHandle}: ReviewProps) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            required
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandle("review", e.target.value)}
          />
          <BsEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            required
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandle("review", e.target.value)}
          />
          <BsEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            required
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandle("review", e.target.value)}
          />
          <BsEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            required
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandle("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="  Conte como foi sua experiência com o produto..."
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandle("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm