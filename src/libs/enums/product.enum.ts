export enum ProductSize {
  SMALL = "소형",
  NORMAL = "중형",
  LARGE = "대형",
  NEW = "신제폼",
  TRACTOR_ATTACHED = '트랙터부착형 제초기'
}

export enum ProductVolume {
  LOW = "소형 (18 미만/h)",
  MEDIUM = "중형 (350 톤/h)",
  HIGH = "대형 (600 이상/h)"
}

export enum ProductStatus {
  PAUSE = "PAUSE",
  PROCESS = "PROCESS",
  DELETE = "DELETE",
}
export enum ProductCollection {
  NEW_ARRIVALS = "신제품",               // Yangi kelgan mahsulotlar kolleksiyasi
  BEST_SELLERS = "인기제품",             // Ommabop / Ko'p sotilganlar
  FARMING_SPECIAL = "영농부산물 처리기",  // Qishloq xo'jaligi chiqindilarini qayta ishlash
  TRACTOR_LINE = "트랙터 연동 제초기"       // Traktorlar uchun maxsus stanoq
}