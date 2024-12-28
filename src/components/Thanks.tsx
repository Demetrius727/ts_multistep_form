import {
  BsFillEmojiHeartEyesFill,
  BsEmojiSmileFill,
  BsEmojiNeutralFill,
  BsEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";
import { ReactElement } from "react";

type ThanksProps = {
  data: {
      name: string,
      email: string,
      review: string,
      comment: string,
  };
};

type EmojiObject = {
  unsatisfied: ReactElement,
  neutral: ReactElement,
  satisfied: ReactElement,
  very_satisfied: ReactElement,
}

const emojiData: EmojiObject = {
  unsatisfied: <BsEmojiFrownFill />,
  neutral: <BsEmojiNeutralFill />,
  satisfied: <BsEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }: ThanksProps) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco, {data.name}...</h2>
      <h3>Aqui está um resumo da sua avaliação: </h3>
      <p className="review-data">
        <span>Satisfação: </span>
        {emojiData[data.review as keyof typeof emojiData]}
      </p>
      <p className="review-data">
        <span>Comentário: </span>
        {data.comment}
      </p>
      <p>
        A sua opinião é muito importante! Em breve você receberá um cupom de
        desconto para sua próxima compra neste email: <strong>{data.email}</strong>
      </p>
      <p>Para concluir sua avaliação, clique no botão enviar abaixo.</p>
    </div>
  );
};

export default Thanks;
