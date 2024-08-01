import { ApiError } from '@burand/functions/exceptions';
import { env } from 'node:process';
export function ensurePagarMeRequest(request, _, nextFunction) {
    const { authorization } = request.headers;
    if (!authorization) {
        throw new ApiError('Authentication is missing', 'application/token-missing');
    }
    const parts = authorization.split(' ');
    if (parts.length !== 2) {
        throw new ApiError('Token malformatted.', 'application/token-malformatted', 406);
    }
    const [scheme, token] = parts;
    if (!/^Basic$/i.test(scheme)) {
        throw new ApiError('Token malformatted.', 'application/token-malformatted', 406);
    }
    const [user, password] = Buffer.from(token, 'base64').toString().split(':');
    if (env.PAGARME_AUTH_USER !== user || env.PAGARME_AUTH_PASSWORD !== password) {
        throw new ApiError('Invalid token', 'application/invalid-token', 401);
    }
    nextFunction();
}
