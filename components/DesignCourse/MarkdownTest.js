import styled from "styled-components"
import ReactMarkdown from "react-markdown"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const MarkdownDiv = styled.div`
    text-align: start;
    width: 500px;
    padding-top: 100px;
    h1 {
        text-align: center;
        font-family: 'Righteous';
        font-size: 1.5rem;
        font-weight: 600;
    }
`

// Clean up indents so markdown works
const MyMarkdown = (props) => {
    const mds = props.children.split('\n').map(l => l.trim()).join('\n')
    return <ReactMarkdown>{mds}</ReactMarkdown>
}

const MarkdownTest = () => {
  const codeString =
`import ReactMarkdown from "react-markdown"

const AComponent = (props) => {
    const {children} = props
    
    return <ReactMarkdown>{children}</ReactMarkdown>
}`
    const css = `.headline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #0f0;
}
`
const md = `# Here is some JavaScript code
`
    return  <MarkdownDiv>
        <ReactMarkdown>{md}</ReactMarkdown>
        <SyntaxHighlighter language="javascript" style={tomorrowNight}>
            {codeString}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="css" style={tomorrowNight}>
            {css}
        </SyntaxHighlighter>

    </MarkdownDiv>
};

export default MarkdownTest