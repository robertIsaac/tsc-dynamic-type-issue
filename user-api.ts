import { AuthResponse } from "./auth-response";
import { InsertResponse } from "./insert-response";

class UserApi {
    insertUser(username: string, password: string): InsertResponse {
        return {
            success: true,
            insertedId: 'id'
        };
    }

    login(username: string, password: string): AuthResponse {
        return {
            success: true,
            token: 'asd'
        };
    }
}
