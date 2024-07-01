// Demo code (the actual new parser character stream implementation)

function StringStream(string) {
  this.pos = 0
  this.string = string
}

StringStream.prototype = {
  done() {
    return this.pos >= this.string.length
  },
  peek() {
    return this.string.charAt(this.pos)
  },
  next() {
    if (this.pos < this.string.length) return this.string.charAt(this.pos++)
  },
  eat(match) {
    const ch = this.string.charAt(this.pos)
    let ok

    if (typeof match == 'string') ok = ch === match
    else ok = ch && match.test ? match.test(ch) : match(ch)
    if (ok) {
      this.pos++
      return ch
    }
  },
  eatWhile(match) {
    const start = this.pos
    while (this.eat(match));
    if (this.pos > start) return this.string.slice(start, this.pos)
  },
  backUp(n) {
    this.pos -= n
  },
  column() {
    return this.pos
  },
  eatSpace() {
    const start = this.pos
    while (/\s/.test(this.string.charAt(this.pos))) this.pos++
    return this.pos - start
  },
  match(pattern, consume, caseInsensitive) {
    if (typeof pattern == 'string') {
      function cased(str) {
        return caseInsensitive ? str.toLowerCase() : str
      }
      if (cased(this.string).indexOf(cased(pattern), this.pos) === this.pos) {
        // eslint-disable-next-line no-undef
        if (consume !== false) this.pos += str.length
        return true
      }
    } else {
      const match = this.string.slice(this.pos).match(pattern)
      if (match && consume !== false) this.pos += match[0].length
      return match
    }
  },
}
