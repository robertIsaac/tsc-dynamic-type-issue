type AuthResponse = SuccessResponse | FailResponse;

interface SuccessResponse {
    success: true;
    token: string;
}

interface FailResponse {
    success: true;
    message: string;
}
