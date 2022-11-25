import { faker } from '@faker-js/faker'
import rdf from 'rdf-ext'
import { ns } from '../namespaces.js'

function newPerson ({ pointer }, uri) {

  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const fullName = `${firstName} ${lastName}`
  const email = faker.internet.email(firstName, lastName)

  return pointer.node(uri ?? rdf.blankNode()).
    addOut(ns.rdf.type, ns.schema.Person).
    addOut(ns.schema.image, rdf.namedNode(faker.image.avatar())).
    addOut(ns.schema.url, rdf.namedNode(faker.internet.url())).
    addOut(ns.schema.telephone, rdf.literal(faker.phone.number())).
    addOut(ns.schema.name, rdf.literal(fullName)).
    addOut(ns.schema.jobTitle, rdf.literal(faker.name.jobTitle())).
    addOut(ns.schema.email, rdf.namedNode(`mailTo:${email}`))

}

export { newPerson }
