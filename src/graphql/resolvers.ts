import { v4 as uuid } from 'uuid'
import { users } from '../../database/mockdata';
const { getToken } = require("../util")
const { AuthenticationError } = require('apollo-server');
const { fetchUser, vendorList, fetchVendors } = require('../../database/mockdata');


// Resolvers define the technique for fetching the types defined in the schema.

interface TokenPayloadInterface {
    name: string,
    email: string,
    iat: number,
    exp: number
}

interface VendorInterface {
    id: string,
    name: string,
    type: string,
    address: string
}
type VendorReqType = Omit<VendorInterface, 'id'>;

export const resolvers = {
    Query: {
        me: (parent: undefined, args: any, context: any, info: any) => {
            if (context.loggedIn) {
                return {
                    name: context.user.name,
                    email: context.user.email,
                    iat: context.user.iat,
                    exp: context.user.exp,
                }
            } else {
                throw new AuthenticationError("Please Login Again!")
            }
        },
        
        async vendors(parent: any, args: any, ctx: any, info: any) {
            // ctx is the context defined at > new ApolloServer({ ... context: {} });
            if (ctx.loggedIn) {
                const vendors = await fetchVendors()
                return vendors;
            } else {
                throw new AuthenticationError("Please Login Again!")
            }
            
        },
        async users(parent: any, args: any, ctx: any, info: any) {
            const users = await fetchUser();
            return users
        }
    },
    Mutation: {
        login: async (parent: any, args: any, context: any, info: any) => {
            const users = await fetchUser();
            const user = users.find((user: any) => user.email === args.email && user.password === args.password);

            // const isMatch = await comparePassword(args.password, user.password)
            
            if (user) {
                const token = getToken(user)
                return { ...user, token };
            } else {
                throw new AuthenticationError("Wrong Password!")
            }
        },
        createVendor(parent: undefined, args: VendorReqType, ctx: any, info: any) {
            const vendor: VendorInterface = {
                id: uuid(),
                name: args.name,
                type: args.type,
                address: args.address
            }
            vendorList.push(vendor);
            return vendor;
        }
    }
};
