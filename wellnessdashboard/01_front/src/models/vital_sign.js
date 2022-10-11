export default class VitalSign {
  constructor(username, pulse=null, bp=null, temp=null, oxygen=null, glucose=null, weight=null) {
    this.username = username;
    this.pulse = pulse;
    this.bp = bp;
    this.temp = temp;
    this.oxygen = oxygen;
    this.glucose = glucose;
    this.weight = weight;
  }
}
