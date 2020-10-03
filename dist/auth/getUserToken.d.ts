export declare let token: string;
interface Args {
    username: string;
    password: string;
    type?: 2;
}
declare const getUserToken: ({ username, password, type }: Args) => Promise<string>;
export default getUserToken;
