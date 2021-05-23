import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://www.tuidog.com/',
      },
      {
        label: 'Liquidity',
        href: 'http://www.tuidog.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xd0b517949dcd0e758108e059f54cf72ea9d5b2cd',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/singledog-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/singledog-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/singledogswap/',
      },
      {
        label: 'Docs',
        href: 'https://singledogswap.gitbook.io/singledog-finance/',
      },
      {
        label: 'Blog',
        href: 'https://singledogfinance.medium.com/',
      },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://docs.google.com/',
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://www.singledogdefi.com/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/singledog-finance',
  },
]

export default config
