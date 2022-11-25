import { faker } from '@faker-js/faker'
import rdf from 'rdf-ext'
import { ns } from '../namespaces.js'

function attachNewAddress ({ pointer }, uri) {
  const streetAddress = faker.address.streetAddress()
  const cityName = faker.address.cityName()
  const state = faker.address.stateAbbr()
  const postalCode = faker.address.zipCodeByState(state)
  return pointer.
    addOut(ns.schema.address, uri, address => {
      address.addOut(ns.rdf.type, ns.schema.PostalAddress).
        addOut(ns.schema.addressLocality, rdf.literal(cityName)).
        addOut(ns.schema.streetAddress, rdf.literal(streetAddress)).
        addOut(ns.schema.addressRegion, rdf.literal(state)).
        addOut(ns.schema.postalCode, rdf.literal(postalCode))
    })
}

export { attachNewAddress }
