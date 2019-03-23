import Mutations from './mutations';
import Queries from './queries';
import Subscriptions from './subscriptions';

const resolvers = { ...Queries, ...Mutations, ...Subscriptions };
export default resolvers;
