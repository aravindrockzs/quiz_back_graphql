const graphql = require('graphql');

const Topic = require('../models/topic');

const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } =
  graphql;

const TopicType = new GraphQLObjectType({
  name: 'Topic',
  fields: {
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    unit: {
      type: GraphQLString,
    },
    chapter: {
      type: GraphQLString,
    },
    exam: {
      type: GraphQLString,
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    topic: {
      type: new GraphQLList(TopicType),
      resolve(parent, args) {
        return Topic.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTopic: {
      type: TopicType,
      args: {
        name: {
          type: GraphQLString,
        },
        unit: {
          type: GraphQLString,
        },
        chapter: {
          type: GraphQLString,
        },
        exam: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        let topic = new Topic({
          name: args.name,
          unit: args.unit,
          chapter: args.chapter,
          exam: args.exam,
        });

        return topic.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
