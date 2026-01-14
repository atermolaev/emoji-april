export interface EmojiPickerProps {
  autoFocus: {
    value: boolean,
  };
  dynamicWidth: {
    value: boolean,
  };
  emojiButtonColors: {
    value: string | null,
  };
  emojiButtonRadius: {
    value: string | null;
  };
  emojiButtonSize: {
    value: number,
  };
  emojiSize: {
    value: number,
  };
  emojiVersion: {
    value: number,
    choices: number[],
  };
  exceptEmojis: {
    value: string[],
  },
  icons: {
    value: string,
    choices: string[],
  },
  locale: {
    value: string,
    choices: string[],
  },
  maxFrequentRows: {
    value: number,
  },
  navPosition: {
    value: string,
    choices: string[],
  },
  noCountryFlags: {
    value: boolean,
  },
  noResultsEmoji: {
    value: boolean | null,
  },
  perLine: {
    value: number,
  },
  previewEmoji: {
    value: string | null,
  },
  previewPosition: {
    value: string,
    choices: string[],
  },
  searchPosition: {
    value: string,
    choices: string[],
  },
  set: {
    value: string,
    choices: string[],
  },
  skin: {
    value: number,
    choices: number [],
  },
  skinTonePosition: {
    value: string,
    choices: string[],
  },
  theme: {
    value: string,
    choices: string[],
  },

  // TODO: проверить типизацию и описать ее
  // Data
  // categories: null,
  // categoryIcons: null,
  // custom: null,
  // data: null,
  // i18n: null,

  // Callbacks
  // getImageURL: null,
  // getSpritesheetURL: null,
  // onAddCustomEmoji: null,
  // onClickOutside: null,
  // onEmojiSelect: null,

  // Deprecated
  // stickySearch: {
  //   deprecated: true,
  //   value: true,
  // },
}

// Дефолтные пропсы с которых бралась типизация. 
// Можно использовать как пример для дальнейшего тюнинга.
// export default {
//   autoFocus: {
//     value: false,
//   },
//   dynamicWidth: {
//     value: false,
//   },
//   emojiButtonColors: {
//     value: null,
//   },
//   emojiButtonRadius: {
//     value: '100%',
//   },
//   emojiButtonSize: {
//     value: 36,
//   },
//   emojiSize: {
//     value: 24,
//   },
//   emojiVersion: {
//     value: 15,
//     choices: [1, 2, 3, 4, 5, 11, 12, 12.1, 13, 13.1, 14, 15],
//   },
//   exceptEmojis: {
//     value: [],
//   },
//   icons: {
//     value: 'auto',
//     choices: ['auto', 'outline', 'solid'],
//   },
//   locale: {
//     value: 'en',
//     choices: [
//       'en',
//       'ar',
//       'be',
//       'cs',
//       'de',
//       'es',
//       'fa',
//       'fi',
//       'fr',
//       'hi',
//       'it',
//       'ja',
//       'ko',
//       'nl',
//       'pl',
//       'pt',
//       'ru',
//       'sa',
//       'tr',
//       'uk',
//       'vi',
//       'zh',
//     ],
//   },
//   maxFrequentRows: {
//     value: 4,
//   },
//   navPosition: {
//     value: 'top',
//     choices: ['top', 'bottom', 'none'],
//   },
//   noCountryFlags: {
//     value: false,
//   },
//   noResultsEmoji: {
//     value: null,
//   },
//   perLine: {
//     value: 9,
//   },
//   previewEmoji: {
//     value: null,
//   },
//   previewPosition: {
//     value: 'bottom',
//     choices: ['top', 'bottom', 'none'],
//   },
//   searchPosition: {
//     value: 'sticky',
//     choices: ['sticky', 'static', 'none'],
//   },
//   set: {
//     value: 'native',
//     choices: ['native', 'apple', 'facebook', 'google', 'twitter'],
//   },
//   skin: {
//     value: 1,
//     choices: [1, 2, 3, 4, 5, 6],
//   },
//   skinTonePosition: {
//     value: 'preview',
//     choices: ['preview', 'search', 'none'],
//   },
//   theme: {
//     value: 'auto',
//     choices: ['auto', 'light', 'dark'],
//   },

//   // Data
//   categories: null,
//   categoryIcons: null,
//   custom: null,
//   data: null,
//   i18n: null,

//   // Callbacks
//   getImageURL: null,
//   getSpritesheetURL: null,
//   onAddCustomEmoji: null,
//   onClickOutside: null,
//   onEmojiSelect: null,

//   // Deprecated
//   stickySearch: {
//     deprecated: true,
//     value: true,
//   },
// }
