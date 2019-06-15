type InsertResponse = SuccessResponse | FailResponse;

interface SuccessResponse {
    success: true;
    insertedId: string;
}

interface FailResponse {
    success: true;
    message: string;
}
