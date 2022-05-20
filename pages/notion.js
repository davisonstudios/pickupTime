import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'

const notion = new NotionAPI()
const testPages = [
    '067dd719a912471ea9a3ac10710e7fdf',
    '3492bd6dbaf44fe7a5cac62c5d402f06',
    '738629c73d3545d9aed5d8bc2d7a1088',
    '6803cd7830bb4f638ccc5c1156f07bfa',
    '7dd56fbff015445596f609a70582ddf7',
]

export async function getStaticProps() {
    const recordMap = await notion.getPage(testPages[0])
    return {
        props: {page: recordMap}
    }
}

const NotionPage = (props) => {
    console.log( props.page )
    return (
        <NotionRenderer recordMap={props.page} fullPage={true} darkMode={false} />
    )
}

export default NotionPage

