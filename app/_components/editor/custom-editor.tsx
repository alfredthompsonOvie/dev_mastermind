
"use client"
import React, { useEffect, useRef } from 'react'

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import Quill from 'quill';
import "quill/dist/quill.snow.css";

export default function CustomEditor() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => { 

    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                                         // remove formatting button
    ];
    const options3 = {

      modules: {
        toolbar: toolbarOptions
      },
      placeholder: 'Compose an epic blog...',
      theme: 'snow'
    };




    if (container.current) {
      const quill = new Quill(container.current, options3); 
      // const quill = new Quill(container.current); 
      const delta = quill.getContents();
      console.log("delta", delta)
    }
  }, [])
  
  // useEffect(() => {
  //   if (container.current?.firstChild) {
  //     const children = Array.from(
  //       container.current.firstChild.childNodes
  //     ) as HTMLElement[];

  //     console.log(children);

  //     const duplicateTooltips = children.filter((el) => {
  //       return el.classList.contains('ql-toolbar');
  //     });
  //     if (duplicateTooltips.length > 1) {
  //       duplicateTooltips[0].remove();
  //     }
  //   }
  // }, [container]);


  return (

    <div ref={container}></div>
  )
}
