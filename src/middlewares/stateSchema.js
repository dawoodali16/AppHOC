export default {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'http://example.com/example.json',
  type: 'object',
  readOnly: false,
  writeOnly: false,
  minProperties: 0,
  title: 'The Root Schema',
  description: 'The root schema comprises the entire JSON document.',
  additionalProperties: true,
  required: ['comments', 'auth'],
  properties: {
    comments: {
      $id: '#/properties/comments',
      type: 'array',
      readOnly: false,
      writeOnly: false,
      uniqueItems: false,
      minItems: 0,
      minContains: 1,
      title: 'The Comments Schema',
      description: 'An explanation about the purpose of this instance.',
      default: [],
      additionalItems: true,
      items: {
        $id: '#/properties/comments/items',
        type: 'string',
        readOnly: false,
        writeOnly: false,
        minLength: 0,
        title: 'The Items Schema',
        description: 'An explanation about the purpose of this instance.',
        default: '',
        examples: ['comment #1', 'comment #2']
      }
    },
    auth: {
      $id: '#/properties/auth',
      type: 'boolean',
      readOnly: false,
      writeOnly: false,
      title: 'The Auth Schema',
      description: 'An explanation about the purpose of this instance.',
      default: false,
      examples: [true]
    }
  }
};
