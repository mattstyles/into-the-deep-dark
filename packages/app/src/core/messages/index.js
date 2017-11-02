
var id = 0
const uuid = () => ++id

export const createDummyMessages = () => {
  return [
    createMessage({
      title: 'Engineering',
      short: 'Shipyard upgrade complete.',
      body: `
# Shipyard upgrade complete.

Engineers can now create grade III components and craft parts.

Materials like [ardite](/product/ardite), [kevlar](/product/kevlar) and [carbon composite](/product/carbon-composite) can now be used to craft components.
      `
    }),
    createMessage({
      title: 'Comms',
      short: 'Trading vessel from Delta Pavonis is due.',
      body: `
# Trade mission incoming

A Panther class trading vessel from Delta Pavonis is en route to Andersons Landing.

Captain Amir Zhohani will request docking permission when within range. The trader has a wide range of goods to trade, including ice, material sheeting and semiconductors.
      `
    }),
    createMessage({
      title: 'Operations',
      short: 'Air quality is falling.',
      body: `
# Operations

<div><Custom /></div>

Air quality is now below 20% and still falling.
      `
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
