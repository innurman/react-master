(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{273:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[a("a",{attrs:{href:"#%EC%98%81%EC%83%81-%EA%B0%95%EC%9D%98"}},[s._v("영상 강의")]),s._v("를 시청하며 글을 읽고 실습하면 더욱 효과적입니다.")])]),s._v(" "),a("h1",{attrs:{id:"사용자-정의-테마"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용자-정의-테마"}},[s._v("#")]),s._v(" 사용자 정의 테마")]),s._v(" "),a("h2",{attrs:{id:"머리말"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#머리말"}},[s._v("#")]),s._v(" 머리말")]),s._v(" "),a("p",[s._v("Semantic UI React는 자체 스타일링 시스템이 없으며 Semantic UI 테마에 전적으로 의존합니다.\nSemantic UI 테마는 정말 강력합니다. 변수 값을 업데이트 하거나 미리 정의 된 테마의 스타일을 사용할 수 있는\nLESS 또는 CSS를 사전에 알 필요가 없습니다. Semantic UI의 테마 또는 스타일링에 대해 알고 있는 모든 것은\nSemantic UI React에 완벽 호환됩니다.")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://semantic-ui.com/usage/theming.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Semantic UI 테마 알아보기"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"http://learnsemantic.com/themes/creating.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Semantic UI 테마 만들기"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"시작하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시작하기"}},[s._v("#")]),s._v(" 시작하기")]),s._v(" "),a("p",[s._v("Semantic UI는 Gulp를 사용하고 준비된 CSS 파일을 생성하는 자체 빌드 시스템을 제공합니다.\nLESS 패키지는 Gulp에 의존하지 않습니다만, Webpack에 적합하지 않으므로 추가 구성이 필요합니다.")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Semantic-Org/Semantic-UI-LESS",target:"_blank",rel:"noopener noreferrer"}},[s._v("Semantic UI LESS"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/@marekurbanowicz/how-to-customize-fomantic-ui-with-less-and-webpack-applicable-to-semantic-ui-too-fbf98a74506c",target:"_blank",rel:"noopener noreferrer"}},[s._v("Semantic UI 테마용 Webpack 구성"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"cra-사용자-정의-테마"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cra-사용자-정의-테마"}},[s._v("#")]),s._v(" CRA 사용자 정의 테마")]),s._v(" "),a("p",[s._v("사용자 정의 테마 제작을 위한 Webpack 사용자 정의 구성을 위해 "),a("code",[s._v("eject")]),s._v(" 명령을 사용할 수 있지만, 꺼낸 결과물은 다시 되돌릴 수 없습니다! 🤔")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://medium.com/curated-by-versett/dont-eject-your-create-react-app-b123c5247741",target:"_blank",rel:"noopener noreferrer"}},[s._v("CRA의 "),a("code",[s._v("eject")]),s._v(" 명령을 사용하지 마세요!"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"_1-기존-semantic-ui-스타일-제거"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-기존-semantic-ui-스타일-제거"}},[s._v("#")]),s._v(" 1. 기존 Semantic UI 스타일 제거")]),s._v(" "),a("p",[s._v("우선, 스타일 중복을 피하기 위해 CDN에 포함 된 "),a("code",[s._v("semantic-ui")]),s._v(" 패키지, "),a("code",[s._v("semantic-ui-css")]),s._v(" 스타일 참조를 제거해야 합니다.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall semantic-ui semantic-ui-css\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-의존성-모듈-패키지-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-의존성-모듈-패키지-설치"}},[s._v("#")]),s._v(" 2. 의존성 모듈 패키지 설치")]),s._v(" "),a("p",[s._v("CRA는 기본적으로 LESS를 지원하지 않습니다. "),a("a",{attrs:{href:"https://www.npmjs.com/package/@craco/craco",target:"_blank",rel:"noopener noreferrer"}},[s._v("@craco/craco"),a("OutboundLink")],1),s._v("는\n"),a("code",[s._v("eject")]),s._v(" 명령을 사용하지 않고도 Webpack 설정을 사용자 정의할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @craco/craco @semantic-ui-react/craco-less semantic-ui-less -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("그런 다음 "),a("code",[s._v("craco.config.js")]),s._v(" 파일을 생성하고 다음과 같이 작성합니다.")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n      plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@semantic-ui-react/craco-less'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("이어서 "),a("code",[s._v("package.json")]),s._v(" 파일을 열어 다음과 같이 수정합니다.")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"craco start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"craco build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"craco test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"eject"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"craco eject"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_3-사용자-정의-테마-스캐폴딩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-사용자-정의-테마-스캐폴딩"}},[s._v("#")]),s._v(" 3. 사용자 정의 테마 스캐폴딩")]),s._v(" "),a("p",[s._v("사용자 정의 테마 뼈대를 복사하는 CLI 도구를 제공합니다.\n다음 명령을 실행해 기본 골격 파일을 다운로드(복사) 할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ npx @semantic-ui-react/bootstrap\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("직접 사용자 정의 테마 스캐폴딩을 복사하고 싶을 경우 아래와 같이 수행합니다.")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("node_modules/semantic-ui-less/_site")]),s._v(" 폴더를 복사하여 "),a("code",[s._v("src/semantic-ui/site")]),s._v(" 위치에 붙여넣습니다.")]),s._v(" "),a("li",[a("code",[s._v("node_modules/semantic-ui-less/theme.config.example")]),s._v("을 "),a("code",[s._v("src/semantic-ui/theme.config")]),s._v(" 위치에 복사 붙여넣기 합니다.")])])]),s._v(" "),a("h4",{attrs:{id:"theme-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-config"}},[s._v("#")]),s._v(" theme.config")]),s._v(" "),a("p",[a("code",[s._v("src/semantic-ui/theme.config")]),s._v(" 파일을 열어 아래와 같이 일부 사항을 변경해야 합니다.")]),s._v(" "),a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*******************************\n            Folders\n*******************************/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@themesFolder "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'themes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@siteFolder  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../src/semantic-ui/site'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("multiple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~semantic-ui-less/theme.less"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@fontPath "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" '../../../themes/@")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("assets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fonts'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"less-파일-호출"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less-파일-호출"}},[s._v("#")]),s._v(" LESS 파일 호출")]),s._v(" "),a("p",[a("code",[s._v("src/index.js")]),s._v(" 파일에서 "),a("code",[s._v("semantic.less")]),s._v(" 파일을 가져와야 합니다.")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'semantic-ui-less/semantic.less'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("이어서 프로젝트 시작 명령을 실행합니다.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("code",[s._v("src/semantic-ui/site/globals/site.variables")]),s._v(" 파일을 열어\n다음과 같이 변수를 등록해 사용하여 사용자 정의 테마를 구성할 수 있습니다.")]),s._v(" "),a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@primaryColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),s._v(" #002f4e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@pageBackground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")])]),s._v(" #eff0f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("<body>")]),s._v(" 요소의 기본 색상 및 배경 색상이 변경된 결과가 화면에 렌더링 될 것입니다. 🚀")]),s._v(" "),a("h2",{attrs:{id:"영상-강의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#영상-강의"}},[s._v("#")]),s._v(" 영상 강의")]),s._v(" "),a("p",[s._v("촬영 후 업데이트 될 예정입니다.")])])}),[],!1,null,null,null);t.default=n.exports}}]);