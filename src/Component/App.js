import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import Header from "./Header";
import LocalStorage from "./Hooks/LocalStorage";


function App() {
   const [html,setHtml]=LocalStorage('html','');
   const [css,setCss]=LocalStorage('css','');
   const [js,setJS]=LocalStorage('js','');
   const [srcDocs,setSrcdocs]=useState('');

   useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcdocs(
      `<html>
     <body>${html}</body>
     <style>${css}</style>
     <script>${js}</script>
     `)
    },250);
    return ()=>clearTimeout(timeout)
   },[html,css,js]);

  return (
    <>
    <Header
    value={html}
    onChangeHtml={setHtml}
    onChangeCss={setCss}
    onChangeJs={setJS}
/>
      <div className="pane top-pane">
        <Editor
          icon="fab fa-html5"
          language="html"
          displayName="HTML"
          value={html}
          onChange={setHtml}
          />
        <Editor
        icon="fab fa-css3-alt"
         language="css"
         displayName="CSS"
         value={css}
         onChange={setCss}
         />
        <Editor
        icon="fab fa-js"
         language="javascript"
         displayName="JS"
         value={js}
         onChange={setJS}
         />
      </div>
      <div className="pane">
        <iframe
        srcDoc={srcDocs}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        />
      </div>
    </>
  );
}

export default App;
