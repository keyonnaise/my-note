import { globalStyle } from "@vanilla-extract/css";
import * as layers from "./layers.css";

/**
 * 1. 요소 너비에 padding과 border가 영향을 주지 않도록 합니다. (https://github.com/mozdevs/cssremedy/issues/4)
 * 2. 기본 마진과 패딩을 제거합니다.
 * 3. 모든 테두리를 초기화합니다.
 */
globalStyle("*,::after, ::before, ::backdrop, ::file-selector-button", {
  "@layer": {
    [layers.base]: {
      boxSizing: "border-box", // 1
      margin: 0, // 2
      padding: 0, // 2
      border: "0 solid", // 3
    },
  },
});

/**
 * 1. 모든 브라우저에서 일관된 적절한 줄 높이를 사용합니다.
 * 2. iOS에서 방향 변경 후 글꼴 크기 조정을 방지합니다.
 * 3. 더 읽기 쉬운 탭 크기를 사용합니다.
 * 4. 기본적으로 사용자가 설정한 'sans' 글꼴 패밀리를 사용합니다.
 * 5. 기본적으로 사용자가 설정한 'sans' 글꼴 기능 설정을 사용합니다.
 * 6. 기본적으로 사용자가 설정한 'sans' 글꼴 변형 설정을 사용합니다.
 * 7. iOS에서 탭 하이라이트를 비활성화합니다.
 */
globalStyle("html, :host", {
  "@layer": {
    [layers.base]: {
      lineHeight: 1.5, // 1
      WebkitTextSizeAdjust: "100%", // 2
      tabSize: 4, // 3
      fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'", // 4
      fontFeatureSettings: "normal", // 5
      fontVariationSettings: "normal", // 6
      WebkitTapHighlightColor: "transparent", // 7
    },
  },
});

/**
 * 사용자가 'html' 요소에 직접 클래스로 설정할 수 있도록 'html'에서 line-height를 상속받습니다.
 */
globalStyle("body", {
  "@layer": {
    [layers.base]: {
      lineHeight: "inherit",
    },
  },
});

/**
 * 1. Firefox에서 올바른 높이를 추가합니다.
 * 2. Firefox에서 테두리 색상 상속을 수정합니다. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
 * 3. 기본 테두리 스타일을 1px 실선 테두리로 재설정합니다.
 */
globalStyle("hr", {
  "@layer": {
    [layers.base]: {
      height: 0, // 1
      color: "inherit", // 2
      borderTopWidth: "1px", // 3
    },
  },
});

/**
 * Chrome, Edge 및 Safari에서 올바른 텍스트 장식을 추가합니다.
 */
globalStyle("abbr:where([title])", {
  "@layer": {
    [layers.base]: {
      WebkitTextDecorationLine: "underline dotted",
      textDecoration: "underline dotted",
    },
  },
});

/**
 * 제목에 대한 기본 글꼴 크기와 가중치를 제거합니다.
 */
globalStyle("h1, h2, h3, h4, h5, h6", {
  "@layer": {
    [layers.base]: {
      fontSize: "inherit",
      fontWeight: "inherit",
    },
  },
});

/**
 * 옵트아웃 대신 옵트인 스타일링을 위해 링크를 재설정합니다.
 */
globalStyle("a", {
  "@layer": {
    [layers.base]: {
      color: "inherit",
      WebkitTextDecorationLine: "inherit",
      textDecoration: "inherit",
    },
  },
});

/**
 * Edge 및 Safari에서 올바른 글꼴 가중치를 추가합니다.
 */
globalStyle("b, strong", {
  "@layer": {
    [layers.base]: {
      fontWeight: "bolder",
    },
  },
});

/**
 * 1. 기본적으로 사용자가 설정한 'mono' 글꼴 패밀리를 사용합니다.
 * 2. 기본적으로 사용자가 설정한 'mono' 글꼴 기능 설정을 사용합니다.
 * 3. 기본적으로 사용자가 설정한 'mono' 글꼴 변형 설정을 사용합니다.
 * 4. 모든 브라우저에서 이상한 'em' 글꼴 크기 조정을 수정합니다.
 */
