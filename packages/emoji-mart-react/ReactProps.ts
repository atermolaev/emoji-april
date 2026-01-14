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