import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'


function TextEditor() {
  const [editor] = useState(() => withReact(createEditor()))

  type CustomElement = { type: 'paragraph'; children: CustomText[] }
  type CustomText = { text: string }
  
  declare module 'slate' {
    interface CustomTypes {
      Editor: BaseEditor & ReactEditor
      Element: CustomElement
      Text: CustomText
    }
  }

  return null

}

export default TextEditor