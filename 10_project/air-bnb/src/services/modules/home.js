import hyRequest from ".."

export const getHomeGoodPriceData = () => {
  return hyRequest.get({
    url: "home/goodPrice"
  })
}

export const getHomeHighScoreData = () => {
  return hyRequest.get({
    url: "home/highScore"
  })
}

export const getHomeDiscountData = () => {
  return hyRequest.get({
    url: "home/discount"
  })
}

export const getHomeRecommendData = () => {
  return hyRequest.get({
    url: "home/hotrecommenddest"
  })
}

export const getHomeLongForData = () => {
  return hyRequest.get({
    url: "home/longfor"
  })
}

export const getHomePlusData = () => {
  return hyRequest.get({
    url: "home/plus"
  })
}