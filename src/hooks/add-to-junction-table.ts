// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from "@feathersjs/feathers";
import checkUserExist from "./functions/checkUserExist";
import { Json } from "sequelize/types/utils";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const users = context.app.services.users.Model;
    console.log(users.findOne());
    const sequelize_connected = context.app.get("sequelizeClient");

    const add_users: number[] = context.data.users;

    // Check if user exist in database
    for (const id of add_users) {
      await checkUserExist(id, users);

      // sequelize_connected.query(`INSERT INTO listUsers (userId, todoId, cratedAt, updatedAt) VALUES( null,${id}, ${}, ${}, ${} )`).then((res: Json) => {
      //   console.log(res);
      // });
    }

    return context;
  };
};
