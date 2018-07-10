K3AM's DXCCjs for NPM
=========

A lightweight utility to determine the dxcc entity information from a callsign's prefix

This is my second NPM package, and I'm relatively new to Javascript. As I learn, breaking changes are not only possible, but likely. If you have feedback, I would love to hear it.

## Installation

  `npm install dxccjs`

## Usage

Using the included file in ./data/cty.xml (current as of July 10, 2018, courtesy of [ClubLog](http://clublog.org/)), you can instantiate a new instance of dxccjs and check a callsign as follows.

    let dxcc = new dxccjs('./data/cty.xml')

    asdf.on('loaded', () => {
      console.log( dxcc.checkCall('LU1EEP') )
    })

Since it may take some time to parse the XML file, the `loaded` event is triggered when it has finished loading. Checking a call will result in the following object being returned:

    { '$': { record: '1722' },
      call: [ 'LU' ],
      entity: [ 'ARGENTINA' ],
      adif: [ '100' ],
      cqz: [ '13' ],
      cont: [ 'SA' ],
      long: [ '-58.4' ],
      lat: [ '-34.6' ] }

If a matching prefix is not found, `{ }` is returned.

## Tests

  Tests are coming soon.

## Contributing

This is my second npm module. Send me PRs or comments. I'm here to learn!