globalStyle("code, kbd, samp, pre", {
  "@layer": {
    [layers.base]: {
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace", // 1
      fontFeatureSettings: "normal", // 2
      fontVariationSettings: "normal", // 3
      fontSize: "1em", // 4
    },
  },
});

/**
 * 모든 브라우저에서 올바른 글꼴 크기를 추가합니다.
 */
globalStyle("small", {
  "@layer": {
    [layers.base]: {
      fontSize: "80%",
    },
  },
});

/**
 * 모든 브라우저에서 'sub'와 'sup' 요소가 줄 높이에 영향을 주지 않도록 방지합니다.
 */
globalStyle("sub, sup", {
  "@layer": {
    [layers.base]: {
      fontSize: "75%",
      lineHeight: 0,
      position: "relative",
      verticalAlign: "baseline",
    },
  },
});

globalStyle("sub", {
  "@layer": {
    [layers.base]: {
      bottom: "-0.25em",
    },
  },
});

globalStyle("sup", {
  "@layer": {
    [layers.base]: {
      top: "-0.5em",
    },
  },
});

/**
 * 1. Chrome 및 Safari에서 테이블 콘텐츠의 텍스트 들여쓰기를 제거합니다. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
 * 2. 모든 Chrome 및 Safari에서 테이블 테두리 색상 상속을 수정합니다. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
 * 3. 기본적으로 테이블 테두리 사이의 간격을 제거합니다.
 */
globalStyle("table", {
  "@layer": {
    [layers.base]: {
      textIndent: 0, // 1
      borderColor: "inherit", // 2
      borderCollapse: "collapse", // 3
    },
  },
});

/**
 * 모든 포커스 가능한 요소에 대해 최신 Firefox 포커스 스타일을 사용합니다.
 */
globalStyle(":-moz-focusring", {
  "@layer": {
    [layers.base]: {
      outline: "auto",
    },
  },
});

/**
 * Chrome 및 Firefox에서 올바른 수직 정렬을 추가합니다.
 */
globalStyle("progress", {
  "@layer": {
    [layers.base]: {
      verticalAlign: "baseline",
    },
  },
});

/**
 * Chrome 및 Safari에서 올바른 표시를 추가합니다.
 */
globalStyle("summary", {
  "@layer": {
    [layers.base]: {
      display: "list-item",
    },
  },
});

/**
 * 기본적으로 목록에 스타일을 적용하지 않습니다.
 */
globalStyle("ol, ul, menu", {
  "@layer": {
    [layers.base]: {
      listStyle: "none",
    },
  },
});

/**
 * 1. 기본적으로 대체 요소를 'display: block'으로 만듭니다. (https://github.com/mozdevs/cssremedy/issues/14)
 * 2. 기본적으로 대체 요소를 보다 합리적으로 정렬하기 위해 'vertical-align: middle'을 추가합니다. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
 *    이는 일부 도구에서 잘못 고려된 린트 오류를 트리거할 수 있지만 의도적으로 포함되어 있습니다.
 */
globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  "@layer": {
    [layers.base]: {
      display: "block", // 1
      verticalAlign: "middle", // 2
    },
  },
});

/**
 * 부모 너비로 이미지와 비디오를 제한하고 본질적인 종횡비를 유지합니다. (https://github.com/mozdevs/cssremedy/issues/14)
 */
globalStyle("img, video", {
  "@layer": {
    [layers.base]: {
      maxWidth: "100%",
      height: "auto",
    },
  },
});

/**
 * 1. 모든 브라우저에서 글꼴 스타일을 상속합니다.
 * 2. 모든 브라우저에서 테두리 반경을 제거합니다.
 * 3. 모든 브라우저에서 배경색을 제거합니다.
 * 4. 모든 브라우저에서 비활성화된 상태에 대해 일관된 불투명도를 보장합니다.
 */
globalStyle("button, input, select, optgroup, textarea, ::file-selector-button", {
  "@layer": {
    [layers.base]: {
      font: "inherit", // 1
      fontFeatureSettings: "inherit", // 1
      fontVariationSettings: "inherit", // 1
      letterSpacing: "inherit", // 1
      color: "inherit", // 1
      borderRadius: 0, // 2
      backgroundColor: "transparent", // 3
      opacity: 1, // 4
    },
  },
});

