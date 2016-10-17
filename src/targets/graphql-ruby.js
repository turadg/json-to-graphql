
const schemaTemplate = (fields, types) => `
require_relative "../find_loader"
require_relative "../foreign_key_loader"
${types.join('\n')}
`

const queryTemplateWithArgs = (
  name,     // field name
  type,     // GraphQL Type
  args,     // mapped args
  resolve   // resolve method
) => `
  ${name}: {
    type: ${type},
    args: {${args}},
    resolve: ${resolve}
  }
`

const typeTemplate = (type, name, fields) => `
${type} = GraphQL::ObjectType.define do
  name "${name}"
  description "???"

  ${fields}
end
`

const scalarTypeTemplate = (name, type) => {
  return `
  field :${name} do
    description "???"
    type types[${type}]
    resolve -> (obj, args, ctx) {
      # TODO: Implement resolver for ${name}
    }
  end
  `
}

const scalarTypeTemplateWithoutResolve = (name, type) => `
  ${name}: {
    description: 'enter your description',
    type: ${type}
  }
`

const objectTypeTemplate = (name, resolve) => `
${name}: {
  description: 'enter your description',
  type: ${name}Type,
  // TODO: Implement resolver for ${name}Type
  resolve: () => (${resolve}),
}
`

module.exports = {
  schemaTemplate,
  typeTemplate,
  scalarTypeTemplate,
  scalarTypeTemplateWithoutResolve,
  objectTypeTemplate,
  queryTemplateWithArgs,
}
