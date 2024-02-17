export const getData = () => {
  const data = [
    {
      coin: 'ETH',
      balance: '0.01',
      icon : 'https://www.datocms-assets.com/51952/1635345356-eth.png'
    },
    {
      coin: 'WETH',
      balance: '0.2',
      icon : 'https://www.datocms-assets.com/51952/1639061558-weth.png'
    },
    {
      coin: 'WBTC',
      balance: '0.001',
      icon : 'https://www.datocms-assets.com/51952/1638999972-wbtc.png'
    },
    {
      coin: 'USDT',
      balance: '90',
      icon : 'https://www.datocms-assets.com/51952/1638913308-usdt.png'
    },
    {
      coin: 'USDC',
      balance: '80',
      icon : 'https://www.datocms-assets.com/51952/1635446602-usdc.png'
    },
    {
      coin: 'BNB',
      balance: '1.3',
      icon : 'https://www.datocms-assets.com/51952/1635800346-bnb.png'
    },
  ];
  return [...data];
};