export default {
  getRandomNum(max: number = 1, min: number = 0) {
    return Math.round(Math.random() * (max - min) + min)
  }
}
