
var id = 0
const uuid = () => ++id

export const createDummyMessages = () => {
  return [
    createMessage({
      title: 'Engineering',
      short: 'Shipyard upgrade complete.',
      body: 'Shipyard upgrade complete. Engineers can now create grade III components. Materials like ardite, kevlar and orichalcum composite can now be used to craft higher-tier components.'
    }),
    createMessage({
      title: 'Comms',
      short: 'Trading vessel from Delta Pavonis is due.',
      body: 'A Panther class trading vessel from Delta Pavonis is en route to Andersons Landing. Captain Amir Zhohani will request docking permission when within range. The trader has a wide range of goods to trade, including ice, material sheeting and semiconductors.'
    }),
    createMessage({
      title: 'Operations',
      short: 'Air quality is falling.',
      body: 'Air quality is now below 20%, if this continues the air will become unbreathable. This is undesirable.'
    }),
    createMessage({
      title: 'Engineering',
      short: 'Shipyard upgrade complete.',
      body: 'Shipyard upgrade complete. Engineers can now create grade III components. Materials like ardite, kevlar and orichalcum composite can now be used to craft higher-tier components.'
    }),
    createMessage({
      title: 'Comms',
      short: 'Trading vessel from Delta Pavonis is due.',
      body: 'A Panther class trading vessel from Delta Pavonis is en route to Andersons Landing. Captain Amir Zhohani will request docking permission when within range. The trader has a wide range of goods to trade, including ice, material sheeting and semiconductors.'
    }),
    createMessage({
      title: 'Operations',
      short: 'Air quality is falling.',
      body: 'Air quality is now below 20%, if this continues the air will become unbreathable. This is undesirable.'
    }),
    createMessage({
      title: 'Engineering',
      short: 'Shipyard upgrade complete.',
      body: 'Shipyard upgrade complete. Engineers can now create grade III components. Materials like ardite, kevlar and orichalcum composite can now be used to craft higher-tier components.'
    }),
    createMessage({
      title: 'Comms',
      short: 'Trading vessel from Delta Pavonis is due.',
      body: 'A Panther class trading vessel from Delta Pavonis is en route to Andersons Landing. Captain Amir Zhohani will request docking permission when within range. The trader has a wide range of goods to trade, including ice, material sheeting and semiconductors.'
    }),
    createMessage({
      title: 'Operations',
      short: 'Air quality is falling.',
      body: 'Air quality is now below 20%, if this continues the air will become unbreathable. This is undesirable.'
    }),
    createMessage({
      title: 'Engineering',
      short: 'Shipyard upgrade complete.',
      body: 'Shipyard upgrade complete. Engineers can now create grade III components. Materials like ardite, kevlar and orichalcum composite can now be used to craft higher-tier components.'
    }),
    createMessage({
      title: 'Comms',
      short: 'Trading vessel from Delta Pavonis is due.',
      body: 'A Panther class trading vessel from Delta Pavonis is en route to Andersons Landing. Captain Amir Zhohani will request docking permission when within range. The trader has a wide range of goods to trade, including ice, material sheeting and semiconductors.'
    }),
    createMessage({
      title: 'Operations',
      short: 'Air quality is falling.',
      body: 'Air quality is now below 20%, if this continues the air will become unbreathable. This is undesirable.'
    })
  ]
}

export const createMessage = ({
  title,
  short,
  body
}) => ({
  id: `msg${uuid()}`,
  isRead: false,
  title,
  short,
  body
})
