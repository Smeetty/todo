// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { BadRequest } from "@feathersjs/errors";
import { Hook, HookContext } from "@feathersjs/feathers";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    if (context.data.userId || context.data.text) {
      throw new BadRequest(
        `You cannot change user ID and ID of todo list in this endpoint!`
      );
    }
    return context;
  };
};
