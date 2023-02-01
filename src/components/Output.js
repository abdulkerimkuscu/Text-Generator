import React from 'react'

function Output({paragraphs, tags, includeHtml}) {
  return (
   <div className="outputContainer">
     <div className='output'>
        {includeHtml === "Yes" ? (
            <p>{paragraphs.map(paragraph => ( `<${tags}>${paragraph}</${tags}>`))}</p>
        ): (
            <p>{paragraphs.map(paragraph => paragraph)}</p>
        )}
    </div>
   </div>
  )
}

export default Output