import {useEffect, useState} from "react";
import {marked} from "marked";

const markdownFilePath = "/docs/user-page/1.your-first-component.md";

export default function MarkdownViewer() {
    const [markdownContent, setMarkdownContent] = useState('');
    useEffect(() => {
        fetch(markdownFilePath)
            .then(response => response.text())
            .then(data => {
                // 使用marked将Markdown转换为HTML
                const htmlContent = marked(data);
                setMarkdownContent(htmlContent);
            })
            .catch(error => {
                console.error('Error fetching markdown file:', error);
            });
    }, []);
    return (
        <>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                {markdownContent && <div dangerouslySetInnerHTML={{__html: markdownContent}}/>}
            </div>
        </>
    )
}