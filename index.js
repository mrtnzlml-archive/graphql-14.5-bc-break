const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        args: {
          name: {
            type: GraphQLNonNull(GraphQLString)
          }
        },
        resolve(_, { name }) {
          return name ? name :'world';
        },
      },
    },
  }),
});

// This seems to be a valid query? The name is required BUT I am giving it the default value...
const query = 'query($name: String! = "MyName") { hello(name: $name) }';

graphql(schema, query).then(result => {
  console.log(result);
});
