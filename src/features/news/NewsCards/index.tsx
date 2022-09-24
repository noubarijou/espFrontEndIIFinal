import * as S from ".././styled"
import { NewsCardsProps } from "./types"

export function NewsCards({ image, title, date, shortDescription, setModal }: NewsCardsProps) {
    return (
        <S.CardNoticia>
            <S.ImageCardNoticia src={image} />
            <S.TituloCardNoticia>{title}</S.TituloCardNoticia>
            <S.DateCardNoticia>{date}</S.DateCardNoticia>
            <S.DescriptionCardNoticia>
                {shortDescription}
            </S.DescriptionCardNoticia>
            <S.BotaoLeitura onClick={setModal}>Ver mais</S.BotaoLeitura>
        </S.CardNoticia>
    )
}