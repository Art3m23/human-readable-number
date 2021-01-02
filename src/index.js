module.exports = function toReadable (number) {
  let string = number.toString(),units, tens, scales, start, end, ints, i, word, words
    if (parseInt(string) === 0) {
        return 'zero'
    }
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    start = string.length
    let arr = []
    while (start > 0) {
        end = start
        arr.push(string.slice((start = Math.max(0, start - 3)), end));
    }
    words = []
    for (i = 0; i < arr; i++) {
    let chunk = parseInt(arr[i])
    if (chunk) {
        ints = arr[i].split('').reverse().map(parseFloat)
        if (ints[1] === 1) {
            ints[0] += 10
        }
        if ((word = units[ints[0]])) {
            words.push(word)
        }
        if ((word = tens[ints[1]])) {
            words.push(word)
        }
        if ((word = units[ints[2]])) {
            words.push(word + ' hundred')
        }
    }
    }
  return words.reverse().join(' ')
}
