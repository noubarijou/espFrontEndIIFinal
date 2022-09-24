import * as S from ".././styled"
import { ModalProps } from "./types"

export function RegularModal({setModal, close, image, title, description}: ModalProps) {
    return (
        <S.ContainerModal>
            <S.CardModal>
                <S.CloseButton onClick={setModal}>
                    <img src={close} alt="close-button" />
                </S.CloseButton>
                <S.ImageModal src={image} alt="news-image" />
                <S.ContainerTexto>
                    <S.TituloModal>{title}</S.TituloModal>
                    <S.DescriptionModal>{description}</S.DescriptionModal>
                </S.ContainerTexto>
            </S.CardModal>
        </S.ContainerModal>
    )
}