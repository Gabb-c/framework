"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorePrecondition = void 0;
const Precondition_1 = require("../lib/structures/Precondition");
class CorePrecondition extends Precondition_1.Precondition {
    run(message) {
        return message.guild !== null;
    }
}
exports.CorePrecondition = CorePrecondition;
//# sourceMappingURL=GuildOnly.js.map