import css from '../styles/WideFeature.module.css'
import Image from 'next/image'

function WideFeature(props) {
    const {imageUrl, title, detail, imageOnRight} = props.content

    return (
        <div className={imageOnRight ? css.content_imageright : css.content}>
            <div className={`${css.image} ${imageOnRight ? css.imageright : css.imageleft}`}>
                <Image src={imageUrl} objectFit="cover" objectPosition="50% 50%" layout="fill" alt='' />
            </div>
            <div className={imageOnRight ? css.detailsleft : css.details}>
                <div className={css.heading}>
                    <div>{title}</div>
                </div>
                <div className={css.detail}>
                    <div>{detail}</div>
                </div>
            </div>
       </div>
    )
}

export default WideFeature