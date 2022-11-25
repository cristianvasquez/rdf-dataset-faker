import graphGenerator from 'ngraph.generators'
import rdf from 'rdf-ext'
import {
  attachNewAddress, newPerson, relatePeople,
} from './generators/index.js'
import { ns } from './namespaces.js'


function createGraph (nGraph, { namespace, namedGraph }) {

  const pointer = rdf.clownface({ dataset: rdf.dataset(), factory: rdf })

  const uri = (id) => namespace[id]

  nGraph.forEachNode(function (node) {
    const person = newPerson({ pointer }, uri(node.id))
    attachNewAddress({ pointer: person }, rdf.blankNode())
  })

  nGraph.forEachLink(function (link) {
    relatePeople({ pointer }, uri(link.fromId), uri(link.toId))
  })

  return pointer.dataset
}

export {createGraph}
