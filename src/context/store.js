const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isLogin: JSON.parse(sessionStorage.getItem("isLogin")) || null,
  error: null,
  userInfo: JSON.parse(sessionStorage.getItem("userInfo")) || null,
  // d-test-list
  dtestList: [],
  // 인바디 관련 값들
  dateTimes: [],
  previousDate: "",
  obesityData: [],
  obesityData1: [],
  obesityData2: [],
  obesityData3: [],
  obesityData4: [],
  bodyConditionData: [],
  bodyConditionData1: [],
  bodyConditionData2: [],
  bodyConditionData3: [],
  bodyConditionData4: [],
  bodyCompositionData: [],
  bodyCompositionData1: [],
  bodyCompositionData2: [],
  bodyCompositionData3: [],
  bodyCompositionData4: [],
  // 투두리스트 그래프 퍼센트
  completionPercent: 0,
  // 마지막 접속일
  lastAccessDate: window.localStorage.lastAccessDate
};

export default INITIAL_STATE;
