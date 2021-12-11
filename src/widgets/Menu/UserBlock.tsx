import React, { useState } from "react";
import styled from "styled-components";
import { Dropdown, Flex, Link, PancakeRoundIcon, Skeleton, SvgProps } from "../..";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import * as IconModule from "./icons";
import { MENU_ENTRY_HEIGHT } from "./config";
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

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PriceLink = styled.a`
  margin-left: 10px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const UserBlock: React.FC<Props> = ({ account, login, logout, cakeContract, priceLink, socials, cakePriceUsd }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const [isPending, setIsPending] = useState(false)
  const addToken = async ()=>{
    setIsPending(true)
    const tokenSymbol = await cakeContract.methods.symbol().call();
    const tokenDecimals = await cakeContract.methods.decimals().call();
    await (window as any).ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: cakeContract._address,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: '',
        },
      },
    });
    setIsPending(false)
  }
  return (
    <Flex alignItems="center">
      <SocialEntry>
        <Flex>
          {socials != null && socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "10px" : 0;
            if (social.items) {
              return (
                <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
                  {social.items.map((item) => (
                    <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                      {item.label}
                    </Link>
                  ))}
                </Dropdown>
              );
            }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </Flex>
      </SocialEntry>      
      {cakePriceUsd ? (
          <PriceLink href={priceLink} target="_blank">
            <PancakeRoundIcon width="24px" mr="8px" />
            <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
      {cakeContract != null &&
        <Button onClick={addToken} disabled={isPending} ml={10} mr={10} size="sm" padding={0} style={{background: "transparent", border: "none"}}>
          <img src="/images/tokens/metamask.png" alt="metamask" style={{width: "30px"}}/>
        </Button>
      }
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </Flex>
  );
};

export default UserBlock;
