"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = exports.Message = exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
}
exports.User = User;
class Message {
    constructor(from, content) {
        this.from = from;
        this.content = content;
    }
}
exports.Message = Message;
class ChatMessage extends Message {
    constructor(from, content) {
        super(from, content);
    }
}
exports.ChatMessage = ChatMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9jaGF0LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsSUFBSTtJQUNiLFlBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztDQUN2QztBQUZELG9CQUVDO0FBRUQsTUFBYSxPQUFPO0lBQ2hCLFlBQW9CLElBQVUsRUFBVSxPQUFlO1FBQW5DLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQztDQUM5RDtBQUZELDBCQUVDO0FBRUQsTUFBYSxXQUFZLFNBQVEsT0FBTztJQUNwQyxZQUFZLElBQVUsRUFBRSxPQUFlO1FBQ25DLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNKO0FBSkQsa0NBSUMifQ==