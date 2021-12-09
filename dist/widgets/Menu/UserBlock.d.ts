import React from "react";
import { Login } from "../WalletModal/types";
import { SocialEntry } from "./types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    cakeContract: any;
    cakePriceUsd?: number;
    priceLink: string;
    socials: Array<SocialEntry>;
}
declare const SocialEntry: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
declare const UserBlock: React.FC<Props>;
export default UserBlock;
