import React, { useEffect, useRef } from 'react';
import { Picker } from 'emoji-mart/src/index';
import { EmojiPickerProps } from './ReactProps';

export default function EmojiPicker(props: EmojiPickerProps) {
  const ref = useRef(null)
  const instance = useRef(null)

  if (instance.current) {
    instance.current.update(props)
  }

  useEffect(() => {
    instance.current = new Picker({ ...props, ref })

    return () => {
      instance.current = null
    }
  }, [])

  return React.createElement('div', { ref })
}
