const xml2js = require('xml2js')
const fs = require('fs')
const events = require('events')

module.exports = class DXCCjs extends events.EventEmitter{
  constructor(path=null) {
    super()

    if(!path) {
      this.prefixes = {}
    } else {
      this.loadPrefixes(path)
    }
  }

  loadPrefixes(path) {
    let parser = new xml2js.Parser()
    fs.readFile(path, (err, data) => {
      parser.parseString(data, (err, result) => {
        if(err) {
          console.log('An error occured parsing the given document')
          return
        }
        this.prefixes = result.clublog.prefixes[0].prefix
        this.emit('loaded')
      })
    })
  }

  checkCall(call) {
    let foundPrefix = null;
    for(let i = 0; i < this.prefixes.length; i++) {
      if (call.indexOf(this.prefixes[i].call[0]) == 0) {
        return this.prefixes[i]
      }
    }
    return {}
  }
}
