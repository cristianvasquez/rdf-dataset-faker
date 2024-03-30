import grapoi from 'grapoi'
import rdf from 'rdf-ext'
import { ns } from '../namespaces.js'

function alice () {
  ns.ex = rdf.namespace('http://example.org/')
  const result = grapoi({ dataset: rdf.dataset(), factory: rdf }).
    node(ns.ex.WhiteRabbit).
    addOut(ns.schema.address, ns.ex.address, address => {
      address.addOut(ns.rdf.type, ns.schema.PostalAddress).
        addOut(ns.schema.streetAddress, rdf.literal('5 Wonderland Street')).
        addOut(ns.schema.postalCode, rdf.literal('4879')).
        addOut(ns.schema.email, rdf.literal('white@wonderland.com')).
        addOut(ns.schema.email, rdf.literal('rabbit@hotmailz.com')).
        addOut(ns.schema.name, rdf.literal('Postal address'))
    }).

    addOut(ns.foaf.img, rdf.namedNode(
      'https://miro.medium.com/max/720/1*HZazTjGg9EBSOoz34IN-tA.jpeg')).
    addOut(ns.rdfs.label, rdf.literal('Coniglio bianco', 'it')).
    addOut(ns.rdfs.label, rdf.literal('Conejo blanco', 'es')).
    addOut(ns.rdfs.label, rdf.literal('White rabbit', 'en')).
    addOut(ns.foaf.knows, ns.ex.Alice, alice => {
      alice.addOut(ns.rdf.type, ns.ex.Person).
        addOut(ns.schema.name, rdf.literal('Alice')).
        addOut(ns.foaf.img, rdf.namedNode(
          'https://miro.medium.com/max/1100/1*xupcHn3b0jEFPkjvuH5Pbw.jpeg'))
    }).addList(ns.ex.schedule, [
      ns.ex.wakingUp, ns.ex.drinkTea])
  result.node(ns.ex.drinkTea).
    addOut(ns.schema.name, rdf.literal('Drink tea')).
    addOut(ns.ex.when, rdf.literal('During the morning'))
  return result.dataset
}

export { alice }
