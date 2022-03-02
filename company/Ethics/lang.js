////////////////////////////////////////////////언어팩
  // 한국인 일때 한국어로 보이게 설정하는 방법
//   const isKorean = navigator.language === "ko-KR";
// if (isKorean) {
//   document
//     .getElementById("lang-select")
//     .options[1].setAttribute("selected", true);
// }

i18next.init(
  {
    // lng: isKorean ? "ko" : "en", 한국인 설정할때 이것도 해야함
    lng: "zh",
    debug: true,
    resources: {
      en: {
        translation: {
          //헤더
          exchange: "Exchange",
          companyIntroduce: "companyIntroduce",
          vision: "vision",
          ci: "C.I",
          ethics: "Ethics",
          history: "History",
          businessIntroduce: "Business",
          skill: "Skill",
          partner: "Partner",
          customerSupport: "Support",
          manual: "Manual",
          directions: "Directions",
          pr: "PR",
          news: "News",
          event: "Events",
           //메인페이지
           
        }
      },
      zh: {
        translation: {
          //헤더
          exchange:"交易所",
          companyIntroduce: "发展",
          vision: "发展",
          ci: "C.I",
          ethics: "道德管理",
          history: "历史",
          businessIntroduce: "业务介绍",
          skill: "技术",
          partner: "伙伴",
          customerSupport: "客户支持",
          manual: "手册",
          directions: "交通方式",
          pr: "PR",
          news: "新闻",
          event: "活动",
            //회사소개 - C.I페이지
            s1lang01: "VAEX 道德管理政策",
            s1lang02: "HOME > 公司介绍 > 道德管理",
            s2lang01: "面向简化的直观标识它表达了VAEX和未来发展的可能性表达了验证和 A.I"
        }
      },
      ko: {
        translation: {
          //헤더
          exchange: "거래소",
          companyIntroduce: "회사소개",
          vision: "비전",
          ci: "C.I",
          ethics: "윤리경영",
          history: "연혁",
          businessIntroduce: "사업소개",
          skill: "기술",
          partner: "파트너",
          customerSupport: "고객지원",
          manual: "메뉴얼",
          directions: "오시는길",
          pr: "PR",
          news: "뉴스",
          event: "이벤트",
          //회사소개 - C.I페이지
          s1lang01: "VAEX 윤리경영 방침",
          s1lang02: "HOME > 회사소개 > 윤리경영",
          s2lang01: " 우리회사는 글로벌 경영을위해 보다 진취적이면서 효율적인 움직임으로 "
        }
      }
    }
  },
  function(err, t) {
    if (err) {
      console.error(err);
    } else {
      updateContent();
    }
  }
);
function updateContent() {
  //헤더
  document.getElementById("exchange").innerHTML = i18next.t("exchange");
  document.getElementById("companyIntroduce").innerHTML = i18next.t("companyIntroduce");
  document.getElementById("vision").innerHTML = i18next.t("vision");
  document.getElementById("ci").innerHTML = i18next.t("ci");
  document.getElementById("ethics").innerHTML = i18next.t("ethics");
  document.getElementById("history").innerHTML = i18next.t("history");
  document.getElementById("businessIntroduce").innerHTML = i18next.t("businessIntroduce");
  document.getElementById("skill").innerHTML = i18next.t("skill");
  document.getElementById("partner").innerHTML = i18next.t("partner");
  document.getElementById("customerSupport").innerHTML = i18next.t("customerSupport");
  document.getElementById("manual").innerHTML = i18next.t("manual");
  document.getElementById("directions").innerHTML = i18next.t("directions");
  document.getElementById("pr").innerHTML = i18next.t("pr");
  document.getElementById("news").innerHTML = i18next.t("news");
  document.getElementById("event").innerHTML = i18next.t("event");
  //회사소개 - C.I페이지
   document.getElementById("s1lang01").innerHTML = i18next.t("s1lang01");
   document.getElementById("s1lang02").innerHTML = i18next.t("s1lang02");
   document.getElementById("s2lang01").innerHTML = i18next.t("s2lang01");
}
i18next.on("languageChanged", () => {
  updateContent();
});