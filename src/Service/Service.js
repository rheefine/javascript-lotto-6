export default class Service {
  #myLotto;

  #winNumber;

  constructor(myLotto, winNumber) {
    this.#myLotto = myLotto;
    this.#winNumber = winNumber;
  }

  compareEachNumber() {
    this.#myLotto.getQuickPicks().forEach((quickPick) => {
      this.compareNumber(quickPick);
    });
  }

  compareNumber(quickPick) {
    const intersection = quickPick.filter((num) => this.#winNumber.getCommonWinNum().includes(num));
    if (intersection.length === 5 && quickPick.includes(this.#winNumber.getBonusWinNum())) {
      this.#myLotto.setWinCount(-intersection.length);
    }
    if (!(intersection.length === 5 && quickPick.includes(this.#winNumber.getBonusWinNum()))) {
      this.#myLotto.setWinCount(intersection.length);
    }
  }
}