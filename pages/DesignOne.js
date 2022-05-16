import css from '../styles/SiteOne.module.css'
import SiteNav from "../components/SiteNav/SiteNav"
import Hero from "../components/hero"
import logo from '../public/images/icon.jpg'
import Feature from '../components/feature'
import WideFeature from '../components/wideFeature'
import { content } from '../configuration/content'

function Site() {

    return (
        <div>
            <SiteNav config={content.nav} logo={logo.src} />
            {/* <SiteNav logo={logo} title='photo' navItems={content.sections} buttons={content.nav.buttons} /> */}
            <Hero content={content.hero} />
            <div className={css.content}>
                <a name='features' />
                <div className={css.headline}>{content.featured.title}</div>
                <div className={css.features}>
                    {content.featured.features.map( (feature,index) => (
                        <Feature key={index} heading={feature.title} detail={feature.detail} />
                    ))}
                </div>
                <div className={css.widefeatures}>
                    {content.featured.wideFeatures.map( (feature,index) => (
                        <WideFeature key={index} content={feature} />
                    ))}
                </div>
                {/* <a name='contact' />
                <div style={justify: 'center'}>
                    <p>
                        123 Lorem Ipsum
                        Somewhere, USA 99999
                    </p>

                    <img width="600" src="https://static-maps.yandex.ru/1.x/?lang=en-US&ll=-118.475076,34.200977&z=13&l=map&size=600,450&pt=-118.475076,34.200977,flag" alt="Yandex Map of -118.475076,34.200977" />
                </div> */}
            </div>
        </div>
    )
}

export default Site