/**
 * 기본 글꼴 가중치를 복원합니다.
 */
globalStyle(":where(select:is([multiple], [size])) optgroup", {
  "@layer": {
    [layers.base]: {
      fontWeight: "bolder",
    },
  },
});

/**
 * 들여쓰기를 복원합니다.
 */
globalStyle(":where(select:is([multiple], [size])) optgroup option", {
  "@layer": {
    [layers.base]: {
      paddingInlineStart: "20px",
    },
  },
});

/**
 * 버튼 후 공간을 복원합니다.
 */
globalStyle("::file-selector-button", {
  "@layer": {
    [layers.base]: {
      marginInlineEnd: "4px",
    },
  },
});

/**
 * 1. Firefox에서 기본 플레이스홀더 불투명도를 재설정합니다. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
 * 2. 기본 플레이스홀더 색상을 현재 텍스트 색상의 반투명 버전으로 설정합니다.
 */
globalStyle("::placeholder", {
  "@layer": {
    [layers.base]: {
      opacity: 1, // 1
      color: "color-mix(in srgb, currentColor 50%, transparent)", // 2
    },
  },
});

/**
 * 기본적으로 텍스트 영역의 수평 크기 조정을 방지합니다.
 */
globalStyle("textarea", {
  "@layer": {
    [layers.base]: {
      resize: "vertical",
    },
  },
});

/**
 * macOS의 Chrome 및 Safari에서 내부 패딩을 제거합니다.
 */
globalStyle("::-webkit-search-decoration", {
  "@layer": {
    [layers.base]: {
      WebkitAppearance: "none",
    },
  },
});

/**
 * 1. iOS Safari에서 비어 있을 때 날짜/시간 입력이 동일한 높이를 갖도록 합니다.
 * 2. iOS Safari에서 날짜/시간 입력에서 텍스트 정렬을 변경할 수 있도록 합니다.
 */
globalStyle("::-webkit-date-and-time-value", {
  "@layer": {
    [layers.base]: {
      minHeight: "1lh", // 1
      textAlign: "inherit", // 2
    },
  },
});

/**
 * 입력이 'display: block'으로 설정된 경우 macOS Safari에서 날짜/시간 입력의 높이가 변경되는 것을 방지합니다.
 */
globalStyle("::-webkit-datetime-edit", {
  "@layer": {
    [layers.base]: {
      display: "inline-flex",
    },
  },
});

/**
 * 브라우저 간 일관된 높이를 보장하기 위해 날짜/시간 입력의 유사 요소에서 과도한 패딩을 제거합니다.
 */
globalStyle("::-webkit-datetime-edit-fields-wrapper", {
  "@layer": {
    [layers.base]: {
      padding: 0,
    },
  },
});

/**
 * 브라우저 간 일관된 높이를 보장하기 위해 날짜/시간 입력 필드의 유사 요소에서 과도한 패딩을 제거합니다.
 */
globalStyle("::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field", {
  "@layer": {
    [layers.base]: {
      paddingBlock: 0,
    },
  },
});

/**
 * Firefox에서 추가적인 ':invalid' 스타일을 제거합니다. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
 */
globalStyle(":-moz-ui-invalid", {
  "@layer": {
    [layers.base]: {
      boxShadow: "none",
    },
  },
});

/**
 * iOS Safari에서 테두리 반경 스타일을 지정할 수 없는 문제를 수정합니다.
 */
globalStyle("button, input:where([type='button'], [type='reset'], [type='submit']), ::file-selector-button", {
  "@layer": {
    [layers.base]: {
      appearance: "button",
    },
  },
});

/**
 * Safari에서 증가 및 감소 버튼의 커서 스타일을 수정합니다.
 */
globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  "@layer": {
    [layers.base]: {
      height: "auto",
    },
  },
});

/**
 * HTML hidden 속성이 있는 요소를 기본적으로 숨겨진 상태로 유지합니다.
 */
globalStyle("[hidden]:where(:not([hidden='until-found']))", {
  "@layer": {
    [layers.base]: {
      display: "none !important",
    },
  },
});
