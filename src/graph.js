import grapoi from 'grapoi'
import rdf from 'rdf-ext'
import {
  attachNewAddress,
  newPerson,
  relatePeople,
} from './generators/index.js'

function createGraph (nGraph, { uriResolver }) {

  const pointer = grapoi({ dataset: rdf.dataset(), factory: rdf })

  nGraph.forEachNode(function (node) {
    const person = newPerson({ pointer }, uriResolver(node.id))
    attachNewAddress({ pointer: person }, rdf.blankNode())
  })

  nGraph.forEachLink(function (link) {
    relatePeople({ pointer }, uriResolver(link.fromId), uriResolver(link.toId))
  })

  return pointer.dataset
}

export { createGraph }
